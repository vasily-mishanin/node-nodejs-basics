const parseArgs = () => {
  const args = process.argv.slice(2);
  const printItems = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      printItems.push(`${args[i]} is ${args[i + 1]}`);
      i++;
    } else {
      printItems.push(args[i]);
    }
  }

  console.log(printItems.join(', '));
};

parseArgs();
