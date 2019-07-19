var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fileSchema = new Schema({
  name: String,
  coverimg: String
});

module.exports = mongoose.model('file', fileSchema);