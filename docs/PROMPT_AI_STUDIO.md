Aggiorna TutorSDO usando il ramo main di alexcont80/SDOsimulator. Preserva UI, 8 branche, 160 casi e Drive. Leggi prima docs/CATALOGHI_IMPORTATI.md e catalog-manifest.json: i due XLSX ministeriali sono già importati integralmente (29.984 righe), con hash e provenienza. Non tornare al campione legacy di 41 voci e non generare codici con l'AI.

Mantieni ricerca paginata per codice/testo/inclusioni, refusi nelle parole, filtro di validità per data, terminalità della fonte e riferimenti puntuali. Test minimo: “colecistite” restituisce 10 voci ICD-10-IM, 9 con filtro terminali, al 16/09/2026. Non trattare ogni risultato testuale come appropriato clinicamente.

Completa la consultazione delle cause esterne e dell’indice alfabetico con fonti tracciate, rispettando la distinzione tra codici E ICD-9-CM per la sperimentazione e capitolo XX ICD-10-IM informativo (appendice ministeriale, pagina 2). Esamina i 15 riferimenti gerarchici non risolti senza modificarli arbitrariamente. Revisiona le 641 occorrenze delle soluzioni non trovate nell'audit, senza conversioni automatiche da classificazioni americane. La presenza in catalogo non dimostra la correttezza del caso. Riattiva punteggi e proposte soltanto dopo revisione documentata di regole, fonti, date e flussi.

Esegui npm test, npm run lint, npm run build e una prova interattiva prima del deployment. Il controllo di rilascio resta negativo finché mancano copertura e revisione clinica. L'app pubblicata non è stata aggiornata da questa PR.

Il preview aggiornato deve mostrare “Cataloghi 2026.09.16-r2” e “29.984 righe ministeriali caricate” in alto. Se manca, non hai importato il codice aggiornato. Leggi docs/AVVIO_PREVIEW.md.
