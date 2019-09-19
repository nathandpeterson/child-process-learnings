const { spawn } = require('child_process')

const child = spawn('ls', ['-a', '-l']);

child.stdout.on('data', data => {
  console.log('data as an array buffer', data)
  const stringData = data.toString('utf-8')
  console.log('stringified data', stringData)
})

child.on('close', close => {
  console.log('closing---', close)
})

child.on('exit', code => {
  console.log(`Exit code is: ${code}`);
});