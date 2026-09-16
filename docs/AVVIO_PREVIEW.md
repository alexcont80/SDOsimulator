# Preview del codice aggiornato

Il vecchio main era rimasto al codice iniziale con un campione di 41 voci, mentre i cataloghi erano nel ramo fix/cataloghi-validazione. La PR #1 viene integrata in main per rendere disponibile la stessa base nell'importazione predefinita da GitHub.

Dopo la nuova importazione del ramo main, il preview deve mostrare in alto:

- Cataloghi 2026.09.16-r2
- 29.984 righe ministeriali caricate
- ICD-10-IM 2.2 / CIPI 2.1

Il pulsante “Cerca nei cataloghi” apre la consultazione indipendentemente dal caso selezionato. Al 16/09/2026, senza filtro terminali, “colecistite” produce 10 risultati ICD. Con filtro terminali ne produce 9. “K81” restituisce la rubrica e i quattro figli. Le procedure si cercano con “colecistectomia”. Le righe storiche si consultano impostando una data compatibile.

Se questi indicatori mancano, il preview non ha caricato questo codice: verificare branch e commit importati, non reintegrare una lista generata dal modello. La sola integrazione GitHub non aggiorna automaticamente un progetto AI Studio già copiato. L'URL del preview dell'utente non è stato fornito: non si dichiara verificata quella specifica istanza.

## Copertura delle cause esterne
L'appendice ministeriale ICD-10-IM gamma 2.1, pagina PDF 2, prescrive durante la sperimentazione l'uso dei codici E ICD-9-CM anche nei flussi sperimentali con diagnosi ICD-10-IM. Il capitolo XX ICD-10-IM è fornito per finalità informative e per il periodo successivo. Non confondere l'assenza dal sistematico XLS con il permesso di sostituire quei codici nel flusso sperimentale.

Fonte: https://www.salute.gov.it/new/sites/default/files/2026-02/2.APPENDICI_ELENCO_SIST_ICD-10-IM_V.GAMMA_2.1.pdf

Resta da integrare in modo separato la consultazione di tali cause esterne e dell'indice alfabetico. I casi clinici non sono ancora validati: importazione completa dei due XLS e validazione del simulatore sono verifiche distinte.
