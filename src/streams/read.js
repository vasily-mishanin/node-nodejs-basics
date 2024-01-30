import fs from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');
  const readableStream = fs.createReadStream(filePath);
  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk + '\n');
  });
  // Write your code here
};

await read();
