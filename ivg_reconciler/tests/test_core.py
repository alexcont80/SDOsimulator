from datetime import date

from ivg_reconciler.core import (
    GinoRecord, SdoRecord, reconcile, normalize_text
)


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
    assert any(c.item=="TRIMESTRE/DUPLICATO" for c in r.corrections)
