import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
  if (!fs.existsSync('./files/archive.gz')) {
    throw Error('Not found: ./files/archive.gz');
  }
  const unZip = zlib.createUnzip();
  const readStream = fs.createReadStream('./files/archive.gz');
  const writeStream = fs.createWriteStream('./files/fileToCompress.txt');
  readStream.pipe(unZip).pipe(writeStream);
};

await decompress();
