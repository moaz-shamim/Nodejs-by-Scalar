// Import required modules
const mongoose = require("mongoose");
const Joi = require("joi");

// Define Student schema
const studentSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
			minlength: 2,
			maxlength: 50,
		},

		lastName: {
			type: String,
			required: true,
			trim: true,
			minlength: 2,
			maxlength: 50,
		},

		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},

		phone: {
			type: String,
			trim: true,
			minlength: 10,
			maxlength: 15,
		},

		dateOfBirth: {
			type: Date,
		},

		profileImage: {
			type: String,
			trim: true,
		},

		isActive: {
			type: Boolean,
			default: true,
		},

		enrolledCourses: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Course",
			},
		],
	},
	{
		timestamps: true,
	},
);

// Create Student model
const Student = mongoose.model("Student", studentSchema);

// Joi validation
function validateData(student) {
	const schema = Joi.object({
		firstName: Joi.string().trim().min(2).max(50).required(),

		lastName: Joi.string().trim().min(2).max(50).required(),

		email: Joi.string().email().lowercase().trim().required(),

		phone: Joi.string().trim().min(10).max(15),

		dateOfBirth: Joi.date(),

		profileImage: Joi.string().trim().uri().allow("", null),

		isActive: Joi.boolean(),

		enrolledCourses: Joi.array().items(Joi.string()),
	});

	return schema.validate(student);
}

// Export
exports.Student = Student;
exports.validate = validateData;
