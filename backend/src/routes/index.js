const regisLogin = require('./regisLogin')
const users = require('./users')
const products = require('./products')

const router = (app) => {
    app.use('/', regisLogin)
    app.use('/user', users)
    app.use('/product', products)
}

module.exports = router