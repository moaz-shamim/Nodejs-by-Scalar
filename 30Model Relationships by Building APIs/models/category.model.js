// Import required modules
const mongoose = require("mongoose");
const Joi = require("joi");

// Define the Category schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 70,
    },

    description: {
      type: String,
      maxlength: 500,
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create the Category model
const Category = mongoose.model("Category", categorySchema);

// Joi validation for creating/updating a category
function validateData(category) {
  const schema = Joi.object({
    name: Joi.string().trim().min(3).max(50).required(),

    slug: Joi.string().trim().lowercase().max(70).required(),

    description: Joi.string().trim().max(500).allow("", null),

    isActive: Joi.boolean(),
  });

  return schema.validate(category);
};

// Export
exports.Category = Category;
exports.validate = validateData;