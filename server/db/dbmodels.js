var db = require('./mongodb.js');
var mongoose = require('mongoose');

console.log('here')
var butttonSchema = new db.Schema({
  buttonNumber: Number,
  shelfNumber: Number,
  date: String,
  down: Boolean,
  up: Boolean
});

var Button = mongoose.model('Button', butttonSchema);

module.exports = Button;
