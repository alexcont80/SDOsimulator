import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Layers, CheckCircle, ArrowRight, Info, ShieldAlert, Sparkles, PlusCircle } from 'lucide-react';
import { searchCatalog, getCodeDetails } from '../services/catalogSearch';
import { CatalogEntry } from '../types';

interface CodeSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCode?: (code: CatalogEntry, targetRole: 'primary' | 'secondary' | 'procedure') => void;
}

export const CodeSearchModal: React.FC<CodeSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCode
}) => {
  const [query, setQuery] = useState('');
  const [systemFilter, setSystemFilter] = useState<'ALL' | 'ICD-10-IM' | 'CIPI'>('ALL');
  const [terminalOnly, setTerminalOnly] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<CatalogEntry | null>(null);
  const [insertRole, setInsertRole] = useState<'primary' | 'secondary' | 'procedure'>('primary');

  const results = useMemo(() => {
    return searchCatalog({
      query,
      system: systemFilter,
      terminalOnly,
      limit: 40
    });
  }, [query, systemFilter, terminalOnly]);

  if (!isOpen) return null;

  const handleApply = () => {
    if (!selectedEntry || !onSelectCode) return;
    onSelectCode(selectedEntry, insertRole);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto animate-fade-in">
      <div 
        id="code-search-modal"
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-600/30 rounded-xl border border-blue-400/30 text-blue-300">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-white">Cerca un Codice nei Cataloghi Ufficiali</h3>
                <span className="text-[11px] bg-blue-500/20 text-blue-200 px-2 py-0.5 rounded-full border border-blue-400/30">
                  DM 23/10/2025 • v. 2025
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Ricerca rapida tra oltre 70.000 diagnosi ICD-10-IM e procedure CIPI con gerarchia, inclusioni e terminalità.
              </p>
            </div>
          </div>
          <button
            id="close-code-search-btn"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & Filters */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col gap-3">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
            <input
              id="catalog-search-input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca per codice (es. I21.0, 36.05.1B, S72.001), patologia, procedura o sinonimo..."
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900 shadow-sm"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* System Switcher */}
            <div className="flex items-center bg-slate-200/70 p-1 rounded-lg">
              <button
                id="filter-all-systems-btn"
                onClick={() => setSystemFilter('ALL')}
                className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                  systemFilter === 'ALL'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tutti i Cataloghi ({results.length})
              </button>
              <button
                id="filter-icd10-btn"
                onClick={() => setSystemFilter('ICD-10-IM')}
                className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 ${
                  systemFilter === 'ICD-10-IM'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                ICD-10-IM (Diagnosi)
              </button>
              <button
                id="filter-cipi-btn"
                onClick={() => setSystemFilter('CIPI')}
                className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 ${
                  systemFilter === 'CIPI'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                CIPI (Procedure)
              </button>
            </div>

            {/* Terminal toggle */}
            <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700">
              <input
                id="filter-terminal-toggle"
                type="checkbox"
                checked={terminalOnly}
                onChange={(e) => setTerminalOnly(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
              <span>Solo codici terminali utilizzabili</span>
            </label>
          </div>
        </div>

        {/* Content Body: Split View (List + Details) */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden min-h-[380px]">
          {/* List Column */}
          <div className="md:col-span-6 border-r border-slate-200 overflow-y-auto max-h-[50vh] md:max-h-[550px] p-2 space-y-1.5 bg-slate-50/50">
            {results.length === 0 ? (
              <div className="p-8 text-center text-slate-500">
                <Info className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                <p className="font-semibold text-sm">Nessun codice trovato per "{query}"</p>
                <p className="text-xs text-slate-400 mt-1">Prova con una parola chiave diversa o verifica i filtri.</p>
              </div>
            ) : (
              results.map((entry) => {
                const isSelected = selectedEntry?.code === entry.code;
                return (
                  <div
                    key={entry.code}
                    id={`search-result-${entry.code.replace('.', '-')}`}
                    onClick={() => {
                      setSelectedEntry(entry);
                      if (entry.system === 'CIPI') {
                        setInsertRole('procedure');
                      } else {
                        setInsertRole('primary');
                      }
                    }}
                    className={`p-3 rounded-xl cursor-pointer border transition-all text-left ${
                      isSelected
                        ? 'bg-blue-50/80 border-blue-500 shadow-sm ring-1 ring-blue-400'
                        : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono font-bold text-xs px-2 py-0.5 rounded ${
                          entry.system === 'ICD-10-IM'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {entry.code}
                        </span>
                        <span className="text-[10px] uppercase font-semibold text-slate-500">
                          {entry.system}
                        </span>
                      </div>
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                        entry.terminal
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {entry.terminal ? 'Terminale' : 'Non codificante'}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800 line-clamp-2 leading-snug">
                      {entry.title}
                    </p>
                    {entry.hierarchy.chapter && (
                      <p className="text-[10px] text-slate-500 mt-1 truncate">
                        {entry.hierarchy.chapter}
                      </p>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Details Column */}
          <div className="md:col-span-6 overflow-y-auto max-h-[50vh] md:max-h-[550px] p-5 bg-white flex flex-col justify-between">
            {selectedEntry ? (
              <div className="space-y-4">
                {/* Header detail */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase ${
                      selectedEntry.system === 'ICD-10-IM' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {selectedEntry.system}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                      selectedEntry.terminal ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {selectedEntry.terminal ? 'Codice Terminale Ufficiale' : 'Rubrica / Categoria Padre'}
                    </span>
                  </div>
                  <h4 className="font-mono text-xl font-bold text-slate-900 mt-1">
                    {selectedEntry.code}
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 mt-1 leading-snug">
                    {selectedEntry.title}
                  </p>
                </div>

                {/* Hierarchy Breadcrumbs */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1.5">
                  <div className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    Gerarchia Tassonomica
                  </div>
                  {selectedEntry.hierarchy.chapter && (
                    <div className="text-slate-600 pl-4 border-l-2 border-slate-300">
                      <span className="font-medium text-slate-700">Capitolo:</span> {selectedEntry.hierarchy.chapter}
                    </div>
                  )}
                  {selectedEntry.hierarchy.block && (
                    <div className="text-slate-600 pl-4 border-l-2 border-slate-300">
                      <span className="font-medium text-slate-700">Blocco:</span> {selectedEntry.hierarchy.block}
                    </div>
                  )}
                  {selectedEntry.hierarchy.category && (
                    <div className="text-slate-600 pl-4 border-l-2 border-slate-300">
                      <span className="font-medium text-slate-700">Categoria:</span> {selectedEntry.hierarchy.category}
                    </div>
                  )}
                </div>

                {/* Inclusions / Exclusions */}
                {selectedEntry.inclusions && selectedEntry.inclusions.length > 0 && (
                  <div className="text-xs">
                    <span className="font-bold text-emerald-800 block mb-1">Inclusioni:</span>
                    <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                      {selectedEntry.inclusions.map((inc, i) => (
                        <li key={i}>{inc}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedEntry.exclusions && selectedEntry.exclusions.length > 0 && (
                  <div className="text-xs">
                    <span className="font-bold text-rose-800 block mb-1">Esclusioni:</span>
                    <ul className="list-disc pl-4 space-y-0.5 text-rose-700">
                      {selectedEntry.exclusions.map((exc, i) => (
                        <li key={i}>{exc}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Notes & Normative rules */}
                {selectedEntry.notes && selectedEntry.notes.length > 0 && (
                  <div className="bg-amber-50/70 border border-amber-200 p-3 rounded-xl text-xs text-amber-900 space-y-1">
                    <span className="font-bold flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-amber-700" />
                      Note di Codifica & Flussi:
                    </span>
                    {selectedEntry.notes.map((n, i) => (
                      <p key={i} className="pl-5 text-amber-800">{n}</p>
                    ))}
                  </div>
                )}

                {/* Transcoding ICD-9 */}
                {selectedEntry.transcodingICD9 && (
                  <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <span className="font-semibold text-slate-700">Transcodifica storica ICD-9-CM:</span> {selectedEntry.transcodingICD9}
                  </div>
                )}

                {/* Insertion Target Form */}
                {onSelectCode && (
                  <div className="pt-3 border-t border-slate-200">
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      Ruolo di inserimento nella scheda SDO:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setInsertRole('primary')}
                        disabled={selectedEntry.system === 'CIPI'}
                        className={`p-2 rounded-lg border text-xs font-medium text-center transition-all ${
                          insertRole === 'primary' && selectedEntry.system !== 'CIPI'
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed'
                        }`}
                      >
                        Diagnosi Principale
                      </button>
                      <button
                        type="button"
                        onClick={() => setInsertRole('secondary')}
                        disabled={selectedEntry.system === 'CIPI'}
                        className={`p-2 rounded-lg border text-xs font-medium text-center transition-all ${
                          insertRole === 'secondary' && selectedEntry.system !== 'CIPI'
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed'
                        }`}
                      >
                        Diagnosi Secondaria
                      </button>
                      <button
                        type="button"
                        onClick={() => setInsertRole('procedure')}
                        disabled={selectedEntry.system === 'ICD-10-IM'}
                        className={`p-2 rounded-lg border text-xs font-medium text-center transition-all ${
                          insertRole === 'procedure' && selectedEntry.system !== 'ICD-10-IM'
                            ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed'
                        }`}
                      >
                        Procedura / Intervento
                      </button>
                    </div>

                    <button
                      id="apply-code-to-sdo-btn"
                      onClick={handleApply}
                      className="mt-3 w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                    >
                      <PlusCircle className="w-4 h-4" />
                      Inserisci {selectedEntry.code} nella Scheda SDO
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 text-slate-400">
                <BookOpen className="w-12 h-12 text-slate-300 mb-3" />
                <p className="font-semibold text-slate-600 text-sm">Seleziona un codice dall'elenco</p>
                <p className="text-xs text-slate-400 max-w-xs mt-1">
                  Potrai visualizzare la scheda analitica dettagliata con inclusioni, esclusioni, note normative e aggiungerlo alla compilazione.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div>
            Catalogo: <strong className="text-slate-700">ICD-10-IM & CIPI 2025 (DM 23/10/2025)</strong>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-white hover:bg-slate-200 text-slate-700 border border-slate-300 font-medium rounded-lg transition-colors"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
