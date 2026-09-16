import { ClinicalCase } from '../../types';

export const INTERNAL_MEDICINE_CASES: ClinicalCase[] = [
  {
    id: 'med-1',
    specialtyId: 'medicina_interna',
    caseNumber: 1,
    title: 'Cirrosi epatica scompensata da ascite refrattaria e peritonite batterica spontanea (SBP) da Escherichia coli trattata con paracentesi ed albumina',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Epatologia Clinica / Infezioni nel Cirrotico',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 63 anni',
      admissionReason: 'Marcato aumento della circonferenza addominale con addome teso ed anelastico, comparsa di dolore addominale diffuso a carattere sordo da 48 ore, febbricola a 37.8 °C e sonnolenza.',
      anamnesis: 'Cirrosi epatica HCV-correlata Child-Pugh C (score 11) con pregresso sanguinamento da varici esofagee trattato con legatura elastica, diabete mellito tipo 2.',
      hospitalCourse: 'In Medicina Interna: paziente itterico con flapping tremor positivo (encefalopatia epatica di Grado I-II sec. West Haven); addome globoso, marcatamente ascitico con segno del fiotto presente e dolorabilità diffusa senza franche reazioni di difesa peritoneale. Eseguita paracentesi esplorativa ed evacuativa d\'urgenza sotto guida ecografica con estrazione di 6.5 litri di liquido ascitico siero-limpido; contestuale infusione endovenosa di Albumina umana al 20% (8 g per litro di ascite rimossa oltre i 5 litri = 50 g EV) per prevenire la disfunzione circolatoria post-paracentesi (PICD). Esame chimico-fisico e citologico del liquido ascitico: conta dei polimorfonucleati neutrofili (PMN) pari a 680/mcL (> 250/mcL, diagnostica per peritonite batterica spontanea - SBP), gradiente siero-ascite di albumina (SAAG) > 1.1 g/dL. Coltura del liquido ascitico positiva per Escherichia coli sensibile a cefotaxime. Avviata tempestivamente terapia con Cefotaxime 2 g tid EV associato ad albumina EV (1.5 g/kg in giornata 1 e 1 g/kg in giornata 3) per la prevenzione della sindrome epatorenale.',
      proceduresConducted: 'Paracentesi addominale diagnostica ed evacuativa ecoguidata con infusione endovenosa di albumina umana, ecografia addominale con studio del circolo portale.',
      dischargeStatus: 'Dimesso al 12° giorno con ascite controllata, completa sterilizzazione del liquido ascitico (PMN < 100/mcL al controllo), creatinina stabile e profilassi secondaria con norfloxacina.'
    },
    documentationGapsWarning: 'In ICD-10-IM la cirrosi epatica alcolica o non specificata ha codice K74.60. La peritonite batterica spontanea ha il codice specifico K65.2. Nel catalogo CIPI la paracentesi evacuativa ha il codice CIPI 54.91.',
    solution: {
      icd10: {
        primaryDiagnosis: {
          code: 'K65.2',
          description: 'Peritonite batterica spontanea (SBP)',
          system: 'ICD-10-IM',
          category: 'Malattie dell\'apparato digerente'
        },
        secondaryDiagnoses: [
          { code: 'K74.60', description: 'Cirrosi epatica non specificata', system: 'ICD-10-IM' },
          { code: 'R18.8', description: 'Altra ascite (ascite nel cirrotico)', system: 'ICD-10-IM' },
          { code: 'K72.90', description: 'Insufficienza epatica non specificata con encefalopatia epatica', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'B96.20', description: 'Escherichia coli non specificato come causa di malattie classificate altrove', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-54.91', description: 'Paracentesi percutanea dell\'addome (Paracentesi evacuativa)', system: 'CIPI' },
          { code: 'CIPI-99.15', description: 'Infusione endovenosa di albumina umana', system: 'CIPI' },
          { code: 'CIPI-88.76', description: 'Ecografia dell\'addome con studio doppler epato-portale', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '567.23', description: 'Peritonite batterica spontanea', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '571.5', description: 'Cirrosi epatica senza menzione di alcol', system: 'ICD-9-CM' }, { code: '789.59', description: 'Altra ascite', system: 'ICD-9-CM' }],
        procedures: [{ code: '54.91', description: 'Paracentesi percutanea dell\'addome', system: 'ICD-9-CM' }, { code: '99.15', description: 'Infusione di frazioni ematiche (albumina)', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K65.2 definisce la complicanza infettiva acuta severa (SBP) che ha motivato il ricovero urgente.',
        'La cirrosi epatica di base scompensata (K74.60) con ascite (R18.8) ed encefalopatia epatica (K72.90) definisce il quadro epatologico severo.',
        'La paracentesi evacuativa (CIPI 54.91) associata all\'infusione di albumina (CIPI 99.15) documenta la gestione terapeutica secondo linee guida EASL.'
      ],
      commonCognitiveErrors: [
        'Codificare generica cirrosi epatica K74 come causa primaria omettendo la peritonite batterica spontanea conclamata K65.2.',
        'Dimenticare di codificare l\'infusione di albumina endovena CIPI 99.15, fondamentale per la prevenzione della sindrome epatorenale.'
      ],
      chartDocumentationAdvice: 'Attestare la conta dei PMN nel liquido ascitico (> 250/mcL), il volume totale evacuato in litri e la quantità esatta in grammi di albumina infusa.'
    }
  },
  {
    id: 'med-2',
    specialtyId: 'medicina_interna',
    caseNumber: 2,
    title: 'Chetoacidosi diabetica severa (DKA) di primo riscontro con acidosi metabolica profonda trattata con protocollo insulinico e reidratazione',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Endocrinologia e Metabolismo d\'Urgenza',
    clinicalScenario: {
      patientAgeSex: 'Donna, 22 anni',
      admissionReason: 'Polidipsia intensa, poliuria e nicturia da circa 10 giorni, seguite da nausea, vomito alimentare ripetuto, dolore addominale diffuso a crampi, respiro ansimante profondo (respiro di Kussmaul) con alito fruttato (odore di mela renetta) e marcato torpore psichico.',
      anamnesis: 'Paziente precedentemente sana, calo ponderale non intenzionale di 6 kg nelle ultime 3 settimane.',
      hospitalCourse: 'In Medicina Interna/Semintensiva: paziente marcatamente disidratata con turgore cutaneo ridotto, mucose asciutte, ipotesa (PA 85/55 mmHg) e tachicardica (FC 125 bpm). Glicemia capillare 540 mg/dL; emogasanalisi arteriosa: pH 7.12, pCO2 18 mmHg, bicarbonati attivi 7.2 mEq/L, Anion Gap elevato a 26 mEq/L (severa acidosi metabolica a gap anionico aumentato). Chetonemia su sangue capillare 6.4 mmol/L (> 3.0 mmol/L, patognomonica per DKA severa); chetonuria massiva +++ ed iperglicosuria; ipopotassiemia relativa (potassio 3.9 mEq/L a fronte di acidosi severa). Diagnosi: Diabete mellito tipo 1 ad esordio acuto con Chetoacidosi diabetica severa. Avviata reidratazione idroelettrolitica aggressiva con soluzione fisiologica allo 0.9% (1.000 mL/h nelle prime ore) addizionata con KCl per mantenere la potassiemia tra 4 e 5 mEq/L; avviata infusione endovenosa continua di insulina rapida a 0.1 UI/kg/h con pompa siringa. Aggiunta soluzione glucosata al 5% quando la glicemia è scesa sotto 250 mg/dL fino a completa chiusura dell\'anion gap (< 12 mEq/L) e normalizzazione del pH (> 7.30) e bicarbonati (> 18 mEq/L). Risoluzione completa della chetoacidosi a 24 ore e passaggio a schema insulinico sottocutaneo basal-bolus.',
      proceduresConducted: 'Monitoraggio metabolico continuo in area semintensiva con EGA orarie, infusione continua di insulina rapida in pompa siringa, infusione idroelettrolitica massiva.',
      dischargeStatus: 'Dimessa al 6° giorno con ottimo compenso glicemico su schema sottocutaneo glargine+lispro, educazione all\'autocontrollo ed addestramento al microinfusore/sensore glicemico continuo.'
    },
    documentationGapsWarning: 'In ICD-10-IM il diabete mellito di tipo 1 con chetoacidosi severa ha il codice combinato specifico E10.10 (Diabete mellito di tipo 1 con chetoacidosi senza coma).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'E10.10', description: 'Diabete mellito di tipo 1 con chetoacidosi, senza coma', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'E87.2', description: 'Acidosi metabolica ad anion gap elevato', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'E86.0', description: 'Disidratazione / deplezione di volume', system: 'ICD-10-IM' },
          { code: 'R10.84', description: 'Dolore addominale generalizzato (pseudo-addome acuto da DKA)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.18', description: 'Iniezione o infusione di insulina ad azione rapida in continuo', system: 'CIPI' },
          { code: 'CIPI-89.54', description: 'Monitoraggio continuo multiparametrico in semintensiva', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '250.11', description: 'Diabete mellito con chetoacidosi, tipo I, non controllato', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '276.2', description: 'Acidosi metabolica', system: 'ICD-9-CM' }, { code: '276.51', description: 'Disidratazione', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.18', description: 'Iniezione di insulina', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'E10.10 specifica l\'eziopatogenesi autoimmune (tipo 1) e la complicanza acuta di chetoacidosi.',
        'L\'acidosi metabolica severa con pH < 7.20 (E87.2) rappresenta un MCC critico che impone monitoraggio emogasanalitico continuo.',
        'La procedura CIPI 99.18 traccia l\'infusione continua dell\'insulina in pompa.'
      ],
      commonCognitiveErrors: [
        'Codificare diabete tipo 2 con chetoacidosi (E11.10) per un giovane esordiente di tipo 1.',
        'Omettere la codifica dell\'acidosi metabolica severa e della disidratazione.'
      ],
      chartDocumentationAdvice: 'Attestare i valori emogasanalitici orari (pH, bicarbonati, Anion Gap), la chetonemia capillare e la transizione programmata a terapia sottocutanea.'
    }
  },
  {
    id: 'med-3',
    specialtyId: 'medicina_interna',
    caseNumber: 3,
    title: 'Febbre di origine sconosciuta (FUO) da arterite a cellule giganti (di Horton) trattata con steroide sistemico dopo biopsia temporale',
    complexity: 'Intermedio',
    subCategory: 'Reumatologia e Immunologia Clinica / Vasculiti',
    clinicalScenario: {
      patientAgeSex: 'Donna, 74 anni',
      admissionReason: 'Febbre serotina quotidiana oscillante tra 38.0 e 38.8 °C persistente da oltre 4 settimane senza apparente focolaio infettivo (FUO), astenia profonda, calo ponderale di 7 kg, comparsa negli ultimi 10 giorni di cefalea temporale sinistra pulsante con iperalgesia del cuoio capelluto (dolore a pettinarsi) e claudicatio mandibolare durante la masticazione.',
      anamnesis: 'Paziente ipertesa, ripetuti cicli di antibiotici ad ampio spettro assunti al domicilio senza alcun beneficio clinico sulla febbre.',
      hospitalCourse: 'In Medicina Interna: arteria temporale sinistra palpabile come cordone ispessito, tortuoso, iposfigmico e marcatamente dolente alla palpazione. Esami ematochimici: VES 108 mm/h, PCR 134 mg/L, anemia normocitica da disordine cronico (Hb 9.8 g/dL), fosfatasi alcalina aumentata (190 U/L); emocolture (3 serie) ripetutamente negative, ecocardiogramma transesofageo negativo per endocardite, TC torace-addome con mdc negativa per neoplasie o ascessi occulti. Ecografia ad alta risoluzione con color Doppler delle arterie temporali: visualizzazione del tipico "segno dell\'alone" (halo sign) ipoecogeno circonferenziale sulla parete dell\'arteria temporale sinistra. Eseguita biopsia a cielo aperto dell\'arteria temporale sinistra (prelievo di 2.5 cm di vaso): esame istopatologico conferma panarterite granulomatosa a cellule giganti con frammentazione della lamina elastica interna. Avviata tempestivamente terapia con Prednisone 1 mg/kg/die (60 mg/die per os) con defervescenza completa entro 24 ore, scomparsa della cefalea e crollo degli indici di flogosi.',
      proceduresConducted: 'Biopsia dell\'arteria temporale con esame istologico, ecografia color-doppler ad alta risoluzione delle arterie temporali, screening per FUO.',
      dischargeStatus: 'Dimessa in 9a giornata in apiressia stabile, normalizzazione della PCR a 8 mg/L e programma di graduale riduzione steroidea associato a profilassi dell\'osteoporosi.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'arterite a cellule giganti (arterite temporale di Horton) ha il codice specifico M31.5. Nel catalogo CIPI la biopsia dell\'arteria temporale ha il codice CIPI 38.21.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'M31.5', description: 'Arterite a cellule giganti con polimialgia reumatica (Arterite temporale di Horton)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R50.81', description: 'Febbre di origine sconosciuta (FUO)', system: 'ICD-10-IM' },
          { code: 'R51.9', description: 'Cefalea non specificata', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-38.21', description: 'Biopsia di vasi sanguigni (Biopsia dell\'arteria temporale)', system: 'CIPI' },
          { code: 'CIPI-88.71', description: 'Ecocolordoppler dei vasi della testa e del collo (Doppler arterie temporali)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '446.5', description: 'Arterite a cellule giganti', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '780.60', description: 'Febbre di origine sconosciuta', system: 'ICD-9-CM' }],
        procedures: [{ code: '38.21', description: 'Biopsia di vaso sanguigno', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'M31.5 codifica con la massima precisione l\'arterite a cellule giganti.',
        'La presenza della febbre di origine sconosciuta (R50.81) riflette la presentazione clinica iniziale che ha richiesto il ricovero diagnostico internistico.',
        'La procedura CIPI 38.21 identifica la biopsia dell\'arteria temporale, gold standard istologico della malattia.'
      ],
      commonCognitiveErrors: [
        'Limitarsi a codificare febbre non specificata omettendo la vasculite sistemica provata istologicamente.',
        'Dimenticare di codificare la biopsia vascolare eseguita dal chirurgo o dall\'internista.'
      ],
      chartDocumentationAdvice: 'Attestare nel referto istologico la lunghezza del frammento bioptico (> 1.5-2 cm) per escludere lesioni a salto (skip lesions) e la positività dell\'halo sign al Doppler.'
    }
  },
  {
    id: 'med-4',
    specialtyId: 'medicina_interna',
    caseNumber: 4,
    title: 'Sindrome da inappropriata secrezione di ADH (SIADH) severa paraneoplastica con iponatriemia profonda sintomatica trattata con tolvaptan e NaCl ipertonico',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Disturbi Idroelettrolitici / Oncologia Medica',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 67 anni',
      admissionReason: 'Profonda astenia, nausea, instabilità posturale con frequenti cadute e comparsa progressiva in 72 ore di disorientamento temporo-spaziale, bradipsichismo e rallentamento dell\'eloquio.',
      anamnesis: 'Forte fumatore (50 pack-years), non assume diuretici.',
      hospitalCourse: 'In Medicina Interna: paziente euvolemico (assenza di edemi declivi, assenza di turgore giugulare, turgore cutaneo normale e PA 130/80 mmHg). Esami di laboratorio d\'urgenza: sodio sierico (natriemia) marcatamente depresso a 112 mEq/L (iponatriemia ipotonica euvolemica severa sintomatica); potassio 4.1 mEq/L; osmolarità plasmatica calcolata e misurata molto bassa (235 mOsm/kg); osmolarità urinaria elevata a 580 mOsm/kg (> 100 mOsm/kg, espressione di mancata diluizione renale); sodio urinario a 64 mEq/L (> 30 mEq/L a dieta normosalina); funzione tiroidea e surrenalica (cortisolo basale ed ACTH) perfettamente normali, creatinina 0.7 mg/dL. Diagnosi clinica di SIADH severa sec. criteri di Bartter-Schwartz. Per la presenza di sintomi neuropsichiatrici acuti, avviata lenta infusione controllata di soluzione salina ipertonica (NaCl al 3%) tramite pompa infusionale, con monitoraggio natriemico ogni 2-3 ore per evitare la sindrome da demielinizzazione osmotica (mielinolisi pontina), impostando un incremento rigoroso non superiore a 6-8 mEq/L nelle prime 24 ore. Successiva introduzione dell\'antagonista dei recettori V2 della vasopressina (Tolvaptan 15 mg/die) con graduale risalita della natriemia a 134 mEq/L. TC torace ad alta risoluzione: riscontro di massa ilare polmonare destra con broncogramma aereo ed adenopatie mediastiniche; biopsia endoscopica transbronchiale (EBUS) compatibile con carcinoma polmonare a piccole cellule (microcitoma polmonare) produttore ectopico di ADH.',
      proceduresConducted: 'Monitoraggio natriemico seriato orario in ambiente protetto, infusione controllata di soluzione salina ipertonica al 3%, TC torace e biopsia transbronchiale EBUS.',
      dischargeStatus: 'Dimesso al 10° giorno con natriemia stabilizzata a 136 mEq/L, completa regressione dei disturbi neurologici e trasferimento in Oncologia per inizio chemioterapia.'
    },
    documentationGapsWarning: 'In ICD-10-IM la SIADH ha il codice E22.2. L\'iponatriemia severa ha codice E87.1. La neoplasia neuroendocrina polmonare sottostante ha codice C34.90.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'E22.2', description: 'Sindrome da inappropriata secrezione di ormone antidiuretico (SIADH)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'E87.1', description: 'Ipo-osmolarità e iponatriemia (iponatriemia severa sintomatica)', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'C34.90', description: 'Neoplasia maligna del polmone non specificato (Microcitoma polmonare)', system: 'ICD-10-IM' },
          { code: 'R41.0', description: 'Disorientamento / stato confusionale', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.18', description: 'Iniezione o infusione di elettroliti (Infusione lenta controllata di NaCl 3%)', system: 'CIPI' },
          { code: 'CIPI-87.41', description: 'Tomografia assiale computerizzata del torace (TC torace)', system: 'CIPI' },
          { code: 'CIPI-33.24', description: 'Biopsia bronchiale a fibre ottiche con guida ultrasonica (EBUS-TBNA)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '253.6', description: 'Altra ipersecrezione di ormone antidiuretico (SIADH)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '276.1', description: 'Iposmolarità e/o iposodiemia', system: 'ICD-9-CM' }, { code: '162.9', description: 'Tumore maligno del polmone', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.18', description: 'Infusione di elettroliti', system: 'ICD-9-CM' }, { code: '87.41', description: 'TC torace', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'E22.2 individua specificamente la SIADH quale alterazione fisiopatologica primaria del ricovero internistico.',
        'L\'iponatriemia profonda sintomatica con Na < 120 mEq/L (E87.1) costituisce una complicanza metabolica maggiore (MCC).',
        'La neoplasia polmonare (C34.90) definisce l\'eziologia paraneoplastica comprovata dalla biopsia EBUS (CIPI 33.24).'
      ],
      commonCognitiveErrors: [
        'Codificare iponatriemia isolata senza identificare la sindrome endocrina specifica SIADH E22.2.',
        'Omettere la codifica della neoplasia polmonare scatenante identificata durante il ricovero.'
      ],
      chartDocumentationAdvice: 'Attestare l\'osmolarità plasmatica ed urinaria, il sodio urinario, il target orario di correzione della natriemia (< 8 mEq/24h) per prevenire la mielinolisi pontina.'
    }
  },
  {
    id: 'med-5',
    specialtyId: 'medicina_interna',
    caseNumber: 5,
    title: 'Embolia polmonare acuta a rischio intermedio-alto secondaria a TVP femoro-poplitea in sindrome da anticorpi antifosfolipidi (APS)',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Trombosi ed Emostasi / Malattie Autoimmuni Sistemiche',
    clinicalScenario: {
      patientAgeSex: 'Donna, 34 anni',
      admissionReason: 'Comparsa improvvisa di dispnea a riposo con dolore toracico di tipo pleuritico all\'emitorace destro esacerbato dagli atti respiratori, tachipnea (28 atti/min) ed emottisi con escreato striato di sangue, associata a tumefazione dolente dell\'arto inferiore sinistro.',
      anamnesis: 'Storia ostetrica di 2 aborti spontanei precoci ed una perdita fetale al 5° mese, non assumeva farmaci.',
      hospitalCourse: 'In Medicina Interna/Semintensiva: ipossiemica con saturazione O2 89% in aria ambiente, tachicardica a 118 bpm, PA 115/75 mmHg; sPESI score = 2. Ecocolordoppler venoso arti inferiori: trombosi venosa profonda (TVP) occludente estesa della vena femorale comune e poplitea sinistra. Angio-TC polmonare: multipli difetti di riempimento endoluminali nei rami lobari e segmentari dell\'arteria polmonare destra e del lobo inferiore sinistro (Embolia polmonare massiva bilaterale). Ecocardiogramma transtoracico: dilatazione del ventricolo destro con rapporto VD/VS > 1.0 e severa ipertensione polmonare stimata (PAPs 55 mmHg), segno di McConnell positivo (Embolia polmonare a rischio intermedio-alto per disfunzione ventricolare destra e troponina I ad alta sensibilità positiva a 180 ng/L). Iniziata tempestivamente terapia con Eparina non frazionata (UFH) in infusione endovenosa continua con target di aPTT ratio 2.0-2.5. Screening trombofilico esteso: Lupus Anticoagulant (LAC) fortemente positivo con dRVVT non correggibile con plasma normale, titoli elevati di anticorpi anti-cardiolipina IgG (> 80 GPL) e anti-beta2 glicoproteina I IgG confermati a distanza (Sindrome da anticorpi antifosfolipidi primaria - APS con tripla positività). Passaggio a terapia anticoagulante orale con antagonisti della vitamina K (Warfarin con target INR 2.5-3.5, non indicati i DOAC nell\'APS triplo-positiva).',
      proceduresConducted: 'Angio-TC dei vasi polmonari, ecocolordoppler venoso arti inferiori, ecocardiogramma transtoracico, infusione continua di eparina sodica con monitoraggio aPTT.',
      dischargeStatus: 'Dimessa in 11a giornata con INR a target terapeutico (2.8), completa regressione della dispnea e della dilatazione ventricolare destra.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'embolia polmonare acuta con cuore polmonare ha il codice I26.02. La trombosi venosa profonda ha codice I82.412. La sindrome da antifosfolipidi ha il codice specifico D68.61.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'I26.02', description: 'Embolia polmonare con cuore polmonare acuto', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I82.412', description: 'Trombosi venosa profonda della vena femorale sinistra', system: 'ICD-10-IM' },
          { code: 'D68.61', description: 'Sindrome da anticorpi antifosfolipidi (APS)', system: 'ICD-10-IM' },
          { code: 'R04.2', description: 'Emottisi', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-87.41', description: 'Tomografia computerizzata del torace con mezzo di contrasto (Angio-TC polmonare)', system: 'CIPI' },
          { code: 'CIPI-88.77', description: 'Ecocolordoppler dei vasi periferici (Doppler venoso arti inferiori)', system: 'CIPI' },
          { code: 'CIPI-88.72', description: 'Ecocardiografia transtoracica', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '415.19', description: 'Altra embolia ed infarto polmonare', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '453.41', description: 'Trombosi venosa profonda dell\'arto inferiore prossimale', system: 'ICD-9-CM' }, { code: '289.81', description: 'Sindrome da anticorpi antifosfolipidici', system: 'ICD-9-CM' }],
        procedures: [{ code: '87.41', description: 'TC torace', system: 'ICD-9-CM' }, { code: '88.77', description: 'Ecografia vascolare', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'I26.02 codifica l\'embolia polmonare associata a sovraccarico del cuore destro (cuore polmonare acuto documentato ecocardiograficamente).',
        'La trombosi venosa profonda con sede anatomica specifica femorale sinistra (I82.412) documenta la sorgente tromboembolica.',
        'La sindrome da antifosfolipidi (D68.61) identifica la trombofilia autoimmune sistemica eziopatogenetica che giustifica l\'indicazione permanente al Warfarin.'
      ],
      commonCognitiveErrors: [
        'Codificare embolia polmonare senza menzione di cuore polmonare (I26.9) ignorando la presenza di dilatazione e disfunzione del ventricolo destro.',
        'Omettere la codifica della sindrome da anticorpi antifosfolipidi (D68.61).'
      ],
      chartDocumentationAdvice: 'Attestare nel referto ecocardiografico il rapporto VD/VS, la stima della PAPs, il dosaggio della troponina ed il profilo di positività anticorpale antifosfolipidi (tripla positività).'
    }
  },
  {
    id: 'med-6',
    specialtyId: 'medicina_interna',
    caseNumber: 6,
    title: 'Lupus Eritematoso Sistemico (LES) attivo con nefrite lupica diffusa proliferativa (Classe IV) trattata con terapia immunosoppressiva dopo biopsia renale',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Nefrologia Clinica / Malattie Autoimmuni Sistemiche',
    clinicalScenario: {
      patientAgeSex: 'Donna, 28 anni',
      admissionReason: 'Edemi ingravescenti agli arti inferiori e periorbitari, ipertensione di recente comparsa, rash a farfalla (eritema malare fotosensibile) al volto, artralgie diffuse alle mani e urine scure schiumose.',
      anamnesis: 'LES noto con positività per anticorpi ANA ed anti-dsDNA, in terapia con idrossiclorochina.',
      hospitalCourse: 'In Medicina Interna: PA 155/95 mmHg, edemi peritibiali improntabili 3+. Esami ematochimici: creatinina sierica raddoppiata da 0.7 a 1.6 mg/dL con eGFR 42 mL/min/1.73m2; proteinuria delle 24 ore marcata a 3.8 g/die (proteinuria nefrosica); sedimento urinario attivo con microematuria dismorfica, cilindri eritrocitari e leucocitari; frazioni del complemento marcatamente consumate (C3 38 mg/dL e C4 6 mg/dL) ed anti-dsDNA ad altissimo titolo (> 350 UI/mL) attestanti forte attività di malattia sistemica (SLEDAI score = 18). Eseguita biopsia renale percutanea ecoguidata con prelievo di 2 frustoli corticali contenenti 18 glomeruli: all\'istologia glomeruli con proliferazione endo- ed extracapillare diffusa (> 50% dei glomeruli), anse a fil di ferro ("wire-loops") e depositi immuni "full-house" alla microscopia ad immunofluorescenza (IgG, IgA, IgM, C3, C1q), compatibile con Nefrite Lupica di Classe IV-G (A) secondo la classificazione ISN/RPS. Avviata terapia di induzione combinata: 3 boli di Metilprednisolone 500 mg/die EV seguiti da prednisone orale ad alto dosaggio associato a cicli quindicinali di Ciclofosfamide EV secondo protocollo Euro-Lupus ed ace-inibitore per il controllo pressorio e nefroprotezione.',
      proceduresConducted: 'Biopsia renale percutanea sotto controllo ecografico con esame istologico ed immunofluorescenza, monitoraggio nefrologico continuo, ecografia renale.',
      dischargeStatus: 'Dimessa al 14° giorno con creatinina ridotta a 1.2 mg/dL, edemi risolti, PA a target e prosecuzione del protocollo di induzione immunosoppressiva.'
    },
    documentationGapsWarning: 'In ICD-10-IM il Lupus eritematoso sistemico con coinvolgimento renale ha il codice combinato M32.14 (Glomerulonefrite lupica). Nel catalogo CIPI la biopsia renale percutanea ha il codice CIPI 55.23.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'M32.14', description: 'Glomerulonefrite nel lupus eritematoso sistemico (Nefrite lupica proliferativa)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'N04.8', description: 'Sindrome nefrosica con altri cambiamenti morfologici specificati', system: 'ICD-10-IM' },
          { code: 'N17.9', description: 'Insufficienza renale acuta non specificata', system: 'ICD-10-IM', notes: 'CC significativo' },
          { code: 'I15.1', description: 'Ipertensione secondaria a nefropatia', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-55.23', description: 'Biopsia renale chiusa percutanea (Biopsia renale ecoguidata)', system: 'CIPI' },
          { code: 'CIPI-99.23', description: 'Iniezione di ormone steroideo (Boli di metilprednisolone EV)', system: 'CIPI' },
          { code: 'CIPI-99.25', description: 'Iniezione o infusione di altra sostanza chemioterapica (Ciclofosfamide)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '710.0', description: 'Lupus eritematoso sistemico', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '581.81', description: 'Sindrome nefrosica in malattie classificate altrove', system: 'ICD-9-CM' }, { code: '584.9', description: 'Insufficienza renale acuta', system: 'ICD-9-CM' }],
        procedures: [{ code: '55.23', description: 'Biopsia percutanea del rene', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'M32.14 rappresenta il codice specifico ed eziologico per la nefrite lupica.',
        'La presenza della sindrome nefrosica associata ad insufficienza renale acuta (N04.8 ed N17.9) documenta la gravità del danno d\'organo.',
        'La procedura CIPI 55.23 identifica la biopsia renale indispensabile per la classificazione ISN/RPS e la scelta terapeutica.'
      ],
      commonCognitiveErrors: [
        'Codificare generico LES M32.9 senza specificare l\'interessamento d\'organo renale M32.14.',
        'Omettere la procedura di biopsia renale ecoguidata CIPI 55.23.'
      ],
      chartDocumentationAdvice: 'Attestare la classe istologica ISN/RPS (Classe IV), l\'indice di attività e cronicità, e la quantificazione della proteinuria nelle 24 ore.'
    }
  },
  {
    id: 'med-7',
    specialtyId: 'medicina_interna',
    caseNumber: 7,
    title: 'Insufficienza epatica acuta su cronica (ACLF) con sindrome epatorenale (HRS-AKI) trattata con terlipressina ed albumina',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Epatologia Clinica / Terapia Semintensiva Epatologica',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 59 anni',
      admissionReason: 'Rapida e drammatica contrazione della diuresi (oliguria marcata < 300 mL/die) resistente ad aumento dei diuretici dell\'ansa, ittero ingravescente, comparsa di sopore ed astenia profonda dopo infezione delle vie urinarie.',
      anamnesis: 'Cirrosi epatica alcolica scompensata, ascite recidivante, non assunzione di FANS o nefrotossici.',
      hospitalCourse: 'In Medicina Interna/Semintensiva: paziente francamente itterico con bilirubina totale a 18.5 mg/dL, INR 2.3; flapping tremor presente; edemi declivi massivi ed ascite tesa. Esami di laboratorio: creatinina sierica balzata da 0.9 a 3.4 mg/dL in 4 giorni; assenza di proteinuria significativa (< 300 mg/die) e sedimento urinario privo di cilindri cellulari; sodio urinario bassissimo (< 10 mEq/L); ecografia renale normale con reni di dimensioni normali ed assenza di uropatia ostruttiva. Sospesi tutti i diuretici e somministrata espansione volemica con albumina umana al 20% (1 g/kg/die per 48 ore) senza alcun incremento della diuresi né calo della creatinina, escludendo una forma prerenale semplice (Criteri ICA per sindrome epatorenale tipo AKI - HRS-AKI pienamente soddisfatti). Avviata terapia vasoattiva mirata con Terlipressina in infusione endovenosa continua in pompa siringa (2 mg/die con titolazione progressiva fino a 4-6 mg/die) associata ad albumina al 20% (20-40 g/die) con monitoraggio continuo della pressione arteriosa media ed emogasanalisi. Progressivo e netto calo della creatinina fino a 1.4 mg/dL con ripresa di adeguata diuresi (> 1.500 mL/die) a 8 giorni.',
      proceduresConducted: 'Monitoraggio continuo intensivo e diuresi oraria con catetere vescicale, infusione continua di terlipressina in pompa siringa, infusione endovenosa di albumina umana.',
      dischargeStatus: 'Dimesso al 16° giorno con recupero della funzione renale, risoluzione dell\'HRS-AKI e presa in carico per valutazione di trapianto di fegato (MELD score).'
    },
    documentationGapsWarning: 'In ICD-10-IM la sindrome epatorenale ha il codice specifico K76.7. La cirrosi epatica alcolica ha codice K70.30.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K76.7', description: 'Sindrome epatorenale (HRS-AKI)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'K70.30', description: 'Cirrosi epatica alcolica senza ascite', system: 'ICD-10-IM' },
          { code: 'N17.9', description: 'Insufficienza renale acuta non specificata', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'R18.8', description: 'Altra ascite', system: 'ICD-10-IM' },
          { code: 'K72.90', description: 'Insufficienza epatica con encefalopatia epatica', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.15', description: 'Infusione endovenosa di albumina umana', system: 'CIPI' },
          { code: 'CIPI-99.29', description: 'Iniezione o infusione di altra sostanza terapeutica (Terlipressina per sindrome epatorenale)', system: 'CIPI' },
          { code: 'CIPI-89.54', description: 'Monitoraggio continuo multiparametrico e bilancio idroelettrolitico', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '572.4', description: 'Sindrome epatorenale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '571.2', description: 'Cirrosi epatica alcolica', system: 'ICD-9-CM' }, { code: '584.9', description: 'Insufficienza renale acuta', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.15', description: 'Infusione di frazioni ematiche', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K76.7 identifica con la massima specificità la sindrome epatorenale, la complicanza renale più temibile nel paziente cirrotico.',
        'La presenza della cirrosi alcolica (K70.30) e dell\'insufficienza renale acuta (N17.9) documenta il contesto patologico ad altissima complessità clinica (MCC).',
        'La combinazione di terlipressina (CIPI 99.29) ed albumina (CIPI 99.15) rappresenta il cardine della terapia farmacologica validata.'
      ],
      commonCognitiveErrors: [
        'Codificare semplice insufficienza renale acuta prerenale o necrosi tubulare acuta quando sono soddisfatti tutti i criteri ICA per HRS-AKI.',
        'Omettere la procedura di infusione di albumina e farmaci vasopressori.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario clinico il rispetto dei criteri ICA (mancata risposta all\'espansione con albumina a 48h, assenza di proteinuria e sedimento muto) e i valori del MELD score.'
    }
  },
  {
    id: 'med-8',
    specialtyId: 'medicina_interna',
    caseNumber: 8,
    title: 'Crisi tireotossica acuta (tempesta tiroidea) in morbo di Basedow-Graves trattata con tionamidi, beta-bloccanti, iodio e glucocorticoidi',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Endocrinologia d\'Urgenza',
    clinicalScenario: {
      patientAgeSex: 'Donna, 44 anni',
      admissionReason: 'Ipertermia elevata a 40.2 °C con sudorazione profusa, palpitazioni tachiaritmiche violente, agitazione psicomotoria estrema con delirio ed allucinazioni visive, diarrea acquosa profusa con vomito e disidratazione dopo infezione odontogena.',
      anamnesis: 'Tireotossicosi da morbo di Basedow-Graves non trattata per scarsa compliance della paziente.',
      hospitalCourse: 'In Medicina Interna/Semintensiva: paziente agitata, delirante, con esoftalmo bilaterale marcato e gozzo tiroideo diffuso con fremito palpabile e soffio auscultabile alla base del collo. Frequenza cardiaca 165 bpm aritmica da fibrillazione atriale ad elevata risposta ventricolare; PA 160/70 mmHg con elevata pressione differenziale. Punteggio della scala di Burch-Wartofsky pari a 65 punti (> 45 altamente suggestivo per tempesta tiroidea conclamata / thyroid storm). Esami ormonali: TSH indosabile (< 0.005 mcUI/mL), FT4 ed FT3 marcatamente aumentati oltre i limiti di scala, anticorpi anti-recettore del TSH (TRAB) fortemente positivi a 28 UI/L. Istituito trattamento aggressivo combinato secondo linee guida: Propiltiouracile (PTU) 200 mg ogni 4 ore per os/sondino nasogastrico per bloccare la sintesi ormonale e la conversione periferica da T4 a T3; dopo 1 ora dalla prima dose somministrata soluzione satura di ioduro di potassio (SSKI) in gocce per bloccare la secrezione ormonale (effetto Wolff-Chaikoff); Propranololo EV e poi orale ad alte dosi per controllare l\'ipertono simpatico; Idrocortisone 100 mg ogni 8 ore EV; coperta termica refrigerante per contrastare l\'iperpiressia maligna.',
      proceduresConducted: 'Monitoraggio continuo delle funzioni vitali in semintensiva, infusione endovenosa di farmaci antitiroidei e glucocorticoidi, ecocolordoppler tiroideo.',
      dischargeStatus: 'Dimessa in 12a giornata apiretica, ripristino del ritmo sinusale stabile, FT4 ed FT3 normalizzati e proseguimento di metimazolo domiciliare.'
    },
    documentationGapsWarning: 'In ICD-10-IM la tireotossicosi con crisi tireotossica ha il codice specifico combinato E05.01 (Tireotossicosi con gozzo diffuso con crisi tireotossica).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'E05.01', description: 'Tireotossicosi con gozzo tossico diffuso con tempesta tiroidea (Crisi tireotossica)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'I48.91', description: 'Fibrillazione atriale non specificata (FA ad elevata risposta ventricolare)', system: 'ICD-10-IM' },
          { code: 'R41.0', description: 'Disorientamento / stato confusionale acuto (delirio)', system: 'ICD-10-IM' },
          { code: 'R50.81', description: 'Febbre elevata / iperpiressia', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-89.54', description: 'Monitoraggio continuo multiparametrico in area semintensiva', system: 'CIPI' },
          { code: 'CIPI-88.71', description: 'Ecocolordoppler della tiroide', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '242.01', description: 'Tireotossicosi con gozzo diffuso con crisi tireotossica', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '427.31', description: 'Fibrillazione atriale', system: 'ICD-9-CM' }],
        procedures: [{ code: '89.54', description: 'Monitoraggio elettrocardiografico continuo', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'E05.01 è il codice specifico che associa l\'ipertiroidismo di Basedow con la complicanza acuta a rischio vita (crisi tireotossica o tempesta tiroidea).',
        'La presenza della fibrillazione atriale (I48.91) e dello stato di delirio acuto (R41.0) riflette l\'interessamento multiorgano cardiocircolatorio e cerebrale.',
        'La combinazione farmacologica aggressiva è mirata ai molteplici step fisiopatologici.'
      ],
      commonCognitiveErrors: [
        'Codificare tireotossicosi senza crisi tireotossica E05.00 ignorando il quadro di collasso emodinamico ed ipertermia maligna.',
        'Omettere la fibrillazione atriale concomitante.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario clinico il punteggio della scala di Burch-Wartofsky (> 45 punti) e la tempistica sequenziale della somministrazione di tionamide e iodio.'
    }
  },
  {
    id: 'med-9',
    specialtyId: 'medicina_interna',
    caseNumber: 9,
    title: 'Malattia renale cronica stadio 5 (ESRD) con sindrome uremica acuta ed iperkaliemia severa con alterazioni ECG trattata con CVC ed emodialisi urgente',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Nefrologia Clinica / Emodialisi d\'Urgenza',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 71 anni',
      admissionReason: 'Marcata astenia, nausea con vomito uremico, singhiozzo persistente, dispnea a riposo ingravescente con ortopnea da sovraccarico idrosalino, parestesie periorali ed anuria nelle ultime 24 ore.',
      anamnesis: 'Nefropatia diabetica ed ipertensiva avanzata in stadio CKD 4 nota, mancato follow-up negli ultimi 12 mesi.',
      hospitalCourse: 'In Medicina Interna: paziente con alito uremico, colorito paglierino terroso, edemi peritibiali imponenti a mantellina, rantoli crepitanti bilaterali bibasali e PA 185/105 mmHg. Esami ematochimici d\'urgenza: creatinina sierica 12.8 mg/dL con eGFR 4 mL/min/1.73m2, azotemia (urea) 260 mg/dL; potassio sierico marcatamente elevato a 7.6 mEq/L (iperkaliemia severa con pericolo imminente di arresto cardiaco); all\'EGA acidosi metabolica severa con pH 7.14 e bicarbonati 9 mEq/L. ECG immediato: onde T a tenda iperacute, appuntite e simmetriche, allungamento del PR e slargamento del QRS a 130 ms. Eseguita stabilizzazione miocardica d\'urgenza con Calcio gluconato al 10% EV, seguita da infusione di glucosata al 33% con insulina rapida e resine a scambio ionico. Trasferito immediatamente per inizio di dialisi d\'urgenza: posizionamento eco-guidato di catetere venoso centrale trilume temporaneo non tunnellizzato ad alto flusso in vena giugulare interna destra; esecuzione di seduta di emodialisi bicarbonato d\'urgenza di 3.5 ore con rimozione di 2.5 kg di ultrafiltrato con immediata normalizzazione della potassiemia (4.2 mEq/L) e del QRS.',
      proceduresConducted: 'Inserimento di catetere venoso centrale per emodialisi in giugulare interna, seduta di emodialisi extracorporea d\'urgenza, ecografia renale ed ECG continuo.',
      dischargeStatus: 'Dimesso al 9° giorno stabilizzato con regolare programma trisettimanale di emodialisi cronica ed invio per confezionamento di fistola arterovenosa (FAV).'
    },
    documentationGapsWarning: 'In ICD-10-IM la malattia renale cronica stadio 5 ha il codice N18.5 o N18.6 (end-stage renal disease). L\'iperkaliemia severa ha codice E87.5. Nel catalogo CIPI l\'emodialisi ha codice CIPI 39.95 e l\'inserimento di CVC ha codice CIPI 38.95.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'N18.6', description: 'Malattia renale allo stadio terminale (End-stage renal disease - ESRD)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'E87.5', description: 'Iperpotassiemia (Iperkaliemia severa con alterazioni ECG)', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'E87.2', description: 'Acidosi metabolica', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'I12.0', description: 'Cardiopatia ipertensiva con malattia renale cronica allo stadio 5', system: 'ICD-10-IM' },
          { code: 'E11.22', description: 'Diabete mellito di tipo 2 con nefropatia diabetica', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-39.95', description: 'Emodialisi (Seduta di emodialisi d\'urgenza)', system: 'CIPI' },
          { code: 'CIPI-38.95', description: 'Cateterismo venoso per dialisi renale (Inserimento di CVC ad alto flusso)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '585.6', description: 'Malattia renale cronica allo stadio terminale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '276.7', description: 'Iperpotassiemia', system: 'ICD-9-CM' }, { code: '276.2', description: 'Acidosi', system: 'ICD-9-CM' }],
        procedures: [{ code: '39.95', description: 'Emodialisi', system: 'ICD-9-CM' }, { code: '38.95', description: 'Cateterismo venoso per dialisi', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'N18.6 definisce lo stadio terminale della malattia renale (ESRD) che necessita di terapia sostitutiva cronica dialitica.',
        'L\'iperpotassiemia severa (E87.5) con alterazioni dell\'ECG e l\'acidosi metabolica (E87.2) rappresentano condizioni di emergenza clinica (MCC).',
        'La procedura CIPI 39.95 (emodialisi) e l\'accesso vascolare d\'urgenza CIPI 38.95 documentano gli atti terapeutici salvavita eseguiti.'
      ],
      commonCognitiveErrors: [
        'Codificare insufficienza renale cronica non specificata N18.9 senza specificare lo stadio terminale 5 / ESRD (N18.6).',
        'Omettere la procedura di inserimento del catetere per emodialisi.'
      ],
      chartDocumentationAdvice: 'Attestare la presenza delle modificazioni ECG dell\'iperpotassiemia (onde T a tenda, QRS largo), i valori di potassio e la prescrizione della dialisi cronica.'
    }
  },
  {
    id: 'med-10',
    specialtyId: 'medicina_interna',
    caseNumber: 10,
    title: 'Sindrome da attivazione macrofagica / linfoistiocitosi emofagocitica (sHLH) secondaria con pancitopenia severa trattata con etoposide e desametasone',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Ematologia Non Oncologica / Malattie Rare Sistemiche',
    clinicalScenario: {
      patientAgeSex: 'Donna, 37 anni',
      admissionReason: 'Febbre elevata a picchi quotidiani (fino a 39.6 °C) persistente da 2 settimane non rispondente ad antibiotici ad ampio spettro, marcata epato-splenomegalia dolente, comparsa di soffusioni emorragiche cutanee (porpora e petecchie) ed astenia profonda.',
      anamnesis: 'Paziente seguita per morbo di Still dell\'adulto.',
      hospitalCourse: 'In Medicina Interna: obiettività con milza debordante di 5 cm dall\'arcata costale ed epatomegalia; petecchie agli arti inferiori. Esami ematochimici: pancitopenia severa progressiva (emoglobina 7.4 g/dL, leucociti 1.600/mcL con neutrofili 700/mcL, piastrine 28.000/mcL); ferritina sierica a livelli vertiginosi pari a 18.500 ng/mL (> 10.000 altamente predittiva per HLH); ipertrigliceridemia marcata a 480 mg/dL; ipofibrinogenemia a 95 mg/dL; transaminasi e LDH marcatamente elevati; recettore solubile dell\'interleuchina-2 (sCD25 / sIL-2R) estremamente elevato a 8.400 U/mL (HScore = 238 con probabilità > 99% di HLH). Eseguito aspirato midollare osteomidollare da cresta iliaca posteriore: presenza tipica e diffusa di macrofagi attivati con spiccata attività emofagocitica intatta (macrofagi contenenti eritrociti, piastrine e precursori emopoietici fagocitati). Diagnosi confermata di Linfoistiocitosi Emofagocitica secondaria / Sindrome da Attivazione Macrofagica (sHLH/MAS). Avviato tempestivamente protocollo secondo HLH-2004 modificato con Desametasone EV ad alte dosi (10 mg/m2/die) associato ad Etoposide (VP-16) per via endovenosa; rapida caduta della febbre, risalita delle conte cellulari e crollo della ferritina.',
      proceduresConducted: 'Aspirato midollare da cresta iliaca con esame citologico ed immunofenotipico, infusione endovenosa di farmaci chemioterapici (etoposide) e steroidi, ecografia addominale.',
      dischargeStatus: 'Dimessa al 18° giorno in fase di remissione ematologica stabile con conte ematiche in recupero e mantenimento immunosoppressivo con ciclosporina.'
    },
    documentationGapsWarning: 'In ICD-10-IM la linfoistiocitosi emofagocitica ha il codice specifico D76.1. La pancitopenia ha codice D61.9. Nel catalogo CIPI l\'aspirato midollare ha il codice CIPI 41.31.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'D76.1', description: 'Linfoistiocitosi emofagocitica (HLH / sindrome da attivazione macrofagica MAS)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'D61.9', description: 'Pancitopenia non specificata', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'R16.2', description: 'Epatomegalia con splenomegalia (epato-splenomegalia)', system: 'ICD-10-IM' },
          { code: 'M06.1', description: 'Malattia di Still con insorgenza nell\'adulto (AOSD)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-41.31', description: 'Aspirato midollare (Biopsia da aspirazione del midollo osseo)', system: 'CIPI' },
          { code: 'CIPI-99.25', description: 'Iniezione o infusione di altra sostanza chemioterapica (Etoposide)', system: 'CIPI' },
          { code: 'CIPI-99.23', description: 'Iniezione di ormone steroideo ad alte dosi', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '277.89', description: 'Altri disturbi del metabolismo specificati (sindrome emofagocitica)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '284.1', description: 'Pancitopenia', system: 'ICD-9-CM' }, { code: '714.2', description: 'Altra artrite reumatoide con interessamento sistemico', system: 'ICD-9-CM' }],
        procedures: [{ code: '41.31', description: 'Aspirato del midollo osseo', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'D76.1 codifica la linfoistiocitosi emofagocitica/sindrome da attivazione macrofagica, condizione immunologica iperinfiammatoria "tempesta citochinica" a prognosi infausta se non riconosciuta.',
        'La pancitopenia severa associata (D61.9) definisce una complicanza ematologica critica (MCC).',
        'La procedura CIPI 41.31 identifica l\'aspirato midollare dimostrativo del fenomeno di emofagocitosi.'
      ],
      commonCognitiveErrors: [
        'Classificare il quadro come comune sepsi o shock settico omettendo la diagnosi di HLH.',
        'Omettere la procedura diagnostica dell\'aspirato midollare eseguito.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario clinico il rispetto dei criteri HLH-2004 (almeno 5/8 criteri soddisfatti), il valore di ferritina ed il riscontro istologico dell\'emofagocitosi.'
    }
  },
  {
    id: 'med-11',
    specialtyId: 'medicina_interna',
    caseNumber: 11,
    title: 'Anemia emolitica autoimmune (AIHA) da anticorpi caldi IgG con ittero ed emolisi severa trattata con metilprednisolone ed emotrasfusioni fenocomparabili',
    complexity: 'Intermedio',
    subCategory: 'Ematologia Clinica / Immunoematologia',
    clinicalScenario: {
      patientAgeSex: 'Donna, 51 anni',
      admissionReason: 'Insorgenza rapida in pochi giorni di astenia estrema con tachicardia, cardiopalmo, dispnea da sforzo minimo, colorito francamente itterico cutaneo e sclerale con urine ipercromiche scure ("a color marsala").',
      anamnesis: 'Tiroidite cronica autoimmune di Hashimoto in trattamento sostitutivo.',
      hospitalCourse: 'In Medicina Interna: cute pallida ed itterica, soffio sistolico dolce da iperafflusso su tutti i focolai; modesta splenomegalia palpabile. Esami ematochimici: anemia severa normocitica con emoglobina 5.8 g/dL (caduta da 12.5 g/dL nota un mese prima); conta dei reticolociti marcatamente aumentata (reticolocitosi marcata a 280.000/mcL); bilirubina totale 4.6 mg/dL con netta prevalenza indiretta (3.8 mg/dL); aptoglobina sierica completamente azzerata (< 10 mg/dL); LDH sierico marcatamente elevato a 950 U/L. Test di Coombs Diretto (DAT): fortemente positivo per IgG e C3d a titolo elevato; Test di Coombs Indiretto positivo per autoanticorpi pan-reattivi a caldo (tipo IgG, ottima affinità a 37 °C). Quadro diagnostico conclusivo di Anemia Emolitica Autoimmune da anticorpi caldi (warm AIHA) in fase di crisi emolitica severa. Avviata tempestivamente terapia immunosoppressiva con Metilprednisolone sodico succinato 1.5 mg/kg/die EV con gastroprotezione; considerate le manifestazioni anossiche miocardiche all\'ECG, eseguite trasfusioni di 2 unità di emazie concentrate fenocompatibili per i sistemi minori Rh e Kell "meno incompatibili" mediante infusione lentissima sotto stretta sorveglianza clinica.',
      proceduresConducted: 'Trasfusione di emazie concentrate fenocompatibili con test di compatibilità esteso, infusione di corticosteroidi ad alte dosi, ecografia addominale.',
      dischargeStatus: 'Dimessa in 10a giornata con emoglobina stabilizzata a 9.6 g/dL, normalizzazione dell\'aptoglobina e della bilirubina, e passaggio a prednisone orale con lento décalage.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'anemia emolitica autoimmune da anticorpi caldi ha il codice specifico D59.11 (Anemia emolitica autoimmune da anticorpi caldi). Nel catalogo CIPI la trasfusione di emazie ha codice CIPI 99.04.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'D59.11', description: 'Anemia emolitica autoimmune da anticorpi caldi (Warm AIHA)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R17', description: 'Ittero non specificato (ittero emolitico)', system: 'ICD-10-IM' },
          { code: 'E06.3', description: 'Tiroidite autoimmune (tiroidite di Hashimoto)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.04', description: 'Trasfusione di globuli rossi concentrati (Emotrasfusione fenocompatibile)', system: 'CIPI' },
          { code: 'CIPI-99.23', description: 'Iniezione di ormone steroideo ad alte dosi', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '283.0', description: 'Anemia emolitica autoimmune', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '782.4', description: 'Ittero', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.04', description: 'Trasfusione di emazie concentrate', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'D59.11 identifica con estrema precisione l\'anemia emolitica da anticorpi caldi, differenziandola dalla malattia da agglutinine fredde (D59.12).',
        'La presenza dell\'ittero a bilirubina indiretta (R17) descrive la sindrome emolitica acuta.',
        'La procedura CIPI 99.04 codifica l\'emotrasfusione di supporto.'
      ],
      commonCognitiveErrors: [
        'Codificare anemia non specificata D64.9 quando i marker emolitici e il test di Coombs diretto provano incontrovertibilmente un\'anemia emolitica autoimmune.',
        'Omettere la procedura trasfusionale salvavita eseguita.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario clinico il tipo di anticorpo al test di Coombs (IgG vs C3d), i livelli di aptoglobina e la gestione trasfusionale con sangue fenocomparabile.'
    }
  },
  {
    id: 'med-12',
    specialtyId: 'medicina_interna',
    caseNumber: 12,
    title: 'Gotta tofacea cronica con artrite acuta poliarticolare e nefropatia da urati in insufficienza renale trattata con anakinra',
    complexity: 'Intermedio',
    subCategory: 'Reumatologia e Malattie Metaboliche',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 65 anni',
      admissionReason: 'Crisi poliarticolare acuta iperalgica con tumefazione, calore e vivace arrossamento a carico della 1a articolazione metatarso-falangea destra (podagra), di entrambe le ginocchia e dei gomiti con tofi fistolizzati drenanti materiale pastoso biancastro e febbre a 38 °C.',
      anamnesis: 'Storia ventennale di iperuricemia e gotta non controllata per intolleranza ad allopurinolo, malattia renale cronica stadio 3b (creatinina basale 1.9 mg/dL).',
      hospitalCourse: 'In Medicina Interna: tofi periarticolari multipli voluminosi a carico di gomiti, tendini d\'Achille e dita delle mani. Esami ematochimici: acido urico sierico elevatissimo a 10.8 mg/dL; PCR 112 mg/L; creatinina peggiorata a 2.6 mg/dL (insufficienza renale acuta su cronica da nefropatia da urati con oliguria). Artrocentesi del ginocchio destro ed esame microscopico del liquido sinoviale a luce polarizzata compensata: presenza massiva di cristalli intracellulari ed extracellulari ad ago con birifrangenza fortemente negativa allineati parallelamente all\'asse, confermanti la sinovite microcristallina da urato monosodico (MSU); esame colturale del liquido sinoviale negativo per germi comuni. A causa della compromissione renale severa controindicati FANS e controindicata la colchicina (ad alto rischio di neuro-miopatia tossica con GFR ridotta); controindicato l\'uso protratto di steroidi sistemici per diabete scompensato. Trattato con successo con antagonista ricombinante del recettore dell\'interleuchina-1 (Anakinra 100 mg/die sottocute per 3 giorni) con spettacolare defervescenza e rapido abbattimento del dolore articolare e della flogosi; successiva introduzione di febuxostat a basse dosi per la riduzione del pool urico.',
      proceduresConducted: 'Artrocentesi evacuativa e diagnostica del ginocchio con esame a luce polarizzata del liquido sinoviale, ecografia articolare con evidenza del segno del "doppio contorno".',
      dischargeStatus: 'Dimesso al 7° giorno completamente asintomatico sul piano articolare, creatinina rientrata al basale (1.8 mg/dL) ed acido urico sceso a 6.0 mg/dL.'
    },
    documentationGapsWarning: 'In ICD-10-IM la gotta tofacea cronica con coinvolgimento renale ha il codice M1A.00X1 o M10.09. Nel catalogo CIPI l\'artrocentesi ha codice CIPI 81.91.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'M10.09', description: 'Gotta idiopatica con tofi e sedi multiple', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'N14.8', description: 'Nefropatia indotta da altri farmaci, medicamenti e sostanze biologiche (Nefropatia da urati)', system: 'ICD-10-IM' },
          { code: 'N17.9', description: 'Insufficienza renale acuta non specificata', system: 'ICD-10-IM', notes: 'CC significativo' },
          { code: 'N18.3', description: 'Malattia renale cronica stadio 3 (moderata)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-81.91', description: 'Artrocentesi per aspirazione di liquido articolare e diagnosi', system: 'CIPI' },
          { code: 'CIPI-88.79', description: 'Ecografia osteoarticolare (dimostrazione del segno del doppio contorno)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '274.03', description: 'Artrite gottosa cronica con tofi', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '274.10', description: 'Nefropatia gottosa', system: 'ICD-9-CM' }, { code: '585.3', description: 'Malattia renale cronica stadio III', system: 'ICD-9-CM' }],
        procedures: [{ code: '81.91', description: 'Artrocentesi', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'M10.09 codifica formalmente la gotta poliarticolare avanzata con tofi gottosi.',
        'La nefropatia da precipitazione tubulare di acido urico (N14.8) e l\'insufficienza renale acuta (N17.9) documentano l\'interessamento d\'organo renale.',
        'La procedura CIPI 81.91 definisce l\'artrocentesi con analisi microscopica a luce polarizzata, cardine della certezza diagnostica.'
      ],
      commonCognitiveErrors: [
        'Codificare semplice iperuricemia asintomatica (E79.0) per un quadro conclamato di gotta tofacea destruente.',
        'Omettere la procedura di artrocentesi diagnostica.'
      ],
      chartDocumentationAdvice: 'Attestare nel referto microscopico la visualizzazione dei cristalli di urato con birifrangenza negativa e il reperto ecografico del doppio contorno cartilagineo.'
    }
  },
  {
    id: 'med-13',
    specialtyId: 'medicina_interna',
    caseNumber: 13,
    title: 'Porpora trombocitopenica immune (ITP) acuta con piastrinopenia estrema e manifestazioni emorragiche umide trattata con IVIg e desametasone',
    complexity: 'Intermedio',
    subCategory: 'Ematologia Clinica / Disordini dell\'Emostasi',
    clinicalScenario: {
      patientAgeSex: 'Donna, 33 anni',
      admissionReason: 'Comparsa improvvisa da 24 ore di petecchie diffuse ed ecchimosi a carico degli arti e del tronco, epistassi spontanea profusa, gengivorragia al lavaggio dei denti e presenza di bolle emorragiche della mucosa orale (sangramento umido / wet bleeding con alto rischio di emorragia intracranica).',
      anamnesis: 'Paziente giovane sana, infezione delle prime vie respiratorie 3 settimane prima, non assunzione di farmaci.',
      hospitalCourse: 'In Medicina Interna: esame obiettivo con diffuse lesioni emorragiche cutanee purpuriche palpabili ed ematomi spontanei; assenza di linfoadenopatie o splenomegalia. Emocromo urgente: piastrine 3.000/mcL (< 20.000/mcL con manifestazioni emorragiche mucose attive); emoglobina 11.8 g/dL; leucociti e formula leucocitaria perfettamente normali. Striscio di sangue periferico: confermata la reale trombocitopenia (esclusa la pseudotrombocitopenia da EDTA) con presenza di piastrine giganti e normale morfologia dei globuli rossi e bianchi; test di coagulazione (PT, aPTT, fibrinogeno) e D-dimero normali (esclusa CID e PTT). Diagnosi di Porpora Trombocitopenica Immune primaria acuta (ITP) con sanguinamento ad alto rischio. Istituito trattamento combinato di emergenza: Immunoglobuline umane per via endovenosa (IVIg) al dosaggio di 1 g/kg/die per 2 giorni consecutivi per ottenere un rapido blocco dei recettori Fc macrofagici splenici; associato Desametasone orale ad alte dosi (40 mg/die per 4 giorni consecutivi). Spettacolare e rapida risalita della conta piastrinica a 45.000/mcL a 48 ore ed a 125.000/mcL in 5a giornata con completo arresto delle emorragie mucose.',
      proceduresConducted: 'Infusione endovenosa di immunoglobuline umane (IVIg), esame microscopico dello striscio di sangue periferico, monitoraggio emocoagulativo.',
      dischargeStatus: 'Dimessa al 6° giorno con piastrine a 145.000/mcL, completa risoluzione dei sanguinamenti ed appuntamento per follow-up ematologico.'
    },
    documentationGapsWarning: 'In ICD-10-IM la porpora trombocitopenica immune primaria ha il codice D69.3 (Porpora trombocitopenica idiopatica / ITP). Nel catalogo CIPI la somministrazione di IVIg ha codice CIPI 99.14.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'D69.3', description: 'Porpora trombocitopenica immune (ITP primaria acuta)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R04.0', description: 'Epistassi', system: 'ICD-10-IM' },
          { code: 'K06.8', description: 'Altri disturbi gengivali e della cresta alveolare (gengivorragia)', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.14', description: 'Iniezione o infusione di immunoglobuline umane (IVIg)', system: 'CIPI' },
          { code: 'CIPI-99.23', description: 'Iniezione di ormone steroideo ad alte dosi (Desametasone)', system: 'CIPI' },
          { code: 'CIPI-90.59', description: 'Esame microscopico del sangue (Striscio periferico)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '287.31', description: 'Porpora trombocitopenica immune', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '784.7', description: 'Epistassi', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.14', description: 'Iniezione di immunoglobuline', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'D69.3 identifica con la massima precisione la trombocitopenia immune primaria.',
        'La presenza di emorragie mucose attive (epistassi R04.0 e gengivorragia K06.8) documenta il quadro ad alto rischio emorragico sistemico.',
        'La procedura CIPI 99.14 specifica l\'impiego delle immunoglobuline per via endovenosa ad azione rapida.'
      ],
      commonCognitiveErrors: [
        'Codificare porpora trombocitopenica trombotica (PTT) M31.1 quando ADAMTS13 è normale e non vi è anemia emolitica microangiopatica né schistocitosi.',
        'Omettere la procedura di somministrazione delle IVIg.'
      ],
      chartDocumentationAdvice: 'Attestare la presenza del "wet bleeding" (bolle ematiche mucose), il nadir piastrinico e l\'esclusione di pseudotrombocitopenia allo striscio periferico.'
    }
  },
  {
    id: 'med-14',
    specialtyId: 'medicina_interna',
    caseNumber: 14,
    title: 'Morbo di Addison (insufficienza corticosurrenalica primitiva) in crisi surrenalica acuta scatenata da gastroenterite trattata con idrocortisone EV',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Endocrinologia d\'Urgenza',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 47 anni',
      admissionReason: 'Ipotensione arteriosa severa refrattaria (shock ipocorticosurrenalico con PA 70/40 mmHg), astenia estrema con prostrazione, vomito incoercibile, dolori addominali diffusi pseudo-peritoneali e febbre a 38.5 °C dopo episodio infettivo gastroenterico.',
      anamnesis: 'Paziente con storia da alcuni mesi di stanchezza cronica, calo ponderale di 8 kg e progressiva iperpigmentazione cutanea e mucosa ("abbronzatura patologica" delle pieghe palmari e della mucosa geniena).',
      hospitalCourse: 'In Medicina Interna/Semintensiva: evidente iperpigmentazione bruna delle gengive, delle cicatrici e delle pieghe delle mani; polsi periferici deboli, oliguria e stato soporoso. Esami ematochimici d\'urgenza: iponatriemia marcata a 124 mEq/L combinata con iperpotassiemia a 6.2 mEq/L (rapporto Na/K < 25, tipico per deficit mineralcorticoide primitivo); ipoglicemia sintomatica a 52 mg/dL; acidosi metabolica lieve. Cortisolo sierico basale del mattino azzerato a 1.2 mcg/dL con ACTH plasmatico marcatamente elevato a 850 pg/mL (> 100 pg/mL, diagnostico per insufficienza corticosurrenalica primitiva / Morbo di Addison); anticorpi anti-21-idrossilasi (anti-adrenal) fortemente positivi a confermare la genesi autoimmune (surrenalite autoimmune). Trattato immediatamente per shock surrenalico acuto: bolo endovenoso di Idrocortisone 100 mg EV immediato seguito da infusione continua di 200 mg/die in pompa; infusione massiva di soluzione fisiologica allo 0.9% addizionata con glucosata al 5% per correggere l\'ipovolemia e l\'ipoglicemia. Spettacolare e rapido ripristino dei valori pressori (PA 125/80 mmHg) entro 6 ore con scomparsa del dolore addominale e normalizzazione idroelettrolitica.',
      proceduresConducted: 'Monitoraggio continuo emodinamico in semintensiva, infusione di idrocortisone in continuo ed idratazione con cristalloidi, ecografia dell\'addome con studio dei surreni.',
      dischargeStatus: 'Dimesso al 7° giorno in ottime condizioni cliniche con terapia ormonale sostitutiva cronica combinata: Idrocortisone per os (20 mg/die in dosi frazionate) e Fludrocortisone acetato (0.1 mg/die).'
    },
    documentationGapsWarning: 'In ICD-10-IM il morbo di Addison con crisi surrenalica acuta ha il codice specifico combinato E27.2 (Crisi addisoniana / insufficienza corticosurrenale acuta).',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'E27.2', description: 'Crisi addisoniana (Crisi corticosurrenale acuta)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'E27.1', description: 'Insufficienza corticosurrenale primitiva (Morbo di Addison)', system: 'ICD-10-IM' },
          { code: 'E87.1', description: 'Ipo-osmolarità e iponatriemia', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'E87.5', description: 'Iperpotassiemia', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'E16.2', description: 'Ipoglicemia non specificata', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.23', description: 'Iniezione o infusione di ormone steroideo (Idrocortisone EV per crisi surrenalica)', system: 'CIPI' },
          { code: 'CIPI-89.54', description: 'Monitoraggio continuo multiparametrico in semintensiva', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '255.4', description: 'Crisi corticosurrenale (crisi addisoniana)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '255.41', description: 'Insufficienza corticosurrenale primitiva', system: 'ICD-9-CM' }, { code: '276.1', description: 'Iposodiemia', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.23', description: 'Iniezione di steroidi', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'E27.2 identifica specificamente la crisi surrenalica acuta addisoniana, condizione di emergenza medica fatale se non trattata tempestivamente.',
        'La triade metabolica iponatriemia (E87.1), iperkaliemia (E87.5) ed ipoglicemia (E16.2) qualifica l\'elevatissima intensità assistenziale.',
        'La procedura CIPI 99.23 documenta la terapia ormonale sostitutiva ormonale salvavita ad alte dosi.'
      ],
      commonCognitiveErrors: [
        'Codificare morbo di Addison cronico E27.1 omettendo il codice della crisi acuta addisoniana conclamata E27.2.',
        'Dimenticare di codificare l\'iperkaliemia e l\'iponatriemia concomitanti.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario clinico i livelli ormonali di cortisolo ed ACTH pre-trattamento, l\'iperpigmentazione cutanea e l\'immediata risposta pressoria all\'idrocortisone EV.'
    }
  },
  {
    id: 'med-15',
    specialtyId: 'medicina_interna',
    caseNumber: 15,
    title: 'Ipercalcemia maligna severa (14.8 mg/dL) secondaria a mieloma multiplo a catene leggere trattata con acido zoledronico, idratazione e calcitonina',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Oncoematologia / Disordini del Metabolismo Minerale',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 69 anni',
      admissionReason: 'Letargia ingravescente con stato soporoso, disidratazione severa, nausea e vomito incoercibile, stipsi ostinata, polidipsia e poliuria marcata comparsi in pochi giorni.',
      anamnesis: 'Lombalgia sorda da alcuni mesi, astenia progressiva.',
      hospitalCourse: 'In Medicina Interna: paziente soporoso (GCS 12), marcatamente disidratato con ipotensione e secchezza mucosa; accorciamento dell\'intervallo QT all\'ECG (QTc 340 ms). Esami ematochimici d\'urgenza: calcio sierico totale 14.8 mg/dL (calcio ionizzato 1.95 mmol/L, ipercalcemia severa "crisi ipercalcemica" a rischio di arresto cardiaco); fosfato 2.1 mg/dL; creatinina sierica 2.4 mg/dL da nefropatia da cilindri e disidratazione prerenale; PTH indosabile (< 3 pg/mL) e PTHrP negativo; elettroforesi sieroproteica con ipogammaglobulinemia e proteinuria di Bence-Jones massiva; dosaggio delle catene leggere libere (sFLC) con catene kappa a 4.200 mg/L e rapporto kappa/lambda > 250. Rx scheletro e TC total-body a basso dosaggio: multiple lesioni osteolitiche a scodella ("ad impronta d\'unghia") a carico della calotta cranica, coste e bacino. Terapia d\'emergenza immediata: reidratazione idroelettrolitica massiva con soluzione fisiologica 0.9% (3.000-4.000 mL nelle prime 24 ore); somministrazione di Calcitonina di salmone 4 UI/kg sottocute ogni 12 ore per rapida inibizione osteoclastica nelle prime 48 ore; infusione endovenosa di bifosfonato ad alta potenza (Acido Zoledronico 4 mg EV in infusione di 30 minuti con dose adeguata alla clearance renale) associato a Desametasone 40 mg EV. Progressiva e costante discesa della calcemia a 9.8 mg/dL in 4a giornata con completo risveglio neurologico e recupero della funzione renale.',
      proceduresConducted: 'Infusione endovenosa di bifosfonati (Acido zoledronico), idratazione idrosalina forzata e somministrazione di calcitonina, TC scheletrica a basso dosaggio per osteolisi.',
      dischargeStatus: 'Dimesso al 10° giorno con calcemia normale, creatinina scesa a 1.2 mg/dL e trasferimento in Ematologia per avvio di terapia con Bortezomib-Desametasone.'
    },
    documentationGapsWarning: 'In ICD-10-IM l\'ipercalcemia severa ha il codice E83.52. Il mieloma multiplo ha il codice primario C90.00.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'E83.52', description: 'Ipercalcemia (Crisi ipercalcemica maligna severa)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'C90.00', description: 'Mieloma multiplo non avente remissione', system: 'ICD-10-IM' },
          { code: 'N17.9', description: 'Insufficienza renale acuta non specificata', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'E86.0', description: 'Disidratazione / deplezione di volume', system: 'ICD-10-IM' },
          { code: 'R40.1', description: 'Stupore / sopore', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.29', description: 'Iniezione o infusione di altra sostanza terapeutica (Infusione di acido zoledronico)', system: 'CIPI' },
          { code: 'CIPI-88.38', description: 'Tomografia computerizzata di tutto il corpo (TC total body per lesioni osteolitiche)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '275.42', description: 'Ipercalcemia', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '203.00', description: 'Mieloma multiplo', system: 'ICD-9-CM' }, { code: '584.9', description: 'Insufficienza renale acuta', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.29', description: 'Infusione di altra sostanza terapeutica', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'E83.52 qualifica l\'ipercalcemia severa sintomatica come motivo principale del ricovero in urgenza.',
        'Il mieloma multiplo sottostante (C90.00) e l\'insufficienza renale acuta (N17.9) documentano l\'eziologia neoplastica e il danno d\'organo associato (criteri CRAB).',
        'La procedura CIPI 99.29 identifica la terapia chelante/osteoclastica con acido zoledronico.'
      ],
      commonCognitiveErrors: [
        'Omettere la diagnosi di ipercalcemia severa codificando solo il mieloma multiplo.',
        'Confondere l\'ipercalcemia maligna paraneoplastica con l\'iperparatiroidismo primario.'
      ],
      chartDocumentationAdvice: 'Attestare i valori esatti di calcemia corretta per l\'albumina o calcio ionizzato, l\'accorciamento dell\'intervallo QT e la risposta all\'acido zoledronico.'
    }
  },
  {
    id: 'med-16',
    specialtyId: 'medicina_interna',
    caseNumber: 16,
    title: 'Rettocolite ulcerosa in riacutizzazione severa secondo Truelove-Witts trattata con metilprednisolone EV dopo sigmoidoscopia',
    complexity: 'Intermedio',
    subCategory: 'Gastroenterologia ed Endoscopia Digestiva / IBD',
    clinicalScenario: {
      patientAgeSex: 'Donna, 36 anni',
      admissionReason: 'Diarrea ematica grave con oltre 10 scariche al giorno frammiste a muco e sangue rosso vivo, tenesmo rettale continuo, dolore addominale crampiforme ai quadranti inferiori, febbre serotina a 38.2 °C ed astenia marcata.',
      anamnesis: 'Rettocolite ulcerosa nota da 3 anni a localizzazione estesa (pancolite), in terapia di mantenimento con mesalazina orale.',
      hospitalCourse: 'In Medicina Interna: paziente sofferente, addome trattabile ma dolente lungo il decorso del colon discendente e sigma; assenza di reazioni peritoneali. Esami ematochimici: emoglobina 9.2 g/dL (anemia microcitica sideropenica); PCR marcatamente elevata a 68 mg/L; VES 55 mm/h; albumina sierica ridotta a 2.8 g/dL; calprotectina fecale > 2.000 mcg/g. Quadro conforme ai criteri di Truelove and Witts per attacco acuto severo di colite ulcerosa (> 6 scariche ematiche/die, febbre, tachicardia, anemia ed elevazione degli indici di flogosi). Rx diretta addome: escluso megacolon tossico (diametro del colon trasverso 4.2 cm < 5.5 cm) ed assenza di aria libera sottodiaframmatica. Eseguita rettosigmoidoscopia flessibile delicata a bassa insuflazione: mucosa del retto e del sigma diffusamente ed intensamente iperemica, edematosa, con perdita del reticolo vascolare, sanguinamento spontaneo diffuso al solo contatto con lo strumento e diffuse ulcere confluenti a fondo fibrinoso (Score endoscopico di Mayo Grado 3 - colite severa). Esclusa sovrainfezione da Clostridioides difficile e CMV. Istituito digiuno e riposo intestinale, idratazione EV ed avviata terapia steroidea endovenosa ad alte dosi: Metilprednisolone 60 mg/die in infusione continua; contestuale profilassi con eparina a basso peso molecolare per l\'elevato rischio tromboembolico nelle IBD attive. Valutazione di risposta al 3° giorno (Criteri di Oxford / Travis) con ottima risposta clinica, caduta delle scariche a 3/die e crollo della PCR.',
      proceduresConducted: 'Rettosigmoidoscopia flessibile con prelievi bioptici, radiografia diretta dell\'addome senza contrasto, infusione continua di corticosteroidi.',
      dischargeStatus: 'Dimessa in 9a giornata con remissione clinica iniziale, feci formate senza sangue e transizione programmata a terapia biologica con Infliximab.'
    },
    documentationGapsWarning: 'In ICD-10-IM la colite ulcerosa universale (pancolite) ha il codice specifico K51.00. Nel catalogo CIPI la sigmoidoscopia flessibile ha codice CIPI 45.24.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K51.00', description: 'Colite ulcerosa (cronica) universale / pancolite senza complicanze', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'D50.0', description: 'Anemia sideropenica secondaria a perdita ematica (cronica)', system: 'ICD-10-IM' },
          { code: 'R19.7', description: 'Diarrea non specificata', system: 'ICD-10-IM' },
          { code: 'R10.84', description: 'Dolore addominale generalizzato', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-45.24', description: 'Sigmoidoscopia flessibile', system: 'CIPI' },
          { code: 'CIPI-99.23', description: 'Iniezione di ormone steroideo ad alte dosi (Metilprednisolone EV)', system: 'CIPI' },
          { code: 'CIPI-87.89', description: 'Radiografia dell\'addome senza contrasto (Diretta addome per megacolon tossico)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '556.6', description: 'Colite ulcerosa universale', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '280.0', description: 'Anemia sideropenica da perdita ematica', system: 'ICD-9-CM' }],
        procedures: [{ code: '45.24', description: 'Sigmoidoscopia flessibile', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K51.00 identifica la pancolite ulcerosa in fase di riacutizzazione acuta severa.',
        'L\'anemia sideropenica da stillicidio ematico cronico (D50.0) e la diarrea ematica rappresentano le complicanze cardine.',
        'La procedura CIPI 45.24 definisce la sigmoidoscopia diagnostica cautelativa senza colonscopia totale per evitare perforazioni iatrogene su mucosa fragile.'
      ],
      commonCognitiveErrors: [
        'Codificare generica gastroenterite infettiva A09 anziché la malattia infiammatoria cronica intestinale nota in fase di attacco severo.',
        'Omettere la procedura di sigmoidoscopia flessibile eseguita in urgenza.'
      ],
      chartDocumentationAdvice: 'Attestare nel diario clinico il rispetto dei criteri di severità di Truelove e Witts, il Mayo endoscopic score (Grado 3) e l\'esclusione di megacolon tossico alla diretta addome.'
    }
  },
  {
    id: 'med-17',
    specialtyId: 'medicina_interna',
    caseNumber: 17,
    title: 'Malattia correlata alle IgG4 (IgG4-RD) con pancreatite autoimmune di tipo 1 e colangite sclerosante trattata con steroide sistemico',
    complexity: 'Intermedio',
    subCategory: 'Gastroenterologia ed Epatologia / Malattie Rare Fibro-infiammatorie',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 61 anni',
      admissionReason: 'Ittero ostruttivo indolore ingravescente con feci ipocoliche ed urine ipercromiche, calo ponderale di 5 kg negli ultimi 2 mesi, astenia e modesto dolore gravativo epigastrico.',
      anamnesis: 'Paziente diabetico di recente riscontro, tiroidite cronica.',
      hospitalCourse: 'In Medicina Interna: marcato ittero cutaneo-sclerale, addome trattabile privo di masse palpabili. Esami di laboratorio: bilirubina totale 8.4 mg/dL con componente diretta 6.9 mg/dL; fosfatasi alcalina 420 U/L e GGT 380 U/L (quadro colestatico marcato); amilasi e lipasi modicamente aumentate (2 volte i limiti superiori); dosaggio delle sottoclassi di immunoglobuline IgG: IgG4 sieriche marcatamente elevate a 480 mg/dL (valore normale < 135 mg/dL, oltre 3 volte il limite superiore). TC addome con mdc e Colangio-RMN: tipico ingrandimento diffuso a "salsicciotto" (sausage-like appearance) del pancreas con perdita della normale lobulatura e cercine ipodenso peripancreatico ("halo sign"); marcata stenosi segmentaria del coledoco intrapancreatico con dilatazione a monte delle vie biliari intra ed extraepatiche. Ecoendoscopia (EUS) con biopsia mediante agoaspirato con ago tranciante (FNB): reperto istologico caratterizzato da denso infiltrato linfo-plasmacellulare, sclerosi a nido di rondine (storiform fibrosis), flebite obliterativa ed all\'immunoistochimica > 30 plasmacellule IgG4-positive per campo ad alto ingrandimento (HPF) con rapporto IgG4/IgG > 40%. Criteri di consenso internazionale (HISORt) pienamente soddisfatti per Pancreatite Autoimmune di Tipo 1 / IgG4-Related Disease. Avviata terapia steroidea con Prednisone 40 mg/die per os con spettacolare regressione dell\'ittero entro 10 giorni, normalizzazione enzimatica e marcata riduzione volumetrica del pancreas alla TC di rivalutazione.',
      proceduresConducted: 'Ecoendoscopia bilio-pancreatica (EUS) con biopsia trans-duodenale ad ago tranciante (FNB), Colangio-RMN addominale, TC addome con contrasto.',
      dischargeStatus: 'Dimesso al 12° giorno con bilirubina normalizzata a 1.2 mg/dL, IgG4 in discesa e programma di lento décalage steroideo a lungo termine.'
    },
    documentationGapsWarning: 'In ICD-10-IM la malattia sistemica correlata alle IgG4 ha il codice M35.88 o K86.1 per la pancreatite autoimmune di tipo 1. Nel catalogo CIPI l\'ecoendoscopia con biopsia ha il codice CIPI 52.14.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'K86.1', description: 'Altra pancreatite cronica (Pancreatite autoimmune di tipo 1 / IgG4-correlata)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'K83.08', description: 'Altra colangite (Colangite sclerosante IgG4-correlata)', system: 'ICD-10-IM' },
          { code: 'M35.88', description: 'Altro interessamento sistemico del tessuto connettivo specificato (Malattia correlata a IgG4)', system: 'ICD-10-IM' },
          { code: 'R17', description: 'Ittero non specificato', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-52.14', description: 'Biopsia chiusa percutanea del pancreas (Biopsia ecoendoscopica EUS-FNB del pancreas)', system: 'CIPI' },
          { code: 'CIPI-88.74', description: 'Risonanza magnetica dell\'addome con colangio-RM (Colangio-RMN)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '577.1', description: 'Pancreatite cronica (pancreatite autoimmune)', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '576.1', description: 'Colangite', system: 'ICD-9-CM' }, { code: '782.4', description: 'Ittero', system: 'ICD-9-CM' }],
        procedures: [{ code: '52.14', description: 'Biopsia chiusa del pancreas', system: 'ICD-9-CM' }, { code: '88.74', description: 'RMN addome', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'K86.1 e M35.88 documentano la malattia fibro-infiammatoria sistemica IgG4-correlata con coinvolgimento pancreatico e biliare.',
        'L\'ittero ostruttivo associato (R17) rappresenta la manifestazione di presentazione primaria che ha simulato una neoplasia della testa del pancreas (adenocarcinoma pancreatico).',
        'La procedura CIPI 52.14 identifica la biopsia ecoendoscopica che ha permesso l\'esclusione della malignità e la diagnosi istologica corretta.'
      ],
      commonCognitiveErrors: [
        'Confondere la pancreatite autoimmune IgG4-correlata con un adenocarcinoma del pancreas sottoponendo erroneamente il paziente a chirurgia demolitiva di Whipple.',
        'Omettere la codifica della biopsia pancreatica ecoendoscopica EUS-FNB.'
      ],
      chartDocumentationAdvice: 'Attestare i livelli sierici di IgG4 (> 2-3 volte il limite), la conta delle plasmacellule IgG4+ alla biopsia (> 10-30/HPF) e l\'aspetto morfologico a salsicciotto alla TC/RM.'
    }
  },
  {
    id: 'med-18',
    specialtyId: 'medicina_interna',
    caseNumber: 18,
    title: 'Polimialgia reumatica (PMR) ad esordio severo con interessamento sistemico (VES > 100 mm/h) trattata con prednisone a dosi moderate',
    complexity: 'Base',
    subCategory: 'Reumatologia Geriatrica',
    clinicalScenario: {
      patientAgeSex: 'Donna, 71 anni',
      admissionReason: 'Dolore acuto simmetrico e rigidità mattutina intensa e prolungata (> 90 minuti) a carico dei cingoli scapolare e pelvico con impossibilità ad alzarsi dal letto, pettinarsi o infilarsi il cappotto da oltre 3 settimane, accompagnata da febbricola serotina a 37.6 °C, astenia profonda e calo ponderale.',
      anamnesis: 'Paziente in buona salute prima dell\'esordio sintomatico, nessuna cefalea o claudicatio mandibolare (esclusa arterite di Horton).',
      hospitalCourse: 'In Medicina Interna: obiettività con marcata dolorabilità all\'abduzione attiva e passiva delle spalle e alla flessione dell\'anca, forza muscolare intrinseca conservata; assenza di sinovite alle articolazioni periferiche; arterie temporali normosfigmiche e non dolenti. Esami ematochimici: VES marcatamente aumentata a 104 mm/h; PCR 86 mg/L; anemia normocitica da infiammazione cronica (Hb 10.2 g/dL); enzimi muscolari (CPK, aldolasi) perfettamente normali (esclusa miosite o polimiosite); fattore reumatoide (FR) ed anticorpi anti-CCP negativi. Ecografia articolare bilaterale delle spalle e delle anche: visualizzazione di borsite subacromiale-subdeltoidea bilaterale, tenosinovite del capo lungo del bicipite e sinovite dell\'anca bilaterale. Criteri classificativi ACR/EULAR 2012 per Polimialgia Reumatica pienamente soddisfatti (score = 6). Avviata terapia di prova e di trattamento con Prednisone a dose standard di 15 mg/die per os in singola somministrazione mattutina: spettacolare e drammatica risposta clinica entro 48 ore ("risposta quasi miracolosa tipica") con scomparsa totale del dolore, normalizzazione della mobilità e rapido calo degli indici di flogosi.',
      proceduresConducted: 'Ecografia articolare comparativa bilaterale delle spalle e delle anche, monitoraggio laboratoristico degli indici di flogosi.',
      dischargeStatus: 'Dimessa al 5° giorno completamente autonoma ed asintomatica con programma di scalaggio steroideo molto lento per prevenire recidive.'
    },
    documentationGapsWarning: 'In ICD-10-IM la polimialgia reumatica ha il codice specifico M35.3. Nel catalogo CIPI l\'ecografia articolare bilaterale ha codice CIPI 88.79.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'M35.3', description: 'Polimialgia reumatica (PMR)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'M25.511', description: 'Dolore all\'articolazione della spalla destra', system: 'ICD-10-IM' },
          { code: 'M25.512', description: 'Dolore all\'articolazione della spalla sinistra', system: 'ICD-10-IM' },
          { code: 'D63.8', description: 'Anemia in altre malattie croniche classificate altrove', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-88.79', description: 'Altra ecografia osteoarticolare (Ecografia articolare spalle ed anche)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '725', description: 'Polimialgia reumatica', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '719.41', description: 'Dolore alla spalla', system: 'ICD-9-CM' }],
        procedures: [{ code: '88.79', description: 'Altra ecografia', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'M35.3 identifica la polimialgia reumatica, patologia infiammatoria sistemica tipica dell\'età anziana.',
        'La presenza di dolore cingolare bilaterale e l\'anemia da infiammazione (D63.8) documentano la tipica presentazione sistemica.',
        'La procedura CIPI 88.79 codifica l\'ecografia articolare delle spalle, elemento di supporto nei criteri ACR/EULAR.'
      ],
      commonCognitiveErrors: [
        'Confondere la polimialgia reumatica con una polimiosite (M33.2) pur in presenza di CPK normale.',
        'Omettere l\'ecografia articolare bilaterale che documenta la borsite subdeltoidea.'
      ],
      chartDocumentationAdvice: 'Attestare la rapida risposta clinica al prednisone entro 48-72 ore (ex juvantibus) e l\'assenza di segni clinici di arterite a cellule giganti (assenza di cefalea o disturbi visivi).'
    }
  },
  {
    id: 'med-19',
    specialtyId: 'medicina_interna',
    caseNumber: 19,
    title: 'Sarcoidosi sistemica a localizzazione polmonare ed epatosplenica (Stadio II) con ipercalcemia diagnosticata con broncoscopia ed EBUS-TBNA',
    complexity: 'Intermedio',
    subCategory: 'Pneumologia ed Immunologia Clinica / Malattie Granulomatose',
    clinicalScenario: {
      patientAgeSex: 'Donna, 42 anni',
      admissionReason: 'Tosse secca stizzosa non produttiva da oltre 2 mesi, dispnea da sforzo moderato, comparsa di lesioni nodulari eritematose calde e dolenti sulla superficie pretibiale delle gambe (eritema nodoso), astenia e comparsa di ipercalcemia all\'esame di routine.',
      anamnesis: 'Paziente non fumatrice, non esposizione a polveri o asbesto.',
      hospitalCourse: 'In Medicina Interna: presenza di lesioni tipiche per eritema nodoso pretibiale; obiettività toracica nei limiti. Esami ematochimici: ipercalcemia moderata a 11.4 mg/dL con PTH soppresso ed elevazione selettiva dell\'1,25-diidrossi-vitamina D (calcitriolo a 98 pg/mL da iperproduzione endogena macrofagica di 1-alfa-idrossilasi); enzima di conversione dell\'angiotensina (ACE) sierico elevato a 110 U/L. TC torace ad alta risoluzione (HRCT): marcata linfoadenopatia ilare bilaterale simmetrica e mediastinica associata ad infiltrati micronodulari perilinfatici a distribuzione subpleurica lungo le scissure nei lobi superiori (Stadio radiologico II di Scadding). Eseguita broncoscopia con ecoendoscopia bronchiale (EBUS) ed agoaspirato transbronchiale (TBNA) delle stazioni linfonodali sottocarenale e paratracheale: esame citologico ed istologico documenta numerosi granulomi non necrotizzanti (senza necrosi caseosa), ben formati, composti da cellule epitelioidi, cellule giganti multinucleate ed orletto linfocitario; colorazioni per micobatteri (Ziehl-Neelsen) e miceti (Grocott) negative; lavaggio broncoalveolare (BAL) con rapporto CD4/CD8 elevato a 5.2. Diagnosi di certezza di Sarcoidosi sistemica Stadio II. Avviata terapia steroidea con Prednisone 0.5 mg/kg/die con rapida normalizzazione della calcemia e scomparsa della tosse.',
      proceduresConducted: 'Broncoscopia a fibre ottiche con ecoendoscopia ed agoaspirato transbronchiale linfonodale (EBUS-TBNA), lavaggio broncoalveolare (BAL), TC torace ad alta risoluzione (HRCT).',
      dischargeStatus: 'Dimessa al 7° giorno con calcemia a 9.4 mg/dL, risoluzione dell\'eritema nodoso e follow-up funzionale respiratorio programmato.'
    },
    documentationGapsWarning: 'In ICD-10-IM la sarcoidosi polmonare con linfonodi ha il codice specifico combinato D86.2 (Sarcoidosi del polmone con sarcoidosi dei linfonodi). Nel catalogo CIPI l\'EBUS-TBNA ha codice CIPI 33.24.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'D86.2', description: 'Sarcoidosi del polmone con sarcoidosi dei linfonodi (Sarcoidosi Stadio II)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'E83.52', description: 'Ipercalcemia (da iperproduzione di calcitriolo)', system: 'ICD-10-IM' },
          { code: 'L52', description: 'Eritema nodoso', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-33.24', description: 'Biopsia bronchiale a fibre ottiche (EBUS-TBNA di linfonodi mediastinici)', system: 'CIPI' },
          { code: 'CIPI-33.24', description: 'Lavaggio broncoalveolare diagnostico (BAL)', system: 'CIPI' },
          { code: 'CIPI-87.41', description: 'Tomografia assiale computerizzata del torace (TC torace HRCT)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '135', description: 'Sarcoidosi', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '275.42', description: 'Ipercalcemia', system: 'ICD-9-CM' }, { code: '695.2', description: 'Eritema nodoso', system: 'ICD-9-CM' }],
        procedures: [{ code: '33.24', description: 'Biopsia bronchiale a fibre ottiche', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'D86.2 specifica la sarcoidosi sia a livello linfonodale mediastinico che parenchimale polmonare (Stadio II).',
        'L\'ipercalcemia (E83.52) e l\'eritema nodoso (L52) riflettono la complicanza endocrino-metabolica e cutanea (sindrome di Löfgren incompleta).',
        'La procedura CIPI 33.24 identifica l\'agobiopsia transbronchiale guidata da EBUS che ha fornito l\'evidenza istologica del granuloma non caseificante.'
      ],
      commonCognitiveErrors: [
        'Confondere la sarcoidosi con la tubercolosi polmonare o con un linfoma mediastinico.',
        'Omettere la codifica della biopsia EBUS-TBNA che certifica la diagnosi di certezza.'
      ],
      chartDocumentationAdvice: 'Attestare l\'assenza di necrosi caseosa ai campioni bioptici, il rapporto CD4/CD8 al BAL (> 3.5) e i livelli di calcitriolo ed ACE.'
    }
  },
  {
    id: 'med-20',
    specialtyId: 'medicina_interna',
    caseNumber: 20,
    title: 'Granulomatosi con poliangioite (GPA / Wegener) con sindrome rene-polmone acuta trattata con plasmaferesi, rituximab e boli steroidei',
    complexity: 'Avanzato (CC/MCC)',
    subCategory: 'Vasculiti Sistemiche ANCA-Associate / Emergenze Nefro-Pneumologiche',
    clinicalScenario: {
      patientAgeSex: 'Uomo, 56 anni',
      admissionReason: 'Emottisi ingravescente con tosse e dispnea rapidamente progressiva, insufficienza renale acuta oligurica con urine scure ematuriche, croste ed ulcere nasali siero-ematiche purulente da circa un mese (sindrome rene-polmone).',
      anamnesis: 'Sinusite cronica recidivante refrattaria a cicli di antibiotici ed otite media secretiva.',
      hospitalCourse: 'In Medicina Interna/Terapia Semintensiva: paziente ipossiemico (pO2 58 mmHg in aria ambiente, tachipnea 26 atti/min), rantoli diffusi ad entrambi i campi polmonari; PA 160/95 mmHg. TC torace ad alta risoluzione: multipli noduli polmonari bilaterali con escavazione centrale e diffuse opacità a vetro smerigliato (ground-glass) da emorragia alveolare diffusa. Broncoscopia urgente: presenza di sangue attivo in tutto l\'albero bronchiale con lavaggio broncoalveolare (BAL) sequenziale progressivamente più ematico (conferma di emorragia alveolare acuta). Esami di laboratorio: creatinina sierica schizzata da 1.0 a 4.8 mg/dL con eGFR 12 mL/min; sedimento urinario con microematuria massiva (eritrociti dismorfici > 80% e cilindri eritrocitari); proteinuria 2.2 g/die; anticorpi anti-citoplasma dei neutrofili (ANCA) con pattern citoplasmatico (c-ANCA) ed elevatissimo titolo di anticorpi anti-proteinasi 3 (anti-PR3 > 200 UI/mL, patognomonico per Granulomatosi con Poliangioite / GPA). Biopsia renale percutanea: glomerulonefrite necrotizzante con semilune (crescentic) pauci-immune (senza depositi all\'immunofluorescenza). Avviata terapia d\'urgenza combinata per vasculite sistemica ANCA-associata ad alto rischio d\'organo e di vita: 3 boli di Metilprednisolone 1.000 mg/die EV; cicli di Plasmaferesi terapeutica a giorni alterni (7 sedute di PLEX con sostituzione di albumina) per rapida rimozione degli autoanticorpi; infusione di Rituximab (anti-CD20) 375 mg/m2 settimanale per 4 settimane.',
      proceduresConducted: 'Plasmaferesi terapeutica (Plasma exchange / PLEX), broncoscopia a fibre ottiche con BAL per emorragia alveolare, biopsia renale ecoguidata, infusione di rituximab e boli steroidei.',
      dischargeStatus: 'Dimesso al 22° giorno con risoluzione completa dell\'emorragia alveolare, creatinina stabilizzata a 1.7 mg/dL, negativizzazione della PR3-ANCA e prosecuzione di rituximab di mantenimento.'
    },
    documentationGapsWarning: 'In ICD-10-IM la granulomatosi con poliangioite (di Wegener) ha il codice specifico M31.31 (Granulomatosi con poliangioite con coinvolgimento renale). Nel catalogo CIPI la plasmaferesi è CIPI 99.71 e la biopsia renale è CIPI 55.23.',
    solution: {
      icd10: {
        primaryDiagnosis: { code: 'M31.31', description: 'Granulomatosi con poliangioite con coinvolgimento renale (Granulomatosi di Wegener)', system: 'ICD-10-IM' },
        secondaryDiagnoses: [
          { code: 'R04.81', description: 'Emorragia dal tessuto polmonare (Emorragia alveolare diffusa)', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'N17.9', description: 'Insufficienza renale acuta non specificata', system: 'ICD-10-IM', notes: 'MCC critico' },
          { code: 'J32.9', description: 'Sinusite cronica non specificata', system: 'ICD-10-IM' }
        ],
        procedures: [
          { code: 'CIPI-99.71', description: 'Plasmaferesi terapeutica (Plasma exchange / PLEX)', system: 'CIPI' },
          { code: 'CIPI-55.23', description: 'Biopsia renale chiusa percutanea', system: 'CIPI' },
          { code: 'CIPI-33.24', description: 'Broncoscopia diagnostica con lavaggio broncoalveolare per emorragia alveolare', system: 'CIPI' },
          { code: 'CIPI-99.28', description: 'Iniezione o infusione di anticorpi monoclonali (Rituximab)', system: 'CIPI' }
        ]
      },
      icd9Comparison: {
        primaryDiagnosis: { code: '446.4', description: 'Granulomatosi di Wegener', system: 'ICD-9-CM' },
        secondaryDiagnoses: [{ code: '786.39', description: 'Altra emottisi ed emorragia polmonare', system: 'ICD-9-CM' }, { code: '584.9', description: 'Insufficienza renale acuta', system: 'ICD-9-CM' }],
        procedures: [{ code: '99.71', description: 'Plasmaferesi terapeutica', system: 'ICD-9-CM' }, { code: '55.23', description: 'Biopsia renale', system: 'ICD-9-CM' }]
      },
      rulesAppliedExplanation: [
        'M31.31 è il codice specifico per la Granulomatosi con poliangioite con coinvolgimento renale (glomerulonefrite extracapillare pauci-immune).',
        'L\'emorragia alveolare diffusa (R04.81) e l\'insufficienza renale acuta oligurica (N17.9) configurano la sindrome rene-polmone acuta ad elevatissima letalità (doppio MCC).',
        'Le procedure CIPI 99.71 (plasmaferesi) e CIPI 99.28 (Rituximab) riflettono il massimo livello di intensità terapeutica.'
      ],
      commonCognitiveErrors: [
        'Confondere la GPA con la sindrome di Goodpasture (anti-GBM) o con una polmonite batterica con sepsi.',
        'Omettere la procedura di plasmaferesi terapeutica CIPI 99.71.'
      ],
      chartDocumentationAdvice: 'Attestare la titolazione di c-ANCA/anti-PR3, l\'istologia glomerulare con semilune pauci-immuni e la dimostrazione broncoscopica dell\'emorragia alveolare sequenziale.'
    }
  }
];
