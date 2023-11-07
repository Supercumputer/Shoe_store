const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product = new Schema(
  {
    name: { type: String, require: true },
    img: {type: String, default: ''},
    description: { type: String, require: true },
    size: {type: String, default: 'S'},
    price: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    color: {type: String, default: ''}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", product);