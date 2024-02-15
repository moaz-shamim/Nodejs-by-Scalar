// Import required modules
const Joi = require("joi"); // Import Joi for data validation
const mongoose = require("mongoose"); // Import mongoose for MongoDB interaction
const { categorySchema } = require("../models/category.model"); // Import category schema for validation

// Define the Course model using Mongoose
const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255,
    }, // Define the title field with required constraints
    category: {
      type: categorySchema, // Define the category field using the imported categorySchema
      required: true, // Require a category for each course
    },
    creator: {
      type: String,
      required: true,
    }, // Define the creator field with required constraint
    rating: {
      type: Number,
      required: true,
    }, // Define the rating field with required constraint
  })
);

// Function to validate course data using Joi
function validateCourse(course) {
  // Define Joi schema for course validation
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(), // Validate the title field for length and required constraint
    categoryId: Joi.string().required(), // Validate the categoryId field for required constraint
    creator: Joi.string().min(5).required(), // Validate the creator field for length and required constraint
    rating: Joi.number().min(0).required(), // Validate the rating field for minimum value and required constraint
  });

  // Validate the provided course object against the defined schema
  return schema.validate(course);
}

// Export the Course model and validateCourse function for use in other parts of the application
exports.Course = Course; // Export the Course model
exports.validate = validateCourse; // Export the validateCourse function
