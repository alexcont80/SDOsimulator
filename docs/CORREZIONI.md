# Revisione TutorSDO — 16 settembre 2026

## Esito
Il repository contiene 160 casi e soltanto 41 voci di catalogo editoriale: non è un catalogo completo. L'audit sintattico rileva 450 occorrenze di codici incompatibili con il formato atteso nelle soluzioni ICD-10-IM/CIPI. Il dettaglio riproducibile è in audit-cases.json. Le occorrenze non equivalgono a 450 codici distinti e non dimostrano, da sole, la provenienza americana. I codici sintatticamente plausibili restano da validare.

## Correzioni
- Ricerca con filtro terminale anche a campo vuoto, normalizzazione dei codici e degli accenti, tolleranza a un refuso nelle parole. Nessuna generazione di codici mancanti.
- Selezione della ricerca azzerata cambiando query/filtri; inserimento presentato come candidato editoriale.
- Controllo effettivo delle risposte: obbligatorietà, formato e duplicati. Separazione tra errore certo e impossibilità di verifica. Nessun punteggio inventato.
- Soluzioni preesistenti consultabili come bozze da revisionare, senza compilazione automatica della scheda.
- Nessuna dispnea dedotta da diagnosi ignota, nessun infarto escluso dedotto da sospetto generico, nessun accesso TAVI predefinito, nessuna coronarografia aggiunta alla PTCA, nessuna resistenza specifica dedotta dal checkbox.
- CPAP e insufficienza respiratoria generica non determinano diagnosi di insufficienza acuta. Complemento W senza procedura risolta eliminato; l'associazione resta da verificare.
- Proposte guidate non applicabili alla scheda finché cataloghi e regole non sono riconciliati. Esportazioni delle soluzioni marcate BOZZA NON VALIDATA.

## Cosa manca per il requisito completo e validato
La pagina ministeriale https://www.salute.gov.it/new/it/tema/assistenza-ospedaliera-sdo/documentazione-tecnica ha restituito una verifica browser durante l'acquisizione. I file integrali non sono stati acquisiti. I mapping didattici non sostituiscono i cataloghi.

Acquisire i file originali ICD-10-IM e CIPI, con indice alfabetico e sistematico, conservando URL, data di acquisizione, release, periodo di validità effettivo, licenza e SHA-256. Non assumere validità da etichette hardcoded nel campione. Riconciliare tutte le righe con le fonti, separando rubriche e codici terminali; preservare inclusioni, esclusioni, note, gerarchie e associazioni. Controllare duplicati, riferimenti orfani e conteggi per sistema e livello. La somiglianza del codice non autorizza conversioni da ICD-10-CM/PCS.

Revisionare ogni soluzione dei 160 casi contro fonte e pagina, con responsabilità del revisore. Validare regole per data, flusso e contesto regionale; nessuna applicazione indiscriminata di regole SDO a PS/OBI o SISM. Non promettere DRG/CC/MCC senza classificazione e grouper italiano applicabile verificati.

## Verifica tecnica
14 test di regressione superati; TypeScript e build Vite superati. Vite segnala bundle oltre 500 kB. Non è stata effettuata una prova interattiva completa del ramo modificato né una validazione clinica. `npm run check:release` fallisce intenzionalmente: è un controllo manuale, non un blocco della piattaforma di deployment. Non distribuire questo ramo come prodotto pronto alla codifica effettiva.
