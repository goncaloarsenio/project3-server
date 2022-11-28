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
            type: String,
            required: true,
        },
        company:{
            type: String,
            required: true,
        },
        topics:{
            type: String,
            required: true,
        },
        person:{
            type: String,
            required: true,
        },
        occupation:{
            type: String,
            required: true,
        }
    }
)

const Course = model("Course", courseSchema);

module.exports = Course;