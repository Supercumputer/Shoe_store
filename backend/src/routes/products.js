const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/getallproduct", productController.getProduct);
router.post("/createproduct", productController.createProduct);
router.put("/updateproduct/:id", productController.updateProduct);
router.delete("/deleteproduct/:id", productController.deleteProduct);
router.get("/getproduct/:id", productController.getProductById);

module.exports = router;
