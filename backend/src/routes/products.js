const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/getproduct/:id", productController.getProductById);
router.get("/getallproduct", productController.getProduct);
router.post("/createproduct", productController.createProduct);
router.put("/updateproduct/:id", productController.updateProduct);
router.delete("/deleteproduct/:id", productController.deleteProduct);

module.exports = router;
