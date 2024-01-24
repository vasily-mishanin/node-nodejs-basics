import { createHash } from 'node:crypto';
import fs from 'fs';

const calculateHash = async () => {
  return new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    const readableStream = fs.createReadStream(
      './files/fileToCalculateHashFor.txt'
    );

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
