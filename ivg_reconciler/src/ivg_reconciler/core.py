from __future__ import annotations

from pathlib import Path
from typing import Optional

from .models import *
from .loaders import load_gino_csv, load_sdo_xlsx, load_municipality_map
from .matcher import reconcile, _quarter_end
from .periods import validate_period_files
from .report import export_report
from .mailtext import build_email_text


def reconcile_files(
    gino_files: list[str | Path],
    sdo_files: list[str | Path],
    municipality_map_path: Optional[str | Path] = None
) -> ReconciliationResult:
    # Fail closed: il matching parte solo se i periodi dichiarati nei file
    # GINO e nei report SDO sono riconoscibili, contigui e sovrapponibili.
    period_start, period_end, period_summary = validate_period_files(gino_files, sdo_files)

    municipality_map = load_municipality_map(municipality_map_path)
    gino: list[GinoRecord] = []
    sdo: list[SdoRecord] = []
    audit: list[AuditItem] = []
    for f in gino_files:
        r, a = load_gino_csv(f, municipality_map)
        gino.extend(r)
        audit.extend(a)
    for f in sdo_files:
        r, a = load_sdo_xlsx(f)
        sdo.extend(r)
        audit.extend(a)

    result = reconcile(gino, sdo)
    result.audit[:0] = audit
    # Attributi di sessione aggiunti al risultato senza cambiare il formato
    # storico del motore di matching.
    result.period_start = period_start
    result.period_end = period_end
    result.period_summary = period_summary
    return result
