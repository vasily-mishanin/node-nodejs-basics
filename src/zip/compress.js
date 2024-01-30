import zlib, { gzip } from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const readPath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
  const writePath = path.resolve(__dirname, 'files', 'archive.gz');
  const gZip = zlib.createGzip();
  const readStream = fs.createReadStream(readPath);
  const writeStream = fs.createWriteStream(writePath);
  readStream.pipe(gZip).pipe(writeStream);
};

await compress();
