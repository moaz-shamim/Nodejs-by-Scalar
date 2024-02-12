// Import the express module
const express = require("express");

// Create an Express application instance
const app = express();

const courses = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "Java" },
  { id: 3, name: "Python" },
];

// Define routes and their corresponding handlers

// Route for the homepage (GET request)
app.get("/", (req, res) => {
  res.send("Hello from scalar topics");
});

// Route for the "/about" page (GET request)
app.get("/about", (req, res) => {
  res.send("You are in about page");
});

// Route for the "/contact" page (GET request)
app.get("/contact", (req, res) => {
  res.send("You are in contact page");
});

// Define a route for handling GET requests to "/courses/:id"

// The ":id" part in the route is a route parameter, allowing you to capture dynamic values from the URL
// app.get("/courses/:id", (req, res) => {
//     // Log the parameters received in the request to the console
//     console.log(req.params);

//     // Find the course with the matching ID from the "courses" array
//     // This line searches for a course whose ID matches the value of the route parameter ":id"
//     // The parseInt() function is used to convert the string "id" parameter to an integer for comparison
//     let course = courses.find((course) => course.id === parseInt(req.params.id));

//     // Send the name of the found course as the response to the client
//     // Assuming the "courses" array contains objects with a "name" property
//     res.send(course.name);
//   });

// Define a route for handling GET requests to "/courses/:coursename"

// The ":coursename" part in the route is a route parameter, allowing you to capture dynamic values from the URL
app.get("/courses/:coursename", (req, res) => {
  // Log the parameters received in the request to the console
  console.log(req.params);

  // Search for a course in the "courses" array based on the provided course name
  // The "courses" array should be defined somewhere in your code with course objects
  // This line of code seems to be missing a closing parenthesis and part of the condition, it will be corrected in the next comment

  // The "courses.find()" function iterates through the "courses" array and returns the first course object that matches the condition
  // The condition is to find a course whose name matches the value of the route parameter ":coursename"
  let course = courses.find((course) => course.name === req.params.coursename);

  if (!course) res.status(404).send("The course you are looking for does not exist");

  // Send the found course object as the response to the client
  res.send(course.name);
});

// Set the port number for the server to listen on
const port = process.env.PORT || 4000;

// Start the server and make it listen on port 3000
app.listen(port, () => console.log(`Port is running on ${port}`));
