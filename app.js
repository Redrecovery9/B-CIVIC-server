const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

// DataBase locations
// mongoose.connect('mongodb://localhost/test', {useMongoClient: true});
mongoose.connect('mongodb://heroku_p9c01m84:21tse1t3l9mgrchdr0kvemvcn@ds231205.mlab.com:31205/heroku_p9c01m84', {useMongoClient: true});

const index = require('./routes/index')
const users = require('./routes/users')
const company = require('./routes/company')
const convention = require('./routes/convention')
const people = require('./routes/people')
const twitter = require('./routes/twitter')

const app = express();

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index)
app.use('/users', users)
app.use('/company', company)
app.use('/convention', convention)
app.use('/people', people)
app.use('/twitter', twitter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
