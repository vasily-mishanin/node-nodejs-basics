import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
  const numCores = os.cpus().length;
  console.log('Number of logical CPU: ', numCores);
  const results = [];
  const workerPromises = [];

  const createWorker = (workerData, index) => {
    return new Promise((resolve) => {
      const worker = new Worker('./worker.js', { workerData });

      worker.on('message', (result) => {
        results[index] = { status: 'resolved', data: result };
        resolve();
      });

      worker.on('error', (error) => {
        results[index] = { status: 'error', data: null };
        resolve();
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          results[index] = { status: 'error', data: null };
        }
        resolve();
      });
    });
  };

  for (let i = 0; i < numCores; i++) {
    const workerData = i + 10;
    workerPromises.push(createWorker(workerData, i));
  }

  // wait for all workers to finish
  return Promise.all(workerPromises).then(() => {
    const sortedByOrder = results.sort((a, b) => {
      a.index - b.index;
    });
    console.log('Results:', sortedByOrder);
  });
};

await performCalculations();
