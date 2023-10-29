const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const router = require('./routes/index')
const connectDb = require('./connectDb/connectDb')
const app = express()
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

router(app)
connectDb()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})