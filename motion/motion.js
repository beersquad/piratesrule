const five = require('johnny-five');
const axios = require('axios');
const board = new five.Board();

board.on("ready", function() {

  var motion = new five.Motion(7);
  var leds = new five.Leds([3, 5, 6]);

  motion.on("calibrated", function() {
    console.log("calibrated");
  });

  motion.on("motionstart", function() {
    leds.pulse();
  });

  motion.on("motionend", function() {
    leds.stop();
  });
});
