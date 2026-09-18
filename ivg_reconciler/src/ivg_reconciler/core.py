from __future__ import annotations

from pathlib import Path
from typing import Optional

from .models import *
from .loaders import load_gino_csv, load_sdo_xlsx, load_municipality_map
from .matcher import reconcile, _quarter_end
from .report import export_report


def reconcile_files(gino_files: list[str | Path], sdo_files: list[str | Path], municipality_map_path: Optional[str | Path] = None) -> ReconciliationResult:
    municipality_map = load_municipality_map(municipality_map_path)
    gino: list[GinoRecord] = []
    sdo: list[SdoRecord] = []
    audit: list[AuditItem] = []
    for f in gino_files:
        r, a = load_gino_csv(f, municipality_map)
        gino.extend(r); audit.extend(a)
    for f in sdo_files:
        r, a = load_sdo_xlsx(f)
        sdo.extend(r); audit.extend(a)
    result = reconcile(gino, sdo)
    result.audit[:0] = audit
    return result
