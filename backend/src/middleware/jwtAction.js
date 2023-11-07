const { verifyToken } = require("../service/authentication");

const nextPath = ["/getacount"];

const extrackToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
};

const checkToken = (req, res, next) => {
  //   if (nextPath.includes(req.path)) {
  //     return next();
  //   }

  let check = req.cookies;
  let tokenFromHeader = extrackToken(req);

  if ((check && check.jwt) || tokenFromHeader) {
    let token = check && check.jwt ? check.jwt : tokenFromHeader;
    let decode = verifyToken(token);
    if (decode) {
      req.user = decode;
      req.token = token;
      next();
    } else {
      return res.status(401).json({
        message: "You are not logged in",
      });
    }
  } else {
    return res.status(401).json({
      message: "You are not logged in s",
    });
  }
};

module.exports = { checkToken };
