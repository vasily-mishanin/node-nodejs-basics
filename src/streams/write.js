import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');
  const writableStream = fs.createWriteStream(filePath);
  console.log('Start writing text and hit "Enter":');
  process.stdin.on('data', (chunk) => {
    writableStream.write(chunk);
  });
};

await write();
