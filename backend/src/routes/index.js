const regisLogin = require('./regisLogin')

const router = (app) => {
    app.use('/', regisLogin)
}

module.exports = router