import { ClinicalCase } from '../../types';

export const EMERGENCY_CASES: ClinicalCase[] = [
  {
    id: 'meu-1',
    specialtyId: 'pronto_soccorso',
    caseNumber: 1,
    title: 'Edema polmonare acuto cardiogeno ipertensivo trattato con CPAP in OBI',
    complexity: 'Intermedio',
    subCategory: 'Emergenze Cardiorespiratorie',
    clinicalScenario: {
      patientAgeSex: 'Donna, 76 anni',
      admissionReason: 'Dispnea ingravescente a riposo, ortopnea, sudorazione algida e tosse produttiva con escreato rosato schiumoso.',
      anamnesis: 'Cardiopatia ipertensiva di lunga data, pregresso TIA, ipercolesterolemia.',
      hospitalCourse: 'Giunta in PS con PA 210/115 mmHg, SpO2 81% in aria ambiente, FC 122 bpm, rantoli a piccole e medie bolle diffusi bilateralmente fino agli apici polmonari. Emogasanalisi arteriosa: insufficienza respiratoria ipossiemica tipo I (PaO2 52 mmHg, PaCO2 38 mmHg). Posizionata ventilazione non invasiva a pressione positiva continua (CPAP di Boussignac) con PEEP 7.5 cmH2O e FiO2 50%, bolo di diuretico d\'ansa EV e nitrati in infusione continua. Trasferita in Osservazione Breve Intensiva (OBI) per 28 ore con progressivo svezzamento da CPAP e normalizzazione dei parametri emodinamici.',
      proceduresConducted: 'Ventilazione meccanica non invasiva (NIV/CPAP), monitoraggio continuo elettrocardiografico e saturimetrico, emogasanalisi arteriosa, ecografia polmonare e cardiaca bedside (bedside ultrasound/LUS con evidenza di profilo B diffuso).',
      dischargeStatus: 'Dimessa a domicilio dal PS/OBI in condizioni stabilizzate, SpO2 96% in aria, PA 130/80 mmHg, prescritto follow-up ambulatoriale cardiologico.'
    },
    documentationGapsWarning: 'Specificare sempre l\'eziologia dell\'edema (cardiogeno vs non cardiogeno/ARDS) e il setting di erogazione (degenza ordinaria vs degenza breve/OBI).',
    solution: {
      icd10: {
        primaryDiagnosis: {
          code: 'I50.1',
          description: 'Insufficienza ventricolare sinistra (Edema polmonare acuto cardiogeno)',
          system: 'ICD-10-IM',
          category: 'Malattie dell\'apparato circolatorio'
        },
        secondaryDiagnoses: [
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' },
          { code: 'J96.01', description: 'Insufficienza respiratoria acuta con ipossiemia', system: 'ICD-10-IM', notes: 'Manifestazione funzionale acuta documentata da EGA.' }
        ],
        procedures: [
          { code: 'CIPI-93.90', description: 'Ventilazione meccanica non invasiva a pressione positiva continua (CPAP/NIV)', system: 'CIPI' },
          { code: 'CIPI-89.65', description: 'Emogasanalisi arteriosa percutanea con prelievo ematico', system: 'CIPI' },
          { code: 'CIPI-88.73', description: 'Ecografia polmonare toracica bedside mirata', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '428.1', description: 'Insufficienza ventricolare sinistra (edema polmonare acuto)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '401.9', description: 'Ipertensione arteriosa non specificata', system: 'ICD-9-CM' }, { code: '518.81', description: 'Insufficienza respiratoria acuta', system: 'ICD-9-CM' }],
        procedures: [{ code: '93.90', description: 'Ventilazione a pressione positiva non invasiva', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'In ICD-10-IM l\'edema polmonare acuto di origine cardiaca si codifica sotto I50.1 (Insufficienza ventricolare sinistra), mentre l\'edema polmonare non cardiogeno ricade nel capitolo respiratorio J81.',
        'La ventilazione non invasiva (CIPI 93.90) deve essere codificata con esattezza per valorizzare l\'intensità assistenziale del trattamento in emergenza.',
        'Regola di esclusione dei sintomi: la dispnea e l\'ortopnea non devono essere codificate separatamente.'
      ],
      commonCognitiveErrors: [
        'Codificare J81 (edema polmonare senza menzione di causa cardiaca) in presenza di conclamata eziologia ipertensiva e cardiogena.',
        'Dimenticare di codificare l\'insufficienza respiratoria acuta (J96.01) validata da emogasanalisi.'
      ],
      chartDocumentationAdvice: 'Registrare sempre i valori emogasanalitici (PaO2, PaCO2, pH), le ore totali di ventilazione meccanica non invasiva e il setting di ricovero (OBI).'
    }
  },
  {
    id: 'meu-2',
    specialtyId: 'pronto_soccorso',
    caseNumber: 2,
    title: 'Crisi asmatica severa con broncospasmo serrato trattata in emergenza',
    complexity: 'Intermedio',
    subCategory: 'Emergenze Respiratorie',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 34 anni',
      admissionReason: 'Grave affanno a riposo con sibili espiratori udibili a distanza e incapacità di pronunciare frasi complete.',
      anamnesis: 'Asma bronchiale cronico in terapia inalatoria irregolare, rinite allergica.',
      hospitalCourse: 'Accesso in codice rosso: tachipnea (32 atti/min), PEF < 40% del teorico, tachicardia sinusale a 130 bpm. Somministrati aerosol con beta-2 agonisti e anticolinergici a intervalli ravvicinati, idrocortisone EV, magnesio solfato EV e ossigenoterapia ad alti flussi. Risoluzione graduale del broncospasmo dopo 16 ore di monitoraggio continuo in Medicina d\'Urgenza.',
      proceduresConducted: 'Monitoraggio respiratorio continuo, somministrazione endovenosa di farmaci d\'urgenza, EGA seriale, misurazione del picco di flusso espiratorio (PEF).',
      dischargeStatus: 'Dimesso con piano terapeutico inalatorio potenziato e prescrizione di visita allergologica.'
    },
    documentationGapsWarning: 'In ICD-10-IM è fondamentale distinguere l\'asma con esacerbazione acuta (J45.901) dall\'asma con stato di male asmatico (J45.902).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'J45.901', description: 'Asma non specificata con (acuta) esacerbazione', system: 'ICD-10-IM' },
        secondaryDiagnoses: [{ code: 'J30.1', description: 'Rinite allergica dovuta a pollini', system: 'ICD-10-IM' }],
        procedures: [
          { code: 'CIPI-93.94', description: 'Terapia inalatoria per aerosolterapia continua', system: 'CIPI' },
          { code: 'CIPI-89.65', description: 'Emogasanalisi arteriosa', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '493.92', description: 'Asma non specificata con esacerbazione', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '477.0', description: 'Rinite allergica da pollini', system: 'ICD-9-CM' }],
        procedures: [{ code: '93.94', description: 'Aerosolterapia', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM introduce nel 6° carattere la differenziazione specifica tra esacerbazione acuta (.901) e status asthmaticus (.902).',
        'I sintomi di broncospasmo e sibili sono assorbiti nella diagnosi principale di asma riacutizzata.'
      ],
      commonCognitiveErrors: [
        'Assegnare il codice J45.909 (senza esacerbazione) a un paziente giunto con attacco acuto in emergenza.',
        'Aggiungere codici di tosse o respiro sibilante (R05/R06.2).'
      ],
      chartDocumentationAdvice: 'Attestare nel verbale di PS il valore del PEF prima e dopo trattamento e l\'assenza o presenza di stato asmatico refrattario.'
    }
  },
  {
    id: 'meu-3',
    specialtyId: 'pronto_soccorso',
    caseNumber: 3,
    title: 'Anafilassi grave da puntura di imenottero con shock distributivo responsivo ad adrenalina',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Emergenze Immunologiche / Tossicologiche',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 49 anni',
      admissionReason: 'Puntura di vespa al collo, comparsa entro 10 minuti di eritema generalizzato, angioedema labiale, stridore laringeo e sincope.',
      anamnesis: 'Pregressa reazione orticarioide a puntura di insetto non indagata.',
      hospitalCourse: 'All\'arrivo del 118/Pronto Soccorso: PA 65/40 mmHg, FC 135 bpm, stridore inspiratorio, broncospasmo marcato e confusione mentale. Somministrata adrenalina 0.5 mg IM nella coscia ripetuta a 10 minuti, liquidi cristalloidi ad infusione rapida, antistaminici e corticosteroidi EV. Ripristino del tono pressorio e regressione dell\'edema laringeo. Osservazione in terapia intensiva breve/OBI per 24 ore per rischio di reazione bifasica.',
      proceduresConducted: 'Monitoraggio intensivo dei parametri vitali, incannulamento di due accessi venosi periferici di grosso calibro, ossigenoterapia ad alti flussi con maschera reservoir.',
      dischargeStatus: 'Dimesso con prescrizione di autoiniettore di adrenalina e invio urgente al centro di allergologia per desensibilizzazione.'
    },
    documentationGapsWarning: 'In ICD-10-IM è mandatorio specificare la sostanza o il veleno responsabile e l\'avvenuto shock anafilattico con il relativo codice di causa esterna (T78.04XA + X23.0XXA).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'T78.04XA', description: 'Reazione anafilattica da veleno di vespe/imenotteri, contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'T78.3XXA', description: 'Edema angioneurotico (Angioedema acuto), contatto iniziale', system: 'ICD-10-IM' },
          { code: 'X23.0XXA', description: 'Puntura accidentale di vespe o calabroni, contatto iniziale', system: 'ICD-10-IM', notes: 'Causa esterna obbligatoria.' }
        ],
        procedures: [
          { code: 'CIPI-99.29', description: 'Iniezione intramuscolare o sottocutanea di adrenalina in emergenza', system: 'CIPI' },
          { code: 'CIPI-96.70', description: 'Monitoraggio continuo multiparametrico delle funzioni vitali', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '995.0', description: 'Altra reazione anafilattica', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '995.1', description: 'Edema angioneurotico', system: 'ICD-9-CM' }, { code: 'E905.3', description: 'Morsi e punture di insetti velenosi', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.29', description: 'Altre iniezioni di sostanze terapeutiche', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'Regola del 7° carattere per traumatismo/avvelenamento: il codice T78.04XA richiede il carattere "A" per indicare l\'episodio di cura iniziale in emergenza.',
        'La causa esterna (Capitolo XX - codici X23) è inderogabile nel tracciato SDO per incidenti ambientali ed esotossine.'
      ],
      commonCognitiveErrors: [
        'Codificare unicamente lo shock non specificato (R57.9) o la sola ipotensione (I95.9) trascurando il codice causale eziologico dell\'anafilassi (T78.04XA).',
        'Omissione del codice di causa esterna X23.'
      ],
      chartDocumentationAdvice: 'Attestare la somministrazione di adrenalina, l\'intervallo temporale tra puntura e sintomi e la prescrizione salvavita di autoiniettore alla dimissione.'
    }
  },
  {
    id: 'meu-4',
    specialtyId: 'pronto_soccorso',
    caseNumber: 4,
    title: 'Sincope neuromediata vaso-vagale con trauma cranico minore senza lesioni emorragiche',
    complexity: 'Base',
    subCategory: 'Sincope e Perdita di Coscienza Transitoria',
    clinicalScenario: {
      patientAgeSex: 'Donna, 22 anni',
      admissionReason: 'Episodio di improvvisa perdita transitoria di coscienza preceduta da nausea, sudorazione e visione a tunnel durante prolungato stazionamento eretto.',
      anamnesis: 'Episodi analoghi sporadici in età adolescenziale, fobia del sangue, non patologie cardiache o neurologiche.',
      hospitalCourse: 'Caduta a terra con contusione della regione frontale sinistra. Durata della perdita di coscienza < 60 secondi, ripresa immediata e completa dell\'orientamento temporo-spaziale (GCS 15). ECG nei limiti con intervallo QTc normale, glicemia ed elettroliti nella norma. Valutazione secondo linea guida ESC per la sincope: basso rischio. TC encefalo non indicata secondo i criteri canadesi (Canadian CT Head Rule).',
      proceduresConducted: 'Elettrocardiogramma standard a 12 derivazioni, monitoraggio pressorio in clino- e ortostatismo (tilt test clinico negativo per ipotensione ortostatica), medicazione di escoriazione cutanea frontale.',
      dischargeStatus: 'Dimessa da OBI dopo 8 ore di osservazione clinica asintomatica.'
    },
    documentationGapsWarning: 'Distinguere chiaramente tra sincope neuromediata (R55) e sincope cardiogena o convulsione epilettica.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'R55', description: 'Sincope e collasso (Sincope vaso-vagale)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'S00.03XA', description: 'Contusione della testa (regione frontale), contatto iniziale', system: 'ICD-10-IM' },
          { code: 'W19.XXXA', description: 'Caduta non specificata, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-89.52', description: 'Elettrocardiogramma standard a 12 derivazioni', system: 'CIPI' },
          { code: 'CIPI-86.59', description: 'Trattamento e medicazione di ferita superficiale della cute', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '780.2', description: 'Sincope e collasso', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '920', description: 'Contusione della faccia e del cuoio capelluto', system: 'ICD-9-CM' }, { code: 'E888.9', description: 'Caduta accidentale', system: 'ICD-9-CM' }],
        procedures: [{ code: '89.52', description: 'Elettrocardiogramma', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'Quando la sincope è di natura vasovagale riflessa senza una patologia cardiaca strutturale o aritmica documentata, R55 è la diagnosi principale corretta.',
        'La contusione traumatica derivata dalla caduta deve essere codificata come diagnosi secondaria con indicazione della sede anatomica precisa (S00.03XA).'
      ],
      commonCognitiveErrors: [
        'Codificare trauma cranico commotivo (S06.0) in assenza di reale commozione cerebrale o amnesia retrograda/anterograda.',
        'Omettere la causa della perdita di coscienza classificandola come "stato confusionale" (R41.0).'
      ],
      chartDocumentationAdvice: 'Riportare la presenza di prodromi vegetativi tipici, i riscontri ECG di normalità e l\'assenza di '
    }
  },
  {
    id: 'meu-5',
    specialtyId: 'pronto_soccorso',
    caseNumber: 5,
    title: 'Intossicazione acuta da monossido di carbonio (CO) con carbossiemoglobina elevata',
    complexity: 'Intermedio',
    subCategory: 'Tossicologia d\'Urgenza',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 58 anni',
      admissionReason: 'Cefalea pulsante intensa, vertigini, nausea e confusione mentale dopo accensione di stufa a legna malfunzionante.',
      anamnesis: 'Fumatore moderato, privo di patologie organiche croniche.',
      hospitalCourse: 'All\'arrivo in PS: cute calda, mucose arrossate, PA 140/85 mmHg, FC 108 bpm. EGA arterioso con co-ossimetria: Carbossiemoglobina (COHb) 26.5%, lattati 2.9 mmol/L, troponina negativa. Avviata tempestivamente ossigenoterapia normobarica al 100% con maschera con reservoir ad alti flussi per 12 ore, con rapido abbattimento della COHb a 2.4% e remissione dei sintomi neurologici.',
      proceduresConducted: 'Co-ossimetria ed emogasanalisi arteriosa seriale, monitoraggio continuo ECG e dello stato neurologico, ossigenoterapia ad alti flussi.',
      dischargeStatus: 'Dimesso dopo 24 ore di OBI in assenza di deficit neurologici focali.'
    },
    documentationGapsWarning: 'Codificare obbligatoriamente il tipo di intossicazione e l\'esposizione accidentale con il codice di causa esterna (T58.01XA + X47.0XXA).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'T58.01XA', description: 'Effetto tossico del monossido di carbonio da fonte di riscaldamento domestico, contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'X47.0XXA', description: 'Avvelenamento accidentale ed esposizione a monossido di carbonio da combustione domestica, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-93.96', description: 'Ossigenoterapia ad alti flussi in normobarismo', system: 'CIPI' },
          { code: 'CIPI-89.65', description: 'Co-ossimetria su prelievo ematico arterioso', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '986', description: 'Effetto tossico del monossido di carbonio', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: 'E868.3', description: 'Avvelenamento accidentale da monossido di carbonio da combustione incompleta di combustibili solidi', system: 'ICD-9-CM' }],
        procedures: [{ code: '93.96', description: 'Altra ossigenoterapia', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM Capitolo XIX specifica la fonte emissiva del gas (T58.01 per riscaldamento domestico vs T58.02 per scarico di veicoli), richiedendo il 7° carattere "A".',
        'La cefalea e la nausea non si codificano in quanto sintomi diretti dell\'avvelenamento sistemico da CO.'
      ],
      commonCognitiveErrors: [
        'Codificare genericamente T58.9 (monossido di carbonio da fonte non specificata) quando la stufa a legna domestica è chiaramente documentata.',
        'Mancata indicazione della causa esterna di esposizione accidentale.'
      ],
      chartDocumentationAdvice: 'Riportare sempre il valore quantitativo di COHb in percentuale al triage e dopo terapia con O2.'
    }
  },
  {
    id: 'meu-6',
    specialtyId: 'pronto_soccorso',
    caseNumber: 6,
    title: 'Fibrillazione atriale ad elevata risposta ventricolare trattata con cardioversione farmacologica in OBI',
    complexity: 'Intermedio',
    subCategory: 'Aritmologia d\'Urgenza',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 55 anni',
      admissionReason: 'Cardiopalmo aritmico improvviso a riposo insorto da 4 ore, accompagnato da senso di oppressione precordiale sfumata.',
      anamnesis: 'Ipertensione arteriosa ben controllata da ACE-inibitore, non valvulopatie note.',
      hospitalCourse: 'In PS: PA 130/85 mmHg, FC 155 bpm ritmica ad intervalli irregolari. ECG: Fibrillazione atriale parossistica ad elevata penetranza ventricolare, QRS stretto, non turbe della ripolarizzazione ischemiche. CHA2DS2-VASc = 1. Ecocardiogramma bedside: atrio sinistro non dilatato, assenza di trombi evidenti. Eseguita cardioversione farmacologica mediante infusione di Flecainide EV dopo somministrazione di bolo di eparina a basso peso molecolare. Ripristino del ritmo sinusale a 70 bpm a 90 minuti.',
      proceduresConducted: 'Cardioversione farmacologica controllata in monitoraggio continuo, ecocardiogramma bedside, ECG seriali a 12 derivazioni.',
      dischargeStatus: 'Dimesso dopo 12 ore di stabilità ritmica sinusale in terapia antiaritmica orale.'
    },
    documentationGapsWarning: 'In ICD-10-IM la fibrillazione atriale parossistica possiede un codice dedicato (I48.0) che la differenzia dalla permanente (I48.2) e persistente (I48.1).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I48.0', description: 'Fibrillazione atriale parossistica', system: 'ICD-10-IM' },
        secondaryDiagnoses: [{ code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }],
        procedures: [
          { code: 'CIPI-99.29', description: 'Somministrazione endovenosa di farmaco antiaritmico per cardioversione', system: 'CIPI' },
          { code: 'CIPI-89.52', description: 'Elettrocardiogramma a 12 derivazioni', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '427.31', description: 'Fibrillazione atriale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '401.9', description: 'Ipertensione essenziale non specificata', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.29', description: 'Altre iniezioni di farmaci', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'La categoria I48 in ICD-10-IM distingue formalmente il pattern temporale dell\'aritmia: parossistica (I48.0), persistente (I48.1) o permanente (I48.2).',
        'Il cardiopalmo (R00.2) è escluso in quanto sintomo assorbito dalla diagnosi aritmica conclamata.'
      ],
      commonCognitiveErrors: [
        'Utilizzare il codice non specificato I48.91 anziché il codice specifico per forma parossistica accertata.',
        'Codificare la procedura di cardioversione elettrica sincronizzata (CIPI 99.61) quando è stata eseguita cardioversione solo farmacologica.'
      ],
      chartDocumentationAdvice: 'Precisare l\'orario di insorgenza dell\'aritmia (< 48 ore) e lo score tromboembolico CHA2DS2-VASc.'
    }
  },
  {
    id: 'meu-7',
    specialtyId: 'pronto_soccorso',
    caseNumber: 7,
    title: 'Colica renale acuta litiasica non complicata con espulsione spontanea di calcolo ureterale',
    complexity: 'Base',
    subCategory: 'Emergenze Nefrologiche / Urologiche',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 41 anni',
      admissionReason: 'Dolore violentissimo trafittivo al fianco sinistro irradiato all\'inguine e al testicolo omolaterale, con agitazione psicomotoria, nausea e vomito.',
      anamnesis: 'Litiasi renale bilaterale nota, familiarità positiva per nefrolitiasi calcica.',
      hospitalCourse: 'In PS apiretico, PA 150/90 mmHg per lo spasmo doloroso, addome trattabile, segno di Giordano marcatamente positivo a sinistra. Esame urine: microematuria massiva (emazie 250/campo) senza piuria. Ecografia renale-vescicale in PS: modesta ectasia del bacinetto e dell\'uretere lombare sinistro con calcolo iperecogeno di 4 mm al giunto uretero-vescicale. Trattamento con FANS e analgesici maggiori EV con rapido beneficio.',
      proceduresConducted: 'Ecografia apparato urinario mirata bedside, sedazione del dolore acuto con terapia parenterale, esame chimico-fisico delle urine.',
      dischargeStatus: 'Dimesso con calo del dolore ed espulsione urinaria di microlito calcoloso, prescrizione di terapia idropinica ed alfa-litici.'
    },
    documentationGapsWarning: 'Verificare sempre la presenza o meno di idronefrosi ostruttiva associata e infezione (N20.1 vs N13.2).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'N20.1', description: 'Calcolo dell\'uretere', system: 'ICD-10-IM' },
        secondaryDiagnoses: [{ code: 'N20.0', description: 'Calcolo del rene', system: 'ICD-10-IM' }],
        procedures: [
          { code: 'CIPI-88.75', description: 'Ecografia diagnostica dei reni e dell\'apparato urinario', system: 'CIPI' },
          { code: 'CIPI-99.29', description: 'Iniezione o infusione endovenosa di farmaci analgesici antinfiammatori', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '592.1', description: 'Calcolo dell\'uretere', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '592.0', description: 'Calcolo del rene', system: 'ICD-9-CM' }],
        procedures: [{ code: '88.75', description: 'Ecografia urinaria', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'La colica renale sintomatica è assorbita nella patologia causale di calcolosi dell\'uretere (N20.1). Non si codificano dolore lombare o ematuria sintomatica.',
        'Se non è presente idronefrosi persistente con compromissione funzionale, la categoria N20 è quella corretta.'
      ],
      commonCognitiveErrors: [
        'Codificare R10.2 (dolore pelvico) o N23 (colica renale non specificata) quando l\'esame ecografico ha identificato con certezza la sede del calcolo ureterale.'
      ],
      chartDocumentationAdvice: 'Attestare la presenza o assenza di idronefrosi e la documentazione ecografica delle dimensioni del calcolo.'
    }
  },
  {
    id: 'meu-8',
    specialtyId: 'pronto_soccorso',
    caseNumber: 8,
    title: 'Politrauma della strada con contusione polmonare, fratture costali multiple e frattura di clavicola',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Traumatologia Maggiore / Trauma Team',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 32 anni',
      admissionReason: 'Incidente motociclistico ad alta velocità contro ostacolo fisso (guardrail).',
      anamnesis: 'Paziente giovane privo di comorbilità.',
      hospitalCourse: 'Attivazione del Trauma Team in PS. All\'esame primario ABCDE: vie aeree pervie, respiro spontaneo paradosso emitorace sinistro, SpO2 91% con O2, PA 110/70 mmHg, FC 115 bpm, GCS 14 (confuso). E-FAST negativa per emotorace massivo ed emoperitoneo. Pan-TC: fratture costali dalla 4a all\'8a costa sinistra con lembo costale mobile (flail chest/volet), contusione polmonare sottostante del lobo inferiore sinistro senza pneumotorace iperteso, frattura scomposta del terzo medio della clavicola sinistra. Trasferito in degenza semintensiva di Medicina d\'Urgenza per analgesia epidurale toracica e monitoraggio respiratorio continuo.',
      proceduresConducted: 'Pan-TC total body con mezzo di contrasto, ecografia E-FAST, cateterismo venoso centrale, posizionamento di catetere peritendineo/epidurale per controllo del dolore.',
      dischargeStatus: 'Dimesso al 10° giorno con stabilizzazione respiratoria e invio ad ortopedia ambulatoriale.'
    },
    documentationGapsWarning: 'Nei politraumi è essenziale codificare ciascuna lesione con la corretta lateralità e il 7° carattere di contatto iniziale (A), oltre al codice di incidente di traffico da veicolo a due ruote.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S22.5XXA', description: 'Lembo costale mobile (Volet toracico / Flail chest), contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'S27.322A', description: 'Contusione del polmone sinistro, contatto iniziale', system: 'ICD-10-IM' },
          { code: 'S42.022A', description: 'Frattura del corpo (terzo medio) della clavicola sinistra, contatto iniziale per frattura chiusa', system: 'ICD-10-IM' },
          { code: 'V27.4XXA', description: 'Motociclista ferito in collisione con oggetto fisso o fermo, guidatore, contatto iniziale', system: 'ICD-10-IM', notes: 'Causa esterna obbligatoria.' }
        ],
        procedures: [
          { code: 'CIPI-87.41', description: 'Tomografia computerizzata del torace con mezzo di contrasto', system: 'CIPI' },
          { code: 'CIPI-88.76', description: 'Ecografia FAST per politrauma', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '807.4', description: 'Lembo costale mobile', system: 'ICD-9-CM' },
        secondaryDiagnoses: [
          { code: '861.21', description: 'Contusione polmonare senza ferita aperta nella cavità toracica', system: 'ICD-9-CM' },
          { code: '810.02', description: 'Frattura del corpo della clavicola chiusa', system: 'ICD-9-CM' },
          { code: 'E816.2', description: 'Incidente da motoveicolo con perdita di controllo su strada', system: 'ICD-9-CM' }
        ],
        procedures: [{ code: '87.41', description: 'TC del torace', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'Il volet toracico con lembo costale mobile (S22.5XXA) costituisce la lesione a maggiore potenziale letale e consumo di risorse, qualificandosi come diagnosi principale.',
        'La presenza della lateralità (sinistra) e del 7° carattere ("A") è rigidamente imposta in ICD-10-IM.'
      ],
      commonCognitiveErrors: [
        'Codificare solo fratture costali semplici (S22.3) omettendo il codice specifico di volet costale (S22.5).',
        'Omettere la contusione polmonare associata, alterando la corretta attribuzione del DRG.'
      ],
      chartDocumentationAdvice: 'Precisare nel verbale del Trauma Team il meccanismo dell\'impatto, la dinamica motociclistica e la sede anatomica delle lesioni scheletriche.'
    }
  },
  {
    id: 'meu-9',
    specialtyId: 'pronto_soccorso',
    caseNumber: 9,
    title: 'Emorragia digestiva alta da ulcera duodenale peptica con melena e shock emodinamico transitorio',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Emergenze Gastroenterologiche',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 67 anni',
      admissionReason: 'Emissione di feci picee maleodoranti (melena) per tre volte nelle 12 ore precedenti, associata ad astenia profonda e lipotimia.',
      anamnesis: 'Assunzione prolungata di ketoprofene per gonalgia senza gastroprotezione; cardiopatia ischemica cronica.',
      hospitalCourse: 'In PS: pallore cutaneo-mucoso cereo, PA 85/55 mmHg, FC 118 bpm ritmica. All\'esplorazione rettale confermata melena franca. Emocromo: Hb 6.8 g/dL (caduta di 4 punti rispetto al controllo di 1 mese prima). Avviata infusione di inibitori di pompa protonica (PPI) a dosaggio massimale ed espansione volemica con cristalloidi, seguita da trasfusione di 2 unità di emazie concentrate. Esofagogastroduodenoscopia (EGDS) d\'urgenza entro 6 ore: ulcera del bulbo duodenale (Forrest IIa, vaso visibile non sanguinante). Eseguita emostasi combinata endoscopica mediante iniezione di adrenalina e applicazione di clip metalliche.',
      proceduresConducted: 'EGDS d\'urgenza con emostasi endoscopica meccano-chimica, emotrasfusione di globuli rossi concentrati, posizionamento di sondino nasogastrico e accesso venoso centrale.',
      dischargeStatus: 'Dimesso al 6° giorno con Hb 10.2 g/dL, in terapia eradicante H. pylori e PPI.'
    },
    documentationGapsWarning: 'Verificare se l\'ulcera è gastrica o duodenale e se è presente emorragia o perforazione secondo la codifica K25-K28.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K26.0', description: 'Ulcera duodenale acuta con emorragia', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'D62', description: 'Anemia post-emorragica acuta', system: 'ICD-10-IM', notes: 'Grave complicanza ematologica secondaria a melena.' },
          { code: 'I25.10', description: 'Cardiopatia ischemica aterosclerotica', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-44.43', description: 'Emostasi endoscopica dell\'apparato digerente superiore (iniezione e clip metalliche)', system: 'CIPI' },
          { code: 'CIPI-99.04', description: 'Trasfusione di globuli rossi concentrati', system: 'CIPI' },
          { code: 'CIPI-45.13', description: 'Esofagogastroduodenoscopia con biopsia/valutazione diagnostica', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '532.00', description: 'Ulcera duodenale acuta con emorragia', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '285.1', description: 'Anemia postemorragica acuta', system: 'ICD-9-CM' }],
        procedures: [
          { code: '44.43', description: 'Controllo endoscopico dell\'emorragia gastrica o duodenale', system: 'ICD-9-CM' },
          { code: '99.04', description: 'Trasfusione di globuli rossi concentrati', system: 'ICD-9-CM' }
        ]
      },
      rulesAppliedExplanation: [
        'In ICD-10-IM la categoria K26 incorpora direttamente nel 4° carattere la presenza di emorragia (K26.0 per ulcera acuta con emorragia).',
        'Il sintomo melena (K92.1) non deve essere codificato in presenza della diagnosi eziologica conclamata.',
        'L\'anemia postemorragica acuta (D62) deve essere codificata se documentata da marcata caduta dell\'emoglobina e necessità trasfusionale.'
      ],
      commonCognitiveErrors: [
        'Utilizzare il codice generico di emorragia gastrointestinale K92.2 anziché il codice eziologico dell\'ulcera sanguinante K26.0.',
        'Omettere la procedura di trasfusione (CIPI 99.04).'
      ],
      chartDocumentationAdvice: 'Riportare la classificazione di Forrest del referto endoscopico e il numero esatto di sacche di emazie trasfuse.'
    }
  },
  {
    id: 'meu-10',
    specialtyId: 'pronto_soccorso',
    caseNumber: 10,
    title: 'Chetoacidosi diabetica severa (DKA) di esordio in giovane adulto con diabete mellito tipo 1',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Emergenze Metaboliche',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 23 anni',
      admissionReason: 'Polidipsia intensa, poliuria e calo ponderale da 2 settimane; comparsa di respiro rapido e profondo (Kussmaul), alito acetonico, dolori addominali diffusi e sopore.',
      anamnesis: 'Paziente in apparente buona salute precedente, non diagnosi note.',
      hospitalCourse: 'All\'arrivo in PS: disidratazione grave, PA 95/60 mmHg, FC 124 bpm, respiro di Kussmaul a 28 atti/min. Glicemia 520 mg/dL. EGA: acidosi metabolica severa con elevato anion gap (pH 7.10, bicarbonati 8 mEq/L, pCO2 22 mmHg, anion gap 24). Chetonemia 6.2 mmol/L; chetonuria massiva 4+. Protocollo DKA in Medicina d\'Urgenza: reidratazione idroelettrolitica aggressiva con soluzione fisiologica 0.9%, infusione continua endovenosa di insulina rapida a 0.1 UI/kg/h con supplementazione precoce di potassio. Risoluzione del gap anionico e ripristino di pH > 7.30 dopo 20 ore.',
      proceduresConducted: 'Monitoraggio intensivo orario di glicemia ed elettroliti, infusione continua di insulina in pompa, cateterismo vescicale.',
      dischargeStatus: 'Trasferito in reparto di Diabetologia e Malattie del Metabolismo per educazione terapeutica alla microinfusione insulinica.'
    },
    documentationGapsWarning: 'In ICD-10-IM la chetoacidosi diabetica è codificata con precisione in base al tipo di diabete (E10.10 per diabete tipo 1 con chetoacidosi senza coma).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'E10.10', description: 'Diabete mellito di tipo 1 con chetoacidosi senza coma', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'E87.2', description: 'Acidosi metabolica con gap anionico elevato', system: 'ICD-10-IM' },
          { code: 'E86.0', description: 'Disidratazione / Deplezione di volume', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.18', description: 'Iniezione o infusione continua di insulina', system: 'CIPI' },
          { code: 'CIPI-89.65', description: 'Emogasanalisi arteriosa con dosaggio elettroliti e gap anionico', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '250.11', description: 'Diabete mellito con chetoacidosi, tipo 1 [giovanile], non menzionato come incontrollato', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '276.2', description: 'Acidosi', system: 'ICD-9-CM' }, { code: '276.51', description: 'Disidratazione', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.18', description: 'Iniezione di insulina', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'La classificazione ICD-10-IM combina in una sola voce tassonomica il tipo di diabete e la complicanza chetoacidosica (E10.10).',
        'I dolori addominali mimanti addome acuto (pseudoperitonite diabetica) sono secondari alla chetosi e non devono essere codificati come diagnosi chirurgica.'
      ],
      commonCognitiveErrors: [
        'Utilizzare il codice per diabete tipo 2 (E11.10) per un esordio chetoacidosico tipico di tipo 1 in paziente giovane.',
        'Codificare "dolore addominale acuto" (R10.0) distraendo il profilo di qualità della codifica.'
      ],
      chartDocumentationAdvice: 'Specificare l\'assenza di coma (GCS conservato > 8) e i valori esatti di pH, bicarbonati e chetonemia all\'ingresso e alla risoluzione.'
    }
  },
  {
    id: 'meu-11',
    specialtyId: 'pronto_soccorso',
    caseNumber: 11,
    title: 'Crisi ipertensiva emergenza con encefalopatia e retinopatia ipertensiva acuta',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Emergenze Cardiovascolari',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 61 anni',
      admissionReason: 'Cefalea occipitale incoercibile, scotomi visivi scintillanti, nausea e stato di sopore con PA 235/130 mmHg.',
      anamnesis: 'Ipertensione arteriosa severa con scarsa aderenza terapeutica.',
      hospitalCourse: 'In PS: PA confermata 240/135 mmHg in entrambi gli arti. Fondo oculare urgente: edema papillare bilaterale ed emorragie a fiamma retiniche (retinopatia ipertensiva grado IV). TC encefalo urgente: assenza di emorragia acuta, modesto edema periventricolare posteriore compatibile con PRES. Avviata infusione endovenosa titolata di Labetalolo e Nitroprussiato per riduzione graduale del 20-25% della PA media nelle prime 2 ore. Monitoraggio pressorio invasivo mediante linea arteriosa radiale in degenza breve intensiva.',
      proceduresConducted: 'Monitoraggio cruento della pressione arteriosa mediante linea arteriosa radiale, esame del fondo oculare, TC encefalo.',
      dischargeStatus: 'Dimesso stabilizzato con triplice terapia antipertensiva orale al 5° giorno.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'emergenza ipertensiva con danno d\'organo acuto ha un codice specifico (I16.1) che si differenzia dall\'urgenza ipertensiva (I16.0).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I16.1', description: 'Emergenza ipertensiva (Hypertensive emergency con danno d\'organo)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I67.4', description: 'Encefalopatia ipertensiva', system: 'ICD-10-IM' },
          { code: 'H35.033', description: 'Retinopatia ipertensiva, bilaterale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-89.61', description: 'Monitoraggio continuo cruento della pressione arteriosa sistemica', system: 'CIPI' },
          { code: 'CIPI-87.03', description: 'Tomografia computerizzata della testa/encefalo', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '437.2', description: 'Encefalopatia ipertensiva', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '401.0', description: 'Ipertensione maligna', system: 'ICD-9-CM' }],
        procedures: [{ code: '89.61', description: 'Monitoraggio continuo della pressione arteriosa', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM introduce la categoria I16 specifica per le crisi ipertensive, distinguendo formalmente I16.0 (urgenza, senza danno d\'organo) da I16.1 (emergenza, con danno acuto ad encefalo, cuore o rene).',
        'La presenza di encefalopatia ipertensiva (I67.4) deve essere aggiunta in diagnosi secondaria per riflettere il danno acuto.'
      ],
      commonCognitiveErrors: [
        'Assegnare semplicemente I10 (ipertensione primaria) perdendo la tracciabilità dell\'emergenza ipertensiva trattata con farmaci endovenosi titolati.',
        'Dimenticare di codificare l\'encefalopatia e il riscontro retinoscopico.'
      ],
      chartDocumentationAdvice: 'Documentare chiaramente nel diario clinico il danno d\'organo acuto (fondo oculare, imaging cerebrale) che giustifica l\'emergenza ipertensiva I16.1.'
    }
  },
  {
    id: 'meu-12',
    specialtyId: 'pronto_soccorso',
    caseNumber: 12,
    title: 'Tromboembolia polmonare (TEP) submassiva a rischio intermedio-alto stabilizzata con anticoagulazione',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Emergenze Cardiorespiratorie',
    clinicalScenario: {
      patientAgeSex: 'Donna, 62 anni',
      admissionReason: 'Dispnea acuta a riposo insorta improvvisamente dopo viaggio aereo di 10 ore, dolore toracico di tipo pleuritico alla base destra e tachicardia.',
      anamnesis: 'Sovrappeso, terapia ormonale sostitutiva in menopausa, non pregressi tromboembolismi.',
      hospitalCourse: 'In PS: SpO2 88% in aria ambiente, FC 115 bpm, PA 105/70 mmHg, tachipnea a 26 atti/min. D-Dimero marcatamente positivo (4.850 ng/mL FEU), Troponina I lievemente mossa (0.08 ng/mL), BNP elevato. Ecocardiogramma bedside: dilatazione del ventricolo destro con rapporto VD/VS > 1, TAPSE ridotto a 13 mm (segno di McConnell presente). Angio-TC torace: difetti di riempimento tromboembolici occludenti rami lobari e segmentari dell\'arteria polmonare destra e sinistra. Stratificazione: TEP a rischio intermedio-alto (emodinamica stabile ma con disfunzione VD e danno miocardico). Trattata con eparina non frazionata endovenosa in monitoraggio continuo in OBI/Terapia Subintensiva di Medicina d\'Urgenza.',
      proceduresConducted: 'Angio-TC dei vasi polmonari, ecocardiogramma bedside mirato, ecocolordoppler venoso degli arti inferiori (documentata TVP femoropoplitea destra).',
      dischargeStatus: 'Dimessa al 7° giorno in anticoagulante orale diretto (DOAC) con progressiva riduzione della dilatazione ventricolare destra.'
    },
    documentationGapsWarning: 'In ICD-10-IM la trombosi venosa profonda associata e la causa iatrogena (estrogeni) vanno codificate come diagnosi secondarie.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I26.92', description: 'Embolia polmonare senza cuore polmonare acuto', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I80.201', description: 'Flebite e tromboflebite dei vasi profondi dell\'arto inferiore destro', system: 'ICD-10-IM' },
          { code: 'T38.5X5A', description: 'Effetto avverso di contraccettivi ormonali o estrogeni, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-87.41', description: 'Angio-TC dei vasi polmonari', system: 'CIPI' },
          { code: 'CIPI-88.72', description: 'Ecocardiografia transtoracica bedside', system: 'CIPI' },
          { code: 'CIPI-88.77', description: 'Ecocolordoppler venoso degli arti inferiori', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '415.19', description: 'Altra embolia polmonare ed infarto polmonare', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '451.11', description: 'Flebiti e tromboflebiti della vena femorale', system: 'ICD-9-CM' }],
        procedures: [{ code: '87.41', description: 'TC torace con mdc', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM I26 distingue se è presente cuore polmonare acuto (I26.0) o meno (I26.9). Se il paziente è emodinamicamente stabile senza shock cardiogeno persistente si attribuisce I26.92.',
        'La presenza della trombosi venosa profonda fonte dell\'embolo deve essere tracciata specificando la lateralità destra (I80.201).'
      ],
      commonCognitiveErrors: [
        'Non codificare la sorgente trombotica periferica (TVP arto inferiore).',
        'Codificare dolore toracico e dispnea come diagnosi aggiuntive.'
      ],
      chartDocumentationAdvice: 'Attestare la classe di rischio ESC (intermedio-alto), i parametri di disfunzione ventricolare destra e l\'assenza di shock/ipotensione refrattaria.'
    }
  },
  {
    id: 'meu-13',
    specialtyId: 'pronto_soccorso',
    caseNumber: 13,
    title: 'Pneumotorace spontaneo primitivo (PNX) iperteso drenato con toracostomia d\'urgenza',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Emergenze Respiratorie e Procedure',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 21 anni',
      admissionReason: 'Improvviso dolore toracico trafittivo a pugnalata emitorace destro con rapido sviluppo di dispnea da sforzo e poi a riposo.',
      anamnesis: 'Soggetto longilineo e magro, fumatore occasionale, nessun pregresso evento polmonare.',
      hospitalCourse: 'In PS: distress respiratorio acuto, tachipnea 30 atti/min, SpO2 86% in aria ambiente, cianosi periorale, PA 90/60 mmHg, FC 128 bpm. All\'esame obiettivo toracico: abolizione del fremito vocale tattile e del murmure vescicolare su tutto l\'emitorace destro con ipertimpanismo plessico e deviazione tracheale controlaterale a sinistra. Diagnosi clinica immediata di Pneumotorace Iperteso. Eseguita decompressione immediata con ago nel 2° spazio intercostale sulla linea emiclaveare destra seguita da toracostomia con posizionamento di tubo di drenaggio toracico 24 Fr nel 5° spazio intercostale linea ascellare media collegato a valvola di Heimlich e drenaggio ad acqua.',
      proceduresConducted: 'Decompressione d\'urgenza con ago, posizionamento di drenaggio toracico chiuso (toracostomia), radiografia del torace pre e post procedura.',
      dischargeStatus: 'Trasferito in Chirurgia Toracica per gestione del drenaggio e successiva bullectomia toracoscopica.'
    },
    documentationGapsWarning: 'In ICD-10-IM il pneumotorace iperteso possiede un codice dedicato (J93.0) distinto dal pneumotorace spontaneo semplice (J93.11).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'J93.0', description: 'Pneumotorace iperteso (Tension pneumothorax)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [{ code: 'F17.21', description: 'Dipendenza da tabacco, uso attuale', system: 'ICD-10-IM' }],
        procedures: [
          { code: 'CIPI-34.04', description: 'Inserimento di drenaggio toracico intercostale per toracostomia chiusa', system: 'CIPI' },
          { code: 'CIPI-34.91', description: 'Toracentesi / puntura decompressiva del cavo pleurico', system: 'CIPI' },
          { code: 'CIPI-87.44', description: 'Radiografia standard del torace', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '512.0', description: 'Pneumotorace spontaneo iperteso', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '305.1', description: 'Abuso di tabacco', system: 'ICD-9-CM' }],
        procedures: [{ code: '34.04', description: 'Inserzione di tubo toracico intercostale per drenaggio', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'J93.0 identifica tassativamente il pneumotorace iperteso, una condizione tempo-dipendente gravata da compromissione emodinamica ostruttiva.',
        'La manovra chirurgica di inserimento del tubo di drenaggio deve essere valorizzata con CIPI 34.04.'
      ],
      commonCognitiveErrors: [
        'Utilizzare J93.11 (pneumotorace spontaneo primitivo non iperteso) ignorando la documentazione clinica dello shock ostruttivo e della deviazione mediastinica.',
        'Omettere la procedura di drenaggio pleurico CIPI.'
      ],
      chartDocumentationAdvice: 'Specificare nel verbale di PS i parametri di instabilità emodinamica e l\'immediata manovra di decompressione salvavita con ago.'
    }
  },
  {
    id: 'meu-14',
    specialtyId: 'pronto_soccorso',
    caseNumber: 14,
    title: 'Intossicazione acuta da oppioidi (eroina) con depressione respiratoria e coma risvegliata con Naloxone',
    complexity: 'Intermedio',
    subCategory: 'Tossicologia d\'Urgenza',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 29 anni',
      admissionReason: 'Trovato privo di sensi in luogo pubblico con siringa accanto.',
      anamnesis: 'Disturbo da uso di sostanze stupefacenti per via parenterale.',
      hospitalCourse: 'All\'arrivo dei sanitari/PS: GCS 3 (E1V1M1), miosi serrata puntiforme bilaterale, frequenza respiratoria 4 atti al minuto con cianosi, SpO2 72% in aria ambiente, FC 52 bpm, PA 95/55 mmHg. Somministrato Naloxone 0.4 mg EV con immediato risveglio del paziente (GCS 15) entro 90 secondi, normalizzazione della frequenza respiratoria (16 atti/min) e midriasi reattiva. Osservazione clinica protratta in OBI per 8 ore per rischio di recidiva di sedazione dovuta all\'emivita prolungata degli oppioidi rispetto al naloxone.',
      proceduresConducted: 'Somministrazione EV mirata di antidoto specifico (Naloxone), emogasanalisi arteriosa, monitoraggio continuo saturimetrico e dello stato di coscienza.',
      dischargeStatus: 'Dimesso dopo 8 ore contro parere medico con indicazione a contatto con il SerD territoriale.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'avvelenamento acuto da oppioidi richiede la combinazione del codice di effetto tossico accidentale (T40.1X1A).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'T40.1X1A', description: 'Avvelenamento da eroina, accidentale (non intenzionale), contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'F11.10', description: 'Abuso di oppioidi, non complicato', system: 'ICD-10-IM' },
          { code: 'R40.20', description: 'Coma non specificato (GCS 3 all\'ingresso)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.29', description: 'Iniezione endovenosa di antidoto specifico (Naloxone)', system: 'CIPI' },
          { code: 'CIPI-89.65', description: 'Emogasanalisi arteriosa', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '965.01', description: 'Avvelenamento da eroina', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '304.00', description: 'Dipendenza da oppioidi', system: 'ICD-9-CM' }, { code: 'E850.0', description: 'Avvelenamento accidentale da eroina', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.29', description: 'Iniezione di farmaco', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM integra direttamente nel 5° e 6° carattere l\'intenzionalità dell\'avvelenamento (T40.1X1 per accidentale vs T40.1X2 per autolesivo) con il 7° carattere "A" di contatto iniziale.',
        'La miosi e la bradipnea sono manifestazioni dirette della tossidermia da oppioidi.'
      ],
      commonCognitiveErrors: [
        'Attribuire la sola dipendenza cronica F11.20 trascurando il codice di avvelenamento acuto accidentale T40.1X1A.',
        'Omettere la natura accidentale dell\'overdose quando non c\'è evidenza di intento suicidario.'
      ],
      chartDocumentationAdvice: 'Attestare nel verbale la somministrazione e il dosaggio di Naloxone e la risposta clinico-pupillare immediata.'
    }
  },
  {
    id: 'meu-15',
    specialtyId: 'pronto_soccorso',
    caseNumber: 15,
    title: 'Emorragia intracranica traumatica acuta (ematoma subdurale) con sindrome da ipertensione endocranica',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Traumatologia Cranioencefalica',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 78 anni',
      admissionReason: 'Caduta accidentale dalle scale con trauma cranico, cefalea ingravescente e comparsa di emiparesi sinistra e rallentamento ideo-motorio dopo 6 ore.',
      anamnesis: 'Fibrillazione atriale cronica in terapia con Warfarin (INR 2.8), ipertensione.',
      hospitalCourse: 'In PS: GCS 11 (E3V3M5), anisocoria (pupilla destra > sinistra), emiparesi facio-brachiale sinistra. TC encefalo urgente: ematoma subdurale acuto emisferico destro dello spessore massimo di 18 mm con effetto massa, deviazione della linea mediana di 9 mm e cancellazione dei solchi corticali. Avviata reversione immediata della scoagulazione con complesso protrombinico concentrato (PCC 4 fattori) e vitamina K EV. Contatto immediato con la Neurochirurgia per craniotomia evacuativa urgente.',
      proceduresConducted: 'TC encefalo urgente senza mdc, somministrazione endovenosa di complesso protrombinico a 4 fattori, intubazione orotracheale per protezione delle vie aeree e prevenzione dell\'edema cerebrale.',
      dischargeStatus: 'Trasferito in blocco operatorio neurochirurgico.'
    },
    documentationGapsWarning: 'In ICD-10-IM per l\'ematoma subdurale traumatico è obbligatoria l\'indicazione della presenza o assenza di perdita di coscienza e del 7° carattere "A".',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S06.5X9A', description: 'Emorragia subdurale traumatica, contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'T45.515A', description: 'Effetto avverso di anticoagulanti (Warfarin) a dosaggio terapeutico, contatto iniziale', system: 'ICD-10-IM' },
          { code: 'I48.2', description: 'Fibrillazione atriale cronica/permanente', system: 'ICD-10-IM' },
          { code: 'W10.9XXA', description: 'Caduta da o su scale o gradini, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-87.03', description: 'Tomografia computerizzata della testa/encefalo', system: 'CIPI' },
          { code: 'CIPI-99.06', description: 'Trasfusione o infusione di fattori della coagulazione (Complesso protrombinico)', system: 'CIPI' },
          { code: 'CIPI-96.04', description: 'Inserimento di tubo endotracheale per intubazione', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '852.20', description: 'Emorragia subdurale conseguente a trauma', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: 'E934.2', description: 'Effetto avverso di anticoagulanti', system: 'ICD-9-CM' }, { code: 'E880.9', description: 'Caduta su scale', system: 'ICD-9-CM' }],
        procedures: [{ code: '87.03', description: 'TC testa', system: 'ICD-9-CM' }, { code: '96.04', description: 'Intubazione endotracheale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'L\'ematoma subdurale traumatico acuto (S06.5) ha assoluta precedenza come diagnosi principale che ha determinato il pericolo di vita e il trasferimento neurochirurgico.',
        'Il codice T45.515A è fondamentale per tracciare il ruolo degli anticoagulanti nelle complicanze emorragiche secondo gli standard epidemiologici NSIS.'
      ],
      commonCognitiveErrors: [
        'Codificare l\'ematoma subdurale non traumatico (I62.0) in presenza di un evento traumatico noto (caduta dalle scale).',
        'Omissione del codice di causa esterna W10 per la caduta.'
      ],
      chartDocumentationAdvice: 'Riportare sempre il valore di INR all\'ingresso, la tempestività della somministrazione di PCC e la misura in millimetri dell\'effetto massa/shift della linea mediana.'
    }
  },
  {
    id: 'meu-16',
    specialtyId: 'pronto_soccorso',
    caseNumber: 16,
    title: 'Dissezione aortica acuta di tipo A di Stanford (dolore lacerante toraco-dorsale)',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Emergenze Cardiovascolari Maggiori',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 59 anni',
      admissionReason: 'Esordio improvviso e drammatico di dolore toracico lacerante anteriore irradiato al dorso tra le scapole e all\'epigastrio.',
      anamnesis: 'Ipertensione arteriosa scarsamente controllata, fumatore.',
      hospitalCourse: 'In PS: sofferente, agitato, PA asimmetrica (braccio destro 165/95 mmHg, braccio sinistro 110/70 mmHg, differenza > 30 mmHg), polso radiale sinistro iposfigmico. Soffio diastolico precoce al focolaio aortico di nuova insorgenza (insufficienza aortica acuta). Angio-TC dell\'aorta toraco-addominale eseguita in regime di massima urgenza: flap intimale di dissezione originante a 1.5 cm dal piano valvolare aortico (Stanford tipo A / DeBakey tipo I) esteso all\'arco e all\'aorta discendente fino alle arterie iliache con coinvolgimento del tronco anonimo. Avviata terapia anti-impulsiva con beta-bloccanti EV e nitroprussiato con target FC < 60 bpm e PA sistolica 100-110 mmHg. Attivazione immediata del Cardiochirurgo per intervento salvavita.',
      proceduresConducted: 'Angio-TC dell\'aorta toracica e addominale completa, ecocardiogramma transtoracico mirato bedside, monitoraggio invasivo continuo.',
      dischargeStatus: 'Trasferito d\'urgenza in sala operatoria di Cardiochirurgia.'
    },
    documentationGapsWarning: 'In ICD-10-IM la dissezione aortica è categorizzata con precisione anatomica: aorta toracica (I71.01), aorta addominale (I71.02), o toraco-addominale (I71.03).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I71.01', description: 'Dissezione dell\'aorta toracica (Stanford A)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I35.1', description: 'Insufficienza della valvola aortica non reumatica (acuta da dissezione)', system: 'ICD-10-IM' },
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-87.41', description: 'Tomografia computerizzata dell\'aorta (Angio-TC toraco-addominale)', system: 'CIPI' },
          { code: 'CIPI-88.72', description: 'Ecocardiografia transtoracica bedside mirata', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '441.01', description: 'Dissezione dell\'aorta toracica', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '424.1', description: 'Disturbi della valvola aortica', system: 'ICD-9-CM' }],
        procedures: [{ code: '87.41', description: 'TC torace', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I71.01 definisce inequivocabilmente la dissezione dell\'aorta toracica ascendente/arco.',
        'La discrepanza pressoria tra gli arti è un riscontro obiettivo fisico che non va codificato a sé stante.'
      ],
      commonCognitiveErrors: [
        'Scambiare la dissezione aortica con la rottura di aneurisma aortico (I71.1) in assenza di vero aneurisma preesistente rotto.',
        'Codificare l\'angina o il dolore toracico come diagnosi aggiuntiva.'
      ],
      chartDocumentationAdvice: 'Riportare la classificazione di Stanford (A vs B) e la presenza di complicanze d\'organo ischemiche periferiche nel referto.'
    }
  },
  {
    id: 'meu-17',
    specialtyId: 'pronto_soccorso',
    caseNumber: 17,
    title: 'Occlusione intestinale meccanica da volvolo del sigma trattata con devolvulazione endoscopica in urgenza',
    complexity: 'Intermedio',
    subCategory: 'Emergenze Gastroenterologiche / Addome Acuto',
    clinicalScenario: {
      patientAgeSex: 'Donna, 82 anni',
      admissionReason: 'Alvo chiuso a feci e gas da 72 ore, nausea, vomito fecaloide e progressiva enorme distensione addominale dolorosa a tamburo.',
      anamnesis: 'Paziente istituzionalizzata, stipsi cronica ostinata, morbo di Parkinson.',
      hospitalCourse: 'In PS: addome disteso a botte, timpanico, rumori peristaltici metallici intermittenti alternati a silenzio. Rx addome diretto: enorme ansa a "chicco di caffè" o "ferro di cavallo" con apici verso il quadrante superiore destro, compatibile con volvolo del sigma. TC addome conferma volvolo del colon sigmoideo senza segni franchi di necrosi o perforazione parietale. Eseguita rettosigmoidoscopia decompressiva d\'urgenza con progressivo superamento della torsione, detorzione e fuoriuscita massiva di gas e feci liquide con immediata detensione addominale. Posizionamento di sonda rettale a permanenza.',
      proceduresConducted: 'Rx addome diretto, rettosigmoidoscopia operativa con devolvulazione endoscopica meccanica, posizionamento di tubo rettale decompressivo.',
      dischargeStatus: 'Trasferita in Chirurgia Generale per pianificazione di sigmoidectomia elettiva di prevenzione delle recidive.'
    },
    documentationGapsWarning: 'In ICD-10-IM il volvolo del colon possiede il codice specifico K56.2.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K56.2', description: 'Volvolo (del colon / del sigma)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G20', description: 'Malattia di Parkinson', system: 'ICD-10-IM' },
          { code: 'K59.00', description: 'Stipsi non specificata', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-46.85', description: 'Dilatazione e devolvulazione endoscopica del colon con rettosigmoidoscopia', system: 'CIPI' },
          { code: 'CIPI-87.61', description: 'Radiografia dell\'addome senza contrasto', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '560.2', description: 'Volvolo', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '332.0', description: 'Morbo di Parkinson', system: 'ICD-9-CM' }],
        procedures: [{ code: '46.85', description: 'Dilatazione dell\'intestino', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K56.2 specifica il volvolo come causa di ileo meccanico ostruttivo.',
        'La manovra endoscopica decompressiva effettuata in emergenza è una procedura terapeutica maggiore che modifica il peso della casistica (CIPI 46.85).'
      ],
      commonCognitiveErrors: [
        'Codificare K56.60 (occlusione intestinale non specificata) anziché il codice eziologico preciso di volvolo K56.2.'
      ],
      chartDocumentationAdvice: 'Attestare l\'assenza di ischemia/gangrena mucosa alla sigmoidoscopia e il successo della devolvulazione.'
    }
  },
  {
    id: 'meu-18',
    specialtyId: 'pronto_soccorso',
    caseNumber: 18,
    title: 'Trauma addominale chiuso con lesione splenica di grado II (ematoma sottocapsulare) gestita conservativamente',
    complexity: 'Intermedio',
    subCategory: 'Traumatologia Addominale',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 27 anni',
      admissionReason: 'Trauma contusivo all\'ipocondrio sinistro durante partita di rugby (impatto contro ginocchio di un avversario).',
      anamnesis: 'Soggetto sportivo sano.',
      hospitalCourse: 'In PS: dolore e dolorabilità all\'ipocondrio sinistro con segno di Kehr (irradiazione alla spalla sinistra), escoriazione cutanea. Parametri vitali stabili: PA 125/80 mmHg, FC 80 bpm, SpO2 99%. Ecografia FAST: falda liquida perisplenica minima nel recesso splenorenale. TC addome con contrasto: lacerazione parenchimale della milza di profondità < 3 cm senza interessamento dei vasi trabecolari, con ematoma sottocapsulare che interessa circa il 25% della superficie (lesione di Grado II secondo la classificazione AAST). Non stravaso attivo di mezzo di contrasto (assenza di "blush"). Decisione di gestione non operatoria (NOM - Non Operative Management) con monitoraggio clinico intensivo, riposo a letto, controlli seriati dell\'emocromo e digiuno per 48 ore in Medicina d\'Urgenza.',
      proceduresConducted: 'TC addome con mezzo di contrasto, ecografia FAST, monitoraggio seriato dei valori di emoglobina ed ematocrito.',
      dischargeStatus: 'Dimesso all\'8° giorno con emocromo stabile (Hb 13.8 g/dL), quadro ecografico di riassorbimento e divieto di attività sportive per 60 giorni.'
    },
    documentationGapsWarning: 'In ICD-10-IM la lacerazione e l\'ematoma splenico traumatico sono codificati sotto la categoria S36.03 (lacerazione splenica moderata grado II) con il 7° carattere "A".',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S36.031A', description: 'Lacerazione moderata della milza (Grado II AAST), contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'W21.04XA', description: 'Colpito da pallone o da giocatore durante partita di rugby, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-88.01', description: 'Tomografia computerizzata dell\'addome con mezzo di contrasto', system: 'CIPI' },
          { code: 'CIPI-88.76', description: 'Ecografia addominale FAST', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '865.02', description: 'Lacerazione della milza senza menzione di ferita aperta nella cavità addominale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: 'E917.0', description: 'Colpito accidentalmente in attività sportiva', system: 'ICD-9-CM' }],
        procedures: [{ code: '88.01', description: 'TC addome', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM dettaglia il grado di severità della lesione splenica (da grado I minore S36.02 a grado V massiva S36.04).',
        'La gestione conservativa NOM non modifica la natura della diagnosi principale che rimane la lesione traumatica d\'organo solido.'
      ],
      commonCognitiveErrors: [
        'Codificare solo contusione della parete addominale (S30.0) sottostimando la lesione parenchimale della milza documentata alla TC.',
        'Omettere il 7° carattere "A".'
      ],
      chartDocumentationAdvice: 'Riportare la classificazione AAST (Grado II) e l\'assenza di blush arterioso nel referto TC.'
    }
  },
  {
    id: 'meu-19',
    specialtyId: 'pronto_soccorso',
    caseNumber: 19,
    title: 'Ipotermia accidentale moderata (temperatura centrale 30.5 °C) con bradicardia sinusale',
    complexity: 'Intermedio',
    subCategory: 'Emergenze Ambientali',
    clinicalScenario: {
      patientAgeSex: 'Donna, 74 anni',
      admissionReason: 'Ritrovata a terra in casa non riscaldata dopo caduta accidentale avvenuta circa 18 ore prima durante il periodo invernale.',
      anamnesis: 'Demenza senile iniziale, osteoartrosi, sindrome da fragilità dell\'anziano.',
      hospitalCourse: 'In PS: cute pallida, fredda al tatto, assenza di brivido, letargia profonda (risponde solo a stimoli dolorosi verbali vigorosi), PA 90/60 mmHg, FC 44 bpm ritmica, FR 10 atti/min. Temperatura rettale con termometro a bassa scala: 30.5 °C (ipotermia moderata). ECG: bradicardia sinusale con onde di Osborn (J-waves) all\'unione QRS-ST nelle derivazioni precordiali e allungamento dell\'intervallo QTc. Riscaldamento attivo esterno ed interno: coperte a riscaldamento forzato ad aria calda, liquidi endovenosi cristalloidi riscaldati a 40 °C, ossigeno umidificato e riscaldato. Raggiungimento di normotermia (36.5 °C) dopo 14 ore con scomparsa delle onde di Osborn e ripristino di FC 72 bpm.',
      proceduresConducted: 'Monitoraggio continuo della temperatura centrale, riscaldamento attivo corporeo interno ed esterno, ECG seriali a 12 derivazioni.',
      dischargeStatus: 'Trasferita in Geriatria per convalescenza e attivazione della rete assistenziale territoriale.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'ipotermia accidentale è codificata con T68.XXXA con obbligo di causa esterna X31 per esposizione al freddo naturale.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'T68.XXXA', description: 'Ipotermia accidentale, contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'X31.XXXA', description: 'Esposizione a freddo naturale eccessivo, contatto iniziale', system: 'ICD-10-IM' },
          { code: 'F03.90', description: 'Demenza non specificata, senza disturbi comportamentali', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.85', description: 'Riscaldamento corporeo terapeutico ipotermico', system: 'CIPI' },
          { code: 'CIPI-89.52', description: 'Elettrocardiogramma standard a 12 derivazioni', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '991.6', description: 'Ipotermia', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: 'E901.0', description: 'Esposizione a freddo naturale', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.85', description: 'Trattamento con riscaldamento', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'T68.XXXA richiede i caratteri di riempimento "X" fino al 7° carattere "A".',
        'La bradicardia e le onde di Osborn all\'ECG sono espressione fisiopatologica diretta dell\'ipotermia e non devono essere codificate come aritmia primitiva.'
      ],
      commonCognitiveErrors: [
        'Codificare la bradicardia (R00.1) come diagnosi principale trascurando l\'ipotermia sistemica severa.',
        'Omettere il codice di causa esterna X31.'
      ],
      chartDocumentationAdvice: 'Attestare la temperatura centrale rilevata con sonda esofagea o termometro ipotermico rettale all\'ingresso e all\'uscita.'
    }
  },
  {
    id: 'meu-20',
    specialtyId: 'pronto_soccorso',
    caseNumber: 20,
    title: 'Stato di agitazione psicomotoria acuta da intossicazione da sostanze stimolanti (cocaina) con rabdomiolisi',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Emergenze Tossicologiche / Psichiatriche',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 36 anni',
      admissionReason: 'Condotto dalle Forze dell\'Ordine e dal 118 per stato di marcata agitazione psicomotoria, allucinazioni visive, delirio paranoide persecutorio e aggressività.',
      anamnesis: 'Disturbo da uso di cocaina ed alcool, non precedenti ricoveri psichiatrici.',
      hospitalCourse: 'In PS: iperpiressia (38.8 °C), sudorazione profusa, midriasi spiccata, PA 190/110 mmHg, FC 142 bpm sinusale. Esame tossicologico urinario positivo per benzoilecgonina (cocaina). Eseguita sedazione urgente con benzodiazepine EV (Diazepam e Midazolam) in ambiente protetto. Esami ematochimici: Creatinfosfochinasi (CPK) 18.500 U/L, Mioglobina > 3.000 ng/mL, creatinina 1.8 mg/dL da danno muscolare acuto (rabdomiolisi indotta da vasocostrizione e iperattività). Idratazione endovenosa forzata con alcalinizzazione delle urine mediante bicarbonato di sodio per prevenzione della nefropatia pigmentaria da mioglobina.',
      proceduresConducted: 'Sedazione farmacologica d\'urgenza, monitoraggio continuo multiparametrico in isolamento protetto, alcalinizzazione urinaria forzata con catetere vescicale.',
      dischargeStatus: 'Dimesso dopo 48 ore di stabilizzazione in OBI con CPK scesa a 1.200 U/L e funzione renale normalizzata (creatinina 0.9 mg/dL).'
    },
    documentationGapsWarning: 'In ICD-10-IM la rabdomiolisi possiede un codice dedicato (M62.82) che deve affiancare l\'effetto tossico della sostanza (T40.5X1A).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'T40.5X1A', description: 'Avvelenamento da cocaina, accidentale (non intenzionale), contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'M62.82', description: 'Rabdomiolisi non traumatica', system: 'ICD-10-IM', notes: 'Grave complicanza d\'organo tossico-muscolare.' },
          { code: 'F14.10', description: 'Abuso di cocaina, non complicato', system: 'ICD-10-IM' },
          { code: 'R45.1', description: 'Agitazione psicomotoria e irrequietezza', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.29', description: 'Sedazione farmacologica endovenosa in emergenza', system: 'CIPI' },
          { code: 'CIPI-57.94', description: 'Inserimento di catetere vescicale a permanenza per monitoraggio diuresi', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '968.5', description: 'Effetto tossico di anestetici locali (Cocaina)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '728.88', description: 'Rabdomiolisi', system: 'ICD-9-CM' }, { code: '305.60', description: 'Abuso di cocaina', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.29', description: 'Iniezione di farmaci', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'T40.5X1A identifica l\'effetto tossico acuto da cocaina con il carattere di contatto iniziale.',
        'La rabdomiolisi (M62.82) è una comorbilità maggiore (MCC/CC) di elevato impatto clinico che deve essere sempre codificata.'
      ],
      commonCognitiveErrors: [
        'Classificare il paziente solo con diagnosi psichiatrica primaria (es. F14.921 stato psicotico indotto da sostanze) omettendo l\'intossicazione medica e la rabdomiolisi conclamata.',
        'Omettere il valore di picco delle CPK nella documentazione di cartella.'
      ],
      chartDocumentationAdvice: 'Riportare sempre i valori massimi di CPK, mioglobina e temperatura corporea e i farmaci sedativi usati.'
    }
  }
];
