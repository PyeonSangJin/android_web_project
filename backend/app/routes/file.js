const express = require('express');
const multer = require('multer');
var app = express();

var fileController = require('../controller/fileController');

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './uploads/');
  },
  filename(req, file, callback) {
    let array = file.originalname.split('.');
    array[0] = array[0] + '_'; array[1] = '.' + array[1];
    array.splice(1, 0, Date.now().toString());
    const result = array.join(''); console.log(result);
    callback(null, result);
  }
});

const upload = multer({
  storage, limits: {
    files: 10, fileSize: 1024 * 1024 * 1024,
  }
});

module.exports = function () {
 
  app.post('/upload', upload.array('image', 1), fileController.addFile);
  app.get('/dd', fileController.getAllFile);

  return app;
}
