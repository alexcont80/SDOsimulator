import React, { useState } from 'react';
import { 
  Building2, 
  BookOpen, 
  GraduationCap, 
  FileSpreadsheet, 
  HardDrive, 
  ExternalLink,
  HelpCircle,
  AlertTriangle,
  Scale
} from 'lucide-react';
import { EducationalModule } from './components/EducationalModule';
import { PracticePlayground } from './components/PracticePlayground';
import { GoogleDriveIntegrationModal } from './components/GoogleDriveModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<'theory' | 'practice'>('practice');
  const [isDriveModalOpen, setIsDriveModalOpen] = useState(false);
  const [currentReportToExport, setCurrentReportToExport] = useState<{ title: string; content: string }>({
    title: 'Report_SDO_Transizione',
    content: ''
  });

  const handleOpenDriveModal = (reportTitle: string, reportContent: string) => {
    setCurrentReportToExport({ title: reportTitle, content: reportContent });
    setIsDriveModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 flex flex-col font-sans antialiased">
      {/* Top Ministerial & Institutional Header */}
      <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Identity */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-xs border border-blue-400/30">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base tracking-tight text-white">
                    Tutor SDO ICD-10-IM & CIPI
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-900/90 text-blue-300 border border-blue-700">
                    v. 2025
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Ambiente di addestramento per Medici Compilatori (DM 23/10/2025 • NSIS-CLASS)
                </p>
              </div>
            </div>

            {/* Right Nav actions */}
            <div className="flex items-center gap-2">
              <button
                id="header-drive-btn"
                onClick={() => setIsDriveModalOpen(true)}
                className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                title="Gestione archiviazione Google Drive"
              >
                <HardDrive className="w-4 h-4 text-blue-400" />
                <span className="hidden sm:inline">Google Drive</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-slate-950/80 border-t border-slate-850 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-1.5">
            <nav className="flex items-center space-x-1 sm:space-x-4">
              <button
                id="nav-tab-theory"
                onClick={() => setActiveTab('theory')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'theory'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Fase 1: Modulo Educazionale (Teoria)</span>
              </button>

              <button
                id="nav-tab-practice"
                onClick={() => setActiveTab('practice')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'practice'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Fase 2: Playground Pratico (Casi Clinici)</span>
              </button>
            </nav>

            {/* Legal Notice Indicator */}
            <div className="hidden md:flex items-center gap-1.5 text-[11px] text-slate-400">
              <Scale className="w-3.5 h-3.5 text-slate-500" />
              <span>Entrata in vigore: 1° gennaio 2027</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1">
        {activeTab === 'theory' ? (
          <EducationalModule onStartPractice={() => setActiveTab('practice')} />
        ) : (
          <PracticePlayground onOpenDriveModal={handleOpenDriveModal} />
        )}
      </main>

      {/* Institutional Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-5 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <strong>Playground per Medici Compilatori di Scheda di Dimissione Ospedaliera (SDO)</strong>
            <div className="text-[11px] text-slate-400">
              Riferimenti normativi: DM 23 ottobre 2025 • FAD ISS "NSIS-CLASS" • ICD-10-IM & CIPI v. 2025.
            </div>
          </div>
          <div className="text-[11px] text-slate-400 text-center sm:text-right">
            <span>Uso esclusivo medico-statistico e di audit della documentazione clinica.</span>
          </div>
        </div>
      </footer>

      {/* Google Drive Modal */}
      <GoogleDriveIntegrationModal
        isOpen={isDriveModalOpen}
        onClose={() => setIsDriveModalOpen(false)}
        reportTitle={currentReportToExport.title}
        reportContent={currentReportToExport.content}
      />
    </div>
  );
}
