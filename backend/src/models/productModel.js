const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const product = new Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    slug: {
      type: String,
      slug: "title",
    },
    description: {
      type: String,
      default: "",
    },
    brand: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    quantity: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    image: {
      type: Array,
    },
    color: {
      type: String,
      enum: ["Black", "Green", "Red"],
    },
    ratings: [
      {
        start: { type: Number },
        postedBy: { type: mongoose.Types.ObjectId, ref: "User" },
        comment: { type: String },
      },
    ],
    totalRating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", product);
