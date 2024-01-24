import fs from 'fs';
import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const folderToListPath = path.join(__dirname, 'files');
  if (!fs.existsSync(folderToListPath)) {
    throw new Error(`FS operation failed - ${folderToListPath} NOT EXISTS`);
  } else {
    logFileNames(folderToListPath);
  }
};

await list();

async function logFileNames(folderPath) {
  if (!fs.existsSync(folderPath)) {
    throw new Error('Directory does not exist: ' + folderPath);
  }

  const files = await readdir(folderPath, (err, files) => {
    if (err) {
      throw new Error(err);
    }
    return files;
  });

  files.forEach((fileName, i) => console.log(`${i + 1} - ${fileName}`));
}
