const fs = require("fs");

console.log("First Line");

fs.readFile("f1.txt", cb1);

function cb1(err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File 1 Data : " + data);
}

fs.readFile("f2.txt", cb2);

function cb2(err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File 2 Data : " + data);
}

console.log("Last Line");

// Output

// First Line
// Last Line
// File 1 Data : I am File 1 , You are reading file 1 data.
// File 2 Data : I am File 2 , You are reading file 2 data.

// Output
// First Line
// Last Line
// File 2 Data : I am File 2 , You are reading file 2 data.
// File 1 Data : I am File 1 , You are reading file 1 data.