# GINO ↔ SDO Reconciler

Applicazione locale per riconciliare i flussi GINO/ISTAT con le SDO IVG e aborto spontaneo.

## Output operativo

Il report contiene due fogli principali:

- **SCHEDE_MANCANTI**: SDO concluse nel periodo senza una corrispondente scheda GINO dopo esclusione di riammissioni dello stesso episodio e ricoveri a cavallo del trimestre.
- **SCHEDE_DA_CORREGGERE**: episodi univocamente identificati in cui uno o più item discordano (data di nascita, residenza, data evento, trimestre, tipo intervento/procedura).

L'applicazione elabora i file **solo in locale** e non richiede diritti di amministratore.

## Input

- uno o più `*_DOWNLOAD.csv` GINO IVG/AS;
- uno o più file `.xlsx` SDO contenenti data di nascita, accettazione, dimissione, diagnosi e residenza.

## Regole di sicurezza

- IVG: diagnosi ICD9-CM `635.xx`; AS: `632`/`634.xx` in qualsiasi posizione;
- DRG 380/381 non viene usato come filtro identificativo;
- match primario su DOB + residenza + compatibilità temporale;
- se un solo item discordante e gli altri blindano l'episodio, l'item viene inviato in **SCHEDE_DA_CORREGGERE**;
- con più item discordanti o candidati equivalenti il sistema non corregge automaticamente;
- le riammissioni IVG ravvicinate con `63591` e complicazione 5 vengono trattate come SDO secondarie dello stesso episodio;
- ricoveri che superano la fine del trimestre sono `PENDING`, non schede mancanti.

## Build Windows portable

La GitHub Action produce un singolo `GINO_SDO_Reconciler.exe` con PyInstaller (`--onefile --windowed`). Il file può essere eseguito da una cartella utente senza installazione e senza privilegi amministrativi.

Il workflow scarica al build l'elenco ufficiale dei comuni italiani dal permalink ISTAT e lo incorpora nell'eseguibile.


## Controllo preliminare dei periodi

Prima del matching l'applicazione verifica in modalità fail-closed che:
- per ogni flusso presente (IVG/AS) esistano sia i file GINO sia i file SDO;
- i trimestri dichiarati nei CSV GINO siano contigui;
- il periodo dichiarato nei report XLSX SDO sia riconoscibile (es. `GEN-GIU 2026`, `1 sem 2026`);
- l'intervallo GINO coincida esattamente con l'intervallo SDO;
- i flussi elaborati nello stesso run coprano lo stesso periodo.

In caso di incoerenza il matching non viene eseguito.

## Testo mail

Dopo il controllo viene generato automaticamente un testo mail pronto da copiare, con:
- elenco puntuale delle **schede da integrare**;
- elenco delle **schede da correggere/verificare**;
- identificativi episodio, valori discordanti e azione richiesta.

Il testo è disponibile sia nell'interfaccia (tab `TESTO MAIL`, pulsante copia negli appunti) sia nel foglio Excel `TESTO_MAIL`.
