var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const logado = function(req, res, next) {
    console.log('logado')
    next()
}

var dataRouter = require('./routes/data');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var userIdRouter = require('./routes/userId');
var signupRouter = require('./routes/signup');
var signinIdRouter = require('./routes/signinId');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', logado, indexRouter);
app.use('/user', logado, usersRouter);
app.use('/about', logado, aboutRouter);
app.use('/data', logado, dataRouter);
app.use('/user/signup', logado, signupRouter);
app.use('/user/:userId', logado, userIdRouter);
app.use('/user/signin/:userId', logado, signinIdRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

console.log('Servidor rodando em http://localhost:3000');