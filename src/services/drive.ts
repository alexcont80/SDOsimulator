import { getAccessToken } from './auth';

export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  createdTime?: string;
  modifiedTime?: string;
  webViewLink?: string;
}

/**
 * Upload a text/markdown file (Debriefing SDO or Audit Note) to the user's Google Drive.
 */
export async function uploadSdoReportToDrive(
  fileName: string,
  content: string,
  description = 'Report di addestramento e debriefing codifica SDO ICD-10-IM / CIPI'
): Promise<DriveFile> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Autenticazione richiesta. Effettua prima l\'accesso con Google per salvare su Google Drive.');
  }

  const metadata = {
    name: fileName.endsWith('.txt') || fileName.endsWith('.md') ? fileName : `${fileName}.txt`,
    mimeType: 'text/plain',
    description,
  };

  const boundary = '-------314159265358979323846';
  const delimiter = `\r\n--${boundary}\r\n`;
  const closeDelim = `\r\n--${boundary}--`;

  const multipartRequestBody =
    delimiter +
    'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
    JSON.stringify(metadata) +
    delimiter +
    'Content-Type: text/plain; charset=UTF-8\r\n\r\n' +
    content +
    closeDelim;

  const response = await fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,mimeType,webViewLink,createdTime',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': `multipart/related; boundary=${boundary}`,
      },
      body: multipartRequestBody,
    }
  );

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Errore salvataggio Google Drive: ${response.statusText}`);
  }

  return await response.json();
}

/**
 * List files created by this app in Google Drive.
 */
export async function listSdoReportsFromDrive(): Promise<DriveFile[]> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('Token non disponibile');
  }

  const query = encodeURIComponent("trashed = false and mimeType = 'text/plain'");
  const response = await fetch(
    `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name,mimeType,webViewLink,createdTime)&orderBy=createdTime desc&pageSize=20`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `Errore lettura Google Drive: ${response.statusText}`);
  }

  const data = await response.json();
  return data.files || [];
}
