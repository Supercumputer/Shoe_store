const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { checkToken } = require("../Middleware/jwtAction");

router.all("*", checkToken);
router.get("/getacount", userController.getAcount);

module.exports = router;
