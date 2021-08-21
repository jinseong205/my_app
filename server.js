var express = require('express');

var indexRouter = require('../my_app/routes/index');
var usersRouter = require('../my_app/routes/users');

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
