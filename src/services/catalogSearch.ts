import { OFFICIAL_CATALOG_DATA, GUIDED_EXAMPLES_DATA } from '../data/catalog';
import { CatalogEntry, GuidedCaseExample, GuidedProposalResult } from '../types';

export interface SearchOptions {
  query: string;
  system?: 'ICD-10-IM' | 'CIPI' | 'ALL';
  terminalOnly?: boolean;
  specialtyTag?: string;
  limit?: number;
}

export function searchCatalog(options: SearchOptions): CatalogEntry[] {
  const query = options.query.trim().toLowerCase();
  const system = options.system || 'ALL';
  const terminalOnly = options.terminalOnly ?? false;
  const limit = options.limit || 50;

  if (!query && system === 'ALL' && !options.specialtyTag) {
    return OFFICIAL_CATALOG_DATA.slice(0, limit);
  }

  const cleanQuery = query.replace(/[.\-\s]/g, '');

  const results = OFFICIAL_CATALOG_DATA.filter((entry) => {
    // System filter
    if (system !== 'ALL' && entry.system !== system) {
      return false;
    }

    // Terminal only filter
    if (terminalOnly && !entry.terminal) {
      return false;
    }

    // Specialty filter
    if (options.specialtyTag && options.specialtyTag !== 'all') {
      if (!entry.specialtyTags?.includes(options.specialtyTag)) {
        return false;
      }
    }

    if (!query) {
      return true;
    }

    // Matching criteria
    const codeClean = entry.code.toLowerCase().replace(/[.\-\s]/g, '');
    const titleLower = entry.title.toLowerCase();
    
    // Direct code exact or prefix match (highest priority)
    if (codeClean.includes(cleanQuery) || entry.code.toLowerCase().includes(query)) {
      return true;
    }

    // Title match
    if (titleLower.includes(query)) {
      return true;
    }

    // Words token match
    const queryTokens = query.split(/\s+/).filter(Boolean);
    const matchesAllTokens = queryTokens.every((token) => 
      titleLower.includes(token) ||
      entry.synonyms?.some((s) => s.toLowerCase().includes(token)) ||
      entry.inclusions?.some((i) => i.toLowerCase().includes(token)) ||
      entry.hierarchy.chapter?.toLowerCase().includes(token) ||
      entry.hierarchy.category?.toLowerCase().includes(token)
    );

    if (matchesAllTokens) {
      return true;
    }

    // Synonyms match
    if (entry.synonyms?.some((s) => s.toLowerCase().includes(query))) {
      return true;
    }

    // Transcoding ICD-9 match
    if (entry.transcodingICD9?.toLowerCase().includes(query)) {
      return true;
    }

    return false;
  });

  // Sort with code matches first, then title relevance
  return results
    .sort((a, b) => {
      const aCode = a.code.toLowerCase();
      const bCode = b.code.toLowerCase();
      const q = query.toLowerCase();

      if (aCode === q && bCode !== q) return -1;
      if (bCode === q && aCode !== q) return 1;
      if (aCode.startsWith(q) && !bCode.startsWith(q)) return -1;
      if (bCode.startsWith(q) && !aCode.startsWith(q)) return 1;
      return 0;
    })
    .slice(0, limit);
}

