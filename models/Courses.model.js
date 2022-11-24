const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        img:{
            type: String,
        },
        type:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        duration:{
            type: Number,
            required: true,
        }

    }
)

const Course = model("Course", courseSchema);

module.exports = Course;