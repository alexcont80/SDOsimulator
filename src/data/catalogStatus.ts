/** Release gate: no official source files have been reconciled yet. */
export const CATALOG_STATUS = Object.freeze({
  complete: false,
  reconciled: false,
  release: null as string | null,
  sourceUrl: 'https://www.salute.gov.it/new/it/tema/assistenza-ospedaliera-sdo/documentazione-tecnica',
  reason: 'Cataloghi ufficiali completi non ancora importati e riconciliati. Ricerca limitata a un campione editoriale non validato; rilascio per codifica effettiva bloccato.'
});
