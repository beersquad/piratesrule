var Q = require('q');
var db = require('../db/dbmodels.js')

var findButton = Q.nbind(db.findOne, db);
var createButton = Q.nbind(db.create, db);


module.exports = {
  button: function (req, res) {

      var buttonNumber = req.body.buttonNumber;
      var shelfNumber = req.body.shelfNumber;
      var date = req.body.date;
      var down = req.body.down;
      var up = req.body.up;

      findButton({buttonNumber: buttonNumber})
      .then((button) => {
        if(!button) {
          createButton({
            buttonNumber: buttonNumber,
            shelfNumber: shelfNumber,
            date: date,
            down: down,
            up: up
          })
        } else {
          button.buttonNumber = buttonNumber;
          button.shelfNumber = shelfNumber;
          button.date = date;
          button.down = down;
          button.up = up;

          button.save();
        }
      })
  },
  viberate: function (req, res) {
    console.log(req)
  }
}
