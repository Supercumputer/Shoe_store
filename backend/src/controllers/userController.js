const Users = require("../models/userModel");
const sendMail = require("../service/sendMail");
require("dotenv").config();

const {
  checkEmail,
  hashPassword,
  comparePassword,
  generateAccessToken,
  gennerateRefreshToken,
  verifyToken,
  createPassWordChangeToken,
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
        const {
          passWord,
          role,
          refreshToken: refToken,
          ...userData
        } = data.toObject();

        const payload = {
          id: userData._id,
          role,
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

    res.clearCookie("JWT", { httpOnly: true, secure: true });
    return res.status(200).json({
      message: "Logout success",
    });
  } catch (error) {
    return res.status(500).json({
      message: "error server",
    });
  }
};

const getAccount = async (req, res, next) => {
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

const forgotPassWord = async (req, res, next) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({
        message: "Missing email.",
      });
    }

    const user = Users.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found.",
      });
    }

    const resetToken = createPassWordChangeToken();
    const expiresIn = Date.now() + +process.env.PASSWORD_TOKEN_EXPIRESIN;

    await Users.updateOne(
      { email },
      {
        $set: {
          passwordResetToken: resetToken,
          passwordResetExpires: expiresIn,
        },
      }
    );

    const html = `Xin vui lòng click vào link dưới đây để thay đổi mật khẩu của bạn. Link này sẽ hết hạn sau 15 phút kể từ bây giờ. <a href=${process.env.URL_SERVER}/api/user/reset-password/${resetToken}>Click here.</a>`;

    const data = { email, html };

    const infor = await sendMail(data);

    return res.status(200).json({
      status: "success",
      message: "Send email success.",
      infor,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const resetPassWord = async (req, res, next) => {
  try {
    const { passWord, token } = req.body;

    if (!passWord || !token) {
      return res.status(400).json({
        message: "Password or token not found.",
      });
    }

    const user = await Users.findOne({
      passwordResetToken: token,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalit reset token.",
      });
    }

    let newPassWord = hashPassword(passWord);

    user.passWord = newPassWord;
    user.passwordChangedAt = Date.now();
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    return res.status(200).json({
      message: "Update passWord success",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const userData = await Users.find({}).select(
      "-passWord -role -refreshToken"
    );
    return res.status(200).json({
      message: "Get all users success.",
      userData,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    console.log(id);
    const data = req.body;

    if (!id || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "Id update not found",
      });
    }

    await Users.findByIdAndUpdate({ _id: id }, data, { new: true });

    return res.status(200).json({
      message: "Update user success.",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "You have not transmitted ID.",
      });
    }

    let data = await Users.deleteOne({ _id: id });
 
    if (data.deletedCount === 1) {
      return res.status(200).json({
        message: "Delete user success.",
      });
    } else {
      return res.status(400).json({
        message: "User not found or not deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUserAdmin = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "You have not transmitted ID.",
      });
    }

    let data = await Users.updateOne({ _id: id }, req.body);

    if (data.matchedCount === 1) {
      return res.status(200).json({
        message: "User updated successfully.",
      });
    } else {
      return res.status(400).json({
        message: "User not found or not updated",
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  logout,
  getAccount,
  refreshAccessToken,
  forgotPassWord,
  resetPassWord,
  getAllUsers,
  updateUser,
  updateUserAdmin,
  deleteUser,
};
