const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);
console.log(
  "Now you back in the Main Procces. Type and press 'Enter'. Child Process will receive your message..."
);

const echoInput = (chunk) => {
  const chunkStringified = chunk.toString();
  if (chunkStringified.includes('CLOSE')) process.exit(0);
  process.stdout.write(
    `Child: Received from master process: ${chunk.toString()}\n`
  );
};

process.stdin.on('data', echoInput);
