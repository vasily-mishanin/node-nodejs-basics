import { Transform } from 'stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reversedText = chunk.toString().split('').reverse().join('');
      this.push(reversedText + '\n');
      callback();
    },
  });

  reverseTransform.on('error', (error) => {
    console.log(`Error when trnasform: ${error}`);
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
