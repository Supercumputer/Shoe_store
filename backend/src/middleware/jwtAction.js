const { verifyToken } = require("../service/authentication");

const nextPath = [
  "/getaccount","/updateuser",
];



const extrackToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
};

const verifyAccessToken = (req, res, next) => {

  // if (nextPath.includes(req.path)) {
  //   return next();
  // }
 
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

const checkPermistion = (req, res, next) => {
  if (nextPath.includes(req.path)) {
    return next();
  }

  if (req.user) {
    let role = req.user.role;

    if (!role) {
      return res.status(403).json({
        status: "error",
        message: "You don't have permistion",
      });
    }
    
    if (role === "Admin") {
      next();
    } else {
      return res.status(403).json({
        status: "error",
        message: "You don't have permistion",
      });
    }
  } else {
    return res.status(401).json({
      status: "error",
      message: "You are not logged in",
    });
  }
};

module.exports = { verifyAccessToken, checkPermistion };
