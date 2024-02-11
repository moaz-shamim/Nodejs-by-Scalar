// Import the 'path' module
const path = require("path");

// Get the extension of a file path
let ext = path.extname(
  "D:\\Complete Web Developement Bootcamp\\Node Course by Scalar Academy\\06Path ModuleIntro.txt"
);

// Get the base name of a file path
let basename = path.basename(
  "D:\\Complete Web Developement Bootcamp\\Node Course by Scalar Academy\\06Path Module\\Intro.txt"
);

// Output the extension and basename to the console
console.log(ext);
console.log(basename);

// Output the current file name (__filename) to the console
console.log(__filename);

// Output the directory name (__dirname) to the console
console.log(__dirname);


/*
Of course! Think of the `path` module in Node.js as a toolbox that helps you work with file and directory paths on your computer. Here's what it does in simple terms:

1. **Manipulating Paths**: It helps you manipulate file and directory paths. For example, it can join paths together, normalize them (make them consistent), or resolve them (find the full path).

2. **Extracting Information**: It lets you easily extract useful information from paths, like the file name, extension, or directory name.

3. **Platform Independence**: It handles paths in a way that works on different operating systems (like Windows, macOS, and Linux), so your code can run smoothly across different environments.

4. **Easy Access**: It's built into Node.js, so you don't need to install anything extra. Just `require` it in your code, and you're ready to go.

In short, the `path` module simplifies working with file and directory paths in your Node.js applications, making it easier to manage and manipulate them in a platform-independent way.
*/