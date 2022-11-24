const router = require('express').Router();
const Article = require('../models/Article.model')


router.post('/articles', async(req,res,next)=>{

    try {
     const {name,description,img} = req.body
     const newArticle = await Article.create({name,description,img})
    
    
     /* Now that we don't have a render (because we don't have views), we use res.json to send a json object */
     res.status(200).json(newArticle)
    
    
    
    } catch (error) {
        res.json(error)
        next(error)
    }
    })












    module.exports= router;