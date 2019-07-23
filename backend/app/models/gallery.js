var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gallerySchema = new Schema({
    section: String,
    name: String,
    src: String
});

module.exports = mongoose.model('gallery', gallerySchema);