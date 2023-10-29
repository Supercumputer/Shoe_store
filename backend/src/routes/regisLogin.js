const express = require('express')
const router = express.Router()

const regisLogin = require('../controllers/regisLoginController')

router.post('/register', regisLogin.register)
router.post('/login', regisLogin.login)


module.exports = router