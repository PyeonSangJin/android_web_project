var Splash = require('../models/splash');
var url = require('../../config/url');
var path = require('../../config/filepath');
var fs = require('fs');
var gm = require('gm').subClass({imageMagick: true});

module.exports = {
    get: function (req, res, next) {
        Splash.find().limit(1).sort({ $natural: -1 }).exec(function (error, Splash) {
            if (error) {
                console.log(error);
            }
            else {
                res.send(Splash[0]);
            }
        })
    },

    image: function (req, res) {
        fs.exists(path.main_path + path.splash_path + req.params.name, function (exists) {
            if (exists) {
                fs.readFile(path.main_path + path.splash_path + req.params.name, function (err, data) {
                    res.end(data);
                });
            } else {
                fs.readFile(path.main_path + path.splash_path + '/no_image.png', function (err, data) {
                    res.end(data);
                });
            }
        });
    },

    insert_Splash: function (req, res, next) {
        try {
            const files = req.files;
            var originalName = files[0].originalname;
            var fileName = files[0].filename;
            var mimeType = files[0].mimetype;
            var size = files[0].size;

            var newImage = new Splash({
                name: originalName,
                src: (url.main_url + url.splash_url + fileName)
            })



            newImage.save(function (error, data) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('saved');
                }
            });

            gm( path.main_path + path.splash_path + fileName)
            .thumb(50, 50, path.main_path + path.splash_thumb_path + fileName, function (err) {
              if (err) console.error(err);
              else console.log('done - thumb');
            });

        } catch (err) {
            console.dir(err.stack);
        }

        res.send("save");
    }



}