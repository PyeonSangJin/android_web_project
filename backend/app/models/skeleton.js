var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skeletonSchema = new Schema({
  background: String,
  menu_info: [{
      icon_url: String,
      title: String,
      web_url: String
  }]
});

module.exports = mongoose.model('skeleton', skeletonSchema);