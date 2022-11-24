const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    firstName: {
      type: String,
      required: [true, "Name is required."],
    },

    lastName: {
      type: String,
      required: True,
    },

    birthdayDate: {
      type: Date,
    },

    phoneNumber: {
      type: Number,
    },

    residenceArea: {
      type: String,
    },

    formationArea: {
      type: String,
    },

    formationDegree: {
      type: String,
    },

    interestAreas: {
      type: String,
    },
      
    interests: {
      type: String,
    }, 

    description: {
      type: String,
    },

  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
