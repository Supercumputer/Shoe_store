const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const router = require("./routes/index");
const connectDb = require("./connectDb/connectDb");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.JWT_LOCALHOST);
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT,PATCH, DELETE, OPTIONS, "
  );

  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});
app.use(cookieParser());
// app.use(express.json())
router(app);
connectDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
