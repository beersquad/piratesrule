module.exports = {
  button: function (req, res) {

      var buttonNumber = req.buttonNumber;
      var shelfNumber = req.shelfNumber;
      var date = req.date;
      var down = req.down;
      var up = req.up;

      findButton({buttonNumber: buttonNumber})
      .then(function(button) {
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
  },
  viberate: function (req, res) {
    console.log(req.body)
  }
}
