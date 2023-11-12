const express = require("express");
const router = express.Router();

const {
  verifyAccessToken,
  checkPermistion,
} = require("../middleware/jwtAction");
const productController = require("../controllers/productController");

router.all("*", verifyAccessToken, checkPermistion);
router.post("/createproduct", productController.createProduct);
router.get("/getproduct/:slug", productController.getProduct);
router.get("/getproducts", productController.getProducts);
router.put("/updateproduct/:id", productController.updateProduct);
router.delete('/deleteproduct/:id', productController.deleteProduct)
router.post('/ratingproduct', productController.ratingProduct)

module.exports = router;
