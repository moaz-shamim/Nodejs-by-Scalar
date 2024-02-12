// Import the express module
const express = require("express");

// Create an Express application instance
const app = express();

app.use(express.json());

let courses = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "Java" },
  { id: 3, name: "Python" },
];

// Define routes and their corresponding handlers

// Route for the homepage (GET request)
app.get("/", (req, res) => {
  res.send("Hello from scalar topics");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.post("/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/courses/:coursename", (req, res) => {
  let course = courses.find((course) => course.name === req.params.coursename);

  if (!course)
    res.status(404).send("The course you are looking for does not exist");

  course.name = req.body.name;
  res.send(course);
});

app.delete("/courses/:coursename", (req, res) => {
  let updatedCourses = courses.filter(
    (course) => course.name !== req.params.coursename
  );
  courses = updatedCourses;
  res.send(courses);
});

app.delete("/courses/:id", (req, res) => {
  let course = courses.find((course) => course.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course you are looking for does not exist");
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(courses);
});

// Set the port number for the server to listen on
const port = process.env.PORT || 4000;

// Start the server and make it listen on port 3000
app.listen(port, () => console.log(`Port is running on ${port}`));
