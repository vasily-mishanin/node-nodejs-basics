import fs from 'fs';
import { mkdir, readdir, copyFile } from 'fs/promises';

const copy = async () => {
  if (!fs.existsSync('./files')) {
    throw new Error('FS operation failed - /files not exists ');
  } else if (fs.existsSync('./files_copy')) {
    throw new Error('FS operation failed - /files_copy was already created');
  } else {
    copyFiles('./files', './files_copy');
  }
};

await copy();

async function copyFiles(sourceDir, destinationDir) {
  if (!fs.existsSync(sourceDir)) {
    throw new Error('Source directory does not exist: ' + sourceDir);
  }

  if (!fs.existsSync(destinationDir)) {
    mkdir(destinationDir);
  }

  const files = await readdir(sourceDir, (err, files) => {
    if (err) {
      throw new Error(err);
    }
    return files;
  });

  try {
    for (const file of files) {
      await copyFile(`${sourceDir}/${file}`, `${destinationDir}/${file}`);
      //console.log('copy - ', file); // check the order
    }
    console.log('Files successfully copied');
  } catch (err) {
    console.log('ERROR while copying files: ', err);
  }
}
