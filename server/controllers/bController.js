var Q = require('q');
var db = require('../db/dbmodels.js')

var findButton = Q.nbind(db.findOne, db);
var createButton = Q.nbind(db.create, db);
var AllButtons = Q.nbind(db.find, db);



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
  },
  getMap: function(req, res, next){
    AllButtons({})
    .then(function(buttons){
      var array = []
      for (i=0; i <5; i++){
          array[i]=new Array(buttons.length*2)
      }
      var c = 0
        for(var x=0; x<buttons.length*2; x=x+2){

          if(buttons[c].down){
            array[0][x]=1
            array[1][x]=1
            array[2][x]=1
            array[3][x]=1
            array[4][x]=1

            array[0][x+1]=1
            array[1][x+1]=1
            array[2][x+1]=1
            array[3][x+1]=1
            array[4][x+1]=1
          }
          else{
            array[0][x]=0
            array[1][x]=0
            array[2][x]=0
            array[3][x]=0
            array[4][x]=0

            array[0][x+1]=0
            array[1][x+1]=0
            array[2][x+1]=0
            array[3][x+1]=0
            array[4][x+1]=0
          }
          c++
        }
      res.json(array)
    })
  }
}
