const childProcess = require('child_process')

function printNumberOfAsyncOperations(){
  const handles = process._getActiveHandles()
  console.log('Number of handles', handles.length)
}

printNumberOfAsyncOperations()
// promise-based execution of file
childProcess.execFile('ls')
printNumberOfAsyncOperations()
console.log('handles', process._getActiveHandles())
