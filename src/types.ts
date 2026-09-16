export interface Specialty {
  id: string;
  name: string;
  code: string;
  iconName: string;
  description: string;
}

export interface OfficialCodeItem {
  code: string;
  description: string;
  system: 'ICD-10-IM' | 'CIPI' | 'ICD-9-CM';
  category?: string;
  notes?: string;
  terminal?: boolean;
}

export interface CatalogEntry {
  code: string;
  title: string;
  system: 'ICD-10-IM' | 'CIPI';
  type: 'Capitolo' | 'Blocco' | 'Rubrica' | 'Sottocategoria' | 'Peculiarità IM' | 'Codificante' | 'Complementare W';
  terminal: boolean;
  hierarchy: {
    chapter?: string;
    block?: string;
    category?: string;
    parentCode?: string;
  };
  inclusions?: string[];
  exclusions?: string[];
  notes?: string[];
  synonyms?: string[];
  daggerType?: 'esplicita' | 'possibile' | 'nessuna';
  isAsterisk?: boolean;
  associatedCodes?: string[];
  approach?: string;
  transcodingICD9?: string;
  ahrqCategory?: string;
  validity: {
    from: string;
    to: string;
    version: string;
  };
  specialtyTags?: string[];
}

export interface ClinicalCase {
  id: string;
  specialtyId: string;
  title: string;
  caseNumber?: number;
  complexity?: 'Base' | 'Intermedio' | 'Avanzato (CC/MCC)';
  subCategory?: string;
  clinicalScenario: {
    patientAgeSex: string;
    admissionReason: string;
    anamnesis: string;
    hospitalCourse: string;
    proceduresConducted: string;
    dischargeStatus: string;
  };
  documentationGapsWarning?: string;
  solution: {
    icd10: {
      primaryDiagnosis: OfficialCodeItem;
      secondaryDiagnoses: OfficialCodeItem[];
      procedures: OfficialCodeItem[];
    };
    icd9Comparison: {
      primaryDiagnosis: OfficialCodeItem;
      secondaryDiagnoses: OfficialCodeItem[];
      procedures: OfficialCodeItem[];
    };
    rulesAppliedExplanation: string[];
    commonCognitiveErrors: string[];
    chartDocumentationAdvice: string;
  };
}

export interface UserSubmission {
  primaryDiagnosisCode: string;
  primaryDiagnosisDesc: string;
  secondaryDiagnoses: { code: string; desc: string }[];
  procedureCodes: { code: string; desc: string }[];
}

export interface EvaluationResult {
  score: number;
  primaryDiagnosisMatch: boolean;
  secondaryMatchCount: number;
  secondaryTotal: number;
  proceduresMatchCount: number;
  proceduresTotal: number;
  feedbackRemarks: string[];
}

export interface GuidedCaseExample {
  id: string;
  titolo: string;
  branca: string;
  testo: string;
  scelte_iniziali: {
    setting: string;
    diagnosi_finale?: string;
    scompenso?: string;
    sintomo?: string;
    insufficienza_respiratoria?: string;
    rilevanza_episodio?: string;
    procedure?: string[];
  };
  chiedere: string[];
  atteso: string;
  regole: string[];
  final_code: null | string;
  automatic_scoring_enabled: boolean;
  stato: string;
  references: {
    source_id: string;
    pdf_page: number;
    chunk_id: string;
  }[];
}

export interface GuidedProposalResult {
  primaryDiagnosis: {
    code: string;
    title: string;
    rationale: string;
    system: 'ICD-10-IM';
    source: string;
  } | null;
  secondaryDiagnoses: {
    code: string;
    title: string;
    rationale: string;
    system: 'ICD-10-IM';
    source: string;
    confirmed: boolean;
  }[];
  procedures: {
    code: string;
    title: string;
    rationale: string;
    system: 'CIPI';
    source: string;
    isComplementaryW?: boolean;
    confirmed: boolean;
  }[];
  missingInformation: string[];
  rulesApplied: string[];
  scoringStatus: {
    scoringEnabled: boolean;
    reason: string;
  };
}
