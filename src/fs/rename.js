import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = path.join(__dirname, 'files', 'properFilename.md');

  if (!existsSync(oldPath)) {
    throw new Error(`FS operation failed - ${oldPath} NOT EXISTS`);
  } else if (existsSync(newPath)) {
    throw new Error(`FS operation failed - ${newPath} ALREADY EXISTS`);
  } else {
    fs.rename(oldPath, newPath);
  }
};

await rename();
