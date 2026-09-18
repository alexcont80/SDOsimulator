from __future__ import annotations

import sys
from pathlib import Path
import tkinter as tk
from tkinter import ttk, filedialog, messagebox

from .core import reconcile_files, export_report


def resource_path(name: str) -> Path:
    base = Path(getattr(sys, "_MEIPASS", Path(__file__).resolve().parents[2]))
    candidates = [base / "data" / name, Path(__file__).resolve().parents[2] / "data" / name]
    for p in candidates:
        if p.exists():
            return p
    return candidates[0]


class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Riconciliazione GINO ↔ SDO")
        self.geometry("1120x720")
        self.minsize(980, 620)
        self.gino_files: list[str] = []
        self.sdo_files: list[str] = []
        self.result = None
        self._build()

    def _build(self):
        top = ttk.Frame(self, padding=12)
        top.pack(fill="x")
        ttk.Label(top, text="Riconciliazione GINO ↔ SDO", font=("Segoe UI", 16, "bold")).grid(row=0, column=0, columnspan=4, sticky="w")
        ttk.Label(top, text="Output operativo: SCHEDE MANCANTI e SCHEDE DA CORREGGERE. Elaborazione esclusivamente locale.").grid(row=1, column=0, columnspan=4, sticky="w", pady=(2, 12))

        ttk.Button(top, text="1. Carica file GINO CSV", command=self.pick_gino).grid(row=2, column=0, padx=(0,8), sticky="ew")
        ttk.Button(top, text="2. Carica file SDO XLSX", command=self.pick_sdo).grid(row=2, column=1, padx=(0,8), sticky="ew")
        ttk.Button(top, text="3. Esegui verifica", command=self.run_check).grid(row=2, column=2, padx=(0,8), sticky="ew")
        ttk.Button(top, text="Esporta Excel", command=self.export).grid(row=2, column=3, sticky="ew")
        for c in range(4): top.columnconfigure(c, weight=1)

        self.file_status = ttk.Label(top, text="Nessun file caricato")
        self.file_status.grid(row=3, column=0, columnspan=4, sticky="w", pady=(8,0))

        stats = ttk.Frame(self, padding=(12,0,12,8))
        stats.pack(fill="x")
        self.stats_var = tk.StringVar(value="")
        ttk.Label(stats, textvariable=self.stats_var, font=("Segoe UI", 10, "bold")).pack(anchor="w")

        nb = ttk.Notebook(self)
        nb.pack(fill="both", expand=True, padx=12, pady=(0,12))
        self.missing_tree = self._make_tab(nb, "SCHEDE MANCANTI", ["Flusso","Nosologico","DOB","Residenza","Ricovero","DRG","Episodio da aggiungere"])
        self.corr_tree = self._make_tab(nb, "SCHEDE DA CORREGGERE", ["Flusso","ID GINO","Nosologico","Item","Valore GINO","Valore SDO","Indicazione"])
        self.audit_tree = self._make_tab(nb, "Audit tecnico", ["Categoria","Flusso","ID","Dettaglio"])

    def _make_tab(self, nb, title, columns):
        frame = ttk.Frame(nb)
        nb.add(frame, text=title)
        tree = ttk.Treeview(frame, columns=columns, show="headings")
        y = ttk.Scrollbar(frame, orient="vertical", command=tree.yview)
        x = ttk.Scrollbar(frame, orient="horizontal", command=tree.xview)
        tree.configure(yscrollcommand=y.set, xscrollcommand=x.set)
        for col in columns:
            tree.heading(col, text=col)
            tree.column(col, width=160, minwidth=90, stretch=True)
        tree.grid(row=0,column=0,sticky="nsew")
        y.grid(row=0,column=1,sticky="ns")
        x.grid(row=1,column=0,sticky="ew")
        frame.rowconfigure(0,weight=1); frame.columnconfigure(0,weight=1)
        return tree

    def pick_gino(self):
        files = filedialog.askopenfilenames(title="Seleziona uno o più CSV GINO", filetypes=[("CSV", "*.csv"), ("Tutti i file", "*.*")])
        if files:
            self.gino_files = list(files)
            self._update_status()

    def pick_sdo(self):
        files = filedialog.askopenfilenames(title="Seleziona uno o più XLSX SDO", filetypes=[("Excel", "*.xlsx"), ("Tutti i file", "*.*")])
        if files:
            self.sdo_files = list(files)
            self._update_status()

    def _update_status(self):
        self.file_status.config(text=f"GINO: {len(self.gino_files)} file | SDO: {len(self.sdo_files)} file")

    def _clear(self, tree):
        for item in tree.get_children(): tree.delete(item)

    def run_check(self):
        if not self.gino_files or not self.sdo_files:
            messagebox.showwarning("File mancanti", "Caricare almeno un file GINO CSV e un file SDO XLSX.")
            return
        try:
            muni = resource_path("comuni_istat.csv")
            self.result = reconcile_files(self.gino_files, self.sdo_files, muni if muni.exists() else None)
        except Exception as e:
            messagebox.showerror("Errore di validazione", str(e))
            return
        for t in (self.missing_tree, self.corr_tree, self.audit_tree): self._clear(t)
        for m in self.result.missing:
            self.missing_tree.insert("", "end", values=(m.flow,m.sdo_nosologico,m.dob,m.residence,f"{m.admission}–{m.discharge}",m.drg,m.episode))
        for c in self.result.corrections:
            self.corr_tree.insert("", "end", values=(c.flow,c.gino_id,c.sdo_nosologico,c.item,c.gino_value,c.sdo_value,c.instruction))
        for a in self.result.audit:
            self.audit_tree.insert("", "end", values=(a.category,a.flow,a.identifier,a.detail))
        self.stats_var.set(
            f"GINO validi: {self.result.gino_count} | SDO: {self.result.sdo_count} | Match primari: {self.result.matched_count} | "
            f"Schede mancanti: {len(self.result.missing)} | Schede/item da correggere: {len(self.result.corrections)}"
        )
        messagebox.showinfo("Verifica completata", "Controllo completato. Consultare le due schede operative.")

    def export(self):
        if self.result is None:
            messagebox.showwarning("Nessun risultato", "Eseguire prima la verifica.")
            return
        path = filedialog.asksaveasfilename(title="Salva report", defaultextension=".xlsx", filetypes=[("Excel", "*.xlsx")], initialfile="report_riconciliazione_GINO_SDO.xlsx")
        if not path:
            return
        try:
            export_report(self.result, path)
            messagebox.showinfo("Report salvato", f"Report salvato in:\n{path}")
        except Exception as e:
            messagebox.showerror("Errore esportazione", str(e))


def main():
    App().mainloop()
