import fs from 'node:fs';

const write = async () => {
  const writableStream = fs.createWriteStream('./files/fileToWrite.txt');
  console.log('Start writing text and hit "Enter":');
  process.stdin.on('data', (chunk) => {
    writableStream.write(chunk);
  });
};

await write();
