import fs from 'node:fs';

const read = async () => {
  const readableStream = fs.createReadStream('./files/fileToRead.txt');
  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk + '\n');
  });
  // Write your code here
};

await read();
