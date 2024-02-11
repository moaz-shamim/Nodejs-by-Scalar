// Import the 'child_process' module with the alias 'cp'
import cp from "child_process";

// Execute the 'calc' command to open the calculator (for Windows systems)
// cp.execSync("calc");

// Execute the 'start chrome https://www.google.com/' command to open Google Chrome with the Google homepage
// cp.execSync("start chrome https://www.google.com/");

// Execute the 'node demo.js' command synchronously and capture the output
console.log("Output " + cp.execSync("node demo.js"));


/*
Certainly! 

Imagine you're working on your computer and you need to get some extra tasks done while your main task is running. You can think of these extra tasks as subprocesses. The `node:child_process` module in JavaScript helps you do just that - it allows your main program (or process) to start other programs (subprocesses) and communicate with them.

Here's a breakdown:

- **Spawning subprocesses**: This means starting new programs from your main program. For example, you might want to run a script or a command-line program from within your JavaScript code.

- **Similar to popen(3)**: `popen(3)` is a function in some programming languages that opens a process (a program) and provides a pipe (a communication channel) between your program and the new one. The `child_process` module in Node.js does something similar, allowing you to start a new process and communicate with it.

- **Primary function**: The main function you'll use from this module is `child_process.spawn()`. This function lets you start a new process and control it from your JavaScript code.

- **Stability Level**: The stability level is described as "2 - Stable," which means it's in a good, reliable state. This indicates that you can trust the functionality provided by this module.

- **Source Code**: If you're curious about how this module works internally, you can find its source code in the file `lib/child_process.js`.

In simple terms, the `node:child_process` module in JavaScript allows you to start and control other programs (subprocesses) from within your main program, helping you manage multiple tasks and make your code more powerful and versatile.
*/