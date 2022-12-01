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
    admin: {
      type: Boolean,
      default: false,
    },
    firstName: {
      type: String,
      required: [true, "Name is required."],
    },
    genre: {
      type: String,
      default: "",
    },

    lastName: {
      type: String,
      required: true,
    },

    birthdayDate: {
      type: Date,
      default: Date.now(),
    },

    phoneNumber: {
      type: Number,
      default: 0,
    },

    residenceArea: {
      type: String,
      default: "",
    },

    formationArea: {
      type: String,
      default: "",
    },

    formationDegree: {
      type: String,
      default: "",
    },

    interestAreas: {
      type: String,
      default: "",
    },

    interests: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Article",
      },
    ],

    subscribed: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
