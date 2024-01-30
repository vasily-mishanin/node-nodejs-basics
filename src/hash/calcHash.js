import { createHash } from 'node:crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.resolve(
    __dirname,
    'files',
    'fileToCalculateHashFor.txt'
  );

  return new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    const readableStream = fs.createReadStream(filePath);

    readableStream.on('data', (chunk) => {
      hash.update(chunk);
    });

    readableStream.on('end', () => {
      const hexHash = hash.digest('hex');
      resolve(hexHash);
    });

    readableStream.on('error', (error) => {
      reject(error);
    });
  });
};

await calculateHash().then((hash) => console.log(hash));
