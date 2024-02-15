// Import required modules
const express = require("express");
const mongoose = require("mongoose");

// Import route handlers
const categories = require("./routes/category.routes");
const students = require("./routes/student.routes");
const courses = require("./routes/course.routes");

// Create an instance of Express application
const app = express();

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/learningPlatform")
  .then(() => console.log("Connection is successful")) // Log success message if connection is established
  .catch((err) => console.log("Couldn't connect to MongoDB", err)); // Log error if connection fails

// Middleware to parse JSON bodies of incoming requests
app.use(express.json());

// Middleware to handle requests related to categories
app.use(categories);

// Middleware to handle requests related to students
app.use(students);

// Middleware to handle requests related to courses
app.use("/api/courses", courses);

// Define the port for the server to listen on
const port = process.env.PORT || 4000;

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => console.log(`Listening on port ${port}`));
