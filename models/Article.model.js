const { Schema, model } = require("mongoose");


const articleSchema = new Schema(
  { 
    article: {
      type: String,
      required: true,
    },

    name: {
        type: String,
        required: true,
    },

    intro: {
      type: String,
      required: true,
    },

    img: {
        type: String,
    },

    description: {
        type: String,
        required: true,
    },

    },
    
    {
      timestamps: true
    }
  )

const Article = model("Article", articleSchema);

module.exports = Article;