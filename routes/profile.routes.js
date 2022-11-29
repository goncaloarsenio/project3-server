const express = require('express')
const router = express.Router();
const User = require('../models/User.model')
const { isAuthenticated } = require("../middleware/jwt.middleware.js");



//Edit profile

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

// colocar articles nos favs

router.put('/favorite/:id' ,isAuthenticated, async(req,res,next)=>{
    const {id} = req.params;
    const userId = req.payload._id
    try {
       
            const updatedProfile = await User.findByIdAndUpdate(userId, {$push:{favorites:id}},{new: true})
            res.status(200).json(updatedProfile)
          
    } catch (error) {
        next(error)
}                                                                                                                                                                                                   
                                
})



//Delete profile
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