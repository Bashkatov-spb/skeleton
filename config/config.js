const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const ssr = require('../middleware/ssr');
const sessionConfig = require('./session');
const { resLocals, getUser } = require('../middleware/auth');

module.exports = function config(app) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static('public'));
  app.use(ssr);
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(resLocals);
  app.use(getUser);
};
