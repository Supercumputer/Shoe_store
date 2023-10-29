const Users = require("../models/userModel");
const {
  checkEmail,
  hashPassword,
  comparePassword,
  createToken,
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
      return res.status(400).json({
        status: "failure",
        message: "Email already exists.",
      });
    }

    let newPassWord = hashPassword(passWord);

    await Users.create({
      ...req.body,
      userName: `${req.body.lastName} ${req.body.firsName}`,
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
        const payload = {
          email: data.email,
          //expiresIn ngày hết hạn
          expiresIn: process.env.JWT_EXPIRESIN,
        };

        let token = createToken(payload);

        return res.status(200).json({
          token: token,
          acount: {
            email: data.email,
          },
        });
      } else {
        return res.status(404).json({
          status: "error",
          message: "Email or password incorrectly",
        });
      }
    } else {
      return res.status(404).json({
        status: "error",
        message: "Email or password incorrectly",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login };
