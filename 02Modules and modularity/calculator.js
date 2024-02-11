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

/*
Certainly! In Node.js, when you create a JavaScript file, it represents a module. Each module in Node.js has its own scope, meaning the variables and functions defined within a module are not accessible from outside that module unless explicitly exported.

When you write `module.exports = {}`, you're essentially saying: "I want to export an empty object as the value of this module."

Here's an easy breakdown:

- **module**: It's a special object in Node.js that represents the current module.
- **exports**: It's a property of the `module` object that is used to export values from a module.
- **={}**: This syntax creates a new empty JavaScript object (`{}`).

So, when you assign an object to `module.exports`, you're making that object available to other modules that require or import it. In other words, any other module that imports this module will receive this empty object as the value.

For example, let's say you have a file named `example.js` with the following content:

```javascript
// example.js
module.exports = {};
```

Now, in another file, you can import `example.js` and use whatever is exported:

```javascript
// anotherFile.js
const example = require('./example.js');
console.log(example); // This will log an empty object: {}
```

This allows you to organize your code into smaller, manageable pieces and share functionality between different parts of your application.
*/
