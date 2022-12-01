const { Schema, model } = require("mongoose");


const partnerSchema = new Schema(
  { 

    img: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    }
  )

const Partner = model("Partner", partnerSchema);

module.exports = Partner;