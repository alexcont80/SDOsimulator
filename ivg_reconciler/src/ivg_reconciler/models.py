from __future__ import annotations

import re
import unicodedata
from dataclasses import dataclass, field
from datetime import date, datetime
from typing import Any, Optional

from openpyxl.utils.datetime import from_excel

@dataclass
class GinoRecord:
    flow: str
    source_file: str
    progressivo: str
    institute: str
    year: int
    quarter_label: str
    dob: date
    event_date: date
    residence_code: str
    residence_name: Optional[str]
    residence_comparable: bool
    type_code: str
    regime: str
    access_days: str
    complication_5: str = ""
    raw: dict[str, str] = field(default_factory=dict)

    @property
    def quarter_from_event(self) -> str:
        return f"Q{((self.event_date.month - 1) // 3) + 1}"

    @property
    def quarter_from_label(self) -> str:
        s = normalize_text(self.quarter_label)
        if "GENNAIO" in s:
            return "Q1"
        if "APRILE" in s:
            return "Q2"
        if "LUGLIO" in s:
            return "Q3"
        if "OTTOBRE" in s:
            return "Q4"
        return "?"

    @property
    def record_id(self) -> str:
        q = self.quarter_from_event
        return f"{self.institute or 'NA'}-{self.year}-{q}-{self.progressivo}"


@dataclass
class SdoRecord:
    flow: str
    source_file: str
    nosologico: str
    state: str
    facility: str
    ward: str
    dob: date
    admission: date
    discharge: date
    drg: str
    diagnoses: list[str]
    diagnosis_desc: list[str]
    procedures: list[str]
    procedure_dates: list[date]
    procedure_desc: list[str]
    residence_name: Optional[str]
    residence_state: Optional[str]
    raw: dict[str, Any] = field(default_factory=dict)

    @property
    def episode_label(self) -> str:
        res = self.residence_name or self.residence_state or "residenza non disponibile"
        return (
            f"nosologico {self.nosologico}; DOB {self.dob.strftime('%d/%m/%Y')}; "
            f"ricovero {self.admission.strftime('%d/%m/%Y')}–{self.discharge.strftime('%d/%m/%Y')}; "
            f"residenza {res}; DRG {self.drg}; diagnosi {', '.join(self.diagnoses) or 'n.d.'}"
        )


@dataclass
class Correction:
    flow: str
    gino_id: str
    sdo_nosologico: str
    item: str
    gino_value: str
    sdo_value: str
    episode: str
    instruction: str
    severity: str = "ALTA"


@dataclass
class MissingSheet:
    flow: str
    sdo_nosologico: str
    dob: str
    residence: str
    admission: str
    discharge: str
    drg: str
    diagnoses: str
    procedures: str
    episode: str
    instruction: str


@dataclass
class AuditItem:
    category: str
    flow: str
    identifier: str
    detail: str


@dataclass
class ReconciliationResult:
    missing: list[MissingSheet]
    corrections: list[Correction]
    audit: list[AuditItem]
    matched_count: int
    gino_count: int
    sdo_count: int


def normalize_text(value: Any) -> str:
    if value is None:
        return ""
    s = str(value).strip().upper()
    s = unicodedata.normalize("NFKD", s)
    s = "".join(ch for ch in s if not unicodedata.combining(ch))
    s = s.replace("’", "'")
    s = re.sub(r"[^A-Z0-9]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def parse_intish(v: Any) -> Optional[int]:
    if v is None or str(v).strip() == "":
        return None
    try:
        return int(float(str(v).replace(",", ".")))
    except Exception:
        return None


def parse_excel_date(v: Any) -> Optional[date]:
    if v is None or v == "":
        return None
    if isinstance(v, datetime):
        return v.date()
    if isinstance(v, date):
        return v
    if isinstance(v, (int, float)):
        try:
            return from_excel(v).date()
        except Exception:
            return None
    s = str(v).strip()
    for fmt in ("%d/%m/%Y", "%Y-%m-%d", "%d-%m-%Y"):
        try:
            return datetime.strptime(s, fmt).date()
        except ValueError:
            pass
    return None


def parse_gino_date(row: dict[str, str]) -> Optional[date]:
    try:
        return date(int(row["ANNO_ABORTO"]), int(row["MESE_ABORTO"]), int(row["GIORNO_ABORTO"]))
    except Exception:
        return None


def parse_gino_dob(row: dict[str, str]) -> Optional[date]:
    try:
        return date(int(row["DATA_NASCITA_AAAA"]), int(row["DATA_NASCITA_MM"]), int(row["DATA_NASCITA_GG"]))
    except Exception:
        return None


def norm_code(v: Any, width: int = 3) -> str:
    if v is None:
        return ""
    s = str(v).strip()
    if not s:
        return ""
    if s.endswith(".0"):
        s = s[:-2]
    return s.zfill(width)
