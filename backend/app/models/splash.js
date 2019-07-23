var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var splashSchema = new Schema({
  name: String,
  src: String
});

module.exports = mongoose.model('splash', splashSchema);