import { ClinicalCase } from '../../types';

export const SURGERY_CASES: ClinicalCase[] = [
  {
    id: 'surg-1',
    specialtyId: 'chirurgia_generale',
    caseNumber: 1,
    title: 'Appendicite acuta flemmonosa con peritonite circoscritta trattata con appendicectomia laparoscopica',
    complexity: 'Intermedio',
    subCategory: 'Chirurgia d\'Urgenza / Addome Acuto',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 28 anni',
      admissionReason: 'Dolore addominale acuto inizialmente periumbelicale poi localizzatosi in fossa iliaca destra, associato a febbre (38.2 °C), nausea e inappetenza.',
      anamnesis: 'Paziente giovane in buona salute pregressa.',
      hospitalCourse: 'All\'esame obiettivo addominale: dolorabilità e difesa di parete in fossa iliaca destra, segno di McBurney e Blumberg marcatamente positivi. Leucocitosi neutrofila marcata (WBC 16.800/mmc, 84% neutrofili), PCR 72 mg/L. Ecografia addominale: appendice ciecale a fondo cieco aumentata di calibro (diametro 11 mm), non comprimibile, con coprolita intraluminale e falda fluida periappendicolare. Condotto in sala operatoria per intervento d\'urgenza: riscontro di appendice flemmonoso-gangrenosa retrociecale con fibrina e peritonite circoscritta. Eseguita appendicectomia per via laparoscopica a tre accessi con scheletrizzazione del meso con bisturi bipolare avanzato, sutura della base appendicolare mediante anelli di endoloop, lavaggio ed aspirazione della cavità pelvica.',
      proceduresConducted: 'Appendicectomia laparoscopica, lavaggio peritoneale.',
      dischargeStatus: 'Dimesso in 3a giornata post-operatoria apiretico con cicatrici trocart in ordine e canalizzazione precoce a feci e gas.'
    },
    documentationGapsWarning: 'In ICD-10-IM la combinazione di appendicite acuta e peritonite ha codice combinato univoco (K35.30 per appendicite con peritonite circoscritta o ascesso). Nel catalogo CIPI la procedura laparoscopica (47.01) deve essere distinta da quella a cielo aperto (47.09).',
    solution: {
      icd10: {
        primaryDiagnosis: {
          code: 'K35.30',
          description: 'Appendicite acuta con peritonite circoscritta, senza rottura o ascesso',
          system: 'ICD-10-IM',
          category: 'Malattie dell\'apparato digerente'
        },
        secondaryDiagnoses: [
          { code: 'R50.9', description: 'Febbre non specificata', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-47.01', description: 'Appendicectomia laparoscopica', system: 'CIPI' },
          { code: 'CIPI-54.25', description: 'Lavaggio peritoneale diagnostico o terapeutico', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '540.0', description: 'Appendicite acuta con peritonite generalizzata o circoscritta', system: 'ICD-9-CM' },
        secondaryDiagnoses: [],
        procedures: [{ code: '47.01', description: 'Appendicectomia laparoscopica', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM richiede la qualificazione puntuale della peritonite: circoscritta (K35.3) versus generalizzata (K35.2).',
        'La via di accesso laparoscopica (CIPI 47.01) è obbligatoria e differenzia il percorso rispetto alla laparotomia classica (47.09).'
      ],
      commonCognitiveErrors: [
        'Codificare appendicite acuta semplice non complicata (K35.80) quando il referto operatorio descrive esplicitamente peritonite e fibrina.',
        'Assegnare il codice di appendicectomia laparotomica aperta 47.09 anziché laparoscopica.'
      ],
      chartDocumentationAdvice: 'Attestare nel referto operatorio la presenza di peritonite circoscritta al quadrante inferiore destro e l\'esito istologico.'
    }
  },
  {
    id: 'surg-2',
    specialtyId: 'chirurgia_generale',
    caseNumber: 2,
    title: 'Colecistite acuta litiasica con idrope trattata con colecistectomia laparoscopica convertita a laparotomia',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Chirurgia Epatobiliare',
    clinicalScenario: {
      patientAgeSex: 'Donna, 62 anni',
      admissionReason: 'Dolore continuo acuto in ipocondrio destro ed epigastrio con irradiazione alla spalla destra da 36 ore, nausea, vomito e febbre (38.5 °C).',
      anamnesis: 'Colelitiasi nota, diabete tipo 2, pregresso intervento di peritonite ginecologica con aderenze.',
      hospitalCourse: 'Addome: segno di Murphy ecografico e clinico nettamente positivo con contrattura di difesa in ipocondrio destro. Ecografia: colecisti marcatamente distesa con pareti ispessite a doppio binario (spessore 7 mm), calcolo incarcerato nel colletto dell\'infundibolo di 22 mm e versamento peripaleare. Condotta in sala operatoria per colecistectomia laparoscopica: all\'esplorazione laparoscopica presenza di massiva sindrome aderenziale periviscerale infiammatoria e triangolo di Calot congelato con impossibilità a visualizzare la Critical View of Safety. Il chirurgo decide per conversione in laparotomia sottocostale destra (Kocher). Eseguita colecistectomia retrograda a cielo aperto con isolamento e legatura del dotto cistico e dell\'arteria cistica.',
      proceduresConducted: 'Colecistectomia a cielo aperto (laparotomica) conseguente a conversione laparoscopica, adesiolisi peritoneale.',
      dischargeStatus: 'Dimessa in 6a giornata post-operatoria con drenaggio addominale rimosso e ferita regolare.'
    },
    documentationGapsWarning: 'In ICD-10-IM la colecistite acuta con calcolosi della colecisti ha codice K80.00. Nel tracciato SDO è mandatorio inserire sia la procedura laparotomica eseguita sia il codice CIPI/ICD-10 per conversione da laparoscopia a cielo aperto (V64.41 / Z53.31).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K80.00', description: 'Calcoli della cistifellea con colecistite acuta, senza ostruzione del dotto biliare comune', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'Z53.31', description: 'Procedura chirurgica laparoscopica convertita a procedura a cielo aperto', system: 'ICD-10-IM', notes: 'Codice di qualità e complessità procedurale.' },
          { code: 'K66.0', description: 'Aderenze peritoneali post-chirurgiche', system: 'ICD-10-IM' },
          { code: 'E11.9', description: 'Diabete mellito tipo 2', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-51.22', description: 'Colecistectomia a cielo aperto (laparotomica)', system: 'CIPI' },
          { code: 'CIPI-54.59', description: 'Altra lisi di aderenze peritoneali (Adesiolisi)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '574.00', description: 'Calcoli della cistifellea con colecistite acuta', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: 'V64.41', description: 'Intervento laparoscopico convertito a cielo aperto', system: 'ICD-9-CM' }],
        procedures: [{ code: '51.22', description: 'Colecistectomia a cielo aperto', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K80.00 integra in una combinazione eziologica la litiasi colecistica e l\'infiammazione acuta.',
        'La codifica della conversione chirurgica (Z53.31) è una regola fondamentale ministeriale per giustificare tempi operatori e degenza allungata.'
      ],
      commonCognitiveErrors: [
        'Codificare colecistectomia laparoscopica semplice CIPI 51.23 dimenticando che l\'intervento è stato convertito e terminato per via laparotomica.',
        'Omettere il codice Z53.31 di conversione procedurale.'
      ],
      chartDocumentationAdvice: 'Specificare chiaramente la motivazione della conversione laparotomica (mancata Critical View of Safety per infiammazione) nel registro operatorio.'
    }
  },
  {
    id: 'surg-3',
    specialtyId: 'chirurgia_generale',
    caseNumber: 3,
    title: 'Adenocarcinoma del colon destro (cieco) trattato con emicolectomia destra laparoscopica ed anastomosi intracorporea',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Chirurgia Oncologica Colorettale',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 71 anni',
      admissionReason: 'Anemia microcitica sideropenica refrattaria (Hb 8.2 g/dL), astenia progressiva e calo ponderale di 5 kg in 4 mesi.',
      anamnesis: 'Ipertensione arteriosa, iperplasia prostatica benigna.',
      hospitalCourse: 'Pancolonscopia: formazione vegetante ed ulcerata, facilmente sanguinante al contatto, del diametro di 4 cm localizzata nel cieco a ridosso della valvola ileo-cecale. Biopsia: adenocarcinoma mucinoso moderatamente differenziato (G2). TC torace-addome con mdc: lesione parietale del cieco con impregnazione eterogenea, modesto impegno del grasso periviscerale (cT3), alcuni linfonodi aumentati di volume lungo l\'asse dei vasi ileocolici (cN1), assenza di metastasi epatiche o polmonari a distanza (cM0). Eseguito intervento elettivo di emicolectomia destra laparoscopica con legatura centrale dei vasi ileocolici e della branca destra dei colici medi (linfoadenectomia D3 / Complete Mesocolic Excision) ed anastomosi ileo-trasversa latero-laterale intracorporea mediante suturatrice meccanica.',
      proceduresConducted: 'Emicolectomia destra laparoscopica con anastomosi ileocolica intracorporea meccanica, linfoadenectomia regionale colorettale.',
      dischargeStatus: 'Dimesso al 5° giorno post-operatorio con canalizzazione regolare, esame istologico definitivo: pT3 pN1a (2/24 linfonodi) cM0 - Stadio IIIb, indirizzato ad oncologia per chemioterapia adiuvante.'
    },
    documentationGapsWarning: 'In ICD-10-IM il tumore del cieco ha il codice topografico specifico C18.0. Nel catalogo CIPI la resezione laparoscopica ha il codice dedicato CIPI 17.33 (Emicolectomia destra laparoscopica).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'C18.0', description: 'Neoplasia maligna del cieco (Adenocarcinoma del cieco)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'D63.0', description: 'Anemia in malattie neoplastiche', system: 'ICD-10-IM' },
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-17.33', description: 'Emicolectomia destra laparoscopica con anastomosi intracorporea', system: 'CIPI' },
          { code: 'CIPI-40.3', description: 'Linfoadenectomia regionale', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '153.4', description: 'Tumore maligno del cieco', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '285.22', description: 'Anemia in corso di malattie neoplastiche', system: 'ICD-9-CM' }],
        procedures: [{ code: '17.33', description: 'Emicolectomia destra laparoscopica', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'C18.0 definisce la sede anatomica precisa (cieco), superando i codici aspecifici del colon.',
        'L\'anemia secondaria da stillicidio neoplastico va tracciata con D63.0 (Anemia in corso di neoplasia).',
        'CIPI 17.33 identifica in modo esatto la resezione emicolica per via laparoscopica.'
      ],
      commonCognitiveErrors: [
        'Codificare tumore maligno del colon non specificato C18.9 anziché C18.0 del cieco.',
        'Assegnare la procedura aperta di emicolectomia 45.73 anziché la procedura laparoscopica 17.33.'
      ],
      chartDocumentationAdvice: 'Riportare la stadiazione TNM patologica (pT3 pN1a cM0), il numero complessivo di linfonodi isolati (almeno > 12) e la tecnica dell\'anastomosi.'
    }
  },
  {
    id: 'surg-4',
    specialtyId: 'chirurgia_generale',
    caseNumber: 4,
    title: 'Perforazione di ulcera duodenale con peritonite chimico-purulenta riparata mediante rafia laparoscopica e patch omentale di Graham',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Chirurgia d\'Urgenza / Perforazioni Viscerali',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 55 anni',
      admissionReason: 'Insorgenza improvvisa e drammatica di dolore a pugnalata in epigastrio rapidamente irradiatosi a tutto l\'addome con contrattura di parete (addome a tavola).',
      anamnesis: 'Uso frequente di FANS (ibuprofene) per rachialgia senza protettore gastrico, fumo di 20 sigarette al giorno.',
      hospitalCourse: 'In Pronto Soccorso: paziente sofferente, diaforetico, tachicardico (FC 115 bpm), addome ligneo immobile con gli atti del respiro e segno di Blumberg diffusamente positivo. Rx torace ed addome: presenza di falce aerea semilunare sottodiaframmatica destra da pneumoperitoneo massivo. TC addome conferma perforazione del bulbo duodenale anteriore con versamento periepatico e lungo la doccia parietocolica destra. Intervento chirurgico d\'urgenza per via laparoscopica: confermato foro di perforazione di 6 mm sul versante anteriore del bulbo duodenale con peritonite purulenta. Eseguita rafia duodenale con sutura a punti staccati e copertura con lembo vascolarizzato di grande omento (patch di Graham), lavaggio peritoneale esteso con 6 litri di soluzione tiepida e posizionamento di due drenaggi tubulari.',
      proceduresConducted: 'Chiusura laparoscopica di perforazione duodenale con omentopessia (patch di Graham), lavaggio e toilette peritoneale laparoscopica, drenaggio addominale.',
      dischargeStatus: 'Dimesso al 7° giorno in buone condizioni con canalizzazione ripristinata e prescrizione di terapia eradicante per Helicobacter pylori.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'ulcera duodenale acuta con perforazione ha il codice combinato K26.1.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K26.1', description: 'Ulcera duodenale acuta con perforazione', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'K65.0', description: 'Peritonite acuta generalizzata (peritonite da perforazione)', system: 'ICD-10-IM' },
          { code: 'F17.21', description: 'Dipendenza da tabacco, uso attuale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-44.42', description: 'Sutura di ulcera duodenale per via laparoscopica con omentopessia (Patch di Graham)', system: 'CIPI' },
          { code: 'CIPI-54.25', description: 'Lavaggio peritoneale terapeutico laparoscopico', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '532.10', description: 'Ulcera duodenale acuta con perforazione', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '567.22', description: 'Peritonite purulenta generalizzata', system: 'ICD-9-CM' }],
        procedures: [{ code: '44.42', description: 'Sutura di ulcera duodenale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K26.1 incorpora la presenza sia dell\'ulcera sia della perforazione viscerale libera.',
        'La peritonite acuta generalizzata secondaria (K65.0) qualifica la severità dell\'infezione intra-addominale.',
        'La procedura CIPI 44.42 traccia la rafia con omentopessia secondo Graham.'
      ],
      commonCognitiveErrors: [
        'Codificare generico "pneumoperitoneo" (R93.5) anziché la causa eziologica conclamata dell\'ulcera perforata K26.1.',
        'Omettere il codice della peritonite generalizzata associata.'
      ],
      chartDocumentationAdvice: 'Attestare nel registro operatorio le dimensioni del foro di perforazione (in mm), il volume di lavaggio peritoneale e l\'esecuzione della manovra di Graham.'
    }
  },
  {
    id: 'surg-5',
    specialtyId: 'chirurgia_generale',
    caseNumber: 5,
    title: 'Occlusione intestinale meccanica da briglie aderenziali con sofferenza ischemica d\'ansa e resezione ileale',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Chirurgia d\'Urgenza / Ileo Meccanico',
    clinicalScenario: {
      patientAgeSex: 'Donna, 67 anni',
      admissionReason: 'Alvo chiuso a feci e gas da 48 ore, vomito biliare poi enterico, dolori addominali crampiformi diffusi e distensione marcata.',
      anamnesis: 'Pregresso intervento di isterectomia totale ed annessiectomia bilaterale per via laparotomica mediana sottombelicale 10 anni prima.',
      hospitalCourse: 'Addome globoso, timpanico con rumori di peristalsi metallici e guazzi all\'esordio poi silente, dolorabilità diffusa. TC addome con mdc: marcata distensione delle anse digiunali ed ileali a monte con calibro fino a 5 cm e livelli idroaerei multipli, improvviso punto di transizione (transition point) in fossa iliaca destra da briglia aderenziale strozzante, ispessimento parietale e ridotto enhancement dell\'ansa erniata ("closed loop") con falda fluida tra le anse. Indicazione a laparotomia d\'urgenza: riscontro di tenace cordone aderenziale tra l\'ileo distale e la cicatrice peritoneale che strozza un\'ansa ileale di circa 30 cm, non reversibile dopo lisamento e riscaldamento (necrosi ischemica transmurale). Eseguita adesiolisi, resezione segmentaria dell\'ileo necrotico di 35 cm ed anastomosi ileo-ileale latero-laterale isoperistaltica meccanica.',
      proceduresConducted: 'Laparotomia esplorativa con lisi di aderenze peritoneali (adesiolisi), resezione parziale dell\'intestino tenue (ileo) con anastomosi intestinale.',
      dischargeStatus: 'Dimessa in 7a giornata con canalizzazione a feci formate e ripresa della nutrizione orale.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'occlusione intestinale da aderenze peritoneali post-chirurgiche ha il codice K91.30 (Ostruzione postprocedurale) o K56.51 (Aderenze intestinali con ostruzione). Nel catalogo CIPI la resezione dell\'intestino tenue ha codice dedicato.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K56.51', description: 'Aderenze intestinali [briglie] con ostruzione (occlusione da briglie)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'K55.031', description: 'Infarto focale acuto dell\'intestino tenue (necrosi ischemica da strozzamento)', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'E87.1', description: 'Ipo-osmolarità e iponatriemia (disidratazione da sequestro di liquidi)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-45.62', description: 'Altra resezione parziale dell\'intestino tenue (Resezione ileale)', system: 'CIPI' },
          { code: 'CIPI-54.59', description: 'Lisi di aderenze peritoneali (Adesiolisi laparotomica)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '560.81', description: 'Aderenze intestinali con ostruzione', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '557.0', description: 'Ischemia acuta dell\'intestino', system: 'ICD-9-CM' }],
        procedures: [{ code: '45.62', description: 'Altra resezione parziale del tenue', system: 'ICD-9-CM' }, { code: '54.59', description: 'Altra lisi di aderenze peritoneali', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K56.51 specifica con precisione la causa meccanica aderenziale dell\'occlusione.',
        'La presenza della necrosi ischemica dell\'ansa (K55.031) rappresenta una complicanza maggiore (MCC) fondamentale per la corretta allocazione del DRG.',
        'La procedura CIPI 45.62 definisce la resezione d\'organo con anastomosi.'
      ],
      commonCognitiveErrors: [
        'Codificare solo l\'adesiolisi omettendo la resezione ileale eseguita per sofferenza ischemica irreversibile.',
        'Utilizzare codice generico di occlusione K56.60 senza menzione di briglie o aderenze.'
      ],
      chartDocumentationAdvice: 'Attestare la lunghezza dell\'ansa resecata (in cm), la vitalità tissutale e la presenza di necrosi all\'esame istologico estemporaneo o definitivo.'
    }
  },
  {
    id: 'surg-6',
    specialtyId: 'chirurgia_generale',
    caseNumber: 6,
    title: 'Diverticolite acuta perforata del sigma (Hinchey III) con peritonite purulenta trattata con intervento di Hartmann',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Chirurgia Colorettale d\'Urgenza',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 74 anni',
      admissionReason: 'Dolore severo e costante in fossa iliaca sinistra e pelvi da 3 giorni, comparsa di febbre elevata con brivido (39 °C) e contrattura addominale.',
      anamnesis: 'Diverticolosi del colon nota da anni, ipertensione arteriosa, cardiopatia ischemica cronica.',
      hospitalCourse: 'Addome: difesa e dolorabilità spiccata in fossa iliaca sinistra con peritonismo esteso all\'ipogastrio. TC addome con contrasto: severo ispessimento concentrico infiammatorio delle pareti del colon sigmoideo con multipli diverticoli, microperforazione diverticolare con bolle di gas extraluminale e cospicua raccolta purulenta fluida pelvica e nel recesso rettovescicale (Diverticolite perforata Stadio Hinchey III). Leucociti 19.200/mmc, PCR 210 mg/L. Intervento in urgenza per via laparotomica mediana: peritonite purulenta diffusa pelvica con flemmona del sigma perforato. Considerate le condizioni settiche locali e generali e l\'alto rischio di deiscenza, si esegue resezione del retto-sigma secondo Hartmann con affondamento del moncone rettale e confezionamento di colostomia terminale su bacchetta in fossa iliaca sinistra.',
      proceduresConducted: 'Resezione del colon sigmoideo secondo Hartmann a cielo aperto, confezionamento di colostomia terminale cutanea, lavaggio e drenaggio pelvico.',
      dischargeStatus: 'Dimesso al 9° giorno con stoma ben funzionante e roseo, apiressia ed indici di flogosi normalizzati, programmata ricanalizzazione a distanza di 6 mesi.'
    },
    documentationGapsWarning: 'In ICD-10-IM la diverticolite acuta del colon con perforazione e peritonite ha il codice K57.20 (Diverticolite dell\'intestino crasso con perforazione ed ascesso). Nel catalogo CIPI l\'intervento di Hartmann è codificato con CIPI 48.62.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K57.20', description: 'Malattia diverticolare dell\'intestino crasso con perforazione e ascesso, senza emorragia', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'K65.0', description: 'Peritonite acuta generalizzata purulenta', system: 'ICD-10-IM' },
          { code: 'I25.10', description: 'Cardiopatia ischemica aterosclerotica', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-48.62', description: 'Resezione anteriore del retto/sigma con chiusura del moncone e colostomia (Intervento di Hartmann)', system: 'CIPI' },
          { code: 'CIPI-46.10', description: 'Colostomia non specificata (colostomia terminale cutanea)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '562.11', description: 'Diverticolite del colon', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '567.22', description: 'Peritonite purulenta', system: 'ICD-9-CM' }],
        procedures: [{ code: '48.62', description: 'Resezione anteriore del retto con colostomia', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K57.20 include sia la diverticolite sia la perforazione d\'organo con ascesso/peritonite.',
        'La procedura CIPI 48.62 definisce espressamente la classica procedura di Hartmann (resezione con chiusura del moncone rettale e colostomia).'
      ],
      commonCognitiveErrors: [
        'Codificare resezione con anastomosi primaria e protezione omettendo la mancata ricostruzione intestinale tipica di Hartmann.',
        'Assegnare K57.32 (diverticolite senza perforazione) in presenza di conclamata peritonite purulenta.'
      ],
      chartDocumentationAdvice: 'Attestare lo stadio di Hinchey (Hinchey III) nel diario clinico e la lunghezza del moncone rettale residuo.'
    }
  },
  {
    id: 'surg-7',
    specialtyId: 'chirurgia_generale',
    caseNumber: 7,
    title: 'Adenocarcinoma duttale della testa del pancreas trattato con duodenocefalopancreasectomia (DCP) sec. Whipple',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Chirurgia Epatobiliopancreatica Oncologica',
    clinicalScenario: {
      patientAgeSex: 'Donna, 68 anni',
      admissionReason: 'Ittero ingravescente astenico associato a feci acoliche, urine ipercromiche "color marsala", prurito cutaneo diffuso e calo ponderale marcato (segno di Courvoisier-Terrier positivo).',
      anamnesis: 'Diabete mellito tipo 2 di recente insorgenza (esordito 8 mesi prima), fumatrice.',
      hospitalCourse: 'Bilirubina totale 16.5 mg/dL (frazione coniugata 13.8 mg/dL), CA 19-9 480 U/mL. TC torace-addome trifasica con protocollo pancreas: lesione solida ipovascolare di 28 mm a livello della testa pancreatica con dilatazione a monte del dotto pancreatico principale (Wirsung 6 mm) e delle vie biliari intra- ed extraepatiche (segno del doppio dotto). Rapporti vascolari: contatto < 90° con la vena mesenterica superiore senza invasione arteriosa (tumore resecabile borderline-resecabile). Eseguito intervento di duodenocefalopancreasectomia (DCP sec. Whipple): asportazione in blocco di testa del pancreas, duodeno, colecisti, coledoco distale e primi centimetri di digiuno. Ricostruzione mediante triplice anastomosi: pancreatico-digiunale termino-laterale (anastomosi sec. Blumgart), epatico-digiunale su ansa ad Y e gastro-digiunale.',
      proceduresConducted: 'Duodenocefalopancreasectomia radicale con linfoadenectomia regionale estesa, anastomosi pancreatico-digiunale, coledoco-digiunale e gastro-digiunale.',
      dischargeStatus: 'Dimessa in 14a giornata post-operatoria con amilasi sul drenaggio negative (assenza di fistola pancreatica), istologico definitivo: adenocarcinoma duttale pT2 pN1 (3/18 linfonodi) R0.'
    },
    documentationGapsWarning: 'In ICD-10-IM la neoplasia maligna della testa del pancreas ha il codice C25.0. Nel catalogo CIPI la duodenocefalopancreasectomia radicale ha codice dedicato CIPI 52.7 (Pancreaticoduodenectomia radicale).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'C25.0', description: 'Neoplasia maligna della testa del pancreas', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'K83.1', description: 'Ostruzione del dotto biliare (Ittero ostruttivo neoplastico)', system: 'ICD-10-IM' },
          { code: 'E11.9', description: 'Diabete mellito di tipo 2', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-52.7', description: 'Pancreaticoduodenectomia radicale (Intervento di Whipple)', system: 'CIPI' },
          { code: 'CIPI-40.3', description: 'Linfoadenectomia regionale', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '157.0', description: 'Tumore maligno della testa del pancreas', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '576.2', description: 'Ostruzione del dotto biliare', system: 'ICD-9-CM' }],
        procedures: [{ code: '52.7', description: 'Pancreaticoduodenectomia radicale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'C25.0 individua con esattezza la localizzazione anatomica alla testa del pancreas.',
        'La procedura CIPI 52.7 descrive l\'intervento di Whipple (resezione pancreaticoduodenale combinata ad alta complessità cardiochirurgica/addominale).'
      ],
      commonCognitiveErrors: [
        'Codificare solo la pancreatectomia parziale CIPI 52.59 omettendo la componente duodenale e biliare dell\'intervento di Whipple radicale (CIPI 52.7).',
        'Dimenticare di codificare l\'ittero ostruttivo associato K83.1.'
      ],
      chartDocumentationAdvice: 'Attestare lo stato dei margini di resezione (R0 vs R1, margine vascolare mesenterico e retroperitoneale) e il dosaggio di amilasi nel liquido di drenaggio in 1a, 3a e 5a giornata.'
    }
  },
  {
    id: 'surg-8',
    specialtyId: 'chirurgia_generale',
    caseNumber: 8,
    title: 'Ernia inguinale primitiva destra strozzata trattata con ernioplastica protesica e riduzione d\'urgenza',
    complexity: 'Intermedio',
    subCategory: 'Chirurgia della Parete Addominale / Urgenze',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 69 anni',
      admissionReason: 'Comparsa improvvisa da 6 ore di tumefazione durissima, arrossata e violentemente dolente in regione inguino-scrotale destra, non più riducibile in cavità addominale (incarceramento acuto), con nausea e chiusura dell\'alvo a gas.',
      anamnesis: 'Ernia inguinale destra nota da anni riducibile, cardiopatia ipertensiva.',
      hospitalCourse: 'Obiettività: massa erniaria tesa, dolente alla minima palpazione, cute iperemica, assenza di impulso sotto colpi di tosse. Tentativi di riduzione manuale controindicati per tempo trascorso ed elevato rischio di strozzamento d\'organo. Condotto in sala operatoria per erniorrafia d\'urgenza con incisione inguinale destra: apertura del sacco erniario con fuoriuscita di liquido torbido reattivo; all\'interno è presente un\'ansa di ileo distale cianotica incarcerata al colletto del canale inguinale. Eseguita decompressione ed incisione del colletto; applicati impacchi caldi imbevuti di soluzione fisiologica per 15 minuti con progressivo e completo recupero della colorazione rosea, della motilità peristaltica e delle pulsazioni delle arterie mesenteriali (vitalità conservata, non indicazione a resezione). Reintegrata l\'ansa in cavità addominale. Eseguita ernioplastica inguinale con posizionamento di rete protesica in polipropilene monofilamento priva di tensione secondo tecnica di Lichtenstein.',
      proceduresConducted: 'Ernioplastica inguinale destra con apposizione di protesi / rete sintetica secondo Lichtenstein, riduzione chirurgica di ernia inguinale incarcerata.',
      dischargeStatus: 'Dimesso al 2° giorno post-operatorio con decorso favorevole e canalizzazione ripristinata.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'ernia inguinale unilaterale con ostruzione/strozzamento senza gangrena ha il codice K40.30.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K40.30', description: 'Ernia inguinale unilaterale con ostruzione, senza gangrena, non specificata come ricorrente (Strozzata)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [{ code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }],
        procedures: [
          { code: 'CIPI-53.05', description: 'Riparazione di ernia inguinale con protesi o rete (Ernioplastica con mesh)', system: 'CIPI' },
          { code: 'CIPI-53.00', description: 'Riduzione di ernia inguinale incarcerata', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '550.10', description: 'Ernia inguinale con ostruzione, senza menzione di gangrena', system: 'ICD-9-CM' },
        secondaryDiagnoses: [],
        procedures: [{ code: '53.05', description: 'Riparazione di ernia inguinale con protesi', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K40.30 distingue la forma strozzata/ostruita senza gangrena (se fosse stata presente necrosi si sarebbe impiegato K40.40).',
        'La procedura CIPI 53.05 documenta formalmente l\'impiego della rete protesica (mesh).'
      ],
      commonCognitiveErrors: [
        'Assegnare il codice di ernia inguinale semplice K40.90 trascurando la complicanza acuta dello strozzamento.',
        'Codificare K40.40 (con gangrena) anche se l\'ansa è regredita ed ha ripreso completa vitalità senza resezione.'
      ],
      chartDocumentationAdvice: 'Attestare nel registro operatorio la vitalità dell\'ansa dopo decompressione e l\'assenza di necrosi parietale.'
    }
  },
  {
    id: 'surg-9',
    specialtyId: 'chirurgia_generale',
    caseNumber: 9,
    title: 'Adenocarcinoma del retto medio trattato con resezione anteriore laparoscopica (TME) e ileostomia di protezione temporanea',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Chirurgia Oncologica Colorettale',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 63 anni',
      admissionReason: 'Rettorragie intermittenti, emissione di muco con le feci, tenesmo rettale e senso di evacuazione incompleta da 3 mesi.',
      anamnesis: 'Paziente sottoposto a radiochemioterapia neoadiuvante (CRT a rateo lungo completata 8 settimane prima).',
      hospitalCourse: 'Risonanza Magnetica pelvica pre-operatoria di restadializzazione: regressione tumorale (buona risposta, ypT2 ypN0) della lesione del retto posta a 7 cm dal margine anale, con fascia mesorettale libera (> 3 mm). Eseguito intervento di resezione anteriore bassa del retto laparoscopica con escissione totale del mesoretto (Total Mesorectal Excision - TME) a margini integri, anastomosi colo-rettale termino-terminale meccanica intracorporea ultra-bassa (Knight-Griffen). Confezionata ileostomia ad ansa di derivazione temporanea di protezione in fossa iliaca destra.',
      proceduresConducted: 'Resezione anteriore del retto laparoscopica con TME, anastomosi meccanica transanale, confezionamento di ileostomia ad ansa di protezione.',
      dischargeStatus: 'Dimesso al 6° giorno con ileostomia canalizzata regolarmente ed esame istologico attestante ypT2 ypN0 (0/16 linfonodi) R0.'
    },
    documentationGapsWarning: 'In ICD-10-IM la neoplasia maligna del retto ha il codice C20. Nel catalogo CIPI la resezione laparoscopica del retto con TME ha codice dedicato CIPI 48.52, associato a CIPI 46.21 per l\'ileostomia temporanea.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'C20', description: 'Neoplasia maligna del retto (Adenocarcinoma del retto)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'Z92.3', description: 'Storia personale di radioterapia neoadiuvante pregressa', system: 'ICD-10-IM' },
          { code: 'Z92.21', description: 'Storia personale di chemioterapia pregressa', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-48.52', description: 'Resezione del retto laparoscopica con escissione totale del mesoretto (TME)', system: 'CIPI' },
          { code: 'CIPI-46.21', description: 'Ileostomia temporanea di protezione (ileostomia ad ansa)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '154.1', description: 'Tumore maligno del retto', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: 'V15.3', description: 'Storia personale di irradiazione', system: 'ICD-9-CM' }],
        procedures: [{ code: '48.52', description: 'Resezione del retto laparoscopica', system: 'ICD-9-CM' }, { code: '46.21', description: 'Ileostomia temporanea', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'C20 identifica il tumore del retto.',
        'La presenza dell\'ileostomia di protezione temporanea (CIPI 46.21) deve essere codificata congiuntamente alla resezione TME per la corretta remunerazione.',
        'I codici Z92.3 e Z92.21 documentano il trattamento neoadiuvante multimodale.'
      ],
      commonCognitiveErrors: [
        'Omettere la codifica dell\'ileostomia di protezione (CIPI 46.21).',
        'Confondere la resezione anteriore a risparmio sfinterico con l\'amputazione addomino-perineale sec. Miles (CIPI 48.5).'
      ],
      chartDocumentationAdvice: 'Attestare nel referto la distanza della lesione dal margine anale, l\'integrità della fascia mesorettale (piano di TME: grado 3/completo) e la tenuta pneumatica dell\'anastomosi.'
    }
  },
  {
    id: 'surg-10',
    specialtyId: 'chirurgia_generale',
    caseNumber: 10,
    title: 'Laparocele gigante incarcerato della parete addominale trattato con ricostruzione di parete (TAR) e mesh retromuscolare',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Chirurgia della Parete Addominale Complessa',
    clinicalScenario: {
      patientAgeSex: 'Donna, 65 anni',
      admissionReason: 'Voluminosa ernia su cicatrice laparotomica mediana (laparocele) con perdita di domicilio, dolori continui da incarceramento e lesioni trofiche cutanee superficiali da stiramento.',
      anamnesis: 'Pregressa peritonite biliare trattata con laparotomia xifo-pubica 5 anni prima, obesità classe I (BMI 32 kg/m2).',
      hospitalCourse: 'TC addome: difetto parietale mediano di 14 cm di larghezza (W3 sec. EHS) con sacco erniario gigante contenente colon trasverso, omento e multiple anse ileali (volume del sacco > 25% del volume addominale totale). Eseguito intervento di ricostruzione complessa della parete addominale per via a cielo aperto: lisi delle estese aderenze viscerali al sacco, dissezione retromuscolare posteriore con rilascio del muscolo trasverso dell\'addome bilaterale (tecnica TAR - Transversus Abdominis Release), chiusura della guaina posteriore dei retti e posizionamento di protesi sintetica macroporosa di 30x35 cm in sede retromuscolare preperitoneale (sublay). Chiusura della linea alba anteriore senza tensione con drenaggi aspirativi a permanenza.',
      proceduresConducted: 'Riparazione di laparocele gigante con protesi retromuscolare (sublay), rilascio dei componenti della parete addominale (tecnica TAR), estesa adesiolisi viscerale.',
      dischargeStatus: 'Dimessa in 8a giornata con ferita guarita per prima intenzione, drenaggi rimossi e prescrizione di guaina elastica addominale per 2 mesi.'
    },
    documentationGapsWarning: 'In ICD-10-IM il laparocele (ernia incisionale) con ostruzione/incarceramento senza gangrena ha il codice K43.0.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K43.0', description: 'Ernia incisionale con ostruzione, senza gangrena (Laparocele incarcerato)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'E66.01', description: 'Obesità morbida/moderata dovuta a calorie in eccesso', system: 'ICD-10-IM' },
          { code: 'K66.0', description: 'Aderenze peritoneali', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-53.51', description: 'Riparazione di laparocele / ernia incisionale con protesi retromuscolare (mesh)', system: 'CIPI' },
          { code: 'CIPI-54.59', description: 'Lisi di aderenze peritoneali', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '551.21', description: 'Ernia ventrale con ostruzione (laparocele)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '278.00', description: 'Obesità', system: 'ICD-9-CM' }],
        procedures: [{ code: '53.51', description: 'Riparazione di laparocele con protesi', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K43.0 definisce formalmente il laparocele (ernia incisionale) complicato da incarceramento/ostruzione.',
        'La procedura CIPI 53.51 codifica la plastica con protesi sintetica retromuscolare.'
      ],
      commonCognitiveErrors: [
        'Codificare K43.2 (laparocele senza ostruzione o gangrena) quando la paziente era ricoverata per incarceramento sintomatico acuto.',
        'Omettere la procedura di adesiolisi estesa.'
      ],
      chartDocumentationAdvice: 'Registrare le dimensioni esatte della porta erniaria (in cm), le dimensioni della protesi impiantata e l\'esecuzione della tecnica TAR nel registro operatorio.'
    }
  },
  {
    id: 'surg-11',
    specialtyId: 'chirurgia_generale',
    caseNumber: 11,
    title: 'Coledocolitiasi e colecistite acuta trattate con bonifica endoscopica (ERCP) e successiva colecistectomia laparoscopica',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Chirurgia Epatobiliare ed Endoscopia Operativa',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 58 anni',
      admissionReason: 'Dolore acuto all\'ipocondrio destro con irradiazione posteriore, ittero sclerocutaneo con feci chiare e febbre a 38 °C (triade di Charcot incompleta).',
      anamnesis: 'Pregressi episodi di colica biliare transitoria.',
      hospitalCourse: 'Bilirubina totale 5.4 mg/dL, gamma-GT ed fosfatasi alcalina elevate, PCR 85 mg/L. Ecografia ed ecoendoscopia biliare (EUS): colecisti con pareti edematose e calcoli multipli, coledoco dilatato a 12 mm con presenza di calcolo endoluminale di 8 mm nel terzo distale a livello dell\'ampolla di Vater. Eseguita colangiopancreatografia retrograda endoscopica (ERCP) d\'urgenza con sfinterotomia biliare endoscopica, estrazione del calcolo mediante cestello di Dormia e palloncino da estrazione con completo deflusso biliare. Due giorni dopo, in condizioni di apiressia e normalizzazione della bilirubina, eseguita colecistectomia laparoscopica con colangiografia intraoperatoria trans-cistica di controllo (coledoco pervio privo di residui litiasici).',
      proceduresConducted: 'ERCP con sfinterotomia endoscopica ed estrazione di calcoli della via biliare principale, colecistectomia laparoscopica, colangiografia intraoperatoria.',
      dischargeStatus: 'Dimesso al 4° giorno post-ERCP in completo benessere clinico.'
    },
    documentationGapsWarning: 'In ICD-10-IM la litiasi del coledoco con calcolosi della colecisti e colecistite ha il codice combinato K80.40.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K80.40', description: 'Calcoli del dotto biliare con colecistite, senza ostruzione o colangite specificata', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'K80.20', description: 'Calcoli della cistifellea senza colecistite', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-51.85', description: 'Sfinterotomia endoscopica biliare (ERCP operativa)', system: 'CIPI' },
          { code: 'CIPI-51.88', description: 'Estrazione endoscopica di calcoli dalle vie biliari', system: 'CIPI' },
          { code: 'CIPI-51.23', description: 'Colecistectomia laparoscopica', system: 'CIPI' },
          { code: 'CIPI-87.53', description: 'Colangiografia intraoperatoria', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '574.40', description: 'Calcoli del coledoco e della cistifellea con colecistite', system: 'ICD-9-CM' },
        secondaryDiagnoses: [],
        procedures: [
          { code: '51.85', description: 'Sfinterotomia biliare endoscopica', system: 'CIPI' },
          { code: '51.23', description: 'Colecistectomia laparoscopica', system: 'CIPI' }
        ]
      },
      rulesAppliedExplanation: [
        'K80.40 definisce congiuntamente la calcolosi della via biliare principale associata a colecistite.',
        'La procedura combinata sequenziale ("rendez-vous" o approccio sequenziale ERCP + colecistectomia laparoscopica) deve essere valorizzata codificando sia la procedura endoscopica che l\'intervento chirurgico.'
      ],
      commonCognitiveErrors: [
        'Omettere la procedura di sfinterotomia endoscopica CIPI 51.85, registrando solo la colecistectomia laparoscopica e deprimendo il DRG.',
        'Codificare colelitiasi semplice K80.20 ignorando il calcolo coledocico estratto con ERCP.'
      ],
      chartDocumentationAdvice: 'Allegare i referti fotografici della sfinterotomia con la fuoriuscita del calcolo e il referto della colangiografia intraoperatoria.'
    }
  },
  {
    id: 'surg-12',
    specialtyId: 'chirurgia_generale',
    caseNumber: 12,
    title: 'Adenocarcinoma dell\'antro gastrico trattato con gastrectomia subtotale laparoscopica e linfoadenectomia D2',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Chirurgia Oncologica Digestiva Superiore',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 64 anni',
      admissionReason: 'Dispepsia prolungata refrattaria a PPI, senso di sazietà precoce e perdita di 6 kg negli ultimi 3 mesi con anemia sideropenica.',
      anamnesis: 'Gastrite cronica atrofica Helicobacter pylori-correlata in anamnesi remota.',
      hospitalCourse: 'EGDS: ulcera infiltrante della piccola curvatura a livello dell\'antro gastrico (tipo Bormann III) a 4 cm dal piloro. Biopsie: adenocarcinoma gastrico tipo intestinale secondo Lauren, moderatamente differenziato (G2). TC torace-addome: lesione dell\'antro gastrico con modesto ispessimento focale senza coinvolgimento degli organi adiacenti e senza metastasi a distanza (cT2 cN0 cM0). Intervento per via laparoscopica: gastrectomia subtotale distale (resezione di circa il 75% dello stomaco) con linfoadenectomia estesa D2 (asportazione delle stazioni linfonodali perigastriche 1, 3, 4sb, 4d, 5, 6 e delle stazioni dei vasi celiaci 7, 8a, 9, 11p, 12a). Ricostruzione della continuità digestiva mediante gastro-digiunostomia transmesocolica su ansa a Y secondo Roux con suturatrice meccanica.',
      proceduresConducted: 'Gastrectomia parziale / subtotale per via laparoscopica, linfoadenectomia D2 estesa, ricostruzione gastro-enterica su ansa a Y secondo Roux.',
      dischargeStatus: 'Dimesso in 7a giornata post-operatoria con esame istologico definitivo pT2 pN0 (0/28 linfonodi isolati) R0.'
    },
    documentationGapsWarning: 'In ICD-10-IM la neoplasia maligna dell\'antro gastrico ha il codice C16.3. Nel catalogo CIPI la gastrectomia subtotale laparoscopica e la linfoadenectomia hanno codici distinti.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'C16.3', description: 'Neoplasia maligna dell\'antro gastrico (Adenocarcinoma gastrico)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'D50.0', description: 'Anemia da carenza di ferro secondaria a perdita ematica (cronica)', system: 'ICD-10-IM' },
          { code: 'K29.40', description: 'Gastrite atrofica cronica senza emorragia', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-43.82', description: 'Gastrectomia parziale laparoscopica', system: 'CIPI' },
          { code: 'CIPI-40.59', description: 'Linfoadenectomia radicale dei linfonodi addominali (linfoadenectomia D2)', system: 'CIPI' },
          { code: 'CIPI-44.38', description: 'Gastroenterostomia laparoscopica su ansa a Y di Roux', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '151.2', description: 'Tumore maligno dell\'antro gastrico', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '280.0', description: 'Anemia da carenza di ferro da perdita ematica', system: 'ICD-9-CM' }],
        procedures: [{ code: '43.89', description: 'Altra gastrectomia parziale', system: 'ICD-9-CM' }, { code: '40.59', description: 'Linfoadenectomia radicale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'C16.3 specifica l\'antro gastrico come localizzazione esatta del tumore.',
        'La procedura CIPI 43.82 identifica la gastrectomia laparoscopica.',
        'La codifica separata della linfoadenectomia estesa D2 (CIPI 40.59) e della ricostruzione a Y di Roux (CIPI 44.38) valorizza la complessità della tecnica chirurgica oncologica.'
      ],
      commonCognitiveErrors: [
        'Utilizzare C16.9 (stomaco non specificato) omettendo la sede antrale precisa C16.3.',
        'Omettere la procedura di linfoadenectomia oncologica D2.'
      ],
      chartDocumentationAdvice: 'Attestare il numero complessivo di linfonodi asportati (> 16 per standard oncologico) e la distanza dai margini prossimale e distale (piloro).'
    }
  },
  {
    id: 'surg-13',
    specialtyId: 'chirurgia_generale',
    caseNumber: 13,
    title: 'Fistola perianale transfinterica complessa trattata con posizionamento di setone di drenaggio lasso',
    complexity: 'Base',
    subCategory: 'Proctologia Chirurgica',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 43 anni',
      admissionReason: 'Secrezione cronica siero-purulenta maleodorante dal margine anale sinistro con recidive di ascessualizzazione e dolore perianale alla seduta.',
      anamnesis: 'Pregresso drenaggio di ascesso perianale ischio-rettale 8 mesi prima.',
      hospitalCourse: 'Risonanza Magnetica pelvico-perineale: tragitto fistoloso transfinterico alto che origina a ore 6 sulla linea pettinea (orifizio interno), attraversa oltre il 40% dello sfintere anale esterno e sbocca a ore 5 a 3 cm dall\'orifizio anale esterno (fistola complessa sec. classificazione di Parks). In sala operatoria in anestesia spinale: esplorazione con speculum anale ed iniezione di perossido di idrogeno/blu di metilene; identificati con precisione orifizio primario e secondario. Considerato l\'alto rischio di incontinenza fecale in caso di fistulotomia primaria, si esegue delicata toilette del tragitto e posizionamento di setone non tagliente (drenaggio lasso con filo silastico vascolare) a permanenza per favorire la detersione e la fibrosi del tragitto.',
      proceduresConducted: 'Esplorazione proctologica del canale anale, fistulectomia parziale con posizionamento di setone lasso per fistola anale.',
      dischargeStatus: 'Dimesso in day-surgery/ordinario breve in prima giornata con setone in sede, prescrizione di semicupi e successiva rivalutazione per procedura di LIFT o flap di avanzamento.'
    },
    documentationGapsWarning: 'In ICD-10-IM la fistola anale ha il codice K60.3.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K60.3', description: 'Fistola anale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'K62.89', description: 'Altre malattie specificate dell\'ano e del retto', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-49.11', description: 'Incisione di fistola anale con posizionamento di setone (fistulectomia parziale / setone)', system: 'CIPI' },
          { code: 'CIPI-49.21', description: 'Anoscopia / proctoscopia diagnostica ed operativa', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '565.1', description: 'Fistola anale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [],
        procedures: [{ code: '49.11', description: 'Fistulotomia anale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K60.3 identifica specificamente la fistola anale.',
        'La procedura CIPI 49.11 codifica il trattamento del tragitto fistoloso con setone.'
      ],
      commonCognitiveErrors: [
        'Confondere la fistola anale con la cisti pilonidale sacro-coccigea (L05.9).',
        'Codificare fistulotomia primaria a cielo aperto quando è stato posizionato solo un setone di drenaggio a salvaguardia della continenza.'
      ],
      chartDocumentationAdvice: 'Attestare la classificazione di Parks (interfinterica vs transfinterica) e la percentuale di sfintere anale coinvolto.'
    }
  },
  {
    id: 'surg-14',
    specialtyId: 'chirurgia_generale',
    caseNumber: 14,
    title: 'Melanoma maligno a diffusione superficiale della schiena trattato con allargamento chirurgico e biopsia del linfonodo sentinella',
    complexity: 'Intermedio',
    subCategory: 'Chirurgia Oncologica Cutanea',
    clinicalScenario: {
      patientAgeSex: 'Donna, 52 anni',
      admissionReason: 'Ricovero programmato per allargamento radicale dei margini e biopsia del linfonodo sentinella dopo biopsia escissionale di lesione pigmentata dorsale.',
      anamnesis: 'Fototipo II, ustioni solari in età giovanile. Esame istologico pregresso: Melanoma a diffusione superficiale (SSM), spessore di Breslow 1.8 mm, Clark IV, non ulcerato, mitosi 2/mm2 (pT2a).',
      hospitalCourse: 'Eseguita linfoscintigrafia pre-operatoria mediante iniezione intradermica di 99mTc-nanocollidi attorno alla cicatrice: drenaggio linfatico preferenziale verso il cavo ascellare destro con localizzazione di singolo linfonodo sentinella caldo. In sala operatoria: mediante sonda gamma-detecting intraoperatoria e colorante blu di metilene si procede ad incisione ascellare destra e rimozione del linfonodo sentinella captante. Contestualmente si esegue allargamento radicale della cicatrice dorsale con margini cutanei a tutto spessore di 2 cm fino alla fascia muscolare sottostante e chiusura per scorrimento di lembi.',
      proceduresConducted: 'Allargamento radicale di lesione cutanea maligna (margini di 2 cm), biopsia / asportazione chirurgica di linfonodo sentinella guidata da sonda gamma e colorante vitale, linfoscintigrafia pre-operatoria.',
      dischargeStatus: 'Dimessa al 2° giorno post-operatorio; esame istologico definitivo: cute indenne da cellule tumorali residue, linfonodo sentinella negativo (0/1) per macrometastasi e micrometastasi (pT2a pN0(sn) M0 - Stadio IB).'
    },
    documentationGapsWarning: 'In ICD-10-IM il melanoma maligno della cute del tronco ha il codice C43.59. La procedura di biopsia del linfonodo sentinella va codificata con CIPI 40.23.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'C43.59', description: 'Melanoma maligno di altre parti del tronco (Melanoma cutaneo del dorso)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'Z85.820', description: 'Storia personale di melanoma maligno della cute', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-86.4', description: 'Escissione radicale di lesione cutanea con allargamento dei margini', system: 'CIPI' },
          { code: 'CIPI-40.23', description: 'Biopsia di linfonodo sentinella / escissione di linfonodo regionale', system: 'CIPI' },
          { code: 'CIPI-92.16', description: 'Linfoscintigrafia per localizzazione di linfonodo sentinella', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '172.5', description: 'Melanoma maligno della cute del tronco', system: 'ICD-9-CM' },
        secondaryDiagnoses: [],
        procedures: [{ code: '86.4', description: 'Escissione radicale di lesione cutanea', system: 'ICD-9-CM' }, { code: '40.23', description: 'Biopsia di linfonodo sentinella', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'C43.59 individua specificamente il melanoma maligno primitivo della cute del tronco.',
        'La procedura CIPI 40.23 specifica la biopsia del linfonodo sentinella, distinta dalla linfoadenectomia radicale ascellare completa (CIPI 40.51).'
      ],
      commonCognitiveErrors: [
        'Codificare una linfoadenectomia ascellare radicale CIPI 40.51 quando è stato asportato solo il linfonodo sentinella.',
        'Assegnare codice generico di tumore cutaneo non melanoma (C44).'
      ],
      chartDocumentationAdvice: 'Attestare nel referto lo spessore di Breslow, i centimetri di allargamento chirurgico del margine e la conta dei conteggi radioattivi in vivo ed ex vivo del sentinella.'
    }
  },
  {
    id: 'surg-15',
    specialtyId: 'chirurgia_generale',
    caseNumber: 15,
    title: 'Iperparatiroidismo primitivo da adenoma paratiroideo inferiore destro trattato con paratiroidectomia mininvasiva (MIP)',
    complexity: 'Base',
    subCategory: 'Chirurgia Endocrina',
    clinicalScenario: {
      patientAgeSex: 'Donna, 56 anni',
      admissionReason: 'Riscontro occasionale di ipercalcemia severa (calcio sierico 12.2 mg/dL, calcio ionizzato 1.65 mmol/L) associata a nefrolitiasi recidivante ed osteopenia marcata.',
      anamnesis: 'Ipertensione arteriosa lieve, non familiarità per neoplasie endocrine multiple (MEN).',
      hospitalCourse: 'Dosaggi ematochimici: Paratormone intatto (PTHi) marcatamente elevato (285 pg/mL con valore normale 15-65), fosforemia ridotta, calciuria delle 24h aumentata. Ecografia del collo: nodulo solido ipoecogeno ovalare di 18 mm situato posteriormente al polo inferiore del lobo tiroideo destro con tipico polo vascolare periferico ad arco. Scintigrafia paratiroidea con 99mTc-Sestamibi a doppia fase: intensa e persistente captazione tardiva nella medesima sede (localizzazione concorde di adenoma paratiroideo inferiore destro). Eseguito intervento di paratiroidectomia mirata mininvasiva video-assistita (MIP) attraverso minicervicotomia di 2 cm: asportazione dell\'adenoma con preservazione del nervo laringeo ricorrente destro. Dosaggio intraoperatorio del PTH rapido secondo i criteri di Miami: caduta del PTH basale da 310 pg/mL a 42 pg/mL a 10 minuti dall\'escissione (> 80% di calo, conferma biochimica di guarigione).',
      proceduresConducted: 'Paratiroidectomia parziale mirata mininvasiva (escissione di adenoma paratiroideo), monitoraggio rapido del PTH intraoperatorio, ecografia tiroide-paratiroidi.',
      dischargeStatus: 'Dimessa in 2a giornata con calcemia normalizzata (9.4 mg/dL), motilità delle corde vocali alla laringoscopia integra e voce conservata.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'iperparatiroidismo primario ha il codice E21.0. Nel catalogo CIPI la paratiroidectomia parziale ha codice CIPI 06.81.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'E21.0', description: 'Iperparatiroidismo primario (Adenoma paratiroideo)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'D35.1', description: 'Neoplasia benigna della ghiandola paratiroide', system: 'ICD-10-IM' },
          { code: 'N20.0', description: 'Calcoli del rene (Nefrolitiasi calcica)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-06.81', description: 'Paratiroidectomia totale o parziale (Paratiroidectomia mirata mininvasiva)', system: 'CIPI' },
          { code: 'CIPI-89.29', description: 'Monitoraggio rapido ormonale intraoperatorio (PTH rapido)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '252.01', description: 'Iperparatiroidismo primario', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '227.1', description: 'Neoplasia benigna della paratiroide', system: 'ICD-9-CM' }],
        procedures: [{ code: '06.81', description: 'Paratiroidectomia parziale o totale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'E21.0 definisce la patologia funzionale endocrina primaria.',
        'La procedura CIPI 06.81 codifica l\'escissione della ghiandola patologica.',
        'L\'indicazione del calo del PTH intraoperatorio (> 50% sec. Miami) documenta la radicalità biochimica.'
      ],
      commonCognitiveErrors: [
        'Confondere l\'iperparatiroidismo primario con l\'iperparatiroidismo secondario renale (E21.1).',
        'Codificare tiroidectomia anziché paratiroidectomia.'
      ],
      chartDocumentationAdvice: 'Registrare la percentuale esatta di caduta del PTH intraoperatorio a 10 minuti e l\'esito istologico di adenoma.'
    }
  },
  {
    id: 'surg-16',
    specialtyId: 'chirurgia_generale',
    caseNumber: 16,
    title: 'Malattia di Crohn ileo-ciecale stenosante e fistolizzante trattata con resezione ileo-ciecale laparoscopica',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Chirurgia delle Malattie Infiammatorie Croniche Intestinali (MICI)',
    clinicalScenario: {
      patientAgeSex: 'Donna, 34 anni',
      admissionReason: 'Dolori addominali post-prandiali ricorrenti in fossa iliaca destra tipo subocclusione (sindrome di König), diarrea cronica, febbre serotina e comparsa di tumefazione palpabile dolente.',
      anamnesis: 'Malattia di Crohn ileale nota da 8 anni, già trattata con biologici (anti-TNF ed ustekinumab) con fallimento secondario.',
      hospitalCourse: 'Entero-RMN: ispessimento transmurale severo dell\'ultima ansa ileale per un tratto di 25 cm con stenosi a lume filiforme ed a monte dilatazione pre-stenotica di 4.5 cm; presenza di fistola entero-enterica tra ansa ileale stenosata e cieco, con piccolo ascesso mesenterico organizzato di 2 cm privo di peritonite libera. Calprotectina fecale > 1.200 mcg/g. Sottoposta ad intervento programmato di resezione ileo-ciecale per via laparoscopica: dissezione dell\'ansa patologica e del tragitto fistoloso, resezione dell\'ileo terminale patologico con risparmio della porzione sana e del cieco (resezione ileo-cecale conservativa a margini istologicamente indenni) ed anastomosi ileo-colica termino-laterale meccanica.',
      proceduresConducted: 'Resezione ileocecale laparoscopica per malattia infiammatoria cronica, chiusura/resezione di fistola enterica interna, anastomosi ileocolica.',
      dischargeStatus: 'Dimessa in 5a giornata con completa risoluzione dei sintomi occlusivi e canalizzazione fisiologica.'
    },
    documentationGapsWarning: 'In ICD-10-IM il morbo di Crohn dell\'intestino tenue e crasso con entrambe le complicanze di occlusione e fistola ha il codice K50.814 (Malattia di Crohn dell\'ileo con fistola ed ostruzione).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K50.814', description: 'Malattia di Crohn dell\'intestino sia tenue che crasso con sia fistola che ostruzione intestinale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'D50.9', description: 'Anemia da carenza di ferro non specificata', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-45.72', description: 'Resezione ileocecale / resezione parziale del colon e dell\'ileo per via laparoscopica', system: 'CIPI' },
          { code: 'CIPI-46.74', description: 'Chiusura di fistola dell\'intestino tenue', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '555.2', description: 'Enterite regionale dell\'intestino tenue e crasso', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '560.89', description: 'Altra occlusione intestinale', system: 'ICD-9-CM' }, { code: '569.81', description: 'Fistola intestinale', system: 'ICD-9-CM' }],
        procedures: [{ code: '45.72', description: 'Resezione ileocecale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM introduce codici altamente combinati per la malattia di Crohn che integrano la sede anatomica con le manifestazioni specifiche di fistola e stenosi (K50.814).',
        'La procedura CIPI 45.72 descrive la resezione ileocecale tipica delle MICI.'
      ],
      commonCognitiveErrors: [
        'Codificare K50.90 (Crohn non specificato senza complicanze) ignorando la severa componente stenosante e fistolizzante che ha imposto la chirurgia.',
        'Dimenticare di codificare la chiusura/resezione della fistola interna.'
      ],
      chartDocumentationAdvice: 'Attestare la presenza contemporanea di stenosi fissa e fistola entero-enterica al referto macroscopico ed anatomo-patologico.'
    }
  },
  {
    id: 'surg-17',
    specialtyId: 'chirurgia_generale',
    caseNumber: 17,
    title: 'Carcinoma mammario infiltrante NST del quadrante supero-esterno trattato con quadrantectomia e linfoadenectomia ascellare',
    complexity: 'Intermedio',
    subCategory: 'Chirurgia Senologica Oncologica',
    clinicalScenario: {
      patientAgeSex: 'Donna, 59 anni',
      admissionReason: 'Nodulo duro, indolente, a margini irregolari di circa 2.5 cm nel quadrante supero-esterno della mammella destra scoperto all\'autopalpazione.',
      anamnesis: 'Menopausa a 52 anni, familiarità negativa.',
      hospitalCourse: 'Mammografia ed ecografia mammaria: nodulo spiculato con microcalcificazioni pleomorfe (BI-RADS 5). Agobiopsia (core biopsy): Carcinoma mammario infiltrante non altrimenti specificato (NST / duttale infiltrante), Grado 3 di Nottingham, Recettori estrogenici 95%, Recettori progestinici 80%, HER2 negativo (score 1+), Ki-67 35% (sottotipo Luminal B like). Ecografia ascellare: due linfonodi sospetti con corticale marcatamente ispessita (agobiopsia linfonodale positiva per metastasi da adenocarcinoma). Stadiazione sistemica (TC torace-addome e scintigrafia ossea) negativa per metastasi a distanza (cT2 cN1 cM0). Eseguito intervento chirurgico di resezione conservativa mammaria (quadrantectomia supero-esterna destra con rimodellamento oncoplastico) e linfoadenectomia ascellare omolaterale di I e II livello di Berg.',
      proceduresConducted: 'Quadrantectomia mammaria / resezione parziale di mammella a scopo oncologico, svuotamento / linfoadenectomia ascellare completa di I e II livello.',
      dischargeStatus: 'Dimessa al 2° giorno con drenaggio ascellare in aspirazione; esame istologico definitivo: pT2 pN1a (3/14 linfonodi) R0.'
    },
    documentationGapsWarning: 'In ICD-10-IM la neoplasia maligna del quadrante supero-esterno della mammella destra ha il codice topografico e laterale preciso C50.411.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'C50.411', description: 'Neoplasia maligna del quadrante supero-esterno della mammella destra, femmina', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'C77.3', description: 'Neoplasia secondaria e non specificata dei linfonodi ascellari e dell\'arto superiore (metastasi linfonodale ascellare)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-85.22', description: 'Resezione di quadrante della mammella (Quadrantectomia mammaria)', system: 'CIPI' },
          { code: 'CIPI-40.51', description: 'Linfoadenectomia radicale ascellare', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '174.4', description: 'Tumore maligno del quadrante supero-esterno della mammella', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '196.3', description: 'Tumore secondario dei linfonodi ascellari', system: 'ICD-9-CM' }],
        procedures: [{ code: '85.22', description: 'Resezione di quadrante della mammella', system: 'ICD-9-CM' }, { code: '40.51', description: 'Linfoadenectomia radicale ascellare', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'ICD-10-IM richiede la lateralità specifica obbligatoria: C50.411 identifica specificamente il quadrante supero-esterno della mammella destra.',
        'La presenza di metastasi linfonodale accertata pre-operatoriamente giustifica la linfoadenectomia ascellare radicale (CIPI 40.51) e il codice C77.3.'
      ],
      commonCognitiveErrors: [
        'Utilizzare C50.9 (sede non specificata) omettendo la lateralità e il quadrante.',
        'Codificare biopsia del linfonodo sentinella (CIPI 40.23) invece del corretto svuotamento ascellare di I-II livello (CIPI 40.51).'
      ],
      chartDocumentationAdvice: 'Attestare la lateralità destra, il quadrante supero-esterno, lo stato recettoriale e il numero di linfonodi metastatici rispetto ai prelevati.'
    }
  },
  {
    id: 'surg-18',
    specialtyId: 'chirurgia_generale',
    caseNumber: 18,
    title: 'Ferita penetrante da arma bianca dell\'addome con emoperitoneo massivo e lacerazione epatica trattata con packing d\'urgenza',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Traumatologia Addominale Maggiore / Chirurgia di Controllo del Danno',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 31 anni',
      admissionReason: 'Ferita penetrante da coltello in ipocondrio destro ed epigastrio a seguito di aggressione; shock emorragico all\'arrivo del 118.',
      anamnesis: 'Paziente giovane privo di patologie croniche.',
      hospitalCourse: 'In Pronto Soccorso/Shock Room: ipotensione severa (PA 75/40 mmHg), tachicardia a 135 bpm, sudorazione algida, pallore cutaneo marcato. E-FAST immediata: versamento anecogeno massivo nello spazio di Morison e nello scavo pelvico. Paziente emodinamicamente instabile non trasportabile per TC ("unstable patient"). Trasferito direttamente in sala operatoria per laparotomia d\'urgenza: riscontro di emoperitoneo massivo di circa 2.200 mL di sangue fresco e coaguli da profonda lacerazione traumatica di grado IV dei segmenti VII e VIII del fegato con lesione di rami portali intraepatici e stravaso continuo. Applicati principi di Damage Control Surgery (DCS): manovra di Pringle temporanea per clampaggio dell\'ilo epatico, sutura emostatica diretta mediante punti a materassaio con pledget, packing peri-epatico massivo con 8 teli laparotomici compressivi per tamponare il parenchima epatico, chiusura temporanea dell\'addome con sistema a pressione negativa (laparostomia con vacuum pack). Trasferito in Terapia Intensiva per rianimazione emodinamica e correzione della coagulopatia.',
      proceduresConducted: 'Laparotomia d\'urgenza per trauma con damage control surgery, packing emostatico epatico (tamponamento chirurgico del fegato), sutura/epatocentesi emostatica per lacerazione, laparostomia temporanea con medicazione a pressione negativa.',
      dischargeStatus: 'Sottoposto a re-laparotomia a 48 ore (take-back) con rimozione dei teli, conferma dell\'emostasi definitiva e chiusura definitiva della parete addominale; dimesso in 16a giornata.'
    },
    documentationGapsWarning: 'In ICD-10-IM la lacerazione traumatica maggiore del fegato ha il codice S36.115A (Lacerazione maggiore del fegato, contatto iniziale) associato al codice di causa esterna X99.XXXA per aggressione con coltello.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'S36.115A', description: 'Lacerazione maggiore del fegato (Grado IV AAST), contatto iniziale', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R57.1', description: 'Shock ipovolemico / shock emorragico', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'S31.109A', description: 'Ferita aperta della parete addominale penetrante, contatto iniziale', system: 'ICD-10-IM' },
          { code: 'X99.XXXA', description: 'Aggressione mediante coltello o oggetto tagliente, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-50.61', description: 'Chiusura di lacerazione del fegato ed emostasi (Packing epatico)', system: 'CIPI' },
          { code: 'CIPI-54.12', description: 'Laparotomia esplorativa per controllo del danno (Damage Control Surgery)', system: 'CIPI' },
          { code: 'CIPI-54.19', description: 'Altra laparostomia / chiusura temporanea addominale con pressione negativa', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '864.04', description: 'Lacerazione maggiore del fegato', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '785.59', description: 'Altro shock', system: 'ICD-9-CM' }, { code: 'E966', description: 'Aggressione con strumento tagliente o perforante', system: 'ICD-9-CM' }],
        procedures: [{ code: '50.61', description: 'Chiusura di lacerazione del fegato', system: 'ICD-9-CM' }, { code: '54.12', description: 'Laparotomia per emostasi', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'S36.115A specifica la lesione d\'organo maggiore al fegato con il 7° carattere "A".',
        'La causa esterna di aggressione con arma da taglio (Capitolo XX - X99.XXXA) è obbligatoria per legge nel tracciato SDO per lesioni violente.',
        'Le procedure CIPI descrivono la sequenza di chirurgia di controllo del danno (packing, emostasi e laparostomia).'
      ],
      commonCognitiveErrors: [
        'Omettere il codice di causa esterna dell\'aggressione da arma da taglio.',
        'Codificare solo la ferita cutanea superficiale (S31) sottostimando la devastante lesione epatica con shock ipovolemico.'
      ],
      chartDocumentationAdvice: 'Attestare il volume dell\'emoperitoneo, la classificazione AAST della lesione epatica e il conteggio esatto dei teli lasciati in addome.'
    }
  },
  {
    id: 'surg-19',
    specialtyId: 'chirurgia_generale',
    caseNumber: 19,
    title: 'Ascesso epatico piogenico multiplo trattato con drenaggio percutaneo trans-epatico sotto guida ecografica e terapia antibiotica mirata',
    complexity: 'Intermedio',
    subCategory: 'Chirurgia Epatobiliare ed Interventistica',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 70 anni',
      admissionReason: 'Febbre elevata con brivido scuotente (39.5 °C), dolore sordo continuo all\'ipocondrio destro irradiato alla spalla e compromissione delle condizioni generali.',
      anamnesis: 'Diabete mellito tipo 2, pregresso episodio di diverticolite del colon trattato conservativamente 2 mesi prima.',
      hospitalCourse: 'In reparto chirurgico: epatomegalia dolente alla palpazione. Leucociti 18.500/mmc con neutrofilia al 88%, PCR 240 mg/L, procalcitonina 3.8 ng/mL, modesto incremento degli indici di colestasi. TC addome con mdc: voluminosa lesione a densità fluida a margini irregolari con cercine periferico di iperemia ("rim sign") di 7.5 cm al lobo epatico destro (segmenti VII-VIII), compatibile con ascesso epatico piogenico. In sala di radiologia/chirurgia interventistica: eseguita puntura percutanea trans-epatica sotto guida ecografica con ago di Chiba, aspirazione di circa 150 mL di pus denso brunastro maleodorante (inviato ad esame colturale) e posizionamento di catetere di drenaggio a coda di maiale (pigtail 10 Fr) a caduta. Esame colturale positivo per Streptococcus anginosus e Fusobacterium nucleatum. Avviata terapia antibiotica mirata con Ceftriaxone e Metronidazolo EV con progressiva defervescenza entro 72 ore.',
      proceduresConducted: 'Drenaggio percutaneo trans-epatico di ascesso epatico sotto guida ecografica con posizionamento di catetere pigtail, ecografia addominale.',
      dischargeStatus: 'Dimesso al 14° giorno con catetere rimosso dopo controllo TC attestante la scomparsa della cavità ascessuale e normalizzazione della PCR.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'ascesso epatico piogenico ha il codice K75.0. Nel catalogo CIPI il drenaggio percutaneo dell\'ascesso epatico è codificato con CIPI 50.91.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K75.0', description: 'Ascesso del fegato (Ascesso epatico piogenico)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'B95.5', description: 'Streptococco non specificato come causa di malattie classificate in altri capitoli', system: 'ICD-10-IM' },
          { code: 'E11.9', description: 'Diabete mellito di tipo 2', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-50.91', description: 'Aspirazione o drenaggio percutaneo del fegato (Drenaggio percutaneo di ascesso epatico)', system: 'CIPI' },
          { code: 'CIPI-88.76', description: 'Ecografia dell\'addome superiore con guida di procedura interventistica', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '572.0', description: 'Ascesso epatico', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '250.00', description: 'Diabete mellito', system: 'ICD-9-CM' }],
        procedures: [{ code: '50.91', description: 'Aspirazione percutanea del fegato', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K75.0 identifica l\'ascesso epatico piogenico batterico.',
        'La procedura CIPI 50.91 codifica formalmente il drenaggio percutaneo guidato dall\'imaging.',
        'Il codice batterico B95.5 traccia il patogeno isolato dal materiale purulento.'
      ],
      commonCognitiveErrors: [
        'Confondere l\'ascesso piogenico con l\'ascesso amebico da Entamoeba histolytica (A06.4).',
        'Codificare drenaggio chirurgico aperto a cielo aperto (CIPI 50.0) anziché la procedura percutanea mini-invasiva.'
      ],
      chartDocumentationAdvice: 'Attestare il volume di pus evacuato al momento del posizionamento del pigtail e l\'esito microbiologico delle colture.'
    }
  },
  {
    id: 'surg-20',
    specialtyId: 'chirurgia_generale',
    caseNumber: 20,
    title: 'Acalasia esofagea di tipo II trattata con miotomia extramucosa laparoscopica sec. Heller e fundoplicatio sec. Dor',
    complexity: 'Intermedio',
    subCategory: 'Chirurgia Esofago-Gastrica Funzionale',
    clinicalScenario: {
      patientAgeSex: 'Donna, 47 anni',
      admissionReason: 'Disfagia ingravescente sia per i cibi solidi che per i liquidi (disfagia paradossa), rigurgito notturno di cibo indigerito, dolore toracico retrosternale e calo ponderale di 7 kg in 6 mesi (Eckardt score = 8).',
      anamnesis: 'Paziente non fumatrice, trattata infruttuosamente con calcio-antagonisti per os.',
      hospitalCourse: 'Rx tubo digerente con bario: dilatazione esofagea con tipico restringimento conico a "coda di topo" o "becco d\'uccello" alla giunzione esofago-gastrica. Manometria esofagea ad alta risoluzione (HRM): fallimento del rilassamento dello sfintere esofageo inferiore (IRP mediano 28 mmHg) con pan-pressurizzazioni esofagee nel 80% delle deglutizioni (quadro diagnostico di Acalasia di tipo II sec. classificazione di Chicago v4.0). EGDS esclude cause neoplastiche estrinseche o intrinseche (pseudoacalasia). Eseguito intervento di miotomia extramucosa della giunzione esofago-gastrica per via laparoscopica sec. Heller (estesa per 6 cm sull\'esofago inferiore e per 2 cm sul versante gastrico) associata a fundoplicatio anteriore a 180° sec. Dor per prevenzione del reflusso gastroesofageo iatrogeno.',
      proceduresConducted: 'Miotomia esofago-gastrica laparoscopica (intervento di Heller), plastica antireflusso anteriore sec. Dor (fundoplicatio laparoscopica), endoscopia intraoperatoria di controllo per test di tenuta pneumatica mucinica.',
      dischargeStatus: 'Dimessa in 3a giornata post-operatoria con Eckardt score sceso a 1, ripresa dell\'alimentazione semisolida e completa scomparsa della disfagia.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'acalasia del cardias ha il codice K22.0. Nel catalogo CIPI la miotomia laparoscopica di Heller ha il codice dedicato CIPI 42.7.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K22.0', description: 'Acalasia del cardias (Acalasia esofagea)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R13.10', description: 'Disfagia non specificata', system: 'ICD-10-IM' },
          { code: 'R63.4', description: 'Perdita di peso anomala', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-42.7', description: 'Esofagomiotomia (Miotomia extramucosa di Heller per via laparoscopica)', system: 'CIPI' },
          { code: 'CIPI-44.67', description: 'Procedura laparoscopica per la creazione di fondo-plicatura (Fundoplicatio sec. Dor)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '530.0', description: 'Acalasia e cardiospasmo', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '787.20', description: 'Disfagia', system: 'ICD-9-CM' }],
        procedures: [{ code: '42.7', description: 'Esofagomiotomia', system: 'ICD-9-CM' }, { code: '44.67', description: 'Fundoplicatio laparoscopica', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K22.0 individua con precisione la patologia motoria funzionale primaria esofagea.',
        'La procedura combinata di miotomia laparoscopica (CIPI 42.7) unita alla plastica antireflusso anteriore (CIPI 44.67) rispecchia la corretta condotta chirurgica conforme alle linee guida internazionali.'
      ],
      commonCognitiveErrors: [
        'Codificare solo la fundoplicatio per malattia da reflusso dimenticando la miotomia di Heller per acalasia.',
        'Omettere la miotomia gastrica descritta nel registro operatorio.'
      ],
      chartDocumentationAdvice: 'Attestare l\'Eckardt score pre e post intervento, la classificazione di Chicago (tipo II) e l\'esito negativo del test idropneumatico intraoperatorio con blu di metilene.'
    }
  }
];
