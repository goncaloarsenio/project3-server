const express = require("express");
const router = express.Router();

const Course = require('../models/Courses.model')

//get all courses

router.get('/course', async(req, res, next)=> {
    try {
        const allCourses = await Course.find()
        res.status(200).json(allCourses);

    } catch (error) {
        console.log(error);
        next(error);
    }
})

//get one course

router.get('/course/:id', async(req, res, next)=> {
    const {id} = req.params
    try {
        const singleCourse = await Course.findById(id)
        res.status(200).json(singleCourse);

    } catch (error) {
        console.log(error);
        next(error);
    }
})


module.exports = router;