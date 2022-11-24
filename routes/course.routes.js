const express = require("express");
const router = express.Router();

const Course = require('../models/Courses.model')

router.get('/course', async(req, res, next)=> {
    try {
        const allCourses = await Course.find()
        res.status(200).json(allCourses);

    } catch (error) {
        console.log(error);
        next(error);
    }
})





module.exports = router;