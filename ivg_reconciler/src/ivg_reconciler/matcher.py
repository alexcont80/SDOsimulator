from __future__ import annotations

from datetime import date, timedelta
from typing import Optional

from .models import GinoRecord, SdoRecord, Correction, MissingSheet, AuditItem, ReconciliationResult, parse_intish, normalize_text

def _date_inside(g: GinoRecord, s: SdoRecord) -> bool:
    return s.admission <= g.event_date <= s.discharge


def _date_distance_to_stay(g: GinoRecord, s: SdoRecord) -> int:
    if _date_inside(g, s):
        return 0
    return min(abs((g.event_date - s.admission).days), abs((g.event_date - s.discharge).days))


def _residence_match(g: GinoRecord, s: SdoRecord) -> Optional[bool]:
    if not g.residence_comparable:
        return None
    if s.residence_state and s.residence_state not in ("ITALIA", "ITALY"):
        return False
    if not s.residence_name:
        return None
    return normalize_text(g.residence_name) == normalize_text(s.residence_name)


def _macro_procedure_match(g: GinoRecord, s: SdoRecord) -> Optional[bool]:
    if g.flow != "IVG" or not g.type_code:
        return None
    t = parse_intish(g.type_code)
    if t is None:
        return None
    surgical = any(str(p).startswith("69") for p in s.procedures)
    if t in (1, 2, 3):
        return surgical
    if t in (4, 5, 6):
        return not surgical
    return None


