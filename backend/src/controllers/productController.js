const Pros = require("../models/productModel");
require("dotenv").config();

const getProduct = async (req, res, next) => {
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

    
    let totalResults = await Pros.countDocuments(obj);
    let data = await Pros.find(obj)
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

const createProduct = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        message: "You have to enter all data fields.",
      });
    }

    await Pros.create(req.body);

    return res.status(200).json({
      message: "Create product success.",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    let data = await Pros.findById({ _id: req.params.id });

    if (data) {
      await Pros.updateOne({ _id: req.params.id }, req.body);

      return res.status(200).json({
        message: "update user success.",
      });
    } else {
      return res.status(404).json({ message: "No product found." });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    let data = await Pros.findById({ _id: req.params.id });

    if (data) {
      await Pros.deleteOne({ _id: req.params.id });

      return res.status(200).json({
        message: "delete user success.",
      });
    } else {
      return res.status(404).json({ message: "No product found." });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res, next) => {
  try {
    
    let data = await Pros.findOne({ _id: req.params.id });
    
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

module.exports = {
  getProduct,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
