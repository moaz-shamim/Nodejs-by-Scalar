// Import the 'os' module
const os = require("os");

// Display the platform (e.g., 'win32', 'linux', 'darwin' for Windows, Linux, macOS respectively)
console.log("Platform: " + os.platform());

// Display the CPU architecture (e.g., 'x64', 'arm', 'ia32')
console.log("Architecture: " + os.arch());

// Retrieve information about the CPUs on the system
const cpuInfo = os.cpus();
console.log(cpuInfo);

// Retrieve information about the current user
const user = os.userInfo();
console.log(user);

// Retrieve information about network interfaces on the system
console.log(os.networkInterfaces());



/*
So, imagine you're working on your computer, and you want to do some stuff like finding out what kind of operating system your computer is running on, how much memory it has, or other things like that. Well, the `node:os` module in JavaScript helps you do exactly that!

Here's a breakdown:

- **Operating System-related utility methods and properties**: This module gives you tools to find out information about your operating system, like its name, version, how much memory it has, and other details.

- **How to access it**: To use these tools in your JavaScript code, you need to include the `node:os` module. You do this using the `require` function in Node.js, like this: `const os = require('node:os');`

- **Stability Level**: The stability level is described as "2 - Stable," which means it's in a good, reliable state. This indicates that you can trust the functionality provided by this module.

- **Source Code**: If you want to dive deeper into how this module works or maybe even contribute to its development, you can find its source code in the file `lib/os.js`.

So, in simple terms, the `node:os` module helps you get information about the operating system your code is running on, and you can rely on it to work well.
*/