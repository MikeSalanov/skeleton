const express = require('express');
const morgan = require('morgan');
const ssr = require('../middlewares/ssr');

const serverConfig = (app) => {
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(ssr);
};

module.exports = serverConfig;
