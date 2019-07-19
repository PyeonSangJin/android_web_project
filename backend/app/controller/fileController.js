var File = require('../models/file');

module.exports = {

    
    addFile: function (req, res, next) {
        console.log(`HERE : ` + req);

        try {
            const files = req.files;
            let originalName = '';
            let fileName = '';
            let mimeType = '';
            let size = 0;
            console.log(`imgName = ` + files);

            if (Array.isArray(files)) {
                console.log(`files is array~`);

                originalName = files[0].originalname;
                fileName = files[0].filename;
                mimeType = files[0].mimetype;
                size = files[0].size;

            } else {
                console.log(`files is not array~`);
                originalName = files[0].originalname;
                fileName = files[0].filename;
                mimeType = files[0].mimetype;
                size = files[0].size;
            }

            console.log(`file inform : ${originalName}, ${fileName}, ${mimeType}, ${size}`);

            var newImage = new File({
                name: originalName,
                coverimg: fileName
            })
            newImage.save(function (error, data) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('saved');
                }
            }); // DB 정보 저장
            res.send("asdf");


        } catch (err) {
            console.dir(err.stack);
        }
    },

    getAllFile:  function (req, res, next) {
        console.log("ASDFASDFASDF");
        File.find({}).sort({}).exec(function (error, File) {
            if (error) {
                console.log(error);
            }
            else {
                res.send(File);
            }
        })
    }
}