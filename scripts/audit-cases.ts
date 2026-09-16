import {CLINICAL_CASES} from '../src/data';
import {LEGACY_CATALOG_DATA} from '../src/data/catalog';
import {normalizeCode} from '../src/services/catalogSearch';
const findings=CLINICAL_CASES.flatMap(c=>[c.solution.icd10.primaryDiagnosis,...c.solution.icd10.secondaryDiagnoses,...c.solution.icd10.procedures].flatMap(item=>{
 const code=normalizeCode(item.code);
 const syntax=item.system==='ICD-10-IM'?/^[A-Z][0-9]{2}[A-Z0-9]{0,3}$/:/^[0-9]{2}[A-Z0-9]{4}$/;
 return !syntax.test(code)?[{caseId:c.id,code:item.code,system:item.system,reason:'Formato incompatibile; possibile contaminazione da altra classificazione. Nessuna conversione automatica.'}]:[];
}));
console.log(JSON.stringify({cases:CLINICAL_CASES.length,legacyEntries:LEGACY_CATALOG_DATA.length,officialCatalogComplete:false,findings,notice:'Controllo sintattico, non validazione clinica né riconciliazione completa. Anche codici sintatticamente compatibili possono essere errati.'},null,2));
