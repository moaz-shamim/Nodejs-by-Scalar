// Import required modules
const mongoose = require("mongoose");
const Joi = require("joi");

// Define the category schema using Mongoose
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 30, minlength: 3 }, // Define the name field with required constraints
});

// Create a Mongoose model for the category schema
const Category = mongoose.model("Category", categorySchema);

// Function to validate category data using Joi
function validateData(category) {
  // Define Joi schema for category validation
  const schema = Joi.object({
    name: Joi.string().min(3).required(), // Validate the name field for minimum length and required constraint
  });

  // Validate the provided category object against the defined schema
  return schema.validate(category);
}

// Export the Category model, categorySchema, and validateData function
exports.Category = Category; // Export the Category model
exports.categorySchema = categorySchema; // Export the category schema
exports.validate = validateData; // Export the validateData function
