const express = require("express");
const router = express.Router();
const {Student,validate} = require("../models/student.model")

router.get("/api/students", async (req, res) => {
  let students = await Student.find();
  res.send(students);
});

router.post("/api/students", async (req, res) => {
  const { error } = validate(req.body);

  if (error) res.status(400).send(error.details[0].message);

  const student = new Student({
    name: req.body.name,
    isEnrolled: req.body.isEnrolled,
    Phone: req.body.Phone,
  });
  await student.save();
  res.send(student);
});

router.put("/api/students/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      isEnrolled: req.body.isEnrolled,
      Phone: req.body.Phone,
    },
    { new: true }
  );
  if (!student)
    return res
      .status(404)
      .send("The category with the given ID was not found.");
  res.send(student);
});

router.delete("/api/students/:id", async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);

  if (!student)
    return res.status(404).send("The student with the given ID was not found");

  res.send(student);
});

router.get("/api/students/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student)
    return res.status(404).send("The student with the given ID was not found");

  res.send(student);
});



module.exports = router;
