const fs = require("fs");

console.log("First Line");

let data = fs.readFileSync("f1.txt");

console.log("File 1 Data -> " + data);

console.log("File 2 Data -> " + data);

console.log("Last Line");


// Output

// First Line
// File 1 Data -> I am File 1 , You are reading file 1 data.
// File 2 Data -> I am File 1 , You are reading file 1 data.
// Last Line