def _quarter_end(d: date) -> date:
    q = ((d.month - 1) // 3) + 1
    end_month = q * 3
    next_month = end_month + 1
    if next_month == 13:
        return date(d.year, 12, 31)
    return date(d.year, next_month, 1) - timedelta(days=1)


def _deduplicate_gino(records: list[GinoRecord]) -> tuple[list[GinoRecord], list[Correction], list[AuditItem]]:
    groups: dict[tuple, list[GinoRecord]] = {}
    for g in records:
        key = (g.flow, g.dob, g.event_date, g.residence_code, g.type_code)
        groups.setdefault(key, []).append(g)
    keep: list[GinoRecord] = []
    corrections: list[Correction] = []
    audits: list[AuditItem] = []
    for group in groups.values():
        if len(group) == 1:
            keep.append(group[0])
            continue
        sorted_group = sorted(group, key=lambda g: 0 if g.quarter_from_label == g.quarter_from_event else 1)
        canonical = sorted_group[0]
        keep.append(canonical)
        for dup in sorted_group[1:]:
            corrections.append(Correction(
                flow=dup.flow,
                gino_id=dup.record_id,
                sdo_nosologico="",
                item="TRIMESTRE/DUPLICATO",
                gino_value=f"{dup.quarter_label}; evento {dup.event_date.strftime('%d/%m/%Y')}",
                sdo_value=f"Record equivalente già presente come {canonical.record_id}",
                episode=f"DOB {dup.dob.strftime('%d/%m/%Y')}; evento {dup.event_date.strftime('%d/%m/%Y')}; residenza {dup.residence_name or dup.residence_code}",
                instruction="Rimuovere il duplicato/carry-over dal trimestre errato e mantenere un solo record nel trimestre determinato dalla data evento.",
                severity="MEDIA",
            ))
            audits.append(AuditItem("DUPLICATO_GINO", dup.flow, dup.record_id, f"Duplicato di {canonical.record_id}"))
    return keep, corrections, audits


def reconcile(gino_records: list[GinoRecord], sdo_records: list[SdoRecord]) -> ReconciliationResult:
    raw_gino_count = len(gino_records)
    gino, pre_corr, audit = _deduplicate_gino(gino_records)
    corrections = list(pre_corr)
    matched_sdo: set[str] = set()
    matched_pairs: dict[str, SdoRecord] = {}
    primary_gino_by_sdo: dict[str, GinoRecord] = {}
    matched_count = 0

    for g in gino:
        if g.quarter_from_label != "?" and g.quarter_from_label != g.quarter_from_event:
            corrections.append(Correction(
                flow=g.flow,
                gino_id=g.record_id,
                sdo_nosologico="",
                item="TRIMESTRE",
                gino_value=g.quarter_label,
                sdo_value=g.quarter_from_event,
                episode=f"DOB {g.dob.strftime('%d/%m/%Y')}; evento {g.event_date.strftime('%d/%m/%Y')}; residenza {g.residence_name or g.residence_code}",
                instruction="Correggere il trimestre di appartenenza in base alla data reale dell'evento.",
                severity="ALTA",
            ))

    for g in sorted(gino, key=lambda x: (x.flow, x.event_date, x.dob)):
        candidates = [s for s in sdo_records if s.flow == g.flow]
        scored = []
        for s in candidates:
            dob_match = g.dob == s.dob
            res_match = _residence_match(g, s)
            date_match = _date_inside(g, s)
            date_dist = _date_distance_to_stay(g, s)
            comparable = 2 + (1 if res_match is not None else 0)
            matches = int(dob_match) + int(date_match) + (int(res_match) if res_match is not None else 0)
            viable = (comparable == 3 and matches >= 2) or (comparable == 2 and dob_match and date_match)
            if not viable and dob_match and res_match is True and date_dist <= 14:
                viable = True
            dob_delta = abs((g.dob - s.dob).days)
            if not viable and date_match and res_match is True and dob_delta <= 31:
                viable = True
            if viable:
                score = matches * 100 - date_dist * 2 - min(dob_delta, 365)
                scored.append((score, matches, -date_dist, -dob_delta, s, dob_match, res_match, date_match))

        scored.sort(reverse=True, key=lambda x: (x[0], x[1], x[2], x[3]))
        if not scored:
            audit.append(AuditItem("GINO_SENZA_SDO", g.flow, g.record_id, "Nessun candidato SDO con almeno due item chiave concordanti"))
            continue

        best = scored[0]
        if len(scored) > 1 and scored[1][:4] == best[:4]:
            corrections.append(Correction(
                flow=g.flow,
                gino_id=g.record_id,
                sdo_nosologico=f"{best[4].nosologico} / {scored[1][4].nosologico}",
                item="MATCH NON DETERMINABILE",
                gino_value="Più candidati equivalenti",
                sdo_value="Verifica documentale necessaria",
                episode=f"DOB {g.dob.strftime('%d/%m/%Y')}; evento {g.event_date.strftime('%d/%m/%Y')}; residenza {g.residence_name or g.residence_code}",
                instruction="Non correggere automaticamente. Verificare la documentazione originale per scegliere l'episodio corretto.",
                severity="ALTA",
            ))
            audit.append(AuditItem("MATCH_AMBIGUO", g.flow, g.record_id, "Due candidati SDO con stesso punteggio"))
            continue

        _, _, _, _, s, dob_match, res_match, date_match = best
        if s.nosologico in primary_gino_by_sdo:
            corrections.append(Correction(
                flow=g.flow,
                gino_id=g.record_id,
                sdo_nosologico=s.nosologico,
                item="DUPLICATO/MATCH CONDIVISO",
                gino_value=g.record_id,
                sdo_value=f"SDO già associata a {primary_gino_by_sdo[s.nosologico].record_id}",
                episode=s.episode_label,
                instruction="Verificare duplicazione della scheda GINO o presenza di episodi distinti. Non accorpare automaticamente.",
                severity="ALTA",
            ))
            continue

        primary_gino_by_sdo[s.nosologico] = g
        matched_sdo.add(s.nosologico)
        matched_pairs[g.record_id] = s
        matched_count += 1

        mismatch_items: list[tuple[str, str, str]] = []
        if not dob_match:
            mismatch_items.append(("DATA_NASCITA", g.dob.strftime("%d/%m/%Y"), s.dob.strftime("%d/%m/%Y")))
        if res_match is False:
            mismatch_items.append(("RESIDENZA", g.residence_name or g.residence_code, s.residence_name or s.residence_state or "n.d."))
        if not date_match:
            mismatch_items.append(("DATA_EVENTO", g.event_date.strftime("%d/%m/%Y"), f"ricovero {s.admission.strftime('%d/%m/%Y')}–{s.discharge.strftime('%d/%m/%Y')}"))

        if mismatch_items:
            if len(mismatch_items) == 1:
                item, gv, sv = mismatch_items[0]
                corrections.append(Correction(
                    flow=g.flow,
                    gino_id=g.record_id,
                    sdo_nosologico=s.nosologico,
                    item=item,
                    gino_value=gv,
                    sdo_value=sv,
                    episode=s.episode_label,
                    instruction=f"Verificare puntualmente {item}; gli altri item chiave concordano e identificano univocamente l'episodio. Correggere la fonte errata dopo verifica.",
                    severity="ALTA",
                ))
            else:
                corrections.append(Correction(
                    flow=g.flow,
                    gino_id=g.record_id,
                    sdo_nosologico=s.nosologico,
                    item=" + ".join(x[0] for x in mismatch_items),
                    gino_value="; ".join(f"{x[0]}={x[1]}" for x in mismatch_items),
                    sdo_value="; ".join(f"{x[0]}={x[2]}" for x in mismatch_items),
                    episode=s.episode_label,
                    instruction="Più di un item chiave discordante: non correggere automaticamente. Verifica documentale necessaria.",
                    severity="ALTA",
                ))

        pm = _macro_procedure_match(g, s)
        if pm is False:
            corrections.append(Correction(
                flow=g.flow,
                gino_id=g.record_id,
                sdo_nosologico=s.nosologico,
                item="TIPO_INTERVENTO/PROCEDURA",
                gino_value=f"TIPO_{g.flow}={g.type_code}",
                sdo_value=f"procedure SDO={', '.join(s.procedures) or 'n.d.'}",
                episode=s.episode_label,
                instruction="Identità dell'episodio confermata dagli item chiave. Verificare la coerenza tra tipo di intervento GINO e procedure SDO.",
                severity="MEDIA",
            ))

    if gino:
        coverage_end = max(_quarter_end(g.event_date) for g in gino)
    else:
        coverage_end = date.min

    def is_secondary_ivg(s: SdoRecord) -> Optional[GinoRecord]:
        if s.flow != "IVG":
            return None
        if not any(dx.startswith("63591") for dx in s.diagnoses):
            return None
        for g in gino:
            if g.flow != "IVG" or g.dob != s.dob:
                continue
            rm = _residence_match(g, s)
            if rm is False:
                continue
            gap = (s.admission - g.event_date).days
            if 0 < gap <= 14 and g.complication_5 == "5":
                return g
        return None

    missing: list[MissingSheet] = []
    for s in sdo_records:
        if s.nosologico in matched_sdo:
            continue
        if s.admission > coverage_end:
            audit.append(AuditItem("SDO_FUORI_PERIODO", s.flow, s.nosologico, s.episode_label))
            continue
        secondary = is_secondary_ivg(s)
        if secondary:
            audit.append(AuditItem("SDO_SECONDARIA_STESSO_EPISODIO", s.flow, s.nosologico, f"Collegata a {secondary.record_id}; {s.episode_label}"))
            continue
        if s.discharge > coverage_end:
            audit.append(AuditItem("PENDING_CONFINE_PERIODO", s.flow, s.nosologico, s.episode_label))
            continue
        corr_nos = {c.sdo_nosologico for c in corrections if c.sdo_nosologico}
        if s.nosologico in corr_nos:
            continue
        res = s.residence_name or s.residence_state or "n.d."
        proc = ", ".join(s.procedures) or "n.d."
        instruction = (
            "Verificare nel sistema GINO/ISTAT la presenza della scheda relativa a questo episodio. "
            "Se assente, inserire la scheda utilizzando i dati clinici originali; non dedurre automaticamente la data evento dalla sola SDO."
        )
        missing.append(MissingSheet(
            flow=s.flow,
            sdo_nosologico=s.nosologico,
            dob=s.dob.strftime("%d/%m/%Y"),
            residence=res,
            admission=s.admission.strftime("%d/%m/%Y"),
            discharge=s.discharge.strftime("%d/%m/%Y"),
            drg=s.drg,
            diagnoses=", ".join(s.diagnoses),
            procedures=proc,
            episode=s.episode_label,
            instruction=instruction,
        ))

    matched_gino_ids = set(matched_pairs)
    already_corr_ids = {c.gino_id for c in corrections}
    for g in gino:
        if g.record_id not in matched_gino_ids and g.record_id not in already_corr_ids:
            corrections.append(Correction(
                flow=g.flow,
                gino_id=g.record_id,
                sdo_nosologico="",
                item="SDO NON TROVATA / MATCH NON DETERMINABILE",
                gino_value=f"DOB {g.dob.strftime('%d/%m/%Y')}; evento {g.event_date.strftime('%d/%m/%Y')}; residenza {g.residence_name or g.residence_code}",
                sdo_value="Nessuna SDO con almeno due item chiave concordanti",
                episode=f"GINO {g.record_id}",
                instruction="Verificare se la SDO è assente dall'estrazione, codificata con famiglia diagnostica diversa o se la scheda GINO contiene più errori. Nessuna correzione automatica.",
                severity="ALTA",
            ))

    return ReconciliationResult(
        missing=sorted(missing, key=lambda x: (x.flow, x.admission, x.sdo_nosologico)),
        corrections=sorted(corrections, key=lambda x: (x.flow, x.gino_id, x.item)),
        audit=audit,
        matched_count=matched_count,
        gino_input_count=raw_gino_count,
        gino_count=len(gino),
        sdo_count=len(sdo_records),
    )
