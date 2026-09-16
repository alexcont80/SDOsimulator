import {CATALOG_STATUS} from '../src/data/catalogStatus';
// Deliberate blocker: replace only after source reconciliation AND case review.
console.error('RILASCIO BLOCCATO: '+CATALOG_STATUS.reason);
console.error('Servono cataloghi integrali con provenienza/versione, riconciliazione dei conteggi e revisione clinica dei casi.');
process.exitCode=1;
