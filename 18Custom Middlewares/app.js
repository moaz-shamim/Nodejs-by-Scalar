// Import the express module
const express = require("express");

// Create an Express application instance
const app = express();

// Define some sample data representing courses
const courses = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "Java" },
  { id: 3, name: "Python" },
];

// Define middleware functions

// Middleware to parse incoming JSON requests
app.use(express.json());

// Custom middleware function to log a message before handling requests
app.use(function (req, res, next) {
  console.log("I am First Custom Middleware");
  next(); // Pass control to the next middleware function
});

// Another custom middleware function to log a message
app.use(function (req, res, next) {
  console.log("I am Second Custom Middleware");
  next(); // Pass control to the next middleware function
});

// Define routes and their corresponding handlers

// Route for the homepage (GET request)
app.get("/", (req, res) => {
  res.send("Hello from scalar topics"); // Send a response back to the client
});

// Route for handling GET requests to "/courses"
app.get("/courses", (req, res) => {
  res.send(courses); // Send the courses array as the response
});

// Set the port number for the server to listen on
const port = process.env.PORT || 4000;

// Start the server and make it listen on the specified port
app.listen(port, () => console.log(`Port is running on ${port}`));