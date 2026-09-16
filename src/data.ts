import { ClinicalCase, Specialty } from './types';
import { EMERGENCY_CASES } from './data/cases/emergency';
import { INTENSIVE_CARE_CASES } from './data/cases/intensiveCare';
import { CARDIOLOGY_CASES } from './data/cases/cardiology';
import { SURGERY_CASES } from './data/cases/surgery';
import { ORTHOPEDICS_CASES } from './data/cases/orthopedics';
import { NEUROLOGY_CASES } from './data/cases/neurology';
import { INTERNAL_MEDICINE_CASES } from './data/cases/internalMedicine';
import { GYNECOLOGY_CASES } from './data/cases/gynecology';

export const SPECIALTIES: Specialty[] = [
  {
    id: 'pronto_soccorso',
    name: 'Pronto Soccorso & Medicina d’Urgenza',
    code: 'MEU',
    iconName: 'Ambulance',
    description: 'Triage, emergenze cardiorespiratorie, traumi acuti, OBI e stabilizzazione emodinamica.'
  },
  {
    id: 'terapia_intensiva',
    name: 'Terapia Intensiva & Rianimazione',
    code: 'TI_RIAN',
    iconName: 'Activity',
    description: 'Shock settico, ARDS, MOF, ventilazione meccanica prolungata > 96h e monitoraggio invasivo.'
  },
  {
    id: 'cardiologia',
    name: 'Cardiologia & Cardiochirurgia',
    code: 'CARD',
    iconName: 'HeartPulse',
    description: 'Sindromi coronariche acute, scompenso, aritmie, PCI e impianti transcatetere.'
  },
  {
    id: 'chirurgia_generale',
    name: 'Chirurgia Generale & D’Urgenza',
    code: 'CHIR_GEN',
    iconName: 'Scissors',
    description: 'Addome acuto, neoplasie gastroenteriche, laparoscopia e resezioni viscerali.'
  },
  {
    id: 'ortopedia',
    name: 'Ortopedia & Traumatologia',
    code: 'ORTO',
    iconName: 'Bone',
    description: 'Fratture di femore, artroplastiche d’anca e ginocchio, lesioni legamentose complesse.'
  },
  {
    id: 'neurologia',
    name: 'Neurologia & Stroke Unit',
    code: 'NEURO',
    iconName: 'Brain',
    description: 'Ictus ischemico ed emorragico, trombolisi endovenosa, trombectomia e sclerosi multipla.'
  },
  {
    id: 'medicina_interna',
    name: 'Medicina Interna & Geriatria',
    code: 'MED_INT',
    iconName: 'Stethoscope',
    description: 'Polipatologia complessa, sepsi, insufficienza multiorgano, diabete scompensato.'
  },
  {
    id: 'ostetricia_ginecologia',
    name: 'Ostetricia & Ginecologia',
    code: 'OST_GIN',
    iconName: 'Baby',
    description: 'Parto cesareo d’urgenza, emorragie post-partum, isterectomie e patologia annessiale.'
  }
];

export const CLINICAL_CASES: ClinicalCase[] = [
  ...EMERGENCY_CASES,
  ...INTENSIVE_CARE_CASES,
  ...CARDIOLOGY_CASES,
  ...SURGERY_CASES,
  ...ORTHOPEDICS_CASES,
  ...NEUROLOGY_CASES,
  ...INTERNAL_MEDICINE_CASES,
  ...GYNECOLOGY_CASES
];

