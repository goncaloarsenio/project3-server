const express = require('express')
const router = express.Router();
const Article = require('../models/Article.model')
const {isAuthenticated} = require('../middleware/jwt.middleware')


//Create article

router.post('/articles', /* isAuthenticated, */ async (req,res,next)=>{
    try {
/*         if(!req.payload.admin){
            res.status(403).json({message: "Forbidden"})
            return
        } */
        let {name,description,intro,article, img} = req.body
        if(!img) img = 'https://cdn.mensagenscomamor.com/content/images/m000134490.jpg?v=0&w=800&h=1122'
        const newArticle = await Article.create({name,description,intro,article, img})

       
        /* Now that we don't have a render (because we don't have views), we use res.json to send a json object */
        res.status(200).json(newArticle)
    
    
    } catch (error) {
        res.json(error)
        next(error)
    }
    })



    //Get all articles
    router.get('/articles', async(req,res,next)=>{
        try {
            const allArticles = await Article.find()
    
            res.status(200).json(allArticles)
    
        } catch (error) {
            next(error)
        }
    })


//Get single article
    router.get('/articles/:id', async(req,res,next)=>{
        try {
            const {id} = req.params;
    
            const singleArticle = await Article.findById(id)
            res.status(200).json(singleArticle)
        } catch (error) {
            next(error)
        }
    })


//Edit Article 
    router.put('/articles/:id', async(req,res,next)=>{
        try {
            const {id} = req.params;
            const {name,description,img, article, intro} = req.body
            const updatedArticle = await Article.findByIdAndUpdate(id,{name,description,img, article, intro },{new:true})
            res.status(200).json(updatedArticle)
        } catch (error) {
            next(error)
        }
    })


//Delete article
router.delete('/articles/:id',async(req,res,next)=>{
    try {
        const {id} = req.params
        await Article.findByIdAndRemove(id)
        res.status(200).json({message: `The Article with Id ${id} was deleted`})

    } catch (error) {
        next(error)
    }
})




    module.exports= router;