export function getCodeDetails(code: string): CatalogEntry | undefined {
  return OFFICIAL_CATALOG_DATA.find((e) => e.code.toLowerCase() === code.toLowerCase().trim());
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
    if (input.diagnosiFinaleDoc === 'non_definita' || input.diagnosiFinaleDoc === 'sintomo_dispnea') {
      primaryDiag = {
        code: 'R06.0',
        title: 'Dispnea',
        rationale: 'Nel setting di Pronto Soccorso/OBI senza ricovero e senza diagnosi eziologica accertata, il sintomo è la diagnosi principale corretta (Addendum E, R12).',
        system: 'ICD-10-IM',
        source: 'DM 23/10/2025 • FAD ISS Addendum E (p. 2)'
      };
    } else if (input.diagnosiFinaleDoc === 'sospetto_escluso') {
      rulesApplied.push('R13: Categoria Z03 per sospetto escluso in assenza di sintomi attivi');
      primaryDiag = {
        code: 'Z03.4',
        title: 'Osservazione per sospetto infarto del miocardio, escluso',
        rationale: 'Paziente dimesso dopo osservazione OBI con sospetto escluso e senza riscontro di patologia correlata (R13).',
        system: 'ICD-10-IM',
        source: 'FAD ISS Tutorial 3 • Addendum E (p. 3)'
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
        confirmed: true
      });
    }
    if (input.condizioniAssociate.includes('fa_parossistica')) {
      secondaryDiags.push({
        code: 'I48.0',
        title: 'Fibrillazione atriale parossistica',
        rationale: 'Episodio aritmico trattato con farmaci antiaritmici o cardioversione.',
        system: 'ICD-10-IM',
        source: 'ICD-10-IM v. 2025',
        confirmed: true
      });
    }
    if (input.condizioniAssociate.includes('shock_cardiogeno')) {
      secondaryDiags.push({
        code: 'R57.0',
        title: 'Shock cardiogeno',
        rationale: 'Complicanza maggiore (MCC) insorta con necessità di inotropi e monitoraggio invasivo.',
        system: 'ICD-10-IM',
        source: 'ICD-10-IM v. 2025',
        confirmed: true
      });
    }
    if (input.condizioniAssociate.includes('irc_stadio1')) {
      secondaryDiags.push({
        code: 'I12.00',
        title: 'Malattia renale ipertensiva con insufficienza renale cronica, stadio 1',
        rationale: 'Comorbilità renale documentata formalmente con stadio terminale a 6 caratteri.',
        system: 'ICD-10-IM',
        source: 'ICD-10-IM v. 2025',
        confirmed: true
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
      confirmed: true
    });

    if (!input.insufficienzaRespDocumentata) {
      rulesApplied.push('DISCIPLINA CLINICA: Presenza di CPAP documentata, ma nessuna diagnosi di insufficienza respiratoria registrata dal medico. Vietata la deduzione automatica di diagnosi da procedure o farmaci.');
    } else {
      secondaryDiags.push({
        code: 'J96.0',
        title: 'Insufficienza respiratoria acuta',
        rationale: 'Insufficienza respiratoria acuta espressamente refertata in cartella con EGA documentata.',
        system: 'ICD-10-IM',
        source: 'ICD-10-IM v. 2025',
        confirmed: true
      });
    }
  }

  // Procedure checks
  if (input.procedureEseguite.includes('ptca_stent')) {
    procs.push({
      code: '36.05.1B',
      title: 'Angioplastica percutanea coronarica con impianto di stent',
      rationale: 'Procedura endovascolare percutanea coronarica (approccio B) con impianto di stent.',
      system: 'CIPI',
      source: 'CIPI 2025 • Sezione 36 (Tutorial 5, p. 7)',
      confirmed: true
    });
    procs.push({
      code: '88.55.00',
      title: 'Arteriografia coronarica selettiva mediante catetere singolo (Coronarografia)',
      rationale: 'Indagine angiografica diagnostica propedeutica all\'angioplastica.',
      system: 'CIPI',
      source: 'CIPI 2025 • Sezione 88',
      confirmed: true
    });
  }

  if (input.procedureEseguite.includes('tavi')) {
    const isApical = input.accessoChirurgico === 'transapicale';
    procs.push({
      code: isApical ? '35.21.6D' : '35.21.4B',
      title: isApical 
        ? 'Impianto di valvola aortica biologica transcatetere [TAVI], trans-apicale'
        : 'Impianto di valvola aortica biologica transcatetere [TAVI], per via endovascolare trans-femorale percutanea',
      rationale: `Sostituzione valvolare percutanea con approccio ${isApical ? 'D (chirurgico apicale)' : 'B (transfemorale)'}.`,
      system: 'CIPI',
      source: 'CIPI 2025 • Sezione 35',
      confirmed: true
    });
  }

  if (input.procedureEseguite.includes('artroprotesi_anca')) {
    procs.push({
      code: '81.51.00',
      title: 'Sostituzione totale dell\'anca (Artroprotesi totale d\'anca)',
      rationale: 'Intervento ortopedico maggiore a cielo aperto.',
      system: 'CIPI',
      source: 'CIPI 2025 • Sezione 81',
      confirmed: true
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
      confirmed: true
    });
  }

  // Antimicrobial resistance check
  if (input.antibiogrammaResistenzaDoc) {
    secondaryDiags.push({
      code: 'Z16.1',
      title: 'Resistenza ai betalattamici (es. MRSA, ESBL)',
      rationale: 'Resistenza antibiotica accertata tramite referto colturale/antibiogramma formale.',
      system: 'ICD-10-IM',
      source: 'DM 23/10/2025 • ICD-10-IM v. 2025',
      confirmed: true
    });
  }

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
