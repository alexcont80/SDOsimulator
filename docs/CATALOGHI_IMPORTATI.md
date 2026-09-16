# Importazione ministeriale — 16 settembre 2026

Supera il precedente blocco di acquisizione riportato in CORREZIONI.md. I download sono riusciti dal browser. La PR usa ora i due elenchi sistematici integrali, non il campione di 41 voci.

| Fonte | Righe importate | Righe attive al 16/09/2026 | Terminali, incluse righe storiche |
|---|---:|---:|---:|
| ICD-10-IM Gamma 2.2, maggio 2026 | 14.799 | 14.783 | 12.051 |
| CIPI Gamma 2.1, maggio 2026 | 15.185 | 15.182 | 10.691 |
| Totale | 29.984 | 29.965 | 22.742 |

Alla data di riferimento i terminali attivi sono 22.728. Righe e codici terminali non sono la stessa misura. Nessuna deduzione della terminalità dal numero di caratteri: ICD usa il flag della fonte, CIPI il tipo “Codificante”.

## Copertura e limiti
Importazione completa rispetto ai due XLSX identificati e verificati. L'ICD-10-IM è esplicitamente rilasciato SENZA capitolo XX. I due file non includono l'indice alfabetico. Sono prototipi per la sperimentazione prevista dal DM 23 ottobre 2025, non una dichiarazione di adozione indistinta in tutti i contesti. Non definire l'intera classificazione o l'app “completa e validata”.

15 riferimenti al padre nell'ICD non risolvono esattamente una voce della fonte (gruppi M05–M14 e T20–T25). Sono conservati e segnalati nel rapporto, senza correggere arbitrariamente il Ministero. Il foglio CIPI non espone un padre: si mostra la sezione senza inventare una gerarchia.

## Tracciabilità e integrità
`catalog-manifest.json` registra URL, SHA-256 del file originale, foglio, riga iniziale, conteggi e hash delle celle estratte. `src/data/official-catalog.payload.json` contiene in gzip/base64 tutte le celle delle colonne effettivamente valorizzate, intestazioni, attribuzioni/licenze e righe storiche. La compressione non altera i valori. Verificata anche l'assenza di valori oltre le colonne importate.

Rigenerazione: scaricare i due file agli URL del manifest mantenendo i nomi, installare openpyxl, eseguire `python scripts/import-official-catalogs.py DIRECTORY`. Il confronto hash avverte se il Ministero sostituisce un file: confrontare il nuovo manifest prima di accettare aggiornamenti. Licenza CC BY-NC-ND 4.0 e attribuzioni conservate integralmente, consultabili nell'interfaccia. Nessuna autorizzazione aggiuntiva alla redistribuzione viene dichiarata dall'app.

## Ricerca e validazione
Ricerca per codice, titolo e inclusioni; normalizzazione di accenti/punti e refuso singolo nelle parole. Nessun sinonimo inventato e nessuna ricerca fuzzy sui codici. La data selezionata filtra il periodo di validità, incluse le voci storiche. Paginazione da 50 con conteggio totale, senza tagliare i risultati a 40/200. Dettagli con fonte, release, foglio, riga, inclusioni, esclusioni, note, daga/asterisco e associazioni. Gli eventuali termini “senza colecistite” restano tra i risultati testuali: la ricerca non decide l'appropriatezza clinica.

“Colecistite” alla data 16/09/2026 trova K80.0, K80.1, K80.2, K80.4, K80.5, K81, K81.0, K81.1, K81.8, K81.9. Il filtro terminali esclude K81. Le procedure si cercano separatamente, ad esempio “colecistectomia”.

## Casi
Il nuovo audit di appartenenza trova 641 occorrenze delle soluzioni non presenti negli elenchi alla data di riferimento. È un controllo diverso dalle precedenti 450 incompatibilità sintattiche: i conteggi NON si sommano. L'assenza può dipendere anche dalla copertura della fonte. Nessuna sostituzione per analogia e nessuna riattivazione dei punteggi o delle proposte guidate.

## Verifiche
18 test automatici superati: integrità di tutte le celle estratte tramite hash, una voce per ogni riga, fedeltà di codici/titoli/terminalità, ricerca colecistite, normalizzazione, refusi, filtri, confini di validità e regressioni del motore guidato. TypeScript e build superati. Nessuna validazione clinica dei 160 casi o prova interattiva completa del ramo. Bundle ancora da ottimizzare. `npm run check:release` resta intenzionalmente negativo per copertura e revisione clinica mancanti.
