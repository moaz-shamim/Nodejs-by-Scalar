const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost:27017/Scalar")
	.then(() => console.log("Connection is Successfull"))
	.catch((err) => console.log("Couldn't connect to mongodb", err));

const courseSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Course name is required"],
			trim: true,
			minlength: [5, "Course name must be at least 5 characters long"],
			maxlength: [100, "Course name cannot exceed 100 characters"],
		},
		creator: {
			type: String,
			required: [true, "Creator is required"],
			trim: true,
		},
		rating: {
			type: Number,
			min: [1, "Rating must be between 1 and 10"],
			max: [10, "Rating must be between 1 and 10"],
			validate: {
				validator: Number.isInteger,
				message: "Rating must be an integer",
			},
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

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
	try {
		const course = new Course({
			name: "Lets Dig Into Core JavaScript",
			creator: "Md Moaz Shamim",
			isPublished: true,
			rating: 10,
		});

		const result = await course.save();

		if (result) {
			console.log("Saved document:", result);
		} else {
			console.log("Something Went Wrong");
		}
	} catch (error) {
		console.error(error.message);
	}
}

// createCourse();

async function getPublishedCourses(minRating) {
	try {
		const courses = await Course.find({
			isPublished: true,
			rating: { $gte: minRating },
		})
			.select("name creator rating")
			.sort({ rating: -1 });

		if (courses.length === 0) {
			console.log("No published courses found");
			return;
		}

		console.log("Search Result:", courses);
	} catch (error) {
		console.error(error.message);
	}
}

// getPublishedCourses(7);

async function updateRating(id, newRating) {
	try {
		if (!mongoose.Types.ObjectId.isValid(id)) {
			console.log("Invalid course ID");
			return;
		}

		if (newRating < 1 || newRating > 10) {
			console.log("Rating must be between 1 and 10");
			return;
		}

		const course = await Course.findById(id);

		if (!course) {
			console.log("Course not found");
			return;
		}

		course.rating = newRating;
		const updatedCourse = await course.save();

		console.log("Rating updated successfully");
		console.log(updatedCourse);
	} catch (error) {
		console.error("Update failed:", error.message);
	}
}

// updateRating("69691732634541a3c8df6ce1", 5);

async function deleteCourse(id) {
	try {
		if (!mongoose.Types.ObjectId.isValid(id)) {
			console.log("Invalid course ID");
			return;
		}

		const course = await Course.findByIdAndDelete(id);

		if (!course) {
			console.log("❌ Data deletion not successful");
			console.log("Reason: Course not found");
			return;
		}

		console.log("✅ Course deleted successfully");
	} catch (error) {
		console.error("Failed to Delete:", error.message);
	}
}
