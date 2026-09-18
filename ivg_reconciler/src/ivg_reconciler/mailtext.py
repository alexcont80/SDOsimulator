from __future__ import annotations

from collections import defaultdict

from .models import ReconciliationResult


def _period_label(result: ReconciliationResult) -> str:
    start = getattr(result, "period_start", None)
    end = getattr(result, "period_end", None)
    if start and end:
        return f"{start.strftime('%d/%m/%Y')}–{end.strftime('%d/%m/%Y')}"
    return "periodo in esame"


def _correction_sentence(c) -> str:
    base = f"{c.flow}"
    if c.gino_id:
        base += f" – scheda GINO {c.gino_id}"
    if c.sdo_nosologico:
        base += f" – nosologico SDO {c.sdo_nosologico}"
    item = c.item

    if item == "DATA_NASCITA":
        why = f"data di nascita discordante: GINO {c.gino_value}; SDO {c.sdo_value}"
        action = "Verificare la data corretta sulla documentazione clinico-anagrafica e correggere il dato errato."
    elif item == "RESIDENZA":
        why = f"residenza discordante: GINO {c.gino_value}; SDO {c.sdo_value}"
        action = "Verificare la residenza corretta riferita all'episodio e correggere il dato errato."
    elif item == "DATA_EVENTO":
        why = f"data evento non coerente con il ricovero: GINO {c.gino_value}; SDO {c.sdo_value}"
        action = "Verificare la data effettiva dell'evento e correggere la scheda o il dato SDO se necessario."
    elif item == "TRIMESTRE/DUPLICATO":
        why = f"record duplicato/carry-over di trimestre: {c.gino_value}; {c.sdo_value}"
        action = "Mantenere un solo record nel trimestre determinato dalla data effettiva dell'evento."
    elif item == "TRIMESTRE":
        why = f"trimestre non coerente: GINO {c.gino_value}; periodo corretto {c.sdo_value}"
        action = "Correggere il trimestre di appartenenza."
    elif item == "TIPO_INTERVENTO/PROCEDURA":
        why = f"tipo di intervento/procedura da verificare: GINO {c.gino_value}; SDO {c.sdo_value}"
        action = "Verificare la modalità effettivamente eseguita e correggere il dato non coerente."
    elif "MATCH NON DETERMINABILE" in item or "SDO NON TROVATA" in item:
        why = f"corrispondenza non determinabile: {c.gino_value}; {c.sdo_value}"
        action = "Verificare la documentazione originale prima di effettuare qualsiasi correzione."
    else:
        why = f"{item}: GINO {c.gino_value}; SDO {c.sdo_value}"
        action = c.instruction
    return f"- {base}: {why}. {action}"


def build_email_text(result: ReconciliationResult) -> tuple[str, str]:
    period = _period_label(result)
    subject = f"Verifica flussi GINO/ISTAT–SDO – {period} – casi da correggere/integrare"

    lines = [
        "Buongiorno,",
        "",
        f"nell'ambito del controllo periodico di riconciliazione tra flussi GINO/ISTAT e SDO relativo al periodo {period}, "
        "sono stati individuati i seguenti casi che richiedono correzione e/o integrazione.",
        "",
    ]

    lines.append("SCHEDE DA INTEGRARE")
    if result.missing:
        for m in result.missing:
            lines.append(
                f"- {m.flow} – nosologico SDO {m.sdo_nosologico} – ricovero {m.admission}–{m.discharge} – "
                f"DOB {m.dob} – residenza {m.residence}: non risulta una corrispondente scheda GINO/ISTAT. "
                "Verificare la documentazione dell'episodio e, se l'assenza è confermata, procedere all'inserimento della scheda."
            )
    else:
        lines.append("- Nessuna scheda da integrare.")

    lines.extend(["", "SCHEDE DA CORREGGERE / VERIFICARE"])
    if result.corrections:
        for c in result.corrections:
            lines.append(_correction_sentence(c))
    else:
        lines.append("- Nessuna scheda da correggere.")

    lines.extend([
        "",
        "Si chiede cortesemente di effettuare le verifiche indicate e di correggere o integrare i dati ove necessario.",
        "Grazie per la collaborazione.",
    ])
    return subject, "\n".join(lines)
