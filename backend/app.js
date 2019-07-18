var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const mongoDB = 'mongodb://127.0.0.1:27017/test' // 호스트:포트/DB명
const promise = mongoose.connect(mongoDB, {
  useNewUrlParser: true 
 // useMongoClient: true 
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tests = require('./routes/test'); //add
var login = require('./routes/login');
var fileRouter = require('./routes/file');

var app = express();

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

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/tests',tests); //add
app.use('/api/login', login);
app.use('/api/files', fileRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
