import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const fileToRemovePath = path.join(__dirname, 'files', 'fileToRemove.txt');

  if (!existsSync(fileToRemovePath)) {
    throw new Error(`FS operation failed - ${fileToRemovePath} - NOT EXISTS`);
  } else {
    await fs.unlink(fileToRemovePath);
  }
};

await remove();
