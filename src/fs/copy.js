import fs from 'fs';
import { mkdir, readdir, copyFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const sourcePath = path.resolve(__dirname, 'files');
  const destinationPath = path.resolve(__dirname, 'files_copy');

  if (!fs.existsSync(sourcePath)) {
    throw new Error('FS operation failed - /files not exists ');
  } else if (fs.existsSync(destinationPath)) {
    throw new Error('FS operation failed - /files_copy was already created');
  } else {
    copyFiles(sourcePath, destinationPath);
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
