import { ClinicalCase } from '../../types';

export const INTENSIVE_CARE_CASES: ClinicalCase[] = [
  {
    id: 'icu-1',
    specialtyId: 'terapia_intensiva',
    caseNumber: 1,
    title: 'Shock settico con insufficienza multiorgano (MOF) e ventilazione meccanica prolungata > 96 ore',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Sepsi e Shock',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 69 anni',
      admissionReason: 'Ipotensione refrattaria ai fluidi, iperlattatemia marcata e insufficienza respiratoria acuta conseguente a sepsi polmonare.',
      anamnesis: 'BPCO severa, diabete mellito tipo 2, arteriopatia periferica.',
      hospitalCourse: 'Trasferito dal reparto medico in Terapia Intensiva. All\'ingresso: PA 70/40 mmHg con PAM 50 mmHg nonostante carico idrico di 30 mL/kg, FC 132 bpm, lattati 5.8 mmol/L, oliguria marcata. Intubato orotrachealmente e posto in ventilazione meccanica invasiva controllata per 120 ore consecutive. Posizionato catetere venoso centrale (CVC) in vena giugulare interna destra e catetere arterioso radiale sinistro per monitoraggio emodinamico continuo. Avviata infusione di Noradrenalina titolata associata a Vasopressina e idrocortisone a basso dosaggio. Emocolture e broncoaspirato positivi per Klebsiella pneumoniae sensibile a Meropenem-Vaborbactam. Graduale svezzamento da vasopressori e ciclo di ventilazione meccanica con estubazione riuscita dopo 5 giorni.',
      proceduresConducted: 'Ventilazione meccanica invasiva per 120 ore consecutive (> 96 ore), incannulamento CVC vena giugulare interna, incannulamento arterioso periferico radiale, monitoraggio continuo parametri invasivi.',
      dischargeStatus: 'Trasferito in degenza semintensiva pneumologica in condizioni stabili.'
    },
    documentationGapsWarning: 'In ICD-10-IM il codice di shock settico (R65.21) è un codice addizionale obbligatorio che deve seguire il codice causale di sepsi (A41.51 per Klebsiella). La durata della ventilazione meccanica va tracciata con il codice CIPI corretto.',
    solution: {
      icd10: {
        primaryDiagnosis: {
          code: 'A41.51',
          description: 'Sepsi da Klebsiella pneumoniae',
          system: 'ICD-10-IM',
          category: 'Malattie infettive e parassitarie'
        },
        secondaryDiagnoses: [
          { code: 'R65.21', description: 'Shock settico (con disfunzione d\'organo acuta)', system: 'ICD-10-IM', notes: 'MCC critico: codifica combinata obbligatoria.' },
          { code: 'J96.00', description: 'Insufficienza respiratoria acuta non specificata', system: 'ICD-10-IM' },
          { code: 'N17.9', description: 'Danno renale acuto (AKI) non specificato', system: 'ICD-10-IM' },
          { code: 'J44.1', description: 'Broncopneumopatia cronica ostruttiva con esacerbazione acuta', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-96.72', description: 'Ventilazione meccanica continua invasiva per 96 ore consecutive o più', system: 'CIPI' },
          { code: 'CIPI-38.93', description: 'Cateterismo venoso centrale (CVC)', system: 'CIPI' },
          { code: 'CIPI-89.61', description: 'Monitoraggio continuo della pressione arteriosa sistemica per via cruenta', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '038.49', description: 'Altra setticemia da batteri gram-negativi', system: 'ICD-9-CM' },
        secondaryDiagnoses: [
          { code: '785.52', description: 'Shock settico', system: 'ICD-9-CM' },
          { code: '995.92', description: 'Sindrome da risposta infiammatoria sistemica severa con disfunzione d\'organo', system: 'ICD-9-CM' },
          { code: '518.81', description: 'Insufficienza respiratoria acuta', system: 'ICD-9-CM' }
        ],
        procedures: [
          { code: '96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'ICD-9-CM' },
          { code: '38.93', description: 'Cateterismo venoso per via centrale', system: 'ICD-9-CM' }
        ]
      },
      rulesAppliedExplanation: [
        'Regola del sequencing per sepsi e shock settico: il codice di infezione eziologica sistemica (A41.51) è sempre la diagnosi principale, seguito obbligatoriamente da R65.21 per shock settico.',
        'Superamento della doppia codifica SIRS di ICD-9-CM (995.92): in ICD-10-IM R65.21 incorpora nativamente la sepsi severa con disfunzione d\'organo.',
        'La procedura CIPI 96.72 documenta la ventilazione meccanica invasiva > 96 ore, elemento fondamentale per il calcolo del DRG ad alta complessità.'
      ],
      commonCognitiveErrors: [
        'Mettere R65.21 (shock settico) come diagnosi principale: le convenzioni internazionali vietano l\'uso di R65.21 come codice principale.',
        'Utilizzare il codice di ventilazione CIPI 96.71 (< 96 ore) quando il paziente è stato intubato per 120 ore consecutive.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario di Terapia Intensiva l\'orario esatto di inizio e fine ventilazione meccanica (ore complessive) e l\'esito delle emocolture.'
    }
  },
  {
    id: 'icu-2',
    specialtyId: 'terapia_intensiva',
    caseNumber: 2,
    title: 'Sindrome da distress respiratorio acuto (ARDS) severa trattata con cicli di pronazione in ICU',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Insufficienza Respiratoria Acuta',
    clinicalScenario: {
      patientAgeSex: 'Donna, 52 anni',
      admissionReason: 'Ipossiemia refrattaria con infiltrati alveolari bilaterali a vetro smerigliato post-aspirazione polmonare da reflusso massivo.',
      anamnesis: 'Ernia iatale voluminosa, non patologie polmonari note.',
      hospitalCourse: 'Giunta in Terapia Intensiva intubata: PaO2/FiO2 ratio pari a 88 mmHg (ARDS severa secondo i criteri di Berlino), PEEP 14 cmH2O, compliance toraco-polmonare marcatamente ridotta (22 mL/cmH2O). Rx e TC torace documentano consolidamenti declivi bilaterali con "ground glass". Applicata strategia ventilatoria protettiva ultra-low tidal volume (4-6 mL/kg di peso ideale) con blocco neuromuscolare continuo con cisatracurio ed esecuzione di 3 cicli consecutivi di posizionamento prono (pronation therapy) di 16 ore ciascuno. Monitoraggio emodinamico avanzato mediante termodiluizione transpolmonare (PiCCO) per ottimizzazione dei fluidi.',
      proceduresConducted: 'Ventilazione meccanica invasiva per 110 ore, posizionamento prono terapeutico per ARDS (pronazione), monitoraggio emodinamico continuo mediante PiCCO, posizionamento CVC e catetere arterioso femorale dedicato.',
      dischargeStatus: 'Estubata al 7° giorno con PaO2/FiO2 > 280 mmHg in respiro spontaneo e trasferita in reparto degenziale.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'ARDS ha il codice dedicato J80 (Sindrome da distress respiratorio dell\'adulto), che non deve essere confuso con l\'edema polmonare cardiogeno o l\'insufficienza respiratoria generica.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'J80', description: 'Sindrome da distress respiratorio dell\'adulto (ARDS)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'J69.0', description: 'Polmonite da aspirazione di cibo o vomito', system: 'ICD-10-IM' },
          { code: 'J96.01', description: 'Insufficienza respiratoria acuta con ipossiemia', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-96.72', description: 'Ventilazione meccanica continua invasiva per 96 ore o più', system: 'CIPI' },
          { code: 'CIPI-93.99', description: 'Posizionamento prono terapeutico in corso di ventilazione invasiva (Pronazione)', system: 'CIPI' },
          { code: 'CIPI-89.68', description: 'Monitoraggio emodinamico continuo avanzato con termodiluizione transpolmonare (PiCCO)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '518.82', description: 'Altra insufficienza polmonare non classificata altrove (ARDS)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '507.0', description: 'Polmonite da alimenti e vomito', system: 'ICD-9-CM' }],
        procedures: [{ code: '96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'J80 identifica in maniera autonoma ed esaustiva l\'ARDS dell\'adulto.',
        'La polmonite ab ingestis causale (J69.0) deve essere indicata in diagnosi secondaria.',
        'La terapia di pronazione e il monitoraggio PiCCO costituiscono indicatori procedurali essenziali per la stratificazione dell\'intensità di cura in ICU.'
      ],
      commonCognitiveErrors: [
        'Classificare l\'ARDS semplicemente come J96.01 (insufficienza respiratoria ipossiemica acuta), declassando la severità clinica della sindrome.',
        'Dimenticare di codificare la causa scatenante di inalazione (J69.0).'
      ],
      chartDocumentationAdvice: 'Registrare il rapporto PaO2/FiO2 < 100 mmHg, la durata e il numero di cicli di pronazione in cartella intensiva.'
    }
  },
  {
    id: 'icu-3',
    specialtyId: 'terapia_intensiva',
    caseNumber: 3,
    title: 'Shock cardiogeno refrattario post-infartuale trattato con supporto meccanico al circolo (Impella) e inotropi',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Terapia Intensiva Cardiologica / Shock',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 64 anni',
      admissionReason: 'Infarto miocardico acuto anteriore complicato da shock cardiogeno persistente con ipoperfusione sistemica e acidosi lattica.',
      anamnesis: 'Diabete tipo 2, fumo 30 pack-years, non pregressi eventi coronarici.',
      hospitalCourse: 'Sottoposto a PTCA primaria d\'urgenza dell\'arteria discendente anteriore con stent medicato. Nelle prime ore post-angioplastica in ICU sviluppo di shock cardiogeno profondo (SCAI stadio D): PA 75/45 mmHg, indice cardiaco 1.4 L/min/m2, FEVS 20%, lattati 6.4 mmol/L, anuria. Posizionato d\'urgenza sistema di assistenza ventricolare percutanea microassiale (Impella CP) attraverso l\'arteria femorale destra sotto controllo fluoroscopico ed ecocardiografico transesofageo. Avviata infusione di Dobutamina e Noradrenalina. Progressivo recupero dell\'indice cardiaco a 2.6 L/min/m2 e riduzione dei lattati. Rimozione del dispositivo Impella dopo 84 ore e svezzamento da inotropi.',
      proceduresConducted: 'Inserimento percutaneo di pompa di assistenza ventricolare sinistra a flusso continuo (Impella CP), rimozione del dispositivo di assistenza meccanica ventricolare, ecocardiografia transesofagea intraprocedurale.',
      dischargeStatus: 'Trasferito in UTIC al 9° giorno in condizioni emodinamiche stabilizzate (FEVS 32%).'
    },
    documentationGapsWarning: 'In ICD-10-IM lo shock cardiogeno è codificato con R57.0 e segue il codice di infarto acuto del miocardio (I21.01). La procedura di supporto con Impella richiede specifico codice CIPI per assistenza ventricolare percutanea.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I21.01', description: 'Infarto miocardico acuto con elevazione del tratto ST (STEMI) dell\'arteria coronarica discendente anteriore', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R57.0', description: 'Shock cardiogeno', system: 'ICD-10-IM', notes: 'MCC critico.' },
          { code: 'E11.9', description: 'Diabete mellito di tipo 2 senza complicanze', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-37.68', description: 'Inserimento percutaneo di sistema di assistenza ventricolare cardiaca esterna a flusso assiale (Impella)', system: 'CIPI' },
          { code: 'CIPI-37.64', description: 'Rimozione di sistema di assistenza ventricolare o contropulsatore', system: 'CIPI' },
          { code: 'CIPI-88.72', description: 'Ecocardiografia transesofagea (TEE) diagnostica e di guida', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '410.11', description: 'Infarto miocardico acuto di altre parti anteriori', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '785.51', description: 'Shock cardiogenico', system: 'ICD-9-CM' }],
        procedures: [{ code: '37.68', description: 'Inserzione di sistema di assistenza cardiaca percutaneo', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'L\'infarto miocardico acuto (I21.01) è la diagnosi principale che ha determinato il ricovero e l\'indicazione alle cure intensive.',
        'Lo shock cardiogeno (R57.0) è la complicanza acuta a maggiore consumo di risorse che richiede di essere codificata tra le diagnosi secondarie come MCC.',
        'L\'assistenza meccanica con dispositivo assiale percutaneo (CIPI 37.68) modifica sostanzialmente il DRG attribuito.'
      ],
      commonCognitiveErrors: [
        'Codificare contropulsazione aortica con palloncino (CIPI 37.61) al posto del corretto codice per assistenza percutanea microassiale (CIPI 37.68).',
        'Omettere la codifica dello shock cardiogeno ritenendolo insito nell\'infarto.'
      ],
      chartDocumentationAdvice: 'Descrivere dettagliatamente i parametri di gittata, l\'indice cardiaco e i giorni esatti di mantenimento in sede del dispositivo Impella.'
    }
  },
  {
    id: 'icu-4',
    specialtyId: 'terapia_intensiva',
    caseNumber: 4,
    title: 'Traumatismo cranio-encefalico grave (TBI) con monitoraggio continuo della pressione intracranica (PIC)',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Neuro-Rianimazione',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 25 anni',
      admissionReason: 'Trauma cranico della strada con coma acuto (GCS 5), ematoma subdurale ed estese contusioni emorragiche parenchimali.',
      anamnesis: 'Paziente giovane privo di patologie pregresse.',
      hospitalCourse: 'Intubato sul luogo dell\'incidente per GCS 5. TC encefalo in PS: contusioni lacero-contusive bifrontali e temporali destre con edema cerebrale diffuso e cancellazione delle cisterne basali. In Terapia Intensiva Neuro-Rianimatoria: posizionamento a letto del paziente di catetere intraparenchimale per monitoraggio continuo della pressione intracranica (PIC). Valori iniziali di PIC > 25 mmHg. Trattamento intensivo secondo protocollo Brain Trauma Foundation: sedazione profonda continua con Propofol e Sufentanil, curarizzazione, osmoterapia con soluzione salina ipertonica al 3% e mannitolo, target di Pressione di Perfusione Cerebrale (PPC) > 60-70 mmHg guidata da noradrenalina. PIC rientrata stabilmente < 15 mmHg al 5° giorno. Rimozione del sensore di PIC in 6a giornata.',
      proceduresConducted: 'Posizionamento di sensore/catetere intraparenchimale per monitoraggio continuo della pressione intracranica (PIC), ventilazione meccanica invasiva per 144 ore, TC encefalo seriata.',
      dischargeStatus: 'Sottoposto a tracheostomia precoce al 7° giorno ed avviato a percorso neuroriabilitativo dedicato.'
    },
    documentationGapsWarning: 'In ICD-10-IM la contusione cerebrale traumatica bilaterale richiede la codifica topografica specifica (S06.339A) associata a codice GCS.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S06.339A', description: 'Contusione e lacerazione focale cerebrale cerebrale/frontale, contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G93.6', description: 'Edema cerebrale acuto', system: 'ICD-10-IM' },
          { code: 'R40.241', description: 'Punteggio coma di Glasgow totale 3-8 (GCS all\'ingresso in ICU)', system: 'ICD-10-IM' },
          { code: 'V03.10XA', description: 'Pedone ferito in collisione con autovettura, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-01.16', description: 'Inserimento di catetere/sonda per monitoraggio continuo della pressione intracranica (PIC)', system: 'CIPI' },
          { code: 'CIPI-96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'CIPI' },
          { code: 'CIPI-31.1', description: 'Tracheostomia percutanea temporanea', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '851.80', description: 'Altra e non specificata lacerazione o contusione cerebrale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '348.5', description: 'Edema cerebrale', system: 'ICD-9-CM' }, { code: 'E814.7', description: 'Incidente da traffico che coinvolge pedone', system: 'ICD-9-CM' }],
        procedures: [{ code: '01.16', description: 'Monitoraggio della pressione intracranica', system: 'ICD-9-CM' }, { code: '96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'La lesione cerebrale traumatica focale (S06.339A) è la diagnosi principale.',
        'La presenza di edema cerebrale (G93.6) e il codice di GCS ridotto sono complicanze maggiori essenziali.',
        'La procedura CIPI 01.16 valorizza il monitoraggio invasivo endocranico in neuro-rianimazione.'
      ],
      commonCognitiveErrors: [
        'Omettere la procedura di posizionamento del sensore di PIC (CIPI 01.16).',
        'Codificare solo il trauma cranico superficiale (S00) anziché la lesione intracranica S06.'
      ],
      chartDocumentationAdvice: 'Riportare la curva di registrazione della PIC, i valori di pressione di perfusione cerebrale (PPC) e l\'esecuzione della tracheostomia.'
    }
  },
  {
    id: 'icu-5',
    specialtyId: 'terapia_intensiva',
    caseNumber: 5,
    title: 'Emorragia subaracnoidea (ESA) da rottura di aneurisma cerebrale con drenaggio ventricolare esterno (DVE)',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Neuro-Rianimazione Vascolare',
    clinicalScenario: {
      patientAgeSex: 'Donna, 48 anni',
      admissionReason: 'Cefalea a rombo di tuono istantanea con perdita di coscienza transitoria, rigidità nucale e vomito a getto.',
      anamnesis: 'Ipertensione arteriosa lieve, fumo di sigaretta.',
      hospitalCourse: 'Giunta in PS con GCS 12 (Hunt-Hess grado 3, Fisher grado 4). TC encefalo: emorragia subaracnoidea massiva perimesencefalica e nella scissura silviana con inondazione dei ventricoli laterali e del IV ventricolo. Angio-TC: aneurisma a colletto largo dell\'arteria comunicante anteriore. In Terapia Intensiva: posizionamento d\'urgenza di Drenaggio Ventricolare Esterno (DVE) al corno frontale destro per idrocefalo acuto ipertensivo. Sottoposta ad embolizzazione endovascolare con spirali (coiling) dell\'aneurisma da parte del neuroradiologo interventista. Gestione del vasospasmo post-emorragico con Nimodipina EV continua ed euvolemia guidata.',
      proceduresConducted: 'Ventricolostomia con posizionamento di drenaggio ventricolare esterno (DVE), embolizzazione endovascolare di aneurisma cerebrale con spirali metalliche (coiling), monitoraggio continuo della pressione ventricolare.',
      dischargeStatus: 'Estubata al 12° giorno, rimosso il DVE e trasferita in reparto di Neurochirurgia.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'emorragia subaracnoidea da rottura dell\'arteria comunicante anteriore ha un codice altamente specifico (I60.2). L\'idrocefalo ostruttivo associato va codificato separatamente (G91.1).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I60.2', description: 'Emorragia subaracnoidea da arteria comunicante anteriore', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G91.1', description: 'Idrocefalo ostruttivo acuto (post-emorragico)', system: 'ICD-10-IM' },
          { code: 'I67.848', description: 'Vasospasmo e ischemia cerebrale secondaria', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-02.21', description: 'Inserimento o sostituzione di catetere ventricolare esterno (Drenaggio Ventricolare Esterno / Ventricolostomia)', system: 'CIPI' },
          { code: 'CIPI-39.72', description: 'Embolizzazione o occlusione endovascolare percutanea di vasi cerebrali della testa e del collo con spirali (coiling)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '430', description: 'Emorragia subaracnoidea', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '331.4', description: 'Idrocefalo ostruttivo', system: 'ICD-9-CM' }],
        procedures: [{ code: '02.21', description: 'Inserzione o sostituzione di catetere ventricolare', system: 'ICD-9-CM' }, { code: '39.72', description: 'Occlusione endovascolare di vasi della testa e del collo', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM specifica l\'esatta arteria intracranica sede dell\'aneurisma rotto (I60.2 per comunicante anteriore vs I60.1 per cerebrale media), superando il codice generico 430 di ICD-9-CM.',
        'La ventricolostomia per DVE è una procedura salvavita fondamentale codificata con CIPI 02.21.'
      ],
      commonCognitiveErrors: [
        'Codificare emorragia intracerebrale intraparenchimale (I61) anziché emorragia subaracnoidea (I60).',
        'Omettere la procedura chirurgica di posizionamento del DVE.'
      ],
      chartDocumentationAdvice: 'Specificare l\'arteria sede dell\'aneurisma (comunicante anteriore) e il volume drenato giornalmente dal DVE.'
    }
  },
  {
    id: 'icu-6',
    specialtyId: 'terapia_intensiva',
    caseNumber: 6,
    title: 'Pancreatite acuta necrotico-emorragica severa con insufficienza renale trattata con CVVHDF continua',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Insufficienza Renale e Depurazione Extracorporea',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 45 anni',
      admissionReason: 'Addome acuto peritonitico a sbarra, vomito incoercibile, ipotensione severa e anuria da 24 ore.',
      anamnesis: 'Litiasi biliare misconosciuta, forte bevitore.',
      hospitalCourse: 'TC addome con mezzo di contrasto: pancreatite acuta Balthazar E con necrosi parenchimale superiore al 50% ed estese raccolte fluide peripancreatiche retroperitoneali. In Terapia Intensiva: quadro di shock distributivo con insufficienza respiratoria e blocco renale acuto (AKI KDIGO stadio 3 con anuria refrattaria, iperkaliemia 6.8 mEq/L e acidosi metabolica pH 7.15). Posizionato catetere bilume per emodialisi in vena femorale destra e avviata emodiafiltrazione veno-venosa continua (CVVHDF) protratta per 96 ore consecutive con membrana ad alto cut-off. Ventilazione meccanica invasiva per 102 ore. Idratazione guidata e nutrizione parenterale totale.',
      proceduresConducted: 'Emodiafiltrazione continua veno-venosa (CVVHDF) per depurazione extracorporea continua (CRRT), posizionamento di catetere venoso centrale per emodialisi, ventilazione meccanica invasiva continua.',
      dischargeStatus: 'Ripresa della diuresi spontanea, svezzato da CRRT al 7° giorno e trasferito in chirurgia generale per drenaggio guidato.'
    },
    documentationGapsWarning: 'In ICD-10-IM la pancreatite acuta biliare (K85.1) va distinta dalla pancreatite da alcol (K85.2) o idiopatica (K85.9). La metodica di depurazione renale continua in ICU richiede il codice CIPI per CRRT/emodiafiltrazione continua.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K85.10', description: 'Pancreatite acuta biliare senza necrosi o infezione specificata', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'N17.0', description: 'Danno renale acuto con necrosi tubulare', system: 'ICD-10-IM' },
          { code: 'R65.20', description: 'Sindrome da risposta infiammatoria sistemica severa (SIRS) senza shock settico', system: 'ICD-10-IM' },
          { code: 'K80.20', description: 'Calcoli della cistifellea senza colecistite', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-39.95', description: 'Emodiafiltrazione veno-venosa continua (CVVHDF / CRRT)', system: 'CIPI' },
          { code: 'CIPI-38.95', description: 'Cateterismo venoso per emodialisi (inserzione di catetere bilume per dialisi)', system: 'CIPI' },
          { code: 'CIPI-96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '577.0', description: 'Pancreatite acuta', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '584.5', description: 'Insufficienza renale acuta con necrosi tubulare', system: 'ICD-9-CM' }, { code: '574.20', description: 'Litiasi biliare', system: 'ICD-9-CM' }],
        procedures: [{ code: '39.95', description: 'Emodialisi', system: 'ICD-9-CM' }, { code: '96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM categoria K85 dettaglia nel 4° carattere l\'eziologia (K85.1 biliare vs K85.2 alcolica).',
        'La procedura di depurazione extracorporea renale continua (CRRT/CVVHDF CIPI 39.95) è fondamentale per la corretta valorizzazione dell\'impegno assistenziale in rianimazione.'
      ],
      commonCognitiveErrors: [
        'Codificare l\'emodialisi intermittente ambulatoriale semplice al posto della terapia sostitutiva renale continua (CRRT) di terapia intensiva.',
        'Non indicare la litiasi biliare sottostante come causa della pancreatite.'
      ],
      chartDocumentationAdvice: 'Attestare le ore complessive di trattamento CRRT/CVVHDF, la dose dialitica (mL/kg/h) e il bilancio idrico orario in ICU.'
    }
  },
  {
    id: 'icu-7',
    specialtyId: 'terapia_intensiva',
    caseNumber: 7,
    title: 'Sindrome di Guillain-Barré acuta con paralisi respiratoria trattata con cicli di plasmaferesi (PLEX) e ventilazione',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Neuro-Rianimazione',
    clinicalScenario: {
      patientAgeSex: 'Donna, 38 anni',
      admissionReason: 'Paralisi ascendente progressiva dai quattro arti ai muscoli respiratori e bulbari comparsa dopo gastroenterite da Campylobacter.',
      anamnesis: 'Episodio di diarrea febbrile 12 giorni prima, per il resto anamnesi muta.',
      hospitalCourse: 'Ricoverata per tetraplegia flaccida areflessica. In Terapia Intensiva rapido deterioramento respiratorio con capacità vitale forzata (FVC) < 15 mL/kg e pressione inspiratoria massima (MIP) < 20 cmH2O. Eseguita intubazione orotracheale profilattica per insufficienza dei muscoli respiratori. Elettromiografia e rachicentesi confermano poliradicoloneuropatia infiammatoria demielinizzante acuta (AIDP / Guillain-Barré) con dissociazione albumino-citologica. Sottoposta a 5 sedute di plasmaferesi terapeutica (Plasma Exchange - PLEX) a giorni alterni con sostituzione di 1.5 volumi plasmatici mediante albumina. Ventilazione meccanica invasiva protratta per 14 giorni con successiva tracheostomia percutanea.',
      proceduresConducted: 'Plasmaferesi terapeutica (5 cicli), ventilazione meccanica continua per più di 96 ore, tracheostomia percutanea (Ciaglia), puntura lombare diagnostica.',
      dischargeStatus: 'Trasferita in centro di neuroriabilitazione intensiva ad alta specializzazione con recupero motorio iniziale.'
    },
    documentationGapsWarning: 'In ICD-10-IM la sindrome di Guillain-Barré ha il codice G61.0. La plasmaferesi terapeutica richiede il codice di procedura CIPI 99.71.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G61.0', description: 'Sindrome di Guillain-Barré', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'J96.00', description: 'Insufficienza respiratoria acuta', system: 'ICD-10-IM' },
          { code: 'G82.50', description: 'Tetraplegia non specificata', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.71', description: 'Plasmaferesi terapeutica (scambio plasmatico / PLEX)', system: 'CIPI' },
          { code: 'CIPI-96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'CIPI' },
          { code: 'CIPI-31.1', description: 'Tracheostomia percutanea temporanea', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '357.0', description: 'Polineuropatia infiammatoria acuta (Guillain-Barré)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '518.81', description: 'Insufficienza respiratoria acuta', system: 'ICD-9-CM' }, { code: '344.00', description: 'Tetraplegia non specificata', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.71', description: 'Plasmaferesi terapeutica', system: 'ICD-9-CM' }, { code: '96.72', description: 'Ventilazione meccanica per 96 ore o più', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G61.0 è la diagnosi eziologica principale di ricovero.',
        'La tetraplegia e l\'insufficienza respiratoria neurogena sono complicanze acute severe che giustificano il setting rianimatorio.',
        'La procedura CIPI 99.71 traccia formalmente i cicli di plasmaferesi terapeutica.'
      ],
      commonCognitiveErrors: [
        'Omettere la procedura di plasmaferesi CIPI 99.71.',
        'Codificare solo l\'insufficienza respiratoria tralasciando la causa neurologica periferica.'
      ],
      chartDocumentationAdvice: 'Indicare nel referto il numero complessivo di scambi plasmatici eseguiti e i volumi scambiati.'
    }
  },
  {
    id: 'icu-8',
    specialtyId: 'terapia_intensiva',
    caseNumber: 8,
    title: 'Arresto cardiaco extraospedaliero (OHCA) con controllo mirato della temperatura (TTM) post-rianimazione',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Rianimazione Post-Arresto',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 57 anni',
      admissionReason: 'Arresto cardiaco testimoniato da fibrillazione ventricolare extraospedaliera, rianimato con defibrillazione (ROSC ottenuto dopo 18 minuti).',
      anamnesis: 'Familiarità per morte cardiaca improvvisa, ipercolesterolemia.',
      hospitalCourse: 'Giunto in Terapia Intensiva intubato, in coma (GCS 3). Coronarografia urgente: occlusione trombotica acuta del ramo interventricolare anteriore trattata con angioplastica primaria e stent. All\'arrivo in ICU avviato protocollo di gestione post-arresto con controllo mirato della temperatura corporea (Targeted Temperature Management - TTM) mediante dispositivo endovascolare a circuito chiuso a 36.0 °C per 24 ore consecutive, seguito da riscaldamento controllato lento a 0.25 °C/ora per prevenzione del danno anossico neuronale secondario. Monitoraggio continuo elettroencefalografico (cEEG) per escludere stato epilettico non convulsivo. Svezzato dalla sedazione al 3° giorno con progressivo risveglio neurologico (GCS 15) senza deficit cognitivi focali.',
      proceduresConducted: 'Controllo mirato della temperatura corporea post-arresto (ipotermia / TTM) con catetere endovascolare dedicato, ventilazione meccanica continua per 72 ore, cEEG continuo.',
      dischargeStatus: 'Estubato al 4° giorno, trasferito in Cardiologia per impianto di defibrillatore cardiaco impiantabile (ICD).'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'arresto cardiaco rianimato ha il codice I46.2 (Arresto cardiaco con rianimazione riuscita). La procedura di gestione termica TTM va codificata con esattezza.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I46.2', description: 'Arresto cardiaco con rianimazione riuscita', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I21.09', description: 'Infarto miocardico acuto con sopraslivellamento del tratto ST (STEMI)', system: 'ICD-10-IM' },
          { code: 'G93.1', description: 'Danno cerebrale anossico (encefalopatia postanossica acuta)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.81', description: 'Controllo mirato della temperatura corporea post-rianimatoria (Ipotermia terapeutica controllata / TTM)', system: 'CIPI' },
          { code: 'CIPI-96.71', description: 'Ventilazione meccanica continua per meno di 96 ore consecutive', system: 'CIPI' },
          { code: 'CIPI-89.14', description: 'Elettroencefalogramma continuo (cEEG)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '427.5', description: 'Arresto cardiaco', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '410.11', description: 'Infarto miocardico acuto anteriore', system: 'ICD-9-CM' }, { code: '348.1', description: 'Danno cerebrale anossico', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.81', description: 'Ipotermia terapeutica', system: 'ICD-9-CM' }, { code: '96.71', description: 'Ventilazione meccanica per meno di 96 ore', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I46.2 specifica in modo univoco l\'avvenuta ripresa della circolazione spontanea (ROSC) a seguito di manovre rianimatorie salvavita.',
        'La procedura CIPI 99.81 per TTM valorizza l\'alta tecnologia applicata alla neuroprotezione post-arresto.'
      ],
      commonCognitiveErrors: [
        'Utilizzare I46.9 (arresto cardiaco non specificato) o I46.8 in luogo di I46.2 (arresto con rianimazione riuscita).',
        'Omettere la procedura di ipotermia terapeutica / TTM.'
      ],
      chartDocumentationAdvice: 'Riportare la durata del no-flow e del low-flow, il ritmo di presentazione all\'arresto (FV) e il target termico di TTM.'
    }
  },
  {
    id: 'icu-9',
    specialtyId: 'terapia_intensiva',
    caseNumber: 9,
    title: 'Polmonite associata a ventilazione meccanica (VAP) da Pseudomonas aeruginosa multiresistente con tracheostomia',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Infezioni Ospedaliere in ICU',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 71 anni',
      admissionReason: 'Insorgenza in 6a giornata di ventilazione invasiva di febbre elevata (39.2 °C), secrezioni tracheobronchiali purulente e peggioramento degli scambi gassosi.',
      anamnesis: 'Paziente ricoverato in ICU per politrauma toraco-addominale.',
      hospitalCourse: 'All\'8° giorno di degenza in Terapia Intensiva: comparsa di nuovo infiltrato flogistico radiologico lobare inferiore destro, PaO2/FiO2 caduto da 320 a 140 mmHg, leucocitosi neutrofila (WBC 21.500/mmc), procalcitonina 4.5 ng/mL. Eseguito lavaggio broncoalveolare (BAL): esame colturale quantitativo positivo per Pseudomonas aeruginosa (> 10^5 CFU/mL) resistente a carbapenemi e fluorochinoloni (MDR). Diagnosi di Ventilator-Associated Pneumonia (VAP). Avviata terapia antibiotica mirata con Ceftolozano-Tazobactam ed aerosol di Colistina. Eseguita tracheostomia percutanea dilatativa sec. Ciaglia per favorire la toilette bronchiale e lo svezzamento respiratorio protratto.',
      proceduresConducted: 'Lavaggio broncoalveolare diagnostico per BAL quantitativo, tracheostomia percutanea dilatativa a letto del paziente, ventilazione meccanica invasiva per 240 ore (> 96 ore).',
      dischargeStatus: 'Completato ciclo antibiotico con eradicazione della VAP, decannulato e trasferito in riabilitazione.'
    },
    documentationGapsWarning: 'In ICD-10-IM la VAP ha il codice dedicato e specifico J95.851 (Polmonite associata a ventilatore), con obbligo di codice addizionale per l\'organismo infettivo (B96.5 per Pseudomonas).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'J95.851', description: 'Polmonite associata a ventilatore (VAP)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'B96.5', description: 'Pseudomonas (aeruginosa) come causa di malattie classificate in altri capitoli', system: 'ICD-10-IM' },
          { code: 'Z16.24', description: 'Resistenza a molteplici antibiotici (MDR)', system: 'ICD-10-IM' },
          { code: 'J96.01', description: 'Insufficienza respiratoria acuta con ipossiemia', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-31.1', description: 'Tracheostomia temporanea / percutanea dilatativa', system: 'CIPI' },
          { code: 'CIPI-33.24', description: 'Broncoscopia a fibre ottiche con lavaggio broncoalveolare (BAL)', system: 'CIPI' },
          { code: 'CIPI-96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '997.31', description: 'Polmonite associata a ventilatore', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '041.7', description: 'Infezione da Pseudomonas', system: 'ICD-9-CM' }, { code: 'V09.81', description: 'Resistenza a molteplici farmaci', system: 'ICD-9-CM' }],
        procedures: [{ code: '31.1', description: 'Tracheostomia temporanea', system: 'ICD-9-CM' }, { code: '96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'La VAP insorta durante il ricovero è classificata sotto J95.851 nel capitolo delle complicanze postprocedurali e ventilatorie.',
        'La codifica dell\'agente batterico (B96.5) e del profilo di multiresistenza (Z16.24) è mandatoria per il debito informativo ministeriale NSIS.',
        'La tracheostomia e la broncoscopia operativa con BAL devono essere codificate con i rispettivi codici CIPI.'
      ],
      commonCognitiveErrors: [
        'Codificare una comune polmonite comunitaria J15.1 omettendo il codice nosocomiale di complicanza legata a ventilatore J95.851.',
        'Dimenticare di codificare il batterio isolato (B96.5) e la multiresistenza.'
      ],
      chartDocumentationAdvice: 'Attestare la carica microbica nel BAL (> 10^5 CFU/mL), l\'antibiogramma e il momento di insorgenza rispetto all\'intubazione (> 48 ore).'
    }
  },
  {
    id: 'icu-10',
    specialtyId: 'terapia_intensiva',
    caseNumber: 10,
    title: 'Insufficienza epatica acuta fulminante da paracetamolo con encefalopatia di grado IV ed edema cerebrale',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Epatologia Critica / Insufficienza Epatica',
    clinicalScenario: {
      patientAgeSex: 'Donna, 29 anni',
      admissionReason: 'Ingestione a scopo autolesivo di 25 grammi di paracetamolo 48 ore prima; comparsa di ittero rapido, ipoglicemia severa, coagulopatia e coma epatico.',
      anamnesis: 'Disturbo depressivo maggiore non in trattamento regolare.',
      hospitalCourse: 'In Terapia Intensiva: GCS 5, flaccidità muscolare, midriasi debolmente reattiva (encefalopatia epatica stadio IV sec. West Haven). Esami: AST 11.200 U/L, ALT 9.800 U/L, INR 6.8, bilirubina totale 14.2 mg/dL, ammoniemia 280 mcg/dL, lattati 7.2 mmol/L. Intubata e ventilata meccanicamente con lieve iperventilazione controllata per prevenzione del cono d\'urgenza. Avviata infusione di N-acetilcisteina (NAC) EV ad alte dosi e plasma fresco congelato. Monitoraggio continuo della PIC per alto rischio di erniazione da edema cerebrale citotossico. Segnalata per trapianto di fegato urgente secondo i criteri del King\'s College Hospital.',
      proceduresConducted: 'Intubazione orotracheale con ventilazione meccanica invasiva, monitoraggio della pressione intracranica, infusione continua di plasma fresco e antidoto NAC.',
      dischargeStatus: 'Trasferita in elisoccorso presso Centro Trapianti di Fegato Regionale in lista per trapianto epatico in urgenza zero.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'insufficienza epatica acuta con coma ha il codice K72.01, associato al codice di intossicazione intenzionale da paracetamolo (T39.1X2A).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K72.01', description: 'Insufficienza epatica acuta e subacuta con coma (Insufficienza epatica fulminante)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'T39.1X2A', description: 'Avvelenamento da derivati del 4-aminofenolo (Paracetamolo), autolesivo intenzionale, contatto iniziale', system: 'ICD-10-IM' },
          { code: 'G93.6', description: 'Edema cerebrale acuto', system: 'ICD-10-IM' },
          { code: 'D68.4', description: 'Carenza acquisita di fattori della coagulazione da epatopatia', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-96.71', description: 'Ventilazione meccanica continua per meno di 96 ore', system: 'CIPI' },
          { code: 'CIPI-01.16', description: 'Monitoraggio della pressione intracranica (PIC)', system: 'CIPI' },
          { code: 'CIPI-99.07', description: 'Trasfusione di plasma fresco congelato', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '570', description: 'Necrosi epatica acuta e subacuta', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '965.4', description: 'Avvelenamento da analgesici aromatici (Paracetamolo)', system: 'ICD-9-CM' }, { code: 'E950.0', description: 'Suicidio e lesione autoinflitta con analgesici', system: 'ICD-9-CM' }],
        procedures: [{ code: '96.71', description: 'Ventilazione meccanica', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K72.01 specifica la gravità estrema dell\'insufficienza epatica fulminante con coma.',
        'La causa tossica con intenzione suicidaria deve essere codificata con T39.1X2A.',
        'Il deficit coagulativo e l\'edema cerebrale sono manifestazioni d\'organo conclamate ad alto consumo di risorse.'
      ],
      commonCognitiveErrors: [
        'Utilizzare K72.90 (insufficienza epatica non specificata senza coma) ignorando lo stadio IV con GCS 5.',
        'Omettere la natura intenzionale dell\'avvelenamento da paracetamolo.'
      ],
      chartDocumentationAdvice: 'Riportare l\'aderenza ai criteri del King\'s College per il trapianto e i dosaggi seriati di paracetamolo ed ammoniaca.'
    }
  },
  {
    id: 'icu-11',
    specialtyId: 'terapia_intensiva',
    caseNumber: 11,
    title: 'Shock anafilattico perioperatorio refrattario da bloccanti neuromuscolari durante induzione anestesiologica',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Complicanze Anestesiologiche / Shock',
    clinicalScenario: {
      patientAgeSex: 'Donna, 42 anni',
      admissionReason: 'Collasso cardiocircolatorio improvviso con arresto transitorio e broncospasmo serrato insorto 90 secondi dopo induzione anestesiologica con Rocuronio.',
      anamnesis: 'Candidata ad isterectomia laparoscopica per fibromatosi uterina; non allergie note dichiarate.',
      hospitalCourse: 'Subito dopo la somministrazione di Propofol, Fentanil e Rocuronio: improvviso crollo della PA a valori non misurabili, broncospasmo asfittico con picco di pressione nelle vie aeree > 45 cmH2O, tachicardia a 150 bpm e comparsa di rash eritematoso flushing total body. Sospeso l\'intervento chirurgico. Trattamento immediato secondo protocollo per anafilassi perioperatoria di grado IV: adrenalina EV in boli ripetuti (totale 1.5 mg) seguita da infusione continua, somministrazione rapida di Sugammadex ad alte dosi (16 mg/kg) per rapido legame e neutralizzazione del bloccante neuromuscolare, espansione con cristalloidi (3 litri). Trasferita d\'urgenza in Terapia Intensiva con supporto con noradrenalina e ventilazione meccanica per 36 ore. Dosaggio triptasi sierica a 1 ora marcatamente aumentato (85 mcg/L).',
      proceduresConducted: 'Rianimazione farmacologica per shock anafilattico da anestesia, somministrazione di Sugammadex ad alto dosaggio, ventilazione invasiva continua, monitoraggio cruento.',
      dischargeStatus: 'Estubata in 2a giornata con normalizzazione emodinamica, inviata ad allergologia specialistica con cartellino di allerta per curari.'
    },
    documentationGapsWarning: 'In ICD-10-IM lo shock anafilattico da anestesia ha il codice T88.6XXA (Shock anafilattico da effetto avverso di farmaco prescritto somministrato correttamente) con 7° carattere A.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'T88.6XXA', description: 'Shock anafilattico da effetto avverso di farmaco correttamente somministrato (Anestetico/Curaro), contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'T48.1X5A', description: 'Effetto avverso di miorilassanti muscolari scheletrici (Curari), contatto iniziale', system: 'ICD-10-IM' },
          { code: 'D25.9', description: 'Leiomioma dell\'utero non specificato (motivo originario del ricovero chirurgico)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.29', description: 'Somministrazione endovenosa di antidoto specifico / Sugammadex ad alte dosi', system: 'CIPI' },
          { code: 'CIPI-96.71', description: 'Ventilazione meccanica continua per meno di 96 ore', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '995.0', description: 'Altra reazione anafilattica', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: 'E938.1', description: 'Effetto avverso di agenti bloccanti della giunzione neuromuscolare', system: 'ICD-9-CM' }],
        procedures: [{ code: '96.71', description: 'Ventilazione meccanica per meno di 96 ore', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'T88.6XXA è il codice specifico per lo shock anafilattico insorto come reazione avversa in ambito perioperatorio o farmacoterapico.',
        'La codifica della patologia ginecologica originaria (D25.9) testimonia il motivo dell\'ammissione chirurgica poi interrotta.'
      ],
      commonCognitiveErrors: [
        'Codificare T78.2 (shock anafilattico non specificato) omettendo la specifica complicanza dell\'anestesia T88.6.',
        'Dimenticare di inserire il dosaggio della triptasi sierica come validazione biologica dell\'evento.'
      ],
      chartDocumentationAdvice: 'Registrare il valore basale e di picco della triptasi sierica, l\'agente sospetto e la dose di Sugammadex somministrata.'
    }
  },
  {
    id: 'icu-12',
    specialtyId: 'terapia_intensiva',
    caseNumber: 12,
    title: 'Tamponamento cardiaco acuto post-cardiochirurgia drenato d\'urgenza con pericardiocentesi a letto del paziente',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Terapia Intensiva Cardiochirurgica',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 72 anni',
      admissionReason: 'Insorgenza improvvisa al 2° giorno post-intervento di bypass aortocoronarico di ipotensione profonda, turgore delle giugulari e crollo della portata dei drenaggi toracici.',
      anamnesis: 'Sottoposto 48 ore prima a triplice bypass aortocoronarico.',
      hospitalCourse: 'In Terapia Intensiva Cardiochirurgica: crollo della PA a 65/40 mmHg, FC 125 bpm, polso paradosso evidente (caduta > 15 mmHg della sistolica in inspirazione). Monitoraggio emodinamico: pareggiamento delle pressioni intracavitarie (diastolica di atrio destro, ventricolo destro e cuneo capillare polmonare sovrapposte a 20 mmHg). Ecocardiogramma transtoracico immediato bedside: collasso diastolico della parete libera del ventricolo destro e dell\'atrio destro da voluminoso versamento pericardico ematico posteriore ed apicale con effetto tamponamento. Eseguita pericardiocentesi percutanea subxifoidea d\'urgenza sotto guida ecografica con drenaggio immediato di 450 mL di liquido ematico e coaguli, seguito da riapertura parziale ed esplorazione chirurgica dell\'emostasi.',
      proceduresConducted: 'Pericardiocentesi percutanea subxifoidea d\'urgenza sotto guida ecografica, riapertura di toracotomia/sternotomia per emostasi, monitoraggio emodinamico cruento.',
      dischargeStatus: 'Risoluzione dello shock cardiogeno ostruttivo e trasferimento in degenza ordinaria al 6° giorno.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'emopericardio/tamponamento postoperatorio ha il codice I97.89 associato a I31.4 (Tamponamento cardiaco).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I31.4', description: 'Tamponamento cardiaco', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I97.89', description: 'Altri disturbi postprocedurali dell\'apparato circolatorio conseguenti ad intervento', system: 'ICD-10-IM' },
          { code: 'I25.10', description: 'Cardiopatia ischemica aterosclerotica', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-37.0', description: 'Pericardiocentesi diagnostica o terapeutica', system: 'CIPI' },
          { code: 'CIPI-37.49', description: 'Altra revisione e riparazione del cuore e pericardio per emostasi', system: 'CIPI' },
          { code: 'CIPI-88.72', description: 'Ecocardiografia bedside diagnostica', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '423.3', description: 'Tamponamento cardiaco', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '997.1', description: 'Complicanze cardiache postoperatorie', system: 'ICD-9-CM' }],
        procedures: [{ code: '37.0', description: 'Pericardiocentesi', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'Il tamponamento cardiaco acuto (I31.4) costituisce la complicanza acuta a rischio vita primario.',
        'La procedura CIPI 37.0 di pericardiocentesi tempestiva deve essere codificata per rispecchiare l\'intervento salvavita.'
      ],
      commonCognitiveErrors: [
        'Codificare generico versamento pericardico (I31.3) senza menzione di tamponamento cardiaco.',
        'Omettere la procedura di pericardiocentesi.'
      ],
      chartDocumentationAdvice: 'Indicare il volume di sangue evacuato con la pericardiocentesi e il ripristino immediato della gittata cardiaca.'
    }
  },
  {
    id: 'icu-13',
    specialtyId: 'terapia_intensiva',
    caseNumber: 13,
    title: 'Ustione termica di III grado estesa al 45% della superficie corporea con danno inalatorio da fumi',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Terapia Intensiva Grandi Ustionati',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 35 anni',
      admissionReason: 'Intrappolamento in ambiente chiuso durante incendio industriale, ustioni a tutto spessore e inalazione di fumi tossici caldi.',
      anamnesis: 'Paziente sano in età lavorativa.',
      hospitalCourse: 'Intubato precocemente sul posto per stridore e fuliggine nelle narici e nel cavo orale. In Centro Grandi Ustionati / Terapia Intensiva: ustioni di III grado a tutto spessore interessanti tronco anteriore e posteriore, arti superiori bilateralmente (TBSA calcolata 45%). Broncoscopia urgente: edema mucoso laringo-tracheale con depositi fuligginosi e necrosi mucosa superficiale (danno da inalazione di fumi). Applicazione della formula di Parkland guidata per rianimazione volemica con Ringer Lattato (oltre 14 litri nelle prime 24 ore con monitoraggio diuresi oraria target 0.5-1 mL/kg/h). Eseguite escarotomie decompressive toraciche ed agli arti superiori per prevenzione della sindrome compartimentale e della restrizione toracica.',
      proceduresConducted: 'Broncoscopia a fibre ottiche con toilet bronchiale per fumi tossici, escarotomia decompressiva toracica ed agli arti, ventilazione meccanica invasiva continua per 168 ore, posizionamento linea arteriosa e CVC.',
      dischargeStatus: 'Stabilizzato emodinamicamente ed avviato a sedute programmate di escarectomia precoce e innesti cutanei.'
    },
    documentationGapsWarning: 'In ICD-10-IM la codifica delle grandi ustioni richiede il codice di percentuale TBSA (T31.44 per ustioni al 40-49% con 40-49% di terzo grado), il codice di lesione da inalazione (T59.811A) e le sedi anatomiche con 7° carattere A.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'T31.44', description: 'Ustioni interessanti dal 40 al 49% della superficie corporea, con ustioni di terzo grado del 40-49%', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'T21.31XA', description: 'Ustione di terzo grado della parete toracica anteriore, contatto iniziale', system: 'ICD-10-IM' },
          { code: 'T22.30XA', description: 'Ustione di terzo grado degli arti superiori, contatto iniziale', system: 'ICD-10-IM' },
          { code: 'T59.811A', description: 'Effetto tossico del fumo di incendio, accidentale, contatto iniziale (Danno da inalazione)', system: 'ICD-10-IM' },
          { code: 'X00.0XXA', description: 'Esposizione a fuoco non controllato in edificio o struttura, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-86.09', description: 'Incisione decompressiva di tessuto cutaneo / Escarotomia', system: 'CIPI' },
          { code: 'CIPI-96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'CIPI' },
          { code: 'CIPI-33.22', description: 'Broncoscopia diagnostica con rimozione di materiale fuligginoso', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '948.44', description: 'Ustioni del 40-49% della superficie corporea con terzo grado del 40-49%', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '942.32', description: 'Ustione della parete toracica a tutto spessore', system: 'ICD-9-CM' }, { code: '987.9', description: 'Effetto tossico di gas e fumi', system: 'ICD-9-CM' }],
        procedures: [{ code: '86.09', description: 'Altra incisione della cute (escarotomia)', system: 'ICD-9-CM' }, { code: '96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'La categoria T31 è mandatoria per tutte le ustioni estese e guida la corretta allocazione del DRG ustionati.',
        'La lesione da inalazione da fumo (T59.811A) è un forte predittore di mortalità che deve essere codificato.',
        'La procedura chirurgica di escarotomia (CIPI 86.09) per prevenzione della sindrome compartimentale è vitale.'
      ],
      commonCognitiveErrors: [
        'Omettere la categoria T31 basandosi solo sulle singole sedi anatomiche, alterando l\'indicizzazione di complessità.',
        'Trascurare il codice di danno da inalazione di fumi.'
      ],
      chartDocumentationAdvice: 'Riportare la scheda con la regola dei 9 di Wallace o la tavola di Lund-Browder e i volumi orari di Parkland.'
    }
  },
  {
    id: 'icu-14',
    specialtyId: 'terapia_intensiva',
    caseNumber: 14,
    title: 'Ipertermia maligna intraoperatoria da alotano/succinilcolina trattata con successo con Dantrolene sodico EV',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Complicanze Anestesiologiche Gravi',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 24 anni',
      admissionReason: 'Crisi fulminante di ipertermia maligna con ipercapnia refrattaria, rigidità muscolare serrata del massetere e tachiaritmia dopo induzione con succinilcolina e mantenimento con sevoflurano.',
      anamnesis: 'Intervento programmato di riduzione e sintesi di frattura mandibolare; familiarità non nota.',
      hospitalCourse: 'Poco dopo l\'inizio dell\'intervento: improvvisa ed estrema ascesa della EtCO2 a valori > 80 mmHg nonostante iperventilazione raddoppiata, tachicardia a 160 bpm, cianosi screziata ed aumento vertiginoso della temperatura corporea centrale fino a 41.8 °C. Comparsa di marcata rigidità corporea diffusa. Diagnosi clinica immediata di Ipertermia Maligna. Azioni immediate: interruzione istantanea del sevoflurano, cambio del circuito ventilatorio con ventilazione al 100% di O2 ad alti flussi, somministrazione immediata di Dantrolene sodico EV in bolo (2.5 mg/kg ripetuto fino a dose cumulativa di 10 mg/kg), raffreddamento attivo sistemico con liquidi freddi EV, ghiaccio alle pieghe e lavaggio gastrico freddo. Trasferito in Terapia Intensiva con monitoraggio continuo per 48 ore per rischio di recrudescenza, correzione dell\'acidosi metabolica e gestione della rabdomiolisi con diuresi forzata.',
      proceduresConducted: 'Somministrazione endovenosa d\'urgenza di Dantrolene sodico, raffreddamento corporeo attivo terapeutico, ventilazione meccanica invasiva, monitoraggio continuo temperatura centrale.',
      dischargeStatus: 'Dimesso al 6° giorno con normalizzazione delle CPK, prescritto test genetico RYR1 e cartellino di allerta anafilassi/ipertermia.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'ipertermia maligna da anestesia ha il codice univoco T88.3XXA (Ipertermia maligna da anestesia) con il 7° carattere A.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'T88.3XXA', description: 'Ipertermia maligna da anestesia, contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'M62.82', description: 'Rabdomiolisi acuta conseguente ad ipertermia maligna', system: 'ICD-10-IM' },
          { code: 'E87.2', description: 'Acidosi metabolica severa', system: 'ICD-10-IM' },
          { code: 'S02.600A', description: 'Frattura della mandibola, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.29', description: 'Somministrazione parenterale endovenosa di Dantrolene sodico', system: 'CIPI' },
          { code: 'CIPI-99.85', description: 'Trattamento terapeutico di raffreddamento corporeo attivo', system: 'CIPI' },
          { code: 'CIPI-96.71', description: 'Ventilazione meccanica continua per meno di 96 ore', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '995.86', description: 'Ipertermia maligna', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '728.88', description: 'Rabdomiolisi', system: 'ICD-9-CM' }, { code: '802.20', description: 'Frattura della mandibola chiusa', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.29', description: 'Iniezione di farmaco', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'T88.3XXA è il codice specifico per la sindrome farmacogenetica dell\'ipertermia maligna.',
        'La rabdomiolisi conclamata e l\'acidosi metabolica sono complicanze maggiori direttamente correlate.',
        'L\'infusione di Dantrolene salvavita deve essere tracciata nella procedura farmacologica CIPI.'
      ],
      commonCognitiveErrors: [
        'Confondere l\'ipertermia maligna con un comune colpo di calore (T67.0) o febbre postoperatoria non specificata.',
        'Omettere la codifica della rabdomiolisi associata (M62.82).'
      ],
      chartDocumentationAdvice: 'Attestare nel verbale anestesiologico il picco di EtCO2, la dose totale di Dantrolene infusa e il test genetico consigliato ai familiari.'
    }
  },
  {
    id: 'icu-15',
    specialtyId: 'terapia_intensiva',
    caseNumber: 15,
    title: 'Emorragia massiva post-partum con shock emorragico e coagulopatia da consumo (CID) gestita con protocollo di trasfusione massiva',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Terapia Intensiva Ostetrica / Coagulopatia Critica',
    clinicalScenario: {
      patientAgeSex: 'Donna, 33 anni',
      admissionReason: 'Emorragia massiva post-partum (> 2.500 mL di perdite ematiche) refrattaria a uterotonici dopo parto cesareo complicato da atonia uterina e placenta accreta.',
      anamnesis: 'Secondigravida, pregresso cesareo.',
      hospitalCourse: 'Trasferita in Terapia Intensiva dopo isterectomia subtotale d\'urgenza in sala parto. In ICU: shock emorragico profondo con ipotermia (34.8 °C), acidosi (pH 7.12) e coagulopatia severa (la cosiddetta "triade letale"): INR > 3.5, fibrinogeno indosabile (< 60 mg/dL), piastrine 35.000/mmc, sanguinamento a nappo diffuso dai drenaggi e dai punti di sutura. Attivato il Protocollo di Trasfusione Massiva (MTP) in ratio 1:1:1 guidato da tromboelastometria rotazionale (ROTEM): trasfuse complessivamente 8 sacche di emazie concentrate, 8 unità di plasma fresco congelato, 2 pool piastrinici, 4 grammi di fibrinogeno concentrato e acido tranexamico. Correzione dell\'acidosi e riscaldamento corporeo attivo. Emostasi chirurgica consolidata.',
      proceduresConducted: 'Protocollo di trasfusione massiva con somministrazione di emazie, plasma e piastrine, infusione di concentrato di fibrinogeno, monitoraggio continuo viscoelasticità ematica (ROTEM), ventilazione meccanica continua.',
      dischargeStatus: 'Estubata in 3a giornata con parametri emocoagulativi normalizzati (Hb 9.8 g/dL, fibrinogeno 280 mg/dL) e trasferita in reparto ostetrico.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'emorragia post-partum da atonia uterina ha il codice O72.1. La coagulazione intravascolare disseminata (CID) secondaria acuta va codificata con D65.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'O72.1', description: 'Altra emorragia post-partum immediata (Atonia uterina post-partum)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'D65', description: 'Coagulazione intravascolare disseminata (CID acuta da consumo)', system: 'ICD-10-IM', notes: 'MCC critico.' },
          { code: 'R57.1', description: 'Shock ipovolemico / emorragico', system: 'ICD-10-IM' },
          { code: 'O43.213', description: 'Placenta accreta', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.04', description: 'Trasfusione di globuli rossi concentrati', system: 'CIPI' },
          { code: 'CIPI-99.07', description: 'Trasfusione di plasma fresco congelato', system: 'CIPI' },
          { code: 'CIPI-99.05', description: 'Trasfusione di piastrine', system: 'CIPI' },
          { code: 'CIPI-99.06', description: 'Infusione di fattori della coagulazione (concentrato di fibrinogeno)', system: 'CIPI' },
          { code: 'CIPI-96.71', description: 'Ventilazione meccanica continua per meno di 96 ore', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '666.12', description: 'Altra emorragia post-partum immediata', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '286.6', description: 'Coagulazione intravasale disseminata', system: 'ICD-9-CM' }, { code: '785.59', description: 'Altro shock senza menzione di trauma', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.04', description: 'Trasfusione di emazie', system: 'ICD-9-CM' }, { code: '99.07', description: 'Trasfusione di plasma', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'O72.1 è la diagnosi principale ostetrica causale.',
        'La CID (D65) e lo shock emorragico (R57.1) sono complicanze ad altissimo consumo di emocomponenti e complessità clinica.',
        'Ciascuna classe di emoderivati trasfusa (emazie, plasma, piastrine, concentrato di fibrinogeno) deve possedere la propria codifica di procedura CIPI.'
      ],
      commonCognitiveErrors: [
        'Omettere la CID (D65) ritenendola ovvia in un contesto di shock emorragico.',
        'Non codificare tutte le componenti del protocollo trasfusionale massivo.'
      ],
      chartDocumentationAdvice: 'Attestare il volume totale stimato dell\'emorragia (> 2.500 mL), i parametri ROTEM (FIBTEM/EXTEM) e il numero preciso di unità trasfuse.'
    }
  },
  {
    id: 'icu-16',
    specialtyId: 'terapia_intensiva',
    caseNumber: 16,
    title: 'Stato epilettico convulsivo refrattario trattato con anestesia generale continua e monitoraggio cEEG in ICU',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Neuro-Rianimazione',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 50 anni',
      admissionReason: 'Crisi convulsive generalizzate tonico-cloniche subentranti senza ripresa di coscienza tra una crisi e la successiva, refrattarie a benzodiazepine e levetiracetam.',
      anamnesis: 'Epilessia post-traumatica nota in terapia farmacologica combinata.',
      hospitalCourse: 'In PS: somministrati Lorazepam EV e carico di Levetiracetam (60 mg/kg) e Lacosamide senza interruzione dell\'attività convulsiva clinica ed elettroencefalografica (durata > 45 minuti). Trasferito in Terapia Intensiva con diagnosi di Stato Epilettico Refrattario. Eseguita intubazione orotracheale ed avviata anestesia generale con infusione continua di Midazolam e Propofol titolata sotto monitoraggio elettroencefalografico continuo (cEEG) fino all\'ottenimento di un pattern di "burst-suppression" (soppressione di scariche per > 80% del tracciato). Mantenimento del burst-suppression per 36 ore con successivo alleggerimento graduale della sedazione in assenza di recidive critiche elettrocliniche.',
      proceduresConducted: 'Monitoraggio elettroencefalografico continuo (cEEG), ventilazione meccanica invasiva continua per 84 ore, posizionamento linea arteriosa e CVC.',
      dischargeStatus: 'Estubato con successo al 5° giorno con paziente cosciente ed orientato, terapia antiepilettica orale ottimizzata.'
    },
    documentationGapsWarning: 'In ICD-10-IM lo stato di male epilettico refrattario ha il codice G40.901 (Stato epilettico non specificato con crisi refrattarie).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G40.901', description: 'Epilessia non specificata, refrattaria, con stato di male epilettico', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R40.20', description: 'Coma non specificato / perdita prolungata di coscienza', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-89.14', description: 'Elettroencefalogramma continuo (cEEG) per monitoraggio di stato epilettico', system: 'CIPI' },
          { code: 'CIPI-96.71', description: 'Ventilazione meccanica continua per meno di 96 ore', system: 'CIPI' },
          { code: 'CIPI-99.29', description: 'Infusione continua di farmaci anestetici generali per neuroprotezione', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '345.3', description: 'Stato di grande male', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '780.01', description: 'Coma', system: 'ICD-9-CM' }],
        procedures: [{ code: '89.14', description: 'Elettroencefalogramma continuo', system: 'ICD-9-CM' }, { code: '96.71', description: 'Ventilazione meccanica', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM incorpora nel 6° carattere la condizione di farmaco-resistenza / refrattarietà dello stato epilettico.',
        'La procedura CIPI 89.14 per cEEG continuo è il caposaldo per la gestione e la titolazione del burst-suppression in ICU.'
      ],
      commonCognitiveErrors: [
        'Codificare una semplice crisi convulsiva isolata R56.9 anziché lo stato di male epilettico G40.',
        'Omettere il codice CIPI del cEEG continuativo.'
      ],
      chartDocumentationAdvice: 'Registrare la durata complessiva dello stato di male, il raggiungimento del burst-suppression al cEEG e le molecole anestetiche utilizzate.'
    }
  },
  {
    id: 'icu-17',
    specialtyId: 'terapia_intensiva',
    caseNumber: 17,
    title: 'Crisi miastenica acuta con paralisi della deglutizione e insufficienza respiratoria trattata con IVIG',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Neuro-Rianimazione',
    clinicalScenario: {
      patientAgeSex: 'Donna, 44 anni',
      admissionReason: 'Peggioramento ingravescente di ptosi palpebrale bilaterale, disfagia totale per liquidi e solidi e grave dispnea a riposo con respiro paradosso.',
      anamnesis: 'Miastenia grave con anticorpi anti-AChR positivi, recente infezione delle vie aeree superiori trattata con macrolidi.',
      hospitalCourse: 'In Terapia Intensiva: esaurimento rapido della muscolatura respiratoria, tosse inefficace, ritenzione massiva di secrezioni, ipossiemia con ipercapnia (PaCO2 62 mmHg). Intubata d\'urgenza e ventilata in modalità assistita-controllata. Diagnosi di Crisi Miastenica scatenata da antibiotico non indicato. Avviato ciclo di Immunoglobuline endovena ad alte dosi (IVIG a 2 g/kg suddivisi in 5 giorni) con sospensione temporanea dei piridostigmina per evitare crisi colinergica. Progressivo recupero della forza muscolare diaframmatica ed estubazione al 6° giorno con successo dopo passaggio del test di respiro spontaneo (SBT).',
      proceduresConducted: 'Infusione endovenosa ad alte dosi di immunoglobuline umane normali (IVIG), ventilazione meccanica invasiva per 120 ore (> 96 ore), emogasanalisi seriali.',
      dischargeStatus: 'Trasferita in Neurologia con capacità deglutitoria ripristinata e piano steroideo/immunosoppressivo aggiornato.'
    },
    documentationGapsWarning: 'In ICD-10-IM la miastenia gravis con esacerbazione/crisi acuta ha il codice dedicato G70.01.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G70.01', description: 'Miastenia gravis con esacerbazione (acuta) (Crisi miastenica)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'J96.02', description: 'Insufficienza respiratoria acuta con ipercapnia', system: 'ICD-10-IM' },
          { code: 'R13.10', description: 'Disfagia non specificata', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.14', description: 'Iniezione o infusione di immunoglobuline umane normali per via endovenosa (IVIG)', system: 'CIPI' },
          { code: 'CIPI-96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '358.01', description: 'Miastenia gravis con esacerbazione acuta', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '518.81', description: 'Insufficienza respiratoria acuta', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.14', description: 'Iniezione di immunoglobuline', system: 'ICD-9-CM' }, { code: '96.72', description: 'Ventilazione meccanica per 96 ore o più', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G70.01 identifica inequivocabilmente la crisi miastenica acuta come causa principale.',
        'La somministrazione delle IVIG salvavita deve essere codificata con la procedura CIPI 99.14.'
      ],
      commonCognitiveErrors: [
        'Assegnare G70.00 (miastenia senza esacerbazione) a una paziente intubata per paralisi respiratoria miastenica.',
        'Omettere la procedura di somministrazione delle IVIG ad alte dosi.'
      ],
      chartDocumentationAdvice: 'Attestare la dose totale di IVIG (g/kg), i valori di PaCO2 prima dell\'intubazione e la capacità vitale registrata.'
    }
  },
  {
    id: 'icu-18',
    specialtyId: 'terapia_intensiva',
    caseNumber: 18,
    title: 'Intossicazione acuta da antidepressivi triciclici (Amitriptilina) con shock cardiogeno e tachicardia ventricolare',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Tossicologia Critica in ICU',
    clinicalScenario: {
      patientAgeSex: 'Donna, 37 anni',
      admissionReason: 'Ingestione volontaria massiva di 50 compresse di Amitriptilina (totale 2.500 mg); rinvenuta in coma con convulsioni e shock.',
      anamnesis: 'Depressione resistente, tentato suicidio 2 anni prima.',
      hospitalCourse: 'In Terapia Intensiva: GCS 4, midriasi areattiva, PA 60/30 mmHg, FC 150 bpm. ECG: allargamento mostruoso del QRS a 180 ms con deviazione assiale destra dell\'onda R terminale in aVR (segno tipico di blocco dei canali del sodio da triciclici). Durante il monitoraggio comparsa di tachicardia ventricolare monomorfa sostenuta senza polso trattata con defibrillazione elettrica e ripresa del ritmo. Eseguita intubazione e ventilazione invasiva. Avviata tempestivamente infusione endovenosa di Bicarbonato di Sodio 8.4% in boli ripetuti per alcalinizzazione sistemica rapida (target pH 7.50-7.55) ed emulsione lipidica al 20% (Lipid Rescue Therapy) per neutralizzazione della tossina lipofila. Progressivo restringimento del QRS < 100 ms entro 18 ore e recupero emodinamico.',
      proceduresConducted: 'Cardioversione/defibrillazione elettrica per tachicardia ventricolare, infusione rapida di bicarbonato ed emulsione lipidica, ventilazione meccanica continua.',
      dischargeStatus: 'Estubata in 3a giornata, stabilizzata dal punto di vista cardiologico e trasferita in SPDC psichiatrico protetto.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'avvelenamento autolesivo intenzionale da antidepressivi triciclici ha il codice T43.012A, associato a I47.2 (Tachicardia ventricolare).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'T43.012A', description: 'Avvelenamento da antidepressivi triciclici, autolesivo intenzionale, contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I47.2', description: 'Tachicardia ventricolare', system: 'ICD-10-IM', notes: 'Grave complicanza aritmica aritmogena.' },
          { code: 'R57.0', description: 'Shock cardiogeno', system: 'ICD-10-IM' },
          { code: 'F33.2', description: 'Disturbo depressivo maggiore ricorrente grave', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.62', description: 'Defibrillazione elettrica del cuore', system: 'CIPI' },
          { code: 'CIPI-96.71', description: 'Ventilazione meccanica continua per meno di 96 ore', system: 'CIPI' },
          { code: 'CIPI-99.29', description: 'Infusione endovenosa di sostanza terapeutica / Emulsione lipidica ad alte dosi', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '969.05', description: 'Avvelenamento da antidepressivi triciclici', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '427.1', description: 'Tachicardia parossistica ventricolare', system: 'ICD-9-CM' }, { code: 'E950.3', description: 'Suicidio e lesione autoinflitta con farmaci psicotropi', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.62', description: 'Altra cardioversione da scossa elettrica', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'T43.012A combina la natura chimica della sostanza (triciclici), l\'intenzionalità autolesiva (2) e l\'episodio di cura iniziale (A).',
        'La tachicardia ventricolare e lo shock costituiscono complicanze d\'organo maggiori da codificare come secondarie.'
      ],
      commonCognitiveErrors: [
        'Attribuire la diagnosi principale al disturbo psichiatrico ignorando l\'avvelenamento organico in pericolo di vita.',
        'Omettere la defibrillazione elettrica erogata.'
      ],
      chartDocumentationAdvice: 'Attestare la larghezza del QRS in millisecondi prima e dopo bicarbonato e i tracciati ECG della tachicardia ventricolare.'
    }
  },
  {
    id: 'icu-19',
    specialtyId: 'terapia_intensiva',
    caseNumber: 19,
    title: 'Embolia polmonare massiva con arresto cardiaco intra-ICU trattata con trombolisi sistemica e supporto con noradrenalina',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Terapia Intensiva Cardiorespiratoria / Shock Ostruttivo',
    clinicalScenario: {
      patientAgeSex: 'Donna, 68 anni',
      admissionReason: 'Improvviso collasso cardiocircolatorio post-operatorio con dissociazione elettromeccanica (PEA) dopo intervento di artroprotesi d\'anca.',
      anamnesis: 'Obesità classe II, pregressa TVP.',
      hospitalCourse: 'Trasferita d\'urgenza in Terapia Intensiva durante RCP in corso. Eseguito ecocardiogramma bedside durante le pause del massaggio: massiva dilatazione ventricolare destra con cinesi paradossa del setto e collasso del ventricolo sinistro. Diagnosi immediata di Embolia Polmonare Massiva con shock ostruttivo. Somministrata trombolisi sistemica d\'urgenza con Alteplase (rtPA 50 mg in bolo rapido seguito da 50 mg in 2 ore) durante le manovre di supporto vitale avanzato (ACLS). Ripresa della circolazione spontanea (ROSC) dopo 12 minuti. In Terapia Intensiva: supporto emodinamico con Noradrenalina e Dobutamina, ventilazione protettiva, progressiva riduzione delle resistenze vascolari polmonari e regressione del sovraccarico ventricolare destro.',
      proceduresConducted: 'Rianimazione cardiopolmonare avanzata (ACLS), somministrazione endovenosa di agente trombolitico sistemico (rtPA), ventilazione meccanica continua per 60 ore, ecocardiografia transtoracica bedside.',
      dischargeStatus: 'Estubata al 4° giorno con paziente lucida, non deficit neurologici focali, avviata ad anticoagulazione a lungo termine.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'embolia polmonare massiva con cuore polmonare acuto ha il codice dedicato I26.02, con codice addizionale per l\'arresto cardiaco rianimato (I46.2).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I26.02', description: 'Embolia polmonare con cuore polmonare acuto (Massiva con shock)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I46.2', description: 'Arresto cardiaco con rianimazione riuscita', system: 'ICD-10-IM' },
          { code: 'R57.0', description: 'Shock cardiogeno / ostruttivo', system: 'ICD-10-IM' },
          { code: 'T81.718A', description: 'Complicanza vascolare conseguente a procedura chirurgica, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.10', description: 'Iniezione o infusione di agente trombolitico (rtPA / Alteplase)', system: 'CIPI' },
          { code: 'CIPI-99.60', description: 'Rianimazione cardiopolmonare avanzata (ACLS / Massaggio cardiaco esterno)', system: 'CIPI' },
          { code: 'CIPI-96.71', description: 'Ventilazione meccanica continua per meno di 96 ore', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '415.11', description: 'Embolia polmonare ed infarto polmonare iatrogeni', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '427.5', description: 'Arresto cardiaco', system: 'ICD-9-CM' }, { code: '415.0', description: 'Cuore polmonare acuto', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.10', description: 'Iniezione di agente trombolitico', system: 'ICD-9-CM' }, { code: '99.60', description: 'Rianimazione cardiopolmonare', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I26.02 include tassativamente la presenza di cuore polmonare acuto causato dal massivo ostacolo embolico al flusso arterioso polmonare.',
        'La trombolisi sistemica salvavita (CIPI 99.10) è la procedura fondamentale da tracciare per la corretta attribuzione del caso ad alta complessità.'
      ],
      commonCognitiveErrors: [
        'Utilizzare I26.92 (senza cuore polmonare acuto) per un quadro di shock ostruttivo manifesto con arresto cardiaco in PEA.',
        'Dimenticare di codificare la trombolisi endovenosa.'
      ],
      chartDocumentationAdvice: 'Riportare i riscontri ecocardiografici di sovraccarico atrio-ventricolare destro e il dosaggio esatto di fibrinolitico somministrato.'
    }
  },
  {
    id: 'icu-20',
    specialtyId: 'terapia_intensiva',
    caseNumber: 20,
    title: 'Polineuropatia e miopatia del paziente critico (ICU-AW) con fallimento dello svezzamento respiratorio',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Complicanze Prolungate di Terapia Intensiva',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 73 anni',
      admissionReason: 'Impossibilità allo svezzamento dalla ventilazione meccanica al 18° giorno post-shock settico polmonare con debolezza muscolare quadriparetica flaccida.',
      anamnesis: 'Pregresso shock settico con MOF trattato con prolungata curarizzazione, cortisonici ad alte dosi e ventilazione invasiva.',
      hospitalCourse: 'Paziente sveglio e collaborante (RASS 0), ma con impossibilità a compiere movimenti contro gravità ai quattro arti (MRC score 24/60, tipica ICU-Acquired Weakness). Tentativi ripetuti di svezzamento respiratorio falliti per rapido respiro rapido e superficiale con caduta del volume corrente e desaturazione. Elettromiografia bedside: evidenza di polineuropatia assonale sensitivo-motoria associata a miopatia da disuso e cortisonici (Critical Illness Polyneuropathy and Myopathy - CIPNM). Avviato programma intensivo di riabilitazione neuromuscolare a letto del paziente con cicloergometro passivo/attivo e stimolazione elettrica funzionale (FES), congiuntamente a svezzamento respiratorio graduale tramite tracheostomia.',
      proceduresConducted: 'Elettromiografia e studi di conduzione nervosa bedside, riabilitazione motoria e respiratoria intensiva precoce in ICU, gestione di tracheostomia.',
      dischargeStatus: 'Svezzato completamente dalla ventilazione meccanica al 28° giorno, decannulato con recupero parziale della deambulazione assistita e trasferito in riabilitazione intensiva.'
    },
    documentationGapsWarning: 'In ICD-10-IM la neuropatia/miopatia del paziente critico ha il codice G62.81 (Polineuropatia del malato critico) o G72.81 (Miopatia del malato critico).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G62.81', description: 'Polineuropatia del malato critico (Critical illness polyneuropathy - CIP)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G72.81', description: 'Miopatia del malato critico (Critical illness myopathy - CIM)', system: 'ICD-10-IM' },
          { code: 'J96.11', description: 'Insufficienza respiratoria cronica con ipossiemia', system: 'ICD-10-IM' },
          { code: 'Z99.11', description: 'Dipendenza da ventilatore meccanico (stato di dipendenza prolungata)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-93.11', description: 'Fisioterapia e riabilitazione neuromuscolare passiva ed attiva a letto del paziente', system: 'CIPI' },
          { code: 'CIPI-89.15', description: 'Elettromiografia ed elettroneurografia', system: 'CIPI' },
          { code: 'CIPI-96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '357.82', description: 'Polineuropatia del malato critico', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '359.81', description: 'Miopatia del malato critico', system: 'ICD-9-CM' }, { code: 'V46.11', description: 'Dipendenza da respiratore', system: 'ICD-9-CM' }],
        procedures: [{ code: '93.11', description: 'Esercizi assistiti', system: 'ICD-9-CM' }, { code: '96.72', description: 'Ventilazione meccanica continua per 96 ore o più', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G62.81 identifica la polineuropatia secondaria a prolungato ricovero in terapia intensiva ed è la causa del prolungamento della degenza.',
        'La presenza concomitante di miopatia (G72.81) e lo stato di dipendenza da ventilatore (Z99.11) documentano l\'estrema complessità assistenziale.'
      ],
      commonCognitiveErrors: [
        'Non diagnosticare e non codificare la CIPNM classificando il paziente semplicemente come "astenia" (R53) o "svezzamento difficile non specificato".'
      ],
      chartDocumentationAdvice: 'Riportare l\'MRC sumscore motorio (< 48/60) e l\'esito della consulenza neurofisiologica con EMG.'
    }
  }
];
