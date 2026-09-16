import React, { useState } from 'react';
import { BookOpen, ShieldCheck, CheckCircle2, ChevronRight, FileSpreadsheet, Layers, ArrowRight } from 'lucide-react';
import { EDUCATIONAL_THEORY } from '../data';

interface EducationalModuleProps {
  onStartPractice: () => void;
}

export const EducationalModule: React.FC<EducationalModuleProps> = ({ onStartPractice }) => {
  const [activeTab, setActiveTab] = useState<'struttura' | 'separazione' | 'diagnosi_principale'>('struttura');

  const currentModule = EDUCATIONAL_THEORY.modules.find(m => m.id === activeTab) || EDUCATIONAL_THEORY.modules[0];

  return (
    <div className="space-y-6" id="educational-module-view">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-xl p-6 shadow-sm border border-slate-800">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-950/80 border border-blue-600 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          Quadro Normativo Ufficiale
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
          {EDUCATIONAL_THEORY.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300 mt-4 border-t border-slate-800 pt-4">
          <div>
            <span className="text-slate-400 block font-semibold mb-0.5">Normativa di riferimento:</span>
            <span className="font-medium text-slate-200">{EDUCATIONAL_THEORY.normativeReference}</span>
          </div>
          <div>
            <span className="text-slate-400 block font-semibold mb-0.5">Fonte Scientifica & Didattica:</span>
            <span className="font-medium text-slate-200">{EDUCATIONAL_THEORY.scientificSource}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 bg-white rounded-t-xl px-4 pt-3 gap-2 overflow-x-auto">
        {EDUCATIONAL_THEORY.modules.map((m) => {
          const isActive = activeTab === m.id;
          return (
            <button
              key={m.id}
              id={`tab-btn-${m.id}`}
              onClick={() => setActiveTab(m.id as any)}
              className={`pb-3 px-4 font-semibold text-sm border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
                isActive
                  ? 'border-blue-700 text-blue-700'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <BookOpen className={`w-4 h-4 ${isActive ? 'text-blue-700' : 'text-slate-400'}`} />
              <span>{m.title}</span>
            </button>
          );
        })}
      </div>

      {/* Content Body */}
      <div className="bg-white rounded-b-xl border border-t-0 border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{currentModule.title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">Linee guida metodologiche per il Medico Compilatore SDO</p>
          </div>
          <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md font-mono">
            NSIS-CLASS / ICD-10-IM
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {currentModule.points.map((pt: any, idx: number) => (
            <div
              key={idx}
              className="bg-slate-50/70 border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-blue-800 font-bold text-sm flex items-center justify-center mb-3">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-slate-800 text-sm mb-2 leading-snug">{pt.label}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pt.detail}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-blue-700">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{pt.sourceRef || 'Rif: NSIS-CLASS / DM 23/10/2025'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Comparison Matrix for Module 2 */}
        {activeTab === 'separazione' && (
          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h4 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              Matrice di Confronto Metodologico tra i Due Sistemi
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-slate-300 text-slate-600 uppercase font-semibold">
                    <th className="py-2.5 px-3">Caratteristica</th>
                    <th className="py-2.5 px-3 bg-amber-50/60 text-amber-900">ICD-9-CM (v. 2007)</th>
                    <th className="py-2.5 px-3 bg-blue-50/60 text-blue-900">ICD-10-IM & CIPI (v. 2025)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-slate-800">Classificazione Diagnosi</td>
                    <td className="py-2.5 px-3 text-slate-600">Numerica a 3-5 cifre; limitata saturazione tassonomica</td>
                    <td className="py-2.5 px-3 text-slate-800 font-medium">Alfanumerica da 3 a 6 caratteri (ICD-10-IM con Modificatori OMS e Peculiarità IM)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-slate-800">Classificazione Procedure</td>
                    <td className="py-2.5 px-3 text-slate-600">Volume 3 integrato (2-4 cifre numeriche), scarsa granularità</td>
                    <td className="py-2.5 px-3 text-slate-800 font-medium">Catalogo dedicato CIPI (v. 2025), a 6 caratteri con semantica di approccio e modularità</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-slate-800">Sequele e Postumi</td>
                    <td className="py-2.5 px-3 text-slate-600">Postumi con codici misti o 5a cifra</td>
                    <td className="py-2.5 px-3 text-slate-800 font-medium">Termine «sequela» (B90-B94, I69.-, T90-T98); residuo trattato come diagnosi principale</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-slate-800">Cause Esterne di Morbosità</td>
                    <td className="py-2.5 px-3 text-slate-600">Codici E supplementari</td>
                    <td className="py-2.5 px-3 text-slate-800 font-medium">Capitolo XX (V01-Y98) integrato come codici aggiuntivi opzionali; lesione traumatica primaria</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-slate-800">Regole Nazionali SDO</td>
                    <td className="py-2.5 px-3 text-slate-600">DM 380/2000 standard</td>
                    <td className="py-2.5 px-3 text-slate-800 font-medium">DM 23/10/2025 con Addendum E: inversione asterisco-daga se indicata; eccezione SISM per asterisco</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CTA to Practice */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-base">Pronto per la simulazione su casi clinici reali?</h4>
            <p className="text-xs text-blue-200 mt-0.5">
              Accedi al Playground pratico e mettiti alla prova con la selezione della branca specialistica.
            </p>
          </div>
          <button
            id="go-to-practice-btn"
            onClick={onStartPractice}
            className="shrink-0 flex items-center gap-2 bg-white text-blue-950 font-bold px-5 py-2.5 rounded-lg text-xs hover:bg-blue-50 transition-colors shadow-sm"
          >
            Passa al Playground Pratico
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
