import { LEGACY_CATALOG_DATA, GUIDED_EXAMPLES_DATA } from '../data/catalog';
import { CatalogEntry, GuidedCaseExample, GuidedProposalResult } from '../types';

export interface SearchOptions {
  query: string;
  system?: 'ICD-10-IM' | 'CIPI' | 'ALL';
  terminalOnly?: boolean;
  specialtyTag?: string;
  limit?: number;
}

export const normalizeSearch = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
export const normalizeCode = (value: string) => value.toUpperCase().replace(/[.\s-]/g, '');

// A bounded typo match for words only: never fuzzy-match code identifiers.
function oneEdit(a: string, b: string): boolean {
  if (Math.abs(a.length - b.length) > 1) return false;
  if (a.length === b.length) {
    const diff = [...a].map((v, i) => v === b[i] ? -1 : i).filter(i => i >= 0);
    return diff.length <= 1 || (diff.length === 2 && diff[1] === diff[0] + 1 && a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]);
  }
  const [short, long] = a.length < b.length ? [a,b] : [b,a];
  let i = 0, j = 0, skipped = false;
  while (i < short.length && j < long.length) {
    if (short[i] === long[j]) { i++; j++; }
    else if (skipped) return false;
    else { skipped = true; j++; }
  }
  return true;
}

export function searchCatalog(options: SearchOptions): CatalogEntry[] {
  const query = normalizeSearch(options.query);
  const codeQuery = normalizeCode(query);
  const tokens = query.split(/\s+/).filter(Boolean);
  const codeLike = /\d/.test(query) || /^[a-z]$/i.test(query);
  const limit = options.limit === undefined ? 50 : Math.max(0, options.limit);
  return LEGACY_CATALOG_DATA.filter(entry =>
    (!options.system || options.system === 'ALL' || entry.system === options.system) &&
    (!options.terminalOnly || entry.terminal)
  ).map(entry => {
    const code = normalizeCode(entry.code);
    const title = normalizeSearch(entry.title);
    const terms = [title, ...(entry.synonyms || []), ...(entry.inclusions || [])].map(normalizeSearch);
    let score = !query ? 1 : 0;
    if (query && code === codeQuery) score = 100;
    else if (query && codeQuery && code.startsWith(codeQuery)) score = 90;
    else if (query && title.includes(query)) score = 80;
    else if (query && terms.some(term => term.includes(query))) score = 70;
    else if (!codeLike && tokens.length && tokens.every(token => terms.some(term => term.includes(token)))) score = 60;
    else if (!codeLike && tokens.length && tokens.every(token => token.length >= 4 && terms.some(term => term.split(/[^a-z]+/).some(word => oneEdit(token,word))))) score = 40;
    if (score && options.specialtyTag && entry.specialtyTags?.includes(options.specialtyTag)) score += 1;
    return {entry,score};
  }).filter(row => row.score > 0).sort((a,b) => b.score - a.score || a.entry.code.localeCompare(b.entry.code)).slice(0,limit).map(row => row.entry);
}

export function getCodeDetails(code: string, system?: CatalogEntry['system']): CatalogEntry | undefined {
  return LEGACY_CATALOG_DATA.find(entry => normalizeCode(entry.code) === normalizeCode(code) && (!system || entry.system === system));
}

export function getGuidedExamples(): GuidedCaseExample[] {
  return GUIDED_EXAMPLES_DATA;
}

export interface GuidedFormInput {
  setting: string;
  flusso: string;
  diagnosiFinaleDoc: string;
  acuzie: string;
  condizioniAssociate: string[];
  nonDocumentatoCondizioni: boolean;
  procedureEseguite: string[];
  accessoChirurgico: string;
  dispositiviImpiantati: string[];
  cpapApplicata: boolean;
  insufficienzaRespDocumentata: boolean;
  antibiogrammaResistenzaDoc: boolean;
  noteTestuali: string;
}

