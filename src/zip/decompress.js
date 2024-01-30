import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const readPath = path.resolve(__dirname, 'files', 'archive.gz');
  const writePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
  if (!fs.existsSync(readPath)) {
    throw Error(`Not found: ${readPath}`);
  }
  const unZip = zlib.createUnzip();
  const readStream = fs.createReadStream(readPath);
  const writeStream = fs.createWriteStream(writePath);
  readStream.pipe(unZip).pipe(writeStream);
};

await decompress();
