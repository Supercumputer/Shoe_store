const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to database successfully.");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};

module.exports = connectDb;


