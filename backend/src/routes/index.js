const regisLogin = require('./regisLogin')
const users = require('./users')

const router = (app) => {
    app.use('/', regisLogin)
    app.use('/user', users)
}

module.exports = router