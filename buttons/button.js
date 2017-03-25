const five = require('johnny-five');
const axios = require('axios');
const board = new five.Board();

board.on("ready", () => {
  let button = new five.Button(2);
  let date;
  board.repl.inject({
    button: button
  });

  button.on("down", () => {
    console.log("down");
    date = new Date();
    axios.post('/button', {
      shelfNumber: 3,
      date: date,
      down: true,
      up: false,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  });

  button.on("up", function() {
    console.log("up")
    console.log(new Date());
    axios.post('/button', {
      shelfNumber: 3,
      date: date,
      down: false,
      up: true,
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  })
});
