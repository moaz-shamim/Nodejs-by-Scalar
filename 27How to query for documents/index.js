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

// Define an asynchronous function to retrieve courses created by "Hitesh"
async function getCourseByHitesh() {
  // Use the find() method with the $eq query operator to find courses created by "Hitesh"
  const courses = await Course.find({ creator: "Hitesh" }).select({ name: 1, publishedDate: 1 });
  console.log(courses);
}

// Define an asynchronous function to retrieve courses with a rating of 4.4
async function getCourseByRating() {
  // Use the find() method with the $eq query operator to find courses with a rating of 4.4
  const courses = await Course.find({ rating: { $eq: 4.4 } }).select({ name: 1, publishedDate: 1 });
  console.log(courses);
}

// Define an asynchronous function to retrieve courses with a rating greater than 4
async function getCourseWithGreaterRating() {
  // Use the find() method with the $gt query operator to find courses with a rating greater than 4
  const courses = await Course.find({ rating: { $gt: 4 } }).select({ name: 1, publishedDate: 1 });
  console.log(courses);
}

// Define an asynchronous function to retrieve courses with a rating less than 4
async function getCourseWithLessRating() {
  // Use the find() method with the $lt query operator to find courses with a rating less than 4
  const courses = await Course.find({ rating: { $lt: 4 } }).select({ name: 1, creator: 1 });
  console.log(courses);
}

// Define an asynchronous function to retrieve courses with a rating less than or equal to 4.2
async function getCourseWithLessOrEqualRating() {
  // Use the find() method with the $lte query operator to find courses with a rating less than or equal to 4.2
  const courses = await Course.find({ rating: { $lte: 4.2 } }).select({ name: 1, creator: 1 });
  console.log(courses);
}

// Define an asynchronous function to retrieve courses created by "Hitesh" or "Mrinal"
async function getCourseByCreators() {
  // Use the find() method with the $in query operator to find courses created by "Hitesh" or "Mrinal"
  const courses = await Course.find({ creator: { $in: ["Hitesh", "Mrinal"] } }).select({ name: 1, creator: 1 });
  console.log(courses);
}

// Define an asynchronous function to retrieve courses created by "Hitesh" or "Mrinal" with a rating greater than 4.4
async function getCourseByCreatorsAndRating() {
  // Use the find() method with the $and query operator to find courses created by "Hitesh" or "Mrinal" with a rating greater than 4.4
  const courses = await Course.find({
    $and: [
      { creator: { $in: ["Hitesh", "Mrinal"] } },
      { rating: { $gt: 4.4 } },
    ],
  });
  console.log(courses);
}

// Call the function to retrieve courses
getCourseByCreatorsAndRating();
