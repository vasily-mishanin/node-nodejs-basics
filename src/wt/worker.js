import { parentPort, workerData } from 'worker_threads';
// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const value = workerData;

const result = nthFibonacci(value);

const sendResult = () => {
  parentPort.postMessage(result);
};

sendResult();
