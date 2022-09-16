const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const useragent = require('express-useragent');
const compression = require('compression');
const auth = require(path.join(__dirname, '..', 'middleware', 'auth'));
const cors = require('cors');

module.exports = function(app) {
  app.use(bodyParser.json({
    limit: '5mb',
    extended: true
  }));
  app.use(bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: '5mb',
    extended: true,
  }));
  app.use(cors());
  app.use(express.json({limit: '1mb'}));
  app.use(cookieParser());
  app.use(session({
    secret: 'BioTuring',
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 14400000, // 60 mins
    },
  }));
  app.use(useragent.express());
  app.use(express.json());
  app.use(compression());
  app.use(express.static(path.join(__dirname, '..', 'public')));
};
