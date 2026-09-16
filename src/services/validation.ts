import type { CatalogEntry, UserSubmission } from '../types';
import { normalizeCode } from './catalogSearch';
import { LEGACY_CATALOG_DATA } from '../data/catalog';
import { CATALOG_STATUS } from '../data/catalogStatus';

export interface ValidationIssue { field: string; level: 'error' | 'unverified'; message: string }
export interface SubmissionCheck { status: 'invalid' | 'not_evaluable'; issues: ValidationIssue[]; score: null }

/** Syntax can reject impossible input, but can NEVER prove catalog membership. */
export function checkSubmission(submission: UserSubmission): SubmissionCheck {
  const issues: ValidationIssue[] = [];
  const rows: {code: string; desc: string; field: string; system: CatalogEntry['system']; required?: boolean}[] = [
    {code: submission.primaryDiagnosisCode, desc: submission.primaryDiagnosisDesc, field: 'Diagnosi principale', system: 'ICD-10-IM', required: true},
    ...submission.secondaryDiagnoses.map((r,i) => ({...r, field: `Secondaria ${i+1}`, system: 'ICD-10-IM' as const})),
    ...submission.procedureCodes.map((r,i) => ({...r, field: `Procedura ${i+1}`, system: 'CIPI' as const}))
  ];
  const seen = new Set<string>();
  for (const row of rows) {
    if (!row.code.trim() && !row.desc.trim() && !row.required) continue;
    const code = normalizeCode(row.code);
    if (!code) { issues.push({field:row.field,level:'error',message:'Codice mancante.'}); continue; }
    // ICD-10-IM permits 3–6 coding characters; accepted syntax is not a validity claim.
    const syntax = row.system === 'ICD-10-IM' ? /^[A-Z][0-9]{2}[A-Z0-9]{0,3}$/ : /^[0-9]{2}[A-Z0-9]{4}$/;
    if (!syntax.test(code)) {
      issues.push({field:row.field,level:'error',message:'Formato incompatibile con la classificazione selezionata. Non troncare o convertire il codice per analogia.'});
      continue;
    }
    const key = `${row.system}:${code}`;
    if (seen.has(key)) issues.push({field:row.field,level:'error',message:'Codice duplicato nella stessa classificazione.'});
    seen.add(key);
    const entry = LEGACY_CATALOG_DATA.find(e => e.system === row.system && normalizeCode(e.code) === code);
    if (entry && !entry.terminal) issues.push({field:row.field,level:'unverified',message:'Il campione indica una rubrica non terminale: consultare i discendenti nel sistematico ufficiale.'});
    else issues.push({field:row.field,level:'unverified',message:entry ? 'Presente solo nel campione editoriale: esistenza, descrizione e terminalità da verificare nella release ufficiale.' : 'Non presente nel campione; l’assenza non prova che il codice sia inesistente. Serve il catalogo completo.'});
    if (row.system === 'CIPI' && code.endsWith('W')) issues.push({field:row.field,level:'unverified',message:'Verificare associazione esplicita a procedura non-W compatibile; la sola presenza di un altro codice non basta.'});
  }
  issues.push({field:'Valutazione',level:'unverified',message:CATALOG_STATUS.reason});
  return {status:issues.some(i => i.level === 'error') ? 'invalid' : 'not_evaluable', issues, score:null};
}
