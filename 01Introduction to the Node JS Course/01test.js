//The Global Object
let name = 'moaz';

console.log(global.name); // undefined

// nodejs always keeps your functions and variables in file scope only it was not adding it to particular object to use universillay.

/*
In Node.js, when you declare a variable like `name = 'moaz'` at the top level of your code, it doesn't automatically become a property of the global object. Unlike in some other environments like browsers, where variables declared in the global scope are automatically added as properties of the `window` object, Node.js doesn't do this by default.

So, when you try to access `global.name`, it returns `undefined` because `name` is not a property that has been explicitly assigned to the global object. In other words, Node.js doesn't automatically make all top-level variables global variables. You'd need to explicitly assign a property to the `global` object if you want it to be accessible globally:

```javascript
global.name = 'moaz';
console.log(global.name); // 'moaz'
```

However, it's generally not recommended to pollute the global namespace with too many variables, as it can lead to naming collisions and make your code harder to maintain. Instead, it's better to use modules and keep your variables scoped to where they are needed.
*/

//If you are creating one file Whatever you write inside that file I will always keep all these value and all those function a strict do that file only resolve the problem of overridden conflictt