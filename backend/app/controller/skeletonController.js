var Skeleton = require('../models/skeleton');
var path = require('../../config/filepath');
var url = require('../../config/url');
var fs = require('fs');

module.exports = {
    post: function (req, res, next) {
        console.log(req.body);

        try {
            const files = req.files;
            var indexCount = req.body.title.length;
            var menu_infos = [];

            for (var i = 0; i < indexCount; i++) {
                var obj = new Object();

                obj.icon_url = url.main_url + url.icon_url + files[i].filename;
                obj.title = req.body.title[i];
                obj.web_url = req.body.web_url[i];

                menu_infos.push(obj);
            }

            var newSkeleton = new Skeleton({
                background: req.body.background,
                menu_info: menu_infos
            })

            newSkeleton.save(function (error, data) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('saved');
                }
            });

        } catch (err) {
            console.dir(err.stack);
        }
        res.send("save");
    },

    image: function (req, res) {
        fs.exists(path.main_path + path.icon_path + req.params.name, function (exists) {
            if (exists) {
                fs.readFile(path.main_path + path.icon_path + req.params.name, function (err, data) {
                    res.end(data);
                });
            } else {
                fs.readFile(path.main_path + path.icon_path + '/no_image.png', function (err, data) {
                    res.end(data);
                });
            }
        });
    },

    get: function (req, res, next) {
        Skeleton.find().limit(1).sort({ $natural: -1 }).exec(function (error, Skeleton) {
            if (error) {
                console.log(error);
            }
            else {
                res.contentType('application.json');
                res.send(Skeleton[0]);
            }
        });
    }
}