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

        company: {
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
            type: String,
            required: true,
        }
    }
)

const Course = model("Course", courseSchema);

module.exports = Course;