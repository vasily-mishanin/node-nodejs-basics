import fs from 'fs';

const create = async () => {
  if (!fs.existsSync('./files/fresh.txt')) {
    fs.writeFile('./files/fresh.txt', 'I am fresh and young', () => {
      console.log('New file created');
    });
  } else {
    throw Error('FS operation failed - already exists');
  }
};

await create();
