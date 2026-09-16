import React, { useState } from 'react';
import { 
  X, Sparkles, BookOpen, AlertTriangle, CheckCircle2, ShieldCheck, 
  HelpCircle, ArrowRight, Layers, FileText, Check, ChevronRight, Stethoscope
} from 'lucide-react';
import { getGuidedExamples, generateGuidedProposal, GuidedFormInput } from '../services/catalogSearch';
import { GuidedCaseExample, GuidedProposalResult, CatalogEntry } from '../types';

interface GuidedCaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyProposal: (proposal: GuidedProposalResult) => void;
  currentCaseContext?: {
    title: string;
    scenarioText: string;
  };
}

export const GuidedCaseModal: React.FC<GuidedCaseModalProps> = ({
  isOpen,
  onClose,
  onApplyProposal,
  currentCaseContext
}) => {
  const guidedExamples = getGuidedExamples();
  const [selectedExampleId, setSelectedExampleId] = useState<string | 'custom'>('GUIDA-SCOMP-01');

  // Form State
  const [setting, setSetting] = useState<string>('ricovero');
  const [flusso, setFlusso] = useState<string>('SDO');
  const [diagnosiFinaleDoc, setDiagnosiFinaleDoc] = useState<string>('scompenso_acuto_ivs');
  const [acuzie, setAcuzie] = useState<string>('acuta');
  const [condizioniAssociate, setCondizioniAssociate] = useState<string[]>([]);
  const [nonDocumentatoCondizioni, setNonDocumentatoCondizioni] = useState<boolean>(true);
  const [procedureEseguite, setProcedureEseguite] = useState<string[]>([]);
  const [accessoChirurgico, setAccessoChirurgico] = useState<string>('percutaneo');
  const [dispositiviImpiantati, setDispositiviImpiantati] = useState<string[]>([]);
  const [cpapApplicata, setCpapApplicata] = useState<boolean>(true);
  const [insufficienzaRespDocumentata, setInsufficienzaRespDocumentata] = useState<boolean>(false);
  const [antibiogrammaResistenzaDoc, setAntibiogrammaResistenzaDoc] = useState<boolean>(false);
  const [noteTestuali, setNoteTestuali] = useState<string>('');

  const [proposalResult, setProposalResult] = useState<GuidedProposalResult | null>(null);
  const [activeStep, setActiveStep] = useState<'form' | 'proposal'>('form');

  if (!isOpen) return null;

  const handleSelectExample = (ex: GuidedCaseExample) => {
    setSelectedExampleId(ex.id);
    if (ex.id === 'GUIDA-SCOMP-01') {
      setSetting('ricovero');
      setFlusso('SDO');
      setDiagnosiFinaleDoc('scompenso_acuto_ivs');
      setAcuzie('acuta');
      setCpapApplicata(true);
      setInsufficienzaRespDocumentata(false);
      setCondizioniAssociate([]);
      setNonDocumentatoCondizioni(true);
      setProcedureEseguite([]);
    } else if (ex.id === 'GUIDA-SCOMP-02') {
      setSetting('ricovero');
      setFlusso('SDO');
      setDiagnosiFinaleDoc('altra');
      setAcuzie('cronica');
      setCpapApplicata(false);
      setInsufficienzaRespDocumentata(false);
      setCondizioniAssociate([]);
      setNonDocumentatoCondizioni(true);
      setProcedureEseguite([]);
    } else if (ex.id === 'GUIDA-SCOMP-03') {
      setSetting('PS/OBI senza ricovero');
      setFlusso('PS/OBI');
      setDiagnosiFinaleDoc('non_definita');
      setAcuzie('acuta');
      setCpapApplicata(false);
      setInsufficienzaRespDocumentata(false);
      setCondizioniAssociate([]);
      setNonDocumentatoCondizioni(true);
      setProcedureEseguite([]);
    }
    setProposalResult(null);
    setActiveStep('form');
  };

  const handleToggleCondizione = (val: string) => {
    setNonDocumentatoCondizioni(false);
    setCondizioniAssociate((prev) => 
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  const handleToggleProcedure = (val: string) => {
    setProcedureEseguite((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  const handleGenerateProposal = () => {
    const input: GuidedFormInput = {
      setting,
      flusso,
      diagnosiFinaleDoc,
      acuzie,
      condizioniAssociate,
      nonDocumentatoCondizioni,
      procedureEseguite,
      accessoChirurgico,
      dispositiviImpiantati,
      cpapApplicata,
      insufficienzaRespDocumentata,
      antibiogrammaResistenzaDoc,
      noteTestuali
    };

    const res = generateGuidedProposal(input);
    setProposalResult(res);
    setActiveStep('proposal');
  };

  const handleApply = () => {
    if (!proposalResult) return;
    onApplyProposal(proposalResult);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto animate-fade-in">
      <div 
        id="guided-case-modal"
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-500/30 rounded-xl border border-blue-400/30 text-blue-300">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg text-white">Codifica un Caso (Guida Interattiva)</h3>
                <span className="text-[11px] bg-indigo-500/30 text-indigo-200 px-2 py-0.5 rounded-full border border-indigo-400/30">
                  Assistente Metodologico ISS / DM 23/10/2025
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Definisci il setting, le evidenze documentali e i dettagli clinici per ottenere una proposta rigorosa con citazioni di regole.
              </p>
            </div>
          </div>
          <button
            id="close-guided-modal-btn"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Template Selector Tabs */}
        <div className="bg-slate-100 p-3 border-b border-slate-200 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-semibold text-slate-700 mr-1">Casi didattici propedeutici:</span>
          {guidedExamples.map((ex) => (
            <button
              key={ex.id}
              id={`btn-example-${ex.id}`}
              onClick={() => handleSelectExample(ex)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all text-left ${
                selectedExampleId === ex.id
                  ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-500'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
            >
              {ex.titolo}
            </button>
          ))}
          <button
            id="btn-custom-mode"
            onClick={() => {
              setSelectedExampleId('custom');
              setProposalResult(null);
              setActiveStep('form');
            }}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              selectedExampleId === 'custom'
                ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-500'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            Simulazione Libera / Caso Corrente
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 bg-slate-50/50">
          {activeStep === 'form' ? (
            <div className="space-y-6">
              {/* Selected Example Summary Box */}
              {selectedExampleId !== 'custom' && (
                <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-950 uppercase tracking-wide">
                      Scenario didattico selezionato
                    </span>
                    <span className="text-[10px] bg-blue-200/80 text-blue-900 font-semibold px-2 py-0.5 rounded">
                      Rif: FAD ISS / ESPERTO
                    </span>
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {guidedExamples.find((x) => x.id === selectedExampleId)?.testo}
                  </p>
                </div>
              )}

              {/* SECTION 1: Setting & Flusso */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center font-bold">1</span>
                  Setting Assistenziale e Flusso Sanitario
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1">Setting di Cura:</label>
                    <select
                      id="select-setting"
                      value={setting}
                      onChange={(e) => setSetting(e.target.value)}
                      className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="ricovero">Degenza ordinaria (Ricovero)</option>
                      <option value="day_hospital">Day Hospital / Chirurgia ambulatoriale</option>
                      <option value="PS/OBI senza ricovero">Pronto Soccorso / OBI (senza ricovero)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1">Flusso Informativo Target:</label>
                    <select
                      id="select-flusso"
                      value={flusso}
                      onChange={(e) => setFlusso(e.target.value)}
                      className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="SDO">SDO Ospedaliera (DM 23/10/2025)</option>
                      <option value="PS/OBI">Flusso Emergenza / OBI</option>
                      <option value="SISM">SISM (Salute Mentale - asterisco ammesso solo)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1">Stato Dimissione:</label>
                    <select
                      className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800"
                      defaultValue="ordinaria"
                    >
                      <option value="ordinaria">Dimissione a domicilio</option>
                      <option value="trasferimento">Trasferimento ad altro istituto</option>
                      <option value="decesso">Deceduto</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SECTION 2: Diagnosi Finale Accertata */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center font-bold">2</span>
                  Diagnosi Finale Documentata dal Medico
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1">Diagnosi Causale Accertata:</label>
                    <select
                      id="select-diagnosi-doc"
                      value={diagnosiFinaleDoc}
                      onChange={(e) => setDiagnosiFinaleDoc(e.target.value)}
                      className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 font-medium"
                    >
                      <option value="scompenso_acuto_ivs">Scompenso cardiaco acuto (IVS acuta / EPA cardiogeno) [I50.1]</option>
                      <option value="scompenso_congestizio">Scompenso cardiaco congestizio [I50.0]</option>
                      <option value="stemi_anteriore">Infarto miocardico acuto STEMI anteriore [I21.0]</option>
                      <option value="nstemi">Infarto miocardico subendocardico NSTEMI [I21.4]</option>
                      <option value="frattura_femore">Frattura chiusa collo del femore [S72.001]</option>
                      <option value="sintomo_dispnea">Dispnea isolata senza diagnosi definitiva accertata [R06.0]</option>
                      <option value="sospetto_escluso">Sospetto IMA escluso dopo osservazione OBI [Z03.4]</option>
                      <option value="non_definita">Non definita al termine del contatto (Sintomo Rxx)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1">Caratterizzazione dell'Acuzie:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['acuta', 'cronica', 'riacutizzata'].map((ac) => (
                        <button
                          key={ac}
                          type="button"
                          onClick={() => setAcuzie(ac)}
                          className={`p-2 rounded-lg border text-xs font-medium capitalize text-center ${
                            acuzie === ac
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {ac}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Condizioni Associate & Regola R07 / Divieto di Deduzione */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center font-bold">3</span>
                    Condizioni Associate con Impatto Assistenziale Reale (R07)
                  </h4>
                  <div className="text-[11px] text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    Sempre disponibile «Non documentato»
                  </div>
                </div>

                <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Regola di Disciplina Clinica:</strong> Non dedurre mai diagnosi (es. insufficienza respiratoria, sepsi o insufficienza renale) da semplici prescrizioni farmacologiche, valori di laboratorio o presidi ventilatori, in assenza di formale diagnosi medica in cartella.
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setNonDocumentatoCondizioni(true);
                      setCondizioniAssociate([]);
                    }}
                    className={`p-2.5 rounded-lg border font-semibold text-center transition-all ${
                      nonDocumentatoCondizioni
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Nessuna rilevante / Non documentato
                  </button>

                  {[
                    { id: 'ipertensione', label: 'Ipertensione primaria [I10]' },
                    { id: 'shock_cardiogeno', label: 'Shock cardiogeno (MCC) [R57.0]' },
                    { id: 'fa_parossistica', label: 'FA parossistica [I48.0]' },
                    { id: 'irc_stadio1', label: 'Nefropatia ipertensiva st.1 [I12.00]' }
                  ].map((cond) => (
                    <button
                      key={cond.id}
                      type="button"
                      onClick={() => handleToggleCondizione(cond.id)}
                      className={`p-2.5 rounded-lg border font-medium text-left transition-all ${
                        condizioniAssociate.includes(cond.id)
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {cond.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* SECTION 4: Procedure Eseguite, Approcci & Ventilazione */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center font-bold">4</span>
                  Prestazioni Eseguite & Dettagli Procedurali CIPI
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {/* Ventilazione & CPAP */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="font-bold text-slate-800 block">Supporto Ventilatorio (CPAP/NIV):</span>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={cpapApplicata}
                        onChange={(e) => setCpapApplicata(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span>Erogata CPAP / NIV durante la degenza (93.90.00)</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer pt-1 border-t border-slate-200">
                      <input
                        type="checkbox"
                        checked={insufficienzaRespDocumentata}
                        onChange={(e) => setInsufficienzaRespDocumentata(e.target.checked)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-slate-700 font-medium">
                        Insufficienza respiratoria formalmente diagnosticata dal medico (J96.0)
                      </span>
                    </label>
                  </div>

                  {/* Interventi & Approcci */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <span className="font-bold text-slate-800 block">Procedure Chirurgiche / Interventistiche:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { id: 'ptca_stent', label: 'PTCA con stent [36.05.1B]' },
                        { id: 'tavi', label: 'TAVI Valvolare [35.21.-]' },
                        { id: 'artroprotesi_anca', label: 'Artroprotesi anca [81.51.00]' }
                      ].map((proc) => (
                        <button
                          key={proc.id}
                          type="button"
                          onClick={() => handleToggleProcedure(proc.id)}
                          className={`px-2.5 py-1.5 rounded-lg border text-xs font-medium ${
                            procedureEseguite.includes(proc.id)
                              ? 'bg-purple-600 text-white border-purple-600'
                              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          {proc.label}
                        </button>
                      ))}
                    </div>

                    {procedureEseguite.includes('tavi') && (
                      <div className="pt-2">
                        <span className="text-[11px] font-semibold text-slate-600 block mb-1">Via di Accesso TAVI:</span>
                        <select
                          value={accessoChirurgico}
                          onChange={(e) => setAccessoChirurgico(e.target.value)}
                          className="w-full text-xs p-1.5 bg-white border border-slate-300 rounded"
                        >
                          <option value="percutaneo">Endovascolare trans-femorale (B) [35.21.4B]</option>
                          <option value="transapicale">Chirurgico trans-apicale (D) [35.21.6D]</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional checkboxes */}
                <div className="flex flex-wrap gap-4 pt-2 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer text-slate-700 font-medium">
                    <input
                      type="checkbox"
                      checked={dispositiviImpiantati.includes('robot')}
                      onChange={(e) => {
                        setDispositiviImpiantati(prev => 
                          e.target.checked ? [...prev, 'robot'] : prev.filter(x => x !== 'robot')
                        );
                      }}
                      className="w-4 h-4 text-purple-600 rounded"
                    />
                    <span>Utilizzo Chirurgia Robot-Assistita [00.R0.1W]</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-slate-700 font-medium">
                    <input
                      type="checkbox"
                      checked={antibiogrammaResistenzaDoc}
                      onChange={(e) => setAntibiogrammaResistenzaDoc(e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span>Antibiogramma positivo per antibiotico-resistenza (Z16)</span>
                  </label>
                </div>
              </div>

              {/* Action: Generate Proposal */}
              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-slate-500">
                  Valutazione deterministica secondo catalogo <strong>ICD-10-IM & CIPI 2025</strong>
                </div>
                <button
                  id="generate-proposal-btn"
                  onClick={handleGenerateProposal}
                  className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-sm shadow-md flex items-center gap-2 transition-transform active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  Proponi Codifica Ragionata
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Proposal Result View */
            <div className="space-y-6 animate-fade-in">
              {proposalResult && (
                <>
                  {/* Gate Notice */}
                  <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-700 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="font-bold text-sm text-emerald-300">
                          Proposta Metodologica Convalidata per Revisione Medica
                        </div>
                        <p className="text-xs text-slate-300">
                          {proposalResult.scoringStatus.reason}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-slate-800 border border-slate-600 px-2 py-1 rounded text-slate-300 uppercase font-semibold">
                      DM 23/10/2025
                    </span>
                  </div>

                  {/* Primary Diagnosis Box */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        Diagnosi Principale Proposta
                      </span>
                      <span className="text-xs font-bold font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                        {proposalResult.primaryDiagnosis?.code || 'NON ASSEGNATA'}
                      </span>
                    </div>

                    {proposalResult.primaryDiagnosis ? (
                      <div className="pl-6 border-l-2 border-blue-500 space-y-1">
                        <h5 className="font-bold text-slate-900 text-sm">
                          {proposalResult.primaryDiagnosis.title}
                        </h5>
                        <p className="text-xs text-slate-600">
                          <strong>Razionale clinico:</strong> {proposalResult.primaryDiagnosis.rationale}
                        </p>
                        <p className="text-[11px] text-blue-700 font-medium">
                          <strong>Fonte normativa:</strong> {proposalResult.primaryDiagnosis.source}
                        </p>
                      </div>
                    ) : (
                      <p className="text-xs text-rose-700 pl-6">
                        Nessuna diagnosi principale univoca desumibile. Verifica le informazioni mancanti.
                      </p>
                    )}
                  </div>

                  {/* Secondary Diagnoses Box */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-slate-600" />
                      Diagnosi Secondarie Convalidate ({proposalResult.secondaryDiagnoses.length})
                    </span>

                    {proposalResult.secondaryDiagnoses.length === 0 ? (
                      <p className="text-xs text-slate-500 italic pl-6">
                        Nessuna diagnosi secondaria registrata (R07 applicata: condizioni pregresse non rilevanti per l'episodio escluse).
                      </p>
                    ) : (
                      <div className="space-y-2 pl-4">
                        {proposalResult.secondaryDiagnoses.map((sec, idx) => (
                          <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-slate-800">{sec.title}</span>
                              <span className="font-mono font-bold text-blue-800 bg-blue-100 px-1.5 py-0.5 rounded">
                                {sec.code}
                              </span>
                            </div>
                            <p className="text-slate-600">{sec.rationale}</p>
                            <p className="text-[10px] text-slate-500 font-medium">{sec.source}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Procedures Box */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-900 flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-purple-600" />
                      Procedure e Interventi CIPI Proposti ({proposalResult.procedures.length})
                    </span>

                    {proposalResult.procedures.length === 0 ? (
                      <p className="text-xs text-slate-500 italic pl-6">
                        Nessuna procedura codificata in scheda.
                      </p>
                    ) : (
                      <div className="space-y-2 pl-4">
                        {proposalResult.procedures.map((pr, idx) => (
                          <div key={idx} className="p-3 bg-purple-50/50 rounded-lg border border-purple-200 text-xs space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-purple-950">{pr.title}</span>
                              <div className="flex items-center gap-1">
                                {pr.isComplementaryW && (
                                  <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-bold">
                                    Complementare W
                                  </span>
                                )}
                                <span className="font-mono font-bold text-purple-800 bg-purple-100 px-1.5 py-0.5 rounded">
                                  {pr.code}
                                </span>
                              </div>
                            </div>
                            <p className="text-slate-600">{pr.rationale}</p>
                            <p className="text-[10px] text-slate-500 font-medium">{pr.source}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Rules Applied and Documentation Gaps */}
                  <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                      Regole Ufficiali Applicate alla Soluzione:
                    </span>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      {proposalResult.rulesApplied.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Missing Info warning if any */}
                  {proposalResult.missingInformation.length > 0 && (
                    <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl text-xs text-rose-900 space-y-1">
                      <span className="font-bold flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4 text-rose-600" />
                        Elementi da completare in cartella clinica:
                      </span>
                      {proposalResult.missingInformation.map((m, i) => (
                        <p key={i} className="pl-5">{m}</p>
                      ))}
                    </div>
                  )}

                  {/* Bottom Navigation */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => setActiveStep('form')}
                      className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-xl text-xs transition-colors"
                    >
                      ← Modifica Parametri
                    </button>

                    <button
                      id="apply-proposal-to-sdo-btn"
                      onClick={handleApply}
                      className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-sm transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Applica Proposta alla Scheda SDO Attiva
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div>
            Metodo: <strong>Tutor SDO • Motore Regole Ufficiali ISS / NSIS-CLASS</strong>
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
