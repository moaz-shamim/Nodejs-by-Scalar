const figlet = require("figlet");

figlet("Hello I am Md Moaz Shamim!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});