const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { verifyAccessToken, checkPermistion } = require("../middleware/jwtAction");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/forgotpassword", userController.forgotPassWord);
router.put("/resetpassword", userController.resetPassWord);
router.post("/refreshtoken", userController.refreshAccessToken);

router.all("*", verifyAccessToken, checkPermistion);

router.get("/getaccount", userController.getAccount);
router.get("/getallusers", userController.getAllUsers)
router.put("/updateuser", userController.updateUser)
router.put("/updateuseradmin/:id", userController.updateUserAdmin)
router.delete("/deleteuser/:id", userController.deleteUser)

module.exports = router;
