const users = require("./users");
const products = require("./products");
const { notFound, errorHandler } = require("../middleware/errorHandler");

const router = (app) => {
    app.use("/api/user", users);
    app.use("/product", products);
    app.use(notFound);
    app.use(errorHandler);
};

module.exports = router;
