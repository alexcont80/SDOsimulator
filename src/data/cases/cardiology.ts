import { ClinicalCase } from '../../types';

export const CARDIOLOGY_CASES: ClinicalCase[] = [
  {
    id: 'cardio-1',
    specialtyId: 'cardiologia',
    caseNumber: 1,
    title: 'Infarto Miocardico Acuto STEMI Anteriore con rivascolarizzazione e shock cardiogeno transitorio',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Sindromi Coronariche Acute',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 64 anni',
      admissionReason: 'Dolore toracico oppressivo retrosternale irradiato alla mandibola e all\'arto superiore sinistro insorto da 90 minuti.',
      anamnesis: 'Forte fumatore (40 pack-years), dislipidemia aterogena non trattata, ipertensione arteriosa di grado II. Non storia nota di cardiopatia ischemica pregressa.',
      hospitalCourse: 'All\'arrivo in Pronto Soccorso/UTIC riscontro ECG di sopraslivellamento ST di 4 mm nelle derivazioni da V1 a V4. Troponina T ad alta sensibilità nettamente elevata. Sviluppo transitorio di shock cardiogeno (ipotensione 80/50 mmHg, oliguria, lattati 3.8 mmol/L) responsivo a supporto inotropo per 18 ore.',
      proceduresConducted: 'Coronarografia urgente: occlusione trombotica acuta al tratto medio dell\'arteria interventricolare anteriore (IVA). Eseguita angioplastica coronarica primaria (PCI) con impianto di singolo stent medicato (DES). Ecocardiogramma color Doppler post-procedura (FE 38%).',
      dischargeStatus: 'Dimesso al 6° giorno in condizioni emodinamiche stabili, FE 42%, in duplice antiaggregazione e terapia ottimizzata per scompenso post-infartuale.'
    },
    documentationGapsWarning: 'In cartella clinica deve sempre essere specificato il tratto coronarico e il tipo esatto di stent (DES vs BMS) e la sede anatomica specifica per evitare codifiche non specifiche (NOS/NAS).',
    solution: {
      icd10: {
        primaryDiagnosis: {
          code: 'I21.0',
          description: 'Infarto miocardico acuto con sopraslivellamento del tratto ST (STEMI) della parete anteriore',
          system: 'ICD-10-IM',
          category: 'Malattie dell\'apparato circolatorio'
        },
        secondaryDiagnoses: [
          { code: 'R57.0', description: 'Shock cardiogeno', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' },
          { code: 'E78.5', description: 'Iperlipidemia non specificata', system: 'ICD-10-IM' },
          { code: 'F17.21', description: 'Dipendenza da tabacco, uso attuale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-00.66', description: 'Angioplastica coronarica percutanea transluminale (PTCA)', system: 'CIPI' },
          { code: 'CIPI-36.06', description: 'Inserimento di stent coronarico a rilascio di farmaco (DES)', system: 'CIPI' },
          { code: 'CIPI-88.55', description: 'Arteriografia coronarica selettiva mediante catetere singolo (Coronarografia)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '410.11', description: 'Infarto miocardico acuto di altre parti anteriori, episodio iniziale di cura', system: 'ICD-9-CM' },
        secondaryDiagnoses: [
          { code: '785.51', description: 'Shock cardiogenico', system: 'ICD-9-CM' },
          { code: '401.9', description: 'Ipertensione essenziale non specificata', system: 'ICD-9-CM' }
        ],
        procedures: [
          { code: '36.07', description: 'Inserimento di stent coronarico a rilascio di farmaco', system: 'ICD-9-CM' },
          { code: '88.56', description: 'Arteriografia coronarica con doppio catetere', system: 'ICD-9-CM' }
        ]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM suddivide la categoria I21 in base alla sede specifica e alla presenza di sopraslivellamento ST (STEMI vs NSTEMI). I21.0 identifica la parete anteriore.',
        'Nel catalogo CIPI, l\'angioplastica e l\'impianto di stent medicato richiedono una specifica codifica dissociata tra dilatazione del vaso e inserimento di endoprotesi attiva.',
        'Lo shock cardiogeno (R57.0) ha un impatto determinante sul DRG finale come Major Complication (MCC).'
      ],
      commonCognitiveErrors: [
        'Codificare un NSTEMI o infarto subendocardico (I21.4) in presenza di chiaro sopraslivellamento ST.',
        'Dimenticare di codificare lo shock cardiogeno transitorio, derubricandolo a semplice ipotensione aspecifica.',
        'Inserire il codice del dolore toracico (R07.9) che è invece sintomo cardine assorbito dalla diagnosi di IMA.'
      ],
      chartDocumentationAdvice: 'Attestare sempre nel diario clinico i criteri elettrocardiografici (derivazioni coinvolte), la cinetica enzimatica e l\'arteria target trattata con il nome del dispositivo.'
    }
  },
  {
    id: 'cardio-2',
    specialtyId: 'cardiologia',
    caseNumber: 2,
    title: 'NSTEMI ad alto rischio con edema polmonare acuto e rivascolarizzazione multivessel con 2 stent DES',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Sindromi Coronariche Acute',
    clinicalScenario: {
      patientAgeSex: 'Donna, 73 anni',
      admissionReason: 'Dispnea ingravescente a riposo associata a dolore retrosternale costrittivo sordo, ortopnea e tosse stizzosa.',
      anamnesis: 'Diabete mellito tipo 2 in terapia con metformina, obesità classe I, arteriopatia obliterante arti inferiori.',
      hospitalCourse: 'In UTIC: SpO2 86% in aria ambiente, rantoli crepitanti fino a metà campo polmonare bilaterale. ECG con sottoslivellamento ST orizzontale di 2 mm nelle derivazioni inferiori e V5-V6, Troponina hs 1.850 ng/L. Trattata con CPAP a 8 cmH2O per 14 ore e nitroglicerina EV. Coronarografia entro 24 ore: stenosi critica del 90% dell\'arteria circonflessa e del 85% della coronaria destra. Eseguita angioplastica con impianto di 2 stent medicati (DES) su entrambi i vasi.',
      proceduresConducted: 'Coronarografia con cateterismo cardiaco sinistro, PTCA con impianto di due stent coronarici medicati (DES) su due vasi separati, ventilazione non invasiva CPAP.',
      dischargeStatus: 'Dimessa all\'8° giorno in classe NYHA II con funzionalità renale conservata.'
    },
    documentationGapsWarning: 'In ICD-10-IM il NSTEMI ha codice I21.4. L\'edema polmonare cardiogeno associato va codificato come insufficienza ventricolare sinistra acuta I50.1.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I21.4', description: 'Infarto miocardico acuto subendocardico (NSTEMI)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I50.1', description: 'Insufficienza ventricolare sinistra (Edema polmonare acuto cardiogeno)', system: 'ICD-10-IM' },
          { code: 'E11.9', description: 'Diabete mellito di tipo 2 senza menzione di complicanza', system: 'ICD-10-IM' },
          { code: 'E66.01', description: 'Obesità morbida dovuta a calorie in eccesso', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-00.66', description: 'PTCA percutanea transluminale', system: 'CIPI' },
          { code: 'CIPI-36.06', description: 'Inserimento di stent coronarico a rilascio di farmaco su due vasi', system: 'CIPI' },
          { code: 'CIPI-93.90', description: 'Ventilazione meccanica non invasiva (CPAP)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '410.71', description: 'Infarto subendocardico, iniziale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '428.1', description: 'Insufficienza ventricolare sinistra', system: 'ICD-9-CM' }, { code: '250.00', description: 'Diabete mellito', system: 'ICD-9-CM' }],
        procedures: [{ code: '36.07', description: 'Stent medicato', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'L\'infarto miocardico non-ST sopraslivellato si codifica sotto I21.4.',
        'L\'edema polmonare acuto secondario all\'ischemia miocardica acuta deve essere codificato in diagnosi secondaria per rappresentare il sovraccarico emodinamico (I50.1).'
      ],
      commonCognitiveErrors: [
        'Codificare l\'edema polmonare come patologia respiratoria generica (J81.0) ignorando l\'eziologia cardiogena.',
        'Omettere il numero di vasi coronarici trattati.'
      ],
      chartDocumentationAdvice: 'Specificare l\'indice TIMI pre e post-procedura e le ore complessive di ventilazione non invasiva.'
    }
  },
  {
    id: 'cardio-3',
    specialtyId: 'cardiologia',
    caseNumber: 3,
    title: 'Fibrillazione atriale parossistica sintomatica sottoposta ad isolamento transcatetere delle vene polmonari (Ablazione RF)',
    complexity: 'Intermedio',
    subCategory: 'Aritmologia ed Elettrofisiologia',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 59 anni',
      admissionReason: 'Episodi frequenti ed invalidanti di cardiopalmo aritmico refrattario a terapia antiaritmica con flecainide e beta-bloccante.',
      anamnesis: 'Ipertensione arteriosa lieve, atrio sinistro moderatamente dilatato (volume 38 mL/m2). CHA2DS2-VASc = 1.',
      hospitalCourse: 'Ricovero programmato in Cardiologia. Eseguita ecocardiografia transesofagea preventiva per escludere formazioni trombotiche in auricola sinistra. Portato in sala di elettrofisiologia: puntura transettale sotto guida ecocardiografica intracardiaca (ICE), ricostruzione della mappa elettroanatomica 3D (sistema CARTO) e crioablazione/radiofrequenza con isolamento elettrico circonferenziale completo delle quattro vene polmonari. Ripristino stabile del ritmo sinusale.',
      proceduresConducted: 'Studio elettrofisiologico transcatetere (EPS), puntura transettale per accesso all\'atrio sinistro, ablazione a radiofrequenza transcatetere delle vene polmonari per fibrillazione atriale, ecografia transesofagea pre-operatoria.',
      dischargeStatus: 'Dimesso al 2° giorno post-procedura in ritmo sinusale stabile, programmata terapia anticoagulante orale per almeno 3 mesi.'
    },
    documentationGapsWarning: 'In ICD-10-IM la fibrillazione atriale parossistica ha codice I48.0 distinto da persistente (I48.1) e permanente (I48.2).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I48.0', description: 'Fibrillazione atriale parossistica', system: 'ICD-10-IM' },
        secondaryDiagnoses: [{ code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }],
        procedures: [
          { code: 'CIPI-37.34', description: 'Ablazione transcatetere di lesione o tessuto cardiaco per aritmie (Isolamento vene polmonari)', system: 'CIPI' },
          { code: 'CIPI-37.26', description: 'Studio elettrofisiologico cardiaco (EPS)', system: 'CIPI' },
          { code: 'CIPI-88.72', description: 'Ecocardiografia transesofagea diagnostica pre-procedura', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '427.31', description: 'Fibrillazione atriale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '401.9', description: 'Ipertensione essenziale', system: 'ICD-9-CM' }],
        procedures: [{ code: '37.34', description: 'Ablazione transcatetere di tessuto cardiaco', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM impone la distinzione esatta tra FA parossistica (I48.0) e forme persistenti/permanenti.',
        'La procedura CIPI 37.34 identifica l\'ablazione transcatetere endocavitaria.'
      ],
      commonCognitiveErrors: [
        'Usare il codice generico I48.91 (fibrillazione atriale non specificata) quando la documentazione clinica attesta chiaramente il carattere parossistico.',
        'Omettere la codifica dello studio elettrofisiologico associato (CIPI 37.26).'
      ],
      chartDocumentationAdvice: 'Attestare la documentata bidirezionalità del blocco di conduzione all\'uscita e all\'entrata dalle vene polmonari nel verbale.'
    }
  },
  {
    id: 'cardio-4',
    specialtyId: 'cardiologia',
    caseNumber: 4,
    title: 'Scompenso cardiaco a ridotta frazione di eiezione (HFrEF) con blocco di branca sinistra sottoposto ad impianto di CRT-D',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Scompenso Cardiaco e Device',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 68 anni',
      admissionReason: 'Dispnea per sforzi minimi (classe NYHA III avanzata) ed astenia profonda refrattaria a quadruplice terapia medica ottimizzata.',
      anamnesis: 'Cardiopatia dilatativa idiopatica con FEVS 26%, blocco di branca sinistra completo (BBS) con durata del QRS di 165 ms.',
      hospitalCourse: 'Ricoverato in Cardiologia per resincronizzazione cardiaca. Eseguito impianto di defibrillatore cardiaco biventricolare per resincronizzazione (CRT-D): posizionati tre elettrocateteri (atrio destro, ventricolo destro per defibrillazione e seno coronarico/ramo postero-laterale per stimolazione ventricolare sinistra). Soglie ottimali, assenza di stimolazione frenica. Ottimizzazione ecocardiografica dell\'intervallo AV e VV con immediato restringimento del QRS a 115 ms.',
      proceduresConducted: 'Impianto di sistema biventricolare per terapia di resincronizzazione cardiaca con defibrillatore (CRT-D), fluoroscopia con venografia del seno coronarico, test di stimolazione ed ecocardiografia.',
      dischargeStatus: 'Dimesso al 3° giorno post-impianto con ferita chirurgica in ordine e parametri elettrici del device perfetti.'
    },
    documentationGapsWarning: 'In ICD-10-IM la combinazione di scompenso cardiaco conclamato a frazione ridotta (I50.22 cronico riacutizzato) e blocco di branca sinistra (I44.7) è fondamentale per giustificare l\'appropriatezza di CRT-D.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I50.22', description: 'Insufficienza cardiaca sistolica cronica (HFrEF)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I44.7', description: 'Blocco di branca sinistra non specificato', system: 'ICD-10-IM' },
          { code: 'I42.0', description: 'Cardiomiopatia dilatativa', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-00.51', description: 'Impianto di sistema di defibrillazione per resincronizzazione cardiaca biventricolare (CRT-D)', system: 'CIPI' },
          { code: 'CIPI-00.54', description: 'Inserimento di elettrocatetere transvenoso per il ventricolo sinistro nel seno coronarico', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '428.22', description: 'Insufficienza cardiaca sistolica cronica', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '426.3', description: 'Altro blocco di branca sinistra', system: 'ICD-9-CM' }, { code: '425.4', description: 'Altra cardiomiopatia primitiva', system: 'ICD-9-CM' }],
        procedures: [{ code: '00.51', description: 'Impianto di sistema CRT-D', system: 'ICD-9-CM' }, { code: '00.54', description: 'Inserimento elettrocatetere nel seno coronarico', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM I50.2 specifica lo scompenso sistolico a ridotta frazione di eiezione (HFrEF).',
        'La presenza del blocco di branca sinistra (I44.7) con durata QRS > 150 ms supporta l\'indicazione clinica di classe I alle linee guida ESC per resincronizzazione.',
        'La procedura CIPI 00.51 descrive l\'impianto del generatore CRT-D ad alta complessità tecnologica.'
      ],
      commonCognitiveErrors: [
        'Codificare generico pacemaker I44.2 anziché defibrillatore resincronizzatore CRT-D.',
        'Omettere la cardiomiopatia dilatativa sottostante (I42.0).'
      ],
      chartDocumentationAdvice: 'Riportare la frazione di eiezione (< 35%), la durata esatta del QRS pre e post impianto in millisecondi e la classe NYHA.'
    }
  },
  {
    id: 'cardio-5',
    specialtyId: 'cardiologia',
    caseNumber: 5,
    title: 'Stenosi valvolare aortica severa sintomatica calcifica trattata con TAVI transcatetere femorale',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Valvulopatie ed Interventistica Strutturale',
    clinicalScenario: {
      patientAgeSex: 'Donna, 83 anni',
      admissionReason: 'Dispnea da sforzo per minimi movimenti, sincope da sforzo durante salita delle scale e angina da discrepanza.',
      anamnesis: 'Pregresso ictus ischemico non disabilitante, osteoporosi severa, insufficienza renale cronica stadio 3a (eGFR 48 mL/min). EuroSCORE II elevato (6.8%). Valutata dall\'Heart Team.',
      hospitalCourse: 'Ecocardiogramma: stenosi aortica serrata calcifica con area valvolare 0.6 cm2, gradiente medio transvalvolare 54 mmHg, velocità di picco 4.6 m/s. TC aorotico-iliaca documenta accessi femorali idonei senza tortuosità estreme. Eseguita sostituzione valvolare aortica transcatetere (TAVI) per via percutanea transfemorale destra in sedazione cosciente con valvola autoespandibile da 26 mm. Gradiente medio post-impianto crollato a 7 mmHg, assenza di rigurgito paravalvolare significativo.',
      proceduresConducted: 'Sostituzione della valvola aortica per via percutanea transcatetere (TAVI) con approccio transfemorale, aortografia angiografica di controllo, cateterismo arterioso femorale con dispositivo di chiusura percutanea.',
      dischargeStatus: 'Dimessa al 4° giorno post-procedura in ottime condizioni cliniche, ECG nei limiti senza turbe della conduzione AV.'
    },
    documentationGapsWarning: 'In ICD-10-IM la stenosi della valvola aortica non reumatica calcifica ha il codice I35.0. Nel catalogo CIPI la TAVI transcatetere deve essere distinta in base alla via di accesso (femorale vs apicale).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I35.0', description: 'Stenosi della valvola aortica non reumatica (calcifica degenerativa)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'N18.30', description: 'Malattia renale cronica, stadio 3 non specificato', system: 'ICD-10-IM' },
          { code: 'I69.30', description: 'Esiti di infarto cerebrale non specificati', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-35.05', description: 'Sostituzione percutanea transcatetere della valvola aortica per via transfemorale (TAVI)', system: 'CIPI' },
          { code: 'CIPI-88.58', description: 'Aortografia retrograda', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '424.1', description: 'Disturbi della valvola aortica', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '585.3', description: 'Malattia renale cronica stadio III', system: 'ICD-9-CM' }],
        procedures: [{ code: '35.05', description: 'Sostituzione transcatetere della valvola aortica per via percutanea', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'La stenosi aortica calcifica degenerativa senile (I35.0) è la diagnosi principale eziologica che ha determinato la TAVI.',
        'La procedura CIPI 35.05 definisce tassativamente l\'approccio transfemorale, differenziandosi dall\'accesso transapicale (CIPI 35.06).'
      ],
      commonCognitiveErrors: [
        'Utilizzare il codice della cardiopatia reumatica aortica (I06.0) per una stenosi degenerativa senile.',
        'Codificare un intervento chirurgico a cielo aperto con sternotomia (CIPI 35.21) anziché la procedura percutanea TAVI.'
      ],
      chartDocumentationAdvice: 'Attestare l\'area valvolare aortica (< 1 cm2), il gradiente medio e la decisione collegiale dell\'Heart Team per indicazione a TAVI.'
    }
  },
  {
    id: 'cardio-6',
    specialtyId: 'cardiologia',
    caseNumber: 6,
    title: 'Insufficienza mitralica severa degenerativa trattata con riparazione transcatetere edge-to-edge (MitraClip)',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Valvulopatie ed Interventistica Strutturale',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 79 anni',
      admissionReason: 'Dispnea ingravescente a riposo con episodi di scompenso biventricolare e intolleranza all\'esercizio fisico.',
      anamnesis: 'Pregresso bypass aortocoronarico 15 anni fa, diabete, BPCO moderata; rischio cardiochirurgico proibitivo secondo Heart Team.',
      hospitalCourse: 'Ecocardiogramma transesofageo 3D: insufficienza mitralica severa degenerativa da prolasso del lembo posteriore (scallop P2) con rigurgito eccentrico a getto laminare (EROA 0.48 cm2, volume rigurgitato 65 mL). Eseguita procedura transcatetere di riparazione mitralica edge-to-edge (TEER) mediante impianto di 2 clip (MitraClip G4) per via venosa femorale transettale sotto guida TEE ed ecocardiografia intracardiaca. Riduzione del rigurgito a grado lieve/residuo trascurabile (1+/4+) con gradiente transmitralico finale medio di 3.2 mmHg.',
      proceduresConducted: 'Riparazione della valvola mitrale per via percutanea transcatetere (procedura edge-to-edge / MitraClip), puntura transettale per accesso atriale sinistro, ecocardiografia transesofagea intraoperatoria continua.',
      dischargeStatus: 'Dimesso al 3° giorno post-operatorio in netto miglioramento soggettivo e classe NYHA I-II.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'insufficienza mitralica non reumatica ha il codice I34.0.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I34.0', description: 'Insufficienza della valvola mitrale non reumatica', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I50.9', description: 'Insufficienza cardiaca non specificata', system: 'ICD-10-IM' },
          { code: 'J44.9', description: 'Broncopneumopatia cronica ostruttiva non specificata', system: 'ICD-10-IM' },
          { code: 'Z95.1', description: 'Presenza di bypass aortocoronarico', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-35.97', description: 'Riparazione transcatetere della valvola mitrale mediante approccio percutaneo (MitraClip)', system: 'CIPI' },
          { code: 'CIPI-88.72', description: 'Ecocardiografia transesofagea intraoperatoria continua per guida di procedura', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '424.0', description: 'Disturbi della valvola mitrale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '428.0', description: 'Insufficienza cardiaca congestizia', system: 'ICD-9-CM' }, { code: 'V45.81', description: 'Presenza di bypass aortocoronarico', system: 'ICD-9-CM' }],
        procedures: [{ code: '35.97', description: 'Altra riparazione della valvola mitrale per via percutanea', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I34.0 identifica l\'insufficienza della valvola mitrale organica non reumatica.',
        'La procedura CIPI 35.97 codifica formalmente la riparazione transcatetere edge-to-edge della mitrale.',
        'La presenza di pregresso bypass (Z95.1) giustifica la scelta percutanea mini-invasiva rispetto alla re-sternotomia.'
      ],
      commonCognitiveErrors: [
        'Codificare una valvuloplastica percutanea con palloncino (CIPI 35.96) anziché la corretta riparazione con clip percutanea (CIPI 35.97).'
      ],
      chartDocumentationAdvice: 'Attestare l\'entità del rigurgito pre e post-clip, il gradiente transmitralico residuo e l\'assenza di stenosi mitralica iatrogena.'
    }
  },
  {
    id: 'cardio-7',
    specialtyId: 'cardiologia',
    caseNumber: 7,
    title: 'Blocco atrioventricolare totale (III grado) con sincope di Adams-Stokes e impianto di pacemaker bicamerale definitivo',
    complexity: 'Intermedio',
    subCategory: 'Aritmologia e Stimolazione Cardiaca',
    clinicalScenario: {
      patientAgeSex: 'Donna, 81 anni',
      admissionReason: 'Episodio di perdita improvvisa di coscienza a riposo con caduta a terra e trauma facciale minore, preceduto da senso di vuoto alla testa.',
      anamnesis: 'Ipertensione in trattamento con sartano, non precedenti eventi sincope.',
      hospitalCourse: 'In Pronto Soccorso/Cardiologia: bradicardia severa con FC 32 bpm. ECG: Blocco Atrioventricolare Completo (III grado) con dissociazione atrioventricolare totale e ritmo di scappamento giunzionale ventricolare slargato a 30 bpm con pause fino a 4.2 secondi. Posizionato pacemaker temporaneo transvenoso via vena femorale d\'urgenza. Sottoposta il giorno successivo ad impianto di pacemaker definitivo bicamerale (DDD-R) con accesso cefalico e succlavio sinistro: posizionamento di elettrocatetere atriale in auricola destra e ventricolare all\'apice del ventricolo destro. Parametri di sensing e pacing ottimali.',
      proceduresConducted: 'Inserimento di pacemaker temporaneo transvenoso d\'urgenza, impianto di pacemaker permanente definitivo bicamerale (DDD), radiografia post-operatoria del torace.',
      dischargeStatus: 'Dimessa al 3° giorno post-impianto con ferita guarita e programmazione DDD-R a 60-120 bpm.'
    },
    documentationGapsWarning: 'In ICD-10-IM il blocco atrioventricolare completo ha il codice I44.2. La sincope di Adams-Stokes ha il codice specifico I45.9 / R55.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I44.2', description: 'Blocco atrioventricolare completo (III grado)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R55', description: 'Sincope e collasso (crisi di Adams-Stokes da bradiaritmia)', system: 'ICD-10-IM' },
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-37.83', description: 'Inserimento iniziale di pacemaker permanente bicamerale (DDD)', system: 'CIPI' },
          { code: 'CIPI-37.72', description: 'Inserimento iniziale di elettrocatetere transvenoso in atrio e ventricolo', system: 'CIPI' },
          { code: 'CIPI-37.78', description: 'Inserimento di elettrocatetere temporaneo transvenoso', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '426.0', description: 'Blocco atrioventricolare completo', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '780.2', description: 'Sincope e collasso', system: 'ICD-9-CM' }],
        procedures: [{ code: '37.83', description: 'Inserimento iniziale di pacemaker permanente bicamerale', system: 'ICD-9-CM' }, { code: '37.78', description: 'Inserimento di elettrocatetere temporaneo transvenoso', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I44.2 identifica inequivocabilmente il blocco atrioventricolare di terzo grado.',
        'La procedura di pacemaker temporaneo (CIPI 37.78) eseguita in emergenza prima dell\'impianto definitivo bicamerale (CIPI 37.83) documenta l\'elevata complessità del percorso clinico.'
      ],
      commonCognitiveErrors: [
        'Codificare generico blocco atrioventricolare I44.3 anziché I44.2.',
        'Omettere la codifica della procedura di posizionamento del pacemaker provvisorio temporaneo.'
      ],
      chartDocumentationAdvice: 'Registrare la durata delle pause ventricolari all\'ECG continuo e le soglie di stimolazione e sensing dei singoli cateteri.'
    }
  },
  {
    id: 'cardio-8',
    specialtyId: 'cardiologia',
    caseNumber: 8,
    title: 'Miocardite acuta post-virale con disfunzione ventricolare sinistra e versamento pericardico lieve',
    complexity: 'Intermedio',
    subCategory: 'Miocardiopatie e Pericardite',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 26 anni',
      admissionReason: 'Dolore toracico oppressivo-puntorio accentuato dall\'inspirazione profonda e dal decubito supino, comparso 5 giorni dopo sindrome simil-influenzale con febbre.',
      anamnesis: 'Paziente giovane sportivo, non fattori di rischio cardiovascolare.',
      hospitalCourse: 'In Cardiologia: troponina I ad alta sensibilità nettamente aumentata (12.400 ng/L), PCR 45 mg/L. ECG con sopraslivellamento ST concavo diffuso e sottoslivellamento del tratto PR nelle derivazioni inferiori. Coronarografia d\'urgenza eseguita per escludere sindrome coronarica acuta: coronarie indenni da lesioni stenosanti o trombi. Risonanza Magnetica Cardiaca (RMC): edema miocardico diffuso nelle sequenze T2 e impregnazione tardiva di gadolinio (LGE) a pattern subepicardico e mesocardico non ischemico (criteri di Lake Louise positivi per miocardite acuta). Terapia medica con beta-bloccante a basso dosaggio, FANS ed esenzione da attività sportive per 6 mesi.',
      proceduresConducted: 'Risonanza magnetica cardiaca con mezzo di contrasto (RMC), coronarografia diagnostica percutanea, ecocardiogramma color Doppler.',
      dischargeStatus: 'Dimesso all\'8° giorno con troponina in rapido décalage, asintomatico e con FEVS 50%.'
    },
    documentationGapsWarning: 'In ICD-10-IM la miocardite acuta ha il codice I40.9 (Miocardite acuta non specificata) o I40.0 (Miocardite infettiva).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I40.0', description: 'Miocardite infettiva acuta', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I30.9', description: 'Pericardite acuta non specificata (Perimiocardite)', system: 'ICD-10-IM' },
          { code: 'R07.89', description: 'Altro dolore toracico', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-88.91', description: 'Risonanza magnetica nucleare del cuore con mezzo di contrasto', system: 'CIPI' },
          { code: 'CIPI-88.55', description: 'Arteriografia coronarica selettiva (Coronarografia diagnostica)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '422.91', description: 'Miocardite idiopatica o infettiva', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '420.90', description: 'Pericardite acuta', system: 'ICD-9-CM' }],
        procedures: [{ code: '88.91', description: 'Risonanza magnetica cardiaca', system: 'ICD-9-CM' }, { code: '88.56', description: 'Coronarografia', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I40.0 definisce la miocardite infettiva/post-infettiva conclamata convalidata da RM cardiaca.',
        'La presenza della pericardite associata (perimiocardite) è codificata con I30.9.'
      ],
      commonCognitiveErrors: [
        'Confondere la miocardite con l\'infarto miocardico acuto (I21) quando la coronarografia ha escluso patologie coronariche ostruttive.'
      ],
      chartDocumentationAdvice: 'Specificare l\'aderenza ai criteri di Lake Louise alla risonanza magnetica (edema T2 + LGE non ischemico).'
    }
  },
  {
    id: 'cardio-9',
    specialtyId: 'cardiologia',
    caseNumber: 9,
    title: 'Dissezione coronarica spontanea (SCAD) in donna giovane trattata conservativamente',
    complexity: 'Intermedio',
    subCategory: 'Sindromi Coronariche Acute Non Aterosclerotiche',
    clinicalScenario: {
      patientAgeSex: 'Donna, 41 anni',
      admissionReason: 'Insorgenza acuta di dolore toracico oppressivo durante intenso stress emotivo e fisico.',
      anamnesis: 'Puerpera da 3 mesi, assenza di fattori di rischio cardiovascolare convenzionali.',
      hospitalCourse: 'In UTIC: ECG con sopraslivellamento ST in V2-V4, curva troponinica patologica. Coronarografia: stenosi lunga, liscia e tubulare (> 30 mm) del tratto medio-distale dell\'arteria interventricolare anteriore con doppio lume visibile e flusso TIMI 2 (quadro angiografico patognomonico per dissezione coronarica spontanea di tipo 2 secondo la classificazione di Saw). Non segni di aterosclerosi coronarica diffusa. Decisione clinica di gestione medica conservativa (non-interventistica) per evitare l\'estensione iatrogena del flap intramurale. Monitoraggio continuo per 6 giorni con risoluzione dei sintomi ed evoluzione a flusso TIMI 3.',
      proceduresConducted: 'Coronarografia diagnostica selettiva con imaging intravascolare (OCT/IVUS), ecocardiografia transtoracica, monitoraggio multiparametrico continuo.',
      dischargeStatus: 'Dimessa al 7° giorno in monoterapia con beta-bloccante e cardioaspirina, con prescrizione di angio-TC coronarica di controllo a 3 mesi.'
    },
    documentationGapsWarning: 'In ICD-10-IM la dissezione coronarica spontanea ha il codice dedicato e specifico I25.42 (Dissezione dell\'arteria coronarica non traumatica / SCAD).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I25.42', description: 'Dissezione dell\'arteria coronarica (Dissezione coronarica spontanea - SCAD)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I21.09', description: 'Infarto miocardico acuto con sopraslivellamento ST anteriore', system: 'ICD-10-IM' },
          { code: 'Z39.2', description: 'Cure e sorveglianza della madre nel puerperio', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-88.55', description: 'Arteriografia coronarica selettiva', system: 'CIPI' },
          { code: 'CIPI-38.24', description: 'Tomografia a coerenza ottica intracoronarica (OCT)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '414.12', description: 'Dissezione di arteria coronarica', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '410.11', description: 'Infarto miocardico acuto anteriore', system: 'ICD-9-CM' }],
        procedures: [{ code: '88.56', description: 'Coronarografia', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM I25.42 definisce specificamente la dissezione non aterosclerotica coronarica (SCAD).',
        'L\'infarto miocardico acuto secondario alla dissezione deve essere codificato come diagnosi associata.'
      ],
      commonCognitiveErrors: [
        'Classificare la SCAD come comune malattia coronarica aterosclerotica (I25.10).',
        'Omettere la procedura OCT quando impiegata per confermare l\'ematoma intramurale.'
      ],
      chartDocumentationAdvice: 'Attestare la classificazione angiografica di Saw (tipo 1, 2 o 3) e l\'assenza di stent impiantati a giustificazione dell\'approccio conservativo.'
    }
  },
  {
    id: 'cardio-10',
    specialtyId: 'cardiologia',
    caseNumber: 10,
    title: 'Cardiopatia ischemica cronica trivascolare trattata con triplice bypass aortocoronarico (CABG) in CEC',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Cardiochirurgia Coronarica',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 66 anni',
      admissionReason: 'Angina da sforzo ingravescente (CCS classe III) refrattaria a duplice terapia anti-ischemica, con test da sforzo precocemente positivo.',
      anamnesis: 'Diabete mellito tipo 2 insulino-trattato, pregresso fumo, ipercolesterolemia. Syntax Score 34 (elevata complessità anatomica).',
      hospitalCourse: 'Coronarografia: malattia trivascolare severa con occlusione cronica della coronaria destra e stenosi critiche dell\'IVA prossimale e del tronco comune distale. Valutato dall\'Heart Team ed indirizzato a rivascolarizzazione cardiochirurgica. Eseguito intervento di rivascolarizzazione miocardica chirurgica mediante triplice bypass aortocoronarico in circolazione extracorporea (CEC): anastomosi arteria mammaria interna sinistra (LIMA) su IVA, e doppio graft venoso safenico su ramo marginale ottuso e ramo interventricolare posteriore. Decorso post-operatorio regolare.',
      proceduresConducted: 'Triplice bypass aortocoronarico con utilizzo di arteria mammaria interna e vena safena autologa, circolazione extracorporea con arresto cardioplegico (CEC), prelievo chirurgico di vena safena.',
      dischargeStatus: 'Dimesso al 9° giorno in buone condizioni cliniche, ferita sternale stabile e trasferimento in riabilitazione cardiologica.'
    },
    documentationGapsWarning: 'In ICD-10-IM la cardiopatia ischemica cronica aterosclerotica ha codice I25.10. Nel catalogo CIPI la procedura di CABG deve combinare il numero di bypass venosi (CIPI 36.12) e il bypass con arteria mammaria (CIPI 36.15) e l\'impiego della CEC (CIPI 39.61).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I25.10', description: 'Cardiopatia ischemica aterosclerotica nativa senza menzione di angina', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I20.8', description: 'Altre forme di angina pectoris (Angina stabile da sforzo)', system: 'ICD-10-IM' },
          { code: 'E11.69', description: 'Diabete mellito tipo 2 con altre complicanze specificate', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-36.15', description: 'Bypass singolo tra arteria mammaria interna e coronaria', system: 'CIPI' },
          { code: 'CIPI-36.12', description: 'Bypass aortocoronarico con due graft venosi autologhi (safena)', system: 'CIPI' },
          { code: 'CIPI-39.61', description: 'Circolazione extracorporea (CEC / macchina cuore-polmone)', system: 'CIPI' },
          { code: 'CIPI-38.29', description: 'Prelievo di vena per graft chirurgico', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '414.01', description: 'Aterosclerosi di coronaria nativa', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '413.9', description: 'Altra e non specificata angina pectoris', system: 'ICD-9-CM' }],
        procedures: [
          { code: '36.15', description: 'Bypass singolo con arteria mammaria interna', system: 'ICD-9-CM' },
          { code: '36.12', description: 'Due bypass aortocoronarici', system: 'ICD-9-CM' },
          { code: '39.61', description: 'Circolazione extracorporea', system: 'ICD-9-CM' }
        ]
      },
      rulesAppliedExplanation: [
        'La cardiopatia ischemica aterosclerotica cronica (I25.10) è la diagnosi principale del ricovero chirurgico elettivo.',
        'La corretta rendicontazione cardiochirurgica CIPI impone di separare i codici del bypass arterioso con mammaria (36.15) da quelli dei graft venosi (36.12) e l\'impiego della CEC (39.61).'
      ],
      commonCognitiveErrors: [
        'Omettere il codice della circolazione extracorporea (CEC CIPI 39.61), essenziale per la valorizzazione del caso.',
        'Inserire un unico codice generico di bypass omettendo il graft arterioso mammaria.'
      ],
      chartDocumentationAdvice: 'Attestare il tempo totale di clampaggio aortico, il tempo di CEC e la flussimetria intraoperatoria (Transit Time Flow Measurement) dei graft.'
    }
  },
  {
    id: 'cardio-11',
    specialtyId: 'cardiologia',
    caseNumber: 11,
    title: 'Endocardite infettiva acuta della valvola aortica nativa da Enterococcus faecalis con ascesso perivalvolare',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Infezioni Cardiovascolari Maggiori',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 70 anni',
      admissionReason: 'Febbre intermittente con brivido da 3 settimane, calo ponderale, astenia profonda e comparsa di nuovo soffio diastolico precoce.',
      anamnesis: 'Pregressa biopsia prostatica 1 mese prima, non valvulopatie note pregresse.',
      hospitalCourse: 'Tre set di emocolture positive per Enterococcus faecalis sensibile ad ampicillina. Ecocardiogramma transesofageo (TEE): vegetazione mobile di 14 mm inserita sulla cuspide coronarica destra della valvola aortica con perforazione della cuspide, insufficienza aortica severa e presenza di ispessimento ipoecogeno della radice aortica compatibile con ascesso perivalvolare dell\'anello aortico. ECG: allungamento dell\'intervallo PR (blocco AV di I grado, segno di invasione perivalvolare). Sottoposto ad intervento cardiochirurgico d\'urgenza con sbrigliamento dell\'ascesso, ricostruzione della radice con patch pericardico biologico e sostituzione valvolare aortica con bioprotesi.',
      proceduresConducted: 'Sostituzione chirurgica della valvola aortica con bioprotesi in CEC, resezione e debridement di ascesso dell\'anello valvolare, ecocardiografia transesofagea intraoperatoria.',
      dischargeStatus: 'Dimesso al 28° giorno dopo completamento di 4 settimane di terapia antibiotica mirata EV (Ampicillina + Ceftriaxone).'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'endocardite infettiva acuta ha il codice I33.0 con codice obbligatorio per il patogeno (B95.2 per Enterococco).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I33.0', description: 'Endocardite infettiva acuta e subacuta', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'B95.2', description: 'Enterococco come causa di malattie classificate in altri capitoli', system: 'ICD-10-IM' },
          { code: 'I35.1', description: 'Insufficienza della valvola aortica non reumatica acuta', system: 'ICD-10-IM' },
          { code: 'I44.0', description: 'Blocco atrioventricolare di primo grado', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-35.22', description: 'Sostituzione a cielo aperto della valvola aortica con bioprotesi', system: 'CIPI' },
          { code: 'CIPI-35.39', description: 'Operazione sulle strutture adiacenti alle valvole cardiache (sbrigliamento ascesso anulare)', system: 'CIPI' },
          { code: 'CIPI-39.61', description: 'Circolazione extracorporea (CEC)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '421.0', description: 'Endocardite batterica acuta e subacuta', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '041.04', description: 'Infezione da enterococco', system: 'ICD-9-CM' }, { code: '424.1', description: 'Disturbi della valvola aortica', system: 'ICD-9-CM' }],
        procedures: [{ code: '35.22', description: 'Sostituzione di valvola aortica con tessuto biologico', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I33.0 identifica l\'endocardite infettiva attiva.',
        'L\'isolamento microbiologico deve essere sempre tracciato con il codice batterico secondario (B95.2).',
        'L\'intervento cardiochirurgico combinato di sostituzione valvolare e bonifica dell\'ascesso anulare (CIPI 35.22 + 35.39) riflette l\'estrema gravità del quadro.'
      ],
      commonCognitiveErrors: [
        'Omettere il patogeno responsabile (Enterococco B95.2).',
        'Non codificare l\'ascesso anulare perivalvolare.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario clinico le dimensioni delle vegetazioni al TEE, la presenza di complicanze perivalvolari e l\'antibiogramma.'
    }
  },
  {
    id: 'cardio-12',
    specialtyId: 'cardiologia',
    caseNumber: 12,
    title: 'Sindrome di Brugada di tipo 1 sintomatica per sincope aritmica trattata con impianto di S-ICD',
    complexity: 'Intermedio',
    subCategory: 'Canalopatie e Morte Improvvisa',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 32 anni',
      admissionReason: 'Sincope notturna a letto testimoniata dalla compagna con respiro rumoroso e movimenti tonici fugaci degli arti, con rapida ripresa di coscienza.',
      anamnesis: 'Familiarità per morte improvvisa giovanile in cugino di primo grado (a 28 anni nel sonno).',
      hospitalCourse: 'In Cardiologia: ECG standard mostra sopraslivellamento del punto J di 2.5 mm con sopraslivellamento ST a tenda concava discendente tipo "coved" seguito da onda T negativa nelle derivazioni precordiali destre V1-V2 posizionate nei II e III spazi intercostali (pattern Brugada tipo 1 spontaneo). Esclusa cardiopatia strutturale con ecocardiogramma e RM cardiaca. Considerata la sincope aritmica, posta indicazione all\'impianto di defibrillatore cardiaco impiantabile totalmente sottocutaneo (S-ICD). Eseguito screening vettoriale ECG positivo su tutte e tre le derivazioni. Procedura di impianto di S-ICD in tasca intermuscolare ascellare sinistra con elettrocatetere sottocutaneo parasternale. Eseguito test di induzione di fibrillazione ventricolare con cardioversione efficace a 65 Joule.',
      proceduresConducted: 'Impianto di defibrillatore cardiaco impiantabile sottocutaneo (S-ICD), test di defibrillazione intraoperatorio con induzione di FV, fluoroscopia.',
      dischargeStatus: 'Dimesso al 2° giorno post-operatorio, programmato monitoraggio remoto domiciliare del dispositivo.'
    },
    documentationGapsWarning: 'In ICD-10-IM la sindrome di Brugada ha il codice specifico I47.28 / I49.8 (altre anomalie specificate del ritmo cardiaco). L\'impianto di defibrillatore sottocutaneo ha codice CIPI dedicato.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I49.8', description: 'Altre aritmie cardiache specificate (Sindrome di Brugada)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R55', description: 'Sincope e collasso (sincope aritmica)', system: 'ICD-10-IM' },
          { code: 'Z82.41', description: 'Storia familiare di morte cardiaca improvvisa', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-37.94', description: 'Impianto di sistema di defibrillatore cardiaco automatico totale sottocutaneo (S-ICD)', system: 'CIPI' },
          { code: 'CIPI-37.99', description: 'Test di defibrillazione intraoperatorio con induzione e conversione di aritmia', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '426.89', description: 'Altri disturbi della conduzione specificati (Sindrome di Brugada)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '780.2', description: 'Sincope e collasso', system: 'ICD-9-CM' }, { code: 'V17.41', description: 'Storia familiare di morte cardiaca improvvisa', system: 'ICD-9-CM' }],
        procedures: [{ code: '37.94', description: 'Impianto o sostituzione di defibrillatore', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I49.8 definisce la canalopatia aritmogena genetica (Brugada).',
        'La storia familiare di morte cardiaca improvvisa (Z82.41) è un codice addizionale rilevante per documentare l\'alto profilo di rischio.',
        'La procedura CIPI 37.94 identifica il device totalmente extravascolare (S-ICD).'
      ],
      commonCognitiveErrors: [
        'Codificare un defibrillatore transvenoso endocavitario tradizionale quando è stato impiantato un S-ICD sottocutaneo.',
        'Omettere la sincope e la storia familiare nei codici secondari.'
      ],
      chartDocumentationAdvice: 'Allegare alla cartella il tracciato ECG con il pattern di Brugada tipo 1 spontaneo e il referto del test di shock intraoperatorio.'
    }
  },
  {
    id: 'cardio-13',
    specialtyId: 'cardiologia',
    caseNumber: 13,
    title: 'Cardiomiopatia ipertrofica ostruttiva (HOCM) severa con miectomia chirurgica di Morrow',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Miocardiopatie e Cardiochirurgia',
    clinicalScenario: {
      patientAgeSex: 'Donna, 51 anni',
      admissionReason: 'Dispnea grave per sforzi lievi, lipotimie ricorrenti e dolore toracico atipico resistente a dosi massimali di beta-bloccante.',
      anamnesis: 'Cardiomiopatia ipertrofica asimmetrica familiare, mutazione MYBPC3 accertata.',
      hospitalCourse: 'Ecocardiogramma: ipertrofia severa del setto interventricolare basale (spessore 24 mm) con movimento sistolico anteriore (SAM) del lembo anteriore mitralico, rigurgito mitralico moderato e gradiente dinamico intraventricolare a riposo di 78 mmHg (aumentato a 115 mmHg con manovra di Valsalva). Indirizzata a Cardiochirurgia. Eseguito intervento di resezione del setto interventricolare per via transaortica (miectomia sec. Morrow) in circolazione extracorporea. Al controllo post-operatorio immediato scomparsa del SAM e crollo del gradiente di efflusso a 8 mmHg.',
      proceduresConducted: 'Miectomia del setto interventricolare transaortica sec. Morrow in CEC, ecocardiografia transesofagea intraoperatoria di controllo.',
      dischargeStatus: 'Dimessa al 7° giorno in assenza di disturbi di conduzione AV e con classe funzionale NYHA I.'
    },
    documentationGapsWarning: 'In ICD-10-IM la cardiomiopatia ipertrofica ostruttiva ha il codice specifico I42.1.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I42.1', description: 'Cardiomiopatia ipertrofica ostruttiva (HOCM)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I34.0', description: 'Insufficienza mitralica secondaria da SAM', system: 'ICD-10-IM' },
          { code: 'Z84.81', description: 'Storia familiare di malattie genetiche dell\'apparato cardiocircolatorio', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-37.33', description: 'Resezione chirurgica o escissione di tessuto del cuore (Miectomia transaortica del setto sec. Morrow)', system: 'CIPI' },
          { code: 'CIPI-39.61', description: 'Circolazione extracorporea (CEC)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '425.11', description: 'Cardiomiopatia ipertrofica ostruttiva', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '424.0', description: 'Disturbi della valvola mitrale', system: 'ICD-9-CM' }],
        procedures: [{ code: '37.33', description: 'Resezione di tessuto del cuore', system: 'ICD-9-CM' }, { code: '39.61', description: 'Circolazione extracorporea', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I42.1 definisce inequivocabilmente la forma ostruttiva della cardiomiopatia ipertrofica, distinta dalla forma non ostruttiva (I42.2).',
        'La procedura CIPI 37.33 codifica la miectomia chirurgica di Morrow.'
      ],
      commonCognitiveErrors: [
        'Utilizzare il codice per cardiomiopatia non ostruttiva I42.2 in presenza di SAM e gradiente emodinamico intraventricolare > 50 mmHg.',
        'Omettere la CEC (CIPI 39.61).'
      ],
      chartDocumentationAdvice: 'Registrare il gradiente nel tratto di efflusso ventricolare sinistro (LVOT) a riposo e provocato prima e dopo miectomia.'
    }
  },
  {
    id: 'cardio-14',
    specialtyId: 'cardiologia',
    caseNumber: 14,
    title: 'Pericardite acuta idiopatica con versamento pericardico cospicuo trattata con colchicina e FANS',
    complexity: 'Base',
    subCategory: 'Patologie del Pericardio',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 34 anni',
      admissionReason: 'Dolore toracico trafittivo retrosternale irradiato al muscolo trapezio sinistro, accentuato dal decubito supino e attenuato dalla posizione seduta a tronco flesso in avanti.',
      anamnesis: 'Paziente in buona salute, non febbre recente.',
      hospitalCourse: 'All\'ascoltazione cardiaca presenza di sfregamenti pericardici meso-sistolici fugaci. ECG con sopraslivellamento ST a concavità verso l\'alto diffuso a quasi tutte le derivazioni con sottoslivellamento PR in DII e aVF. PCR 68 mg/L, troponina negativa. Ecocardiogramma: versamento pericardico circonferenziale anecogeno di 16 mm a livello della parete posteriore del ventricolo sinistro senza segni di collasso atriale o ventricolare diastolico (non tamponamento). Trattato con Ibuprofene 600 mg tid e Colchicina 0.5 mg bid con rapida detensione del dolore entro 48 ore.',
      proceduresConducted: 'Ecocardiografia transtoracica, elettrocardiogramma a 12 derivazioni, monitoraggio biologico degli indici di flogosi.',
      dischargeStatus: 'Dimesso al 4° giorno con riduzione del versamento a 5 mm e prosecuzione del ciclo di colchicina per 3 mesi per prevenzione delle recidive.'
    },
    documentationGapsWarning: 'In ICD-10-IM la pericardite acuta idiopatica ha il codice I30.0.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I30.0', description: 'Pericardite acuta idiopatica non specifica', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I31.3', description: 'Versamento pericardico (non infiammatorio/cronico lieve)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-88.72', description: 'Ecocardiografia transtoracica', system: 'CIPI' },
          { code: 'CIPI-89.52', description: 'Elettrocardiogramma standard a 12 derivazioni', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '420.90', description: 'Pericardite acuta', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '423.9', description: 'Malattia non specificata del pericardio', system: 'ICD-9-CM' }],
        procedures: [{ code: '88.72', description: 'Ecocardiografia', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I30.0 codifica la forma idiopatica acuta.',
        'In assenza di tamponamento emodinamico (I31.4), il versamento cospicuo è codificato come I31.3.'
      ],
      commonCognitiveErrors: [
        'Confondere il tracciato di pericardite con quello di uno STEMI acuto, procedendo a codifica impropria di infarto.',
        'Codificare il dolore toracico come codice aggiuntivo.'
      ],
      chartDocumentationAdvice: 'Attestare l\'assenza di segni ecocardiografici di tamponamento cardiaco e la misura in millimetri della falda fluida.'
    }
  },
  {
    id: 'cardio-15',
    specialtyId: 'cardiologia',
    caseNumber: 15,
    title: 'Forame ovale pervio (PFO) con aneurisma del setto interatriale ed embolia paradossa chiuso per via percutanea',
    complexity: 'Intermedio',
    subCategory: 'Cardiopatie Congenite dell\'Adulto ed Interventistica',
    clinicalScenario: {
      patientAgeSex: 'Donna, 45 anni',
      admissionReason: 'Esordio acuto di emianopsia omonima destra e afasia transitoria con riscontro di ischemia talamica acuta alla RMN encefalo (ictus criptogenetico).',
      anamnesis: 'Assenza di ipertensione, diabete o fumo. Ecocolordoppler vasi epiaortici negativo, Holter ECG 48h privo di aritmie.',
      hospitalCourse: 'Ecocardiogramma transesofageo con test alle microbolle (soluzione salina agitata) durante manovra di Valsalva: evidenza di passaggio precoce e massivo di microbolle in atrio sinistro entro 3 cicli cardiaci con aneurisma del setto interatriale (escursione > 15 mm). RoPE score = 8 (alta probabilità di ictus correlato a PFO). Eseguita chiusura percutanea del PFO in sala di emodinamica con dispositivo a doppio disco occluditore (Amplatzer PFO Occluder da 25 mm) attraverso vena femorale destra sotto guida ecografica intracardiaca (ICE). Chiusura perfetta senza shunt residuo.',
      proceduresConducted: 'Chiusura percutanea transcatetere di forame ovale pervio (PFO) con dispositivo protesico a doppio ombrellino, ecografia intracardiaca (ICE) di guida, cateterismo venoso femorale.',
      dischargeStatus: 'Dimessa in 2a giornata con prescrizione di cardioaspirina e profilassi endocardite per 6 mesi.'
    },
    documentationGapsWarning: 'In ICD-10-IM il forame ovale pervio ha il codice Q21.1 (Difetto del setto interatriale / PFO).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'Q21.1', description: 'Difetto del setto interatriale (Forame ovale pervio / PFO)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I63.9', description: 'Infarto cerebrale non specificato (Ictus embolico criptogenetico pregresso)', system: 'ICD-10-IM' },
          { code: 'I51.0', description: 'Aneurisma del setto cardiaco interatriale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-35.52', description: 'Riparazione transcatetere di difetto del setto interatriale con protesi (Chiusura percutanea PFO)', system: 'CIPI' },
          { code: 'CIPI-37.28', description: 'Ecocardiografia intracardiaca (ICE)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '745.5', description: 'Difetto del setto atriale (forame ovale pervio)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '434.91', description: 'Infarto cerebrale da occlusione arteriosa', system: 'ICD-9-CM' }],
        procedures: [{ code: '35.52', description: 'Riparazione di difetto del setto atriale con protesi, chiusa', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'Il PFO (Q21.1) è la diagnosi principale del ricovero interventistico programmato.',
        'L\'ictus cerebrale ischemico criptogenetico pregresso che ha motivato l\'indicazione alla chiusura è codificato in diagnosi secondaria.',
        'La procedura CIPI 35.52 codifica la riparazione transcatetere con protesi occludente.'
      ],
      commonCognitiveErrors: [
        'Codificare una procedura chirurgica aperta con sternotomia invece del corretto codice percutaneo CIPI 35.52.',
        'Omettere il RoPE score e la documentazione del passaggio di bolle.'
      ],
      chartDocumentationAdvice: 'Attestare nel referto il numero di bolle trasmesse, l\'escursione dell\'aneurisma del setto e il modello di occluditore utilizzato.'
    }
  },
  {
    id: 'cardio-16',
    specialtyId: 'cardiologia',
    caseNumber: 16,
    title: 'Tachicardia ventricolare sostenuta monomorfa post-infartuale sottoposta a mappaggio e termoablazione transcatetere',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Aritmologia Avanzata',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 71 anni',
      admissionReason: 'Scariche ripetute del defibrillatore (ICD) a domicilio (tempesta aritmica / 4 interventi appropriati di shock) con cardiopalmo sincopale.',
      anamnesis: 'Pregresso infarto anteriore 8 anni prima, portatore di ICD monocamerale, FEVS 30%.',
      hospitalCourse: 'In UTIC: telemetria conferma episodi multipli di tachicardia ventricolare sostenuta monomorfa a 195 bpm interrotti da shock elettrici dell\'ICD. Avviata infusione di Amiodarone EV. Portato in sala di elettrofisiologia: mappaggio elettroanatomico ad alta densità del ventricolo sinistro con approccio retrogrado transaortico e transettale. Identificata cicatrice acinetica antero-apicale con canali di conduzione lenta a potenziali frazionati presistolici. Eseguita ablazione transcatetere a radiofrequenza con catetere irrigato dei canali critici del circuito di rientro con blocco di conduzione e mancata inducibilità di alcuna TV al termine.',
      proceduresConducted: 'Studio elettrofisiologico ed ablazione transcatetere a radiofrequenza di tachicardia ventricolare, mappaggio elettroanatomico tridimensionale ventricolare sinistro, cateterismo arterioso e puntura transettale.',
      dischargeStatus: 'Dimesso dopo 5 giorni di monitoraggio telemetrico privo di recidive aritmiche ventricolari.'
    },
    documentationGapsWarning: 'In ICD-10-IM la tachicardia ventricolare ha il codice I47.2 con codice addizionale per cardiopatia ischemica pregressa (I25.2).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I47.2', description: 'Tachicardia ventricolare (Monomorfa sostenuta)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I25.2', description: 'Pregresso infarto miocardico', system: 'ICD-10-IM' },
          { code: 'I50.22', description: 'Insufficienza cardiaca sistolica cronica', system: 'ICD-10-IM' },
          { code: 'Z95.810', description: 'Presenza di defibrillatore cardiaco automatico (ICD)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-37.34', description: 'Ablazione transcatetere di tessuto/aritmia ventricolare', system: 'CIPI' },
          { code: 'CIPI-37.26', description: 'Studio elettrofisiologico cardiaco (EPS)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '427.1', description: 'Tachicardia parossistica ventricolare', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '412', description: 'Pregresso infarto miocardico', system: 'ICD-9-CM' }, { code: 'V45.02', description: 'Presenza di defibrillatore', system: 'ICD-9-CM' }],
        procedures: [{ code: '37.34', description: 'Ablazione transcatetere di tessuto cardiaco', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I47.2 è la diagnosi principale che ha determinato la tempesta aritmica e l\'accesso interventistico.',
        'La presenza del pregresso infarto (I25.2) e dell\'ICD (Z95.810) documentano il substrato ischemico aritmogeno.',
        'La procedura CIPI 37.34 codifica l\'ablazione transcatetere ventricolare ad alta tecnologia.'
      ],
      commonCognitiveErrors: [
        'Codificare un malfunzionamento dell\'ICD (T82.1) quando gli shock sono stati del tutto appropriati per vera tachicardia ventricolare maligna.'
      ],
      chartDocumentationAdvice: 'Allegare l\'interrogazione dell\'ICD con gli elettrogrammi intracardiaci degli shock e la mappa elettroanatomica post-ablazione.'
    }
  },
  {
    id: 'cardio-17',
    specialtyId: 'cardiologia',
    caseNumber: 17,
    title: 'Flutter atriale tipico comune istmo-dipendente trattato con termoablazione a radiofrequenza dell\'istmo cavo-tricuspidale',
    complexity: 'Base',
    subCategory: 'Aritmologia ed Elettrofisiologia',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 65 anni',
      admissionReason: 'Cardiopalmo prolungato a riposo accompagnato da astenia ed intolleranza allo sforzo da 3 giorni.',
      anamnesis: 'Ipertensione arteriosa ben controllata, privo di cardiopatie strutturali.',
      hospitalCourse: 'In Cardiologia: FC 75 bpm ritmica (blocco AV 4:1). ECG: onde F negative a dente di sega nelle derivazioni inferiori (DII, DIII, aVF) e positive in V1 a frequenza atriale di 300 bpm, tipiche per flutter atriale comune antiorario. Portato in sala di elettrofisiologia: posizionato catetere decapolare in seno coronarico e catetere ablatore irrigato da 8 mm sull\'istmo cavo-tricuspidale (CTI). Eseguita linea di ablazione a radiofrequenza lungo l\'istmo tra l\'anello della tricuspide e la vena cava inferiore con raggiungimento di blocco bidirezionale persistente dopo tempo di attesa di 20 minuti.',
      proceduresConducted: 'Studio elettrofisiologico cardiaco (EPS), ablazione transcatetere a radiofrequenza dell\'istmo cavo-tricuspidale per flutter atriale.',
      dischargeStatus: 'Dimesso il giorno successivo all\'intervento in ritmo sinusale stabile senza complicanze vascolari inguinali.'
    },
    documentationGapsWarning: 'In ICD-10-IM il flutter atriale tipico ha il codice I48.92 (Flutter atriale non specificato / comune).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I48.92', description: 'Flutter atriale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [{ code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }],
        procedures: [
          { code: 'CIPI-37.34', description: 'Ablazione transcatetere di lesione o tessuto del cuore per aritmia (Ablazione istmo cavo-tricuspidale)', system: 'CIPI' },
          { code: 'CIPI-37.26', description: 'Studio elettrofisiologico cardiaco', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '427.32', description: 'Flutter atriale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '401.9', description: 'Ipertensione essenziale', system: 'ICD-9-CM' }],
        procedures: [{ code: '37.34', description: 'Ablazione transcatetere', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I48.92 identifica univocamente il flutter atriale, separandolo dalla fibrillazione atriale.',
        'La procedura CIPI 37.34 e lo studio elettrofisiologico associato CIPI 37.26 documentano l\'intervento curativo con blocco bidirezionale dell\'istmo.'
      ],
      commonCognitiveErrors: [
        'Confondere il flutter con la fibrillazione atriale (I48.0/I48.2).',
        'Omettere la codifica dello studio elettrofisiologico EPS.'
      ],
      chartDocumentationAdvice: 'Attestare la documentazione del blocco bidirezionale orario ed antiorario all\'istmo cavo-tricuspidale con intervallo differenziale.'
    }
  },
  {
    id: 'cardio-18',
    specialtyId: 'cardiologia',
    caseNumber: 18,
    title: 'Amiloidosi cardiaca da transtiretina (ATTR) wild-type con scompenso cardiaco a frazione preservata (HFpEF)',
    complexity: 'Intermedio',
    subCategory: 'Miocardiopatie Infiltrative',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 78 anni',
      admissionReason: 'Dispnea da sforzo ingravescente, edemi declivi bilaterali improntabili agli arti inferiori e turgore delle giugulari, con ipotensione ortostatica.',
      anamnesis: 'Pregresso intervento di decompressione del tunnel carpale bilaterale 6 anni prima, ipotensione da recente riduzione dei farmaci antipertensivi.',
      hospitalCourse: 'Ecocardiogramma: severo incremento dello spessore parietale biventricolare concentrico (setto 18 mm) con aspetto granulare scintillante del miocardio, atri marcatamente dilatati e frazione di eiezione conservata (FE 52%). Disfunzione diastolica di grado III con pattern restrittivo e longitudinal strain con tipico risparmio apicale ("apical sparing" / cherry-on-top). Esclusa componente monoclonale (immunofissazione ed esame catene libere sieriche negativi). Scintigrafia miocardica con difosfonati (99mTc-DPD): captazione cardiaca miocardica intensa di grado 3 di Perugini. Diagnosi non invasiva confermata di Amiloidosi Cardiaca da Transtiretina wild-type (ATTRwt). Avviata terapia mirata stabilizzatrice con Tafamidis.',
      proceduresConducted: 'Scintigrafia miocardica con tracciante osseo per amiloidosi (99mTc-DPD), ecocardiografia transtoracica con speckle tracking strain, monitoraggio cardiologico.',
      dischargeStatus: 'Dimesso al 5° giorno con piano terapeutico regionale per Tafamidis e gestione del diuretico d\'ansa.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'amiloidosi cardiaca da transtiretina ha il codice E85.82 associato a I50.32 (Scompenso diastolico cronico).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'E85.82', description: 'Amiloidosi da transtiretina (ATTR) wild-type o ereditaria', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I50.32', description: 'Insufficienza cardiaca diastolica cronica (HFpEF)', system: 'ICD-10-IM' },
          { code: 'G56.03', description: 'Sindrome del tunnel carpale, bilaterale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-92.05', description: 'Scintigrafia miocardica con radiofarmaco per amiloidosi (SPECT cardiaca con 99mTc-DPD)', system: 'CIPI' },
          { code: 'CIPI-88.72', description: 'Ecocardiografia transtoracica con analisi dello strain miocardico', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '277.39', description: 'Altra amiloidosi', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '428.32', description: 'Insufficienza cardiaca diastolica cronica', system: 'ICD-9-CM' }, { code: '354.0', description: 'Sindrome del tunnel carpale', system: 'ICD-9-CM' }],
        procedures: [{ code: '92.05', description: 'Scintigrafia cardiovascolare', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM introduce il codice dedicato E85.82 specifico per l\'amiloidosi da transtiretina, distinguendola dall\'amiloidosi AL a catene leggere.',
        'Lo scompenso a funzione sistolica preservata (HFpEF) è codificato sotto I50.32.',
        'La presenza della storia di tunnel carpale bilaterale (G56.03) è un campanello d\'allarme tipico della patologia sistemica.'
      ],
      commonCognitiveErrors: [
        'Classificare la patologia come comune ipertensione o cardiomiopatia ipertrofica primitiva, ignorando la scintigrafia DPD positiva.'
      ],
      chartDocumentationAdvice: 'Attestare lo Score di Perugini (grado 2 o 3), l\'assenza di picco monoclonale e la prescrizione di Tafamidis.'
    }
  },
  {
    id: 'cardio-19',
    specialtyId: 'cardiologia',
    caseNumber: 19,
    title: 'Angina microvascolare (INOCA) con vasospasmo coronarico documentato da test all\'acetilcolina',
    complexity: 'Intermedio',
    subCategory: 'Ischemia Senza Coronaropatia Ostruttiva (INOCA)',
    clinicalScenario: {
      patientAgeSex: 'Donna, 54 anni',
      admissionReason: 'Episodi recidivanti di dolore toracico tipico anginoso sia a riposo che dopo sforzo, con accessi ripetuti in Pronto Soccorso.',
      anamnesis: 'Fumatrice, dislipidemia lieve, non precedenti eventi coronarici acuti.',
      hospitalCourse: 'Coronarografia diagnostica: arterie coronarie epicardiche angiograficamente indenni da stenosi stenosanti significative (> 50%). Eseguita valutazione funzionale invasiva in emodinamica: misurazione della riserva di flusso coronarico (CFR < 2.0) e dell\'indice di resistenza microvascolare (IMR > 25) mediante filo guida pressure/temperature sensor wire, indicativi di disfunzione microvascolare. Eseguito successivamente test di reattività vasomotoria con infusione intracoronarica di Acetilcolina a dosi crescenti: comparsa di vasospasmo microvascolare e riproduzione esatta del dolore toracico con modificazioni ST all\'ECG. Diagnosi di INOCA (Ischemia with Non-Obstructive Coronary Arteries).',
      proceduresConducted: 'Coronarografia diagnostica, test funzionale invasivo di flusso con filo di pressione intracoronarico, test di stimolazione provocativa con acetilcolina intracoronarica.',
      dischargeStatus: 'Dimessa al 2° giorno con terapia con calcio-antagonisti e ranolazina con completa scomparsa delle crisi anginose.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'angina microvascolare ha il codice dedicato I20.8 (Altre forme specificate di angina pectoris) o I25.84 (Malattia microvascolare coronarica).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I25.84', description: 'Malattia microvascolare coronarica (Angina microvascolare / INOCA)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I20.1', description: 'Angina pectoris con spasmo documentato (Angina vasospastica)', system: 'ICD-10-IM' },
          { code: 'F17.21', description: 'Dipendenza da tabacco, uso attuale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-88.55', description: 'Arteriografia coronarica selettiva diagnostica', system: 'CIPI' },
          { code: 'CIPI-89.60', description: 'Misurazione invasiva della riserva frazionale di flusso e resistenza microvascolare (FFR / CFR / IMR)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '414.8', description: 'Altre forme specificate di cardiopatia ischemica cronica', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '413.1', description: 'Angina di Prinzmetal', system: 'ICD-9-CM' }],
        procedures: [{ code: '88.56', description: 'Coronarografia', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I25.84 definisce in ICD-10-IM la disfunzione microvascolare coronarica strutturata.',
        'La misurazione della CFR e dell\'IMR in sala di emodinamica deve essere codificata con la procedura CIPI 89.60.'
      ],
      commonCognitiveErrors: [
        'Liquidare la paziente come dolore toracico atipico non cardiaco (R07.89) in presenza di test funzionale all\'acetilcolina patologico.',
        'Omettere la procedura di test di flusso microvascolare invasivo.'
      ],
      chartDocumentationAdvice: 'Attestare nel referto di emodinamica i valori esatti di CFR, IMR e la risposta clinica ed ECG all\'acetilcolina.'
    }
  },
  {
    id: 'cardio-20',
    specialtyId: 'cardiologia',
    caseNumber: 20,
    title: 'Rottura del setto interventricolare post-infartuale (CIV acuta) con shock cardiogeno riparata chirurgicamente con patch',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Complicanze Meccaniche dell\'Infarto / Cardiochirurgia',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 72 anni',
      admissionReason: 'Insorgenza improvvisa di nuovo soffio olosistolico aspro a barra al mesocardio con irradiazione a ruota di carro e shock cardiogeno al 4° giorno post-STEMI inferiore.',
      anamnesis: 'Infarto miocardico inferiore giunto tardivamente in ospedale (> 24 ore dall\'esordio).',
      hospitalCourse: 'In UTIC: improvviso collasso emodinamico (PA 70/45 mmHg, oliguria, lattati 5.2 mmol/L). Ecocardiogramma color Doppler immediato: ampia comunicazione interventricolare (CIV post-infartuale) di 18 mm al terzo basale del setto posteriore con shunt sinistro-destro massivo (Qp/Qs 2.8) e rigurgito tricuspidale severo. Posizionato d\'urgenza contropulsatore aortico (IABP) per riduzione del postcarico e stabilizzazione transitoria. Eseguito intervento cardiochirurgico d\'urgenza: apertura del ventricolo sinistro attraverso l\'area infartuata, chiusura del difetto mediante esclusione con doppio patch di Dacron e colla biologica (tecnica di David) e bypass venoso su arteria interventricolare posteriore.',
      proceduresConducted: 'Chiusura chirurgica a cielo aperto di rottura del setto interventricolare post-infartuale in CEC, inserimento di contropulsatore aortico con palloncino (IABP), bypass aortocoronarico singolo.',
      dischargeStatus: 'Dimesso al 18° giorno dopo estubazione al 5° giorno e rimozione dell\'IABP, in classe NYHA II con difetto completamente chiuso.'
    },
    documentationGapsWarning: 'In ICD-10-IM la rottura del setto interventricolare come complicanza acuta conseguente ad infarto ha il codice dedicato I23.2 (Difetto del setto interventricolare come complicanza acuta secondaria ad IMA).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I23.2', description: 'Difetto del setto interventricolare come complicanza acuta conseguente ad infarto miocardico acuto (CIV post-infartuale)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I21.19', description: 'Infarto miocardico acuto della parete inferiore con ST sopraslivellato', system: 'ICD-10-IM' },
          { code: 'R57.0', description: 'Shock cardiogeno', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-35.53', description: 'Riparazione a cielo aperto di difetto del setto interventricolare con protesi / patch', system: 'CIPI' },
          { code: 'CIPI-37.61', description: 'Inserimento di contropulsatore aortico a palloncino (IABP)', system: 'CIPI' },
          { code: 'CIPI-39.61', description: 'Circolazione extracorporea (CEC)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '410.41', description: 'Infarto miocardico inferiore', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '429.71', description: 'Difetto acquisito del setto interventricolare', system: 'ICD-9-CM' }, { code: '785.51', description: 'Shock cardiogenico', system: 'ICD-9-CM' }],
        procedures: [{ code: '35.53', description: 'Riparazione di difetto del setto interventricolare con protesi', system: 'ICD-9-CM' }, { code: '37.61', description: 'Contropulsatore a pallone', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'La categoria I23 in ICD-10-IM è specificamente riservata alle complicanze meccaniche acute insorte entro i primi 28 giorni dall\'infarto miocardico (I23.2 per rottura del setto).',
        'Lo shock cardiogeno associato (R57.0) e l\'impianto del contropulsatore aortico (CIPI 37.61) configurano il livello massimo di intensità assistenziale cardiochirurgica.'
      ],
      commonCognitiveErrors: [
        'Confondere la CIV acquisita da infarto con un difetto congenito del setto (Q21.0).',
        'Omettere la procedura di inserimento del contropulsatore aortico IABP.'
      ],
      chartDocumentationAdvice: 'Attestare l\'intervallo temporale tra infarto e rottura meccanica, il calcolo del Qp/Qs e il referto operatorio con la tecnica di chiusura con patch.'
    }
  }
];
