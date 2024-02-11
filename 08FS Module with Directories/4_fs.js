// Import the 'fs' module
const fs = require("fs");

// Create two new directories (commented out to prevent accidental creation)
// fs.mkdirSync("newDirectory");
// fs.mkdirSync("newDirectory2");

// Define the path to the directory whose content we want to read
let directoryPath =
  "D:\\Complete Web Developement Bootcamp\\Node Course by Scalar Academy\\08FS Module with Directories\\newDirectory";

// Read the content of the specified directory synchronously
let directoryContent = fs.readdirSync(directoryPath);
console.log(directoryContent);

// Check if a directory named 'newDirector' exists
let doesExist = fs.existsSync("newDirector");

// Output whether the directory exists or not
console.log(doesExist);

// Remove the directory named 'newDirectory2' synchronously
fs.rmdirSync("newDirectory2");

// Output a message indicating that the directory has been removed
console.log("Directory has been removed");
