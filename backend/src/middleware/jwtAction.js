const { verifyToken } = require("../service/authentication");

const nextPath = ["/login", "register", "/logout", "/refreshtoken"];

const extrackToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
};

const verifyAccessToken = (req, res, next) => {
  if (nextPath.includes(req.path)) {
    return next();
  }
  // let check = req.cookies;
  let tokenFromHeader = extrackToken(req);

  if (tokenFromHeader) {
    let decode = verifyToken(tokenFromHeader);

    if (decode) {
      req.user = decode;
      next();
    } else {
      return res.status(401).json({
        message: "You are not logged in",
      });
    }
  } else {
    return res.status(401).json({
      message: "You are not logged in",
    });
  }
};

module.exports = { verifyAccessToken };
