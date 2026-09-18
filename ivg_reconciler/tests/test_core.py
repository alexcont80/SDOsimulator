from datetime import date
import csv
import pytest
from openpyxl import Workbook

from ivg_reconciler.core import (
    GinoRecord, SdoRecord, reconcile, normalize_text
)
from ivg_reconciler.periods import validate_period_files
from ivg_reconciler.mailtext import build_email_text


def g(flow="IVG", prog="1", dob=date(1990,1,1), ev=date(2026,1,10), res="COMUNE A", q="Gennaio - Marzo", t="5", comp5=""):
    return GinoRecord(
        flow=flow, source_file="gino.csv", progressivo=prog, institute="X", year=2026,
        quarter_label=q, dob=dob, event_date=ev, residence_code="001001",
        residence_name=normalize_text(res), residence_comparable=True, type_code=t,
        regime="2", access_days="2", complication_5=comp5, raw={}
    )


def s(flow="IVG", nos="100", dob=date(1990,1,1), adm=date(2026,1,9), dis=date(2026,1,10), res="COMUNE A", dx=None, procs=None):
    dx = dx or (["63592"] if flow=="IVG" else ["632"])
    return SdoRecord(
        flow=flow, source_file="sdo.xlsx", nosologico=nos, state="SDO archiviata",
        facility="TEST", ward="OSTETRICIA", dob=dob, admission=adm, discharge=dis,
        drg="380", diagnoses=dx, diagnosis_desc=[], procedures=procs or ["9924"],
        procedure_dates=[], procedure_desc=[], residence_name=normalize_text(res), residence_state="ITALIA", raw={}
    )


def test_exact_match_has_no_operational_issue():
    r=reconcile([g()], [s()])
    assert r.matched_count==1
    assert r.missing==[]
    assert not any(c.item in {"DATA_NASCITA","RESIDENZA","DATA_EVENTO"} for c in r.corrections)


def test_single_dob_discordance_goes_to_correction_not_missing():
    r=reconcile([g(dob=date(1990,1,1))], [s(dob=date(1990,1,2))])
    assert r.matched_count==1
    assert r.missing==[]
    assert any(c.item=="DATA_NASCITA" for c in r.corrections)


def test_single_residence_discordance_goes_to_correction():
    r=reconcile([g(res="COMUNE A")], [s(res="COMUNE B")])
    assert r.matched_count==1
    assert any(c.item=="RESIDENZA" for c in r.corrections)


def test_date_discordance_with_dob_residence_match_goes_to_correction():
    r=reconcile([g(ev=date(2026,1,1))], [s(adm=date(2026,1,10),dis=date(2026,1,11))])
    assert r.matched_count==1
    assert any(c.item=="DATA_EVENTO" for c in r.corrections)


def test_unmatched_closed_sdo_is_missing():
    r=reconcile([], [s()])
    assert r.missing==[]


def test_missing_with_covered_period():
    gg=g(prog="1",dob=date(1990,1,1),ev=date(2026,1,10),res="A")
    ss1=s(nos="1",dob=date(1990,1,1),adm=date(2026,1,9),dis=date(2026,1,10),res="A")
    ss2=s(nos="2",dob=date(1980,2,2),adm=date(2026,2,10),dis=date(2026,2,11),res="B")
    r=reconcile([gg],[ss1,ss2])
    assert [m.sdo_nosologico for m in r.missing]==["2"]


def test_secondary_ivg_is_not_missing():
    gg=g(comp5="5", ev=date(2026,2,19), res="BUJA")
    primary=s(nos="10", adm=date(2026,2,19),dis=date(2026,2,19),res="BUJA")
    second=s(nos="11", adm=date(2026,2,23),dis=date(2026,2,24),res="BUJA",dx=["63591"],procs=["6902"])
    r=reconcile([gg],[primary,second])
    assert not any(m.sdo_nosologico=="11" for m in r.missing)
    assert any(a.category=="SDO_SECONDARIA_STESSO_EPISODIO" and a.identifier=="11" for a in r.audit)


def test_cross_quarter_is_pending_not_missing():
    gg=g(ev=date(2026,6,15), q="Aprile - Giugno")
    primary=s(nos="10", adm=date(2026,6,15),dis=date(2026,6,15))
    pending=s(nos="11",dob=date(1980,1,1),adm=date(2026,6,30),dis=date(2026,7,2),res="X")
    r=reconcile([gg],[primary,pending])
    assert not any(m.sdo_nosologico=="11" for m in r.missing)
    assert any(a.category=="PENDING_CONFINE_PERIODO" and a.identifier=="11" for a in r.audit)


