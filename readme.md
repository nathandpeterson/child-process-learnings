[Node.js docs on child_process](https://github.com/nodejs/node/blob/a3307eac0e6fb276274e4e9bbaab1aa4433e795f/doc/api/child_process.md)

It is part of the eventEmitter API in node.js. [Article](https://jscomplete.com/learn/node-beyond-basics/node-events)

It is very like `popen` in C languages, or `subprocess` in python
https://www.gnu.org/software/libc/manual/html_node/Pipe-to-a-Subprocess.html
https://docs.python.org/2/library/subprocess.html

But also different:
https://dev.to/pi0/nodejs-fork-is-not-what-you-think-of-37ko
https://stackoverflow.com/questions/17861362/node-js-child-process-difference-between-spawn-fork

A 2019 talk on the libuv library:
https://www.youtube.com/watch?v=VfYmKD-SvjU

libuv
platform abstraction library, gives node access to things like child_process
— file i_o runs in the lib_uv thread pool, as well as DNS look-ups
- libuv uses two abstractions to keep track of long-running processes, handles and requests
`process._getactivehandles`
`process._getactiverequests`