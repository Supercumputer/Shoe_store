const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require("jsonwebtoken");
const uuid = require('uuid');

const generateAccessToken = (data) => {
  let key = process.env.JWT_SERVICE;
  let token = null;
  try {
    token = jwt.sign(data, key, { expiresIn: "3d" });
  } catch (error) {
    console.log(error);
  }
  return token;
};

const gennerateRefreshToken = (data) => {
  let key = process.env.JWT_SERVICE;
  let token = null;
  try {
    token = jwt.sign(data, key, { expiresIn: "7d" });
  } catch (error) {
    console.log(error);
  }
  return token;
};

const verifyToken = (token) => {
  let key = process.env.JWT_SERVICE;
  let decode = null;
  try {
    decode = jwt.verify(token, key);
  } catch (error) {
    console.log(error);
  }
  return decode;
};

const createPassWordChangeToken = () => {
  return resetToken = uuid.v4().toString();
};

const hashPassword = (passWord) => {
  const hash = bcrypt.hashSync(passWord, salt);
  return hash;
};

const comparePassword = (passWord, hash) => {
  return bcrypt.compareSync(passWord, hash);
};

const checkEmail = async (email) => {
  let check = await Users.find({ email: email });
  if (check.length > 0) {
    return true;
  }

  return false;
};

module.exports = {
  checkEmail,
  comparePassword,
  hashPassword,
  generateAccessToken,
  gennerateRefreshToken,
  verifyToken,
  createPassWordChangeToken,
};
