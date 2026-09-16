import {gunzipSync, strFromU8} from 'fflate';
import payload from './official-catalog.payload.json';
import type {CatalogEntry} from '../types';

type Cell = string | number | null;
export interface SourceCatalog {system: CatalogEntry['system']; file:string; release:string; url:string; sha256:string; sheet:string; firstRow:number; rowCount:number; rowsSha256:string; rows:Cell[][]; headers:Cell[]; preface:Cell[][]; terminalCount:number; statusCounts:Record<string,number>}
// The payload preserves all source cells, headers, attribution and historic rows.
export const SOURCE_CATALOGS: SourceCatalog[] = JSON.parse(strFromU8(gunzipSync(Uint8Array.from(atob(payload.payload),c=>c.charCodeAt(0)))));
const text=(v:Cell)=>v==null?'':String(v);
const lines=(v:Cell)=>text(v).split('\n').filter(Boolean);
function period(value:Cell) {
 const parts=text(value).match(/(\d{2})\/(\d{2})\/(\d{4})\s*-\s*(\d{2})\/(\d{2})\/(\d{4})/);
 if(!parts) throw new Error('Periodo ministeriale non riconosciuto');
 return {from:`${parts[3]}-${parts[2]}-${parts[1]}`,to:`${parts[6]}-${parts[5]}-${parts[4]}`};
}
export const OFFICIAL_CATALOG_DATA:CatalogEntry[]=SOURCE_CATALOGS.flatMap(source=>source.rows.map((r,index)=>{
 const icd=source.system==='ICD-10-IM'; const code=text(r[icd?3:6]);const type=text(r[icd?5:4]).trim();
 const terminal=icd?r[8]===1:type==='Codificante';
 return {
  code,title:text(r[icd?4:5]),system:source.system,
  type: icd?(type==='chapter'?'Capitolo':type==='block'?'Blocco':terminal?'Codificante':'Rubrica'):(terminal?(code.endsWith('W')?'Complementare W':'Codificante'):'Rubrica'),
  terminal,hierarchy:icd?{parentCode:type==='chapter'?undefined:text(r[6])}:{chapter:text(r[3])},
  inclusions:lines(r[icd?12:9]),exclusions:lines(r[icd?13:10]),
  notes:icd?[...lines(r[11]),...lines(r[15]),...lines(r[16]),...lines(r[17])]:lines(r[11]),
  daggerType:icd?(r[9]===1?'esplicita':r[9]===2?'possibile':'nessuna'):'nessuna',isAsterisk:icd&&r[10]===1,
  associatedCodes:icd?text(r[14]).split(';').filter(Boolean):[],
  transcodingICD9:text(r[icd?18:7]),ahrqCategory:icd?undefined:text(r[8]),
  validity:{...period(r[icd?19:12]),version:source.release},
  source:{url:source.url,sheet:source.sheet,row:source.firstRow+index,sha256:source.sha256,id:text(r[2]),status:text(r[1]),sourceType:type}
 } as CatalogEntry;
}));
export const isActiveOn=(entry:CatalogEntry,date:string)=>{
 if(!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
 const time=Date.parse(date+'T00:00:00Z');
 return Number.isFinite(time)&&new Date(time).toISOString().slice(0,10)===date&&entry.validity.from<=date&&date<=entry.validity.to;
};
export const todayISO=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
