var express = require('express');
var app = express();
var server = require('./server');
var init = require('./init');
var router = require('./router');
var database = require('./db');


// [Server,init and router are created in another file and linked here ]
server(app);
init(app);
router(app);

module.exports = app