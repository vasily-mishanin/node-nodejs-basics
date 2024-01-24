import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', ['./files/script.js', ...args], {
    stdio: ['pipe', 'pipe', 'inherit'],
  });

  // it is like call another "node  ./files/script.js arg1 arg2 "

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

// Put your arguments in function call to test this functionality
const anotherArg = 'ARGUMENT_3';
spawnChildProcess(['someArgument1', 'someArgument2', anotherArg]);
