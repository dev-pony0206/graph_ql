const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    score: Number,
    age: Number
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