export function generateGuidedProposal(input: GuidedFormInput): GuidedProposalResult {
  const missingInfo: string[] = [];
  const rulesApplied: string[] = [];

  rulesApplied.push('R01: Codifica dipendente da versione catalogo (DM 23/10/2025)');
  rulesApplied.push('R06: Diagnosi principale come causa fondamentale o massimo assorbimento di risorse');

  let primaryDiag: GuidedProposalResult['primaryDiagnosis'] = null;
  const secondaryDiags: GuidedProposalResult['secondaryDiagnoses'] = [];
  const procs: GuidedProposalResult['procedures'] = [];

  // Setting check
  if (input.setting === 'PS/OBI senza ricovero' || input.flusso === 'PS/OBI') {
    rulesApplied.push('R12: Selezione di sintomo/reperto anomalo in assenza di diagnosi definitiva');
    if (input.diagnosiFinaleDoc === 'sintomo_dispnea') {
      primaryDiag = {
        code: 'R06.0',
        title: 'Dispnea',
        rationale: 'Nel setting di Pronto Soccorso/OBI senza ricovero e senza diagnosi eziologica accertata, il sintomo è la diagnosi principale corretta (Addendum E, R12).',
        system: 'ICD-10-IM',
        source: 'DM 23/10/2025 • FAD ISS Addendum E (p. 2)'
      };
    }
  } else {
    // Ordinary hospitalization
    if (input.diagnosiFinaleDoc === 'scompenso_acuto_ivs') {
      primaryDiag = {
        code: 'I50.1',
        title: 'Insufficienza ventricolare sinistra (Edema polmonare acuto cardiogeno)',
        rationale: 'Scompenso cardiaco acuto con edema polmonare cardiogeno documentato formalmente alla dimissione (R06).',
        system: 'ICD-10-IM',
        source: 'DM 23/10/2025 • ICD-10-IM v. 2025'
      };
    } else if (input.diagnosiFinaleDoc === 'scompenso_congestizio') {
      primaryDiag = {
        code: 'I50.0',
        title: 'Scompenso cardiaco congestizio',
        rationale: 'Insufficienza cardiaca congestizia globale documentata come causa principale del ricovero.',
        system: 'ICD-10-IM',
        source: 'ICD-10-IM v. 2025'
      };
    } else if (input.diagnosiFinaleDoc === 'stemi_anteriore') {
      primaryDiag = {
        code: 'I21.0',
        title: 'Infarto miocardico acuto con sopraslivellamento del tratto ST (STEMI) della parete anteriore',
        rationale: 'STEMI anteriore accertato con criteri elettrocardiografici e biochimici.',
        system: 'ICD-10-IM',
        source: 'FAD ISS Tutorial 2'
      };
    } else if (input.diagnosiFinaleDoc === 'nstemi') {
      primaryDiag = {
        code: 'I21.4',
        title: 'Infarto miocardico acuto subendocardico (NSTEMI)',
        rationale: 'Sindrome coronarica acuta non-STEMI accertata.',
        system: 'ICD-10-IM',
        source: 'FAD ISS Tutorial 2'
      };
    } else if (input.diagnosiFinaleDoc === 'frattura_femore') {
      primaryDiag = {
        code: 'S72.001',
        title: 'Frattura del collo del femore, chiusa',
        rationale: 'Traumatismo del collo femorale con codice alfanumerico terminale a 6 caratteri (Peculiarità IM).',
        system: 'ICD-10-IM',
        source: 'ICD-10-IM v. 2025 • Tutorial 2'
      };
    } else {
      missingInfo.push('Manca la specificazione univoca della diagnosi principale causale accertata alla dimissione.');
    }
  }

  // Secondary conditions validation (R07 check)
  if (input.nonDocumentatoCondizioni) {
    rulesApplied.push('R07: Non registrare diagnosi pregresse prive di impatto assistenziale o terapeutico');
  } else {
    if (input.condizioniAssociate.includes('ipertensione')) {
      secondaryDiags.push({
        code: 'I10',
        title: 'Ipertensione essenziale (primaria)',
        rationale: 'Ipertensione in trattamento continuativo durante il ricovero.',
        system: 'ICD-10-IM',
        source: 'ICD-10-IM v. 2025',
        confirmed: false
      });
    }
    if (input.condizioniAssociate.includes('fa_parossistica')) {
      secondaryDiags.push({
        code: 'I48.0',
        title: 'Fibrillazione atriale parossistica',
        rationale: 'Episodio aritmico trattato con farmaci antiaritmici o cardioversione.',
        system: 'ICD-10-IM',
        source: 'ICD-10-IM v. 2025',
        confirmed: false
      });
    }
    if (input.condizioniAssociate.includes('shock_cardiogeno')) {
      secondaryDiags.push({
        code: 'R57.0',
        title: 'Shock cardiogeno',
        rationale: 'Condizione selezionata: verificare documentazione e rilevanza per l’episodio; nessuna attribuzione CC/MCC.',
        system: 'ICD-10-IM',
        source: 'ICD-10-IM v. 2025',
        confirmed: false
      });
    }
    if (input.condizioniAssociate.includes('irc_stadio1')) {
      secondaryDiags.push({
        code: 'I12.00',
        title: 'Malattia renale ipertensiva con insufficienza renale cronica, stadio 1',
        rationale: 'Comorbilità renale documentata formalmente con stadio terminale a 6 caratteri.',
        system: 'ICD-10-IM',
        source: 'ICD-10-IM v. 2025',
        confirmed: false
      });
    }
  }

  // Critical rule: never deduce respiratory failure from CPAP/drugs alone!
  if (input.cpapApplicata) {
    procs.push({
      code: '93.90.00',
      title: 'Ventilazione meccanica non invasiva a pressione positiva continua (CPAP/NIV)',
      rationale: 'Supporto ventilatorio non invasivo erogato durante la degenza.',
      system: 'CIPI',
      source: 'CIPI 2025 • Sezione 93',
      confirmed: false
    });

    if (!input.insufficienzaRespDocumentata) {
      rulesApplied.push('DISCIPLINA CLINICA: Presenza di CPAP documentata, ma nessuna diagnosi di insufficienza respiratoria registrata dal medico. Vietata la deduzione automatica di diagnosi da procedure o farmaci.');
    }
  }
  if (input.insufficienzaRespDocumentata) missingInfo.push('Insufficienza respiratoria documentata: specificare tipo e acuzie; CPAP e sola diagnosi generica non autorizzano J96.0.');

  // Procedure checks
  if (input.procedureEseguite.includes('ptca_stent')) {
    procs.push({
      code: '36.05.1B',
      title: 'Angioplastica percutanea coronarica con impianto di stent',
      rationale: 'Procedura endovascolare percutanea coronarica (approccio B) con impianto di stent.',
      system: 'CIPI',
      source: 'CIPI 2025 • Sezione 36 (Tutorial 5, p. 7)',
      confirmed: false
    });

  }

  if (input.procedureEseguite.includes('tavi') && ['transapicale', 'transfemorale'].includes(input.accessoChirurgico)) {
    const isApical = input.accessoChirurgico === 'transapicale';
    procs.push({
      code: isApical ? '35.21.6D' : '35.21.4B',
      title: isApical 
        ? 'Impianto di valvola aortica biologica transcatetere [TAVI], trans-apicale'
        : 'Impianto di valvola aortica biologica transcatetere [TAVI], per via endovascolare trans-femorale percutanea',
      rationale: `Sostituzione valvolare percutanea con approccio ${isApical ? 'D (chirurgico apicale)' : 'B (transfemorale)'}.`,
      system: 'CIPI',
      source: 'CIPI 2025 • Sezione 35',
      confirmed: false
    });
  }

  if (input.procedureEseguite.includes('artroprotesi_anca')) {
    procs.push({
      code: '81.51.00',
      title: 'Sostituzione totale dell\'anca (Artroprotesi totale d\'anca)',
      rationale: 'Intervento ortopedico maggiore a cielo aperto.',
      system: 'CIPI',
      source: 'CIPI 2025 • Sezione 81',
      confirmed: false
    });
  }

  if (input.dispositiviImpiantati.includes('robot')) {
    rulesApplied.push('R27: Codice complementare W associato a procedura principale non-W');
    procs.push({
      code: '00.R0.1W',
      title: 'Chirurgia robot-assistita [RAS], sistema tele-operante',
      rationale: 'Codice complementare W indicante l\'ausilio del sistema robotico tele-operato.',
      system: 'CIPI',
      source: 'CIPI 2025 • Sezione 00 (Tutorial 5, p. 13)',
      isComplementaryW: true,
      confirmed: false
    });
  }

  if (input.antibiogrammaResistenzaDoc) missingInfo.push('Specificare microrganismo, resistenza e contesto clinico; nessun codice di resistenza assegnato automaticamente.');
  if (input.procedureEseguite.includes('tavi') && !['transapicale','transfemorale'].includes(input.accessoChirurgico)) missingInfo.push('Specificare accesso TAVI documentato: non dedurre la via transfemorale.');
  if (input.diagnosiFinaleDoc === 'sospetto_escluso') missingInfo.push('Specificare sospetto, sintomi, patologie pregresse e condizioni del flusso prima di proporre Z03/Z04.');
  if (input.setting === 'PS/OBI senza ricovero' && input.flusso === 'SDO') missingInfo.push('PS/OBI senza ricovero non è compatibile con una scheda di ricovero SDO.');
  if (input.flusso !== 'SDO') missingInfo.push('Regole specifiche del flusso selezionato da verificare; non applicare alla SDO attiva.');
  if (input.dispositiviImpiantati.includes('robot') && !procs.some(p => !p.isComplementaryW)) {
    const index = procs.findIndex(p => p.isComplementaryW);
    if (index >= 0) procs.splice(index,1);
    missingInfo.push('Il complemento W richiede una procedura di riferimento documentata e compatibile.');
  }
  secondaryDiags.forEach(d => { d.confirmed = false; });
  procs.forEach(p => { p.confirmed = false; });
  missingInfo.push('Catalogo completo non riconciliato: proposte editoriali non validate, non applicabili alla scheda.');

  return {
    primaryDiagnosis: primaryDiag,
    secondaryDiagnoses: secondaryDiags,
    procedures: procs,
    missingInformation: missingInfo,
    rulesApplied: rulesApplied,
    scoringStatus: {
      scoringEnabled: false,
      reason: 'Punteggio automatico sospeso: la proposta è generata a fini didattico-orientativi e richiede revisione e conferma puntuale del medico compilatore prima di essere applicata alla scheda SDO.'
    }
  };
}
