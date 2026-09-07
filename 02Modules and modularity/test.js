// Importing the 'calculator' module using the require function.
const {
	addition,
	substraction,
	multiplication,
	division,
} = require("./calculator");

// console.log("calculator", calculator);
// console.log("calculator", calculator?.addition);
// console.log(calculator.addition);

// Calling the 'addition' function from the 'calculator' module and passing arguments 3 and 4.
addition(3, 4);
substraction(5, 2);
multiplication(3, 4);
division(10, 2);
