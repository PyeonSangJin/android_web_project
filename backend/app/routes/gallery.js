const express = require('express');
var app = express();

var multer = require('multer');
var path = require('../../config/filepath');

var galleryController = require('../controller/galleryController');

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, path.main_path + path.gallery_path);
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
    app.get('/:section', galleryController.get);
    app.get('/image/:name', galleryController.image);

    app.post('/upload', upload.array('image', 1), galleryController.upload);

    return app;
}

