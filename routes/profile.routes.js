const express = require('express')
const router = express.Router();
const User = require('../models/User.model')

router.put('/profile/:id', async(req,res,next)=>{
    const {id} = req.params;
    const { firstName, lastName} = req.body
    try {
       
            const updatedProfile = await User.findByIdAndUpdate(id, {firstName, lastName},{new: true})
            res.status(200).json(updatedProfile)
          
    } catch (error) {
        next(error)
}                                                                                                                                                                                                                                   
})


//Delete
router.delete('/profile/:id',async(req,res,next)=>{
    const {id} = req.params
try {
    await User.findByIdAndDelete(id)
    res.status(200).json({message: `The  with Id ${id} was deleted`})

} catch (error) {
    next(error)
}
})

module.exports= router;