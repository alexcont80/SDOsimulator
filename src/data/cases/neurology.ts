import { ClinicalCase } from '../../types';

export const NEUROLOGY_CASES: ClinicalCase[] = [
  {
    id: 'neuro-1',
    specialtyId: 'neurologia',
    caseNumber: 1,
    title: 'Ictus ischemico acuto da occlusione dell\'arteria cerebrale media (M1) trattato con trombolisi EV e trombectomia meccanica (terapia combinata)',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Stroke Unit / Neuroradiologia Interventistica',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 69 anni',
      admissionReason: 'Esordio iperacuto da 75 minuti di emiplegia ed emianestesia facio-brachio-crurale sinistra, deviazione coniugata dello sguardo verso destra ed emisindrome sensitivo-motoria con neglect visuo-spaziale (NIHSS all\'ingresso = 17).',
      anamnesis: 'Ipertensione arteriosa, ipercolesterolemia, non fumo.',
      hospitalCourse: 'All\'arrivo in Pronto Soccorso attivato il codice ictus ("Code Stroke"). TC encefalo urgente: assenza di emorragia intracranica, score ASPECTS 9 (segno dell\'arteria cerebrale media iperdensa nel tratto prossimale M1). Angio-TC dei vasi intracranici: stop del flusso e occlusione da embolo a livello del segmento M1 dell\'arteria cerebrale media destra. Avviata trombolisi endovenosa sistemica con alteplase (rtPA 0.9 mg/kg) a 90 minuti dall\'esordio sintomatico. Trasferito immediatamente in sala angiografica per trombectomia meccanica endovascolare: puntura arteriosa femorale destra, risalita con catetere guida e microcatetere oltre il trombo; eseguita trombectomia mediante combinazione di stent-retriever ed aspirazione diretta (tecnica SAVE). Ottenuta completa ricanalizzazione con ripristino di flusso cerebrale eccellente (mTICI 3) a 160 minuti dall\'esordio.',
      proceduresConducted: 'Trombolisi endovenosa sistemica farmacologica con rtPA, trombectomia meccanica endovascolare transcatetere con stent retriever, angiografia cerebrale diagnostica, TC encefalo e Angio-TC.',
      dischargeStatus: 'Dimesso al 7° giorno dalla Stroke Unit con spettacolare recupero clinico: NIHSS sceso da 17 a 2, deambulazione autonoma e minima ipoestesia residua alla mano sinistra.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'infarto cerebrale da occlusione dell\'arteria cerebrale media ha il codice specifico I63.511 (occlusione arteria cerebrale media destra). Nel catalogo CIPI la trombolisi endovenosa ha il codice CIPI 99.10 e la trombectomia meccanica endovascolare ha codice CIPI 39.74.',
    solution: {
      icd10: {
        primaryDiagnosis: {
          code: 'I63.511',
          description: 'Infarto cerebrale dovuto a occlusione e stenosi non specificata dell\'arteria cerebrale media destra',
          system: 'ICD-10-IM',
          category: 'Malattie dell\'apparato circolatorio'
        },
        secondaryDiagnoses: [
          { code: 'R47.01', description: 'Afasia / deficit cognitivo-linguistico', system: 'ICD-10-IM' },
          { code: 'G81.92', description: 'Emiplegia che colpisce il lato sinistro, non specificata', system: 'ICD-10-IM' },
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.10', description: 'Iniezione o infusione di sostanza trombolitica (Trombolisi endovenosa con rtPA)', system: 'CIPI' },
          { code: 'CIPI-39.74', description: 'Rimozione endovascolare di trombo da vasi della testa e del collo (Trombectomia meccanica)', system: 'CIPI' },
          { code: 'CIPI-88.41', description: 'Arteriografia cerebrale', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '434.91', description: 'Infarto cerebrale con occlusione arteriosa', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '342.90', description: 'Emiplegia non specificata', system: 'ICD-9-CM' }, { code: '401.9', description: 'Ipertensione essenziale', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.10', description: 'Iniezione di agente trombolitico', system: 'ICD-9-CM' }, { code: '39.74', description: 'Rimozione endovascolare di trombo cerebrovascolare', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM richiede la specificazione dell\'arteria coinvolta e la lateralità: I63.511 individua specificamente l\'arteria cerebrale media destra.',
        'La terapia combinata (Bridging therapy: rtPA sistemico + trombectomia meccanica endovascolare) deve essere codificata con entrambi i codici di procedura CIPI 99.10 e CIPI 39.74, rappresentando il gold standard dell\'alta intensità assistenziale neurologica.'
      ],
      commonCognitiveErrors: [
        'Omettere la procedura di trombectomia endovascolare (CIPI 39.74) e codificare solo la trombolisi endovenosa.',
        'Codificare ictus ischemico aspecifico (I63.9) senza indicare l\'arteria cerebrale media.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario clinico i punteggi NIHSS all\'ingresso e alla dimissione, il tempo "door-to-needle" per rtPA e "door-to-groin" per trombectomia e il grado di ricanalizzazione mTICI (2b o 3).'
    }
  },
  {
    id: 'neuro-2',
    specialtyId: 'neurologia',
    caseNumber: 2,
    title: 'Ictus ischemico acuto cardioembolico in corso di fibrillazione atriale trattato con trombolisi sistemica con rtPA',
    complexity: 'Intermedio',
    subCategory: 'Stroke Unit / Terapia Trombolitica',
    clinicalScenario: {
      patientAgeSex: 'Donna, 76 anni',
      admissionReason: 'Comparsa improvvisa 2 ore prima di afasia globale (motoria e recettiva) e lieve paresi dell\'arto superiore destro (NIHSS = 11).',
      anamnesis: 'Ipertensione arteriosa, non nota storia di aritmie, non in terapia anticoagulante.',
      hospitalCourse: 'In Pronto Soccorso/Stroke Unit: ritmo cardiaco totalmente irregolare con FC 110 bpm; ECG conferma fibrillazione atriale ad elevata risposta ventricolare di primo riscontro. TC encefalo urgente: assenza di sanguinamento intracranico, ASPECTS 10. Angio-TC esclude occlusioni dei grossi tronchi arteriosi prossimali (LVO) intracranici, documentando un piccolo difetto di riempimento su un ramo distale M3 dell\'arteria cerebrale media sinistra. In assenza di controindicazioni, avviata infusione endovenosa di rtPA a 135 minuti dall\'esordio. Monitoraggio continuo in Stroke Unit con progressivo recupero della produzione verbale e comprensione. Successivo avvio di anticoagulante orale diretto (DOAC) a 48 ore dopo controllo TC encefalo negativo per trasformazione emorragica.',
      proceduresConducted: 'Trombolisi endovenosa con farmaco fibrinolitico (rtPA), TC encefalo basale e di controllo a 24 ore, monitoraggio multiparametrico continuo in Stroke Unit.',
      dischargeStatus: 'Dimessa al 6° giorno con NIHSS 1 (discreta anomia residua da stress) ed impostata terapia anticoagulante per FA.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'infarto cerebrale embolico ha il codice I63.40. La fibrillazione atriale associata va codificata con I48.91.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I63.40', description: 'Infarto cerebrale dovuto a embolia di arteria cerebrale non specificata', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I48.91', description: 'Fibrillazione atriale non specificata (FA di primo riscontro)', system: 'ICD-10-IM' },
          { code: 'R47.01', description: 'Afasia', system: 'ICD-10-IM' },
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.10', description: 'Iniezione o infusione di sostanza trombolitica (Trombolisi endovenosa con rtPA)', system: 'CIPI' },
          { code: 'CIPI-87.03', description: 'Tomografia assiale computerizzata dell\'encefalo (TC cranio)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '434.11', description: 'Infarto cerebrale dovuto ad embolia di arterie cerebrali', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '427.31', description: 'Fibrillazione atriale', system: 'ICD-9-CM' }, { code: '784.3', description: 'Afasia', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.10', description: 'Iniezione di agente trombolitico', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I63.40 specifica l\'origine cardioembolica dell\'ictus ischemico.',
        'La fibrillazione atriale è la diagnosi secondaria cardine che giustifica l\'eziologia embolica e la successiva terapia con DOAC.',
        'La procedura CIPI 99.10 certifica l\'esecuzione della trombolisi sistemica tempo-dipendente.'
      ],
      commonCognitiveErrors: [
        'Omettere la codifica della fibrillazione atriale di nuovo riscontro.',
        'Dimenticare di codificare l\'afasia (R47.01) come deficit neurologico focale maggiore.'
      ],
      chartDocumentationAdvice: 'Attestare l\'orario esatto di inizio dell\'infusione di rtPA, i criteri di inclusione ed esclusione e la valutazione NIHSS seriale.'
    }
  },
  {
    id: 'neuro-3',
    specialtyId: 'neurologia',
    caseNumber: 3,
    title: 'Attacco Ischemico Transitorio (TIA) ad alto rischio con stenosi carotidea critica sintomatica trattata con tromboendoarterectomia (TEA)',
    complexity: 'Intermedio',
    subCategory: 'Patologia Cerebrovascolare / Chirurgia Vascolare',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 72 anni',
      admissionReason: 'Episodio transitorio di amaurosi fugace all\'occhio destro (perdita improvvisa e completa della vista a tendina durata 15 minuti) associata a fugace ipostenia alla mano controlaterale (sinistra) regredita completamente entro 45 minuti.',
      anamnesis: 'Forte fumatore, ipertensione, diabete tipo 2. Calcolo dello score ABCD2 = 6 (alto rischio di ictus a breve termine).',
      hospitalCourse: 'In Stroke Unit: esame neurologico all\'ingresso obiettivo nei limiti. RMN encefalo con sequenze in diffusione (DWI): assenza di aree focali di restrizione della diffusione indicanti lesioni ischemiche parenchimali acute (conferma di TIA). Ecocolordoppler dei tronchi sovra-aortici (TSA) ed Angio-TC vasi del collo: stenosi ateromasica ulcerata emodinamicamente critica del 85% sec. criteri NASCET all\'origine dell\'arteria carotide interna destra con placca a rischio emboligeno a componente lipidico-necrotica. Considerato l\'alto rischio di ictus secondo linee guida, posta indicazione a rivascolarizzazione carotidea entro 48 ore. Eseguito intervento di tromboendoarterectomia carotidea (TEA) destra a cielo aperto con approccio cervicale, eversione e sintesi con patch protesico in dacron sotto monitoraggio continuo EEG intraoperatorio; shunt temporaneo non necessario.',
      proceduresConducted: 'Tromboendoarterectomia della carotide con patch protesico, ecocolordoppler tronchi sovra-aortici, Angio-TC vasi del collo.',
      dischargeStatus: 'Dimesso al 3° giorno post-operatorio privo di deficit neurologici, con carotide destra pervia priva di gradienti patologici al controllo Doppler.'
    },
    documentationGapsWarning: 'In ICD-10-IM il TIA ha il codice G45.9 (Attacco ischemico cerebrale transitorio non specificato) o G45.3 (Amaurosi fugace). La stenosi carotidea sintomatica ha codice I65.21. Nel catalogo CIPI la TEA carotidea è codificata con CIPI 38.12.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G45.9', description: 'Attacco ischemico cerebrale transitorio non specificato (TIA)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G45.3', description: 'Amaurosi fugace', system: 'ICD-10-IM' },
          { code: 'I65.21', description: 'Occlusione e stenosi dell\'arteria carotide destra', system: 'ICD-10-IM' },
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-38.12', description: 'Endoarterectomia di vasi della testa e del collo (Tromboendoarterectomia carotidea / TEA)', system: 'CIPI' },
          { code: 'CIPI-88.71', description: 'Ecocolordoppler dei tronchi sovra-aortici (TSA)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '435.9', description: 'Attacco ischemico transitorio non specificato', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '433.10', description: 'Occlusione e stenosi dell\'arteria carotide', system: 'ICD-9-CM' }],
        procedures: [{ code: '38.12', description: 'Endoarteriectomia di altri vasi della testa e del collo', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G45.9 codifica il TIA, motivo primario del ricovero.',
        'La stenosi carotidea sintomatica ipsilaterale (I65.21) e l\'amaurosi fugace (G45.3) documentano la lesione bersaglio corretta chirurgicamente.',
        'La procedura CIPI 38.12 identifica la TEA carotidea.'
      ],
      commonCognitiveErrors: [
        'Codificare ictus ischemico cerebrale I63 in presenza di completa regressione dei sintomi entro un\'ora e RMN-DWI totalmente negativa per danno parenchimale.',
        'Omettere la codifica della stenosi carotidea destra I65.21.'
      ],
      chartDocumentationAdvice: 'Attestare la percentuale di stenosi carotidea secondo criteri NASCET (> 70%) e lo score ABCD2.'
    }
  },
  {
    id: 'neuro-4',
    specialtyId: 'neurologia',
    caseNumber: 4,
    title: 'Emorragia intraparenchimale cerebrale spontanea ipertensiva dei gangli della base con monitoraggio intensivo in Stroke Unit',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Stroke Unit / Malattie Cerebrovascolari Emorragiche',
    clinicalScenario: {
      patientAgeSex: 'Donna, 64 anni',
      admissionReason: 'Cefalea occipitale violentissima ad esordio improvviso durante crisi ipertensiva (PA 225/120 mmHg) con comparsa di deviazione della rima buccale verso destra, emiparesi facio-brachio-crurale destra ingravescente e sopore profondo.',
      anamnesis: 'Ipertensione arteriosa di lunga data con scarsa compliance farmacologica, fumatrice.',
      hospitalCourse: 'In Pronto Soccorso/Stroke Unit: GCS 11 (E3 V3 M5), emiplegia destra con riflesso di Babinski presente a destra. TC encefalo urgente: ematoma intraparenchimale spontaneo iperdenso del nucleo lenticolare e della capsula interna sinistra di circa 28 mL di volume, con circostante alone di edema perilesionale ed impronta sul corno frontale del ventricolo laterale sinistro senza emoventricolo e senza shift significativo della linea mediana (< 3 mm). Angio-TC encefalo esclude malformazioni arterovenose o aneurismi e spot sign negativo. Gestita in Stroke Unit con monitoraggio neurologico continuo ed emodinamico: riduzione graduale e controllata della pressione arteriosa con urapidil ed infusione di labetalolo EV per mantenere la pressione sistolica target < 140 mmHg nelle prime 24 ore; terapia antiedemigena osmotica con mannitolo al 20%; profilassi delle crisi epilettiche con levetiracetam.',
      proceduresConducted: 'Monitoraggio continuo multiparametrico e neurologico in Stroke Unit, TC encefalo basale e di controllo a 24 ore, profilassi anti-edema cerebrale.',
      dischargeStatus: 'Dimessa al 14° giorno con parziale riassorbimento dell\'ematoma, GCS 15, emiparesi spastica destra residua e trasferimento in neuroriabilitazione intensiva cod. 75.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'emorragia intracerebrale emisferica subcorticale ha il codice specifico I61.0 (Emorragia intracerebrale sottocorticale / gangli della base).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I61.0', description: 'Emorragia intracerebrale sottocorticale (gangli della base / capsula interna)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G81.91', description: 'Emiplegia che colpisce il lato destro, non specificata', system: 'ICD-10-IM' },
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' },
          { code: 'R40.1', description: 'Stupore / sopore', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-87.03', description: 'Tomografia assiale computerizzata dell\'encefalo (TC cranio)', system: 'CIPI' },
          { code: 'CIPI-89.54', description: 'Monitoraggio continuo multiparametrico elettrocardiografico e neurologico', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '431', description: 'Emorragia intracerebrale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '342.90', description: 'Emiplegia non specificata', system: 'ICD-9-CM' }, { code: '401.9', description: 'Ipertensione essenziale', system: 'ICD-9-CM' }],
        procedures: [{ code: '87.03', description: 'TC dell\'encefalo', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I61.0 individua con precisione la sede topografica dell\'ematoma (sottocorticale/gangli della base), tipica dell\'angiopatia ipertensiva delle arterie lenticolo-striate.',
        'La presenza dell\'emiplegia (G81.91) e dello stato di sopore (R40.1) certifica l\'entità del danno neurologico.',
        'Il caso evidenzia la gestione medica conservativa ad alta intensità in Stroke Unit.'
      ],
      commonCognitiveErrors: [
        'Confondere l\'emorragia intraparenchimale (I61) con l\'emorragia subaracnoidea (I60).',
        'Codificare ictus ischemico con trasformazione emorragica quando l\'esordio è un\'emorragia primitiva spontanea.'
      ],
      chartDocumentationAdvice: 'Attestare il volume dell\'ematoma calcolato con la formula ABC/2 (in mL), l\'assenza di espansione alla TC di controllo e i valori pressori orari.'
    }
  },
  {
    id: 'neuro-5',
    specialtyId: 'neurologia',
    caseNumber: 5,
    title: 'Emorragia subaracnoidea (ESA) non traumatica da rottura di aneurisma dell\'arteria comunicante anteriore trattata con coiling endovascolare',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Neuroradiologia Interventistica / Malattie Cerebrovascolari',
    clinicalScenario: {
      patientAgeSex: 'Donna, 53 anni',
      admissionReason: 'Cefalea a rombo di tuono ("thunderclap headache" / la peggiore cefalea della vita) a partenza nucale accompagnata da perdita transitoria di coscienza per 2 minuti, vomito a getto e fotofobia.',
      anamnesis: 'Ipertensione arteriosa lieve, fumatrice.',
      hospitalCourse: 'In Pronto Soccorso/Stroke Unit: rigidità nucale marcata con segni di meningismo positivi (Kernig e Brudzinski positivi), Hunt-Hess grado 2, Fisher score 3. TC encefalo urgente: iperdensità diffusa negli spazi subaracnoidei, nelle cisterne basali e nella scissura interemisferica compatibile con emorragia subaracnoidea acuta. Angio-TC ed angiografia digitale cerebrale percutanea (DSA): presenza di aneurisma sacciforme a colletto stretto del diametro di 6.5 mm originante dal complesso dell\'arteria comunicante anteriore (ACom). Portata in sala angiografica per trattamento endovascolare d\'urgenza entro 24 ore: cateterismo superselettivo della sacca aneurismatica mediante microcatetere e posizionamento progressivo di 4 spirali metalliche in platino a distacco controllato (coiling endovascolare) fino alla completa e compatta occlusione dell\'aneurisma con preservazione della pervietà delle arterie cerebrali anteriori (occlusione Raymond-Roy di classe I). Avviata profilassi del vasospasmo con nimodipina per os.',
      proceduresConducted: 'Occlusione endovascolare di aneurisma cerebrale mediante spirali metalliche (coiling endovascolare), angiografia cerebrale con sottrazione digitale (DSA), TC encefalo.',
      dischargeStatus: 'Dimessa al 18° giorno in ottime condizioni cognitive ed emodinamiche in assenza di vasospasmo sintomatico tardivo.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'emorragia subaracnoidea da rottura di aneurisma dell\'arteria comunicante anteriore ha il codice topografico specifico I60.2. Nel catalogo CIPI il coiling endovascolare ha codice CIPI 39.79 / 39.72.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I60.2', description: 'Emorragia subaracnoidea da rottura di aneurisma dell\'arteria comunicante anteriore', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R41.0', description: 'Disorientamento non specificato', system: 'ICD-10-IM' },
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-39.79', description: 'Altra riparazione endovascolare di vasi (Embolizzazione endovascolare di aneurisma cerebrale con spirali / Coiling)', system: 'CIPI' },
          { code: 'CIPI-88.41', description: 'Arteriografia cerebrale selettiva (DSA)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '430', description: 'Emorragia subaracnoidea', system: 'ICD-9-CM' },
        secondaryDiagnoses: [],
        procedures: [{ code: '39.79', description: 'Altra riparazione endovascolare di vasi', system: 'ICD-9-CM' }, { code: '88.41', description: 'Arteriografia cerebrale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I60.2 specifica l\'origine esatta dell\'ESA (rottura dell\'aneurisma dell\'arteria comunicante anteriore), superando il generico I60.9.',
        'La procedura CIPI 39.79 identifica il trattamento endovascolare mininvasivo con spirali (coiling), differente dal clipping chirurgico a cielo aperto con craniotomia (CIPI 39.51).'
      ],
      commonCognitiveErrors: [
        'Confondere il coiling endovascolare con il clipping chirurgico a cielo aperto.',
        'Utilizzare codice generico di emorragia cerebrale senza specificare la sede subaracnoidea I60.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario clinico le scale di gravità Hunt-Hess e Fisher e la classificazione angiografica di Raymond-Roy post-coiling.'
    }
  },
  {
    id: 'neuro-6',
    specialtyId: 'neurologia',
    caseNumber: 6,
    title: 'Sclerosi multipla recidivante-remittente (SMRR) in fase di riacutizzazione acuta trattata con metilprednisolone ad alte dosi',
    complexity: 'Intermedio',
    subCategory: 'Malattie Demielinizzanti / Neuroimmunologia',
    clinicalScenario: {
      patientAgeSex: 'Donna, 31 anni',
      admissionReason: 'Comparsa rapidamente progressiva in 4 giorni di calo visivo severo all\'occhio destro con dolore bulbare esacerbato dai movimenti oculari (neurite ottica retrobulbare) associata ad ipoestesia ed atassia della marcia (recidiva clinica di SM).',
      anamnesis: 'Diagnosi di Sclerosi Multipla Recidivante-Remittente 3 anni fa in trattamento con farmaco modificante la malattia (DMT: Dimetilfumarato).',
      hospitalCourse: 'In Neurologia: acuità visiva occhio destro ridotta a 2/10 con scotoma centrale e difetto pupillare afferente relativo (segno di Marcus Gunn positivo); deambulazione atassico-paretica con segno di Romberg positivo e riflessi osteotendinei iperattivi bilateralmente con Babinski positivo a destra; EDSS all\'ingresso = 4.0. RMN encefalo e midollo con mdc (Gadolinio): presenza di multiple lesioni periventricolari, juxtacorticali ed infratentoriali tipiche per disattivazione demielinizzante, con comparsa di 2 nuove lesioni con impregnazione di contrasto (una nel corpo calloso ed una a livello del nervo ottico destro intracanicolare) attestanti attività infiammatoria acuta (disseminazione nello spazio e nel tempo sec. criteri di McDonald 2017). Trattata con bolo di Metilprednisolone sodico succinato 1.000 mg/die EV in infusione lenta per 5 giorni consecutivi con gastroprotezione, seguito da rapido décalage orale.',
      proceduresConducted: 'Risonanza magnetica nucleare di encefalo e midollo spinale con mezzo di contrasto, infusione endovenosa di corticosteroidi ad alte dosi, esame del campo visivo.',
      dischargeStatus: 'Dimessa all\'8° giorno con progressivo e marcato recupero dell\'acuità visiva (8/10), regressione dell\'atassia e punteggio EDSS ridotto a 2.0; programmato switch a DMT di seconda linea ad alta efficacia.'
    },
    documentationGapsWarning: 'In ICD-10-IM la sclerosi multipla con riacutizzazione acuta ha il codice specifico G35.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G35', description: 'Sclerosi multipla (inclusa la riacutizzazione acuta)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'H46.3', description: 'Neurite ottica retrobulbare dell\'occhio destro', system: 'ICD-10-IM' },
          { code: 'R26.0', description: 'Andatura atassica', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.23', description: 'Iniezione di ormone steroideo (Terapia pulsata con metilprednisolone EV)', system: 'CIPI' },
          { code: 'CIPI-88.91', description: 'Risonanza magnetica dell\'encefalo con mezzo di contrasto', system: 'CIPI' },
          { code: 'CIPI-88.93', description: 'Risonanza magnetica del midollo spinale', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '340', description: 'Sclerosi multipla', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '377.30', description: 'Neurite ottica', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.23', description: 'Iniezione di steroidi', system: 'ICD-9-CM' }, { code: '88.91', description: 'Risonanza magnetica dell\'encefalo', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G35 identifica la sclerosi multipla.',
        'La presenza della neurite ottica retrobulbare (H46.3) e dell\'atassia (R26.0) documenta i domini neurologici coinvolti nella recidiva.',
        'La procedura CIPI 99.23 formalizza la somministrazione pulsata di steroidi ad alte dosi.'
      ],
      commonCognitiveErrors: [
        'Codificare neurite ottica isolata senza menzione della sclerosi multipla sottostante conclamata.',
        'Omettere la RMN spinale eseguita per la stadiazione delle lesioni demielinizzanti.'
      ],
      chartDocumentationAdvice: 'Attestare il punteggio della scala EDSS pre e post trattamento steroideo e il numero di lesioni attive captanti gadolinio alla RMN.'
    }
  },
  {
    id: 'neuro-7',
    specialtyId: 'neurologia',
    caseNumber: 7,
    title: 'Stato di male epilettico generalizzato convulsivo refrattario trattato con sedazione continua ed intubazione protettiva',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Epilettologia d\'Urgenza / Terapia Intensiva Neurologica',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 45 anni',
      admissionReason: 'Crisi epilettiche tonico-cloniche generalizzate ripetute e continue senza ripresa di coscienza tra una crisi e la successiva, della durata complessiva superiore a 30 minuti al domicilio (Stato di Male Epilettico Convulsivo).',
      anamnesis: 'Epilessia focale strutturale secondaria a pregresso trauma cranico infantile in terapia con levetiracetam e lamotrigina, recente brusca sospensione della terapia da parte del paziente.',
      hospitalCourse: 'In Pronto Soccorso/Neurologia: persistenza di attività convulsiva motoria bilaterale continua con trisma e morsicatura laterale della lingua. Trattato secondo protocollo di I linea con Lorazepam 4 mg EV ripetuto a 5 minuti senza arresto della crisi; avviato farmaco di II linea Levetiracetam 60 mg/kg EV associato a Lacosamide 400 mg EV in infusione rapida senza interruzione dell\'attività critica (Stato di male refrattario > 30 minuti). Trasferito d\'urgenza in Terapia Intensiva/Stroke Unit con intubazione orotracheale, ventilazione meccanica protettiva e sedazione continua con Propofol e Midazolam titolati fino al raggiungimento di un pattern di "burst-suppression" elettroencefalografico continuo per 24 ore monitorato con video-EEG continuo. Successiva graduale sospensione della sedazione con successo e mancata ricomparsa di scariche parossistiche.',
      proceduresConducted: 'Monitoraggio elettroencefalografico continuo (video-EEG continuo), intubazione orotracheale e ventilazione meccanica invasiva, infusione continua di anestetici per induzione di coma terapeutico.',
      dischargeStatus: 'Dimesso al 9° giorno cosciente, orientato, senza deficit neurologici focali focali de novo con triplice terapia antiepilettica orale ottimizzata.'
    },
    documentationGapsWarning: 'In ICD-10-IM lo stato di male epilettico generalizzato convulsivo ha il codice specifico G41.0. Nel catalogo CIPI il monitoraggio EEG continuo ha il codice CIPI 89.14.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G41.0', description: 'Stato di grande male epilettico (Stato di male epilettico generalizzato convulsivo)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G40.309', description: 'Epilessia generalizzata idiopatica e sindromi epilettiche, non refrattaria, senza stato di male epilettico', system: 'ICD-10-IM' },
          { code: 'Z91.19', description: 'Non aderenza del paziente ad altro regime medico e trattamento (Sospensione impropria di farmaci antiepilettici)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-89.14', description: 'Monitoraggio elettroencefalografico continuo (Video-EEG continuo)', system: 'CIPI' },
          { code: 'CIPI-96.71', description: 'Ventilazione meccanica continua per meno di 96 ore consecutive', system: 'CIPI' },
          { code: 'CIPI-96.04', description: 'Inserimento di tubo endotracheale per vie aeree', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '345.3', description: 'Stato di grande male', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: 'V15.81', description: 'Storia personale di non conformità con il trattamento medico', system: 'ICD-9-CM' }],
        procedures: [{ code: '89.14', description: 'Monitoraggio elettroencefalografico', system: 'ICD-9-CM' }, { code: '96.71', description: 'Ventilazione meccanica continua < 96 ore', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G41.0 individua con assoluta accuratezza lo stato di male generalizzato convulsivo (SE).',
        'La non-aderenza farmacologica comprovata (Z91.19) identifica il fattore scatenante dell\'emergenza neurologica.',
        'La ventilazione meccanica invasiva (CIPI 96.71) e il monitoraggio continuo video-EEG (CIPI 89.14) configurano l\'elevatissima intensità assistenziale.'
      ],
      commonCognitiveErrors: [
        'Codificare una semplice crisi epilettica isolata G40 anziché il temibile stato di male epilettico G41.',
        'Omettere la procedura di ventilazione meccanica e intubazione.'
      ],
      chartDocumentationAdvice: 'Attestare la durata complessiva dell\'attività critica e la documentazione EEG del raggiungimento del burst-suppression.'
    }
  },
  {
    id: 'neuro-8',
    specialtyId: 'neurologia',
    caseNumber: 8,
    title: 'Sindrome di Guillain-Barré (AIDP) a rapida progressione trattata precocemente con immunoglobuline endovena (IVIg)',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Malattie Neuromuscolari e del Sistema Nervoso Periferico',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 52 anni',
      admissionReason: 'Parestesie distali a guanto e calza seguite da progressiva debolezza muscolare ascendente agli arti inferiori e superiori con incapacità alla deambulazione insorta in 48 ore.',
      anamnesis: 'Episodio di gastroenterite febbrile acuta da Campylobacter jejuni 2 settimane prima.',
      hospitalCourse: 'In Neurologia: tetraparesi flaccida simmetrica a prevalenza distale (forza 2/5 agli arti inferiori, 3/5 ai superiori), areflessia osteotendinea profonda diffusa (tutti i ROT assenti), comparsa di lieve diparesi facciale bilaterale; capacità vitale forzata (FVC) in monitoraggio seriato (scesa a 18 mL/kg). Rachicentesi / puntura lombare diagnostica: liquor limpido con marcata dissociazione albumino-citologica (iperproteinorrachia a 185 mg/dL con conta cellulare normale a 2 leucociti/mcL). Elettromiografia ed elettroneurografia (EMG/ENG): marcato rallentamento delle velocità di conduzione motoria, dispersione temporale dei potenziali d\'azione, prolungamento delle latenze distali ed assenza delle onde F su tutti i tronchi esaminati (quadro diagnostico di Poliradicoloneuropatia Infiammatoria Demielinizzante Acuta - AIDP / Sindrome di Guillain-Barré). Avviata tempestivamente terapia con Immunoglobuline umane per via endovenosa (IVIg) al dosaggio complessivo di 2 g/kg suddiviso in 5 giorni (0.4 g/kg/die).',
      proceduresConducted: 'Puntura lombare diagnostica (rachicentesi), elettromiografia ed elettroneurografia degli arti (EMG/ENG), infusione endovenosa continua di immunoglobuline umane (IVIg).',
      dischargeStatus: 'Dimesso al 15° giorno con arresto della progressione, stabilizzazione respiratoria senza necessità di ventilazione invasiva e parziale recupero della forza (4/5).'
    },
    documentationGapsWarning: 'In ICD-10-IM la sindrome di Guillain-Barré ha il codice specifico G61.0. Nel catalogo CIPI la somministrazione di IVIg ha il codice CIPI 99.14.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G61.0', description: 'Sindrome di Guillain-Barré (AIDP)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G82.50', description: 'Tetraplegia / tetraparesi flaccida non specificata', system: 'ICD-10-IM' },
          { code: 'B96.89', description: 'Altri agenti batterici specificati (storia recente di infezione da Campylobacter)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.14', description: 'Iniezione o infusione di immunoglobuline (IVIg)', system: 'CIPI' },
          { code: 'CIPI-03.31', description: 'Puntura lombare diagnostica (rachicentesi)', system: 'CIPI' },
          { code: 'CIPI-93.08', description: 'Elettromiografia (EMG/ENG)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '357.0', description: 'Polineurite acuta infettiva (sindrome di Guillain-Barré)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '344.00', description: 'Quadriplegia non specificata', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.14', description: 'Iniezione di immunoglobuline', system: 'ICD-9-CM' }, { code: '03.31', description: 'Puntura lombare', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G61.0 identifica specificamente la sindrome di Guillain-Barré.',
        'La dissociazione albumino-citologica liquorale e l\'areflessia supportano i criteri diagnostici di Brighton.',
        'La procedura CIPI 99.14 documenta la terapia biologica immunomodulante con immunoglobuline ad alte dosi.'
      ],
      commonCognitiveErrors: [
        'Codificare polineuropatia cronica o aspecifica anziché la forma acuta d\'urgenza G61.0.',
        'Omettere la procedura di infusione di immunoglobuline endovena CIPI 99.14.'
      ],
      chartDocumentationAdvice: 'Attestare i valori della FVC respiratoria, la conta cellulare e proteica del liquor e i criteri elettrofisiologici di demielinizzazione.'
    }
  },
  {
    id: 'neuro-9',
    specialtyId: 'neurologia',
    caseNumber: 9,
    title: 'Malattia di Parkinson idiopatica avanzata con fluttuazioni motorie severe trattata con posizionamento di sonda PEG-J per infusione di Duodopa',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Disordini del Movimento / Terapie Avanzate',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 68 anni',
      admissionReason: 'Fluttuazioni motorie severe ed imprevedibili ("wearing-off" rapido e fenomeni "on-off" a scatto) con discinesie di picco dose dolorose e prolungati periodi "off" con acinesia totale per oltre 5 ore al giorno, refrattario ad ottimizzazione della terapia orale con levodopa e dopamino-agonisti.',
      anamnesis: 'Malattia di Parkinson idiopatica diagnosticata da 11 anni, buona risposta residua alla dopamina, assenza di demenza conclamata (MMSE 28/30).',
      hospitalCourse: 'In Neurologia: test di risposta a dose singola di levodopa (Levodopa Challenge Test) ampiamente positivo con miglioramento della scala UPDRS-III del 55% in fase ON. Candidato a terapia infusionale intestinale continua con gel intestinale di levodopa/carbidopa (LCIG / Duodopa). Eseguita prima fase con sondino naso-digiunale di prova per 48 ore con eccellente stabilizzazione motoria e scomparsa dei blocchi motori. Successivamente eseguita procedura endoscopica in gastroenterologia/chirurgia: confezionamento di gastrostomia endoscopica percutanea (PEG) con inserimento trans-gastrico di catetere digiunale dedicato (PEG-J) con estremità distale posizionata oltre il legamento di Treitz sotto controllo fluoroscopico. Connessione della sonda alla pompa programmabile esterna e titolazione personalizzata della dose del mattino e del flusso orario continuo.',
      proceduresConducted: 'Gastrostomia endoscopica percutanea (PEG), posizionamento di tubo digiunale trans-gastrico (PEG-J), fluoroscopia per verifica del posizionamento della sonda, educazione e titolazione del microinfusore.',
      dischargeStatus: 'Dimesso al 6° giorno con crollo del tempo trascorso in "off" a meno di 1 ora al giorno e piena autonomia motoria.'
    },
    documentationGapsWarning: 'In ICD-10-IM la malattia di Parkinson idiopatica ha il codice G20. Nel catalogo CIPI la gastrostomia endoscopica percutanea ha il codice CIPI 43.11.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G20', description: 'Malattia di Parkinson (Parkinson idiopatico)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G25.89', description: 'Altri disturbi extrapiramidali e del movimento specificati (Fluttuazioni motorie e discinesie da levodopa)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-43.11', description: 'Gastrostomia endoscopica percutanea (PEG)', system: 'CIPI' },
          { code: 'CIPI-44.32', description: 'Inserimento percutaneo trans-gastrico di catetere digiunale (Sonda digiunale PEG-J)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '332.0', description: 'Paralisi agitante (Malattia di Parkinson)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '333.99', description: 'Altri disturbi extrapiramidali', system: 'ICD-9-CM' }],
        procedures: [{ code: '43.11', description: 'Gastrostomia percutanea endoscopica', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G20 codifica la malattia di Parkinson primaria.',
        'La presenza delle complicanze motorie avanzate (G25.89) giustifica l\'indicazione alla terapia complessa di II livello.',
        'La procedura CIPI 43.11 e il posizionamento digiunale PEG-J (CIPI 44.32) certificano la procedura invasiva di rilascio continuo del farmaco.'
      ],
      commonCognitiveErrors: [
        'Codificare la PEG come eseguita per disfagia o demenza quando è finalizzata esclusivamente al rilascio del gel di levodopa per via digiunale.',
        'Omettere il codice della procedura percutanea di posizionamento della PEG-J.'
      ],
      chartDocumentationAdvice: 'Attestare l\'UPDRS-III prima e dopo test alla levodopa e la corretta posizione radiologica digiunale della punta del catetere.'
    }
  },
  {
    id: 'neuro-10',
    specialtyId: 'neurologia',
    caseNumber: 10,
    title: 'Miastenia gravis generalizzata in crisi miastenica acuta trattata con cicli di plasmaferesi (plasma exchange - PLEX)',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Malattie della Giunzione Neuromuscolare / Rianimazione Neurologica',
    clinicalScenario: {
      patientAgeSex: 'Donna, 39 anni',
      admissionReason: 'Dispnea ingravescente a riposo con uso dei muscoli respiratori accessori, ortopnea, disfagia marcata per liquidi con rigurgito nasale e voce disfonico-nasale dopo infezione respiratoria febbrile.',
      anamnesis: 'Miastenia Gravis nota positiva per anticorpi anti-recettore dell\'acetilcolina (AChR-Ab positivi), pregressa timectomia 4 anni fa.',
      hospitalCourse: 'In Neurologia/Stroke Unit: ptosi palpebrale bilaterale fatica-dipendente, oftalmoparesi asimmetrica, ipostenia severa dei muscoli flessori del collo e dei cingoli (score QMG = 24); all\'emogasanalisi acidosi respiratoria con ipercapnia ingravescente (pCO2 56 mmHg), capacità vitale scesa a 12 mL/kg (crisi miastenica conclamata da esaurimento diaframmatico). Posizionato catetere venoso centrale a doppio lume ad alto flusso in vena giugulare interna destra. Sottoposta a 5 sedute a giorni alterni di plasmaferesi terapeutica (Plasma Exchange - PLEX) con scambio di 1 volume plasmatico per seduta con rimpiazzo di albumina al 5%. Contestuale avvio di metilprednisolone EV. Risoluzione completa dell\'insufficienza respiratoria senza necessità di intubazione tracheale dopo la 3a seduta di plasmaferesi.',
      proceduresConducted: 'Plasmaferesi terapeutica extracorporea (Plasma exchange / PLEX), inserimento di catetere venoso centrale per emoaferesi, emogasanalisi arteriose seriate.',
      dischargeStatus: 'Dimessa in 14a giornata con perfetta deglutizione, assenza di dispnea ed avvio di terapia immunosoppressiva con micofenolato mofetile.'
    },
    documentationGapsWarning: 'In ICD-10-IM la miastenia gravis con esacerbazione acuta/crisi miastenica ha il codice specifico G70.01. Nel catalogo CIPI la plasmaferesi terapeutica è codificata con CIPI 99.71.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G70.01', description: 'Miastenia gravis con esacerbazione acuta (Crisi miastenica)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'J96.02', description: 'Insufficienza respiratoria acuta con ipercapnia', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'R13.10', description: 'Disfagia non specificata', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.71', description: 'Plasmaferesi terapeutica (Plasma exchange)', system: 'CIPI' },
          { code: 'CIPI-38.93', description: 'Cateterismo venoso per accesso vascolare extracorporeo', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '358.01', description: 'Miastenia gravis con esacerbazione acuta', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '518.81', description: 'Insufficienza respiratoria acuta', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.71', description: 'Plasmaferesi terapeutica', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G70.01 distingue specificamente la crisi miastenica acuta rispetto alla forma miastenica stabile (G70.00).',
        'L\'insufficienza respiratoria acuta ipercapnica associata (J96.02) definisce la gravità emogasanalitica come Major Complication (MCC).',
        'La procedura CIPI 99.71 codifica la plasmaferesi terapeutica a scambio plasmatico.'
      ],
      commonCognitiveErrors: [
        'Codificare miastenia gravis senza esacerbazione G70.00 ignorando la crisi respiratoria acuta.',
        'Omettere la procedura di plasmaferesi PLEX.'
      ],
      chartDocumentationAdvice: 'Attestare la quantificazione della capacità vitale respiratoria, i valori di pCO2 emogasanalitici e il numero di cicli di PLEX completati.'
    }
  },
  {
    id: 'neuro-11',
    specialtyId: 'neurologia',
    caseNumber: 11,
    title: 'Meningite batterica acuta comunitaria da Streptococcus pneumoniae con edema cerebrale trattata con ceftriaxone e desametasone',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Infezioni del Sistema Nervoso Centrale',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 62 anni',
      admissionReason: 'Febbre elevata con brivido (39.8 °C), cefalea nucale violenta, fotofobia, vomito e rapido decadimento dello stato di vigilanza con stato confusionale.',
      anamnesis: 'Pregresso episodio di sinusite sfenoidale 1 mese prima, fumo.',
      hospitalCourse: 'In Pronto Soccorso/Neurologia: GCS 12, rigidità nucale a barra con impossibilità alla flessione anteriore del capo sul tronco, segni di Brudzinski e Kernig vivacemente positivi. TC encefalo urgente: assenza di lesioni occupanti spazio espansive o edema a rischio erniario immediato. Eseguita rachicentesi d\'urgenza prima di terapia steroidea: liquor nettamente torbido-purulento con pressione di apertura > 35 cmH2O; citofluorimetria: 4.800 leucociti/mcL (94% polimorfonucleati neutrofili), iperproteinorrachia massiva a 420 mg/dL, ipoglicorrachia marcata a 12 mg/dL (rapporto liquor/glicemia < 0.15). Colorazione di Gram sul liquor immediata: diplococchi Gram-positivi capsulati lanceolati; antigene pneumococcico urinario e su liquor positivo; emocolture positive per Streptococcus pneumoniae sensibile a cefalosporine di III generazione. Avviata terapia tempestiva con Desametasone EV 10 mg prima della prima dose di Ceftriaxone 2 g bid associato ad ampicillina e vancomicina; aggiunta terapia antiedemigena osmotica con mannitolo.',
      proceduresConducted: 'Puntura lombare diagnostica con manometria liquorale, TC encefalo, monitoraggio infettivologico continuo.',
      dischargeStatus: 'Dimesso al 16° giorno dopo completamento di 14 giorni di Ceftriaxone EV in completa apiressia, GCS 15, assenza di sordità o deficit focali residui.'
    },
    documentationGapsWarning: 'In ICD-10-IM la meningite da pneumococco ha il codice eziologico specifico G00.1 (Meningite da pneumococco).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G00.1', description: 'Meningite da pneumococco (Streptococcus pneumoniae)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G93.6', description: 'Edema cerebrale', system: 'ICD-10-IM' },
          { code: 'R41.0', description: 'Disorientamento / stato confusionale acuto', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-03.31', description: 'Puntura lombare diagnostica (Rachicentesi)', system: 'CIPI' },
          { code: 'CIPI-87.03', description: 'Tomografia assiale computerizzata dell\'encefalo (TC cranio)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '320.1', description: 'Meningite pneumococcica', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '348.5', description: 'Edema cerebrale', system: 'ICD-9-CM' }],
        procedures: [{ code: '03.31', description: 'Puntura lombare', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G00.1 identifica specificamente l\'eziologia da Streptococcus pneumoniae.',
        'La presenza dell\'edema cerebrale acuto (G93.6) e dello stato confusionale acuto (R41.0) qualifica la severità dell\'infezione del SNC.',
        'La procedura CIPI 03.31 definisce la rachicentesi con manometria indispensabile per la conferma colturale.'
      ],
      commonCognitiveErrors: [
        'Assegnare meningite non specificata G03.9 quando il germe è stato isolato microbiologicamente sia all\'esame colturale che alla PCR.',
        'Omettere la codifica dell\'edema cerebrale.'
      ],
      chartDocumentationAdvice: 'Attestare i valori liquorali (pleocitosi neutrofila, glicorrachia e proteinorrachia) e la tempestività della somministrazione del desametasone prima dell\'antibiotico.'
    }
  },
  {
    id: 'neuro-12',
    specialtyId: 'neurologia',
    caseNumber: 12,
    title: 'Encefalite virale erpetica acuta da Herpes Simplex Virus tipo 1 (HSV-1) trattata con aciclovir tempestivo',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Infezioni del Sistema Nervoso Centrale',
    clinicalScenario: {
      patientAgeSex: 'Donna, 48 anni',
      admissionReason: 'Febbre elevata a 39 °C, cefalea ingravescente, allucinazioni olfattive (cacosmia), marcate alterazioni comportamentali con disorientamento e comparsa di crisi epilettica focale temporale con clonie dell\'emivolto destro seguita da afasia.',
      anamnesis: 'Paziente precedentemente asintomatica.',
      hospitalCourse: 'In Neurologia: paziente confusa, disfasica con alterazioni della memoria anterograda ed afasia a prevalenza motoria. TC encefalo d\'ingresso sfumata. RMN encefalo d\'urgenza con mezzo di contrasto: iperintensità di segnale bilaterale asimmetrica a netto prevalere a sinistra a livello della corteccia temporale mediale (ippocampo, amigdala e giro paraippocampale) e della corteccia insulare con rigonfiamento girale ed impregnatione leptomeningea (quadro patognomonico per encefalite necrotico-emorragica da HSV-1). EEG: complessi periodici parossistici lateralizzati a proiezione temporale sinistra (PLEDs). Rachicentesi: liquor limpido con modesta pleocitosi linfocitaria (85 cellule/mcL), iperproteinorrachia lieve, glicorrachia normale; PCR su liquor per DNA di Herpes Simplex Virus tipo 1 (HSV-1) fortemente positiva. Avviata terapia antivirale precoce con Aciclovir EV 10 mg/kg ogni 8 ore per 21 giorni con progressiva regressione delle crisi e normalizzazione termica.',
      proceduresConducted: 'Risonanza magnetica dell\'encefalo con mezzo di contrasto, puntura lombare con PCR virale liquorale, elettroencefalogramma standard e seriato.',
      dischargeStatus: 'Dimessa al 24° giorno autonoma nelle attività di vita quotidiana con lieve disturbo mnemonico anterogrado residuo; PCR liquorale di controllo negativa.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'encefalite da Herpes simplex ha il codice combinato eziologico B00.4 (Encefalite da herpesvirus).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'B00.4', description: 'Encefalite da herpesvirus (Encefalite erpetica da HSV-1)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G40.109', description: 'Crisi epilettiche parziali localizzate con compromissione della coscienza', system: 'ICD-10-IM' },
          { code: 'R47.01', description: 'Afasia', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-88.91', description: 'Risonanza magnetica dell\'encefalo con mezzo di contrasto', system: 'CIPI' },
          { code: 'CIPI-03.31', description: 'Puntura lombare diagnostica', system: 'CIPI' },
          { code: 'CIPI-89.14', description: 'Elettroencefalogramma', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '054.3', description: 'Meningoencefalite erpetica', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '784.3', description: 'Afasia', system: 'ICD-9-CM' }],
        procedures: [{ code: '88.91', description: 'RMN cerebrale', system: 'ICD-9-CM' }, { code: '03.31', description: 'Rachicentesi', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'B00.4 codifica l\'encefalite da Herpes simplex, patologia neurologica a prognosi sfavorevole se non trattata tempestivamente.',
        'La presenza delle crisi epilettiche temporali focali (G40.109) e dell\'afasia (R47.01) descrive l\'interessamento elettivo del lobo temporale dominante.',
        'La combinazione di RMN encefalo (CIPI 88.91) e PCR liquorale positiva (CIPI 03.31) comprova la diagnosi biologica.'
      ],
      commonCognitiveErrors: [
        'Codificare encefalite aspecifica G04.9 omettendo l\'infezione da herpesvirus conclamata.',
        'Omettere la codifica delle crisi epilettiche focali sintomatiche acute.'
      ],
      chartDocumentationAdvice: 'Attestare l\'esito della PCR per HSV su liquor, la presenza dei complessi PLEDs all\'EEG e la durata del trattamento con aciclovir (21 giorni).'
    }
  },
  {
    id: 'neuro-13',
    specialtyId: 'neurologia',
    caseNumber: 13,
    title: 'Trombosi dei seni venosi cerebrali (seno sagittale superiore e trasverso) in giovane donna trattata con eparina a dosi piene',
    complexity: 'Intermedio',
    subCategory: 'Stroke Unit / Patologie Cerebrovascolari Non Arteriose',
    clinicalScenario: {
      patientAgeSex: 'Donna, 29 anni',
      admissionReason: 'Cefalea gravativa continua e progressiva da 5 giorni resistente ai comuni analgesici con peggioramento mattutino e durante la manovra di Valsalva, associata a diplopia orizzontale nello sguardo laterale sinistro e papilledema bilaterale.',
      anamnesis: 'Assunzione di contraccettivo orale estroprogestinico (pillola estroprogestinica), fumatrice.',
      hospitalCourse: 'In Stroke Unit: obiettività mostra deficit del VI nervo cranico sinistro (abducente) e papilledema bilaterale da ipertensione endocranica all\'esame del fundus oculi. TC encefalo diretta: iperdensità spontanea a "corda" del seno sagittale superiore; TC con mdc (Angio-TC venosa): tipico segno del "delta vuoto" (empty delta sign) a livello della confluenza dei seni e del terzo posteriore del seno sagittale superiore, con estensione al seno trasverso sinistro con mancata opacizzazione del lume. Escluse lesioni emorragiche o infarti venosi intraparenchimale. Avviata tempestivamente terapia anticoagulante parenterale a dosi terapeutiche con Eparina a Basso Peso Molecolare (Enoxaparina sodica 100 UI/kg bid sottocute), seguita da rapido sollievo della cefalea entro 48 ore; sospesa la pillola anticoncezionale ed avviato screening trombofilico.',
      proceduresConducted: 'Angio-TC venosa dell\'encefalo / Angio-RMN venosa cerebrale, esame del fundus oculi, monitoraggio neurologico continuo.',
      dischargeStatus: 'Dimessa al 7° giorno asintomatica con passaggio a terapia anticoagulante orale con warfarin/DOAC programmata per almeno 6 mesi.'
    },
    documentationGapsWarning: 'In ICD-10-IM la trombosi venosa intracranica non piogenica ha il codice I67.6 (Flebite e tromboflebite intracranica non piogenica / trombosi venosa cerebrale).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I67.6', description: 'Flebite e tromboflebite non piogenica dei seni venosi intracranici (Trombosi venosa cerebrale)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'H47.10', description: 'Papilledema non specificato (edema della papilla da ipertensione endocranica)', system: 'ICD-10-IM' },
          { code: 'H49.22', description: 'Paralisi del sesto nervo cranico (abducente), occhio sinistro', system: 'ICD-10-IM' },
          { code: 'Z79.3', description: 'Uso a lungo termine (corrente) di contraccettivi ormonali sistemici', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-87.03', description: 'Tomografia assiale computerizzata dell\'encefalo con studio Angio-TC dei vasi venosi', system: 'CIPI' },
          { code: 'CIPI-95.02', description: 'Esame oftalmologico del fondo dell\'occhio', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '437.6', description: 'Trombosi non piogenica dei seni venosi intracranici', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '377.00', description: 'Papilledema non specificato', system: 'ICD-9-CM' }],
        procedures: [{ code: '87.03', description: 'TC cerebrale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I67.6 è il codice esatto per la trombosi asettica dei seni venosi durali.',
        'La presenza del papilledema (H47.10) e della paralisi del VI nervo (H49.22) documenta la sindrome da ipertensione endocranica.',
        'L\'uso dei contraccettivi ormonali (Z79.3) identifica il fattore favorente trombotico primario.'
      ],
      commonCognitiveErrors: [
        'Confondere la trombosi venosa con una trombosi arteriosa ischemica convenzionale (I63).',
        'Codificare trombosi settica/infettiva (G08) in un quadro non settico estroprogestinico-correlato.'
      ],
      chartDocumentationAdvice: 'Attestare nel referto il segno del delta vuoto all\'Angio-TC venosa, i seni interessati e l\'esito dell\'esame del fundus oculi.'
    }
  },
  {
    id: 'neuro-14',
    specialtyId: 'neurologia',
    caseNumber: 14,
    title: 'Idrocefalo normoteso dell\'adulto (triade di Hakim-Adams) con Tap Test positivo trattato con shunt ventricolo-peritoneale (DVP)',
    complexity: 'Intermedio',
    subCategory: 'Neurologia Geriatrica / Neurochirurgia Funzionale',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 74 anni',
      admissionReason: 'Progressivo deterioramento della deambulazione a passi corti con "piedi incollati al pavimento" (atassia della marcia a base allargata) associata a decadimento cognitivo sottocorticale ed incontinenza urinaria ingravescente comparsa negli ultimi 9 mesi (triade classica di Hakim-Adams).',
      anamnesis: 'Ipertensione arteriosa, privo di traumi cranici o emorragie pregresse.',
      hospitalCourse: 'In Neurologia: test del cammino (10-meter walk test) compromesso con 32 passi e 28 secondi per coprire 10 metri. RMN encefalo: marcata dilatazione del sistema ventricolare sovratentoriale sproporzionata rispetto all\'atrofia corticale dei solchi della convessità (indice di Evans = 0.38), restringimento dei solchi al vertice (DESH - Disproportionately Enlarged Subarachnoid space Hydrocephalus) e callo arrotondato. Eseguita puntura lombare evacuativa diagnostica (Tap Test) con sottrazione liquorale di 45 mL di liquor a pressione normale (14 cmH2O): al controllo post-evacuativo dopo 4 e 24 ore netto miglioramento della velocità di marcia (> 35% di riduzione del tempo impiegato) confermando la responsività clinica. Candidato ad intervento di derivazione liquorale: eseguito posizionamento chirurgico di derivazione ventricolo-peritoneale (DVP) con catetere ventricolare nel corno frontale destro e valvola a pressione regolabile programmabile transcutaneamente connessa a catetere peritoneale.',
      proceduresConducted: 'Puntura lombare evacuativa con misurazione pressoria (Tap Test), impianto di shunt / derivazione ventricolo-peritoneale (DVP) con valvola regolabile, RMN encefalo.',
      dischargeStatus: 'Dimesso in 5a giornata post-operatoria con netta ripresa della deambulazione autonoma e controllo della continenza.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'idrocefalo normoteso idiopatico ha il codice G91.2. Nel catalogo CIPI la derivazione ventricolo-peritoneale ha il codice CIPI 02.34.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G91.2', description: 'Idrocefalo a pressione normale (Idrocefalo normoteso dell\'adulto / NPH)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R26.81', description: 'Andatura instabile / atassia della marcia', system: 'ICD-10-IM' },
          { code: 'R32', description: 'Incontinenza urinaria non specificata', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-02.34', description: 'Derivazione ventricolare nei visceri addominali (Shunt ventricolo-peritoneale / DVP)', system: 'CIPI' },
          { code: 'CIPI-03.31', description: 'Puntura lombare diagnostico-terapeutica (Tap Test liquorale evacuativo)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '331.5', description: 'Idrocefalo a pressione normale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '781.2', description: 'Anomalie dell\'andatura', system: 'ICD-9-CM' }],
        procedures: [{ code: '02.34', description: 'Derivazione ventricolo-peritoneale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G91.2 identifica con precisione l\'idrocefalo a pressione normale (NPH).',
        'La presenza dell\'atassia della marcia (R26.81) e dell\'incontinenza (R32) documenta la classica triade clinica di Hakim-Adams.',
        'La procedura CIPI 02.34 definisce il confezionamento dello shunt permanente con valvola programmabile.'
      ],
      commonCognitiveErrors: [
        'Confondere l\'idrocefalo normoteso con una generica demenza degenerativa di Alzheimer o atrofia ex-vacuo.',
        'Omettere la procedura chirurgica di shunt ventricolo-peritoneale CIPI 02.34.'
      ],
      chartDocumentationAdvice: 'Attestare l\'indice di Evans (> 0.3), il pattern DESH alla RMN e i parametri oggettivi pre e post Tap Test (tempo e passi al walk test).'
    }
  },
  {
    id: 'neuro-15',
    specialtyId: 'neurologia',
    caseNumber: 15,
    title: 'Ematoma subdurale cronico emisferico con effetto massa trattato con craniotomia mininvasiva e foro di trapano con lavaggio e drenaggio',
    complexity: 'Intermedio',
    subCategory: 'Neurotraumatologia / Neurochirurgia Geriatrica',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 81 anni',
      admissionReason: 'Rallentamento psicomotorio ingravescente da circa 2 settimane, sonnolenza diurna, cefalea gravativa sorda e progressiva ipostenia dell\'emisoma sinistro con deviazione della marcia e frequenti cadute.',
      anamnesis: 'Caduta accidentale minore con lieve trauma cranico occipitale circa 6 settimane prima derubricata a banale contusione, terapia con cardioaspirina per cardiopatia.',
      hospitalCourse: 'In Neurologia: GCS 13, marcata disattenzione, emiparesi facio-brachio-crurale sinistra (forza 3/5) con iperreflessia osteotendinea a sinistra e riflesso di Babinski positivo a sinistra. TC encefalo urgente: voluminoso ematoma subdurale cronico a semiluna a densità ipo-isodensa (con componente mista da microsanguinamento subacuto) esteso per tutta la convessità emisferica destra dello spessore massimo di 24 mm, con marcata compressione del parenchima cerebrale omolaterale, collabimento del ventricolo laterale destro e deviazione della linea mediana verso sinistra di 11 mm (effetto massa critico). Eseguito intervento neurochirurgico d\'urgenza differita in anestesia locale e sedazione: esecuzione di due fori di trapano (burr holes) parietale e frontale destro; incisione durale, evacuazione a getto di liquido ematico "a olio di motore" sotto pressione; lavaggio abbondante con soluzione fisiologica fino a chiarificazione completa del reflusso; posizionamento di sistema di drenaggio subdurale a circuito chiuso a caduta per 48 ore.',
      proceduresConducted: 'Craniotomia con fori di trapano per evacuazione di ematoma subdurale (drenaggio mediante foro di trapano), lavaggio subdurale, posizionamento di drenaggio chiuso.',
      dischargeStatus: 'Dimesso al 5° giorno post-operatorio con completa normalizzazione del GCS (15), regressione totale del deficit motorio sinistro e TC che dimostra riespansione cerebrale.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'ematoma subdurale cronico non traumatico o a comparsa tardiva ha il codice I62.03 (Ematoma subdurale cronico) o S06.5X9A per post-traumatico. Nel catalogo CIPI il drenaggio con fori di trapano ha il codice CIPI 01.31.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I62.03', description: 'Emorragia subdurale cronica (Ematoma subdurale cronico dell\'emisfero destro)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G81.92', description: 'Emiplegia che colpisce il lato sinistro, non specificata', system: 'ICD-10-IM' },
          { code: 'G93.5', description: 'Compressione cerebrale / shift della linea mediana', system: 'ICD-10-IM' },
          { code: 'Z79.82', description: 'Uso a lungo termine (corrente) di aspirina', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-01.31', description: 'Incisione delle meningi cerebrali per evacuazione di ematoma (Drenaggio di ematoma subdurale con foro di trapano)', system: 'CIPI' },
          { code: 'CIPI-87.03', description: 'Tomografia assiale computerizzata dell\'encefalo (TC cranio)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '432.1', description: 'Ematoma subdurale non traumatico / cronico', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '342.90', description: 'Emiplegia non specificata', system: 'ICD-9-CM' }, { code: '348.4', description: 'Compressione cerebrale', system: 'ICD-9-CM' }],
        procedures: [{ code: '01.31', description: 'Incisione delle meningi cerebrali', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I62.03 qualifica con precisione la cronicità dell\'ematoma subdurale.',
        'La presenza dello shift della linea mediana (> 5 mm) e dell\'emiparesi sinistra (G81.92 e G93.5) giustifica la degenza d\'urgenza.',
        'La procedura CIPI 01.31 codifica formalmente l\'evacuazione tramite burr holes.'
      ],
      commonCognitiveErrors: [
        'Confondere l\'ematoma subdurale cronico con un ematoma epidurale acuto (S06.4).',
        'Codificare craniotomia estesa con lembo osseo (CIPI 01.24) quando sono stati eseguiti semplici fori di trapano mininvasivi (CIPI 01.31).'
      ],
      chartDocumentationAdvice: 'Attestare lo spessore dell\'ematoma (in mm), l\'entità del disassamento della linea mediana e l\'avvenuto posizionamento del drenaggio subdurale a circuito chiuso.'
    }
  },
  {
    id: 'neuro-16',
    specialtyId: 'neurologia',
    caseNumber: 16,
    title: 'Sclerosi Laterale Amiotrofica (SLA) a fenotipo bulbare con disfagia severa trattata con posizionamento di PEG per nutrizione enterale',
    complexity: 'Intermedio',
    subCategory: 'Malattie del Motoneurone / Terapie Palliative',
    clinicalScenario: {
      patientAgeSex: 'Donna, 66 anni',
      admissionReason: 'Disfagia grave sia per i liquidi che per i solidi con tosse e soffocamento durante i pasti, disfonia con voce bitonale nasonata, fascicolazioni linguali e marcato calo ponderale (> 10% del peso corporeo in 3 mesi).',
      anamnesis: 'Paziente seguita per SLA a fenotipo bulbare da 1 anno.',
      hospitalCourse: 'In Neurologia: marcata atrofia linguale con fascicolazioni continue e diffuse a riposo, riflesso masseterino vivace (segno di interessamento del I e II motoneurone). Valutazione della deglutizione (FEES): grave deficit di propulsione linguale con ristagni nei seni piriformi e penetrazione laringea massiva di liquidi e semisolidi con riflesso tussigeno inefficace (alto rischio di polmonite ab ingestis). Spirometria in clinostatismo ed ortostatismo: FVC 72% del predetto (respirazione sufficientemente conservata per procedura endoscopica senza intubazione). In accordo con il centro esperto SLA e previo consenso informato alle DAT, si pone indicazione al posizionamento precoce di nutrizione enterale. Eseguito intervento endoscopico di gastrostomia endoscopica percutanea (PEG) con tecnica pull (tecnica di Gauderer-Ponsky) senza complicanze con ago-cannula e transilluminazione addominale perfetta; avvio graduale di nutrizione enterale a pompa.',
      proceduresConducted: 'Gastrostomia endoscopica percutanea (PEG), esame endoscopico della deglutizione (FEES), spirometria con test della capacità vitale forzata.',
      dischargeStatus: 'Dimessa in 4a giornata con piano nutrizionale enterale domiciliare attivo, sonda PEG ben tollerata e mantenimento del peso.'
    },
    documentationGapsWarning: 'In ICD-10-IM la sclerosi laterale amiotrofica ha il codice specifico G12.21. Nel catalogo CIPI la PEG è codificata con CIPI 43.11.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G12.21', description: 'Sclerosi laterale amiotrofica (SLA)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R13.10', description: 'Disfagia non specificata', system: 'ICD-10-IM' },
          { code: 'R63.4', description: 'Perdita di peso anomala', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-43.11', description: 'Gastrostomia endoscopica percutanea (PEG)', system: 'CIPI' },
          { code: 'CIPI-31.42', description: 'Laringoscopia / valutazione endoscopica della deglutizione (FEES)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '335.20', description: 'Sclerosi laterale amiotrofica', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '787.20', description: 'Disfagia', system: 'ICD-9-CM' }],
        procedures: [{ code: '43.11', description: 'Gastrostomia percutanea endoscopica', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G12.21 è il codice specifico univoco della Sclerosi Laterale Amiotrofica.',
        'La presenza di disfagia (R13.10) e calo ponderale documenta l\'appropriatezza clinica dell\'intervento nutrizionale salvavita.',
        'La procedura CIPI 43.11 identifica il posizionamento della PEG.'
      ],
      commonCognitiveErrors: [
        'Utilizzare codice generico di malattia del motoneurone G12.29 quando è chiaramente attestata la diagnosi di SLA.',
        'Omettere la codifica della disfagia che costituisce la motivazione cardine del ricovero.'
      ],
      chartDocumentationAdvice: 'Attestare la percentuale di perdita ponderale, i valori di FVC respiratoria prima della PEG e il referto della FEES.'
    }
  },
  {
    id: 'neuro-17',
    specialtyId: 'neurologia',
    caseNumber: 17,
    title: 'Ictus ischemico del tronco encefalico da dissezione acuta dell\'arteria vertebrale sinistra trattata con anticoagulazione parenterale',
    complexity: 'Intermedio',
    subCategory: 'Stroke Unit / Dissezioni Arteriose Cervicali',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 36 anni',
      admissionReason: 'Dolore nucale violento a partenza occipito-cervicale posteriore sinistra insorto durante seduta di manipolazione chiropratica del rachide cervicale, seguito a distanza di 4 ore da vertigine rotatoria acuta, disfagia, raucedine, singhiozzo incoercibile e tendenza a cadere verso sinistra (sindrome midollare laterale / di Wallenberg).',
      anamnesis: 'Paziente giovane sportivo, privo di fattori di rischio cardiovascolare.',
      hospitalCourse: 'In Stroke Unit: sindrome di Horner sinistra (ptosi, miosi ed enoftalmo sinistro), ipoestesia termo-dolorifica facciale sinistra e corporea controlaterale destra (sensibilità crociata alternata), atassia cerebellare all\'emilato sinistro. Angio-TC ed Angio-RMN dei vasi del collo: ematoma intramurale a semiluna a livello del segmento V2-V3 dell\'arteria vertebrale sinistra con stenosi emodinamica filiforme del lume ("segno della corda") e flap intimale compatibile con dissezione acuta traumatica dell\'arteria vertebrale. RMN encefalo con sequenze DWI: area focale di restrizione della diffusione a livello della porzione dorso-laterale del bulbo sinistro (infarto bulbare laterale / sindrome di Wallenberg). Avviata terapia anticoagulante parenterale con Eparina a Basso Peso Molecolare a dosaggio terapeutico per prevenire ulteriori embolizzazioni arterio-arteriose al circolo vertebro-basilare; monitoraggio emodinamico e respiratorio in Stroke Unit.',
      proceduresConducted: 'Angio-RMN dei vasi del collo con sequenze dedicate per ematoma intramurale (fat-suppressed T1), RMN encefalo con DWI, monitoraggio neurologico continuo.',
      dischargeStatus: 'Dimesso al 10° giorno con progressivo miglioramento dell\'atassia e della disfagia, prescrizione di anticoagulante orale per 6 mesi fino a controllo di ricanalizzazione vascolare.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'infarto cerebrale da dissezione dell\'arteria vertebrale ha il codice I63.212 combinato con I72.6 / I77.71 per la dissezione arteriosa.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I63.212', description: 'Infarto cerebrale dovuto a occlusione o stenosi non specificata dell\'arteria vertebrale sinistra', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I77.71', description: 'Dissezione dell\'arteria vertebrale', system: 'ICD-10-IM' },
          { code: 'G90.3', description: 'Sindrome di Horner (ptosi, miosi ed enoftalmo)', system: 'ICD-10-IM' },
          { code: 'R42', description: 'Vertigini e capogiri', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-88.91', description: 'Risonanza magnetica dell\'encefalo e dei vasi intracranici', system: 'CIPI' },
          { code: 'CIPI-88.71', description: 'Ecocolordoppler dei vasi vertebrali ed epiaortici', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '434.91', description: 'Infarto cerebrale con occlusione arteriosa', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '443.24', description: 'Dissezione dell\'arteria vertebrale', system: 'ICD-9-CM' }],
        procedures: [{ code: '88.91', description: 'RMN encefalo', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I63.212 specifica l\'infarto ischemico nell\'arteria vertebrale sinistra.',
        'La dissezione arteriosa cervicale sottostante (I77.71) e la sindrome di Horner associata (G90.3) documentano la specifica entità nosologica.',
        'La combinazione RM e monitoraggio garantisce la corretta qualificazione del ricovero in Stroke Unit.'
      ],
      commonCognitiveErrors: [
        'Classificare la dissezione come comune aterosclerosi cerebrale (I67.2).',
        'Omettere il codice della dissezione dell\'arteria vertebrale I77.71.'
      ],
      chartDocumentationAdvice: 'Attestare l\'evidenza dell\'ematoma intramurale alle sequenze fat-sat T1 alla RMN e il meccanismo traumatico o manipolativo scatenante.'
    }
  },
  {
    id: 'neuro-18',
    specialtyId: 'neurologia',
    caseNumber: 18,
    title: 'Polineuropatia cronica infiammatoria demielinizzante (CIDP) trattata con cicli periodici di immunoglobuline umane endovena',
    complexity: 'Intermedio',
    subCategory: 'Malattie Neuromuscolari Croniche',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 58 anni',
      admissionReason: 'Debolezza muscolare simmetrica progressiva sia prossimale che distale a tutti e quattro gli arti da oltre 3 mesi, con grave difficoltà a salire le scale, alzarsi dalla sedia e manipolare piccoli oggetti, associata ad atassia sensoriale.',
      anamnesis: 'Paziente diabetico ben compensato, non storia di esposizione a tossici.',
      hospitalCourse: 'In Neurologia: deficit di forza simmetrico ai cingoli scapolare e pelvico (4/5 MRC) ed ai flessori dorsali dei piedi (3/5 MRC); areflessia osteotendinea globale; marcata riduzione della sensibilità vibratoria (pallestesia) e propriocettiva agli arti inferiori con Romberg positivo. Esame del liquor: dissociazione albumino-citologica con iperproteinorrachia persistente a 140 mg/dL e cellule 1/mcL. Studio elettroneurografico (ENG): marcato rallentamento delle velocità di conduzione motoria (NCV ridotte > 30% rispetto alla norma), dispersione temporale dei potenziali evocati motori, prolungamento severo delle latenze delle risposte tardive (onde F) e blocchi di conduzione parziali motori multifocali conformi ai criteri diagnostici EFNS/PNS per CIDP tipica. Sottoposto a ciclo di induzione con Immunoglobuline umane per via endovenosa (IVIg) al dosaggio di 2 g/kg suddivisi in 4 giorni consecutivi.',
      proceduresConducted: 'Infusione endovenosa continua di immunoglobuline ad alte dosi (IVIg), esame elettroneurografico ed elettromiografico (EMG/ENG), rachicentesi diagnostica.',
      dischargeStatus: 'Dimesso al 6° giorno con tangibile recupero della forza muscolare prossimale (4+/5) e programmazione di cicli periodici di mantenimento con IVIg ogni 4 settimane.'
    },
    documentationGapsWarning: 'In ICD-10-IM la polineuropatia infiammatoria cronica demielinizzante ha il codice specifico G61.81.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G61.81', description: 'Polineuropatia demielinizzante infiammatoria cronica (CIDP)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R26.81', description: 'Andatura instabile / atassia sensoriale', system: 'ICD-10-IM' },
          { code: 'E11.9', description: 'Diabete mellito di tipo 2', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.14', description: 'Iniezione o infusione di immunoglobuline umane (IVIg)', system: 'CIPI' },
          { code: 'CIPI-93.08', description: 'Elettromiografia ed elettroneurografia', system: 'CIPI' },
          { code: 'CIPI-03.31', description: 'Puntura lombare diagnostica', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '357.81', description: 'Polineuropatia infiammatoria demielinizzante cronica', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '250.00', description: 'Diabete mellito', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.14', description: 'Iniezione di immunoglobuline', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G61.81 identifica inequivocabilmente la forma cronica demielinizzante (CIDP), distinguendosi nettamente dalla forma acuta monofasica di Guillain-Barré (G61.0).',
        'La procedura CIPI 99.14 documenta l\'impiego della terapia immunomodulante endovenosa ad alto impatto terapeutico.'
      ],
      commonCognitiveErrors: [
        'Confondere la CIDP con una banale neuropatia diabetica distale simmetrica (E11.40).',
        'Utilizzare il codice di Guillain-Barré per una sintomatologia progressiva presente da oltre 8-12 settimane.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario clinico la rispondenza ai criteri neurofisiologici EFNS/PNS di demielinizzazione cronica e la dose totale in grammi di IVIg somministrata.'
    }
  },
  {
    id: 'neuro-19',
    specialtyId: 'neurologia',
    caseNumber: 19,
    title: 'Demenza a corpi di Lewy (DLB) con allucinazioni visive, parkinsonismo precoce e disturbi del sonno REM',
    complexity: 'Base',
    subCategory: 'Neurologia Cognitiva / Demenze Neurodegenerative',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 71 anni',
      admissionReason: 'Spiccate fluttuazioni giornaliere dello stato cognitivo e dell\'attenzione, comparsa di allucinazioni visive vivide e ricorrenti (persone sconosciute e piccoli animali ben formati nella stanza), rigidità muscolare extrapiramidale e cadute ricorrenti.',
      anamnesis: 'Storia da 4 anni di disturbo comportamentale in sonno REM (RBD: urla, pugni e calci durante i sogni con cadute dal letto), iposmia marcata.',
      hospitalCourse: 'In Neurologia: valutazione neuropsicologica documenta marcato deficit attentivo-esecutivo e visuopercezionale con relativo risparmio della memoria a breve termine; esame motorio: sindrome extrapiramidale con bradicinesia, ipertono plastico a ruota dentata simmetrico e postura camptocormica (rigidità parkinsoniana insorta contemporaneamente al deficit cognitivo, criterio "1-year rule" pienamente rispettato). RMN encefalo: assenza di atrofia ippocampale marcata, modesta atrofia sottocorticale. Scintigrafia cerebrale con DaT-Scan (123I-Ioflupane SPECT): marcata e simmetrica riduzione della densità dei trasportatori della dopamina a livello del putamen e del caudato bilateralmente. Polisonnografia (PSG): documentata perdita dell\'atonia muscolare durante la fase REM (RBD accertato). Criteri diagnostici del consorzio internazionale per Demenza a corpi di Lewy (DLB) probabile pienamente soddisfatti. Impostata terapia con Donepezil a titolazione graduale con miglioramento della vigilanza e riduzione delle allucinazioni.',
      proceduresConducted: 'Scintigrafia cerebrale per trasportatori della dopamina (SPECT DaT-Scan), polisonnografia notturna con monitoraggio REM, batteria testale neuropsicologica.',
      dischargeStatus: 'Dimesso al 7° giorno con allucinazioni non disturbanti, miglioramento delle fluttuazioni cognitive e pianificazione di follow-up cognitivo-motorio.'
    },
    documentationGapsWarning: 'In ICD-10-IM la demenza a corpi di Lewy ha il codice specifico G31.83 (Demenze con corpi di Lewy).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'G31.83', description: 'Demenza a corpi di Lewy (DLB)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G47.52', description: 'Disturbo comportamentale del sonno REM (RBD)', system: 'ICD-10-IM' },
          { code: 'G21.8', description: 'Altro parkinsonismo secondario / sintomi extrapiramidali associati', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-92.15', description: 'Scintigrafia di perfusione cerebrale / SPECT DaT-Scan per recettori dopaminergici', system: 'CIPI' },
          { code: 'CIPI-89.17', description: 'Polisonnografia notturna', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '331.82', description: 'Demenza con corpi di Lewy', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '327.42', description: 'Disturbo comportamentale del sonno REM', system: 'ICD-9-CM' }],
        procedures: [{ code: '92.15', description: 'Scintigrafia cerebrale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'G31.83 individua specificamente la demenza a corpi di Lewy, entità autonoma rispetto alla malattia di Alzheimer (G30).',
        'La presenza del disturbo comportamentale in sonno REM (G47.52) è un criterio clinico cardine (core clinical feature).',
        'La procedura CIPI 92.15 specifica la SPECT con DaT-Scan positiva come biomarcatore indicativo.'
      ],
      commonCognitiveErrors: [
        'Confondere la DLB con la malattia di Alzheimer (G30) o con la demenza nella malattia di Parkinson avanzata (G31.83 vs G20/F02.3).',
        'Omettere la codifica della SPECT DaT-Scan eseguita.'
      ],
      chartDocumentationAdvice: 'Attestare il rispetto della "1-year rule" (comparsa dei sintomi cognitivi prima o entro 1 anno dal parkinsonismo) e il referto di denervazione dopaminergica al DaT-Scan.'
    }
  },
  {
    id: 'neuro-20',
    specialtyId: 'neurologia',
    caseNumber: 20,
    title: 'Malformazione artero-venosa (MAV) cerebrale rotta con ematoma intraparenchimale trattata con embolizzazione transcatetere',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Neuroradiologia Interventistica / Malformazioni Vascolari',
    clinicalScenario: {
      patientAgeSex: 'Donna, 28 anni',
      admissionReason: 'Esordio improvviso di cefalea a rombo di tuono, vomito ed emiparesi facio-brachiale sinistra con crisi tonico-clonica generalizzata secondaria durante sforzo fisico.',
      anamnesis: 'Paziente giovane, non fattori di rischio noti.',
      hospitalCourse: 'In Pronto Soccorso/Stroke Unit: sonnolente, orientata a tratti, emiparesi sinistra 3/5. TC encefalo urgente: ematoma intraparenchimale lobare temporo-parietale destro di 25 mL con vasi tortuosi iperdensi adiacenti. Angio-TC ed angiografia digitale cerebrale selettiva (DSA): presenza di malformazione artero-venosa (MAV) cerebrale parietale destra a nido compatto di 3 cm (Grado II di Spetzler-Martin) alimentata da due rami afferenti dell\'arteria cerebrale media destra con drenaggio venoso precoce verso il seno sagittale superiore; evidenza di pseudoaneurisma intranidale sede della rottura emorragica. Sottoposta a trattamento endovascolare combinato d\'urgenza in sala angiografica: cateterismo superselettivo con microcatetere a distacco calibrato del peduncolo arterioso principale afferente alla sede del sanguinamento ed embolizzazione superselettiva con copolimero liquido non adesivo (Onyx 18) con completa occlusione del peduncolo e del punto di rottura intranidale con arresto del flusso patologico e decongestione della vena di drenaggio.',
      proceduresConducted: 'Embolizzazione endovascolare superselettiva transcatetere di malformazione artero-venosa cerebrale con copolimero liquido (Onyx), angiografia cerebrale con sottrazione digitale (DSA), TC encefalo.',
      dischargeStatus: 'Dimessa al 12° giorno con emiparesi completamente rientrata, assenza di recidive emorragiche e programmata valutazione per radiochirurgia stereotassica (Gamma Knife) del nido residuo.'
    },
    documentationGapsWarning: 'In ICD-10-IM la rottura di malformazione artero-venosa cerebrale con emorragia intraparenchimale ha il codice primario I61.8 (Altra emorragia intracerebrale) associato a Q28.2 (Malformazione arterovenosa dei vasi cerebrali). Nel catalogo CIPI l\'embolizzazione della MAV ha il codice CIPI 39.72.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I61.8', description: 'Altra emorragia intracerebrale (Emorragia lobare da rottura vascolare)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'Q28.2', description: 'Malformazione artero-venosa dei vasi cerebrali (MAV cerebrale)', system: 'ICD-10-IM' },
          { code: 'G40.409', description: 'Altra epilessia generalizzata e sindromi epilettiche', system: 'ICD-10-IM' },
          { code: 'G81.92', description: 'Emiplegia che colpisce il lato sinistro', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-39.72', description: 'Embolizzazione endovascolare o occlusione della testa e del collo (Embolizzazione di MAV cerebrale)', system: 'CIPI' },
          { code: 'CIPI-88.41', description: 'Arteriografia cerebrale selettiva (DSA)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '431', description: 'Emorragia intracerebrale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '747.81', description: 'Anomalie dei vasi cerebrali (MAV)', system: 'ICD-9-CM' }],
        procedures: [{ code: '39.72', description: 'Embolizzazione di vasi della testa e del collo', system: 'ICD-9-CM' }, { code: '88.41', description: 'Arteriografia cerebrale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'L\'emorragia intracerebrale acuta (I61.8) è la diagnosi principale che ha imposto il ricovero urgente.',
        'La malformazione artero-venosa congenita sottostante (Q28.2) definisce l\'eziologia eziopatogenetica.',
        'La procedura CIPI 39.72 documenta l\'embolizzazione endovascolare superselettiva della MAV.'
      ],
      commonCognitiveErrors: [
        'Omettere il codice della MAV cerebrale Q28.2 classificando l\'emorragia come banale forma ipertensiva.',
        'Confondere l\'embolizzazione endovascolare (CIPI 39.72) con una craniotomia aperta con resezione microchirurgica (CIPI 38.31).'
      ],
      chartDocumentationAdvice: 'Attestare nel verbale angiografico la classificazione di Spetzler-Martin, il tipo di agente embolizzante impiegato (Onyx) e la percentuale di devascolarizzazione del nido.'
    }
  }
];
