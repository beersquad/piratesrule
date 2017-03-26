var Q = require('q');
var db = require('./dbmodels.js')

var findButton = Q.nbind(db.findOne, db);
var createButton = Q.nbind(db.create, db);

module.exports = {
  postMap : function (req, res, next) {

    var buttonNumber = req.buttonNumber;
    var shelfNumber = req.shelfNumber;
    var date = req.date;
    var down = req.down;
    var up = req.up;

    findButton({buttonNumber: buttonNumber})
    .then(function(button) {
      console.log(button);
      if(!button.buttonNumber.includes(buttonNumber) {
        return createButton({
          buttonNumber: buttonNumber,
          shelfNumber: shelfNumber,
          date: date,
          down: down,
          up: up
        })
      }) else {
        button.buttonNumber = buttonNumber;
        button.shelfNumber = shelfNumber;
        button.date = date;
        button.down = down;
        button.up = up;

        button.save();
      }
    })
  }
}
