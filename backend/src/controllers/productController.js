const Products = require("../models/productModel");
require("dotenv").config();

const createProduct = async (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "Input missing.",
      });
    }

    await Products.create(req.body);

    return res.status(200).json({
      message: "Create product success.",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getProduct = async (req, res, next) => {
  try {
    const slug = req.params.slug;

    if (!slug) {
      return res.status(400).json({
        message: "Input missing.",
      });
    }

    const data = await Products.findOne({ slug });

    if (!data) {
      return res.status(400).json({
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      message: "Get product success.",
      data,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProducts = async (req, res, next) => {
  try {
    let {
      color = "",
      size = "",
      price = "",
      order = "asc",
      page = 1,
      fill = "createdAt",
    } = req.query;

    let pageSize = process.env.PAGE_SIZE;
    let skipItem = (page - 1) * pageSize;
    let searchQuery = req.query.q || "";

    const obj = {};

    if (searchQuery) {
      obj.name =
        typeof searchQuery === "object"
          ? { $in: [new RegExp(searchQuery.join("|"), "i")] }
          : new RegExp(searchQuery, "i");
    }

    if (Array.isArray(color) && color.length > 0) {
      obj.color = { $in: color };
    } else if (typeof color === "string" && color.trim() !== "") {
      obj.color = color;
    }

    if (Array.isArray(size) && size.length > 0) {
      obj.size = { $in: size };
    } else if (typeof size === "string" && size.trim() !== "") {
      obj.size = size;
    }

    if (price.trim() !== "" && price.trim() !== "All") {
      if (price === "Trên 500") {
        let arr = price.split(" ");
        obj.price = { $gt: arr[1] };
      } else {
        let arr = price.split("-");
        obj.price = { $gte: arr[0], $lte: arr[1] };
      }
    }

    let totalResults = await Products.countDocuments(obj);
    let data = await Products.find(obj)
      .skip(skipItem)
      .limit(pageSize)
      .sort({ [fill]: order === "asc" ? 1 : -1 });

    let totalPages = Math.ceil(totalResults / pageSize);

    return res.status(200).json({
      totalPages,
      page,
      data,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Input missing." });
    }

    const data = await Products.updateOne({ _id: id }, req.body, { new: true });

    if (data.matchedCount === 1) {
      return res.status(200).json({
        message: "update user success.",
      });
    } else {
      return res.status(400).json({ message: "Update failure." });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "Input missing." });
    }

    let data = await Products.deleteOne({ _id: id });

    if (data.deletedCount === 1) {
      return res.status(200).json({
        message: "Delete user success.",
      });
    } else {
      return res.status(400).json({
        message: "User not found or not deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res, next) => {
  try {
    let data = await Products.findOne({ _id: req.params.id });

    if (!data) {
      return res.status(404).json({
        message: "No product found.",
      });
    }

    return res.status(200).json({
      data,
      message: "Get user by id success.",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const ratingProduct = async (req, res, next) => {
  try {
    const { id } = req.user;

    const { start, comment, id: idsp } = req.body;

    if (!start || !idsp) {
      return res.status(400).json({
        message: "Missing inputs",
      });
    }

    const ratingPro = await Products.findById({ _id: idsp });

    const checkRating = ratingPro?.ratings?.find(
      (el) => el.postedBy.toString() === id
    );

    if (checkRating) {
      await Products.updateOne(
        {
          ratings: { $elemMatch: checkRating },
        },
        {
          $set: {
            "ratings.$.start": start,
            "ratings.$.comment": comment,
          },
        },
        {
          new: true,
        }
      );
    } else {
      await Products.findByIdAndUpdate(
        { _id: idsp },
        { $push: { ratings: { start, comment, postedBy: id } } },
        { new: true }
      );
    }

    return res.status(200).json({ message: "Rating success." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  ratingProduct,
};
