import React, { useState } from 'react';
import { 
  HeartPulse, 
  Scissors, 
  Bone, 
  Brain, 
  Stethoscope, 
  Baby, 
  Ambulance,
  Activity,
  CheckCircle, 
  AlertCircle, 
  Info, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  RotateCcw, 
  FileText, 
  HardDrive,
  Send,
  HelpCircle,
  Clock,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  BookOpen
} from 'lucide-react';
import { ClinicalCase, Specialty, UserSubmission, CatalogEntry, GuidedProposalResult } from '../types';
import { SPECIALTIES, CLINICAL_CASES } from '../data';
import { CodeSearchModal } from './CodeSearchModal';
import { GuidedCaseModal } from './GuidedCaseModal';

interface PracticePlaygroundProps {
  onOpenDriveModal: (reportTitle: string, reportContent: string) => void;
}

export const PracticePlayground: React.FC<PracticePlaygroundProps> = ({ onOpenDriveModal }) => {
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string | null>('pronto_soccorso');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>('meu-1');
  const [complexityFilter, setComplexityFilter] = useState<'all' | 'Base' | 'Intermedio' | 'Avanzato'>('all');

  // Modal States
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isGuidedModalOpen, setIsGuidedModalOpen] = useState(false);

  // User input states
  const [primaryCode, setPrimaryCode] = useState('');
  const [primaryDesc, setPrimaryDesc] = useState('');
  
  const [secondaryDiagnoses, setSecondaryDiagnoses] = useState<{ code: string; desc: string }[]>([
    { code: '', desc: '' }
  ]);

  const [procedures, setProcedures] = useState<{ code: string; desc: string }[]>([
    { code: '', desc: '' }
  ]);

  const [showDebriefing, setShowDebriefing] = useState(false);
  const [assistedAutofill, setAssistedAutofill] = useState(false);

  // Current active case
  const currentCase = CLINICAL_CASES.find(c => c.id === selectedCaseId) || CLINICAL_CASES[0];

  // Filter cases for selected specialty
  const availableCases = selectedSpecialtyId
    ? CLINICAL_CASES.filter(c => c.specialtyId === selectedSpecialtyId)
    : [];

  const filteredCases = availableCases.filter(c => {
    if (complexityFilter === 'all') return true;
    return c.complexity?.includes(complexityFilter);
  });

  const currentCaseIndex = availableCases.findIndex(c => c.id === (currentCase ? currentCase.id : ''));

  const handlePrevCase = () => {
    if (currentCaseIndex > 0) {
      handleSelectCase(availableCases[currentCaseIndex - 1].id);
    }
  };

  const handleNextCase = () => {
    if (currentCaseIndex < availableCases.length - 1) {
      handleSelectCase(availableCases[currentCaseIndex + 1].id);
    }
  };

  const handleSelectSpecialty = (specId: string) => {
    setSelectedSpecialtyId(specId);
    const firstCase = CLINICAL_CASES.find(c => c.specialtyId === specId);
    if (firstCase) {
      handleSelectCase(firstCase.id);
    } else {
      setSelectedCaseId(null);
    }
  };

  const handleSelectCase = (caseId: string) => {
    setSelectedCaseId(caseId);
    setShowDebriefing(false);
    setPrimaryCode('');
    setPrimaryDesc('');
    setSecondaryDiagnoses([{ code: '', desc: '' }]);
    setProcedures([{ code: '', desc: '' }]);
    setAssistedAutofill(false);
  };

  const handleAddSecondary = () => {
    setSecondaryDiagnoses(prev => [...prev, { code: '', desc: '' }]);
  };

  const handleRemoveSecondary = (index: number) => {
    setSecondaryDiagnoses(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpdateSecondary = (index: number, field: 'code' | 'desc', val: string) => {
    setSecondaryDiagnoses(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: val };
      return copy;
    });
  };

  const handleAddProcedure = () => {
    setProcedures(prev => [...prev, { code: '', desc: '' }]);
  };

  const handleRemoveProcedure = (index: number) => {
    setProcedures(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpdateProcedure = (index: number, field: 'code' | 'desc', val: string) => {
    setProcedures(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: val };
      return copy;
    });
  };

  const handleSelectCodeFromSearch = (entry: CatalogEntry, targetRole: 'primary' | 'secondary' | 'procedure') => {
    if (targetRole === 'primary') {
      setPrimaryCode(entry.code);
      setPrimaryDesc(entry.title);
    } else if (targetRole === 'secondary') {
      setSecondaryDiagnoses(prev => {
        const filtered = prev.filter(d => d.code.trim() !== '');
        return [...filtered, { code: entry.code, desc: entry.title }];
      });
    } else if (targetRole === 'procedure') {
      setProcedures(prev => {
        const filtered = prev.filter(p => p.code.trim() !== '');
        return [...filtered, { code: entry.code, desc: entry.title }];
      });
    }
  };

  const handleApplyGuidedProposal = (proposal: GuidedProposalResult) => {
    if (proposal.primaryDiagnosis) {
      setPrimaryCode(proposal.primaryDiagnosis.code);
      setPrimaryDesc(proposal.primaryDiagnosis.title);
    }
    if (proposal.secondaryDiagnoses.length > 0) {
      setSecondaryDiagnoses(proposal.secondaryDiagnoses.map(d => ({ code: d.code, desc: d.title })));
    } else {
      setSecondaryDiagnoses([{ code: '', desc: '' }]);
    }
    if (proposal.procedures.length > 0) {
      setProcedures(proposal.procedures.map(p => ({ code: p.code, desc: p.title })));
    } else {
      setProcedures([{ code: '', desc: '' }]);
    }
    setShowDebriefing(false);
  };

  const handleSubmitEvaluation = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDebriefing(true);
  };

  // Generate audit text report for Drive upload
  const generateDriveReportContent = (): string => {
    if (!currentCase) return '';

    return `===============================================================
REPORT DI DEBRIEFING CLINICO SDO - TRANSIZIONE ICD-10-IM E CIPI
Normativa: DM 23 ottobre 2025 | Fonte: FAD ISS NSIS-CLASS
Data e ora: ${new Date().toLocaleString('it-IT')}
===============================================================

CASO CLINICO SIMULATO:
Titolo: ${currentCase.title}
Paziente: ${currentCase.clinicalScenario.patientAgeSex}
Motivo Ricovero: ${currentCase.clinicalScenario.admissionReason}
Anamnesi: ${currentCase.clinicalScenario.anamnesis}
Decorso Ospedaliero: ${currentCase.clinicalScenario.hospitalCourse}
Procedure Eseguite: ${currentCase.clinicalScenario.proceduresConducted}
Esito Dimissione: ${currentCase.clinicalScenario.dischargeStatus}

---------------------------------------------------------------
CODIFICA PROPOSTA DAL MEDICO COMPILATORE:
- Diagnosi Principale: [${primaryCode || 'NON SPECIFICATA'}] ${primaryDesc}
- Diagnosi Secondarie:
${secondaryDiagnoses.filter(d => d.code).map(d => `  * [${d.code}] ${d.desc}`).join('\n') || '  (Nessuna inserita)'}
- Procedure (CIPI):
${procedures.filter(p => p.code).map(p => `  * [${p.code}] ${p.desc}`).join('\n') || '  (Nessuna inserita)'}

---------------------------------------------------------------
CODIFICA UFFICIALE VALIDATA (ICD-10-IM & CIPI v. 2025):
- Diagnosi Principale: [${currentCase.solution.icd10.primaryDiagnosis.code}] ${currentCase.solution.icd10.primaryDiagnosis.description}
- Diagnosi Secondarie Validate:
${currentCase.solution.icd10.secondaryDiagnoses.map(d => `  * [${d.code}] ${d.description}${d.notes ? ` (${d.notes})` : ''}`).join('\n')}
- Procedure Validate (CIPI):
${currentCase.solution.icd10.procedures.map(p => `  * [${p.code}] ${p.description}`).join('\n')}

---------------------------------------------------------------
CONFRONTO CRITICO CON IL PREGRESSO ICD-9-CM (v. 2007):
- Diagnosi Principale ICD-9: [${currentCase.solution.icd9Comparison.primaryDiagnosis.code}] ${currentCase.solution.icd9Comparison.primaryDiagnosis.description}
- Diagnosi Secondarie ICD-9:
${currentCase.solution.icd9Comparison.secondaryDiagnoses.map(d => `  * [${d.code}] ${d.description}`).join('\n')}
- Procedure ICD-9:
${currentCase.solution.icd9Comparison.procedures.map(p => `  * [${p.code}] ${p.description}`).join('\n')}

---------------------------------------------------------------
REGOLE DI CODIFICA APPLICATE (MINISTERIALI / NSIS-CLASS):
${currentCase.solution.rulesAppliedExplanation.map(r => `• ${r}`).join('\n')}

---------------------------------------------------------------
ANALISI DEGLI ERRORI COGNITIVI COMUNI (ICD-9 LEGACY):
${currentCase.solution.commonCognitiveErrors.map(e => `! ${e}`).join('\n')}

---------------------------------------------------------------
INDICAZIONI PER L'INTEGRAZIONE DELLA DOCUMENTAZIONE IN CARTELLA CLINICA:
${currentCase.solution.chartDocumentationAdvice}
`;
  };

  const getSpecialtyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ambulance': return <Ambulance className="w-5 h-5 text-red-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-600" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-red-500" />;
      case 'Scissors': return <Scissors className="w-5 h-5 text-indigo-500" />;
      case 'Bone': return <Bone className="w-5 h-5 text-amber-500" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-500" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-blue-500" />;
      case 'Baby': return <Baby className="w-5 h-5 text-pink-500" />;
      default: return <Stethoscope className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-6" id="practice-playground-view">
      {/* Specialty Selector Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Seleziona Branca Specialistica (8 Discipline • 20 Casi Ciascuna)</h3>
            <p className="text-xs text-slate-500">Casi clinici simulati con conformità al DM 23/10/2025 ed evidenza di CC/MCC, ICD-10-IM e CIPI</p>
          </div>
          <span className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded font-medium border border-blue-100">
            DM 23/10/2025 • NSIS-CLASS
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {SPECIALTIES.map((spec) => {
            const isSelected = selectedSpecialtyId === spec.id;
            const casesInSpec = CLINICAL_CASES.filter(c => c.specialtyId === spec.id).length;
            return (
              <button
                key={spec.id}
                id={`specialty-card-${spec.id}`}
                onClick={() => handleSelectSpecialty(spec.id)}
                className={`flex flex-col items-center text-center p-3 rounded-xl border text-xs font-semibold transition-all ${
                  isSelected
                    ? 'border-blue-700 bg-blue-50/80 text-blue-950 shadow-xs ring-2 ring-blue-600'
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 text-slate-700 hover:bg-slate-100/60'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-2">
                  {getSpecialtyIcon(spec.iconName)}
                </div>
                <span className="leading-tight text-[11px] font-bold line-clamp-2">{spec.name}</span>
                <span className="mt-1.5 text-[10px] font-medium text-slate-500 bg-white/80 px-1.5 py-0.5 rounded-full border border-slate-200">
                  {casesInSpec} casi
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Case Navigator Bar (20 cases per specialty) */}
      {selectedSpecialtyId && availableCases.length > 0 && currentCase && (
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md">
                Caso {currentCaseIndex + 1} di {availableCases.length}
              </span>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  {SPECIALTIES.find(s => s.id === selectedSpecialtyId)?.name}
                </h4>
                <p className="text-[11px] text-slate-500">
                  20 casi simulati per la transizione ICD-10-IM / CIPI (DM 23/10/2025)
                </p>
              </div>
            </div>

            {/* Complexity Filter & Navigation Controls */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-xs font-medium border border-slate-200">
                <span className="text-[10px] text-slate-400 px-1.5 font-bold uppercase">Filtro:</span>
                {(['all', 'Base', 'Intermedio', 'Avanzato'] as const).map(lvl => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setComplexityFilter(lvl)}
                    className={`px-2 py-1 rounded text-[11px] font-semibold transition-all ${
                      complexityFilter === lvl
                        ? 'bg-white text-blue-700 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lvl === 'all' ? 'Tutti (20)' : lvl}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevCase}
                  disabled={currentCaseIndex <= 0}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700"
                  title="Caso precedente"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextCase}
                  disabled={currentCaseIndex >= availableCases.length - 1}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-slate-700"
                  title="Caso successivo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Case Jump Grid (1 to 20) */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-slate-500 mr-1">Casi Simulati:</span>
            {availableCases.map((c, idx) => {
              const isCurrent = c.id === currentCase.id;
              const isFilteredOut = complexityFilter !== 'all' && !c.complexity?.includes(complexityFilter);
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => handleSelectCase(c.id)}
                  className={`w-7 h-7 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${
                    isCurrent
                      ? 'bg-blue-700 text-white shadow-xs ring-2 ring-blue-300'
                      : isFilteredOut
                      ? 'opacity-30 border border-slate-200 bg-slate-50 text-slate-400'
                      : 'border border-slate-200 bg-slate-50 text-slate-700 hover:bg-blue-50 hover:border-blue-300'
                  }`}
                  title={`${c.title} (${c.complexity || 'Standard'})`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Workspace for Selected Specialty */}
      {selectedSpecialtyId && currentCase && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Clinical Case Presentation (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                    <FileText className="w-3.5 h-3.5" />
                    Caso #{currentCase.caseNumber || (currentCaseIndex + 1)} • Cartella SDO
                  </div>
                  <div className="flex items-center gap-1.5">
                    {currentCase.complexity && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border ${
                        currentCase.complexity.includes('Avanzato')
                          ? 'bg-rose-50 text-rose-700 border-rose-200'
                          : currentCase.complexity.includes('Intermedio')
                          ? 'bg-amber-50 text-amber-700 border-amber-200'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}>
                        {currentCase.complexity}
                      </span>
                    )}
                    {currentCase.subCategory && (
                      <span className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
                        {currentCase.subCategory}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="font-bold text-base text-slate-900 leading-snug">
                  {currentCase.title}
                </h3>
              </div>

              {/* Patient Badge */}
              <div className="flex items-center justify-between text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span className="font-semibold text-slate-600">Paziente:</span>
                <span className="font-medium text-slate-900">{currentCase.clinicalScenario.patientAgeSex}</span>
              </div>

              {/* Clinical Details */}
              <div className="space-y-3 text-xs leading-relaxed text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-xs text-red-950">
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                    Motivo di Ricovero:
                  </h4>
                  <p className="bg-red-50/50 p-2.5 rounded-lg border border-red-100/60 text-slate-800">
                    {currentCase.clinicalScenario.admissionReason}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-xs">Anamnesi Patologica Remota & Prossima:</h4>
                  <p className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-slate-700">
                    {currentCase.clinicalScenario.anamnesis}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-xs">Decorso Ospedaliero & Complicanze:</h4>
                  <p className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-slate-700">
                    {currentCase.clinicalScenario.hospitalCourse}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-xs text-indigo-950">
                    Procedure Chirurgiche / Interventistiche / Diagnostiche:
                  </h4>
                  <p className="bg-indigo-50/50 p-2.5 rounded-lg border border-indigo-100/60 text-slate-800">
                    {currentCase.clinicalScenario.proceduresConducted}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-xs">Esito alla Dimissione:</h4>
                  <p className="bg-emerald-50/40 p-2.5 rounded-lg border border-emerald-100/60 text-slate-800">
                    {currentCase.clinicalScenario.dischargeStatus}
                  </p>
                </div>
              </div>

              {/* Warning on clinical documentation completeness */}
              {currentCase.documentationGapsWarning && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Attenzione per il Medico Compilatore:</span>
                    <span>{currentCase.documentationGapsWarning}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Form & Debriefing (7 Cols) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Coding Exercise Form */}
            <form onSubmit={handleSubmitEvaluation} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-3 gap-3">
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Esercitazione di Codifica Medico-Statistica SDO</h4>
                  <p className="text-xs text-slate-500">Compila i campi applicando la logica ICD-10-IM (diagnosi) e CIPI (procedure)</p>
                </div>
                
                {/* Discrete Access Buttons for Tools */}
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    id="open-code-search-btn"
                    type="button"
                    onClick={() => setIsSearchModalOpen(true)}
                    className="text-xs font-semibold text-slate-700 hover:text-blue-700 flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-300 transition-colors"
                  >
                    <Search className="w-3.5 h-3.5 text-blue-600" />
                    Cerca un codice
                  </button>

                  <button
                    id="open-guided-case-btn"
                    type="button"
                    onClick={() => setIsGuidedModalOpen(true)}
                    className="text-xs font-semibold text-indigo-700 hover:text-indigo-900 flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-200 transition-colors"
                  >
                    <Stethoscope className="w-3.5 h-3.5 text-indigo-600" />
                    Codifica un caso
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPrimaryCode(currentCase.solution.icd10.primaryDiagnosis.code);
                      setPrimaryDesc(currentCase.solution.icd10.primaryDiagnosis.description);
                      setSecondaryDiagnoses(currentCase.solution.icd10.secondaryDiagnoses.map(d => ({ code: d.code, desc: d.description })));
                      setProcedures(currentCase.solution.icd10.procedures.map(p => ({ code: p.code, desc: p.description })));
                      setAssistedAutofill(true);
                    }}
                    className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1 bg-blue-50 px-2.5 py-1.5 rounded-md border border-blue-200"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Suggerisci Codici
                  </button>
                </div>
              </div>

              {/* Section 1: Diagnosi Principale */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
                    Diagnosi Principale (ICD-10-IM)
                  </label>
                  <span className="text-[11px] text-slate-400 font-mono">1 campo obbligatorio</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  <div className="sm:col-span-1">
                    <input
                      id="input-primary-code"
                      type="text"
                      placeholder="Codice (es. I21.0)"
                      value={primaryCode}
                      onChange={(e) => setPrimaryCode(e.target.value.toUpperCase())}
                      className="w-full text-xs font-mono font-bold uppercase p-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50/50"
                      required
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <input
                      id="input-primary-desc"
                      type="text"
                      placeholder="Descrizione clinica dettagliata"
                      value={primaryDesc}
                      onChange={(e) => setPrimaryDesc(e.target.value)}
                      className="w-full text-xs p-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-slate-50/50"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Diagnosi Secondarie */}
              <div className="space-y-2 border-t border-slate-100 pt-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block"></span>
                    Diagnosi Secondarie (Comorbilità e Complicanze ICD-10-IM)
                  </label>
                  <button
                    type="button"
                    onClick={handleAddSecondary}
                    className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Aggiungi diagnosi
                  </button>
                </div>

                <div className="space-y-2">
                  {secondaryDiagnoses.map((sec, idx) => (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                      <div className="sm:col-span-3">
                        <input
                          id={`input-secondary-code-${idx}`}
                          type="text"
                          placeholder="Codice"
                          value={sec.code}
                          onChange={(e) => handleUpdateSecondary(idx, 'code', e.target.value.toUpperCase())}
                          className="w-full text-xs font-mono font-bold uppercase p-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                        />
                      </div>
                      <div className="sm:col-span-8">
                        <input
                          id={`input-secondary-desc-${idx}`}
                          type="text"
                          placeholder="Descrizione condizione secondaria"
                          value={sec.desc}
                          onChange={(e) => handleUpdateSecondary(idx, 'desc', e.target.value)}
                          className="w-full text-xs p-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                        />
                      </div>
                      <div className="sm:col-span-1 flex justify-end">
                        {secondaryDiagnoses.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveSecondary(idx)}
                            className="text-slate-400 hover:text-red-600 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Procedure e Interventi (CIPI) */}
              <div className="space-y-2 border-t border-slate-100 pt-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                    Procedure & Interventi (Catalogo CIPI v. 2025)
                  </label>
                  <button
                    type="button"
                    onClick={handleAddProcedure}
                    className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Aggiungi procedura
                  </button>
                </div>

                <div className="space-y-2">
                  {procedures.map((proc, idx) => (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                      <div className="sm:col-span-3">
                        <input
                          id={`input-procedure-code-${idx}`}
                          type="text"
                          placeholder="Codice CIPI"
                          value={proc.code}
                          onChange={(e) => handleUpdateProcedure(idx, 'code', e.target.value.toUpperCase())}
                          className="w-full text-xs font-mono font-bold uppercase p-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                        />
                      </div>
                      <div className="sm:col-span-8">
                        <input
                          id={`input-procedure-desc-${idx}`}
                          type="text"
                          placeholder="Descrizione procedura chirurgica o diagnostica"
                          value={proc.desc}
                          onChange={(e) => handleUpdateProcedure(idx, 'desc', e.target.value)}
                          className="w-full text-xs p-2 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                        />
                      </div>
                      <div className="sm:col-span-1 flex justify-end">
                        {procedures.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveProcedure(idx)}
                            className="text-slate-400 hover:text-red-600 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setPrimaryCode('');
                    setPrimaryDesc('');
                    setSecondaryDiagnoses([{ code: '', desc: '' }]);
                    setProcedures([{ code: '', desc: '' }]);
                    setShowDebriefing(false);
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Resetta campi
                </button>

                <button
                  id="submit-sdo-form-btn"
                  type="submit"
                  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-6 py-2.5 rounded-lg shadow-sm transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  Valida Codifica e Mostra Debriefing
                </button>
              </div>
            </form>

            {/* Debriefing & Feedback Validato */}
            {showDebriefing && (
              <div id="debriefing-section" className="bg-slate-900 text-white rounded-xl p-6 shadow-md space-y-6 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      Feedback Validato & Correzione del Tutor SDO
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      Soluzione Ufficiale & Confronto Metodologico
                    </h4>
                  </div>

                  {/* Button to save to Google Drive */}
                  <button
                    id="export-to-drive-btn"
                    onClick={() => {
                      const reportTitle = `Debriefing_SDO_${currentCase.specialtyId}_${currentCase.id}`;
                      const content = generateDriveReportContent();
                      onOpenDriveModal(reportTitle, content);
                    }}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-colors shrink-0 shadow-xs"
                  >
                    <HardDrive className="w-3.5 h-3.5" />
                    Salva Debriefing su Google Drive
                  </button>
                </div>

                {/* 1. Codifica Ufficiale ICD-10-IM e CIPI */}
                <div className="space-y-3">
                  <h5 className="text-xs font-bold text-blue-300 uppercase tracking-wide">
                    1. Soluzione Corretta Ufficiale (Standard 2025)
                  </h5>
                  <div className="bg-slate-800/80 rounded-lg p-4 border border-slate-700 space-y-3 text-xs">
                    <div>
                      <span className="text-slate-400 block font-semibold mb-1">Diagnosi Principale (ICD-10-IM):</span>
                      <div className="font-mono text-emerald-400 font-bold bg-slate-900/90 p-2 rounded border border-slate-700">
                        [{currentCase.solution.icd10.primaryDiagnosis.code}] {currentCase.solution.icd10.primaryDiagnosis.description}
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-400 block font-semibold mb-1">Diagnosi Secondarie Validate:</span>
                      <div className="space-y-1.5">
                        {currentCase.solution.icd10.secondaryDiagnoses.map((d, i) => (
                          <div key={i} className="font-mono text-blue-200 bg-slate-900/60 p-2 rounded border border-slate-800 flex items-baseline gap-2">
                            <span className="text-blue-400 font-bold">[{d.code}]</span>
                            <span>{d.description}</span>
                            {d.notes && <span className="text-[11px] text-slate-400 italic">({d.notes})</span>}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-400 block font-semibold mb-1">Procedure e Interventi (CIPI v. 2025):</span>
                      <div className="space-y-1.5">
                        {currentCase.solution.icd10.procedures.map((p, i) => (
                          <div key={i} className="font-mono text-amber-200 bg-slate-900/60 p-2 rounded border border-slate-800 flex items-baseline gap-2">
                            <span className="text-amber-400 font-bold">[{p.code}]</span>
                            <span>{p.description}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Confronto Critico con ICD-9-CM */}
                <div className="space-y-2">
                  <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                    2. Come veniva codificato in ICD-9-CM (v. 2007)
                  </h5>
                  <div className="bg-amber-950/30 border border-amber-900/50 rounded-lg p-3.5 text-xs text-amber-100 space-y-2">
                    <div>
                      <span className="text-amber-300/80 font-semibold">Diagnosi Principale: </span>
                      <span className="font-mono">[{currentCase.solution.icd9Comparison.primaryDiagnosis.code}] {currentCase.solution.icd9Comparison.primaryDiagnosis.description}</span>
                    </div>
                    {currentCase.solution.icd9Comparison.procedures.length > 0 && (
                      <div>
                        <span className="text-amber-300/80 font-semibold">Procedure storiche: </span>
                        <span className="font-mono">
                          {currentCase.solution.icd9Comparison.procedures.map(p => `[${p.code}] ${p.description}`).join(' | ')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. Regole di Selezione Applicate (DM 23/10/2025) */}
                <div className="space-y-2">
                  <h5 className="text-xs font-bold text-indigo-300 uppercase tracking-wide">
                    3. Regole di Selezione e Linee Guida NSIS-CLASS Applicate
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {currentCase.solution.rulesAppliedExplanation.map((rule, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-800/50 p-2.5 rounded-lg border border-slate-800">
                        <span className="text-indigo-400 font-bold shrink-0">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Analisi degli Errori Cognitivi Comuni */}
                <div className="space-y-2">
                  <h5 className="text-xs font-bold text-red-300 uppercase tracking-wide">
                    4. Errori Cognitivi Comuni (Mindset ICD-9-CM da Disimparare)
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {currentCase.solution.commonCognitiveErrors.map((err, i) => (
                      <li key={i} className="flex items-start gap-2 bg-red-950/20 p-2.5 rounded-lg border border-red-900/30 text-red-200">
                        <span className="text-red-400 font-bold shrink-0">!</span>
                        <span>{err}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 5. Documentazione in Cartella Clinica */}
                <div className="bg-slate-800/70 border border-slate-700 rounded-lg p-4 text-xs space-y-1">
                  <span className="text-slate-400 font-semibold block">
                    Integrazione Documentazione Sanitaria (Pratica Clinica del Compilatore):
                  </span>
                  <p className="text-slate-200 leading-relaxed">
                    {currentCase.solution.chartDocumentationAdvice}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {!selectedSpecialtyId && (
        <div className="bg-white border border-slate-200 rounded-xl p-12 text-center shadow-xs">
          <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-3">
            <Stethoscope className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-slate-800 text-base mb-1">Seleziona una Branca Specialistica</h4>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Scegli tra Cardiologia, Chirurgia Generale, Ortopedia, Neurologia, Medicina Interna, Ostetricia, Pronto Soccorso o Terapia Intensiva per visualizzare un caso clinico simulato e iniziare l'addestramento.
          </p>
        </div>
      )}

      {/* Code Search Modal («Cerca un codice») */}
      <CodeSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectCode={handleSelectCodeFromSearch}
      />

      {/* Guided Case Modal («Codifica un caso») */}
      <GuidedCaseModal
        isOpen={isGuidedModalOpen}
        onClose={() => setIsGuidedModalOpen(false)}
        onApplyProposal={handleApplyGuidedProposal}
        currentCaseContext={currentCase ? {
          title: currentCase.title,
          scenarioText: currentCase.clinicalScenario.admissionReason + ' ' + currentCase.clinicalScenario.hospitalCourse
        } : undefined}
      />
    </div>
  );
};
