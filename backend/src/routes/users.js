const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { checkToken } = require("../Middleware/jwtAction");

// router.all("*", checkToken);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/getacount", userController.getAcount);

module.exports = router;
