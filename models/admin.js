const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    password: String,
    photo:String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admin", adminSchema);
