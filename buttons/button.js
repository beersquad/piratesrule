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
    }, {
      baseURL: 'http://localhost:8000'
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log('error::', error);
    })
  });

  button.on("up", function() {
    console.log("up")
    // console.log(new Date());
    date = new Date();
    axios.post('/button', {
      shelfNumber: 3,
      date: date,
      down: false,
      up: true,
    }, {
      baseURL: 'http://localhost:8000'
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log('error::', error);
    })
  })
});
