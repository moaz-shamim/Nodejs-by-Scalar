// Import the express module
const express = require("express");

// Create an Express application instance
const app = express();

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

// Route for the "/courses" page (GET request)
app.get("/courses", (req, res) => {
  res.send("You are in courses page");
});

// Set the port number for the server to listen on
// If the process environment variable PORT is defined, use its value
// Otherwise, default to port 3000
const port = process.env.PORT || 3000;

// Start the server and make it listen on port 3000
app.listen(3000, () => console.log("Port is running on 3000"));
