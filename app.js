const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false});
const path = require('path');
const passport = require('passport');
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const s3 = new aws.S3({});

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'some-bucket',
    metadata: function(req, file, cb){
      cb(null, {fieldName: file.fieldname})
    },
    key: function(req, file, cb){
        cb(null, Date.now().toString())
    }
  })
})


const app = express();
app.set('view engine', 'ejs');
app.use(urlEncoded);
app.use(express.static(path.join(__dirname, 'statics')));

const restaurantsRoute = require('./server/routes/restaurantsRoute.js')(app);


module.exports = app;
