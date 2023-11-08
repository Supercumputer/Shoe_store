const Users = require("../models/userModel");

require("dotenv").config();

const {
  checkEmail,
  hashPassword,
  comparePassword,
  generateAccessToken,
  gennerateRefreshToken,
  verifyToken,
} = require("../service/authentication");

const register = async (req, res, next) => {
  try {
    const { email, passWord } = req.body;

    if (!email || !passWord) {
      return res.status(400).json({
        status: "failure",
        message: "Missing email or passWord",
      });
    }

    let check = await checkEmail(email);

    if (check) {
      return res.status(401).json({
        status: "failure",
        message: "Email already exists.",
      });
    }

    let newPassWord = hashPassword(passWord);

    await Users.create({
      ...req.body,
      userName: `${req.body.lastName} ${req.body.firstName}`,
      passWord: newPassWord,
    });

    return res.status(200).json({
      status: "success",
      message: "Account successfully created.",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, passWord } = req.body;

    if (!email || !passWord) {
      return res.status(400).json({
        status: "error",
        message: "Missing email or passWord",
      });
    }

    let data = await Users.findOne({ email: email });

    if (data) {
      let checkPass = comparePassword(passWord, data.passWord);

      if (checkPass) {
        const { passWord, role, ...userData } = data.toObject();

        const payload = {
          id: userData._id,
          role: userData.role,
        };

        const accessToken = generateAccessToken(payload);
        const refreshToken = gennerateRefreshToken(payload);

        await Users.findByIdAndUpdate(
          data._id,
          { refreshToken },
          { new: true }
        );

        res.cookie("JWT", refreshToken, {
          maxAge: process.env.JWT_EXPIRESIN,
          httpOnly: true,
        });

        return res.status(200).json({
          accessToken,
          userData,
        });
      } else {
        return res.status(401).json({
          status: "error",
          message: "Email or password incorrectly",
        });
      }
    } else {
      return res.status(401).json({
        status: "error",
        message: "Email or password incorrectly",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const logout = async (req, res, next) => {
  try {
    const cookie = req.cookies;
    if (!cookie && !cookie.JWT) {
      return res.status(400).json({
        message: "No refresh token in cookie.",
      });
    }

    await Users.updateOne(
      { refreshToken: cookie.JWT },
      { refreshToken: "" },
      { new: true }
    );

    res.clearCookie("JWT", {httpOnly: true, secure: true});
    return res.status(200).json({
      message: "Logout success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "error server",
    });
  }
};

const getAcount = async (req, res, next) => {
  try {
    const { id } = req.user;
    const userData = await Users.findById({ _id: id }).select(
      "-passWord -role -refreshToken"
    );

    return res.status(200).json({
      userData,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const refreshAccessToken = async (req, res, next) => {
  try {
    const cookie = req.cookies;

    if (!cookie) {
      return res.status(400).json({ message: "No refresh token in cookie" });
    }

    const tokenId = verifyToken(cookie.JWT);

    const userData = await Users.findById({ _id: tokenId.id });

    const payload = {
      id: userData._id,
      role: userData.role,
    };

    return res.status(200).json({
      message: "Refresh token success.",
      newAccessToken: userData
        ? generateAccessToken(payload)
        : "Refresh token not matched",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login, logout, getAcount, refreshAccessToken };
