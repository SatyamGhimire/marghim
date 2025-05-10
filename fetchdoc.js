//npm install googleapis first

import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// Service Account Key JSON File
const SERVICE_ACCOUNT_FILE = 'your-json-file-from-google-api-setup.json';

// Folder IDs
const WORK_FOLDER_ID = 'YOURGOOGLEDRIVEFOLDERID'; // Replace with your Work Folder ID
const OUTPUT_FOLDER_PATH = './files'; // Local folder where text files will be saved

// Authenticate using the Service Account
const auth = new google.auth.GoogleAuth({
  keyFile: SERVICE_ACCOUNT_FILE,
  scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/documents.readonly',
  ],
});

const driveService = google.drive({ version: 'v3', auth });
const docsService = google.docs({ version: 'v1', auth });

// Step 1: List all files in the Google Drive folder
async function listFilesInFolder(folderId) {
  const res = await driveService.files.list({
    q: `'${folderId}' in parents and mimeType = 'application/vnd.google-apps.document'`,
    fields: 'files(id, name)',
  });

  return res.data.files;
}

// Step 2: Fetch the content of a Google Doc
async function getDocumentContent(docId) {
  const res = await docsService.documents.get({
    documentId: docId,
  });

  const content = res.data.body.content;
  let textContent = '';

  content.forEach(element => {
    if (element.paragraph) {
      element.paragraph.elements.forEach(paragraphElement => {
        if (paragraphElement.textRun) {
          textContent += paragraphElement.textRun.content;
        }
      });
    }
  });

  return textContent;
}

// Step 3: Save the content to a text file
async function saveDocAsTextFile(docId, fileName) {
  const docContent = await getDocumentContent(docId);
  const filePath = path.join(OUTPUT_FOLDER_PATH, `${fileName}.txt`);
  fs.writeFileSync(filePath, docContent);
  console.log(`Saved: ${fileName}`);
}

// Step 4: Process all documents and save their content
async function processDocuments() {
  // Ensure output folder exists
  if (!fs.existsSync(OUTPUT_FOLDER_PATH)) {
    fs.mkdirSync(OUTPUT_FOLDER_PATH);
  }

  const files = await listFilesInFolder(WORK_FOLDER_ID);

  for (const file of files) {
    const { id, name } = file;
    await saveDocAsTextFile(id, name);
  }

  console.log('All documents processed.');
}

// Step 5: Run the processing function
processDocuments().then(() => {
  console.log('Processing completed.');
}).catch(err => {
  console.error('Error processing documents:', err);
});
