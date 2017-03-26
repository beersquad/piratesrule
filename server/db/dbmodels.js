var db = require('./mongodb.js');
var mongoose = require('mongoose');


var butttonSchema = new mongoose.Schema({
  buttonNumber: Number,
  shelfNumber: Number,
  date: String,
  down: Boolean,
  up: Boolean
});

var Button = mongoose.model('Button', butttonSchema);

module.exports = Button;
