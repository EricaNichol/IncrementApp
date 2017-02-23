var express            = require('express');
var path              = require('path');
var favicon           = require('serve-favicon');
var logger            = require('morgan');
var cookieParser      = require('cookie-parser');
var bodyParser        = require('body-parser');
var consolidate       = require('consolidate');
var passport          = require('passport');
var mongoose          = require('mongoose');
var morgan            = require('morgan');
var mongoose          = require('mongoose');
var flash             = require('connect-flash');
var session           = require('express-session');

var jwt               = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config            = require('./config'); // get our config file

// Connect to MLAB
var mongo           = require('mongodb');
var monk            = require('monk');
var db              = monk('mongodb://davebear100:asante123@ds157459.mlab.com:57459/davebear100');

var index           = require('./routes/index');
var users           = require('./routes/users');

var app             = express();


// view engine setup
app.set('views', __dirname + '/views');
app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');

// required for passport
// app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});


app.use('/', index);
app.use('/users', users);

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
