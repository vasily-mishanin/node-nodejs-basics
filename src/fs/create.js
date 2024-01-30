import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fresh.txt');

  if (!fs.existsSync(filePath)) {
    fs.writeFile(filePath, 'I am fresh and young', () => {
      console.log('New file created');
    });
  } else {
    throw Error('FS operation failed - ALREADY EXISTS');
  }
};

await create();
