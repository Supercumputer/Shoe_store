const Pros = require("../models/productModel");

const getProduct = async (req, res, next) => {
  try {
    let pageSize = 12;
    let page = req.query.page;
    let skipItem = (page - 1) * pageSize;
    let searchQuery = req.query.q || "";
    let data;
    let totalResults;

    if (searchQuery) {
      const regex =
        typeof searchQuery === "object"
          ? { $in: [new RegExp(searchQuery.join("|"), "i")] }
          : new RegExp(searchQuery, "i");

      totalResults = await Pros.countDocuments({ name: regex });
      data = await Pros.find({ name: regex }).skip(skipItem).limit(pageSize);
    } else {
      totalResults = await Pros.countDocuments({});
      data = await Pros.find({}).skip(skipItem).limit(pageSize);
    }

    // if (data.length === 0) {
    //   return res.status(400).json({
    //     message: "No product found",
    //   });
    // }

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
    let data = Pros.findById({ _id: req.params.id });

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
