const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  userName: { type: String, default: "" },
  email: { type: String, unique: true, require: true },
  passWord: { type: String, require: true },
  phone: { type: String, default: "" },
  date: { type: String, default: "" },
  sex: { type: String, default: "" },
  address: { type: String, default: "" },
  city: { type: String, default: "" },
  zipcode: { type: String, default: "" },
  country: { type: String, default: "" },
  orders: [],
});

module.exports = mongoose.model("users", user);
