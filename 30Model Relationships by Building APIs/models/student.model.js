const mongoose = require("mongoose");
const Joi = require("joi");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlegth: 30,
  },

  isEnrolled: {
    // type: Joi.boolean,
    type: Boolean,
    default: false,
  },
  Phone: {
    // type: Joi.string,
    type: String,

    required: true,
    minlength: 10,
    maxlegth: 25,
  },
});

const Student = mongoose.model("Student", studentSchema);

function validateData(student) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    isEnrolled: Joi.boolean(),
    Phone: Joi.string().min(10).max(25).required(),
  });

  return schema.validate(student);
}

exports.Student = Student;
exports.validate = validateData;
