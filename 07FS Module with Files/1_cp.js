// Import the 'fs' module
const fs = require("fs");

// Read the content of file f1.txt synchronously and store it in 'fileContent'
let fileContent = fs.readFileSync("f1.txt");

// Output the content of file f1.txt to the console
console.log("data of file 1 : " + fileContent);

// Write data to file f2.txt synchronously
fs.writeFileSync("f2.txt", "User is perform write operation on me");

// Output a message indicating that file f2.txt has been written
console.log("File 2 has been written");

// Append data to file f3.txt synchronously
fs.appendFileSync("f3.txt", " Data appended on me.");

// Output a message indicating that data has been appended to file f3.txt
console.log("File 3 has been appended");

// Delete file f4.txt synchronously
fs.unlinkSync("f4.txt");

// Output a message indicating that file f4.txt has been deleted
console.log("File 4 has been deleted");

// Write data to file f4.txt synchronously
fs.writeFileSync("f4.txt", "I am created by using writeFileSync method only");


// Get the statistics of the file "f1.txt" synchronously
let stats = fs.statSync("f1.txt");

// Output the statistics of the file to the console
console.log(stats);



/*
1. **Interacting with the file system**: The file system is where your computer stores all its files and folders. The `fs` module in Node.js allows you to work with these files and folders directly from your JavaScript code. You can read files, write to them, create new ones, delete them, and much more.

2. **Modeled on standard POSIX functions**: POSIX is a set of standards for operating systems, including how they handle files and directories. The `fs` module in Node.js is designed to work similarly to these standard functions. This means that if you're familiar with working with files in other programming languages or on Unix-like systems, you'll find the `fs` module's functions familiar and easy to use.

3. **Stability Level**: The stability level is described as "2 - Stable," which means it's in a good, reliable state. This indicates that you can trust the functionality provided by this module.

4. **Source Code**: If you're curious about how this module works internally, you can find its source code in the file `lib/fs.js`.

In simple terms, the `fs` module in Node.js is like a toolbox that lets your JavaScript code interact with files and folders on your computer in a way that's similar to how standard file operations work on Unix-like systems.
*/

// writing in a file
// // if the file name that is passed doesnt not exists the a new file will be created with its
////name and the data will be written on that file
