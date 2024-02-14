// Import the mongoose library
const mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose
  .connect("mongodb://localhost:27017/courses")
  .then(() => console.log("Connection is Successfull"))
  .catch((err) => console.log("Couldn't connect to mongodb", err));

// Define the schema for the "Course" collection
const courseSchema = new mongoose.Schema({
  name: String,
  creator: String,
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  isPublished: Boolean,
  rating: Number,
});

// Create a model based on the schema for the "Course" collection
const Course = mongoose.model("Course", courseSchema);

// Define an asynchronous function to create a new course document
async function createCourse() {
  // Create a new Course instance with specified data
  const course = new Course({
    name: "CSS",
    creator: "Adam",
    isPublished: true,
    rating: 3.1,
  });

  // Save the new course document to the database
  const result = await course.save();
  console.log(result);
}

// Call the function to create a new course
createCourse();

// Define an asynchronous function to update an existing course document by its ID
async function updateCourse(id) {
  // Find the course document by its ID
  let course = await Course.findById(id);
  // If the course document doesn't exist, return early
  if (!course) return;

  // Update the properties of the course document
  course.name = "Tailwind";
  course.creator = "DaveGray";

  // Save the updated course document to the database
  const updatedCourse = await course.save();
  console.log(updatedCourse);
}

// Call the function to update a course by its ID
updateCourse("65cc3c6d1ffa3bcdec0b89f9");

// Define an asynchronous function to delete an existing course document by its ID
async function deleteCourse(id) {
  // Find and delete the course document by its ID
  let course = await Course.findByIdAndDelete(id);
  console.log(course);
}

// Call the function to delete a course by its ID
deleteCourse("65cc524213e35c5dbad51b5e");
