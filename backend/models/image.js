var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
  name: String,
  coverimg: String
});

module.exports = mongoose.model('image', imageSchema);