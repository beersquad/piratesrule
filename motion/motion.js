const five = require('johnny-five');
const axios = require('axios');
const board = new five.Board();

board.on("ready", function() {

  var motion = new five.Motion(7);
  var led = new five.Led(13);

  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  motion.on("motionstart", function() {
    console.log("motionstart");
    led.on();
  });

  motion.on("motionend", function() {
    console.log("motionend");
    led.off();
  });
});
