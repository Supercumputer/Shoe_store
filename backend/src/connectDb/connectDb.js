const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/shoe_store");
    console.log("Connect success !!!");
  } catch (error) {
    console.log("Connect failure !!!");
  }
};

module.exports = connectDb;
