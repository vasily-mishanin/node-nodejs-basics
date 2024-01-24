import fs from 'fs';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');
  if (!fs.existsSync(fileToReadPath)) {
    throw new Error(`FS operation failed - ${fileToReadPath} NOT EXISTS`);
  } else {
    readAndPrintFile(fileToReadPath);
  }
};

await read();

async function readAndPrintFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error('File you attempt to read does not exist: ' + filePath);
  }

  try {
    const data = await readFile(filePath, { encoding: 'utf-8' });
    console.log(data);
  } catch (error) {
    console.log(err);
  }
}
