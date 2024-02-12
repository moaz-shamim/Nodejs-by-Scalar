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

// Define a route for handling GET requests to "/courses/:id"

// The ":id" part in the route is a route parameter, which allows you to capture dynamic values from the URL
app.get("/courses/:id", (req, res) => {
    // Inside the route handler function, access the value of the route parameter "id" using req.params.id
    // The value of req.params.id will be whatever value is provided in the URL in place of ":id"
    // For example, if the URL is "/courses/123", req.params.id will be "123"
    // Send the value of req.params.id as the response to the client
    res.send(req.params.id);
  });
  




// Set the port number for the server to listen on
// If the process environment variable PORT is defined, use its value
// Otherwise, default to port 3000
const port = process.env.PORT || 4000;

// Start the server and make it listen on port 3000
app.listen(port, () => console.log(`Port is running on ${port}`));