def test_duplicate_across_quarters_becomes_correction():
    g1=g(prog="18", ev=date(2026,4,16), q="Gennaio - Marzo")
    g2=g(prog="7", ev=date(2026,4,16), q="Aprile - Giugno")
    ss=s(nos="1",adm=date(2026,4,16),dis=date(2026,4,16))
    r=reconcile([g1,g2],[ss])
    assert r.gino_input_count == 2
    assert r.gino_count == 1
    assert any(c.item=="TRIMESTRE/DUPLICATO" for c in r.corrections)


def test_merge_unique_file_selection_logic():
    from ivg_reconciler.gui import App
    merged = App._merge_unique(["C:/a/one.csv"], ["C:/a/two.csv", "C:/a/one.csv"])
    assert len(merged) == 2
    assert merged[0].endswith("one.csv")
    assert merged[1].endswith("two.csv")



def _write_gino_period_csv(path, flow, year, quarter_label):
    type_col = "TIPO_IVG" if flow == "IVG" else "TIPO_AS"
    with open(path, "w", encoding="utf-8-sig", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["ANNO", "TRIMESTRE", type_col], delimiter=";")
        w.writeheader()
        w.writerow({"ANNO": year, "TRIMESTRE": quarter_label, type_col: "5" if flow == "IVG" else "3"})


def _write_sdo_period_xlsx(path, flow, period_text):
    wb = Workbook()
    ws = wb.active
    ws["B2"] = "IVG - TEST" if flow == "IVG" else "ABORTI SPONTANEI - TEST"
    ws["B3"] = f"Accettazioni/Dimissioni nel periodo: {period_text}"
    wb.save(path)


def test_period_check_accepts_matching_semester(tmp_path):
    g1 = tmp_path / "283_16_0_20260101_IVG_DOWNLOAD.csv"
    g2 = tmp_path / "283_16_0_20260401_IVG_DOWNLOAD.csv"
    s1 = tmp_path / "ADT_RICOVERI_IVG_1_sem_2026.xlsx"
    _write_gino_period_csv(g1, "IVG", 2026, "Gennaio - Marzo")
    _write_gino_period_csv(g2, "IVG", 2026, "Aprile - Giugno")
    _write_sdo_period_xlsx(s1, "IVG", "GEN-GIU 2026")
    start, end, summary = validate_period_files([g1, g2], [s1])
    assert start == date(2026, 1, 1)
    assert end == date(2026, 6, 30)
    assert summary.startswith("OK")


def test_period_check_blocks_mismatch(tmp_path):
    g1 = tmp_path / "283_16_0_20260101_IVG_DOWNLOAD.csv"
    s1 = tmp_path / "ADT_RICOVERI_IVG_1_sem_2026.xlsx"
    _write_gino_period_csv(g1, "IVG", 2026, "Gennaio - Marzo")
    _write_sdo_period_xlsx(s1, "IVG", "GEN-GIU 2026")
    with pytest.raises(ValueError, match="CONTROLLO PRELIMINARE PERIODI NON SUPERATO"):
        validate_period_files([g1], [s1])


def test_email_text_contains_operational_sections():
    gg = g(prog="1", dob=date(1990,1,1), ev=date(2026,1,10), res="A")
    ss1 = s(nos="1", dob=date(1990,1,1), adm=date(2026,1,9), dis=date(2026,1,10), res="A")
    ss2 = s(nos="2", dob=date(1980,2,2), adm=date(2026,2,10), dis=date(2026,2,11), res="B")
    r = reconcile([gg], [ss1, ss2])
    r.period_start = date(2026,1,1)
    r.period_end = date(2026,3,31)
    subject, body = build_email_text(r)
    assert "01/01/2026" in subject
    assert "SCHEDE DA INTEGRARE" in body
    assert "nosologico SDO 2" in body
    assert "SCHEDE DA CORREGGERE / VERIFICARE" in body


def test_help_text_documents_operational_endpoints():
    from ivg_reconciler.helptext import HELP_TEXT
    assert "SCHEDE MANCANTI" in HELP_TEXT
    assert "SCHEDE DA CORREGGERE" in HELP_TEXT
    assert "CONTROLLO PRELIMINARE DEL PERIODO" in HELP_TEXT
    assert "TESTO MAIL" in HELP_TEXT
    assert "PRIVACY" in HELP_TEXT
