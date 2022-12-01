const express = require("express");
const router = express.Router();

const Partner = require('../models/Partner.model')


//Get all partners

router.get('/partners', async(req,res,next)=>{
    try {
        const allPartners= await Partner.find()

        res.status(200).json(allPartners)

    } catch (error) {
        next(error)
    }
})

module.exports= router;