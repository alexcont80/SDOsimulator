import { ClinicalCase } from '../../types';

export const GYNECOLOGY_CASES: ClinicalCase[] = [
  {
    id: 'ost-1',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 1,
    title: 'Parto cesareo urgente per sofferenza fetale acuta con bradicardia persistente in gravidanza a termine',
    complexity: 'Intermedio',
    subCategory: 'Ostetricia d\'Urgenza / Sala Parto',
    clinicalScenario: {
      patientAgeSex: 'Donna, 31 anni, primigravida (nullipara)',
      admissionReason: 'Travaglio di parto spontaneo a termine (40 settimane + 2 giorni) con contrazioni uterine ritmiche e rottura spontanea delle membrane con liquido amniotico tinto di meconio denso ("a purea di piselli").',
      anamnesis: 'Gravidanza a decorso fisiologico con sierologie e tamponi vagino-rettali negativi, curva da carico glicemico normale.',
      hospitalCourse: 'In Sala Parto: dilatazione cervicale di 5 cm, contrazioni ogni 3 minuti valide. Cardiotocografia (CTG) continua in travaglio: comparsa improvvisa di bradicardia fetale severa e prolungata (FCF scesa stabilmente a 70-80 bpm per oltre 4 minuti) non responsiva a decubito laterale sinistro, tocolisi d\'emergenza con atosiban ed iperidratazione, con decelerazioni tardive ripetute e variabilità assente (tracciato CTG Categoria III secondo FIGO / ACOG - alto rischio di asfissia intrauterina). Indicazione tempestiva a taglio cesareo d\'urgenza categoria 1 (decision-to-delivery time < 15 minuti). Condotta in sala operatoria ostetrica: anestesia generale d\'urgenza (rapido crush induction), laparotomia trasversale sec. Pfannenstiel, isterotomia trasversale semilunare al segmento uterino inferiore; estrazione rapida di feto maschio vivo con triplo giro di cordone ombelicale stretto attorno al collo; feto affidato immediatamente al neonatologo (indice di Apgar: 4 al 1° minuto, 8 al 5° minuto; pH su sangue funicolare da arteria ombelicale 7.11 con BE -9.4 mmol/L). Revisione della cavità uterina, rimozione manuale di placenta integra ed emostasi accurata con isterorrafia a doppio strato.',
      proceduresConducted: 'Taglio cesareo d\'urgenza per sofferenza fetale (isterotomia trasversale bassa), cardiotocografia continua intrapartum, prelievo di sangue funicolare da arteria ombelicale per emogasanalisi neonatale.',
      dischargeStatus: 'Dimessa in 3a giornata puerperale in benessere materno, ferita chirurgica asciutta, lochiazioni fisiologiche ed allattamento al seno avviato con neonato vigoroso.'
    },
    documentationGapsWarning: 'In ICD-10-IM il parto cesareo per sofferenza fetale acuta ha il codice primario O68.0 (Travaglio e parto complicati da anomalia della frequenza cardiaca fetale). Il codice di esito del parto è Z37.0 (Nato singolo vivo). Nel catalogo CIPI il parto cesareo ha codice CIPI 74.1.',
    solution: {
      icd10: {
        primaryDiagnosis: {
          code: 'O68.0',
          description: 'Travaglio e parto complicati da anomalia della frequenza cardiaca fetale (Sofferenza fetale acuta)',
          system: 'ICD-10-IM',
          category: 'Gravidanza, parto e puerperio'
        },
        secondaryDiagnoses: [
          { code: 'O69.1', description: 'Travaglio e parto complicati da cordone ombelicale attorno al collo, con compressione', system: 'ICD-10-IM' },
          { code: 'O68.1', description: 'Travaglio e parto complicati da meconio nel liquido amniotico', system: 'ICD-10-IM' },
          { code: 'Z37.0', description: 'Nato singolo vivo', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-74.1', description: 'Taglio cesareo al segmento inferiore (Taglio cesareo d\'urgenza)', system: 'CIPI' },
          { code: 'CIPI-75.34', description: 'Altro monitoraggio fetale elettronico (Cardiotocografia continua)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '656.31', description: 'Sofferenza fetale che complica la gestione della gravidanza, parto effettuato', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '663.11', description: 'Giro di cordone ombelicale attorno al collo', system: 'ICD-9-CM' }, { code: 'V27.0', description: 'Nato singolo vivo', system: 'ICD-9-CM' }],
        procedures: [{ code: '74.1', description: 'Taglio cesareo al segmento inferiore', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'O68.0 identifica specificamente la sofferenza fetale acuta da anomalia del battito cardiaco intrapartum, causa cardine dell\'intervento d\'urgenza.',
        'Il codice di esito del parto (Z37.0: nato singolo vivo) è obbligatorio su ogni SDO ostetrica per la corretta chiusura statistica del ricovero.',
        'La procedura CIPI 74.1 individua il cesareo al segmento inferiore, distinta dal cesareo classico o corporale (CIPI 74.0).'
      ],
      commonCognitiveErrors: [
        'Omettere il codice di esito del parto Z37.0 (errore bloccante di validazione del flusso SDO).',
        'Codificare taglio cesareo elettivo programmato (O82) quando l\'intervento è stato eseguito in emergenza per bradicardia fetale.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario di sala parto l\'orario di indicazione al cesareo e di nascita ("decision-to-delivery time"), il tracciato CTG Categoria III e i valori di pH ed eccesso basi su cordone ombelicale.'
    }
  },
  {
    id: 'ost-2',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 2,
    title: 'Emorragia post-partum severa primaria (PPH) da atonia uterina con shock ipovolemico trattata con palloncino di Bakri e sutura di B-Lynch',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Emergenze Ostetriche / Chirurgia Emostatica',
    clinicalScenario: {
      patientAgeSex: 'Donna, 38 anni, pluripara (parto precedente eutocico)',
      admissionReason: 'Emorragia genitale massiva a getto comparsa 30 minuti dopo parto vaginale eutocico a termine di feto macrosoma (4.350 g), con rapido deterioramento emodinamico.',
      anamnesis: 'Travaglio prolungato durato 14 ore con infusione di ossitocina, polidramnios.',
      hospitalCourse: 'In Sala Parto: perdita ematica stimata quantitativamente superiore a 1.800 mL (Emorragia post-partum severa - PPH); utero atonica "a borsa di straccio", debordante sopra l\'ombelico e non contraibile al massaggio manuale. Paziente pallida, sudorata, ipotesa (PA 75/40 mmHg) e tachicardica (FC 135 bpm), indice di shock ostetrico = 1.8 (> 1.0, indicativo di shock emorragico severo). Attivato il protocollo "Code Red" ostetrico per PPH: massaggio bimanuale dell\'utero; somministrazione sequenziale immediata di uterotonici (Ossitocina 10 UI EV in bolo lento + 30 UI in infusione continua, Sulprostone analogo PGE2 EV e Metilergometrina IM); somministrazione precoce di Acido Tranexamico 1 g EV entro le 3 ore secondo protocollo WOMAN trial. Revisione manuale e strumentale della cavità uterina in narcosi per escludere ritenzione di frammenti placentari; ispezione con valve di Eastman esclude lacerazioni del canale del parto. Posizionato palloncino idrostatico intrauterino da tamponamento (Bakri balloon) gonfiato con 400 mL di soluzione fisiologica tiepida; persistenza di sanguinamento refrattario oltre il palloncino. Trasferita d\'urgenza in sala operatoria per laparotomia esplorativa d\'emergenza: confezionamento di sutura compressiva uterina sec. B-Lynch con filo riassorbibile pesante a tutto spessore e legatura bilaterale delle arterie uterine (tecnica di O\'Leary) con immediato arresto dell\'emorragia e ripresa di consistenza lignea dell\'utero; trasfusione massiva con 4 unità di emazie concentrate, 4 sacche di plasma fresco congelato e concentrato di fibrinogeno (2 g).',
      proceduresConducted: 'Sutura compressiva uterina emostatica (tecnica di B-Lynch), legatura chirurgica delle arterie uterine (tecnica di O\'Leary), inserimento di palloncino intrauterino di Bakri, trasfusione massiva di sangue e derivati.',
      dischargeStatus: 'Dimessa in 6a giornata con emoglobina stabilizzata a 10.4 g/dL, utero ben involuto, ferita guarita e piena preservazione della fertilità.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'emorragia post-partum immediata da atonia uterina ha il codice specifico O72.1. Lo shock ipovolemico emorragico ha codice R57.1 / O75.1. Nel catalogo CIPI la sutura compressiva di B-Lynch ha codice CIPI 69.49.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'O72.1', description: 'Altra emorragia immediata post-partum (Emorragia post-partum da atonia uterina)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R57.1', description: 'Shock ipovolemico (Shock emorragico)', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'O60.14X0', description: 'Macrosomia fetale che complica la gestione materna', system: 'ICD-10-IM' },
          { code: 'Z37.0', description: 'Nato singolo vivo', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-69.49', description: 'Altra riparazione dell\'utero (Sutura emostatica compressiva di B-Lynch)', system: 'CIPI' },
          { code: 'CIPI-38.86', description: 'Altra occlusione chirurgica di vasi addominali (Legatura chirurgica delle arterie uterine sec. O\'Leary)', system: 'CIPI' },
          { code: 'CIPI-69.99', description: 'Inserimento di tampone/palloncino emostatico intrauterino (Palloncino di Bakri)', system: 'CIPI' },
          { code: 'CIPI-99.04', description: 'Trasfusione di globuli rossi concentrati', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '666.12', description: 'Altra emorragia post-partum immediata, con menzione di complicazione puerperale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '785.59', description: 'Altro shock (shock ipovolemico)', system: 'ICD-9-CM' }, { code: 'V27.0', description: 'Nato singolo vivo', system: 'ICD-9-CM' }],
        procedures: [{ code: '69.49', description: 'Altra riparazione dell\'utero', system: 'ICD-9-CM' }, { code: '99.04', description: 'Trasfusione di sangue', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'O72.1 identifica l\'emorragia primaria post-partum insorta entro le prime 24 ore dal parto per atonia uterina.',
        'Lo shock ipovolemico emorragico severo (R57.1) qualifica la severità clinica di emergenza ostetrica (MCC).',
        'Le procedure conservative emostatiche chirurgiche (B-Lynch CIPI 69.49 e legatura vascolare CIPI 38.86) dimostrano il salvataggio d\'organo evitando un\'isterectomia ostetrica peri-partum demolitiva.'
      ],
      commonCognitiveErrors: [
        'Omettere la quantificazione dell\'emorragia post-partum e il codice di shock emorragico.',
        'Dimenticare di codificare l\'inserimento del palloncino di Bakri e la sutura di B-Lynch.'
      ],
      chartDocumentationAdvice: 'Attestare nel registro di sala parto la perdita ematica quantificata gravimetricamente (in mL), il protocollo trasfusionale massivo attivato e i tempi esatti di emostasi.'
    }
  },
  {
    id: 'ost-3',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 3,
    title: 'Preeclampsia severa con caratteristiche di gravità a 34 settimane trattata con solfato di magnesio e taglio cesareo',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Ostetricia ad Alto Rischio / Patologia Materno-Fetale',
    clinicalScenario: {
      patientAgeSex: 'Donna, 32 anni, primigravida',
      admissionReason: 'Cefalea fronto-orbitaria pulsante violenta refrattaria al paracetamolo, fosfeni visivi (scotomi scintillanti), dolore urente all\'epigastrio e all\'ipocondrio destro "a sbarra" ed edemi imponenti al volto e alle mani a 34 settimane + 1 giorno di gestazione.',
      anamnesis: 'Paziente normotesa prima della gravidanza, assunzione di acido folico.',
      hospitalCourse: 'In Ostetricia/Area Semintensiva: pressione arteriosa marcatamente elevata (PA 175/110 mmHg rilevata a distanza di 15 minuti su entrambi i bracci); riflessi osteotendinei rotulei policinetici con clono clonico esauribile della caviglia a 3 scosse (iperreflessia marcata da ipereccitabilità del SNC / imminenza di eclampsia). Esami di laboratorio d\'urgenza: proteinuria estemporanea al dipstick +++ e rapporto proteine/creatinina urinarie (uPCR) pari a 1.2 mg/mg (severa proteinuria); piastrine 110.000/mcL; transaminasi epatiche raddoppiate (AST 95 U/L, ALT 105 U/L); acido urico sierico elevato a 7.8 mg/dL; creatinina 1.1 mg/dL; ratio sFlt-1/PlGF elevatissimo a 210 (indicativo di disfunzione endoteliale placentare massiva). Diagnosi di Preeclampsia severa con criteri di gravità (ACOG / ISSHP). Avviata immediatamente neuroprofilassi delle crisi convulsive eclamptiche con Solfato di Magnesio (MgSO4) secondo protocollo di Zuspan: dose di carico di 4 g EV in 20 minuti, seguita da infusione continua di mantenimento a 1 g/h con controllo orario di diuresi, frequenza respiratoria e riflesso rotuleo; controllo pressorio d\'urgenza con Labetalolo EV a boli ripetuti con target PA < 150/95 mmHg. Somministrata prima dose di Betametasone 12 mg IM per la maturità polmonare fetale; tuttavia, considerata la persistenza dei sintomi cerebrali ed epigastrici refrattari e il CTG fetale non rassicurante, posta indicazione ad espletamento del parto entro 6 ore mediante taglio cesareo al segmento inferiore. Nato singolo vivo pretermine di 1.950 g affidato alla TIN.',
      proceduresConducted: 'Taglio cesareo al segmento inferiore, infusione continua di solfato di magnesio in pompa siringa con monitoraggio diuresi, cardiotocografia continua.',
      dischargeStatus: 'Dimessa in 5a giornata post-operatoria con PA stabilizzata su terapia orale con nifedipina a rilascio modificato, indici epatici e piastrine normalizzati e neonato in respiro autonomo.'
    },
    documentationGapsWarning: 'In ICD-10-IM la preeclampsia severa ha il codice O14.13 (Preeclampsia severa, terzo trimestre). Nel catalogo CIPI il cesareo è CIPI 74.1 e l\'infusione di solfato di magnesio è CIPI 99.29.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'O14.13', description: 'Preeclampsia severa, terzo trimestre', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'O60.14X0', description: 'Parto pretermine con parto cesareo', system: 'ICD-10-IM' },
          { code: 'R51.9', description: 'Cefalea non specificata', system: 'ICD-10-IM' },
          { code: 'Z37.0', description: 'Nato singolo vivo', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-74.1', description: 'Taglio cesareo al segmento inferiore', system: 'CIPI' },
          { code: 'CIPI-99.29', description: 'Iniezione o infusione di altra sostanza terapeutica (Solfato di magnesio EV per neuroprofilassi)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '642.53', description: 'Preeclampsia grave, con menzione di condizione pregressa, antepartum', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '644.21', description: 'Parto precoce', system: 'ICD-9-CM' }, { code: 'V27.0', description: 'Nato singolo vivo', system: 'ICD-9-CM' }],
        procedures: [{ code: '74.1', description: 'Taglio cesareo al segmento inferiore', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'O14.13 definisce la preeclampsia severa nel terzo trimestre (presenza di ipertensione grave e sintomi d\'organo target).',
        'La presenza della prematurità conclamata con parto pretermine (O60.14X0) e il codice di nato vivo (Z37.0) completano la tracciatura clinica.',
        'La procedura CIPI 99.29 documenta la somministrazione del solfato di magnesio, farmaco salvavita per la prevenzione dell\'eclampsia.'
      ],
      commonCognitiveErrors: [
        'Codificare preeclampsia lieve-moderata (O14.0) in presenza di PA > 160/110 mmHg e sintomi neurologici da imminenza di eclampsia.',
        'Omettere il codice di esito del parto Z37.0.'
      ],
      chartDocumentationAdvice: 'Attestare i valori pressori massimi, il rapporto sFlt-1/PlGF, la diuresi oraria durante infusione di MgSO4 e i criteri di severità ACOG.'
    }
  },
  {
    id: 'ost-4',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 4,
    title: 'Sindrome HELLP completa a 32 settimane con coagulopatia e sofferenza fetale trattata con taglio cesareo d\'urgenza e supporto trasfusionale',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Ostetricia ad Alto Rischio / Emergenze Ostetriche',
    clinicalScenario: {
      patientAgeSex: 'Donna, 29 anni, secondigravida',
      admissionReason: 'Insorgenza acuta da 12 ore di dolore violento ed a sbarra all\'ipocondrio destro ed epigastrio irradiato al dorso, nausea, vomito alimentare e biliare, malessere generale e comparsa di urine scure e colorito subitterico a 32 settimane di amenorrea.',
      anamnesis: 'Preeclampsia nella prima gravidanza a termine, assunzione di cardioaspirina sospesa a 28 settimane.',
      hospitalCourse: 'In Ostetricia/Terapia Intensiva: PA 165/105 mmHg, dolorabilità esasperata alla palpazione del quadrante superiore destro dell\'addome con epatomegalia da distensione della capsula di Glisson; edemi peritibiali marcati. Esami di laboratorio d\'urgenza mostrano la triade diagnostica completa della Sindrome HELLP (secondo criteri di Mississippi e Tennessee): 1) Emolisi microangiopatica (H): striscio periferico positivo per schistociti (frammenti di globuli rossi al 2.5%), LDH marcatamente elevato a 1.450 U/L (> 600 U/L), bilirubina totale 3.2 mg/dL con prevalenza indiretta, aptoglobina sierica crollata a < 10 mg/dL; 2) Enzimi epatici elevati (EL): AST 380 U/L ed ALT 420 U/L (> 3 volte la norma); 3) Piastrinopenia severa (LP): piastrine crollate a 38.000/mcL (Sindrome HELLP di Classe 1 di Mississippi < 50.000/mcL, ad altissimo rischio di ematoma subcapsulare epatico e rottura di fegato). Fibrinogeno 180 mg/dL, D-dimero > 10.000 ng/mL. Cardiotocografia: variabilità minima fetale con decelerazioni precoci ripetute. Posta indicazione ad immediato espletamento del parto: somministrato bolo di Solfato di Magnesio per la profilassi delle convulsioni e dell\'emorragia cerebrale; trasfusione pre-operatoria di 2 pool di concentrati piastrinici per portare le piastrine > 50.000/mcL prima dell\'incisione chirurgica; eseguito taglio cesareo d\'urgenza in anestesia generale; estrazione di neonato vitale femmina pretermine di 1.620 g affidato alla TIN; ispezione epatica bimanuale rapida trans-peritoneale che esclude ematoma subcapsulare rotto; posizionamento di drenaggio aspirativo addominale.',
      proceduresConducted: 'Taglio cesareo d\'urgenza per sindrome HELLP, trasfusione di piastrine concentrate da aferesi, ecografia addominale per visualizzazione epatica ed ematoma subcapsulare, monitoraggio intensivo in semintensiva.',
      dischargeStatus: 'Dimessa in 8a giornata con piastrine risalite a 165.000/mcL, LDH e transaminasi normalizzati, PA ben controllata su terapia orale e neonato stabile in TIN.'
    },
    documentationGapsWarning: 'In ICD-10-IM la sindrome HELLP ha il codice specifico O14.23 (Sindrome HELLP, terzo trimestre). Nel catalogo CIPI il cesareo è CIPI 74.1 e la trasfusione piastrinica è CIPI 99.05.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'O14.23', description: 'Sindrome HELLP (Emolisi, enzimi epatici elevati e basse piastrine), terzo trimestre', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'D69.6', description: 'Trombocitopenia non specificata', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'O60.14X0', description: 'Parto pretermine con parto cesareo', system: 'ICD-10-IM' },
          { code: 'Z37.0', description: 'Nato singolo vivo', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-74.1', description: 'Taglio cesareo al segmento inferiore', system: 'CIPI' },
          { code: 'CIPI-99.05', description: 'Trasfusione di piastrine (Pool piastrinico concentrato da aferesi)', system: 'CIPI' },
          { code: 'CIPI-88.76', description: 'Ecografia dell\'addome con studio parenchima epatico per ematoma sottocapsulare', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '642.53', description: 'Preeclampsia grave (sindrome HELLP)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '287.5', description: 'Trombocitopenia', system: 'ICD-9-CM' }, { code: 'V27.0', description: 'Nato singolo vivo', system: 'ICD-9-CM' }],
        procedures: [{ code: '74.1', description: 'Taglio cesareo', system: 'ICD-9-CM' }, { code: '99.05', description: 'Trasfusione di piastrine', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'O14.23 è il codice specifico ed autonomo per la sindrome HELLP nel terzo trimestre di gravidanza.',
        'La piastrinopenia severa (D69.6) e il parto pretermine complicato documentano la severità ematologica e ostetrica (MCC).',
        'La combinazione di cesareo d\'urgenza (CIPI 74.1) e trasfusione piastrinica (CIPI 99.05) descrive l\'intervento multidisciplinare ad alta intensità.'
      ],
      commonCognitiveErrors: [
        'Codificare semplice preeclampsia ignorando il codice autonomo specifico della sindrome HELLP O14.2.',
        'Omettere la trasfusione piastrinica pre-operatoria indispensabile per prevenire ematomi massivi di parete o pelvici.'
      ],
      chartDocumentationAdvice: 'Attestare la presenza dei criteri di Mississippi (Classe 1, 2 o 3), i valori orari di piastrine, schistociti ed LDH e l\'ecografia epatica.'
    }
  },
  {
    id: 'ost-5',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 5,
    title: 'Gravidanza ectopica tubarica destra rotta con emoperitoneo massivo e shock ipovolemico trattata con salpingectomia laparoscopica d\'urgenza',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Ginecologia d\'Urgenza / Chirurgia Mininvasiva Laparoscopica',
    clinicalScenario: {
      patientAgeSex: 'Donna, 27 anni, nullipara',
      admissionReason: 'Dolore pelvico ed addominale acuto trafittivo violentissimo all\'emidistanza iliaca destra con irradiazione alla spalla (segno di Kehr) comparso improvvisamente, seguito da sincope con perdita di coscienza e metrorragia ematica scura a ceralacca a 7 settimane di amenorrea.',
      anamnesis: 'Storia di precedente infezione pelvica da Chlamydia trachomatis, non assumeva contraccettivi.',
      hospitalCourse: 'In Pronto Soccorso Ginecologico: paziente pallida, diaforetica, estremità fredde, ipotesa (PA 80/45 mmHg) e tachicardica (FC 125 bpm). Addome dolente e diffusamente peritonitico con segno di Blumberg positivo; alla visita ginecologica dolore squisito alla mobilizzazione del collo uterino ("grido di Douglas") con fornice vaginale posteriore bombato e dolente. Dosaggio rapido su sangue di beta-hCG: 4.800 mUI/mL. Ecografia transvaginale d\'urgenza: cavità uterina vuota con endometrio ispessito da decidualizzazione privo di camera gestazionale intrauterina (esclusa gravidanza ortotopica); in sede annessiale destra presenza di massa complessa disomogenea di 4 cm con "anello tubarico" (tubal ring) e camera gestazionale extrauterina rotta; presenza di abbondante versamento fluido corpuscolato libero nel cavo del Douglas, negli spazi periepatitici e paracolici di Morrison per oltre 800 mL (Emoperitoneo massivo). Indicazione ad intervento chirurgico d\'urgenza immediata per shock emorragico da rottura tubarica. Eseguita laparoscopia d\'urgenza: evacuazione ed aspirazione di circa 900 mL di emoperitoneo e coaguli; evidenza di rottura a scoppio del terzo ampollare della tuba uterina destra con sanguinamento arterioso attivo dai margini; coagulazione bipolare del mesosalpinge ed asportazione completa della tuba patologica con salpingectomia laparoscopica destra; accurato lavaggio pelvico ed emostasi perfetta; conservazione integra dell\'ovaio destro e degli annessi sinistri.',
      proceduresConducted: 'Salpingectomia laparoscopica unilaterale d\'urgenza (asportazione di tuba di Falloppio), evacuazione ed aspirazione di emoperitoneo, ecografia ginecologica transvaginale, dosaggio di beta-hCG.',
      dischargeStatus: 'Dimessa in 2a giornata post-operatoria apiretica ed emodinamicamente stabile, con beta-hCG in crollo a < 200 mUI/mL.'
    },
    documentationGapsWarning: 'In ICD-10-IM la gravidanza tubarica con rottura ha il codice specifico O00.101 (Gravidanza tubarica destra con rottura). Lo shock ipovolemico ha codice R57.1. Nel catalogo CIPI la salpingectomia laparoscopica ha il codice CIPI 66.62.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'O00.101', description: 'Gravidanza tubarica destra con rottura', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R57.1', description: 'Shock ipovolemico (Shock emorragico)', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'R58', description: 'Emorragia non classificata altrove (Emoperitoneo)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-66.62', description: 'Salpingectomia bilaterale o unilaterale totale in laparoscopia (Salpingectomia laparoscopica)', system: 'CIPI' },
          { code: 'CIPI-54.21', description: 'Laparoscopia diagnostica ed operativa', system: 'CIPI' },
          { code: 'CIPI-88.78', description: 'Ecografia dell\'utero e degli annessi per via transvaginale', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '633.11', description: 'Gravidanza tubarica con rottura e/o emoperitoneo', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '785.59', description: 'Altro shock', system: 'ICD-9-CM' }],
        procedures: [{ code: '66.62', description: 'Salpingectomia laparoscopica', system: 'ICD-9-CM' }, { code: '54.21', description: 'Laparoscopia', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'O00.101 specifica la sede anatomica tubarica, la lateralità destra e la complicanza di rottura.',
        'La presenza dello shock emorragico (R57.1) e dell\'emoperitoneo massivo (R58) attesta l\'emergenza chirurgica salvavita (MCC).',
        'La procedura CIPI 66.62 descrive la salpingectomia laparoscopica, gold standard terapeutico.'
      ],
      commonCognitiveErrors: [
        'Codificare gravidanza ectopica non specificata senza menzione della rottura o della lateralità.',
        'Omettere la complicanza dello shock ipovolemico associato.'
      ],
      chartDocumentationAdvice: 'Attestare nel verbale laparoscopico il volume dell\'emoperitoneo aspirato (in mL), il sito di rottura tubarica e il valore di beta-hCG pre e post-operatorio.'
    }
  },
  {
    id: 'ost-6',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 6,
    title: 'Placenta previa centrale maggiore con metrorragia massiva ante-partum a 35 settimane trattata con taglio cesareo d\'urgenza',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Ostetricia ad Alto Rischio / Chirurgia Ostetrica Complessa',
    clinicalScenario: {
      patientAgeSex: 'Donna, 35 anni, pluripara (pregresso taglio cesareo)',
      admissionReason: 'Improvvisa comparsa di sanguinamento genitale rosso vivo indolore abbondante a ciel sereno a riposo notturno a 35 settimane + 4 giorni, con impregnazione dei vestiti e perdita ematica stimata di circa 600 mL.',
      anamnesis: 'Portatrice di placenta previa centrale occludente totale nota all\'ecografia morfologica di accrescimento del III trimestre, pregresso taglio cesareo 3 anni prima.',
      hospitalCourse: 'In Pronto Soccorso Ostetrico: paziente emodinamicamente stabile (PA 110/70 mmHg, FC 90 bpm); utero rilassato, non dolente e non contratto; rigorosamente evitato l\'esplorazione vaginale digitale per il rischio di distacco massivo. Ecografia transaddominale e transvaginale delicata immediata: placenta a sede anteriore che sormonta completamente l\'orifizio uterino interno (OUI) debordando di oltre 3 cm oltre il margine cervicale interno (Placenta previa totale/centrale maggiore); doppler colore esclude segni franchi di placenta accreta/percreta sul pregresso taglio cesareo. Cardiotocografia: frequenza cardiaca fetale nei limiti con variabilità conservata. Durante l\'osservazione in sala parto, comparsa di secondo episodio emorragico violento e torrenziale con perdita di ulteriori 500 mL di sangue ed iniziale ipotensione materna. Posta indicazione tempestiva ad espletamento del parto mediante taglio cesareo d\'urgenza con équipe chirurgica multidisciplinare e sangue prontamente disponibile in sala. Eseguito taglio cesareo al segmento inferiore: incisione uterina trasversa al di sopra del margine placentare superiore evitando di transfiggere la placenta; estrazione rapida di feto maschio vitale di 2.480 g (Apgar 8 al 1° e 9 al 5° minuto); clivaggio manuale delicato della placenta con uterotonici; somministrazione di carbetocina EV; emostasi del segmento inferiore con punti a figura di 8 emostatici ed applicazione di matrice emostatica riassorbibile.',
      proceduresConducted: 'Taglio cesareo al segmento inferiore d\'urgenza per placenta previa emorragica, ecografia ostetrica per localizzazione placentare, emostasi uterina selettiva.',
      dischargeStatus: 'Dimessa in 4a giornata con puerperio regolare, emoglobina 10.1 g/dL ed allattamento naturale avviato.'
    },
    documentationGapsWarning: 'In ICD-10-IM la placenta previa totale con emorragia ha il codice specifico O44.13 (Placenta previa con emorragia, terzo trimestre). Nel catalogo CIPI il cesareo ha codice CIPI 74.1.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'O44.13', description: 'Placenta previa con emorragia, terzo trimestre (Placenta previa centrale emorragica)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'O34.211', description: 'Assistenza materna per cicatrice da pregresso taglio cesareo', system: 'ICD-10-IM' },
          { code: 'O60.14X0', description: 'Parto pretermine con parto cesareo', system: 'ICD-10-IM' },
          { code: 'Z37.0', description: 'Nato singolo vivo', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-74.1', description: 'Taglio cesareo al segmento inferiore', system: 'CIPI' },
          { code: 'CIPI-88.78', description: 'Ecografia ostetrica per localizzazione placentare', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '641.13', description: 'Placenta previa con emorragia, antepartum', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '654.21', description: 'Cicatrice uterina pregressa da parto cesareo', system: 'ICD-9-CM' }, { code: 'V27.0', description: 'Nato singolo vivo', system: 'ICD-9-CM' }],
        procedures: [{ code: '74.1', description: 'Taglio cesareo', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'O44.13 individua con la massima specificità la placenta previa complicata da emorragia nel terzo trimestre.',
        'La presenza della cicatrice da pregresso taglio cesareo (O34.211) documenta il fattore predisponente chirurgico.',
        'La procedura CIPI 74.1 descrive il cesareo salvavita materno-fetale.'
      ],
      commonCognitiveErrors: [
        'Codificare placenta previa senza emorragia O44.0 quando vi è stata una metrorragia massiva che ha imposto il cesareo urgente.',
        'Omettere il codice di esito del parto Z37.0.'
      ],
      chartDocumentationAdvice: 'Attestare la distanza del margine placentare dall\'OUI all\'ecografia transvaginale, il volume della perdita ematica ante-partum e l\'assenza di invasione miometriale anomala (accretismo).'
    }
  },
  {
    id: 'ost-7',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 7,
    title: 'Distacco intempestivo di placenta normalmente inserita (abruptio placentae) con utero di Couvelaire trattato con cesareo d\'urgenza',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Emergenze Ostetriche Maggiori',
    clinicalScenario: {
      patientAgeSex: 'Donna, 34 anni, secondigravida',
      admissionReason: 'Dolore addominale improvviso acuto e trafittivo "a pugnalata", continuo, a carico dell\'utero che appare teso ed indurito come pietra, associato a modesta perdita ematica vaginale scura ("a fondo di caffè") a 36 settimane di gestazione.',
      anamnesis: 'Fumo di sigaretta in gravidanza, riscontro di picco ipertensivo (PA 165/100 mmHg) all\'ingresso.',
      hospitalCourse: 'In Sala Parto: utero marcatamente ipertonico, contratto in modo permanente e non palpabile ("utero di legno" o tetano uterino), spiccata dolorabilità alla palpazione; CTG fetale d\'urgenza: bradicardia fetale profonda persistente a 60 bpm con perdita di variabilità (tracciato terminale premorte da anossia placentare acuta). Quadro clinico patognomonico per distacco intempestivo massivo di placenta normalmente inserita (Abruptio Placentae Grado III). Allertata immediatamente la sala operatoria per codice rosso: esecuzione di taglio cesareo in emergenza immediata entro 8 minuti; isterotomia con riscontro di voluminoso ematoma retroplacentare di circa 800 mL di coaguli scuri che distaccava oltre il 60% della superficie di inserzione placentare; estrazione immediata di feto vitale di 2.350 g con severa depressione neonatale (Apgar 3 a 1 min, 7 a 5 min) intubato dal rianimatore neonatale; all\'ispezione uterina riscontro del tipico "utero di Couvelaire" con diffuse stravasi ematici ed apoplessia utero-placentare che colora la sierosa di bluastro-violaceo; somministrazione massiva di ossitocina, carbetocina e metilergometrina con ripresa graduale del tono ed arresto del sanguinamento, evitando l\'isterectomia; somministrato concentrato di fibrinogeno e plasma per prevenire la coagulopatia da consumo (CID).',
      proceduresConducted: 'Taglio cesareo al segmento inferiore in emergenza immediata, evacuazione di ematoma retroplacentare, somministrazione di farmaci emostatici ed emoderivati.',
      dischargeStatus: 'Dimessa in 5a giornata con puerperio fisiologico, coagulazione normalizzata e neonato in progressivo recupero in TIN.'
    },
    documentationGapsWarning: 'In ICD-10-IM il distacco prematuro di placenta ha il codice primario O45.8X3 (Altro distacco prematuro di placenta, terzo trimestre) o O45.93. Nel catalogo CIPI il cesareo è CIPI 74.1.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'O45.8X3', description: 'Altro distacco prematuro di placenta, terzo trimestre (Abruptio placentae)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'O68.0', description: 'Travaglio e parto complicati da anomalia della frequenza cardiaca fetale (bradicardia fetale)', system: 'ICD-10-IM' },
          { code: 'O13.3', description: 'Ipertensione gestazionale senza proteinuria significativa, terzo trimestre', system: 'ICD-10-IM' },
          { code: 'Z37.0', description: 'Nato singolo vivo', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-74.1', description: 'Taglio cesareo al segmento inferiore', system: 'CIPI' },
          { code: 'CIPI-75.34', description: 'Monitoraggio elettronico fetale continuo (CTG)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '641.23', description: 'Distacco prematuro della placenta, antepartum', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '656.33', description: 'Sofferenza fetale, antepartum', system: 'ICD-9-CM' }, { code: 'V27.0', description: 'Nato singolo vivo', system: 'ICD-9-CM' }],
        procedures: [{ code: '74.1', description: 'Taglio cesareo', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'O45.8X3 definisce formalmente il distacco intempestivo di placenta normalmente inserita.',
        'La sofferenza fetale acuta associata (O68.0) e l\'ipertensione gestazionale documentano la catastrofe ostetrica acuta.',
        'La procedura CIPI 74.1 descrive il cesareo salvavita in emergenza tempo-dipendente.'
      ],
      commonCognitiveErrors: [
        'Confondere il distacco di placenta (utero ipertonico dolente) con la placenta previa (sanguinamento indolore con utero rilassato).',
        'Omettere il codice di esito del parto Z37.0.'
      ],
      chartDocumentationAdvice: 'Attestare l\'entità in mL dell\'ematoma retroplacentare, la percentuale di superficie distaccata e l\'eventuale presenza di utero di Couvelaire.'
    }
  },
  {
    id: 'ost-8',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 8,
    title: 'Parto vaginale eutocico a termine con lacerazione ostetrica perineale di III grado (OASIS) trattata con sfinterorrafia termino-terminale',
    complexity: 'Intermedio',
    subCategory: 'Ostetricia / Traumatologia Perineale del Parto',
    clinicalScenario: {
      patientAgeSex: 'Donna, 28 anni, primipara',
      admissionReason: 'Travaglio spontaneo a termine con parto vaginale spontaneo di neonato di 3.850 g in presentazione cefalica di vertice, complicato da lacerazione perineale estesa.',
      anamnesis: 'Gravidanza a termine non complicata, periodo espulsivo rapido.',
      hospitalCourse: 'In Sala Parto: durante l\'espulsione della testa fetale si verifica improvvisa lacerazione perineale posteriore con estensione allo sfintere anale. Immediata esplorazione sistematica del canale del parto e del retto in narcosi/analgesia epidurale: integrità della mucosa rettale (esclusa lacerazione di IV grado); completa sezione del corpo perineale, della cute e della muscolatura bulbo-cavernosa con lacerazione completa dello sfintere anale esterno (EAS) e parziale dello sfintere anale interno (IAS) per oltre il 50% dello spessore (Lacerazione ostetrica di Grado 3b secondo la classificazione internazionale RCOG / Sultan). Condotta in sala operatoria per riparazione chirurgica ricostruttiva anatomica (OASIS repair): isolamento ed identificazione dei monconi retratti dello sfintere anale interno suturato a punti staccati riassorbibili; ricostruzione dello sfintere anale esterno mediante tecnica di sfinterorrafia termino-terminale (end-to-end) con punti ad "U" in monofilamento sintetico a lento riassorbimento (PDS 3-0); ricostruzione dei muscoli del piano perineale e del setto retto-vaginale; accurata sutura della mucosa vaginale e della cute perineale; esplorazione rettale post-riparazione con conferma di sfintere anale perfettamente tonico ed integro senza suture intraluminali penetranti. Avviata profilassi antibiotica ad ampio spettro e lassativi osmotici per evitare stipsi.',
      proceduresConducted: 'Riparazione chirurgica di lacerazione ostetrica del perineo di III grado con sfinterorrafia dell\'ano, parto vaginale spontaneo, esplorazione rettale intraoperatoria.',
      dischargeStatus: 'Dimessa in 3a giornata con perfetta tenuta della sutura perineale, alvo aperto a feci formate prive di dolore, continenza ai gas e feci integra.'
    },
    documentationGapsWarning: 'In ICD-10-IM la lacerazione perineale ostetrica di terzo grado ha il codice specifico O70.21 (Lacerazione perineale di terzo grado tipo IIIb). Nel catalogo CIPI la riparazione dello sfintere anale per lacerazione ostetrica ha il codice CIPI 75.69.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'O70.21', description: 'Lacerazione perineale di terzo grado durante il parto, con coinvolgimento dello sfintere anale esterno per più del 50%', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'O80', description: 'Incontro per parto spontaneo a termine di feto singolo', system: 'ICD-10-IM' },
          { code: 'Z37.0', description: 'Nato singolo vivo', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-75.69', description: 'Riparazione di altra lacerazione ostetrica recente (Sfinterorrafia anale e perineorrafia)', system: 'CIPI' },
          { code: 'CIPI-73.59', description: 'Altra assistenza al parto spontaneo', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '664.21', description: 'Lacerazione perineale di terzo grado, parto effettuato', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: 'V27.0', description: 'Nato singolo vivo', system: 'ICD-9-CM' }],
        procedures: [{ code: '75.69', description: 'Riparazione di altra lacerazione ostetrica recente', system: 'ICD-9-CM' }, { code: '73.59', description: 'Altra assistenza al parto', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'O70.21 definisce con estrema precisione il grado 3b della lacerazione secondo la classificazione internazionale di Sultan.',
        'La procedura CIPI 75.69 codifica la ricostruzione anatomica dello sfintere anale e del pavimento pelvico.',
        'Il codice Z37.0 registra l\'esito del parto.'
      ],
      commonCognitiveErrors: [
        'Declassare una lacerazione di III grado a banale lacerazione di I o II grado (O70.0 o O70.1), omettendo la lesione dello sfintere anale.',
        'Omettere la specifica procedura chirurgica di sfinterorrafia anale.'
      ],
      chartDocumentationAdvice: 'Attestare nel referto operatorio la classificazione di Sultan (3a, 3b, 3c o 4), la tecnica di sutura dello sfintere (end-to-end vs overlap) e l\'esito dell\'esplorazione rettale finale.'
    }
  },
  {
    id: 'ost-9',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 9,
    title: 'Fibromatosi uterina multipla sintomatica con metrorragia grave ed anemia severa trattata con miomectomia laparoscopica multipla',
    complexity: 'Intermedio',
    subCategory: 'Ginecologia Benigna / Chirurgia Mininvasiva Conservativa',
    clinicalScenario: {
      patientAgeSex: 'Donna, 36 anni, desiderosa di prole',
      admissionReason: 'Menometrorragie gravi prolungate ad ogni ciclo mestruale con coaguli voluminosi, senso di pesantezza pelvica ed ingombro vescicale con pollachiuria da compressione, ed astenia severa.',
      anamnesis: 'Paziente nullipara con desiderio riproduttivo, non risposta a terapia con progestinici.',
      hospitalCourse: 'In Ginecologia: utero aumentato di volume globale, corrispondente a circa 16 settimane di gestazione, bernoccoluto e duro. Esami ematochimici: severa anemia sideropenica microcitica da ipermenorrea cronica con emoglobina 7.2 g/dL e ferritina 4 ng/mL; trasfuse 2 unità di emazie concentrate pre-operatorie con risalita dell\'Hb a 9.8 g/dL. Ecografia transvaginale ed RMN pelvica con mdc: presenza di utero polifibromatoso con mioma intramurale a sviluppo sottomucoso a carico della parete anteriore del diametro di 7 cm (FIGO tipo 2-5), mioma sottosieroso a peduncolo largo del fondo di 6 cm (FIGO tipo 6) e tre miomi intramurali minori compresi tra 2 e 4 cm. Eseguito intervento programmato di miomectomia multipla per via laparoscopica: infiltrazione miometriale con soluzione di vasopressina diluita per ridurre il sanguinamento; isterotomie verticali ad ultrasuoni; enucleazione dei 5 nodi miomatosi con trazione con tenaculum ed idrodissezione del piano di clivaggio pseudocapsulare; accurata sutura miometriale a doppio strato con fili barbed unidirezionali a tensione continua per garantire un solido ripristino dell\'architettura della parete uterina in previsione di future gravidanze; estrazione dei nodi miomatosi mediante morcellazione protetta all\'interno di sacca endoscopica endobag per prevenire disseminazioni parassite.',
      proceduresConducted: 'Miomectomia laparoscopica multipla con morcellazione protetta in sacca endoscopica, emotrasfusione di supporto pre-operatoria, RMN pelvica pre-operatoria.',
      dischargeStatus: 'Dimessa al 3° giorno post-operatorio con decorso regolare, ferite laparoscopiche asciutte, emocromo stabile ed istologia confermante leiomiomi benigni privi di atipie.'
    },
    documentationGapsWarning: 'In ICD-10-IM il leiomioma dell\'utero ha il codice D25.8 (altre parti dell\'utero) o D25.1 (intramurale). L\'anemia sideropenica ha codice D50.0. Nel catalogo CIPI la miomectomia laparoscopica ha il codice CIPI 68.29.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'D25.1', description: 'Leiomioma intramurale dell\'utero (Fibromatosi uterina)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'D25.0', description: 'Leiomioma sottomucoso dell\'utero', system: 'ICD-10-IM' },
          { code: 'D50.0', description: 'Anemia da carenza di ferro secondaria a perdita ematica (cronica)', system: 'ICD-10-IM' },
          { code: 'N92.0', description: 'Mestruazioni eccessive e frequenti con ciclo regolare (Menometrorragia)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-68.29', description: 'Altra escissione o distruzione di lesione dell\'utero (Miomectomia uterina laparoscopica)', system: 'CIPI' },
          { code: 'CIPI-99.04', description: 'Trasfusione di globuli rossi concentrati', system: 'CIPI' },
          { code: 'CIPI-54.21', description: 'Laparoscopia', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '218.1', description: 'Leiomioma intramurale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '280.0', description: 'Anemia sideropenica', system: 'ICD-9-CM' }, { code: '626.2', description: 'Menorragia', system: 'ICD-9-CM' }],
        procedures: [{ code: '68.29', description: 'Altra escissione o distruzione di lesione dell\'utero', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'D25.1 codifica la patologia tumorale benigna primaria che ha imposto la chirurgia conservativa.',
        'L\'anemia sideropenica severa (D50.0) e la menometrorragia cronica (N92.0) motivano clinicamente la trasfusione pre-operatoria.',
        'La procedura CIPI 68.29 traccia la miomectomia conservativa (preservazione dell\'utero rispetto all\'isterectomia CIPI 68.4).'
      ],
      commonCognitiveErrors: [
        'Codificare isterectomia quando è stata eseguita una miomectomia conservativa con risparmio uterino.',
        'Omettere la complicanza dell\'anemia sideropenica severa che ha richiesto emotrasfusione.'
      ],
      chartDocumentationAdvice: 'Attestare il numero esatto, il peso e le dimensioni dei nodi miomatosi asportati, la classificazione FIGO e l\'impiego della sacca endobag per morcellazione.'
    }
  },
  {
    id: 'ost-10',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 10,
    title: 'Endometriosi profonda infiltrante (DIE) con endometrioma ovarico bilaterale e nodulo retto-vaginale trattata con escissione laparoscopica complessa',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Ginecologia Chirurgica Avanzata / Endometriosi',
    clinicalScenario: {
      patientAgeSex: 'Donna, 31 anni, nullipara',
      admissionReason: 'Dismenorrea severa ed invalidante (VAS 10/10) resistente a FANS, dispareunia profonda severa, dischezia mestruale con dolore alla defecazione durante il ciclo e dolore pelvico cronico da oltre 2 anni con infertilità primaria.',
      anamnesis: 'Paziente con falliti cicli di fecondazione assistita (PMA), sospetto clinico di endometriosi profonda.',
      hospitalCourse: 'In Ginecologia: alla visita bimanuale utero retroflesso fisso, setto retto-vaginale marcatamente dolente con nodulo rigido palpabile di circa 2.5 cm, fornice posteriore anelastico. Ecografia ginecologica di II livello ed RMN pelvica ad alta risoluzione con contrasto e gel rettale: cisti endometriosiche ("cioccolato") bilaterali di 5 cm a carico dell\'ovaio destro e 4 cm a carico dell\'ovaio sinistro aderenti tra loro sulla linea mediana ("kissing ovaries"); presenza di nodulo solido di endometriosi profonda infiltrante (DIE) di 2.8 cm localizzato a livello del setto retto-vaginale con infiltrazione della parete anteriore del retto muscolare senza invasione mucosa; obliterazione completa del cavo del Douglas (frozen pelvis). Eseguito intervento laparoscopico multidisciplinare avanzato con ginecologo esperto e chirurgo colo-rettale: lisi estesa di aderenze pelviche (adisiolisi); cistectomia bilaterale per enucleazione delle capsule degli endometriomi ovarici con preservazione della riserva ovarica e minima coagulazione bipolare; dissezione anatomica dello spazio retto-vaginale con isolamento bilaterale degli ureteri pelvici (ureterolisi bilaterale per prevenire lesioni iatrogene); escissione completa "en bloc" del nodulo endometriosico retto-vaginale mediante tecnica di shaving rettale con elettrobisturi a lama fredda, con test idro-pneumatico rettale negativo per perdite aeree; ricollocazione degli organi pelvici ed applicazione di barriere antiaderenziali riassorbibili.',
      proceduresConducted: 'Cistectomia ovarica bilaterale laparoscopica, escissione laparoscopica di endometriosi del setto retto-vaginale (shaving rettale), ureterolisi laparoscopica bilaterale, lisi di aderenze pelviche estese.',
      dischargeStatus: 'Dimessa in 4a giornata post-operatoria con decorso post-operatorio regolare, normale ripresa dell\'alvo e della diuresi spontanea e netto sollievo dai sintomi pelvici.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'endometriosi ha codici specifici per sede: N80.1 (ovaio), N80.3 (legamento largo e pelvi) e N80.4 (setto retto-vaginale). Nel catalogo CIPI l\'asportazione laparoscopica è CIPI 65.25 associata a CIPI 69.99 / 54.51.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'N80.4', description: 'Endometriosi del setto retto-vaginale e della vagina (Endometriosi profonda infiltrante - DIE)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'N80.1', description: 'Endometriosi dell\'ovaio (Endometriomi ovarici bilaterali)', system: 'ICD-10-IM' },
          { code: 'N80.3', description: 'Endometriosi del peritoneo pelvico', system: 'ICD-10-IM' },
          { code: 'N94.6', description: 'Dismenorrea non specificata', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-65.25', description: 'Altra escissione laparoscopica o distruzione di lesione o tessuto ovarico (Cistectomia ovarica bilaterale)', system: 'CIPI' },
          { code: 'CIPI-54.51', description: 'Lisi laparoscopica di aderenze peritoneali (Adesiolisi pelvica complessa)', system: 'CIPI' },
          { code: 'CIPI-59.03', description: 'Ureterolisi laparoscopica', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '617.4', description: 'Endometriosi del setto retto-vaginale e della vagina', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '617.1', description: 'Endometriosi dell\'ovaio', system: 'ICD-9-CM' }],
        procedures: [{ code: '65.25', description: 'Escissione laparoscopica di lesione ovarica', system: 'ICD-9-CM' }, { code: '54.51', description: 'Lisi laparoscopica di aderenze', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'N80.4 identifica il nodulo profondo infiltrante del setto retto-vaginale, la lesione cardine che ha motivato l\'intervento ad alta complessità.',
        'La contestuale codifica degli endometriomi ovarici (N80.1) e del coinvolgimento peritoneale (N80.3) riflette l\'estensione allo stadio IV ASRM.',
        'La combinazione di cistectomia bilaterale (CIPI 65.25), adesiolisi (CIPI 54.51) ed ureterolisi bilaterale (CIPI 59.03) documenta l\'intervento laparoscopico avanzato.'
      ],
      commonCognitiveErrors: [
        'Codificare solo la cisti ovarica omettendo l\'endometriosi del setto retto-vaginale che rappresenta il fulcro chirurgico.',
        'Dimenticare di codificare l\'ureterolisi profilattica eseguita a protezione degli ureteri.'
      ],
      chartDocumentationAdvice: 'Attestare lo stadio secondo la classificazione rASRM ed Enzian score (compartimento A, B e C) e la negatività del test pneumatico di tenuta rettale.'
    }
  },
  {
    id: 'ost-11',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 11,
    title: 'Carcinoma dell\'endometrio con metrorragia post-menopausale trattato con isterectomia, annessiectomia e biopsia del linfonodo sentinella (SLN)',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Ginecologia Oncologica / Chirurgia Mininvasiva Oncologica',
    clinicalScenario: {
      patientAgeSex: 'Donna, 66 anni, post-menopausale',
      admissionReason: 'Episodi ripetuti di sanguinamento vaginale ematico spontaneo ("perdite a lavatura di carne") insorti da circa 2 mesi a distanza di 14 anni dalla menopausa.',
      anamnesis: 'Obesità classe II (BMI 36 kg/m2), ipertensione arteriosa, diabete tipo 2 (sindrome metabolica).',
      hospitalCourse: 'In Ginecologia: ecografia transvaginale con riscontro di rima endometriale marcatamente ispessita, disomogenea, a margini irregolari con spessore massimo di 18 mm (> 4 mm, soglia critica post-menopausale) ed ipervascolarizzazione al power Doppler. Eseguita isteroscopia diagnostica ambulatoriale con biopsia endometriale mirata (curettage frazionato): esame istopatologico diagnostico per Adenocarcinoma endometrioide dell\'endometrio di Grado 2 (G2). RMN pelvica con mdc: neoplasia confinata al corpo uterino con infiltrazione del miometrio stimata a meno del 50% dello spessore, assenza di estensione alla cervice ed assenza di linfoadenopatie evidenti (cT1a N0). Eseguito intervento di stadiazione chirurgica laparoscopica / robotica: iniezione intracervicale superficiale e profonda di verde d\'indocianina (ICG) a ore 3 e ore 9; visualizzazione e mappatura a fluorescenza con ottica nel vicino infrarosso (NIR) dei canali linfatici e campionamento mirato del linfonodo sentinella (SLN) a livello della biforcazione iliaca esterna ed otturatoria bilaterale (biopsia del linfonodo sentinella pelvico bilaterale); isterectomia totale per via laparoscopica con colpotomia protetta senza trazione ed annessiectomia bilaterale (salpingo-ooforectomia bilaterale); estrazione dell\'utero in toto per via vaginale in endobag. Esame istologico definitivo ed ultrastaging linfonodale: adenocarcinoma endometrioide pT1a pN0 (0/4 SLN negativi) FIGO Stadio IA.',
      proceduresConducted: 'Isterectomia totale laparoscopica con annessiectomia bilaterale, biopsia e mappatura del linfonodo sentinella pelvico con verde d\'indocianina (ICG), RMN pelvica pre-operatoria.',
      dischargeStatus: 'Dimessa in 3a giornata post-operatoria in ottime condizioni cliniche, esente da complicanze, con profilo molecolare e pianificazione di follow-up.'
    },
    documentationGapsWarning: 'In ICD-10-IM il carcinoma del corpo dell\'utero ha il codice C54.1 (Neoplasia maligna dell\'endometrio). Nel catalogo CIPI l\'isterectomia totale laparoscopica è CIPI 68.41 e la biopsia del linfonodo sentinella è CIPI 40.24.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'C54.1', description: 'Neoplasia maligna dell\'endometrio (Carcinoma endometriale)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'N95.0', description: 'Emorragia post-menopausale', system: 'ICD-10-IM' },
          { code: 'E66.01', description: 'Obesità morbida dovuta a calorie in eccesso', system: 'ICD-10-IM' },
          { code: 'I10', description: 'Ipertensione essenziale (primaria)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-68.41', description: 'Isterectomia addominale totale laparoscopica (con annessiectomia bilaterale)', system: 'CIPI' },
          { code: 'CIPI-40.24', description: 'Biopsia di linfonodo sentinella della pelvi (Mappatura con verde d\'indocianina ICG)', system: 'CIPI' },
          { code: 'CIPI-88.78', description: 'Ecografia transvaginale ginecologica', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '182.0', description: 'Tumore maligno del corpo dell\'utero (endometrio)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '627.1', description: 'Emorragia post-menopausale', system: 'ICD-9-CM' }],
        procedures: [{ code: '68.41', description: 'Isterectomia totale laparoscopica', system: 'ICD-9-CM' }, { code: '40.24', description: 'Biopsia di linfonodo sentinella', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'C54.1 identifica la neoplasia maligna dell\'endometrio, patologia oncologica primitiva.',
        'La metrorragia post-menopausale (N95.0) definisce il sintomo d\'allarme clinico di presentazione.',
        'La combinazione di isterectomia totale laparoscopica (CIPI 68.41) e biopsia del linfonodo sentinella con ICG (CIPI 40.24) rappresenta il gold standard internazionale di stadiazione secondo linee guida ESGO/FIGO.'
      ],
      commonCognitiveErrors: [
        'Codificare isterectomia laparotomica aperta tradizionale (CIPI 68.49) quando la procedura è stata eseguita integralmente con approccio mininvasivo.',
        'Omettere la codifica della procedura di biopsia del linfonodo sentinella (SLN).'
      ],
      chartDocumentationAdvice: 'Attestare nel referto istologico il grado istologico (G2), la profondità di invasione miometriale (< 50%), l\'infiltrazione linfo-vascolare (LVSI) e la negatività all\'ultrastaging dei linfonodi sentinella.'
    }
  },
  {
    id: 'ost-12',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 12,
    title: 'Lesione intraepiteliale squamosa di alto grado della cervice (HSIL / CIN 3) trattata con conizzazione cervicale LEEP a radiofrequenza',
    complexity: 'Base',
    subCategory: 'Ginecologia Preventiva / Patologia del Tratto Genitale Inferiore',
    clinicalScenario: {
      patientAgeSex: 'Donna, 34 anni, fumatrice',
      admissionReason: 'Riscontro al Pap-test di screening di lesione intraepiteliale squamosa di alto grado (HSIL) confermata da persistenza di infezione da Papillomavirus umano ad alto rischio oncogeno (HPV genotipo 16 positivo).',
      anamnesis: 'Paziente asintomatica, non precedenti trattamenti cervicali.',
      hospitalCourse: 'In Ambulatorio di Colposcopia / Day Surgery Ginecologico: esame colposcopico con applicazione di acido acetico al 5% e test di Schiller con soluzione di Lugol: visualizzazione di giunzione squamo-colonnare (GSC) completamente visibile (zona di trasformazione di tipo 1); presenza di epitelio acetobianco spesso a margini netti con mosaico grossolano irregolare e punteggiato vascolare atipico a ore 12 e ore 3 (reperto colposcopico anormale di Grado 2 / Reperto Maggiore); test di Schiller iodonegativo ad area senape. Eseguite biopsie mirate in colposcopia che documentano Neoplasia Intraepiteliale Cervicale di Grado 3 (CIN 3 / carcinoma in situ). Indicazione a trattamento escissionale conservativo con preservazione della cervice uterina e della futura fertilità. Eseguita procedura escissionale elettrochirurgica mediante ansa diatermica a radiofrequenza (LEEP / LLETZ): anestesia locale paraservicale con mepivacaina ed adrenalina a ore 3 e ore 9; resezione a cono della zona di trasformazione anormale comprendente l\'intera lesione ed il canale cervicale inferiore fino a 10 mm di profondità; emostasi accurata del letto di conizzazione con elettrodo a sfera e soluzione di Monsel. Frammento a cono orientato con punto di repere a ore 12 inviato ad esame istologico definitivo.',
      proceduresConducted: 'Conizzazione cervicale con ansa diatermica (procedura LEEP/LLETZ), colposcopia diagnostica con biopsie mirate, emostasi cervicale.',
      dischargeStatus: 'Dimessa in giornata in pieno benessere con raccomandazione di astenersi da rapporti sessuali e bagni in piscina per 4 settimane ed esame istologico confermante margini di resezione esocervicali ed endocervicali indenni (R0).'
    },
    documentationGapsWarning: 'In ICD-10-IM la displasia severa della cervice uterina / CIN 3 ha il codice N87.2 o D06.9 (Carcinoma in situ della cervice uterina). Nel catalogo CIPI la conizzazione cervicale ha il codice CIPI 67.32.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'D06.9', description: 'Carcinoma in situ della cervice uterina, non specificata (CIN 3 / HSIL)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'B97.7', description: 'Papillomavirus come causa di malattie classificate altrove (HPV ad alto rischio oncogeno)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-67.32', description: 'Distruzione di lesione della cervice con cauterizzazione (Conizzazione cervicale con ansa LEEP / LLETZ)', system: 'CIPI' },
          { code: 'CIPI-67.11', description: 'Biopsia della cervice con guida colposcopica', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '233.1', description: 'Carcinoma in situ della cervice uterina (CIN III)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '079.4', description: 'Infezione da papillomavirus', system: 'ICD-9-CM' }],
        procedures: [{ code: '67.32', description: 'Distruzione di lesione della cervice mediante cauterizzazione (LEEP)', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'D06.9 classifica formalmente il CIN 3 / HSIL come lesione intraepiteliale di alto grado/carcinoma in situ.',
        'La presenza dell\'infezione da HPV genotipo 16 (B97.7) documenta il driver causale persistente.',
        'La procedura CIPI 67.32 identifica la conizzazione escissionale mediante ansa diatermica LEEP.'
      ],
      commonCognitiveErrors: [
        'Classificare il CIN 3 come cancro cervicale invasivo (C53).',
        'Codificare biopsia semplice quando è stata eseguita una completa escissione terapeutica a cono (conizzazione).'
      ],
      chartDocumentationAdvice: 'Attestare nel referto istologico la radicalità dell\'escissione (margini di resezione endocervicali ed esocervicali liberi R0) e le dimensioni del cono in millimetri.'
    }
  },
  {
    id: 'ost-13',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 13,
    title: 'Torsione annessiale acuta dell\'ovaio sinistro su cisti dermoide (teratoma cistico maturo) trattata con derotazione ed enucleazione laparoscopica',
    complexity: 'Intermedio',
    subCategory: 'Ginecologia d\'Urgenza / Chirurgia Laparoscopica Conservativa',
    clinicalScenario: {
      patientAgeSex: 'Donna, 22 anni, nullipara',
      admissionReason: 'Dolore addominale pelvico acuto parossistico a carattere colico all\'ipogastrio e fossa iliaca sinistra comparso improvvisamente dopo attività ginnica, associato a nausea intensa e vomito alimentare ripetuto.',
      anamnesis: 'Paziente giovane priva di patologie note, cicli mestruali regolari.',
      hospitalCourse: 'In Pronto Soccorso Ginecologico: paziente sofferente, agitata, in posizione antalgica rannicchiata; difesa di parete e segno di Blumberg vivacemente positivo al quadrante inferiore sinistro. Alla visita bimanuale marcata dolorabilità all\'esplorazione del fornice vaginale sinistro con massa annessiale palpabile tesa e dolente. Esami di laboratorio: modesta leucocitosi neutrofila (12.500/mcL); beta-hCG negativa (esclusa gravidanza extrauterina). Ecografia pelvica transvaginale con ecocolordoppler: annesso sinistro marcatamente ingrandito ed edematoso (diametro 7.5 cm) dislocato anteriormente e medialmente rispetto alla sede fisiologica; visualizzazione all\'interno dell\'ovaio di formazione cistica a pareti spesse con spot iperecogeni e coni d\'ombra posteriori ("segno della punta dell\'iceberg") tipica per cisti dermoide (teratoma maturo); al Color Doppler completo arresto dei flussi venosi ed assenza/marcata riduzione del flusso arterioso sull\'arteria ovarica con tipico "segno del vortice" (whirlpool sign) a livello del peduncolo vascolare torto (diagnosi di torsione annessiale acuta d\'urgenza). Condotta immediatamente in sala operatoria per laparoscopia d\'urgenza per salvataggio dell\'ovaio dall\'infarto ischemico: riscontro di ovaio e tuba sinistra congesti, aumentati di volume, di colorito bluastro-cianotico scuro a seguito di 3 giri di torsione completa (1080°) attorno al proprio asse vascolare; eseguita derotazione laparoscopica atraumatica del peduncolo; dopo 15 minuti di osservazione e lavaggio con soluzione fisiologica calda rapida ricomparsa del colorito roseo e ripresa del sanguinamento attivo microvascolare (conferma di vitalità tissutale e reversibilità del danno ischemico); eseguita cistectomia ovarica conservativa mediante clivaggio ed enucleazione completa della cisti dermoide intatta; estrazione in sacca endoscopica (endobag) senza rottura endoaddominale; ovarioressia preventiva al legamento utero-ovarico.',
      proceduresConducted: 'Derotazione laparoscopica di torsione annessiale ovarica d\'urgenza, cistectomia ovarica conservativa in laparoscopia con estrazione in endobag, ecocolordoppler ginecologico transvaginale.',
      dischargeStatus: 'Dimessa in 2a giornata post-operatoria apiretica ed asintomatica, con esame istologico confermante teratoma cistico maturo benigno ed ovaio pienamente conservato.'
    },
    documentationGapsWarning: 'In ICD-10-IM la torsione dell\'ovaio ha il codice specifico N83.512 (Torsione dell\'ovaio sinistro e del peduncolo ovarico). La cisti dermoide ha codice D27.1 (Neoplasia benigna dell\'ovaio sinistro). Nel catalogo CIPI la derotazione ed escissione di cisti ha codice CIPI 65.25.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'N83.512', description: 'Torsione dell\'ovaio sinistro e del peduncolo ovarico', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'D27.1', description: 'Neoplasia benigna dell\'ovaio sinistro (Cisti dermoide / teratoma maturo)', system: 'ICD-10-IM' },
          { code: 'R11.2', description: 'Nausea con vomito', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-65.25', description: 'Altra escissione laparoscopica o distruzione di lesione o tessuto ovarico (Cistectomia ovarica con derotazione)', system: 'CIPI' },
          { code: 'CIPI-54.21', description: 'Laparoscopia', system: 'CIPI' },
          { code: 'CIPI-88.78', description: 'Ecografia transvaginale ginecologica con studio color doppler', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '620.5', description: 'Torsione dell\'ovaio, del peduncolo ovarico o della tuba di Falloppio', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '220', description: 'Neoplasia benigna dell\'ovaio', system: 'ICD-9-CM' }],
        procedures: [{ code: '65.25', description: 'Escissione laparoscopica di lesione ovarica', system: 'ICD-9-CM' }, { code: '54.21', description: 'Laparoscopia', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'N83.512 definisce la complicanza acuta ischemia-dipendente con lateralità sinistra obbligatoria.',
        'La presenza della cisti dermoide sottostante (D27.1) individua la causa organica predisponente (peso e mobilità della cisti).',
        'La procedura CIPI 65.25 certifica l\'intervento laparoscopico conservativo con salvataggio d\'organo.'
      ],
      commonCognitiveErrors: [
        'Asportare demolitivamente l\'ovaio (annessiectomia) in una giovane donna prima di aver testato il recupero vascolare post-derotazione.',
        'Omettere la lateralità sinistra nel codice di torsione N83.512.'
      ],
      chartDocumentationAdvice: 'Attestare il numero di giri di torsione (in gradi), la ripresa della vascolarizzazione e del colorito roseo al Doppler/ispezione post-derotazione e l\'uso della sacca per l\'estrazione del teratoma.'
    }
  },
  {
    id: 'ost-14',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 14,
    title: 'Malattia infiammatoria pelvica acuta severa (PID) con ascesso tubo-ovarico (TOA) complicato trattata con drenaggio e terapia antibiotica triplice',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Infettivologia Ginecologica / Terapie Mini-invasive',
    clinicalScenario: {
      patientAgeSex: 'Donna, 38 anni',
      admissionReason: 'Febbre elevata a 39.0 °C con brividi scuotenti, dolore pelvico continuo ingravescente ai quadranti inferiori dell\'addome con esacerbazione alla deambulazione, perdite vaginali mucopurulente maleodoranti e disuria insorte dopo applicazione di dispositivo intrauterino (IUD a rilascio di rame).',
      anamnesis: 'Paziente fumatrice, IUD inserito 3 settimane prima.',
      hospitalCourse: 'In Ginecologia: addome dolente e teso all\'ipogastrio con peritonismo locale; alla visita ginecologica bimanuale marcata dolorabilità all\'esplorazione del fornice posteriore e laterale destro con riscontro di zaffo palpabile di consistenza colliquata di circa 7 cm; perdite cervicali purulente franchi; rimozione immediata del dispositivo intrauterino (IUD) e campionamento colturale. Esami ematochimici: leucocitosi marcata con 19.800/mcL (88% neutrofili); PCR 185 mg/L; procalcitonina aumentata a 2.4 ng/mL; tamponi cervicali molecolari (PCR) positivi per Chlamydia trachomatis e Mycoplasma genitalium. Ecografia transvaginale e TC pelvica con mdc: presenza a carico dell\'annesso destro di voluminosa formazione cistica multiloculata a pareti spesse ed impregnate di contrasto del diametro di 7.2 x 6.5 cm con contenuto fluido purulento denso e setti interni (Ascesso Tubo-Ovarico - TOA) associata a marcata flogosi del tessuto adiposo pelvico circostante ed idrosalpinge. Avviata tempestivamente terapia antibiotica endovenosa triplice ad ampio spettro secondo linee guida CDC: Ceftriaxone 2 g/die EV associato a Doxiciclina 100 mg bid EV e Metronidazolo 500 mg tid EV. A causa delle dimensioni dell\'ascesso (> 5-7 cm) e della mancata defervescenza a 48 ore, eseguito posizionamento eco-guidato per via transvaginale di catetere di drenaggio a "pig-tail" da 8 French all\'interno della sacca ascessuale: aspirazione immediata di circa 85 mL di pus franco maleodorante e lavaggio con soluzione fisiologica sterile; coltura del liquido ascessuale positiva per Escherichia coli ed anaerobi. Rapida caduta della febbre nelle successive 24 ore e crollo della PCR.',
      proceduresConducted: 'Drenaggio percutaneo transvaginale ecoguidato di ascesso pelvico tubo-ovarico con posizionamento di catetere a permanenza, rimozione di dispositivo intrauterino (IUD), TC pelvica con mdc.',
      dischargeStatus: 'Dimessa all\'11° giorno apiretica, indici di flogosi normalizzati, catetere di drenaggio rimosso dopo controllo ecografico attestante completa risoluzione della cavità ascessuale e proseguimento di terapia orale per 14 giorni complessivi.'
    },
    documentationGapsWarning: 'In ICD-10-IM la malattia infiammatoria pelvica con ascesso tubo-ovarico ha il codice specifico N73.0 (Malattia infiammatoria pelvica acuta) combinato con N70.01 / N70.03 (Salpingite e ooforite acuta con ascesso tubo-ovarico). Nel catalogo CIPI il drenaggio di ascesso pelvico ha il codice CIPI 65.91 / 54.91.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'N70.01', description: 'Salpingite e ooforite acuta con ascesso tubo-ovarico (TOA)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'N73.0', description: 'Parametrite e cellulite pelvica acuta (Malattia infiammatoria pelvica acuta / PID)', system: 'ICD-10-IM' },
          { code: 'A56.11', description: 'Infezione da clamidia dell\'utero e degli annessi (PID da Chlamydia trachomatis)', system: 'ICD-10-IM' },
          { code: 'T83.39XA', description: 'Altra complicanza meccanica di dispositivo contraccettivo intrauterino, contatto iniziale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-65.91', description: 'Altra incisione o drenaggio di ovaio o ascesso tubo-ovarico (Aspirazione e drenaggio transvaginale di ascesso TOA)', system: 'CIPI' },
          { code: 'CIPI-97.71', description: 'Rimozione di dispositivo contraccettivo intrauterino (Rimozione di IUD)', system: 'CIPI' },
          { code: 'CIPI-88.78', description: 'Ecografia transvaginale ginecologica', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '614.0', description: 'Salpingite e ooforite acuta (ascesso tubo-ovarico)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '099.41', description: 'Infezione da Chlamydia', system: 'ICD-9-CM' }],
        procedures: [{ code: '65.91', description: 'Altra incisione dell\'ovaio (drenaggio)', system: 'ICD-9-CM' }, { code: '97.71', description: 'Rimozione di IUD', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'N70.01 individua specificamente la forma ascessuale acuta tubo-ovarica (TOA), differenziandola dalla salpingite non ascessuale.',
        'L\'eziologia da Chlamydia trachomatis (A56.11) e la complicanza associata a IUD (T83.39XA) qualificano il contesto infettivologico.',
        'La procedura di drenaggio percutaneo eco-guidato (CIPI 65.91) e la rimozione dello IUD (CIPI 97.71) documentano la corretta presa in carico terapeutica.'
      ],
      commonCognitiveErrors: [
        'Codificare PID lieve ambulatoriale omettendo l\'ascesso tubo-ovarico conclamato.',
        'Dimenticare di codificare il drenaggio dell\'ascesso e la rimozione del corpo estraneo contraccettivo.'
      ],
      chartDocumentationAdvice: 'Attestare le dimensioni in cm dell\'ascesso TOA all\'ecografia/TC, il volume di materiale purulento drenato (in mL) e l\'isolamento colturale dei patogeni.'
    }
  },
  {
    id: 'ost-15',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 15,
    title: 'Prolasso uterovaginale severo sintomatico (POP-Q Stadio III) con cistorettocele trattato con isterectomia vaginale e colpoplastica antero-posteriore',
    complexity: 'Intermedio',
    subCategory: 'Uroginecologia e Chirurgia del Pavimento Pelvico',
    clinicalScenario: {
      patientAgeSex: 'Donna, 68 anni, pluripara (3 parti vaginali)',
      admissionReason: 'Sensazione costante e fastidiosa di "corpo estraneo che fuoriesce dai genitali" esacerbata dalla stazione eretta e dagli sforzi, associata a difficoltà alla minzione con mitto ipovalido e senso di svuotamento incompleto, getto rallentato e necessità di digitopressione vaginale per defecare.',
      anamnesis: 'Paziente in post-menopausa, bronchite cronica.',
      hospitalCourse: 'In Ginecologia: esame uroginecologico con stadiazione obiettiva secondo il sistema POP-Q (Pelvic Organ Prolapse Quantification): punto Ba +4 cm (cistocele di III grado), punto C +3 cm con cervice uterina che protrude stabilmente oltre l\'imene di 3 cm durante ponzamento (isterocele di III grado), punto Bp +3 cm (rettocele di III grado). Presenza di decubito trofico e disepitelizzazione superficiale della mucosa cervicale da sfregamento esterno. Esame urodinamico: esclusa incontinenza urinaria occulta da sforzo dopo riduzione del prolasso. Considerata la sintomatologia severa ed il fallimento del trattamento conservativo con pessario, indicazione a correzione chirurgica per via vaginale: esecuzione di isterectomia vaginale totale con legatura e sezione bilaterale dei legamenti utero-sacrali, cardinali ed arterie uterine; fissazione della cupola vaginale ai monconi dei legamenti utero-sacrali (sospensione di McCall modificata per la profilassi del prolasso di volta); plastica della parete vaginale anteriore (colpoplastica anteriore) con plicatura della fascia pubo-cervicale per la correzione del cistocele; plastica della parete vaginale posteriore (colpoplastica posteriore) con miorrafia dei muscoli elevatori dell\'ano per la correzione del rettocele e ricostruzione del corpo perineale.',
      proceduresConducted: 'Isterectomia vaginale totale, colpoplastica anteriore e posteriore con perineorrafia (riparazione di cistocele e rettocele), sospensione della cupola vaginale sec. McCall.',
      dischargeStatus: 'Dimessa in 3a giornata post-operatoria con decorso privo di complicanze, minzione spontanea efficace con residuo post-minzionale assente (< 30 mL) e perfetta ricostruzione del canale vaginale.'
    },
    documentationGapsWarning: 'In ICD-10-IM il prolasso uterovaginale completo/incompleto di terzo grado ha il codice specifico N81.3 (Prolasso uterovaginale completo) o N81.2. Nel catalogo CIPI l\'isterectomia vaginale è CIPI 68.59 e la colpoplastica è CIPI 70.50.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'N81.3', description: 'Prolasso uterovaginale completo (Prolasso uterino di III grado POP-Q)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'N81.10', description: 'Cistocele non specificato', system: 'ICD-10-IM' },
          { code: 'N81.6', description: 'Rettocele', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-68.59', description: 'Altra isterectomia vaginale (Isterectomia vaginale totale)', system: 'CIPI' },
          { code: 'CIPI-70.50', description: 'Riparazione di cistocele e rettocele (Colpoplastica antero-posteriore con perineorrafia)', system: 'CIPI' },
          { code: 'CIPI-70.77', description: 'Sospensione della volta vaginale (Culdoplastica sec. McCall)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '618.3', description: 'Prolasso genitale totale utero-vaginale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '618.01', description: 'Cistocele', system: 'ICD-9-CM' }, { code: '618.04', description: 'Rettocele', system: 'ICD-9-CM' }],
        procedures: [{ code: '68.59', description: 'Altra isterectomia vaginale', system: 'ICD-9-CM' }, { code: '70.50', description: 'Riparazione di cistocele e rettocele', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'N81.3 definisce il prolasso uterovaginale avanzato con fuoriuscita dell\'utero oltre l\'anello imenale.',
        'La presenza concomitante di cistocele (N81.10) e rettocele (N81.6) giustifica la procedura combinata di colpoplastica antero-posteriore.',
        'La combinazione di isterectomia vaginale (CIPI 68.59), colpoplastica (CIPI 70.50) e culdoplastica di sospensione di McCall (CIPI 70.77) riflette la reale complessità della chirurgia ricostruttiva pelvica.'
      ],
      commonCognitiveErrors: [
        'Codificare solo l\'isterectomia vaginale dimenticando la colpoplastica antero-posteriore e la sospensione della cupola, sottostimando l\'impegno chirurgico.',
        'Confondere il prolasso di I grado con il prolasso completo di III grado (POP-Q).'
      ],
      chartDocumentationAdvice: 'Attestare la quantificazione obiettiva dei punti POP-Q (Aa, Ba, C, D, Bp, Ap), il residuo post-minzionale e l\'assenza di lesioni vescicali o rettali al controllo intraoperatorio.'
    }
  },
  {
    id: 'ost-16',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 16,
    title: 'Mola idatiforme completa con beta-hCG a livelli massivi (> 150.000 mUI/mL) trattata con isterosuzione e curettage ecoguidato',
    complexity: 'Intermedio',
    subCategory: 'Malattie del Trofoblasto Gestazionale / Emergenze Ginecologiche',
    clinicalScenario: {
      patientAgeSex: 'Donna, 25 anni, primigravida',
      admissionReason: 'Perdite ematiche vaginali scure continue ("a succo di prugna") a 10 settimane di amenorrea, associate ad iperemesi gravidica severa ed incoercibile con chetonuria e perdita di peso, e comparsa precoce di ipertensione arteriosa (PA 150/95 mmHg).',
      anamnesis: 'Test di gravidanza domiciliare positivo, non precedenti controlli ecografici.',
      hospitalCourse: 'In Ginecologia: utero di dimensioni marcatamente sproporzionate ed aumentate per l\'epoca gestazionale (volume corrispondente a circa 16-18 settimane di gestazione anziché 10 settimane), di consistenza pastosa. Esami ematochimici d\'urgenza: livello sierico quantitativo di beta-hCG massivamente elevato a 185.000 mUI/mL (valore sproporzionatamente alto per l\'epoca); TSH soppresso (< 0.01 mcUI/mL) con FT4 elevato da tireotossicosi transitoria da reattività crociata per alti livelli di beta-hCG. Ecografia pelvica transvaginale d\'urgenza: cavità uterina occupata da una voluminosa massa ecogena intrauterina eterogenea a nido d\'ape o a "tempesta di neve" (snowstorm appearance) con innumerevoli formazioni microcistiche anecogene da degenerazione idropica dei villi coriali, con assenza totale di embrione e di sacco vitellino (quadro patognomonico per Mola Idatiforme Completa); riscontro bilaterale di ovaie aumentate di volume con cisti luteiniche multiple a pareti sottili ("cisti teco-luteiniche" bilaterali di 6 cm reattive all\'iperstimolazione da beta-hCG). Radiografia del torace negativa per metastasi o embolizzazione trofoblastica. Condotta d\'urgenza in sala operatoria per svuotamento uterino: isterosuzione endouterina (suction curettage) mediante cannula di Karman ad alto calibro sotto continuo monitoraggio ecografico intraoperatorio per minimizzare il rischio di perforazione dell\'utero atonica; evacuazione di circa 450 mL di materiale vescicolare tipico "a grappolo d\'uva"; contestuale infusione endovenosa di ossitocina per favorire la contrazione miometriale; curettage delicato di rifinitura con curette smussa. Esame istopatologico: iperplasia trofoblastica diffusa con rigonfiamento idropico diffuso e p57 negativo all\'immunoistochimica, confermante mola completa diploide androgenetica.',
      proceduresConducted: 'Aspirazione endouterina ed isterosuzione di mola vescicolare (suction curettage), ecografia intraoperatoria transaddominale di guida allo svuotamento, Rx torace.',
      dischargeStatus: 'Dimessa in 2a giornata con netto crollo dei livelli di beta-hCG a 25.000 mUI/mL, prescrizione di contraccezione ormonale rigorosa per 6-12 mesi ed inserimento in registro oncologico per follow-up settimanale della beta-hCG.'
    },
    documentationGapsWarning: 'In ICD-10-IM la mola idatiforme completa ha il codice specifico O01.0. Nel catalogo CIPI l\'aspirazione e curettage dell\'utero per mola ha il codice CIPI 69.52.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'O01.0', description: 'Mola idatiforme classica (Mola idatiforme completa)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'N83.291', description: 'Altre cisti ovariche (Cisti teco-luteiniche bilaterali da iperstimolazione trofoblastica)', system: 'ICD-10-IM' },
          { code: 'O21.0', description: 'Iperemesi gravidica lieve o moderata', system: 'ICD-10-IM' },
          { code: 'E05.80', description: 'Altra tireotossicosi (tireotossicosi transitoria indotta da hCG)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-69.52', description: 'Aspirazione e curettage dell\'utero per interruzione di gravidanza o rimozione di mola idatiforme', system: 'CIPI' },
          { code: 'CIPI-88.78', description: 'Ecografia transvaginale ginecologica', system: 'CIPI' },
          { code: 'CIPI-87.44', description: 'Radiografia del torace di routine', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '630', description: 'Mola idatiforme', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '643.03', description: 'Iperemesi gravidica lieve o non specificata', system: 'ICD-9-CM' }],
        procedures: [{ code: '69.52', description: 'Aspirazione e raschiamento dell\'utero per mola idatiforme', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'O01.0 codifica la mola idatiforme completa/classica, distinta dalla mola parziale o incompleta (O01.1).',
        'La presenza delle cisti teco-luteiniche bilaterali (N83.291) e dell\'iperemesi gravidica (O21.0) riflette l\'iperstimolazione massiva da beta-hCG.',
        'La procedura CIPI 69.52 definisce l\'isterosuzione con curettage, gold standard terapeutico.'
      ],
      commonCognitiveErrors: [
        'Confondere la mola idatiforme con un comune aborto spontaneo interno o gravidanza anembrionica.',
        'Omettere la procedura di aspirazione/svuotamento della mola CIPI 69.52.'
      ],
      chartDocumentationAdvice: 'Attestare il valore sierico quantitativo di beta-hCG pre e post-evacuazione, la negatività immunoistochimica di p57KIP2 e la pianificazione del monitoraggio per escludere neoplasia trofoblastica gestazionale (GTN).'
    }
  },
  {
    id: 'ost-17',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 17,
    title: 'Rottura prematura pretermine delle membrane (pPROM) a 31 settimane complicata da corioamnionite clinica trattata con cesareo urgente',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Ostetricia ad Alto Rischio / Infezioni Perinatali',
    clinicalScenario: {
      patientAgeSex: 'Donna, 30 anni, primigravida',
      admissionReason: 'Perdita improvvisa di liquido chiaro abbondante dai genitali ("rottura delle acque") a 31 settimane + 2 giorni di gestazione.',
      anamnesis: 'Gravidanza decorsa regolarmente fino all\'episodio acuto.',
      hospitalCourse: 'In Ostetricia: speculoscopia sterile che conferma la presenza di liquido amniotico in vagina che fuoriesce dall\'orifizio uterino esterno; test rapido immunocromatografico su secreto vaginale (AmniSure / IGFBP-1) positivo, confermante pPROM a 31 settimane. Ricoverata per gestione conservativa con profilassi antibiotica (Ampicillina ed Eritromicina EV secondo protocollo ACOG) e primo ciclo di Betametasone 12 mg IM per la maturità polmonare fetale. In 3a giornata di degenza, comparsa improvvisa di febbre materna elevata a 38.8 °C con brivido, tachicardia materna persistente a 125 bpm e tachicardia fetale continua a 175-185 bpm alla cardiotocografia (CTG); comparsa di dolorabilità spiccata alla palpazione dell\'utero con perdite vaginali divenute francamente purulente e fetide. Esami ematochimici: leucocitosi materna balzata da 9.000 a 22.400/mcL con 91% di neutrofili; PCR aumentata da 5 a 112 mg/L. Criteri clinici di Gibbs per corioamnionite clinica / infezione intra-amniotica pienamente soddisfatti. Considerato il fallimento della condotta conservativa e l\'elevato rischio di sepsi neonatale e materna, posta indicazione indifferibile ad immediata interruzione della gravidanza mediante taglio cesareo d\'urgenza; contestuale potenziamento antibiotico ad ampio spettro con Ampicillina, Gentamicina e Metronidazolo. Eseguito taglio cesareo al segmento inferiore con estrazione di neonato vitale femmina pretermine di 1.640 g (Apgar 5 a 1 min, 8 a 5 min) affidato immediatamente al neonatologo; liquido amniotico purulento; invio della placenta per esame istologico che confermerà corioamnionite acuta con funisite vascolare.',
      proceduresConducted: 'Taglio cesareo al segmento inferiore per corioamnionite, cardiotocografia continua, esame colturale ed istologico della placenta e delle membrane fetali.',
      dischargeStatus: 'Dimessa in 5a giornata post-operatoria sfebbrata, PCR scesa a 14 mg/L, ferita in prima intenzione e neonata in corso di terapia antibiotica mirata in TIN.'
    },
    documentationGapsWarning: 'In ICD-10-IM la corioamnionite clinica ha il codice O41.123 (Corioamnionite, terzo trimestre). La pPROM ha codice O42.013. Nel catalogo CIPI il cesareo ha codice CIPI 74.1.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'O41.123', description: 'Corioamnionite, terzo trimestre (Infezione intra-amniotica acuta)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'O42.013', description: 'Rottura prematura delle membrane prima dell\'inizio del travaglio entro 24 ore dal parto, terzo trimestre', system: 'ICD-10-IM' },
          { code: 'O60.14X0', description: 'Parto pretermine con parto cesareo', system: 'ICD-10-IM' },
          { code: 'Z37.0', description: 'Nato singolo vivo', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-74.1', description: 'Taglio cesareo al segmento inferiore', system: 'CIPI' },
          { code: 'CIPI-75.34', description: 'Monitoraggio fetale elettronico (Cardiotocografia continua)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '658.43', description: 'Infezione della cavità amniotica (corioamnionite), antepartum', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '658.13', description: 'Rottura prematura delle membrane, antepartum', system: 'ICD-9-CM' }, { code: 'V27.0', description: 'Nato singolo vivo', system: 'ICD-9-CM' }],
        procedures: [{ code: '74.1', description: 'Taglio cesareo', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'O41.123 definisce la complicanza infettiva severa intra-amniotica (corioamnionite) che impone l\'espletamento del parto d\'urgenza a prescindere dall\'età gestazionale.',
        'La pPROM sottostante (O42.013) documenta l\'evento favorente primitivo.',
        'La procedura CIPI 74.1 descrive il cesareo tempestivo eseguito per salvare madre e feto dalla sepsi sistemica.'
      ],
      commonCognitiveErrors: [
        'Codificare semplice pPROM ignorando l\'insorgenza della corioamnionite clinica conclamata.',
        'Omettere il codice di esito del parto Z37.0.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario clinico il rispetto dei criteri di Gibbs (febbre materna > 38 °C + tachicardia materna e fetale, leucocitosi, liquido purulento) e il referto istologico della placenta.'
    }
  },
  {
    id: 'ost-18',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 18,
    title: 'Diabete mellito gestazionale (GDM) scompensato con macrosomia fetale e polidramnios trattato con induzione medica del travaglio a 38 settimane',
    complexity: 'Intermedio',
    subCategory: 'Ostetricia ad Alto Rischio / Endocrinologia Perinatale',
    clinicalScenario: {
      patientAgeSex: 'Donna, 37 anni, secondigravida',
      admissionReason: 'Ricovero programmato a 38 settimane + 0 giorni per induzione del travaglio di parto in paziente affetta da diabete gestazionale scompensato con sospetta macrosomia fetale.',
      anamnesis: 'Diabete gestazionale diagnosticato alla 26a settimana con curva da carico (OGTT 75g), necessitante di terapia insulinica multiniettiva (basal-bolus) per mancato target glicemico.',
      hospitalCourse: 'In Ostetricia: ecografia di accrescimento fetale a 37 settimane: stima del peso fetale (EFW secondo Hadlock) di 4.250 g (> 97° percentile per l\'età gestazionale, feto Large for Gestational Age - LGA / macrosoma) con circonferenza addominale fetale > 99° percentile; indice del liquido amniotico (AFI) pari a 26 cm (polidramnios). Valutazione del collo uterino secondo il Bishop Score pari a 3 (collo sfavorevole: chiuso, posteriore, consistenza dura, raccorciato al 30%). Iniziata maturazione cervicale mediante inserimento nel fornice vaginale posteriore di dispositivo a rilascio controllato di dinoprostone (prostaglandina E2 10 mg a lento rilascio) per 24 ore; al raggiungimento di un Bishop score di 7, rimozione del dispositivo ed avvio di infusione endovenosa di ossitocina a dosi crescenti con contestuale amniorexi artificiale (rottura delle membrane amniotiche) a 4 cm di dilatazione con deflusso di liquido amniotico limpido abbondante. Travaglio attivo monitorato con CTG continua; analgesia peridurale; parto vaginale spontaneo assistito di neonato maschio vigoroso del peso di 4.380 g; eseguita manovra profilattica di McRoberts al momento dell\'espulsione delle spalle che evita la distocia di spalla; esito neonatale favorevole (Apgar 9 a 1 min, 10 a 5 min); glicemie capillari neonatali seriate monitorate con riscontro di transitoria ipoglicemia neonatale asintomatica risolta con allattamento precoce.',
      proceduresConducted: 'Induzione medica del travaglio con prostaglandine vaginali ed ossitocina EV, amniorexi artificiale, parto vaginale assistito, ecografia fetale di accrescimento.',
      dischargeStatus: 'Dimessa in 3a giornata puerperale con puerperio regolare, sospensione dell\'insulina con glicemie normali (risoluzione del GDM post-partum).'
    },
    documentationGapsWarning: 'In ICD-10-IM il diabete gestazionale controllato con insulina ha il codice specifico O24.414 (Diabete mellito gestazionale, controllato con insulina, nel terzo trimestre). Il polidramnios ha codice O40.3XX0. Nel catalogo CIPI l\'induzione medica ha codice CIPI 73.4.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'O24.414', description: 'Diabete mellito gestazionale, controllato con insulina, nel terzo trimestre', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'O40.3XX0', description: 'Polidramnios, terzo trimestre', system: 'ICD-10-IM' },
          { code: 'O60.14X0', description: 'Macrosomia fetale che complica la gestione materna (feto LGA)', system: 'ICD-10-IM' },
          { code: 'Z37.0', description: 'Nato singolo vivo', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-73.4', description: 'Altra induzione medica del travaglio (Induzione con prostaglandine ed ossitocina)', system: 'CIPI' },
          { code: 'CIPI-73.09', description: 'Altra rottura artificiale delle membrane (Amniorexi)', system: 'CIPI' },
          { code: 'CIPI-73.59', description: 'Altra assistenza al parto spontaneo', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '648.81', description: 'Diabete gestazionale, con parto effettuato', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '657.01', description: 'Polidramnios', system: 'ICD-9-CM' }, { code: 'V27.0', description: 'Nato singolo vivo', system: 'ICD-9-CM' }],
        procedures: [{ code: '73.4', description: 'Altra induzione medica del travaglio', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'O24.414 specifica il diabete mellito insorto in gravidanza trattato con insulina nel terzo trimestre.',
        'La presenza del polidramnios (O40.3XX0) e della macrosomia fetale (EFW > 4.000 g) documenta le complicanze metaboliche fetali.',
        'La procedura CIPI 73.4 traccia l\'induzione farmacologica del travaglio.'
      ],
      commonCognitiveErrors: [
        'Classificare il diabete gestazionale come diabete preesistente di tipo 1 o tipo 2.',
        'Omettere la procedura di induzione del travaglio e il codice Z37.0.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario clinico il tipo di trattamento (insulino-trattato), il Bishop score iniziale, la stima ecografica del peso e il peso reale alla nascita.'
    }
  },
  {
    id: 'ost-19',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 19,
    title: 'Polipo endometriale sanguinante sintomatico in peri-menopausa trattato con polipectomia isteroscopica operativa a lama fredda',
    complexity: 'Base',
    subCategory: 'Chirurgia Isteroscopica / Ginecologia Ambulatoriale',
    clinicalScenario: {
      patientAgeSex: 'Donna, 49 anni, peri-menopausale',
      admissionReason: 'Metrorragie anomale intermestruali (spotting e sanguinamento ematico anomalo AUB-P secondo classificazione FIGO PALM-COEIN) da oltre 4 mesi.',
      anamnesis: 'Paziente ipertesa, nessuna pregressa chirurgia uterina.',
      hospitalCourse: 'In Ginecologia / Day Surgery: ecografia transvaginale con sonoisterografia (infusione salina intrauterina - SIS): visualizzazione nella cavità endometriale di formazione polipoide peduncolata ovalare a margini regolari ed ecostruttura omogenea del diametro di 2.4 cm a partenza dalla parete posteriore con peduncolo vascolare centrale al color Doppler (polipo endometriale singolo). Eseguita isteroscopia operativa in sedazione profonda: introduzione di resettoscopio bipolare con camicia a flusso continuo ed ottica a 12° con soluzione fisiologica a bassa pressione; visualizzazione della cavità endometriale e degli osti tubarici bilaterali; identificazione del polipo ghiandolare a base peduncolata sul fondo posteriore; esecuzione di polipectomia selettiva a lama fredda (resezione meccanica con microforbici e morcellatore isteroscopico intrauterino) con recisione del peduncolo alla base di impianto senza traumatizzare l\'endometrio circostante sano; emostasi accurata del punto di impianto con micropunti coagulativi; estrazione del polipo intatto per esame istologico. Esame istopatologico: polipo endometriale iperplastico privo di atipie citologiche (benigno).',
      proceduresConducted: 'Polipectomia endometriale isteroscopica operativa, isteroscopia diagnostica, ecografia transvaginale ginecologica con sonoisterografia.',
      dischargeStatus: 'Dimessa dopo 4 ore di osservazione in Day Surgery priva di perdite ematiche o dolori pelvici, con esame istologico definitivo di benignità.'
    },
    documentationGapsWarning: 'In ICD-10-IM il polipo del corpo dell\'utero ha il codice N84.0 (Polipo del corpo dell\'utero). Nel catalogo CIPI la polipectomia isteroscopica ha il codice CIPI 68.29 / 68.12.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'N84.0', description: 'Polipo del corpo dell\'utero (Polipo endometriale)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'N92.1', description: 'Mestruazioni eccessive e frequenti con ciclo irregolare (Metrorragia da AUB-P)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-68.29', description: 'Altra escissione o distruzione di lesione dell\'utero (Polipectomia isteroscopica)', system: 'CIPI' },
          { code: 'CIPI-68.12', description: 'Isteroscopia (diagnostica ed operativa)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '621.0', description: 'Polipo del corpo dell\'utero', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '626.4', description: 'Mestruazioni irregolari', system: 'ICD-9-CM' }],
        procedures: [{ code: '68.29', description: 'Altra escissione di lesione dell\'utero', system: 'ICD-9-CM' }, { code: '68.12', description: 'Isteroscopia', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'N84.0 specifica il polipo dell\'endometrio, lesione strutturale benigna secondo la classificazione FIGO PALM-COEIN (AUB-P).',
        'La procedura combinata di isteroscopia (CIPI 68.12) e polipectomia/escissione di lesione (CIPI 68.29) traccia l\'atto chirurgico mininvasivo a risparmio d\'organo.'
      ],
      commonCognitiveErrors: [
        'Confondere il polipo endometriale (del corpo dell\'utero N84.0) con un polipo cervicale (del collo dell\'utero N84.1).',
        'Codificare raschiamento cieco (D&C) quando è stata eseguita una polipectomia mirata in isteroscopia sotto visione diretta.'
      ],
      chartDocumentationAdvice: 'Attestare la descrizione visiva del cavo uterino, le dimensioni del polipo rimosso, il mezzo di distensione impiegato ed il deficit di fluido (bilancio entrate-uscite < 500 mL).'
    }
  },
  {
    id: 'ost-20',
    specialtyId: 'ostetricia_ginecologia',
    caseNumber: 20,
    title: 'Incompetenza cervico-istmica con prolasso delle membrane amniotiche nel secondo trimestre trattata con cerchiaggio cervicale d\'emergenza sec. McDonald',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Ostetricia ad Alto Rischio / Chirurgia di Salvataggio Fetale',
    clinicalScenario: {
      patientAgeSex: 'Donna, 28 anni, secondigravida',
      admissionReason: 'Sensazione di peso ed ingombro vaginale a 21 settimane + 3 giorni di gravidanza con modeste perdite mucose siero-ematiche, in assenza di dolore o contrazioni uterine.',
      anamnesis: 'Storia di aborto spontaneo tardivo indolore a 19 settimane nella prima gravidanza con rapida espulsione fetale (anamnesi altamente sospetta per insufficienza cervico-istmica).',
      hospitalCourse: 'In Ostetricia: all\'esame speculare evidenza di collo dell\'utero pervio al dito, svasato e dilatato di 3 cm con polo inferiore delle membrane amniotiche intatto che protrude in vagina a forma di "clessidra" (bulging membranes / prolasso delle membrane). Ecografia transvaginale: lunghezza cervicale residua funzionale pari a 0 mm (appianamento completo) con marcato "funneling" cervicale ad U e protrusione del sacco amniotico fino al terzo medio vaginale. Esclusa corioamnionite clinica ed esclusa rottura prematura delle membrane (AmniSure negativo); esami ematochimici con PCR e GB normali; cardiotocografia negativa per attività contrattile uterina. Posta indicazione a cerchiaggio cervicale d\'urgenza / di salvataggio ("rescue cerclage"). Posizionata in posizione di Trendelenburg forzata per 12 ore per favorire la risalita passiva del sacco amniotico per gravità. Condotta in sala operatoria per cerchiaggio sec. McDonald in anestesia spinale: delicata repulsione delle membrane amniotiche in cavità uterina mediante tampone bagnato con fisiologica tiepida o catetere di Foley atraumatico; posizionamento di benderella monofilamento o intrecciata non riassorbibile pesante (Mersilene da 5 mm) a borsa di tabacco a livello della giunzione cervico-vaginale con 4 passaggi sottomucosi; serraggio calibrato del nodo in sede anteriore fino a chiusura completa del canale cervicale senza ledere le membrane; verifica dell\'assenza di sanguinamento o lesioni vescicali; avviata tocolisi profilattica con indometacina ed antibiotico-profilassi con cefalosporine.',
      proceduresConducted: 'Cerchiaggio cervicale d\'urgenza per via vaginale sec. McDonald (cerchiaggio di salvataggio), ecografia transvaginale per cervicometria pre e post-operatoria.',
      dischargeStatus: 'Dimessa al 6° giorno con cerchiaggio ben posizionato e saldo in sede, lunghezza cervicale ricostituita a 24 mm al controllo ecografico, assenza di funneling e prosecuzione della gravidanza a riposo con progesterone vaginale.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'incompetenza cervicale che complica la gravidanza ha il codice specifico O34.32 (Assistenza materna per incompetenza cervicale, secondo trimestre). Nel catalogo CIPI il cerchiaggio cervicale ha il codice CIPI 67.59.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'O34.32', description: 'Incompetenza cervicale che complica la gravidanza, secondo trimestre', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'O26.892', description: 'Altri disturbi specificati correlati alla gravidanza, secondo trimestre', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-67.59', description: 'Altra riparazione dell\'orifizio interno della cervice (Cerchiaggio cervicale d\'urgenza transvaginale sec. McDonald)', system: 'CIPI' },
          { code: 'CIPI-88.78', description: 'Ecografia ostetrica per cervicometria transvaginale', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '654.53', description: 'Incompetenza cervicale, antepartum', system: 'ICD-9-CM' },
        secondaryDiagnoses: [],
        procedures: [{ code: '67.59', description: 'Altra riparazione dell\'orifizio interno della cervice', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'O34.32 qualifica con esattezza l\'incompetenza cervico-istmica nel secondo trimestre di gravidanza.',
        'La procedura CIPI 67.59 traccia il cerchiaggio cervicale d\'emergenza (rescue cerclage).',
        'L\'intervento descrive la complessa manovra di riposizionamento del sacco amniotico prolassato a protezione del feto pretermine estremo.'
      ],
      commonCognitiveErrors: [
        'Codificare minaccia d\'aborto aspecifica omettendo la diagnosi causale di incompetenza cervicale O34.32.',
        'Dimenticare di codificare la procedura chirurgica di cerchiaggio cervicale CIPI 67.59.'
      ],
      chartDocumentationAdvice: 'Attestare la cervicometria pre e post cerchiaggio, l\'entità della dilatazione e del funneling prima dell\'intervento e l\'esclusione preventiva di infezione intra-amniotica.'
    }
  }
];
