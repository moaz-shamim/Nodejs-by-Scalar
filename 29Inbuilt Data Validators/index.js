// Import the mongoose library
const mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose
  .connect("mongodb://localhost:27017/courses")
  .then(() => console.log("Connection is Successfull"))
  .catch((err) => console.log("Couldn't connect to mongodb", err));

// Define the schema for the "Course" collection
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minlegth: 5, maxlegth: 20 },
  tags: {
    type: Array,
    validate: {
      validator: function (tags) {
        return tags.length > 1;
      },
    },
  },
  category: {
    type: String,
    required: true,
    enum: ["DSA", "WEB", "MOBILE", "DATA SCIENCE"],
  },
  creator: { type: String, required: true },
  publishedDate: {
    type: Date,
    default: Date.now,
  },
  isPublished: { type: Boolean, required: true },
  rating: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
  },
});

// Create a model based on the schema for the "Course" collection
const Course = mongoose.model("Course", courseSchema);

// Define an asynchronous function to create a new course document

async function createCourse() {
  // Create a new Course instance with specified data
  const course = new Course({
    name: "mongodb",
    tags: ["mongodb"],
    category: "WEB",
    creator: "Adam",
    isPublished: true,
    rating: 4.0,
  });

  try {
    // Save the new course document to the database
    const result = await course.save();
    console.log(result);
    // await course.validate();
  } catch (error) {
    // console.error(error.message);
    for (field in error.errors) {
      console.log(error.errors[field]);
    }
  }
}

// Call the function to create a new course
createCourse();

/*
The line `await course.validate();` in the provided code is using the `validate()` function associated with Mongoose models. Here's an explanation of what it does:

1. **Mongoose Validation**:
   Mongoose allows you to define a schema for your documents, which includes the structure and constraints of the data that should be stored in the database. These constraints can include requirements such as whether a field is required, its data type, and additional validation rules.

2. **Document Validation**:
   When you create a new document using Mongoose and attempt to save it to the database, Mongoose automatically validates the document against the schema you've defined. This validation process ensures that the data adheres to the specified constraints.

3. **validate() Function**:
   The `validate()` function is a method provided by Mongoose that allows you to manually trigger the validation process on a document. By calling `await course.validate();`, you're explicitly telling Mongoose to validate the `course` object against the schema before attempting to save it to the database.

4. **Asynchronous Operation**:
   The use of `await` indicates that the validation operation is asynchronous, meaning it might take some time to complete. The code will wait for the validation process to finish before proceeding to the next line.

5. **Handling Validation Errors**:
   If the document does not meet the validation criteria defined in the schema (for example, if a required field is missing or if the data type is incorrect), Mongoose will throw a validation error. In the provided code, if a validation error occurs, it will be caught in the `catch` block, and an error message will be logged to the console.

In summary, `await course.validate();` is a way to manually trigger validation on a Mongoose document against its schema, ensuring that the data conforms to the specified constraints before attempting to save it to the database. It helps ensure data integrity and adherence to the schema rules defined for your MongoDB documents.
*/
