import zlib, { gzip } from 'zlib';
import fs from 'fs';

const compress = async () => {
  const gZip = zlib.createGzip();
  const readStream = fs.createReadStream('./files/fileToCompress.txt');
  const writeStream = fs.createWriteStream('./files/archive.gz');
  readStream.pipe(gZip).pipe(writeStream);
};

await compress();
