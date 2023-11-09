const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { verifyAccessToken } = require("../middleware/jwtAction");

router.all("*", verifyAccessToken);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/getaccount", userController.getAcount);
router.post("/refreshtoken", userController.refreshAccessToken);
router.get("/forgotpassword", userController.forgotPassWord);
router.put("/resetpassword", userController.resetPassWord);

module.exports = router;
