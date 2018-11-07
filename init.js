var express = require('express');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

module.exports = function (app) {
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
        
    // parsers middlewares
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    // app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist/')));
    // app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/')));

}
