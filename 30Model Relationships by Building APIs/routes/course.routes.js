// Import required modules
const express = require("express"); // Import Express framework
const router = express.Router(); // Create a router object for defining routes
const { Course, validate } = require("../models/course.model"); // Import Course model and validation function
const { Category } = require("../models/category.model"); // Import Category model

// Route to handle GET requests for retrieving all courses
router.get("/", async (req, res) => {
  const courses = await Course.find(); // Retrieve all courses from the database
  res.send(courses); // Send the retrieved courses as a response
});

// Route to handle POST requests for creating a new course
router.post("/", async (req, res) => {
  const { error } = validate(req.body); // Validate the request body data using the validation function
  if (error) return res.status(400).send(error.details[0].message); // If validation fails, send a 400 Bad Request response with the error message
  
  const category = await Category.findById(req.body.categoryId); // Find the category corresponding to the provided categoryId
  if (!category) return res.status(400).send("Invalid category ID"); // If the category is not found, send a 400 Bad Request response
  
  let course = new Course({ // Create a new course object
    title: req.body.title, // Assign the title from the request body
    category: { // Assign the category information
      _id: category._id, // Assign the category ID
      name: category.name, // Assign the category name
    },
    creator: req.body.creator, // Assign the creator from the request body
    rating: req.body.rating, // Assign the rating from the request body
  });
  course = await course.save(); // Save the newly created course to the database
  res.send(course); // Send the created course as a response
});

// Route to handle PUT requests for updating an existing course
router.put("/:id", async (req, res) => {
  const { error } = validate(req.body); // Validate the request body data using the validation function
  if (error) return res.status(400).send(error.details[0].message); // If validation fails, send a 400 Bad Request response with the error message
  
  const category = await Category.findById(req.body.categoryId); // Find the category corresponding to the provided categoryId
  if (!category) return res.status(400).send("Invalid category ID"); // If the category is not found, send a 400 Bad Request response
  
  const course = await Course.findByIdAndUpdate( // Find and update the course by its ID
    req.params.id, // Course ID to update
    { // Updated course data
      title: req.body.title,
      category: {
        _id: category._id,
        name: category.name,
      },
      creator: req.body.creator,
      rating: req.body.rating,
    },
    { new: true } // Return the updated course
  );
  if (!course) return res.status(404).send("The course with the given ID was not found."); // If the course is not found, send a 404 Not Found response
  res.send(course); // Send the updated course as a response
});

// Route to handle DELETE requests for deleting an existing course
router.delete("/:id", async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id); // Find and delete the course by its ID
  if (!course) return res.status(404).send("The course with the given ID was not found."); // If the course is not found, send a 404 Not Found response
  res.send(course); // Send the deleted course as a response
});

// Route to handle GET requests for retrieving a specific course by its ID
router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id); // Find the course by its ID
  if (!course) return res.status(404).send("The course with the given ID was not found."); // If the course is not found, send a 404 Not Found response
  res.send(course); // Send the found course as a response
});

// Export the router object for use in other parts of the application
module.exports = router;
