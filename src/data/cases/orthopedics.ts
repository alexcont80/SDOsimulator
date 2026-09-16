import { ClinicalCase } from '../../types';

export const ORTHOPEDICS_CASES: ClinicalCase[] = [
  {
    id: 'orto-1',
    specialtyId: 'ortopedia',
    caseNumber: 1,
    title: 'Frattura sottocapitata scomposta del femore in anziana trattata con artroprotesi totale d\'anca (THA)',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Traumatologia Geriatrica / Chirurgia Protesica',
    clinicalScenario: {
      patientAgeSex: 'Donna, 82 anni',
      admissionReason: 'Caduta accidentale a terra in ambito domestico con impatto diretto sul fianco sinistro; immediata impotenza funzionale totale all\'arto inferiore sinistro e dolore inguinale acuto.',
      anamnesis: 'Osteoporosi severa nota in trattamento con vitamina D, ipertensione arteriosa, fibrillazione atriale cronica in NAO (sospeso all\'ingresso).',
      hospitalCourse: 'Arto inferiore sinistro accorciato, addotto ed extraruotato. Rx bacino per anche: frattura intracapsulare mediale sottocapitata del collo femorale sinistro marcatamente scomposta (Grado IV secondo classificazione di Garden). Considerata l\'età, il livello cognitivo integro e l\'autonomia deambulatoria pre-trauma, l\'équipe ortopedica pone indicazione ad artroprotesi totale d\'anca (THA) entro le 48 ore come previsto dagli standard PNE (Programma Nazionale Esiti). Eseguito intervento di artroprotesi totale d\'anca sinistra non cementata con stelo retto, cotile a press-fit ed accoppiamento ceramica-polietilene cross-linked ad alto peso molecolare per via postero-laterale con reinserzione dei rotatori esterni.',
      proceduresConducted: 'Sostituzione totale dell\'articolazione dell\'anca (Artroprotesi totale d\'anca non cementata), radiografia intraoperatoria dell\'anca.',
      dischargeStatus: 'Dimessa in 5a giornata con deambulazione assistita con deambulatore avviata in 1a giornata post-operatoria e trasferimento in riabilitazione motoria intensiva (cod. 56).'
    },
    documentationGapsWarning: 'In ICD-10-IM la frattura del collo del femore richiede lateralità ed episodio di cura con 7° carattere ("A" per contatto iniziale): S72.032A. Nel catalogo CIPI l\'artroprotesi totale d\'anca ha codice CIPI 81.51.',
    solution: {
      icd10: {
        primaryDiagnosis: {
          code: 'S72.032A',
          description: 'Frattura del collo del femore sinistro, parte mediale/sottocapitata, contatto iniziale per frattura chiusa',
          system: 'ICD-10-IM',
          category: 'Traumatismi, avvelenamenti e alcune altre conseguenze di cause esterne'
        },
        secondaryDiagnoses: [
          { code: 'M81.0', description: 'Osteoporosi post-menopausale senza frattura patologica corrente', system: 'ICD-10-IM' },
          { code: 'I48.20', description: 'Fibrillazione atriale cronica', system: 'ICD-10-IM' },
          { code: 'W19.XXXA', description: 'Caduta non specificata, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-81.51', description: 'Sostituzione totale dell\'anca (Artroprotesi totale d\'anca)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '820.02', description: 'Frattura del collo del femore, sottocapitata chiusa', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '733.01', description: 'Osteoporosi senile', system: 'ICD-9-CM' }, { code: 'E888.9', description: 'Caduta accidentale non specificata', system: 'ICD-9-CM' }],
        procedures: [{ code: '81.51', description: 'Sostituzione totale dell\'anca', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM impone l\'assegnazione obbligatoria del 7° carattere esteso ("A" per contatto iniziale) e la lateralità sinistra (S72.032A).',
        'La procedura CIPI 81.51 identifica l\'artroprotesi totale d\'anca, distinguendosi dall\'endoprotesi parziale (CIPI 81.52).',
        'L\'intervento eseguito entro 48 ore risponde ai criteri di monitoraggio PNE del Ministero della Salute.'
      ],
      commonCognitiveErrors: [
        'Confondere l\'artroprotesi totale (CIPI 81.51 con cotile protesico) con l\'endoprotesi/emiartroprotesi cefalica (CIPI 81.52).',
        'Omettere la lateralità della frattura e il codice di causa esterna della caduta (W19).'
      ],
      chartDocumentationAdvice: 'Attestare l\'ora esatta di ingresso in ospedale e l\'ora di incisione chirurgica per la verifica del parametro PNE < 48 ore e la classificazione di Garden.'
    }
  },
  {
    id: 'orto-2',
    specialtyId: 'ortopedia',
    caseNumber: 2,
    title: 'Frattura pertrocanterica instabile del femore sintetizzata con chiodo endomidollare cefalomedollare',
    complexity: 'Intermedio',
    subCategory: 'Traumatologia Geriatrica / Osteosintesi',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 78 anni',
      admissionReason: 'Caduta accidentale in strada; dolore acuto elettivo alla regione trocanterica destra ed incapacità di carico.',
      anamnesis: 'Diabete tipo 2, pregresso TIA 3 anni fa, ipertrofia prostatica.',
      hospitalCourse: 'Rx femore prossimale e bacino: frattura pertrocanterica complessa ed instabile del femore destro con distacco del piccolo trocantere (AO/OTA 31-A2.2). Intervento chirurgico eseguito entro 36 ore su lettino da trazione con amplificatore di brillantezza: riduzione chiusa della frattura sotto fluoroscopia ed osteosintesi endomidollare mininvasiva con chiodo trocanterico cefalomedollare corto in titanio (chiodo Gamma 3) introdotto per via percutanea dal grande trocantere, con bloccaggio prossimale mediante vite cefalica e vite di bloccaggio distale dinamica.',
      proceduresConducted: 'Riduzione chiusa di frattura del femore con fissazione interna (osteosintesi con chiodo endomidollare cefalomedollare), fluoroscopia intraoperatoria.',
      dischargeStatus: 'Dimesso al 4° giorno con inizio di carico precoce sfiorato/parziale assistito con fisioterapista.'
    },
    documentationGapsWarning: 'In ICD-10-IM la frattura pertrocanterica del femore destro ha il codice specifico S72.141A. Nel catalogo CIPI la riduzione chiusa con osteosintesi interna ha il codice CIPI 79.15.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S72.141A', description: 'Frattura pertrocanterica del femore destro, contatto iniziale per frattura chiusa', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'E11.9', description: 'Diabete mellito di tipo 2', system: 'ICD-10-IM' },
          { code: 'W01.0XXA', description: 'Caduta sullo stesso livello da scivolamento, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-79.15', description: 'Riduzione chiusa di frattura del femore con fissazione interna (chiodo endomidollare)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '820.21', description: 'Frattura pertrocanterica chiusa', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '250.00', description: 'Diabete mellito', system: 'ICD-9-CM' }],
        procedures: [{ code: '79.15', description: 'Riduzione chiusa di frattura del femore con fissazione interna', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'S72.141A identifica la frattura pertrocanterica con esatta lateralità destra.',
        'La procedura CIPI 79.15 qualifica l\'approccio a cielo chiuso (mediante trazione e guida radiologica senza apertura del focolaio di frattura).'
      ],
      commonCognitiveErrors: [
        'Codificare riduzione a cielo aperto (CIPI 79.35) quando il chiodo è stato inserito con tecnica chiusa mini-invasiva.',
        'Assegnare il codice di frattura del collo mediale femorale (S72.0) anziché pertrocanterica extracapsulare (S72.14).'
      ],
      chartDocumentationAdvice: 'Specificare l\'indice Tip-Apex Distance (TAD < 20 mm) al controllo radiografico per certificare la stabilità dell\'impianto.'
    }
  },
  {
    id: 'orto-3',
    specialtyId: 'ortopedia',
    caseNumber: 3,
    title: 'Gonartrosi severa tricompartimentale refrattaria trattata con artroprotesi totale di ginocchio (TKA) cementata',
    complexity: 'Intermedio',
    subCategory: 'Chirurgia Protesica Elettiva',
    clinicalScenario: {
      patientAgeSex: 'Donna, 72 anni',
      admissionReason: 'Gonalgia meccanica ed infiammatoria continua a carico del ginocchio destro resistente a cicli di infiltrazioni con acido ialuronico e FANS, con deformità in varismo e limitazione della deambulazione (< 200 metri).',
      anamnesis: 'Obesità classe I (BMI 31 kg/m2), ipertensione arteriosa.',
      hospitalCourse: 'Rx ginocchio destro sotto carico: scomparsa quasi totale della rima articolare femoro-tibiale mediale, osteofitosi marginale marcata, sclerosi subcondrale ed usura femoro-rotulea (Gonartrosi tricompartimentale stadio IV di Kellgren-Lawrence). Eseguito intervento programmato di protesi totale di ginocchio destra cementata: accesso parapatellare mediale, osteotomie femorale e tibiale secondo allineamento meccanico, bilanciamento legamentoso dei collaterali, posizionamento di componente femorale e piatto tibiale cementati con antibiotico e inserto in polietilene a stabilità posteriore (PS). Denervazione circonferenziale rotulea.',
      proceduresConducted: 'Sostituzione totale dell\'articolazione del ginocchio (Artroprotesi totale di ginocchio cementata), radiografia post-operatoria del ginocchio.',
      dischargeStatus: 'Dimessa in 4a giornata post-operatoria con flessione attiva del ginocchio > 90°, estensione completa e deambulazione con due stampelle.'
    },
    documentationGapsWarning: 'In ICD-10-IM la gonartrosi primaria unilaterale del ginocchio destro ha il codice specifico M17.11. Nel catalogo CIPI la protesi totale di ginocchio ha il codice CIPI 81.54.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'M17.11', description: 'Artrorosi primaria del ginocchio destro (Gonartrosi primaria destra)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'E66.01', description: 'Obesità morbida/moderata dovuta a calorie in eccesso', system: 'ICD-10-IM' },
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-81.54', description: 'Sostituzione totale del ginocchio (Artroprotesi totale di ginocchio)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '715.16', description: 'Osteoartrosi primaria della gamba / ginocchio', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '278.00', description: 'Obesità', system: 'ICD-9-CM' }],
        procedures: [{ code: '81.54', description: 'Sostituzione totale del ginocchio', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'M17.11 definisce l\'artrosi primaria con lateralità destra obbligatoria.',
        'La procedura CIPI 81.54 corrisponde alla sostituzione totale tricompartimentale (distinta dalla protesi monocompartimentale CIPI 81.55).'
      ],
      commonCognitiveErrors: [
        'Codificare protesi monocompartimentale o parziale CIPI 81.55 anziché totale.',
        'Utilizzare codice generico di artrosi non specificata senza indicare il ginocchio e il lato destro.'
      ],
      chartDocumentationAdvice: 'Attestare l\'angolo di allineamento femoro-tibiale post-operatorio, il tipo di vincolo protesico (PS vs CR) e il Range of Motion (ROM) alla dimissione.'
    }
  },
  {
    id: 'orto-4',
    specialtyId: 'ortopedia',
    caseNumber: 4,
    title: 'Lesione acuta del legamento crociato anteriore (LCA) e lesione a manico di secchio del menisco mediale trattate in artroscopia',
    complexity: 'Base',
    subCategory: 'Traumatologia dello Sport / Chirurgia Artroscopica',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 24 anni',
      admissionReason: 'Trauma distorsivo al ginocchio sinistro con meccanismo di valgo-rotazione esterna durante partita di calcio, avvertito "crack" sonoro, seguito da emartro immediato e blocco articolare in flessione.',
      anamnesis: 'Paziente sportivo agonista, non precedenti traumi alle ginocchia.',
      hospitalCourse: 'Obiettività: idrartro massivo, test di Lachman nettamente positivo senza arresto solido, pivot-shift positivo; blocco articolare in estensione terminale a -15°. RMN ginocchio sinistro: rottura completa a tutto spessore del legamento crociato anteriore con lesione complessa a "manico di secchio" del menisco mediale dislocata nella gola intercondiloidea. Sottoposto ad intervento in artroscopia: debridement ed emartro aspirato; riduzione artroscopica del manico di secchio meniscale e sutura meniscale riparativa "all-inside" con 3 impianti a dardi riassorbibili con recupero della stabilità del muro meniscale. Prelievo dei tendini autologhi semitendinoso e gracile omolaterali, preparazione del neolegamento a 4 fili, perforazione dei tunnel ossei femorale e tibiale anatomici con guida artroscopica e fissazione del neo-LCA con bottone corticale regolabile femorale e vite ad interferenza riassorbibile tibiale.',
      proceduresConducted: 'Ricostruzione artroscopica del legamento crociato anteriore (LCA) con tendini semitendinoso e gracile, riparazione/sutura meniscale artroscopica, prelievo di tendini autologhi per graft.',
      dischargeStatus: 'Dimesso in 2a giornata con tutore articolato a 0-90° e prescrizione di deambulazione con canadesi senza carico per 3 settimane per tutelare la sutura meniscale.'
    },
    documentationGapsWarning: 'In ICD-10-IM la lacerazione acuta del legamento crociato anteriore ha il codice S83.512A (Lacerazione del LCA sinistro, iniziale). La lesione meniscale ha codice S83.212A. Nel catalogo CIPI la ricostruzione artroscopica e la sutura meniscale hanno codici distinti.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S83.512A', description: 'Distorsione e rottura del legamento crociato anteriore del ginocchio sinistro, contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'S83.212A', description: 'Lacerazione a manico di secchio del menisco mediale, lesione attuale del ginocchio sinistro, contatto iniziale', system: 'ICD-10-IM' },
          { code: 'Y93.02', description: 'Attività svolta: gioco del calcio', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-81.45', description: 'Altra riparazione dei legamenti crociati (Ricostruzione del legamento crociato anteriore LCA in artroscopia)', system: 'CIPI' },
          { code: 'CIPI-81.47', description: 'Altra riparazione del ginocchio / sutura meniscale in artroscopia', system: 'CIPI' },
          { code: 'CIPI-80.26', description: 'Artroscopia del ginocchio diagnostica ed operativa', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '844.2', description: 'Distorsione del legamento crociato del ginocchio', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '836.0', description: 'Lacerazione di menisco mediale, lesione attuale', system: 'ICD-9-CM' }, { code: 'E007.0', description: 'Attività sportiva: calcio', system: 'ICD-9-CM' }],
        procedures: [{ code: '81.45', description: 'Altra riparazione dei legamenti crociati', system: 'ICD-9-CM' }, { code: '80.26', description: 'Artroscopia del ginocchio', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'S83.512A definisce la lesione acuta del LCA del ginocchio sinistro con 7° carattere "A".',
        'La contestuale lesione meniscale acuta (S83.212A) e la relativa riparazione (CIPI 81.47) riflettono la reale complessità della chirurgia combinata rispetto a una semplice meniscectomia parziale.'
      ],
      commonCognitiveErrors: [
        'Codificare meniscectomia ablativa CIPI 80.6 anziché sutura/riparazione meniscale salvaconservativa CIPI 81.47.',
        'Omettere la lateralità della lesione ligamentosa.'
      ],
      chartDocumentationAdvice: 'Attestare nel referto artroscopico il diametro del graft neolegamentoso (in mm), il tipo di fissazione femoro-tibiale e il numero di ancorette/punti meniscali impiegati.'
    }
  },
  {
    id: 'orto-5',
    specialtyId: 'ortopedia',
    caseNumber: 5,
    title: 'Frattura articolare scomposta dell\'estremo distale del radio sinistro (Colles) trattata con ORIF con placca volare a stabilità angolare',
    complexity: 'Base',
    subCategory: 'Traumatologia dell\'Arto Superiore / Osteosintesi',
    clinicalScenario: {
      patientAgeSex: 'Donna, 61 anni',
      admissionReason: 'Caduta da altezza di carico sulla mano sinistra estesa ("a mano aperta"); deformità del polso sinistro "a dorso di forchetta" con tumefazione ed impotenza funzionale immediata.',
      anamnesis: 'Paziente in buono stato di salute generale, osteopenia.',
      hospitalCourse: 'Polsi: polso radiale presente e simmetrico, sensibilità e motilità delle dita conservate senza sindrome del tunnel carpale acuta. Rx polso e TC del polso sinistro: frattura dell\'estremo distale del radio articolare con rima che interessa la fossa scafoidea e lunata (AO/OTA 23-C2), con disassamento dorsale di 25°, accorciamento radiale di 4 mm e gradino articolare di 2.5 mm. Considerata la scomposizione e l\'incongruenza articolare, indicazione ad intervento di riduzione e sintesi interna. Eseguito intervento per via volare sec. Henry: incisione longitudinale, dislocazione del flessore radiale del carpo, disinserzione del pronatore quadrato; riduzione anatomica della superficie articolare sotto controllo scopia e fissazione interna con placca in titanio volare a stabilità angolare (placca LCP) con viti a filettatura bloccata.',
      proceduresConducted: 'Riduzione a cielo aperto di frattura del radio con fissazione interna (ORIF con placca volare), fluoroscopia intraoperatoria.',
      dischargeStatus: 'Dimessa in 2a giornata con stecca gessata volare di protezione per 10 giorni e mobilizzazione attiva immediata delle dita.'
    },
    documentationGapsWarning: 'In ICD-10-IM la frattura articolare dell\'estremo distale del radio sinistro ha il codice specifico S52.532A. Nel catalogo CIPI l\'intervento a cielo aperto con placca ha il codice CIPI 79.32.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S52.532A', description: 'Frattura dell\'estremo distale del radio sinistro (Colles), contatto iniziale per frattura chiusa', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'W01.0XXA', description: 'Caduta da scivolamento, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-79.32', description: 'Riduzione a cielo aperto di frattura del radio e ulna con fissazione interna (ORIF con placca)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '813.42', description: 'Altra frattura dell\'estremità distale del radio (frattura di Colles)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: 'E885.9', description: 'Caduta', system: 'ICD-9-CM' }],
        procedures: [{ code: '79.32', description: 'Riduzione a cielo aperto di frattura di radio e ulna con fissazione interna', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'S52.532A assegna la corretta lateralità e specifica la frattura di Colles con 7° carattere "A".',
        'La procedura CIPI 79.32 individua la fissazione interna con placca a cielo aperto.'
      ],
      commonCognitiveErrors: [
        'Codificare riduzione chiusa e gesso (CIPI 79.02) quando è stata eseguita una complessa osteosintesi con placca a cielo aperto.',
        'Omettere la lateralità sinistra.'
      ],
      chartDocumentationAdvice: 'Attestare il ripristino dell\'inclinazione radiale (circa 20°), del tilt volare (circa 10°) e la perfetta congruenza della rima articolare radiocarpica.'
    }
  },
  {
    id: 'orto-6',
    specialtyId: 'ortopedia',
    caseNumber: 6,
    title: 'Coxartrosi primaria severa trattata con artroprotesi totale d\'anca per via anteriore mininvasiva (AMIS)',
    complexity: 'Intermedio',
    subCategory: 'Chirurgia Protesica Elettiva',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 66 anni',
      admissionReason: 'Coxalgia cronica progressiva sinistra con irradiazione alla faccia anteriore della coscia, zoppia di fuga, limitazione funzionale nell\'intrarotazione e nell\'allacciarsi le scarpe.',
      anamnesis: 'Paziente attivo, privo di patologie sistemiche rilevanti.',
      hospitalCourse: 'Rx bacino e assiale d\'anca sinistra: marcata riduzione dello spazio articolare coxofemorale supero-esterno, grossolani geodi subcondrali cefalici, osteofitosi a becco del ciglio cotiloideo (Coxartrosi primaria sinistra grado III-IV sec. Tonnis). Eseguito intervento di artroprotesi totale d\'anca sinistra per via anteriore mininvasiva (AMIS) intermuscolare ed internervosa (tra tensore della fascia lata e sartorio): preservazione integrale dei muscoli periarticolari, resezione cefalica femorale, fresatura acetabolare e posizionamento di cotile non cementato in titanio trabecolare, inserto in ceramica delta, preparazione del canale femorale ed impianto di stelo retto con accoppiamento ceramica-ceramica da 36 mm. Stabilità testata in tutti i gradi di movimento con test di dislocazione negativo.',
      proceduresConducted: 'Sostituzione totale dell\'anca (Artroprotesi totale d\'anca non cementata per via anteriore mininvasiva), radiografia post-operatoria.',
      dischargeStatus: 'Dimesso in 3a giornata post-operatoria autonomo nel cammino con stampelle e salita delle scale.'
    },
    documentationGapsWarning: 'In ICD-10-IM la coxartrosi primaria dell\'anca sinistra ha il codice specifico M16.12.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'M16.12', description: 'Artrorosi primaria dell\'anca sinistra (Coxartrosi primaria unilaterale)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [],
        procedures: [
          { code: 'CIPI-81.51', description: 'Sostituzione totale dell\'anca (Artroprotesi totale d\'anca non cementata)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '715.15', description: 'Osteoartrosi primaria del bacino e anca', system: 'ICD-9-CM' },
        secondaryDiagnoses: [],
        procedures: [{ code: '81.51', description: 'Sostituzione totale dell\'anca', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'M16.12 definisce la forma primaria unilaterale con lateralità sinistra.',
        'La procedura CIPI 81.51 codifica l\'artroprotesi d\'anca totale.'
      ],
      commonCognitiveErrors: [
        'Codificare codice di displasia congenita d\'anca quando si tratta di coxartrosi primitiva senile.',
        'Omettere la lateralità sinistra nel codice ICD-10-IM.'
      ],
      chartDocumentationAdvice: 'Attestare l\'approccio chirurgico mininvasivo (risparmio muscolare) e le misure esatte delle componenti cotiloidea e femorale.'
    }
  },
  {
    id: 'orto-7',
    specialtyId: 'ortopedia',
    caseNumber: 7,
    title: 'Frattura bimalleolare instabile della caviglia destra con diastasi sindesmotica trattata con ORIF e vite di sindesmosi',
    complexity: 'Intermedio',
    subCategory: 'Traumatologia / Osteosintesi Caviglia',
    clinicalScenario: {
      patientAgeSex: 'Donna, 49 anni',
      admissionReason: 'Trauma distorsivo violento in pronazione ed eversione della caviglia destra scendendo da un gradino; tumefazione massiva, flictene cutanee incipienti e deformità con deviazione laterale del piede.',
      anamnesis: 'Paziente sana, non fumatrice.',
      hospitalCourse: 'Rx e TC caviglia destra: frattura del terzo distale del perone sovraglomerulare (tipo Danis-Weber C), frattura da strappamento del malleolo tibiale mediale e marcata diastasi della sindesmosi tibio-peroneale distale con sublussazione laterale dell\'astragalo. Posizionato gesso a valva provvisorio ed arto in scarico antideclive fino a detensione delle parti molli. Al 3° giorno condotta in sala operatoria per ORIF: riduzione a cielo aperto della frattura del perone e sintesi con placca a terzo di tubicino e 6 viti corticali; sintesi del malleolo mediale con 2 viti da spongiosa cannulate parallele. Hook test intraoperatorio sotto scopia positivo per instabilità residua della sindesmosi: posizionamento di una vite di sindesmosi transcorticale a 3 cortici tra perone e tibia al di sopra dell\'articolazione.',
      proceduresConducted: 'Riduzione a cielo aperto di frattura della caviglia bimalleolare con fissazione interna (ORIF con placca e viti), stabilizzazione della sindesmosi con vite transcorticale.',
      dischargeStatus: 'Dimessa in 3a giornata post-operatoria con prescrizione di divieto di carico per 6 settimane e rimozione programmata della vite di sindesmosi prima della deambulazione.'
    },
    documentationGapsWarning: 'In ICD-10-IM la frattura bimalleolare della caviglia destra ha il codice S82.851A. Nel catalogo CIPI la riduzione a cielo aperto di frattura bimalleolare ha codice CIPI 79.36.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S82.851A', description: 'Frattura bimalleolare della gamba destra (caviglia), contatto iniziale per frattura chiusa', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'S93.431A', description: 'Distorsione del legamento tibio-peroneale distale della caviglia destra (diastasi sindesmotica)', system: 'ICD-10-IM' },
          { code: 'W10.9XXA', description: 'Caduta da o su scale o gradini, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-79.36', description: 'Riduzione a cielo aperto di frattura di tibia e perone con fissazione interna (ORIF bimalleolare)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '824.4', description: 'Frattura bimalleolare chiusa', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '845.03', description: 'Distorsione della caviglia, legamento tibio-peroneale distale', system: 'ICD-9-CM' }],
        procedures: [{ code: '79.36', description: 'Riduzione a cielo aperto di frattura di tibia e perone con fissazione interna', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'S82.851A identifica espressamente la frattura bimalleolare destra con il 7° carattere "A".',
        'La diastasi sindesmotica associata (S93.431A) giustifica clinicamente il posizionamento della vite di posizionamento sindesmotica.',
        'La procedura CIPI 79.36 codifica la sintesi combinata tibia-peroneale.'
      ],
      commonCognitiveErrors: [
        'Codificare singola frattura del malleolo peroneale (S82.6) ignorando il coinvolgimento bimalleolare.',
        'Omettere la codifica della lesione sindesmotica.'
      ],
      chartDocumentationAdvice: 'Attestare l\'esito dell\'Hook test (Cotton test) per la tenuta della sindesmosi e la distanza tibio-peroneale chiara alla scopia (< 5 mm).'
    }
  },
  {
    id: 'orto-8',
    specialtyId: 'ortopedia',
    caseNumber: 8,
    title: 'Rottura a tutto spessore della cuffia dei rotatori (sovraspinato) della spalla destra trattata con riparazione artroscopica ed acromioplastica',
    complexity: 'Base',
    subCategory: 'Chirurgia Artroscopica della Spalla',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 57 anni',
      admissionReason: 'Spalla dolorosa destra cronica ingravescente da oltre 6 mesi con risvegli notturni per dolore, deficit marcato nell\'abduzione attiva ed impossibilità a sollevare carichi.',
      anamnesis: 'Lavoratore manuale (imbianchino), non risposta a terapia fisica e cicli infiltrativi.',
      hospitalCourse: 'Obiettività: segno di Jobe, Neer e Hawkins positivi; Drop arm test debolmente positivo a 90°. RMN spalla destra: rottura a tutto spessore del tendine del muscolo sovraspinato con retrazione tendinea di circa 2 cm (Grado II sec. Patte) associata ad iniziale discesa del capo lungo del bicipite (tendinopatia degenerativa) e sperone osteofitico acromiale anteriore (acromion di tipo III sec. Bigliani). Intervento in artroscopia spalla destra in posizione "beach chair": debridement sinoviale subacromiale, acromioplastica antero-inferiore secondo Neer con fresa motorizzata per decompressione subacromiale; preparazione dell\'impronta sul trochite omerale (footprint) e reinserzione anatomica del tendine sovraspinato mediante tecnica trans-ossea equivalente (doppia fila / suture bridge) con 2 ancorette mediali e 2 ancorette laterali in PEEK riassorbibile; tenotomia del capo lungo del bicipite.',
      proceduresConducted: 'Riparazione artroscopica della cuffia dei rotatori della spalla, acromioplastica artroscopica (decompressione subacromiale), tenotomia del capo lungo del bicipite.',
      dischargeStatus: 'Dimesso in prima giornata con tutore a cuscino di abduzione a 15° per 4 settimane e programma di mobilizzazione passiva assistita.'
    },
    documentationGapsWarning: 'In ICD-10-IM la rottura atraumatica/completa della cuffia dei rotatori della spalla destra ha il codice M75.121. Nel catalogo CIPI la riparazione della cuffia dei rotatori ha il codice CIPI 83.63.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'M75.121', description: 'Rottura completa della cuffia dei rotatori della spalla destra, non specificata come traumatica', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'M75.41', description: 'Sindrome da conflitto della spalla destra (Impingement subacromiale)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-83.63', description: 'Riparazione della cuffia dei rotatori (sutura tendinea artroscopica)', system: 'CIPI' },
          { code: 'CIPI-81.83', description: 'Altra riparazione della spalla / acromioplastica con decompressione subacromiale', system: 'CIPI' },
          { code: 'CIPI-80.21', description: 'Artroscopia della spalla', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '727.61', description: 'Rottura completa della cuffia dei rotatori', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '726.0', description: 'Capsulite adesiva della spalla', system: 'ICD-9-CM' }],
        procedures: [{ code: '83.63', description: 'Riparazione della cuffia dei rotatori', system: 'ICD-9-CM' }, { code: '80.21', description: 'Artroscopia della spalla', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'M75.121 distingue la lesione completa atraumatica degenerativa con esatta specificazione della spalla destra.',
        'La procedura combinata CIPI 83.63 (riparazione tendinea) e CIPI 81.83 (acromioplastica ossea) documenta l\'intervento completo di riparazione e decompressione acromiale.'
      ],
      commonCognitiveErrors: [
        'Confondere la rottura completa della cuffia dei rotatori con una semplice periartrite o capsulite adesiva.',
        'Omettere la procedura di acromioplastica eseguita contestualmente.'
      ],
      chartDocumentationAdvice: 'Attestare l\'entità della retrazione tendinea sec. Patte, il grado di infiltrazione adiposa muscolare sec. Goutallier alla RMN e il numero di ancorette impiegate.'
    }
  },
  {
    id: 'orto-9',
    specialtyId: 'ortopedia',
    caseNumber: 9,
    title: 'Ernia discale lombare L4-L5 espulsa con radicolopatia acuta e deficit motorio (piede cadente) trattata con microdiscectomia',
    complexity: 'Intermedio',
    subCategory: 'Chirurgia Vertebrale / Neuro-ortopedia',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 42 anni',
      admissionReason: 'Lombosciatalgia sinistra iperacuta insorta dopo sforzo di sollevamento con improvviso deficit motorio nella dorsiflessione del piede sinistro (piede cadente da deficit della radice L5, forza 2/5 MRC) e perdita di sensibilità sul primo spazio interdigitale.',
      anamnesis: 'Paziente privo di altre patologie, sedentario.',
      hospitalCourse: 'Obiettività neurologica: segno di Lasègue positivo a 20° a sinistra con dolore folgorante, assente riflesso tibiale posteriore, deficit del muscolo estensore comune delle dita e tibiale anteriore (marcia steppante). RMN colonna lombo-sacrale d\'urgenza: voluminosa ernia discale contenuta-espulsa a livello dello spazio intersomatico L4-L5 a sede foraminale ed extraforaminale sinistra con marcata compressione estrinseca sulla radice nervosa L5 emergente. Indicazione a chirurgia decompressiva d\'urgenza per deficit neurologico motorio acuto in progressione. Eseguito intervento di microdiscectomia lombare sinistra al microscopio operatorio: laminotomia selettiva L4-L5 sinistra, flavectomia, visualizzazione della radice L5 fortemente compressa ed iperemica, dislocazione mediale del sacco durale e rimozione del voluminoso frammento discale espulso e sequestrato nel canale foraminale, foraminotomia di decompressione.',
      proceduresConducted: 'Discectomia lombare microchirurgica con microscopio operatore, flavectomia e foraminotomia decompressiva.',
      dischargeStatus: 'Dimesso al 2° giorno con immediata detensione del dolore sciatico e parziale recupero della forza di dorsiflessione del piede (3-4/5 MRC).'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'ernia discale lombare con radicolopatia ha il codice M51.16. Nel catalogo CIPI la microdiscectomia è codificata con CIPI 80.51.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'M51.16', description: 'Disturbi dei dischi intervertebrali della regione lombare con radicolopatia (Ernia discale L4-L5)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'G57.62', description: 'Lesione del nervo peroniero / deficit radicolare L5 arto inferiore sinistro', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-80.51', description: 'Escissione di disco intervertebrale (Discectomia/microdiscectomia lombare)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '722.10', description: 'Spostamento di disco intervertebrale lombare senza menzione di mielopatia', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '724.4', description: 'Neurite o radicolite toracica o lombosacrale', system: 'ICD-9-CM' }],
        procedures: [{ code: '80.51', description: 'Escissione di disco intervertebrale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'M51.16 definisce formalmente l\'ernia del disco lombare associata a sofferenza radicolare.',
        'La presenza del deficit motorio (piede cadente) rende la decompressiva indifferibile.',
        'La procedura CIPI 80.51 corrisponde alla discectomia chirurgica aperta/microscopica.'
      ],
      commonCognitiveErrors: [
        'Codificare semplice lombalgia comune M54.5 omettendo la radicolopatia e l\'ernia discale conclamata M51.16.',
        'Utilizzare codice di fusione/artrodezi quando è stata eseguita una sola microdiscectomia decompressiva senza impianto di cage o viti.'
      ],
      chartDocumentationAdvice: 'Attestare la gradazione del deficit motorio pre e post operatorio secondo la scala MRC (0-5) e il livello discale esatto.'
    }
  },
  {
    id: 'orto-10',
    specialtyId: 'ortopedia',
    caseNumber: 10,
    title: 'Frattura articolare scomposta del piatto tibiale esterno con infossamento (Schatzker II) trattata con ORIF ed innesto osseo',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Traumatologia / Osteosintesi Complessa',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 51 anni',
      admissionReason: 'Trauma ad alta energia al ginocchio destro a seguito di collisione motociclistica con trauma diretto laterale; dolore violento, emartro teso ed impossibilità a flettere il ginocchio.',
      anamnesis: 'Paziente in buono stato di salute.',
      hospitalCourse: 'Rx e TC ginocchio destro con ricostruzioni 3D: frattura scomposta con rima di scollamento della colonna laterale del piatto tibiale associata ad infossamento articolare della superficie di carico di 8 mm (Frattura piatto tibiale Schatzker II / AO/OTA 41-B3). Eseguito intervento a cielo aperto per via antero-laterale sub-meniscale: sollevamento del corno anteriore del menisco esterno; visualizzazione della depressione osteocondrale articolare, riduzione anatomica con elevatore osseo fino al perfetto ripristino della superficie orizzontale; colmatura del difetto metafisario spongioso sottostante mediante impacco di innesto osseo sintetico in fosfato tricalcico; osteosintesi con placca anatomica per piatto tibiale laterale a stabilità angolare (placca LCP a "L") con 4 viti da sostegno subcondrali a zampa d\'aquila.',
      proceduresConducted: 'Riduzione a cielo aperto di frattura della tibia con fissazione interna (ORIF piatto tibiale), innesto osseo di riempimento del difetto metafisario.',
      dischargeStatus: 'Dimesso in 4a giornata post-operatoria con ginocchiera articolata bloccata in estensione, carico assolutamente vietato per 8 settimane per evitare il collasso articolare.'
    },
    documentationGapsWarning: 'In ICD-10-IM la frattura del piatto tibiale destro ha il codice specifico S82.101A. Nel catalogo CIPI la procedura a cielo aperto è CIPI 79.36 combinata con CIPI 78.07 (innesto osseo).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S82.101A', description: 'Frattura dell\'estremità superiore della tibia destra (piatto tibiale), contatto iniziale per frattura chiusa', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'V29.9XXA', description: 'Motociclista ferito in incidente di trasporto non specificato, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-79.36', description: 'Riduzione a cielo aperto di frattura della tibia con fissazione interna (ORIF con placca)', system: 'CIPI' },
          { code: 'CIPI-78.07', description: 'Innesto osseo sulla tibia o perone (Riempimento di difetto osseo metafisario)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '823.00', description: 'Frattura dell\'estremità superiore della tibia chiusa', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: 'E819.2', description: 'Incidente stradale con motocicletta', system: 'ICD-9-CM' }],
        procedures: [{ code: '79.36', description: 'Riduzione a cielo aperto di frattura di tibia con fissazione interna', system: 'ICD-9-CM' }, { code: '78.07', description: 'Innesto osseo di tibia', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'S82.101A individua specificamente la frattura dell\'estremo prossimale tibiale destro.',
        'La procedura aggiuntiva dell\'innesto osseo (CIPI 78.07) deve essere codificata congiuntamente all\'ORIF (CIPI 79.36) per valorizzare la complessità del ripristino dell\'infossamento subcondrale.'
      ],
      commonCognitiveErrors: [
        'Omettere la procedura di innesto osseo di sostegno, che ha un impatto rilevante sulla complessità chirurgica.',
        'Codificare frattura diafisaria della gamba anziché epifisaria articolare.'
      ],
      chartDocumentationAdvice: 'Attestare l\'entità dell\'infossamento articolare in millimetri prima e dopo la riduzione e la classificazione di Schatzker.'
    }
  },
  {
    id: 'orto-11',
    specialtyId: 'ortopedia',
    caseNumber: 11,
    title: 'Alluce valgo doloroso severo con metatarsalgia di trasferimento trattato con osteotomia di Scarf del 1° metatarso e osteotomia di Akin',
    complexity: 'Base',
    subCategory: 'Chirurgia del Piede e Caviglia',
    clinicalScenario: {
      patientAgeSex: 'Donna, 54 anni',
      admissionReason: 'Dolore severo cronico alla deambulazione in corrispondenza dell\'eminenza mediale (borsite metatarsale) del primo dito del piede sinistro, con conflitto contro la calzatura e dolore plantare sotto la testa del secondo metatarso (metatarsalgia di trasferimento).',
      anamnesis: 'Paziente fumatrice moderata, familiarità per deformità dell\'avampiede.',
      hospitalCourse: 'Rx piede sinistro in carico: angolo di alluce valgo (HVA) di 36°, angolo intermetatarsale (IMA) di 17° con sublussazione dei sesamoidi ed iniziale sovraccarico sul secondo raggio. Eseguito intervento correttivo a cielo aperto in anestesia loco-regionale (blocco sciatico-femorale/popliteo): capsulotomia mediale ed esostosectomia della testa del primo metatarso; osteotomia a "Z" diafisaria-metafisaria del primo metatarso sec. Scarf con traslazione laterale e sintesi con 2 viti da osteotomia in titanio a compressione; osteotomia cuneiforme di riallineamento della falange prossimale sec. Akin con singola vite a stabilità angolare; tenotomia del tendine adduttore dell\'alluce e liberazione laterale capsulare; capsulorrafia mediale a tensione calibrata.',
      proceduresConducted: 'Osteotomia correttiva del primo metatarso (osteotomia di Scarf), osteotomia della falange dell\'alluce (osteotomia di Akin), esostosectomia / bunionectomia del metatarso.',
      dischargeStatus: 'Dimessa in prima giornata con scarpa post-operatoria piana a suola rigida tipo Barouk (carico concesso sul retropiede) per 4-5 settimane.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'alluce valgo acquisito del piede sinistro ha il codice specifico M20.12. Nel catalogo CIPI le osteotomie correttive metatarsali e falangee hanno codici distinti.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'M20.12', description: 'Alluce valgo (acquisito), piede sinistro', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'M77.42', description: 'Metatarsalgia, piede sinistro', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-77.51', description: 'Bunionectomia con osteotomia del primo metatarso (Osteotomia di Scarf)', system: 'CIPI' },
          { code: 'CIPI-77.56', description: 'Altra osteotomia correttiva delle dita del piede (Osteotomia di Akin)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '735.0', description: 'Alluce valgo acquisito', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '726.70', description: 'Entesopatia della caviglia e del tarso (metatarsalgia)', system: 'ICD-9-CM' }],
        procedures: [{ code: '77.51', description: 'Bunionectomia con osteotomia del primo metatarso', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'M20.12 definisce formalmente l\'alluce valgo con lateralità sinistra.',
        'La procedura CIPI 77.51 codifica l\'osteotomia metatarsale, mentre la CIPI 77.56 traccia l\'osteotomia associata sulla falange secondo Akin.'
      ],
      commonCognitiveErrors: [
        'Codificare solo l\'asportazione della "cipolla" (bunionectomia semplice CIPI 77.59) omettendo la duplice osteotomia scheletrica complessa Scarf+Akin.',
        'Omettere la lateralità sinistra.'
      ],
      chartDocumentationAdvice: 'Attestare la correzione degli angoli HVA ed IMA al controllo radiografico post-operatorio e il riallineamento dei sesamoidi.'
    }
  },
  {
    id: 'orto-12',
    specialtyId: 'ortopedia',
    caseNumber: 12,
    title: 'Frattura diafisaria spiroide dell\'omero destro con paresi secondaria del nervo radiale trattata con chiodo endomidollare',
    complexity: 'Intermedio',
    subCategory: 'Traumatologia Arto Superiore / Osteosintesi',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 38 anni',
      admissionReason: 'Trauma sportivo con violenta torsione del braccio destro; deformità angolare a metà braccio, tumefazione ed impotenza funzionale immediata con mano cadente.',
      anamnesis: 'Paziente in ottime condizioni fisiche.',
      hospitalCourse: 'Obiettività: deficit di estensione attiva del polso e delle dita della mano destra (mano cadente) con ipoestesia del primo spazio intermetacarpale dorsale, polsi distali radiali e ulnari normosfigmici (neuropatologia da stiramento del nervo radiale nel solco spirale omomerale). Rx omero destro: frattura diafisaria spiroide al terzo medio-distale (AO/OTA 12-A1). Eseguito intervento di riduzione chiusa ed osteosintesi endomidollare con chiodo omerale anterogrado bloccato introdotto attraverso una via mininvasiva trans-deltoidea sotto amplificatore di brillantezza: posizionamento di chiodo in titanio da 8 mm con 2 viti di bloccaggio prossimali e 2 viti di bloccaggio distali. Assenza di lesione neurotmesica al controllo; monitoraggio neurologico dell\'attività motoria del radiale.',
      proceduresConducted: 'Riduzione chiusa di frattura dell\'omero con fissazione interna (osteosintesi con chiodo endomidollare bloccato), scopia intraoperatoria.',
      dischargeStatus: 'Dimesso al 3° giorno post-operatorio con tutore reggibraccio; prescritto studio elettromiografico a 4 settimane (neuraprassia in progressivo recupero spontaneo).'
    },
    documentationGapsWarning: 'In ICD-10-IM la frattura della diafisi omerale destra ha il codice S42.301A. La lesione secondaria del nervo radiale ha codice S44.21XA.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S42.301A', description: 'Frattura della diafisi dell\'omero destro, contatto iniziale per frattura chiusa', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'S44.21XA', description: 'Lesione del nervo radiale a livello del braccio destro, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-79.11', description: 'Riduzione chiusa di frattura dell\'omero con fissazione interna (chiodo endomidollare omerale)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '812.20', description: 'Frattura della diafisi dell\'omero chiusa', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '955.3', description: 'Lesione del nervo radiale', system: 'ICD-9-CM' }],
        procedures: [{ code: '79.11', description: 'Riduzione chiusa di frattura dell\'omero con fissazione interna', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'S42.301A definisce la sede diafisaria dell\'omero con lateralità destra.',
        'La lesione nervosa periferica associata (S44.21XA) documenta la complicanza neurologica acuta (mano cadente).',
        'La procedura CIPI 79.11 identifica la sintesi endomidollare chiusa.'
      ],
      commonCognitiveErrors: [
        'Omettere la codifica della paresi del nervo radiale associata.',
        'Codificare riduzione a cielo aperto (79.31) quando il chiodo è stato inserito con metodica chiusa percutanea/mini-invasiva.'
      ],
      chartDocumentationAdvice: 'Attestare l\'esame obiettivo neurologico pre e post operatorio del nervo radiale (estensione del polso e del pollice).'
    }
  },
  {
    id: 'orto-13',
    specialtyId: 'ortopedia',
    caseNumber: 13,
    title: 'Infezione periprotesica cronica d\'anca destra trattata con espianto di protesi e spaziatore articolare in cemento con antibiotico (I tempo)',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Chirurgia di Revisione Protesica / Infezioni Periprotesiche (PJI)',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 73 anni',
      admissionReason: 'Coxalgia ingravescente continua a riposo e al carico sull\'anca destra protesizzata 2 anni prima, comparsa di fistola cutanea siero-purulenta drenante in sede trocanterica con febbre serotina.',
      anamnesis: 'Portatore di artroprotesi d\'anca destra per artrosi, diabete tipo 2, vasculopatia periferica.',
      hospitalCourse: 'VES 84 mm/h, PCR 62 mg/L. Rx anca: osteolisi periprotesica e mobilizzazione sia della componente cotiloidea che femorale. Artrocentesi d\'anca ecoguidata: liquido purulento con leucociti > 45.000/mcL (92% PMN) e test della leucocito-esterasi positivo. Colture positive per Staphylococcus epidermidis meticillino-resistente (MRSE). Diagnosi di infezione periprotesica cronica (PJI) secondo i criteri EBJIS/MSIS. Indicazione a revisione protesica in due tempi ("two-stage exchange"). Eseguito primo tempo chirurgico: approccio postero-laterale con escissione del tragitto fistoloso, debridement aggressivo e sinoviectomia radicale estesa; espianto completo dello stelo femorale e della coppa acetabolare mobilizzati; lavaggio pulsato con 9 litri di soluzione salina; impianto di spaziatore articolare preformato in cemento acrilico addizionato con gentamicina e vancomicina; posizionamento di drenaggi aspirativi.',
      proceduresConducted: 'Rimozione totale di artroprotesi d\'anca (espianto di cotile e stelo protesico), debridement radicale di infezione ossea/articolare, inserimento di spaziatore articolare antibiotato in cemento.',
      dischargeStatus: 'Dimesso al 12° giorno con spaziatore stabile in sede, ferita guarita senza secrezioni e terapia antibiotica mirata protratta per 6 settimane in attesa del II tempo di reimpianto.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'infezione di protesi articolare interna dell\'anca destra ha il codice T84.51XA. La procedura di rimozione di protesi d\'anca è CIPI 80.05 / 00.70 e posizionamento di spaziatore 84.56.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'T84.51XA', description: 'Infezione e reazione infiammatoria dovuta a protesi articolare interna dell\'anca destra, contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'B95.7', description: 'Altri stafilococchi come causa di malattie classificate in altri capitoli (Staphylococcus epidermidis MRSE)', system: 'ICD-10-IM' },
          { code: 'E11.9', description: 'Diabete mellito di tipo 2', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-80.05', description: 'Rimozione di protesi articolare dell\'anca (Espianto di protesi totale)', system: 'CIPI' },
          { code: 'CIPI-84.56', description: 'Inserimento di spaziatore articolare in cemento (spaziatore antibiotato per infezione)', system: 'CIPI' },
          { code: 'CIPI-80.85', description: 'Altro sbrigliamento / sinoviectomia locale di articolazione dell\'anca', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '996.66', description: 'Infezione dovuta a protesi articolare interna', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '041.10', description: 'Infezione da stafilococco', system: 'ICD-9-CM' }],
        procedures: [{ code: '80.05', description: 'Rimozione di protesi articolare dell\'anca', system: 'ICD-9-CM' }, { code: '84.56', description: 'Inserimento di spaziatore articolare', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'T84.51XA definisce la grave complicanza infettiva periprotesica dell\'anca destra.',
        'La combinazione di espianto protesico (CIPI 80.05) e posizionamento di spaziatore in cemento (CIPI 84.56) documenta in modo inequivocabile il primo tempo di una procedura di two-stage exchange.',
        'Il codice microbiologico associato B95.7 identifica lo Stafilococco epidermidis isolato.'
      ],
      commonCognitiveErrors: [
        'Codificare una banale mobilizzazione asettica (T84.03) quando le colture e i parametri sinoviali dimostrano inequivocabilmente una sepsi articolare attiva.',
        'Omettere la procedura di posizionamento dello spaziatore antibiotato.'
      ],
      chartDocumentationAdvice: 'Attestare nel verbale i criteri MSIS positivi (VES, PCR, conta leucocitaria sinoviale) e l\'elenco degli antibiotici miscelati nel cemento dello spaziatore.'
    }
  },
  {
    id: 'orto-14',
    specialtyId: 'ortopedia',
    caseNumber: 14,
    title: 'Spondilolistesi degenerativa instabile L4-L5 con stenosi del canale trattata con decompressione ed artrodesi circonferenziale (TLIF)',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Chirurgia Vertebrale / Artrodesi Strumentata',
    clinicalScenario: {
      patientAgeSex: 'Donna, 68 anni',
      admissionReason: 'Lombalgia cronica invalidante con claudicatio spinale neurogena (autonomia di marcia ridotta a meno di 100 metri per pesantezza e parestesie a entrambi gli arti inferiori).',
      anamnesis: 'Ipertensione arteriosa, osteopenia moderata.',
      hospitalCourse: 'Rx dinamiche colonna lombare in flesso-estensione: scivolamento anteriore di L4 su L5 di 7 mm con incremento dell\'instabilità in flessione (Spondilolistesi degenerativa di Grado II sec. Meyerding). RMN lombare: marcata stenosi concentrica del canale vertebrale centrale e dei recessi laterali a livello L4-L5 da ipertrofia massiva dei massicci articolari e del ligamento flavum con compressione della cauda equina. Eseguito intervento di decompressione ed artrodesi vertebrale lombare strumentata: approccio posteriore mediano, esposizione dei massicci L4-L5; posizionamento di 4 viti peduncolari bilaterali in titanio; laminectomia decompressiva completa L4 e flavectomia con decompressione bilaterale delle radici L4 ed L5; discectomia completa dello spazio L4-L5 ed inserimento per via transforaminale di gabbia intersomatica in PEEK (TLIF) riempita di innesto osseo autologo ricavato dalla laminectomia e sostituto osseo; collegamento con barre longitudinali in lordosi e bloccaggio definitivo.',
      proceduresConducted: 'Fusione intersomatica lombare transforaminale (TLIF), artrodesi vertebrale posteriore strumentata con viti peduncolari su 1 livello, laminectomia lombare decompressiva, foraminotomia.',
      dischargeStatus: 'Dimessa in 5a giornata con corsetto ortopedico lombo-sacrale a stecche, deambulazione autonoma priva di sintomi claudicanti.'
    },
    documentationGapsWarning: 'In ICD-10-IM la spondilolistesi lombare ha il codice M43.16. Nel catalogo CIPI l\'artrodesi posteriore strumentata ha codice CIPI 81.08 associato alla gabbia intersomatica CIPI 84.51.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'M43.16', description: 'Spondilolistesi della regione lombare', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'M48.061', description: 'Stenosi spinale della regione lombare senza claudicatio neurogena (Stenosi del canale vertebrale)', system: 'ICD-10-IM' },
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-81.08', description: 'Artrodesi vertebrale lombare posteriore/postero-laterale', system: 'CIPI' },
          { code: 'CIPI-84.51', description: 'Inserimento di dispositivo di fusione intervertebrale (Gabbia intersomatica / cage TLIF)', system: 'CIPI' },
          { code: 'CIPI-03.09', description: 'Altra esplorazione e decompressione del canale spinale (Laminectomia decompressiva)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '738.4', description: 'Spondilolistesi acquisita', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '724.02', description: 'Stenosi del canale spinale lombare', system: 'ICD-9-CM' }],
        procedures: [
          { code: '81.08', description: 'Artrodesi lombare e lombosacrale, tecnica posteriore', system: 'ICD-9-CM' },
          { code: '84.51', description: 'Inserimento di dispositivo di fusione vertebrale', system: 'ICD-9-CM' }
        ]
      },
      rulesAppliedExplanation: [
        'M43.16 identifica univocamente la spondilolistesi della colonna lombare.',
        'La procedura complessa richiede l\'associazione della fusione posteriore (CIPI 81.08), della gabbia intersomatica cage (CIPI 84.51) e della laminectomia decompressiva (CIPI 03.09).'
      ],
      commonCognitiveErrors: [
        'Omettere la gabbia intersomatica CIPI 84.51, declassando l\'intervento a semplice artrodesi posterolaterale senza supporto anteriore.',
        'Codificare laminectomia decompressiva isolata dimenticando la stabilizzazione strumentata.'
      ],
      chartDocumentationAdvice: 'Attestare nel verbale operatorio il grado di scivolamento sec. Meyerding, il numero di livelli strumentati (1 livello: L4-L5) e le dimensioni della cage TLIF.'
    }
  },
  {
    id: 'orto-15',
    specialtyId: 'ortopedia',
    caseNumber: 15,
    title: 'Frattura esposta di gamba destra (tibia e perone) Gustilo II trattata con debridement e fissatore esterno temporaneo',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Traumatologia Maggiore / Fissazione Esterna',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 35 anni',
      admissionReason: 'Incidente stradale moto contro auto con trauma diretto violento sulla gamba destra; deformità evidente ad esse, esposizione ossea con ferita cutanea lacero-contusa pretibiale di circa 4 cm.',
      anamnesis: 'Paziente giovane in buona salute, non allergie.',
      hospitalCourse: 'In Pronto Soccorso/Shock Room: polsi periferici tibiale posteriore e pedidio normosfigmici, escursione delle dita valida ma dolorosa, ferita cutanea di 4 cm con fuoriuscita di monconi ossei e detriti stradali priva di perdita massiva di sostanza (Frattura esposta Grado II secondo classificazione di Gustilo-Anderson). Somministrazione immediata di antibiotico EV ad ampio spettro (Cefazolina) e siero antitetanico. Rx gamba destra: frattura pluriframmentaria diafisaria scomposta del terzo medio di tibia e perone (AO/OTA 42-B2). Condotto d\'urgenza in sala operatoria entro 4 ore: esteso lavaggio pulsato a bassa pressione con 9 litri di soluzione fisiologica sterile, debridement accurato dei tessuti devitalizzati ed escissione dei margini cutanei contaminati; riduzione chiusa della frattura sotto scopia e stabilizzazione d\'emergenza mediante montaggio di fissatore esterno a ponte transarticolare o tibiale ibrido a telaio modulare con fiches bicorticali; sintesi della cute sopra drenaggio senza tensione.',
      proceduresConducted: 'Debridement chirurgico di frattura esposta della gamba con lavaggio pulsato, applicazione di dispositivo di fissazione esterna (Fissatore esterno tibiale)',
      dischargeStatus: 'Ricoverato in reparto ortopedico in attesa di guarigione delle parti molli per conversione programmata ad osteosintesi interna con chiodo endomidollare a 10 giorni.'
    },
    documentationGapsWarning: 'In ICD-10-IM la frattura diafisaria di tibia destra esposta richiede il 7° carattere specifico per frattura aperta (ad es. "B" per frattura aperta tipo I/II): S82.201B.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S82.201B', description: 'Frattura della diafisi della tibia destra, contatto iniziale per frattura esposta di tipo I o II', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'S82.401B', description: 'Frattura della diafisi del perone destro, contatto iniziale per frattura esposta', system: 'ICD-10-IM' },
          { code: 'V29.9XXA', description: 'Motociclista ferito in incidente di trasporto, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-78.17', description: 'Applicazione di dispositivo di fissazione esterna su tibia o perone (Fissatore esterno)', system: 'CIPI' },
          { code: 'CIPI-79.66', description: 'Sbrigliamento di sito di frattura aperta della tibia e del perone (Debridement)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '823.30', description: 'Frattura della diafisi di tibia e perone, aperta', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: 'E819.2', description: 'Incidente stradale', system: 'ICD-9-CM' }],
        procedures: [{ code: '78.17', description: 'Applicazione di fissatore esterno alla tibia', system: 'ICD-9-CM' }, { code: '79.66', description: 'Sbrigliamento di sede di frattura aperta', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'S82.201B distingue con assoluta specificità normativa la frattura esposta (carattere "B") rispetto alla frattura chiusa (carattere "A").',
        'L\'applicazione del fissatore esterno temporaneo (CIPI 78.17) e il debridement dei tessuti molli (CIPI 79.66) qualificano l\'atto di chirurgia del controllo del danno ortopedico.'
      ],
      commonCognitiveErrors: [
        'Utilizzare il codice di frattura chiusa dimenticando il 7° carattere di esposizione (B).',
        'Omettere la procedura di debridement della frattura aperta (CIPI 79.66).'
      ],
      chartDocumentationAdvice: 'Attestare la classificazione di Gustilo-Anderson (Grado II), l\'intervallo temporale trauma-sala operatoria e il volume di lavaggio effettuato.'
    }
  },
  {
    id: 'orto-16',
    specialtyId: 'ortopedia',
    caseNumber: 16,
    title: 'Pseudoartrosi atrofica asettica dello scafoide carpale destro trattata con innesto osseo autologo da cresta iliaca e vite di Herbert',
    complexity: 'Intermedio',
    subCategory: 'Chirurgia della Mano e del Polso',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 27 anni',
      admissionReason: 'Dolore cronico al polso destro durante il carico e la flesso-estensione (alla tabacchiera anatomica), calo della forza di prensione a distanza di 9 mesi da una caduta sportiva trattata inizialmente come semplice distorsione.',
      anamnesis: 'Non fumatore, sportivo.',
      hospitalCourse: 'Rx e TC polso destro con tagli sagittali lungo l\'asse dello scafoide: mancata consolidazione della frattura del terzo medio (corpo) dello scafoide carpale con riassorbimento osseo dei margini di frattura, sclerosi subcondrale, perdita di altezza ed iniziale collabimento a "gobba di cammello" (humpback deformity) compatibile con pseudoartrosi atrofica asettica dello scafoide sec. classificazione di Herbert tipo D1. RMN polso conferma vitalità e vascolarizzazione conservata del polo prossimale (assenza di osteonecrosi avascolare). Eseguito intervento a cielo aperto per via volare sec. Russe: rimozione del tessuto fibroso interposto ed apertura del canale midollare dei due monconi; prelievo di innesto osseo cortico-spongioso a cuneo da cresta iliaca anteriore destra; inserimento dell\'innesto a ripristino della lunghezza anatomica dello scafoide; osteosintesi con vite cannulata a compressione differenziata a scomparsa (vite di Herbert) posizionata lungo l\'asse longitudinale sotto controllo scopia.',
      proceduresConducted: 'Riduzione a cielo aperto di pseudoartrosi dello scafoide carpale con fissazione interna (vite di Herbert), innesto osseo autologo da cresta iliaca con prelievo osseo.',
      dischargeStatus: 'Dimesso in 2a giornata con apparecchio gessato che include il primo dito per 6 settimane fino a controllo TC di avvenuta consolidazione.'
    },
    documentationGapsWarning: 'In ICD-10-IM la mancata consolidazione/pseudoartrosi di frattura dello scafoide destro ha il codice con 7° carattere "K" (Mancata consolidazione): S62.001K.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S62.001K', description: 'Frattura dello scafoide carpale della mano destra, contatto successivo per frattura con mancata consolidazione (Pseudoartrosi)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'M84.141A', description: 'Mancata consolidazione di frattura, mano destra', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-78.04', description: 'Innesto osseo sulle ossa del carpo e metacarpo (Innesto osseo su scafoide)', system: 'CIPI' },
          { code: 'CIPI-77.79', description: 'Escissione di osso per innesto da cresta iliaca (Prelievo di osso autologo)', system: 'CIPI' },
          { code: 'CIPI-78.54', description: 'Fissazione interna di osso carpale senza riduzione di frattura (Vite di Herbert)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '733.82', description: 'Mancata consolidazione di frattura (pseudoartrosi)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '905.2', description: 'Effetti tardivi di frattura dell\'arto superiore', system: 'ICD-9-CM' }],
        procedures: [{ code: '78.04', description: 'Innesto osseo su carpo e metacarpo', system: 'ICD-9-CM' }, { code: '77.79', description: 'Prelievo di osso per innesto', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'Il 7° carattere "K" in ICD-10-IM è specificamente dedicato alla complicanza di mancata consolidazione (nonunion/pseudoartrosi).',
        'La procedura richiede la corretta associazione di innesto osseo (CIPI 78.04), prelievo autologo da cresta iliaca (CIPI 77.79) e fissazione con vite (CIPI 78.54).'
      ],
      commonCognitiveErrors: [
        'Utilizzare il codice di frattura acuta iniziale (carattere "A") per una pseudoartrosi inveterata da 9 mesi.',
        'Omettere la procedura di prelievo osseo autologo dalla cresta iliaca.'
      ],
      chartDocumentationAdvice: 'Attestare la vitalità vascolare del polo prossimale alla RMN o al sanguinamento intraoperatorio ("punctate bleeding") e il riallineamento dell\'angolo intrascafoideo.'
    }
  },
  {
    id: 'orto-17',
    specialtyId: 'ortopedia',
    caseNumber: 17,
    title: 'Instabilità gleno-omerale anteriore recidivante post-traumatica con perdita ossea trattata con intervento di Latarjet a cielo aperto',
    complexity: 'Intermedio',
    subCategory: 'Chirurgia della Spalla / Instabilità',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 23 anni',
      admissionReason: 'Episodi ricorrenti di lussazione anteriore della spalla destra (oltre 6 episodi negli ultimi 2 anni anche durante attività quotidiane e nel sonno) con senso costante di apprensione.',
      anamnesis: 'Paziente rugbista, primo episodio traumatico 3 anni fa.',
      hospitalCourse: 'Obiettività: Apprehension test ed Relocation test marcatamente positivi, test di Gagey negativo per iperlassità costituzionale. TC spalla con ricostruzioni 3D e soppressione della testa omerale (metodo Pico): difetto osseo del margine glenoideo antero-inferiore stimato al 22% della superficie glenoidea totale (lesione ossea di Bankart critica > 15-20%) associata a lesione di Hill-Sachs impegnante (off-track). Considerata la perdita di sostanza ossea critica, l\'équipe pone indicazione a stabilizzazione ossea sec. Latarjet a cielo aperto. Eseguito intervento per via delto-pettorale destra: isolamento ed osteotomia del processo coracoideo con conservazione del tendine congiunto; split longitudinale orizzontale del muscolo sottoscapolare; capsulotomia verticale; preparazione della glena anteriore decorticata; trasferimento del tassello coracoideo e fissazione a piatto sul margine glenoideo antero-inferiore mediante 2 viti cannulate in titanio a compressione; ricostruzione capsulare.',
      proceduresConducted: 'Stabilizzazione della spalla con innesto coracoideo (intervento di Latarjet a cielo aperto), osteosintesi con viti della coracoide trasposta.',
      dischargeStatus: 'Dimesso in 2a giornata con tutore tipo Desault a 0° per 3 settimane, controllo Rx attestante perfetto posizionamento del bone block a filo della rima articolare.'
    },
    documentationGapsWarning: 'In ICD-10-IM la lussazione recidivante/instabilità gleno-omerale della spalla destra ha il codice M24.411. La procedura di Latarjet a cielo aperto ha codice CIPI 81.82.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'M24.411', description: 'Lussazione recidivante della spalla destra', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'M25.311', description: 'Altra instabilità dell\'articolazione della spalla destra', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-81.82', description: 'Riparazione di lussazione recidivante della spalla (Procedura di Latarjet a cielo aperto)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '718.31', description: 'Lussazione recidivante della spalla', system: 'ICD-9-CM' },
        secondaryDiagnoses: [],
        procedures: [{ code: '81.82', description: 'Riparazione di lussazione ricorrente della spalla', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'M24.411 identifica specificamente l\'instabilità e lussazione recidivante della spalla destra.',
        'La procedura CIPI 81.82 codifica l\'intervento di Latarjet (trasferimento coracoideo con effetto "triple block" di bone block, tendine congiunto e riparazione capsulare).'
      ],
      commonCognitiveErrors: [
        'Codificare lussazione acuta traumatica (S43.0) per un quadro di instabilità cronica recidivante con perdita ossea.',
        'Assegnare codice di riparazione artroscopica semplice di Bankart (81.45) quando è stata eseguita una procedura ossea aperta a cielo aperto di Latarjet.'
      ],
      chartDocumentationAdvice: 'Attestare la percentuale esatta di perdita ossea glenoidea alla TC (bone loss %) e il concetto di lesione "on-track" vs "off-track".'
    }
  },
  {
    id: 'orto-18',
    specialtyId: 'ortopedia',
    caseNumber: 18,
    title: 'Rottura sottocutanea acuta del tendine d\'Achille sinistro trattata con tenorrafia percutanea mini-invasiva tipo Dresden',
    complexity: 'Base',
    subCategory: 'Chirurgia Tendinea / Traumatologia dello Sport',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 41 anni',
      admissionReason: 'Sensazione improvvisa di colpo violento/calcio sul polpaccio sinistro durante uno scatto a padel, seguita da zoppia acuta ed impossibilità al sollevamento monopodalico sulla punta del piede.',
      anamnesis: 'Paziente sportivo amatoriale, uso pregresso di fluorochinoloni 4 mesi prima per cistite.',
      hospitalCourse: 'Obiettività: solco palpabile (avvallamento cutaneo) lungo il decorso del tendine d\'Achille a circa 4 cm dalla giunzione calcaneare; test di Thompson nettamente positivo a sinistra (mancata flessione plantare passiva del piede alla compressione manuale del polpaccio); manovra di Matles positiva con perdita del normale equinismo fisiologico a ginocchio flesso a 90°. Ecografia tendinea: interruzione completa a tutto spessore delle fibre tendinee con diastasi di 18 mm ed ematoma intralesionale. Eseguito intervento di tenorrafia percutanea mini-invasiva sec. tecnica di Dresden: piccola incisione trasversale di 1.5 cm a livello del gap tendineo, inserimento della guida dedicata e passaggio dei fili di sutura ad alta resistenza non riassorbibili a monte e a valle dei monconi, trazione ed annodamento a piede flesso a 20° con perfetto ripristino della continuità e della tensione tendinea.',
      proceduresConducted: 'Sutura / tenorrafia percutanea mini-invasiva del tendine d\'Achille, ecografia pre-operatoria.',
      dischargeStatus: 'Dimesso al 1° giorno con tutore a stivaletto rigido con cunei di rialzo al tallone in equino a 20° e carico sfiorato assistito.'
    },
    documentationGapsWarning: 'In ICD-10-IM la rottura acuta del tendine d\'Achille sinistro ha il codice specifico S86.012A. Nel catalogo CIPI la tenorrafia ha il codice CIPI 83.64.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S86.012A', description: 'Lacerazione del tendine di Achille sinistro, contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'Y93.01', description: 'Attività svolta: sport con racchetta (padel)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-83.64', description: 'Altra sutura di tendine (Tenorrafia percutanea del tendine d\'Achille)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '841.0', description: 'Distorsione e rottura del tendine di Achille', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: 'E007.8', description: 'Attività: altro sport', system: 'ICD-9-CM' }],
        procedures: [{ code: '83.64', description: 'Altra sutura di tendine', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'S86.012A individua specificamente la rottura traumatica achillea sinistra con carattere iniziale "A".',
        'La procedura CIPI 83.64 codifica la riparazione/tenorrafia tendinea.'
      ],
      commonCognitiveErrors: [
        'Confondere la rottura acuta con una semplice tendinopatia achillea cronica (M76.62).',
        'Omettere la lateralità sinistra.'
      ],
      chartDocumentationAdvice: 'Attestare la positività dei test di Thompson e Matles e la distanza della rottura dall\'inserzione calcaneare (in cm).'
    }
  },
  {
    id: 'orto-19',
    specialtyId: 'ortopedia',
    caseNumber: 19,
    title: 'Frattura da compressione osteoporotica dolorosa di L1 trattata con cifoplastica percutanea con palloncino ed iniezione di PMMA',
    complexity: 'Base',
    subCategory: 'Chirurgia Vertebrale Mininvasiva',
    clinicalScenario: {
      patientAgeSex: 'Donna, 79 anni',
      admissionReason: 'Lombalgia dorsolombare acuta violentissima e disabilitante comparsa improvvisamente dopo un colpo di tosse, refrattaria a terapia analgesica oppioide e tale da impedire la posizione eretta e la seduta.',
      anamnesis: 'Osteoporosi senile marcata (T-score colonna -3.8), ipertensione arteriosa, celiachia.',
      hospitalCourse: 'Obiettività: vivace dolorabilità alla percussione del processo spinoso di L1. RMN colonna lombo-sacrale: crollo somatico con collasso della limitante somatica superiore di L1 con perdita di altezza del corpo vertebrale di circa il 35%, marcato edema spongioso intravertebrale ad alto segnale nelle sequenze STIR (indice di frattura recente attiva con mancata consolidazione, M1 sec. classificazione DGOU/OF) e muro posteriore integro senza invasione del canale midollare. Sottoposta ad intervento di cifoplastica percutanea con palloncino in sedazione profonda e guida fluoroscopica biplanare: posizionamento transpeduncolare bipeduncolare di due aghi cannula in L1, introduzione e gonfiaggio calibrato di due palloncini ad alta pressione con parziale ripristino dell\'altezza vertebrale e creazione di una cavità a bassa pressione; rimozione dei palloncini ed iniezione lenta e controllata di 4.5 mL di cemento acrilico radiopaco (PMMA) ad alta viscosità senza alcun stravaso venoso o perivertebrale.',
      proceduresConducted: 'Cifoplastica percutanea con palloncino su corpo vertebrale lombare (L1), iniezione di cemento osseo (PMMA), fluoroscopia continua.',
      dischargeStatus: 'Dimessa in 2a giornata con crollo del dolore alla scala VAS da 9/10 a 2/10, deambulazione autonoma ripresa immediatamente.'
    },
    documentationGapsWarning: 'In ICD-10-IM la frattura da compressione osteoporotica di vertebra lombare ha il codice dedicato M80.08XA (Osteoporosi postmenopausale con frattura patologica corrente di vertebra). Nel catalogo CIPI la cifoplastica è CIPI 81.66.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'M80.08XA', description: 'Osteoporosi postmenopausale con frattura patologica corrente della colonna vertebrale, contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-81.66', description: 'Cifoplastica percutanea vertebrale con iniezione di cemento sintetico (PMMA)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '733.13', description: 'Frattura patologica di vertebre', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '733.01', description: 'Osteoporosi senile', system: 'ICD-9-CM' }],
        procedures: [{ code: '81.66', description: 'Cifoplastica percutanea vertebrale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'M80.08XA combina l\'osteoporosi causale e la frattura patologica da fragilità scheletrica.',
        'La procedura CIPI 81.66 specifica la cifoplastica (con palloncino per ripristino dell\'altezza vertebrale), distinguendola dalla semplice vertebroplastica diretta senza espansione (CIPI 81.65).'
      ],
      commonCognitiveErrors: [
        'Confondere la cifoplastica (CIPI 81.66) con la vertebroplastica percutanea semplice (CIPI 81.65).',
        'Codificare frattura traumatica (S32.0) per un cedimento patologico da fragilità ossea pura.'
      ],
      chartDocumentationAdvice: 'Attestare l\'iperintensità di segnale alle sequenze STIR alla RMN (frattura recente non consolidata) e il volume in mL di PMMA iniettato.'
    }
  },
  {
    id: 'orto-20',
    specialtyId: 'ortopedia',
    caseNumber: 20,
    title: 'Frattura complessa dell\'acetabolo destro (colonna e parete posteriore) trattata con riduzione a cielo aperto e sintesi con placche',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Traumatologia Pelvica e Acetabolare Maggiore',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 46 anni',
      admissionReason: 'Politrauma della strada ad alta energia per scontro frontale auto contro camion con decelerazione violenta e impatto del ginocchio contro il cruscotto ("dashboard injury"); dolore pelvico acuto ed intolleranza al movimento dell\'arto inferiore destro.',
      anamnesis: 'Paziente in buone condizioni fisiche generali.',
      hospitalCourse: 'In Pronto Soccorso/Shock Room: arto destro intraruotato ed accorciato; ridotta immediatamente in narcosi una contestuale lussazione posteriore d\'anca. TC bacino con rendering 3D: frattura complessa della colonna posteriore associata a frattura comminuta della parete posteriore dell\'acetabolo destro con grossolano frammento intra-articolare e diastasi > 5 mm (classificazione di Judet-Letournel). Eseguito intervento a cielo aperto d\'urgenza differita per via posteriore sec. Kocher-Langenbeck: esposizione della colonna e parete posteriore; rimozione dei piccoli frammenti cartilaginei liberi endo-articolari; riduzione anatomica della rima articolare acetabolare sotto controllo radiologico e palpatorio; fissazione interna con 2 viti da trazione per la parete e modellamento ed applicazione di 2 placche di ricostruzione da 3.5 mm sagomate lungo il bordo della colonna posteriore e fissate con viti corticali con viti a direzione extra-articolare.',
      proceduresConducted: 'Riduzione a cielo aperto di frattura complessa dell\'acetabolo con fissazione interna (ORIF con placche di ricostruzione), rimozione di corpi liberi endo-articolari.',
      dischargeStatus: 'Dimesso in 7a giornata post-operatoria con prescrizione di divieto di carico sull\'arto destro per 10-12 settimane e profilassi tromboembolica ed eterotopica con indometacina.'
    },
    documentationGapsWarning: 'In ICD-10-IM la frattura dell\'acetabolo destro ha il codice specifico S32.401A. Nel catalogo CIPI l\'intervento a cielo aperto è CIPI 79.39.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S32.401A', description: 'Frattura dell\'acetabolo destro, contatto iniziale per frattura chiusa', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'S73.011A', description: 'Lussazione posteriore dell\'anca destra, contatto iniziale', system: 'ICD-10-IM' },
          { code: 'V43.52XA', description: 'Conducente di automobile ferito in collisione con autocarro in incidente di traffico', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-79.39', description: 'Riduzione a cielo aperto di frattura con fissazione interna, altre ossa specificate (ORIF dell\'acetabolo e bacino)', system: 'CIPI' },
          { code: 'CIPI-79.05', description: 'Riduzione chiusa di lussazione dell\'anca', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '808.0', description: 'Frattura dell\'acetabolo chiusa', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '835.01', description: 'Lussazione posteriore dell\'anca chiusa', system: 'ICD-9-CM' }],
        procedures: [{ code: '79.39', description: 'Riduzione a cielo aperto di frattura con fissazione interna, altre ossa', system: 'ICD-9-CM' }, { code: '79.05', description: 'Riduzione chiusa di lussazione dell\'anca', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'S32.401A specifica la frattura dell\'acetabolo con lateralità destra e 7° carattere "A".',
        'La contestuale lussazione posteriore d\'anca ridotta in urgenza (S73.011A) deve essere codificata per rispecchiare l\'alta complessità traumatologica.',
        'La procedura CIPI 79.39 descrive l\'ORIF acetabolare condotta per via posteriore.'
      ],
      commonCognitiveErrors: [
        'Confondere la frattura dell\'acetabolo con una generica frattura del femore o del bacino (ala iliaca).',
        'Omettere la codifica della lussazione posteriore dell\'anca contestuale.'
      ],
      chartDocumentationAdvice: 'Attestare la classificazione di Judet-Letournel, l\'esito della riduzione anatomica della cupola acetabolare e la verifica scopia dell\'assenza di viti intra-articolari.'
    }
  }
];
