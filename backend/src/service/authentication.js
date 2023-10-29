const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
require("dotenv").config();
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require("jsonwebtoken");

const createToken = (data) => {
  let key = process.env.JWT_SERVICE;
  let token = null;
  try {
    token = jwt.sign(data, key);
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

module.exports = { checkEmail, comparePassword, hashPassword, createToken, verifyToken };
