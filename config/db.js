const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    mongoose.connect(mongoURI, {
      useNewUrlParser: true,
    });

    console.log("MongoDB Connected... 👌");
  } catch (err) {
    console.error('😕', err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
