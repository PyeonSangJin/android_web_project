var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3001; // set PORT

mongoose.Promise = global.Promise;

const mongoDB = 'mongodb://127.0.0.1:27017/test' // 호스트:포트/DB명
const promise = mongoose.connect(mongoDB, {
  useNewUrlParser: true 
 // useMongoClient: true 
});

app.use(require('connect-history-api-fallback')());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

var server = app.listen(port);
server.timeout = 5000;
var io = require('socket.io')(server);

require('./app/routes')(app);
app.set('socketio',io);

console.log('SERVER ON');
exports = module.exports = app;
