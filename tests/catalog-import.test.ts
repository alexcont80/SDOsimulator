import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {SOURCE_CATALOGS,OFFICIAL_CATALOG_DATA,isActiveOn} from '../src/data/officialCatalog';
import {searchCatalog,getCodeDetails} from '../src/services/catalogSearch';
const date='2026-09-16';
test('every ministerial source row is imported without loss',()=>{
 assert.deepEqual(SOURCE_CATALOGS.map(s=>s.rowCount),[14799,15185]);
 assert.equal(OFFICIAL_CATALOG_DATA.length,29984);
 for(const s of SOURCE_CATALOGS){
  assert.equal(createHash('sha256').update(JSON.stringify(s.rows)).digest('hex'),s.rowsSha256);
  const entries=OFFICIAL_CATALOG_DATA.filter(e=>e.system===s.system);assert.equal(entries.length,s.rows.length);
  for(const [i,e] of entries.entries()) {const row=s.rows[i];assert.equal(e.code,String(row[s.system==='CIPI'?6:3]));assert.equal(e.title,row[s.system==='CIPI'?5:4]);assert.equal(e.source?.row,s.firstRow+i);assert.equal(e.terminal,s.system==='CIPI'?row[4]==='Codificante':row[8]===1);}
 }
});
test('colecistite returns all 10 matching diagnostic rows, including the parent',()=>{
 const found=searchCatalog({query:'colecistite',system:'ICD-10-IM',date});
 assert.equal(found.length,10);
 for(const code of ['K80.0','K80.1','K80.2','K80.4','K80.5','K81','K81.0','K81.1','K81.8','K81.9'])assert.ok(found.some(e=>e.code===code),code);
 assert.equal(searchCatalog({query:'colecistite',system:'CIPI',date}).length,0);
 assert.equal(searchCatalog({query:'colecistite',terminalOnly:true,date}).length,9);
});
test('source validity governs historic and future search',()=>{
 assert.equal(searchCatalog({query:'',date:'2027-01-01'}).length,0);
 const changed=OFFICIAL_CATALOG_DATA.find(e=>e.validity.from==='2026-07-01')!;
 assert.ok(changed);assert.equal(isActiveOn(changed,'2026-06-30'),false);assert.equal(isActiveOn(changed,'2026-07-01'),true);
 const old=OFFICIAL_CATALOG_DATA.find(e=>e.source?.status==='Storico')!;
 assert.equal(isActiveOn(old,'2026-06-30'),true);assert.equal(isActiveOn(old,'2026-07-01'),false);
});
test('known exact IM code resolves with dated provenance',()=>{
 const e=getCodeDetails('k810','ICD-10-IM',date)!; assert.equal(e.title,'Colecistite acuta');assert.ok(e.source?.sha256);assert.equal(e.validity.version,'Gamma 2.2');
});
