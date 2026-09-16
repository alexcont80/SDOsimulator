import { CatalogEntry, GuidedCaseExample } from '../types';

export const OFFICIAL_CATALOG_DATA: CatalogEntry[] = [
  // ==========================================
  // ICD-10-IM DIAGNOSES (MALATTIE E CONDIZIONI)
  // ==========================================
  {
    code: 'I21.0',
    title: 'Infarto miocardico acuto con sopraslivellamento del tratto ST (STEMI) della parete anteriore',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo IX - Malattie dell\'apparato circolatorio (I00-I99)',
      block: 'I20-I25 Malattie ischemiche del cuore',
      category: 'I21 Infarto miocardico acuto',
      parentCode: 'I21'
    },
    inclusions: [
      'Infarto anteriore (della parete anteriore) (anteroapicale) (anterolaterale) (anterosettale) con sopraslivellamento ST'
    ],
    exclusions: [
      'Infarto miocardico successivo (I22.-)',
      'Infarto miocardico acuto specificato come cronico o con durata > 4 settimane (I25.8)'
    ],
    notes: [
      'Codificare anche eventuale shock cardiogeno associato (R57.0)',
      'Specificare sempre la sede anatomica coronarica nel diario clinico'
    ],
    synonyms: ['STEMI anteriore', 'IMA anteriore', 'infarto transmurale parete anteriore'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['cardiologia', 'pronto_soccorso', 'terapia_intensiva']
  },
  {
    code: 'I21.1',
    title: 'Infarto miocardico acuto con sopraslivellamento del tratto ST (STEMI) della parete inferiore',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo IX - Malattie dell\'apparato circolatorio (I00-I99)',
      block: 'I20-I25 Malattie ischemiche del cuore',
      category: 'I21 Infarto miocardico acuto',
      parentCode: 'I21'
    },
    inclusions: [
      'Infarto della parete inferiore (diaframmatico) (inferolaterale) (inferoposteriore) con sopraslivellamento ST'
    ],
    synonyms: ['STEMI inferiore', 'IMA diaframmatico', 'infarto postero-inferiore'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['cardiologia', 'pronto_soccorso']
  },
  {
    code: 'I21.4',
    title: 'Infarto miocardico acuto subendocardico (NSTEMI)',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo IX - Malattie dell\'apparato circolatorio (I00-I99)',
      block: 'I20-I25 Malattie ischemiche del cuore',
      category: 'I21 Infarto miocardico acuto',
      parentCode: 'I21'
    },
    inclusions: [
      'Infarto del miocardio senza sopraslivellamento ST (NSTEMI)',
      'Infarto subendocardico non transmurale'
    ],
    synonyms: ['NSTEMI', 'infarto miocardico non transmurale', 'sindrome coronarica acuta non-STEMI'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['cardiologia', 'pronto_soccorso', 'medicina_interna']
  },
  {
    code: 'I50.0',
    title: 'Scompenso cardiaco congestizio',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo IX - Malattie dell\'apparato circolatorio (I00-I99)',
      block: 'I30-I52 Altre forme di cardiopatia',
      category: 'I50 Scompenso cardiaco',
      parentCode: 'I50'
    },
    inclusions: ['Insufficienza cardiaca congestizia con o senza edema periferico'],
    notes: ['Se presente scompenso acuto su cronico, verificare se documentata la forma acuta o riacutizzata.'],
    synonyms: ['scompenso congestizio', 'insufficienza cardiaca congestizia', 'scompenso biventricolare'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['cardiologia', 'medicina_interna', 'pronto_soccorso']
  },
  {
    code: 'I50.1',
    title: 'Insufficienza ventricolare sinistra (Edema polmonare acuto cardiogeno)',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo IX - Malattie dell\'apparato circolatorio (I00-I99)',
      block: 'I30-I52 Altre forme di cardiopatia',
      category: 'I50 Scompenso cardiaco',
      parentCode: 'I50'
    },
    inclusions: [
      'Edema polmonare acuto con specificazione di cardiopatia o cardiogeno',
      'Asma cardiaca',
      'Insufficienza ventricolare sinistra acuta'
    ],
    exclusions: [
      'Edema polmonare acuto non cardiogeno o chimico/da inalazione (J81, J68.1)',
      'Sindrome da distress respiratorio acuto dell\'adulto ARDS (J80)'
    ],
    notes: [
      'Non dedurre l\'insufficienza respiratoria secondaria dalla sola applicazione di CPAP/NIV se non documentata esplicitamente (R07).'
    ],
    synonyms: ['EPA cardiogeno', 'edema polmonare acuto cardiogeno', 'IVS acuta', 'asma cardiaca'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['cardiologia', 'pronto_soccorso', 'terapia_intensiva', 'medicina_interna']
  },
  {
    code: 'I50.9',
    title: 'Scompenso cardiaco non specificato',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo IX - Malattie dell\'apparato circolatorio (I00-I99)',
      block: 'I30-I52 Altre forme di cardiopatia',
      category: 'I50 Scompenso cardiaco',
      parentCode: 'I50'
    },
    notes: [
      'Utilizzare solo quando non sono disponibili in cartella ulteriori dettagli clinici sull\'acuzie o sulla frazione di eiezione.'
    ],
    synonyms: ['insufficienza cardiaca NAS', 'scompenso cardiaco cronico stabile'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['cardiologia', 'medicina_interna']
  },
  {
    code: 'I10',
    title: 'Ipertensione essenziale (primaria)',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo IX - Malattie dell\'apparato circolatorio (I00-I99)',
      block: 'I10-I15 Malattie ipertensive',
      category: 'I10 Ipertensione essenziale (primaria)',
      parentCode: 'I10-I15'
    },
    inclusions: ['Ipertensione arteriosa sistemica (benigna) (maligna) (essenziale) (primaria)'],
    exclusions: ['Ipertensione con coinvolgimento renale (I12.-)', 'Ipertensione con cardiopatia (I11.-)'],
    notes: ['In ICD-10-IM l\'ipertensione non si suddivide più in maligna/benigna.'],
    synonyms: ['ipertensione arteriosa', 'pressione alta', 'ipertensione sistemica'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['cardiologia', 'medicina_interna', 'pronto_soccorso']
  },
  {
    code: 'I12.0',
    title: 'Malattia renale ipertensiva con insufficienza renale',
    system: 'ICD-10-IM',
    type: 'Rubrica',
    terminal: false,
    hierarchy: {
      chapter: 'Capitolo IX - Malattie dell\'apparato circolatorio (I00-I99)',
      block: 'I10-I15 Malattie ipertensive',
      category: 'I12 Malattia renale ipertensiva',
      parentCode: 'I12'
    },
    notes: ['Rubrica non terminale in ICD-10-IM: richiede la specificazione dello stadio da I12.00 a I12.05.'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['medicina_interna', 'terapia_intensiva']
  },
  {
    code: 'I12.00',
    title: 'Malattia renale ipertensiva con insufficienza renale cronica, stadio 1',
    system: 'ICD-10-IM',
    type: 'Peculiarità IM',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo IX - Malattie dell\'apparato circolatorio (I00-I99)',
      block: 'I10-I15 Malattie ipertensive',
      category: 'I12 Malattia renale ipertensiva',
      parentCode: 'I12.0'
    },
    synonyms: ['nefroangiosclerosi stadio 1', 'insufficienza renale ipertensiva stadio iniziale'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['medicina_interna']
  },
  {
    code: 'I48.0',
    title: 'Fibrillazione atriale parossistica',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo IX - Malattie dell\'apparato circolatorio (I00-I99)',
      block: 'I30-I52 Altre forme di cardiopatia',
      category: 'I48 Fibrillazione e flutter atriale',
      parentCode: 'I48'
    },
    synonyms: ['FA parossistica', 'aritmia da fibrillazione atriale recidivante'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['cardiologia', 'pronto_soccorso']
  },
  {
    code: 'I63.4',
    title: 'Infarto cerebrale da embolia di arterie cerebrali',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo IX - Malattie dell\'apparato circolatorio (I00-I99)',
      block: 'I60-I69 Malattie cerebrovascolari',
      category: 'I63 Infarto cerebrale',
      parentCode: 'I63'
    },
    inclusions: ['Ictus ischemico embolico con occlusione arteriosa acuta'],
    synonyms: ['stroke ischemico cardioembolico', 'ictus embolico', 'infarto cerebrale acuto'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['neurologia', 'pronto_soccorso']
  },
  {
    "code": "I69.3",
    "title": "Sequele di infarto cerebrale",
    "system": "ICD-10-IM",
    "type": "Codificante",
    "terminal": true,
    "hierarchy": {
      "chapter": "Capitolo IX - Malattie dell'apparato circolatorio (I00-I99)",
      "block": "I60-I69 Malattie cerebrovascolari",
      "category": "I69 Sequele di malattie cerebrovascolari",
      "parentCode": "I69"
    },
    "notes": [
      "Codificare come principale il deficit o sintomo residuo trattato (es. R47.0 afasia, G81.9 emiplegia) e I69.3 come codice aggiuntivo di sequela (R15)."
    ],
    "synonyms": ["esiti di ictus ischemico", "postumi ictus", "sequela ictus"],
    "validity": { "from": "2026-01-01", "to": "2027-12-31", "version": "Gamma 2.1" },
    "specialtyTags": ["neurologia", "medicina_interna"]
  },
  {
    code: 'I72.2',
    title: 'Aneurisma e dissezione dell\'arteria renale',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo IX - Malattie dell\'apparato circolatorio (I00-I99)',
      block: 'I70-I79 Malattie delle arterie, delle arteriole e dei capillari',
      category: 'I72 Altri aneurismi e dissezioni',
      parentCode: 'I72'
    },
    inclusions: ['Pseudoaneurisma dell\'arteria renale'],
    notes: ['Soluzione confermata nel caso ufficiale FAD ISS SCORM n. 34623.'],
    synonyms: ['pseudoaneurisma renale', 'aneurisma arteria renale'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['chirurgia_generale', 'pronto_soccorso', 'cardiologia']
  },
  {
    code: 'A41.9',
    title: 'Sepsi non specificata',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo I - Alcune malattie infettive e parassitarie (A00-B99)',
      block: 'A30-A49 Altre malattie batteriche',
      category: 'A41 Altra sepsi',
      parentCode: 'A41'
    },
    inclusions: ['Setticemia NAS', 'Shock settico (con R57.2)'],
    notes: [
      'In ICD-10 la sepsi non è sinonimo automatico di shock; se presente shock settico documentato associare R57.2.'
    ],
    synonyms: ['sepsi batterica', 'setticemia', 'sepsi sistemica'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['terapia_intensiva', 'medicina_interna', 'pronto_soccorso']
  },
  {
    code: 'R57.2',
    title: 'Shock settico',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo XVIII - Sintomi, segni e reperti anomali (R00-R99)',
      block: 'R50-R69 Sintomi e segni generali',
      category: 'R57 Shock non classificato altrove',
      parentCode: 'R57'
    },
    notes: ['MCC critico da associare al codice di sepsi primaria (A41.-).'],
    synonyms: ['shock da sepsi', 'collasso settico'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['terapia_intensiva', 'pronto_soccorso']
  },
  {
    code: 'J80',
    title: 'Sindrome da distress respiratorio acuto dell\'adulto (ARDS)',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo X - Malattie dell\'apparato respiratorio (J00-J99)',
      block: 'J80-J84 Altre malattie dell\'apparato respiratorio che interessano principalmente l\'interstizio',
      category: 'J80 Sindrome da distress respiratorio',
      parentCode: 'J80-J84'
    },
    inclusions: ['Polmone da shock', 'ARDS'],
    synonyms: ['ARDS', 'edema polmonare non cardiogeno', 'distress respiratorio adulto'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['terapia_intensiva', 'pronto_soccorso']
  },
  {
    code: 'J44.1',
    title: 'Broncopneumopatia cronica ostruttiva con esacerbazione acuta, non specificata',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo X - Malattie dell\'apparato respiratorio (J00-J99)',
      block: 'J40-J47 Malattie croniche delle basse vie respiratorie',
      category: 'J44 Altra broncopneumopatia cronica ostruttiva',
      parentCode: 'J44'
    },
    inclusions: ['BPCO riacutizzata', 'Bronchite cronica enfisematosa in riacutizzazione'],
    notes: ['Codice combinato acuto su cronico (R14). Non richiede doppio codice separato per BPCO e riacutizzazione.'],
    synonyms: ['BPCO riacutizzata', 'riacutizzazione di BPCO'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['medicina_interna', 'pronto_soccorso']
  },
  {
    code: 'R06.0',
    title: 'Dispnea',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo XVIII - Sintomi, segni e reperti anomali (R00-R99)',
      block: 'R00-R09 Sintomi e segni relativi all\'apparato cardiocircolatorio e respiratorio',
      category: 'R06 Anomalie del respiro',
      parentCode: 'R06'
    },
    inclusions: ['Fame d\'aria', 'Respiro affannoso', 'Ortopnea isolata'],
    notes: [
      'Utilizzabile come diagnosi principale solo se il ricovero o la valutazione si conclude senza diagnosi eziologica definitiva (R12, Addendum E).'
    ],
    synonyms: ['fame d\'aria', 'dispnea acuta', 'difficoltà respiratoria'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['pronto_soccorso', 'medicina_interna']
  },
  {
    code: 'Z03.4',
    title: 'Osservazione per sospetto infarto del miocardio, escluso',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo XXI - Fattori che influenzano lo stato di salute (Z00-Z99)',
      block: 'Z00-Z13 Persone che ricorrono ai servizi sanitari per accertamenti e visite',
      category: 'Z03 Osservazione e valutazione medica per sospetto di malattie escluse',
      parentCode: 'Z03'
    },
    inclusions: ['Esclusione di infarto miocardico acuto dopo osservazione OBI/reparto in assenza di altra patologia'],
    notes: [
      'Richiede assenza di segni/sintomi attivi e assenza di patologia correlata confermata (R13, Addendum E).'
    ],
    synonyms: ['esclusione IMA', 'osservazione per sospetto infarto escluso'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['pronto_soccorso', 'cardiologia']
  },
  {
    code: 'S72.001',
    title: 'Frattura del collo del femore, chiusa',
    system: 'ICD-10-IM',
    type: 'Peculiarità IM',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo XIX - Traumatismi, avvelenamenti e altre conseguenze (S00-T98)',
      block: 'S70-S79 Traumatismi dell\'anca e della coscia',
      category: 'S72 Frattura del femore',
      parentCode: 'S72.0'
    },
    inclusions: ['Frattura intracapsulare del femore, sottocapitata o transcervicale'],
    notes: [
      'In ICD-10-IM il 6° carattere distingue tra frattura chiusa (.001) e aperta (.002). Non esiste il 7° carattere A/D/S (che appartiene alla modifica statunitense).'
    ],
    synonyms: ['frattura collo femore', 'frattura femorale mediale'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['ortopedia', 'pronto_soccorso']
  },
  {
    code: 'K80.00',
    title: 'Calcolosi della cistifellea con colecistite acuta, senza menzione di ostruzione',
    system: 'ICD-10-IM',
    type: 'Peculiarità IM',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo XI - Malattie dell\'apparato digerente (K00-K93)',
      block: 'K80-K87 Malattie della cistifellea, delle vie biliari e del pancreas',
      category: 'K80 Colelitiasi',
      parentCode: 'K80.0'
    },
    synonyms: ['colecistite acuta litiasica', 'calcolosi colecisti con colecistite'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['chirurgia_generale', 'pronto_soccorso']
  },
  {
    code: 'O80.0',
    title: 'Parto spontaneo con presentazione di vertice, a termine',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo XV - Gravidanza, parto e puerperio (O00-O99)',
      block: 'O80-O84 Parto',
      category: 'O80 Parto singolo spontaneo',
      parentCode: 'O80'
    },
    notes: ['In caso di parto avvenuto, codificare obbligatoriamente anche l\'esito del parto (Z37.-).'],
    synonyms: ['parto eutocico spontaneo', 'parto naturale a termine'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['ostetricia_ginecologia']
  },
  {
    code: 'Z37.0',
    title: 'Nato vivo singolo',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo XXI - Fattori che influenzano lo stato di salute (Z00-Z99)',
      block: 'Z30-Z39 Persone che ricorrono ai servizi sanitari per la riproduzione',
      category: 'Z37 Esito del parto',
      parentCode: 'Z37'
    },
    notes: [
      'Codice obbligatorio di esito solo nei ricoveri ostetrici in cui si è effettivamente verificato il parto.'
    ],
    synonyms: ['esito del parto nato vivo', 'nato vivo'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['ostetricia_ginecologia']
  },
  {
    code: 'Z16.1',
    title: 'Resistenza ai betalattamici (es. MRSA, ESBL)',
    system: 'ICD-10-IM',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Capitolo XXI - Fattori che influenzano lo stato di salute (Z00-Z99)',
      block: 'Z16 Agenti resistenti ai farmaci antimicrobici',
      category: 'Z16 Agenti resistenti ai farmaci antimicrobici',
      parentCode: 'Z16'
    },
    notes: [
      'Codice aggiuntivo da utilizzare unicamente quando l\'antibiogramma o la cartella clinica documentano formalmente la resistenza specifica.'
    ],
    synonyms: ['MRSA', 'resistenza penicilline', 'batterio resistente'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'Gamma 2.1' },
    specialtyTags: ['terapia_intensiva', 'medicina_interna', 'chirurgia_generale']
  },

  // ==========================================
  // CIPI 2025 PROCEDURES (PROCEDURE E INTERVENTI)
  // ==========================================
  {
    code: '36.05.1B',
    title: 'Angioplastica percutanea coronarica con impianto di stent',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    approach: 'B - Endovascolare percutaneo',
    hierarchy: {
      chapter: 'Sezione 35-39 - Interventi sul sistema cardiovascolare',
      block: '36 Operazioni sui vasi coronarici',
      category: '36.05 Angioplastica coronarica con stent',
      parentCode: '36.05'
    },
    notes: [
      'Approccio B (endovascolare percutaneo).',
      'Nota di codifica: Codificare anche il tipo di stent inserito (36.06 per stent non medicato o 36.07 per stent medicato DES) se richiesto dal dettaglio del flusso.',
      'Transcodifica ICD-9-CM: 00.66 + 36.06/36.07'
    ],
    transcodingICD9: '00.66; 36.06',
    ahrqCategory: '1 - Maggiore terapeutico',
    synonyms: ['PTCA con stent', 'angioplastica coronarica con stent', 'PCI coronarica'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['cardiologia', 'pronto_soccorso']
  },
  {
    code: '35.21.4B',
    title: 'Impianto di valvola aortica biologica transcatetere [TAVI], per via endovascolare trans-femorale percutanea',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    approach: 'B - Endovascolare percutaneo',
    hierarchy: {
      chapter: 'Sezione 35-39 - Interventi sul sistema cardiovascolare',
      block: '35 Interventi sulle valvole e sui setti del cuore',
      category: '35.21 Sostituzione della valvola aortica con bioprotesi',
      parentCode: '35.21'
    },
    notes: [
      'Approccio B (trans-femorale percutaneo).',
      'Transcodifica ICD-9-CM: 35.21; 37.22 (sostituzione bioprotesi + cateterismo sinistro).'
    ],
    transcodingICD9: '35.21; 37.22',
    ahrqCategory: '1 - Maggiore terapeutico',
    synonyms: ['TAVI transfemorale', 'TAVI percutanea', 'impianto percutaneo valvola aortica'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['cardiologia']
  },
  {
    code: '35.21.6D',
    title: 'Impianto di valvola aortica biologica transcatetere [TAVI], trans-apicale',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    approach: 'D - Combinato endovascolare e chirurgico',
    hierarchy: {
      chapter: 'Sezione 35-39 - Interventi sul sistema cardiovascolare',
      block: '35 Interventi sulle valvole e sui setti del cuore',
      category: '35.21 Sostituzione della valvola aortica con bioprotesi',
      parentCode: '35.21'
    },
    transcodingICD9: '35.21; 37.22',
    ahrqCategory: '1 - Maggiore terapeutico',
    synonyms: ['TAVI transapicale', 'TAVI accesso chirurgico apicale'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['cardiologia']
  },
  {
    code: '38.8F.1B',
    title: 'Embolizzazione endovascolare percutanea di arteria addominale [spirali]',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    approach: 'B - Endovascolare percutaneo',
    hierarchy: {
      chapter: 'Sezione 35-39 - Interventi sul sistema cardiovascolare',
      block: '38 Altri interventi sui vasi',
      category: '38.8F Altra occlusione chirurgica dei vasi addominali',
      parentCode: '38.8F'
    },
    notes: [
      'Soluzione confermata nel caso ufficiale FAD ISS SCORM n. 34623 per coiling e deafferentazione di pseudoaneurisma renale.'
    ],
    transcodingICD9: '38.86',
    ahrqCategory: '1 - Maggiore terapeutico',
    synonyms: ['coiling arteria renale', 'embolizzazione con spirali', 'occlusione endovascolare'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['chirurgia_generale', 'pronto_soccorso', 'cardiologia']
  },
  {
    code: '88.55.00',
    title: 'Arteriografia coronarica selettiva mediante catetere singolo (Coronarografia)',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    approach: '00 - Approccio diagnostico standard',
    hierarchy: {
      chapter: 'Sezione 87-99 - Altre procedure diagnostiche e terapeutiche',
      block: '88 Altra radiologia diagnostica e studi correlati',
      category: '88.55 Arteriografia coronarica con catetere singolo',
      parentCode: '88.55'
    },
    transcodingICD9: '88.55',
    ahrqCategory: '2 - Maggiore diagnostico',
    synonyms: ['coronarografia', 'angiografia coronarica selettiva'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['cardiologia', 'pronto_soccorso']
  },
  {
    code: '93.90.00',
    title: 'Ventilazione meccanica non invasiva a pressione positiva continua (CPAP/NIV)',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    approach: '00 - Non chirurgico',
    hierarchy: {
      chapter: 'Sezione 87-99 - Altre procedure diagnostiche e terapeutiche',
      block: '93 Fisioterapia clinica e procedure riabilitative',
      category: '93.90 Ventilazione non invasiva a pressione positiva',
      parentCode: '93.90'
    },
    notes: [
      'Prestazione di supporto respiratorio non invasivo.',
      'Non dedurre automaticamente una diagnosi di insufficienza respiratoria acuta dalla sola esecuzione di CPAP se non documentata dal medico (R07, R12).'
    ],
    transcodingICD9: '93.90',
    ahrqCategory: '3 - Minore terapeutico',
    synonyms: ['CPAP', 'NIV', 'ventilazione non invasiva', 'casco CPAP'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['pronto_soccorso', 'terapia_intensiva', 'cardiologia', 'medicina_interna']
  },
  {
    code: '96.72.00',
    title: 'Ventilazione meccanica continua per 96 ore consecutive o più',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Sezione 87-99 - Altre procedure diagnostiche e terapeutiche',
      block: '96 Altre intubazioni e ventilazioni',
      category: '96.72 Ventilazione meccanica prolungata',
      parentCode: '96.72'
    },
    notes: ['Parametro critico di durata assistenziale in Terapia Intensiva con forte impatto sul DRG.'],
    transcodingICD9: '96.72',
    ahrqCategory: '1 - Maggiore terapeutico',
    synonyms: ['ventilazione invasiva > 96 ore', 'ventilazione meccanica prolungata'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['terapia_intensiva', 'pronto_soccorso']
  },
  {
    code: '81.51.00',
    title: 'Sostituzione totale dell\'anca (Artroprotesi totale d\'anca)',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    approach: 'C - A cielo aperto (standard ortopedico)',
    hierarchy: {
      chapter: 'Sezione 76-84 - Interventi sull\'apparato muscoloscheletrico',
      block: '81 Interventi di riparazione e plastica articolare',
      category: '81.51 Sostituzione totale dell\'anca',
      parentCode: '81.51'
    },
    transcodingICD9: '81.51',
    ahrqCategory: '1 - Maggiore terapeutico',
    synonyms: ['artroprotesi anca', 'PTA', 'protesi totale anca'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['ortopedia']
  },
  {
    code: '88.21.20',
    title: 'Radiografia della spalla',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    hierarchy: {
      chapter: 'Sezione 87-99 - Altre procedure diagnostiche e terapeutiche',
      block: '88 Altra radiologia diagnostica',
      category: '88.21 Radiografia della spalla e degli arti superiori',
      parentCode: '88.21'
    },
    notes: ['Voce terminale a 6 caratteri integrata dal Nomenclatore LEA 2017 (Tutorial 4, p. 10).'],
    transcodingICD9: '88.21',
    ahrqCategory: '4 - Minore diagnostico',
    synonyms: ['RX spalla', 'radiogramma articolazione scapolo-omerale'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['ortopedia', 'pronto_soccorso']
  },
  {
    code: '00.R0.1W',
    title: 'Chirurgia robot-assistita [RAS], sistema tele-operante',
    system: 'CIPI',
    type: 'Complementare W',
    terminal: true,
    hierarchy: {
      chapter: 'Sezione 00 - Procedure non classificate altrove',
      block: '00.R Procedure robot-assistite',
      category: '00.R0 Chirurgia robot-assistita',
      parentCode: '00.R0'
    },
    notes: [
      'Codice complementare W: deve essere associato obbligatoriamente a una procedura principale «non W» (R27).',
      'Non attribuisce né modifica autonomamente il DRG (Tutorial 5, p. 13; ESPERTO, p. 11).'
    ],
    transcodingICD9: '00.39',
    ahrqCategory: '1 - Maggiore terapeutico (complementare)',
    synonyms: ['robot da Vinci', 'robot-assistita', 'chirurgia robotica'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['chirurgia_generale', 'ostetricia_ginecologia', 'ortopedia']
  },
  {
    code: '39.A0.1W',
    title: 'Inserzione di stent metallico nudo in vaso periferico',
    system: 'CIPI',
    type: 'Complementare W',
    terminal: true,
    hierarchy: {
      chapter: 'Sezione 35-39 - Interventi sul sistema cardiovascolare',
      block: '39 Altri interventi sui vasi',
      category: '39.A0 Inserzione di stent vascolari',
      parentCode: '39.A0'
    },
    notes: [
      'Codice complementare W da associare alla procedura principale di angioplastica periferica (39.5H.1B).',
      'Risoluzione Conflitto C02: 39.A0.1W identifica lo stent nudo (BMS), mentre 39.A0.7W identifica lo stent medicato (DES).'
    ],
    transcodingICD9: '39.90',
    ahrqCategory: '1 - Complementare vascolare',
    synonyms: ['stent nudo periferico', 'BMS periferico'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['chirurgia_generale', 'cardiologia']
  },
  {
    code: '45.72.0C',
    title: 'Resezione a cielo aperto dell\'intestino cieco (Ciecetomia open)',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    approach: 'C - A cielo aperto (laparotomico)',
    hierarchy: {
      chapter: 'Sezione 42-54 - Interventi sull\'apparato digerente',
      block: '45 Altri interventi sull\'intestino',
      category: '45.72 Resezione del cieco',
      parentCode: '45.72'
    },
    transcodingICD9: '45.72',
    ahrqCategory: '1 - Maggiore terapeutico',
    synonyms: ['ciecetomia laparotomica', 'resezione cieco open'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['chirurgia_generale', 'pronto_soccorso']
  },
  {
    code: '45.72.0S',
    title: 'Resezione laparoscopica dell\'intestino cieco',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    approach: 'S - Laparoscopico',
    hierarchy: {
      chapter: 'Sezione 42-54 - Interventi sull\'apparato digerente',
      block: '45 Altri interventi sull\'intestino',
      category: '45.72 Resezione del cieco',
      parentCode: '45.72'
    },
    transcodingICD9: '45.72',
    ahrqCategory: '1 - Maggiore terapeutico',
    synonyms: ['ciecetomia laparoscopica', 'resezione cieco vls'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['chirurgia_generale']
  },
  {
    code: '47.01.0S',
    title: 'Appendicectomia laparoscopica',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    approach: 'S - Laparoscopico',
    hierarchy: {
      chapter: 'Sezione 42-54 - Interventi sull\'apparato digerente',
      block: '47 Interventi sull\'appendice',
      category: '47.01 Appendicectomia laparoscopica',
      parentCode: '47.01'
    },
    transcodingICD9: '47.01',
    ahrqCategory: '1 - Maggiore terapeutico',
    synonyms: ['appendicectomia vls', 'asportazione appendice laparoscopica'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['chirurgia_generale', 'pronto_soccorso']
  },
  {
    code: '51.23.0S',
    title: 'Colecistectomia laparoscopica',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    approach: 'S - Laparoscopico',
    hierarchy: {
      chapter: 'Sezione 42-54 - Interventi sull\'apparato digerente',
      block: '51 Interventi sulle vie biliari',
      category: '51.23 Colecistectomia laparoscopica',
      parentCode: '51.23'
    },
    transcodingICD9: '51.23',
    ahrqCategory: '1 - Maggiore terapeutico',
    synonyms: ['colecistectomia vls', 'asportazione cistifellea laparoscopica'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['chirurgia_generale', 'pronto_soccorso']
  },
  {
    code: '74.10.0C',
    title: 'Taglio cesareo basso trasversale a cielo aperto',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    approach: 'C - A cielo aperto (laparotomico)',
    hierarchy: {
      chapter: 'Sezione 72-75 - Interventi ostetrici',
      block: '74 Taglio cesareo e rimozione del feto',
      category: '74.1 Taglio cesareo basso trasversale',
      parentCode: '74.1'
    },
    transcodingICD9: '74.1',
    ahrqCategory: '1 - Maggiore terapeutico',
    synonyms: ['taglio cesareo', 'parto cesareo', 'TC trasversale'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['ostetricia_ginecologia']
  },
  {
    code: '85.41.1C',
    title: 'Mastectomia semplice (secondo Madden) monolaterale a cielo aperto',
    system: 'CIPI',
    type: 'Codificante',
    terminal: true,
    approach: 'C - A cielo aperto',
    hierarchy: {
      chapter: 'Sezione 85-86 - Interventi sui tegumenti',
      block: '85 Interventi sulla mammella',
      category: '85.41 Mastectomia semplice monolaterale',
      parentCode: '85.41'
    },
    notes: [
      'Codificare anche: eventuale biopsia di linfonodo sentinella (40.14.10) o linfoadenectomia (40.32.20 / 40.51.00).',
      'Codificare anche: eventuale inserzione di espansore tessutale (85.95.00) o protesi (85.53.-) secondo la logica modulare (Tutorial 5, pp. 9-11).'
    ],
    transcodingICD9: '85.41',
    ahrqCategory: '1 - Maggiore terapeutico',
    synonyms: ['mastectomia Madden', 'mastectomia monolaterale', 'asportazione mammella'],
    validity: { from: '2026-01-01', to: '2027-12-31', version: 'CIPI 2025 Gamma' },
    specialtyTags: ['chirurgia_generale', 'ostetricia_ginecologia']
  }
];

export const GUIDED_EXAMPLES_DATA: GuidedCaseExample[] = [
  {
    id: 'GUIDA-SCOMP-01',
    titolo: 'Scompenso cardiaco acuto documentato e CPAP/NIV',
    branca: 'Cardiologia & Cardiochirurgia',
    testo: 'Caso sintetico. Ricovero ospedaliero per scompenso cardiaco acuto documentato alla dimissione (edema polmonare cardiogeno / insufficienza ventricolare sinistra acuta). Eseguiti ecocardiogramma e ventilazione non invasiva (CPAP); nessuna diagnosi di insufficienza respiratoria riportata in cartella.',
    scelte_iniziali: {
      setting: 'ricovero',
      diagnosi_finale: 'scompenso cardiaco acuto (IVS acuta/EPA cardiogeno)',
      scompenso: 'acuto',
      insufficienza_respiratoria: 'non documentata',
      procedure: [
        'ecocardiogramma',
        'CPAP'
      ]
    },
    chiedere: [
      'Data di dimissione e versione di catalogo applicabile (DM 23/10/2025)',
      'Specificazione ed eziologia documentate (cardiogeno vs non cardiogeno)',
      'Modalità e durata delle procedure di ventilazione se discriminanti nel catalogo',
      'Altre condizioni cliniche con impatto accertato sull\'episodio'
    ],
    atteso: 'Ricercare la diagnosi documentata I50.1 come principale e le procedure effettive (93.90.00). Non aggiungere diagnosi di insufficienza respiratoria dalla sola presenza di CPAP.',
    regole: [
      'R01',
      'R02',
      'R03',
      'R06',
      'R07',
      'R24',
      'R26'
    ],
    final_code: 'I50.1',
    automatic_scoring_enabled: false,
    stato: 'template_ufficiale_verificato',
    references: [
      {
        source_id: 'ESPERTO',
        pdf_page: 6,
        chunk_id: 'ESPERTO-p006'
      },
      {
        source_id: 'ESPERTO',
        pdf_page: 7,
        chunk_id: 'ESPERTO-p007'
      },
      {
        source_id: 'LE',
        pdf_page: 2,
        chunk_id: 'LE-p002'
      }
    ]
  },
  {
    id: 'GUIDA-SCOMP-02',
    titolo: 'Scompenso cronico solo anamnestico (non rilevante per l\'episodio)',
    branca: 'Medicina Interna & Geriatria',
    testo: 'Caso sintetico. Ricovero per altra condizione clinica accertata alla dimissione; lo scompenso cronico figura solo nell\'anamnesi remota. Nessun trattamento specifico, monitoraggio dedicato o impatto sull\'episodio assistenziale attuale.',
    scelte_iniziali: {
      setting: 'ricovero',
      diagnosi_finale: 'altra condizione causale del ricovero',
      scompenso: 'anamnestico',
      rilevanza_episodio: 'nessuna documentata'
    },
    chiedere: [
      'Diagnosi finale principale responsabile del ricovero (R06)',
      'Conferma della rilevanza delle condizioni associate (R07)',
      'Data di dimissione'
    ],
    atteso: 'Non proporre scompenso come diagnosi principale né inserirlo automaticamente tra le secondarie se privo di consumo di risorse dedicate (R07).',
    regole: [
      'R06',
      'R07'
    ],
    final_code: null,
    automatic_scoring_enabled: false,
    stato: 'template_ufficiale_verificato',
    references: [
      {
        source_id: 'ESPERTO',
        pdf_page: 6,
        chunk_id: 'ESPERTO-p006'
      },
      {
        source_id: 'ESPERTO',
        pdf_page: 7,
        chunk_id: 'ESPERTO-p007'
      },
      {
        source_id: 'LE',
        pdf_page: 2,
        chunk_id: 'LE-p002'
      }
    ]
  },
  {
    id: 'GUIDA-SCOMP-03',
    titolo: 'Dispnea acuta senza diagnosi conclusiva in PS/OBI',
    branca: 'Pronto Soccorso & Medicina d’Urgenza',
    testo: 'Caso sintetico. Paziente valutato in Pronto Soccorso/Osservazione Breve Intensiva per dispnea acuta, dimesso senza ricovero ordinario. Nessuna diagnosi eziologica definitiva identificata alla conclusione del contatto.',
    scelte_iniziali: {
      setting: 'PS/OBI senza ricovero',
      diagnosi_finale: 'non definita',
      sintomo: 'dispnea'
    },
    chiedere: [
      'Flusso sanitario da simulare (flusso emergenza/PS vs SDO ricovero)',
      'Conclusioni diagnostiche effettive del medico di emergenza',
      'Data evento e durata OBI'
    ],
    atteso: 'Non trasformare automaticamente la dispnea in scompenso né presentare la scheda come SDO di ricovero; codificare il sintomo R06.0 come principale nel setting corretto (R01, R12, R13).',
    regole: [
      'R01',
      'R12',
      'R13'
    ],
    final_code: 'R06.0',
    automatic_scoring_enabled: false,
    stato: 'template_ufficiale_verificato',
    references: [
      {
        source_id: 'ESPERTO',
        pdf_page: 6,
        chunk_id: 'ESPERTO-p006'
      },
      {
        source_id: 'ESPERTO',
        pdf_page: 7,
        chunk_id: 'ESPERTO-p007'
      },
      {
        source_id: 'LE',
        pdf_page: 2,
        chunk_id: 'LE-p002'
      }
    ]
  }
];
