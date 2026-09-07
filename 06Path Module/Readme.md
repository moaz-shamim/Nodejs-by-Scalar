Let's break it down in simple terms:

### 1. **Import the 'path' module:**
```javascript
const path = require("path");
```
- This line is bringing in the `path` module, which is a built-in module in Node.js. It helps work with file and directory paths (like filenames, extensions, and directories).

### 2. **Get the extension of a file path:**
```javascript
let ext = path.extname("D:\\Complete Web Developement Bootcamp\\Node Course by Scalar Academy\\06Path ModuleIntro.txt");
```
- `path.extname()` is used to get the file extension from a full file path.
- In this case, it looks at the path `"D:\\Complete Web Developement Bootcamp\\Node Course by Scalar Academy\\06Path ModuleIntro.txt"` and extracts the extension of the file, which is `.txt`.

### 3. **Get the base name of a file path:**
```javascript
let basename = path.basename("D:\\Complete Web Developement Bootcamp\\Node Course by Scalar Academy\\06Path Module\\Intro.txt");
```
- `path.basename()` gets the name of the file from the full file path (ignoring all the folders and directories leading to it).
- For example, from the path `"D:\\Complete Web Developement Bootcamp\\Node Course by Scalar Academy\\06Path Module\\Intro.txt"`, it returns `Intro.txt`, which is the name of the file.

### 4. **Output the extension and basename to the console:**
```javascript
console.log(ext);
console.log(basename);
```
- These two lines print the results from the previous steps:
  - The first one prints the file extension (`.txt`).
  - The second one prints the base name (`Intro.txt`).

### 5. **Output the current file name (`__filename`) to the console:**
```javascript
console.log(__filename);
```
- `__filename` is a special variable in Node.js that contains the full path to the current JavaScript file (the file you are running). It shows where your current script is located on your computer.
- For example, it might print something like:
  ```
  D:\Projects\MyProject\index.js
  ```

### 6. **Output the directory name (`__dirname`) to the console:**
```javascript
console.log(__dirname);
```
- `__dirname` is another special variable in Node.js that gives the path to the directory where the current file is located (without the file name).
- For example, if your script is located in `D:\Projects\MyProject\index.js`, `__dirname` would output:
  ```
  D:\Projects\MyProject
  ```

### Summary:
- **`path.extname()`**: Gets the file extension (e.g., `.txt`).
- **`path.basename()`**: Gets the name of the file without the path (e.g., `Intro.txt`).
- **`__filename`**: Shows the full path to the current file.
- **`__dirname`**: Shows the path to the directory containing the current file.

These are useful when working with files and directories in Node.js, especially when you need to manipulate or extract information about them.