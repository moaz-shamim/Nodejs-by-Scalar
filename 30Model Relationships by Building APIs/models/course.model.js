// Import required modules
const Joi = require("joi");
const mongoose = require("mongoose");

// Define Course schema
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 100,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 120,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },

    // Reference to Category model
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    // Reference to Student model
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },

    durationInHours: {
      type: Number,
      min: 0,
    },

    thumbnail: {
      type: String,
      trim: true,
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    totalReviews: {
      type: Number,
      min: 0,
      default: 0,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Create Course model
const Course = mongoose.model("Course", courseSchema);

// Joi validation
function validateCourse(course) {
  const schema = Joi.object({
    title: Joi.string()
      .trim()
      .min(5)
      .max(100)
      .required(),

    slug: Joi.string()
      .trim()
      .lowercase()
      .max(120)
      .required(),

    description: Joi.string()
      .trim()
      .max(2000)
      .required(),

    category: Joi.string()
      .required(),

    instructor: Joi.string()
      .required(),

    price: Joi.number()
      .min(0)
      .required(),

    level: Joi.string()
      .valid("beginner", "intermediate", "advanced")
      .default("beginner"),

    durationInHours: Joi.number()
      .min(0),

    thumbnail: Joi.string()
      .trim()
      .allow("", null),

    rating: Joi.number()
      .min(0)
      .max(5),

    totalReviews: Joi.number()
      .min(0),

    isPublished: Joi.boolean(),
  });

  return schema.validate(course);
}

// Export
exports.Course = Course;
exports.validate = validateCourse;