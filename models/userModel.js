const mongoose = require("mongoose");

//create schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

//create model
const User = mongoose.model("User", userSchema);

module.exports = User;
