const fs = require("fs");

console.log("First Line");

fs.readFile("f1.txt", cb1);

function cb1(err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File 1 Data : " + data);
  fs.readFile("f2.txt", cb2);
}


function cb2(err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File 2 Data : " + data);
  fs.readFile("f3.txt", cb3);
}


function cb3(err, data) {
  if (err) {
    console.log(err);
  }

  console.log("File 3 Data : " + data);
}

console.log("Last Line");

