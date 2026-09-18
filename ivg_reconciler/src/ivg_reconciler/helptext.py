APP_TITLE = "Guida – Riconciliazione GINO ↔ SDO"

HELP_TEXT = """GINO ↔ SDO RECONCILER — GUIDA RAPIDA

SCOPO
Il programma confronta i file GINO/ISTAT con le estrazioni SDO e produce due soli output operativi:
1) SCHEDE MANCANTI: episodi SDO per i quali non è stata trovata una scheda GINO/ISTAT corrispondente.
2) SCHEDE DA CORREGGERE: episodi identificati in modo univoco in cui uno o più dati non coincidono.

PRIMA DI INIZIARE
Caricare:
• i file GINO *_DOWNLOAD.csv relativi al periodo da controllare;
• i file SDO .xlsx IVG e/o aborto spontaneo relativi allo stesso periodo.
Non è necessario caricare i file *_TRACCIATO.csv.

1. CARICA FILE GINO CSV
È possibile selezionare più file contemporaneamente oppure aggiungerli in più passaggi.
La lista “File effettivamente caricati” mostra sempre quali file entreranno nel controllo.
Il pulsante “Svuota GINO” azzera solo i file GINO selezionati.

2. CARICA FILE SDO XLSX
Caricare le estrazioni SDO con residenza.
Anche in questo caso è possibile aggiungere più file in passaggi successivi.
Il pulsante “Svuota SDO” azzera solo i file SDO selezionati.

3. CONTROLLO PRELIMINARE DEL PERIODO
Prima del matching il programma verifica che:
• i trimestri presenti nei file GINO siano contigui;
• IVG e AS, se entrambi presenti, coprano lo stesso intervallo;
• il periodo dichiarato nei report SDO coincida con quello GINO.
Se il controllo non è superato, il matching NON viene eseguito.

4. ESEGUI VERIFICA
Il matching utilizza come item principali:
• data di nascita;
• residenza;
• compatibilità temporale con il ricovero.
La famiglia diagnostica SDO è un filtro obbligatorio:
• IVG: ICD9-CM 635.xx;
• aborto spontaneo: 632 / 634.xx.
Il DRG 380/381 non viene usato per distinguere IVG e aborto spontaneo.

SCHEDE MANCANTI
Una riga indica una SDO conclusa nel periodo per la quale non è stata trovata una scheda GINO compatibile.
Il programma riporta nosologico, DOB, residenza, ricovero, DRG e descrizione sintetica dell’episodio.
Prima della segnalazione vengono esclusi:
• seconde SDO dello stesso episodio IVG quando riconoscibili;
• ricoveri a cavallo della fine del periodo, che vengono classificati PENDING;
• casi già associati a una scheda da correggere.

SCHEDE DA CORREGGERE
Per ogni episodio viene indicato l’item specifico da verificare, ad esempio:
• DATA_NASCITA;
• RESIDENZA;
• DATA_EVENTO;
• TRIMESTRE/DUPLICATO;
• TIPO_INTERVENTO/PROCEDURA;
• MATCH NON DETERMINABILE.
Sono mostrati il valore GINO, il valore SDO e l’indicazione operativa.
Il programma non corregge automaticamente i dati.

AUDIT TECNICO
Contiene gli eventi che non devono essere confusi con schede mancanti: pending di fine periodo, seconde SDO dello stesso episodio, record scartati o match ambigui.

TESTO MAIL
Il programma prepara automaticamente una mail pronta da copiare e incollare per il reparto, con:
• schede da integrare;
• schede da correggere/verificare;
• spiegazione sintetica e puntuale per ogni episodio.
Usare “Copia testo mail negli appunti” per copiarla.

ESPORTA EXCEL
Crea un report con i fogli:
• SCHEDE_MANCANTI
• SCHEDE_DA_CORREGGERE
• AUDIT_TECNICO
• SINTESI
• TESTO_MAIL

INTERPRETAZIONE DEI RISULTATI
MATCH COMPLETO: nessuna azione.
Un solo item discordante con episodio univoco: verificare e correggere l’item indicato.
Più item discordanti o più candidati equivalenti: verifica documentale necessaria.
PENDING: attendere il periodo successivo, non segnalare come scheda mancante.

PRIVACY
L’elaborazione avviene localmente sul computer. Il programma non invia i file caricati a servizi esterni.

IN CASO DI DUBBIO
Non modificare i dati sulla sola base del suggerimento automatico: utilizzare sempre la documentazione clinica/originale per stabilire quale fonte debba essere corretta.
"""
