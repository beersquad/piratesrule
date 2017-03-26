const five = require('johnny-five');
const axios = require('axios');
const board = new five.Board();

board.on("ready", () => {
  let buttons = new five.Buttons([ 8, 9, 10, 11, 12 ]);
  // console.log(buttons[0].pin);
  let date;

  board.repl.inject({
    buttons: buttons
  });
  let j = 0;
  for(let i = 0; i< buttons.length; i++) {
    buttons[i].on("down", () => {
      console.log("down");
      console.log(i);
      date = new Date();
      axios.post('/button', {
        buttonNumber: buttons[i].pin,
        shelfNumber: 3,
        date: date,
        down: true,
        up: false,
      }, {
        baseURL: 'http://localhost:8000'
      }).then((response) => {
        console.log(response);
      })
    });

    buttons[i].on("up", function() {
      console.log("up");
      // console.log(i);
      date = new Date();
      axios.post('/button', {
        buttonNumber: buttons[i].pin,
        shelfNumber: 3,
        date: date,
        down: false,
        up: true,
      }, {
        baseURL: 'http://localhost:8000'
      }).then((response) => {
        console.log(response);
      })
    })
  }


});
