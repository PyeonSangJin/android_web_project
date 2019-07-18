const express = require('express');
const router = express.Router();
const multer = require('multer');
const Image = require('../models/image');

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
console.log(storage);
console.log(upload.array());

router.post('/upload', upload.array('image', 1), function (req, res, next) {
console.log(`HERE : `+req);

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

    var newImage = new Image({
      name: originalName,
      coverimg: fileName
    })
    newImage.save(function(error, data){
      if (error) {
        console.log(error);
      }
      else{
        console.log('saved');
      }
    }); // DB 정보 저장
    res.render("index");
  

  } catch (err) {
    console.dir(err.stack);
  }
});


router.get('/dd',function (req, res, next) {
  console.log("ASDFASDFASDF");
  Image.find({}).sort({}).exec(function(error,Image){
    if (error) {
      console.log(error);
    }
    else{
      res.send(Image);
    }
  })
});


module.exports = router;