export const EDUCATIONAL_THEORY = {
  title: 'Modulo Formativo Propedeutico: Transizione da ICD-9-CM a ICD-10-IM e CIPI',
  normativeReference: 'Decreto Ministeriale 23 ottobre 2025 (Adozione dal 1° gennaio 2027 • Sperimentazione Progetto NSIS-CLASS)',
  scientificSource: 'Corso FAD Istituto Superiore di Sanità (ISS) - Programma Ministeriale NSIS-CLASS (DM 23/10/2025)',
  modules: [
    {
      id: 'struttura',
      title: '1. Riforma Strutturale e Granularità Alfanumerica (ICD-10-IM)',
      points: [
        {
          label: 'Superamento dei limiti di ICD-9-CM',
          detail: 'ICD-9-CM (v. 2007) utilizzava una struttura numerica a 3-5 cifre, satura e non più adeguata all\'evoluzione della medicina e delle tecnologie sanitarie. La transizione separa nettamente la classificazione delle diagnosi da quella delle procedure.',
          sourceRef: 'FAD ISS Tutorial 1 • Dispensa A'
        },
        {
          label: 'Formato Alfanumerico ICD-10-IM (3–6 caratteri)',
          detail: 'I codici terminali ICD-10-IM hanno una lunghezza compresa tra 3 e 6 caratteri (escluso il punto). Il 1° carattere è alfabetico (A–Z, eccetto U riservato per assegnazioni speciali), seguito da caratteri numerici. L\'albero gerarchico OMS si estende con Modificatori OMS (4-5 caratteri) e Peculiarità IM (fino a 6 caratteri, es. S27.301, I12.00) per garantire la continuità con i flussi NSIS e DRG.',
          sourceRef: 'FAD ISS Tutorial 2 (pp. 6-12) • ESPERTO (pp. 4-5)'
        },
        {
          label: 'Gestione di Sequele e Cause Esterne di Traumatismo',
          detail: 'In ICD-10-IM il termine «sequela» sostituisce i «postumi» di ICD-9-CM: si codifica come principale la natura del residuo trattato e, se pertinente, la categoria di sequela (B90-B94, I69.-, T90-T98) come codice aggiuntivo. Nei traumatismi la natura della lesione è la diagnosi principale, mentre i codici di causa esterna (Capitolo XX, V01-Y98) fungono da codici aggiuntivi secondo le regole del flusso SDO.',
          sourceRef: 'FAD ISS Tutorial 3 (p. 13) • Materiale Lettura D (pp. 21-23)'
        }
      ]
    },
    {
      id: 'separazione',
      title: '2. Separazione Netta: ICD-10-IM (Diagnosi) vs CIPI (Procedure)',
      points: [
        {
          label: 'Superamento della commistione storica (Volume 3)',
          detail: 'Nella ICD-9-CM il Volume 3 conteneva la classificazione delle procedure chirurgiche e diagnostiche in sole 2-4 cifre. Con la riforma, le diagnosi sono classificate esclusivamente con ICD-10-IM e le procedure con il catalogo nazionale CIPI.',
          sourceRef: 'FAD ISS Tutorial 2 (p. 3) • ESPERTO (p. 4)'
        },
        {
          label: 'ICD-10-IM per le Sole Diagnosi (22 Capitoli)',
          detail: 'ICD-10-IM comprende 22 capitoli sistematici. L\'unità di base per statistiche e confronti internazionali è la categoria a 3 caratteri, mentre nei flussi informativi si utilizzano esclusivamente le voci terminali codificanti (a 3, 4, 5 o 6 caratteri).',
          sourceRef: 'FAD ISS Tutorial 2 (pp. 7-10) • Dispensa C'
        },
        {
          label: 'CIPI: Struttura a 6 Caratteri e Codifica Modulare',
          detail: 'Il CIPI (v. 2025) comprende rubriche non codificanti a 2, 3 e 4 caratteri e codici terminali codificanti a 6 caratteri (formato XX.XX.XX). Il 6° carattere veicola spesso un valore semantico di approccio (C=open, P=percutaneo, S=laparo/toracoscopico, B=endovascolare, N=endoscopico naturale, D=endovascolare chirurgico, W=complementare, Z=altro). Gli interventi complessi si descrivono combinando moduli (demolizione, tempo linfonodale, ricostruzione e complementi W associati a procedura non-W).',
          sourceRef: 'FAD ISS Tutorial 4 (pp. 7-15) • Tutorial 5 (pp. 8-14) • ESPERTO (pp. 8-11)'
        }
      ]
    },
    {
      id: 'diagnosi_principale',
      title: '3. Regole SDO per Diagnosi Principale, Multipatologie e Daga-Asterisco',
      points: [
        {
          label: 'Definizione Rigorosa di Diagnosi Principale SDO',
          detail: 'È la condizione clinica diagnosticata al termine del ricovero che ha motivato l\'ammissione in ospedale o che ha assorbito la quota preponderante di risorse umane e strumentali (DM 380/2000, Regola R06).',
          sourceRef: 'FAD ISS Tutorial 3 (p. 8) • Addendum E'
        },
        {
          label: 'Gerarchia tra Sintomo, Sospetto e Patologia Accertata',
          detail: 'Se alla dimissione la patologia causale è accertata (es. I21.0 IMA), non si codificano i sintomi prodromici. Se invece non è stata formulata una diagnosi definitiva, il sintomo o reperto anormale (Capitolo XVIII R00-R99) è selezionabile come principale (R12). Per l\'osservazione di sospetto escluso senza sintomi né patologia pregressa si utilizzano le categorie Z03-Z04 (R13).',
          sourceRef: 'FAD ISS Addendum E (pp. 2-3) • Tutorial 3 (pp. 10-11)'
        },
        {
          label: 'Rilevanza delle Secondarie e Sistema Daga-Asterisco',
          detail: 'Le diagnosi secondarie vanno registrate solo se hanno comportato monitoraggio dedicato, terapia specifica o prolungamento della degenza (non copiare tutta l\'anamnesi, R07). Nella SDO la sequenza daga-asterisco può essere invertita in asterisco-daga se la manifestazione è la principale responsabile delle cure (R09). Nel flusso SISM l\'asterisco è ammesso da solo (R10).',
          sourceRef: 'FAD ISS Addendum E (p. 1) • Tutorial 3 (p. 9) • ESPERTO (p. 5)'
        },
        {
          label: 'Condizioni di Obbligatorietà e Specificità Documentale',
          detail: 'Il codice Z37 (esito del parto) è obbligatorio nei ricoveri ostetrici con evento parto effettivo. I codici di resistenza antimicrobica (Z16) si applicano solo se documentati da antibiogramma. Non dedurre diagnosi da farmaci, singoli valori o CPAP: attestare sempre il riscontro clinico.',
          sourceRef: 'DM 23/10/2025 • FAD ISS NSIS-CLASS • ESPERTO (pp. 6-7)'
        }
      ]
    }
  ]
};
