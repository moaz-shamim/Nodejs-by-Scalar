### Professional Usage Guidelines

This README provides guidelines on how to use the provided mathematical operations functions (`add`, `sub`, `mul`, `div`) professionally.

#### Functionality

The provided JavaScript module exports four mathematical operations functions:

1. **Addition**: `add(a, b)` - Adds two numbers `a` and `b` and prints their sum to the console.
2. **Subtraction**: `sub(a, b)` - Subtracts `b` from `a` and prints the result to the console.
3. **Multiplication**: `mul(a, b)` - Multiplies two numbers `a` and `b` and prints the result to the console.
4. **Division**: `div(a, b)` - Divides `a` by `b` and prints the result to the console.

#### Usage

To use these functions in your JavaScript project:

1. **Installation**: There's no specific installation required. Simply ensure you have a JavaScript environment capable of running CommonJS modules.

2. **Importing the Module**:
   ```javascript
   const mathOperations = require('./math_operations');
   ```

3. **Usage Examples**:
   ```javascript
   mathOperations.addition(5, 3); // Output: 8
   mathOperations.substraction(10, 4); // Output: 6
   mathOperations.multiplication(2, 6); // Output: 12
   mathOperations.division(20, 5); // Output: 4
   ```

#### Best Practices

- **Error Handling**: Ensure appropriate error handling mechanisms are in place, especially for division operations to handle cases like division by zero.
- **Input Validation**: Validate inputs to functions to ensure they are of the correct type and within acceptable ranges to prevent unexpected behavior.
- **Logging**: Utilize appropriate logging mechanisms based on the context of usage. The provided functions log results to the console, but in a production environment, logging may need to be adjusted according to specific requirements.
- **Testing**: Thoroughly test the functions in different scenarios to ensure they behave as expected and handle edge cases appropriately.
- **Documentation**: Provide clear documentation for these functions within your project to help other developers understand their purpose and usage.

#### Contributors

- If you make improvements or encounter issues with these functions, feel free to contribute by submitting pull requests or opening issues on the repository where these functions are hosted.

#### License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify the code according to your project's needs.