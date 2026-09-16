import React, { useState, useEffect } from 'react';
import { LogIn, LogOut, CheckCircle, AlertTriangle, HardDrive, FileText, ExternalLink, RefreshCw } from 'lucide-react';
import { User } from 'firebase/auth';
import { initAuth, googleSignIn, logout } from '../services/auth';
import { uploadSdoReportToDrive, listSdoReportsFromDrive, DriveFile } from '../services/drive';

interface GoogleDriveIntegrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportTitle?: string;
  reportContent?: string;
}

export const GoogleDriveIntegrationModal: React.FC<GoogleDriveIntegrationModalProps> = ({
  isOpen,
  onClose,
  reportTitle = 'Report_SDO_Debriefing',
  reportContent = ''
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastSavedFile, setLastSavedFile] = useState<DriveFile | null>(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, currentToken) => {
        setUser(currentUser);
        setToken(currentToken);
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user && token && isOpen) {
      loadDriveFiles();
    }
  }, [user, token, isOpen]);

  const loadDriveFiles = async () => {
    setLoadingFiles(true);
    try {
      const driveFiles = await listSdoReportsFromDrive();
      setFiles(driveFiles);
    } catch (err: any) {
      console.error('Error loading files from Drive', err);
    } finally {
      setLoadingFiles(false);
    }
  };

  const handleSignIn = async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setToken(res.accessToken);
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Accesso non riuscito.');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      setUser(null);
      setToken(null);
      setFiles([]);
    } catch (err: any) {
      console.error('Signout error', err);
    }
  };

  const handleSaveToDrive = async () => {
    if (!reportContent) {
      setErrorMessage('Nessun contenuto da salvare nel report.');
      return;
    }

    const confirmed = window.confirm(
      `Confermi il salvataggio del report di debriefing SDO "${reportTitle}.txt" sul tuo account Google Drive personale?`
    );
    if (!confirmed) return;

    setSaveStatus('saving');
    setErrorMessage(null);

    try {
      const saved = await uploadSdoReportToDrive(reportTitle, reportContent);
      setLastSavedFile(saved);
      setSaveStatus('success');
      await loadDriveFiles();
    } catch (err: any) {
      setSaveStatus('error');
      setErrorMessage(err?.message || 'Errore durante il caricamento su Google Drive.');
    }
  };

  if (!isOpen) return null;

  return (
    <div id="drive-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div id="drive-modal-card" className="bg-white rounded-xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <HardDrive className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-base tracking-tight">Integrazione Google Drive</h3>
              <p className="text-xs text-slate-300">Archiviazione debriefing e audit SDO (DM 23/10/2025)</p>
            </div>
          </div>
          <button
            id="close-drive-modal-btn"
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors text-lg p-1"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* User state */}
          {!user ? (
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 space-y-3">
              <p className="text-sm text-slate-700 leading-relaxed">
                Effettua l'accesso con il tuo account Google per salvare direttamente sul tuo <strong>Google Drive</strong> i report di debriefing clinico, le schede di transcodifica ICD-10-IM / CIPI e gli audit formativi SDO.
              </p>
              <button
                id="google-signin-btn"
                onClick={handleSignIn}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-2.5 px-4 rounded-lg shadow-xs transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
                {loading ? 'Connessione in corso...' : 'Accedi con Google'}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || 'Utente'} className="w-9 h-9 rounded-full border border-slate-300" />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-slate-700 text-white flex items-center justify-center font-semibold text-sm">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-sm text-slate-800">{user.displayName || user.email}</div>
                    <div className="text-xs text-slate-500">{user.email}</div>
                  </div>
                </div>
                <button
                  id="google-signout-btn"
                  onClick={handleSignOut}
                  className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-red-600 font-medium px-2 py-1 border border-slate-300 rounded hover:border-red-300 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Esci
                </button>
              </div>

              {/* Action to save current report */}
              {reportContent && (
                <div className="border border-blue-100 bg-blue-50/60 rounded-lg p-4 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-900">Salvataggio Documento Attuale</div>
                  <div className="text-sm text-slate-700 font-mono bg-white p-2 border border-slate-200 rounded text-xs truncate">
                    {reportTitle}.txt
                  </div>
                  <button
                    id="save-to-drive-action-btn"
                    onClick={handleSaveToDrive}
                    disabled={saveStatus === 'saving'}
                    className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors shadow-xs"
                  >
                    {saveStatus === 'saving' ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        Salvataggio in corso...
                      </>
                    ) : (
                      <>
                        <HardDrive className="w-4 h-4" />
                        Salva questo Debriefing su Google Drive
                      </>
                    )}
                  </button>

                  {saveStatus === 'success' && (
                    <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium bg-emerald-50 p-2 rounded border border-emerald-200">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>File salvato con successo nel tuo Google Drive!</span>
                      {lastSavedFile?.webViewLink && (
                        <a
                          href={lastSavedFile.webViewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto inline-flex items-center gap-1 text-blue-700 underline text-xs"
                        >
                          Apri <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* List recent files in drive */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span>Report SDO salvati di recente su Drive</span>
                  <button
                    onClick={loadDriveFiles}
                    disabled={loadingFiles}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 font-normal"
                  >
                    <RefreshCw className={`w-3 h-3 ${loadingFiles ? 'animate-spin' : ''}`} />
                    Aggiorna
                  </button>
                </div>
                <div className="max-h-40 overflow-y-auto divide-y divide-slate-100 border border-slate-200 rounded-lg bg-slate-50/50">
                  {files.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-400">
                      {loadingFiles ? 'Caricamento file...' : 'Nessun report salvato finora.'}
                    </div>
                  ) : (
                    files.map((f) => (
                      <div key={f.id} className="p-2.5 px-3 flex items-center justify-between hover:bg-white text-xs">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <FileText className="w-4 h-4 text-slate-500 shrink-0" />
                          <span className="font-medium text-slate-700 truncate">{f.name}</span>
                        </div>
                        {f.webViewLink && (
                          <a
                            href={f.webViewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0 ml-2 font-medium"
                          >
                            Visualizza <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="flex items-start gap-2 bg-red-50 text-red-700 text-xs p-3 rounded-lg border border-red-200">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="pt-2 border-t border-slate-100 flex justify-end">
            <button
              id="close-drive-modal-footer-btn"
              onClick={onClose}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
