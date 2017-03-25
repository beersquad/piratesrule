var bController = require('./controllers/bController')
module.exports = function (app, express) {
    app.post('/button', bController.button)
}