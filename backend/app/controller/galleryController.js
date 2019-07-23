var Gallery = require('../models/gallery');
var url = require('../../config/url');
var path = require('../../config/filepath');
var fs = require('fs');
var gm = require('gm').subClass({imageMagick: true});


module.exports = {
    get: function (req, res, next) {
        Gallery.find({ section: req.params.section }).sort({}).exec(function (error, Gallery) {
            if (error) {
                console.log(error);
            }
            else {
                res.send(Gallery);
            }
        })
    },

    upload: function (req, res, next) {
        try {
            // const files = req.files;
            // var originalName = req.files[0].originalname;
            console.log(req.body);

            var fileName = req.files[0].filename;
            var section = req.body.section;
            console.log(section);

            var new_image = new Gallery({
                name: fileName,
                src: (url.main_url + url.gallery_url + fileName),
                section: section
            })

            new_image.save(function (error, data) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('saved');
                }
            });

            gm( path.main_path + path.gallery_thumb_path + fileName)
            .thumb(50, 50, path.main_path + path.gallery_thumb_path + fileName, function (err) {
              if (err) console.error(err);
              else console.log('done - thumb');
            });

        } catch (err) {
            console.dir(err.stack);
        }
        res.send("save");
    },

    image: function (req, res) {
        fs.exists(path.main_path + path.gallery_path + req.params.name, function (exists) {
            if (exists) {
                fs.readFile(path.main_path + path.gallery_path + req.params.name, function (err, data) {
                    res.end(data);
                });
            } else {
                fs.readFile(path.main_path + path.gallery_path + '/no_image.png', function (err, data) {
                    res.end(data);
                });
            }
        });
    }
}