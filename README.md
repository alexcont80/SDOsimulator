# TutorSDO

Il codice aggiornato integra gli elenchi ministeriali ICD-10-IM 2.2 e CIPI 2.1: 29.984 righe, incluse rubriche e righe storiche.

Il preview corretto mostra **Cataloghi 2026.09.16-r2** e **29.984 righe ministeriali caricate** in alto. Dopo l'integrazione della PR #1, importare il ramo **main**.

- [Avvio e verifica del preview](docs/AVVIO_PREVIEW.md)
- [Fonti, conteggi e copertura](docs/CATALOGHI_IMPORTATI.md)
- [Prompt per AI Studio](docs/PROMPT_AI_STUDIO.md)

19 test automatici superati, incluso il componente di ricerca con input e filtri in un ambiente DOM simulato. Comandi: `npm test`, `npm run lint`, `npm run build`.

Il simulatore clinico resta in revisione. L'importazione del repository non aggiorna automaticamente un progetto AI Studio già copiato. Consultazione delle cause esterne e indice alfabetico ancora da integrare secondo le rispettive regole del flusso.
