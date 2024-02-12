// Define a function named 'add' that takes two parameters 'a' and 'b' and prints their sum to the console.
function add(a, b) {
    console.log(a + b);
  }
  
  function sub(a, b) {
    console.log(a - b);
  }
  function mul(a, b) {
    console.log(a * b);
  }
  function div(a, b) {
    console.log(a / b);
  }
  
  // Export an object with a property named 'addition' whose value is the 'add' function defined above.
  module.exports = {
    addition: add,
    substraction: sub,
    multiplication: mul,
    division: div,
  };