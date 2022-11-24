const { Schema, model } = require("mongoose");


const articleSchema = new Schema(
  { 
    name: {
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

    }
  )

const Article = model("Article", articleSchema);

module.exports = Article;