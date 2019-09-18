const express = require("express");
const bodyParser = require("body-parser");

const error = require("../middleware/error");
const logger = require("../middleware/logger");


const routes = ["records"];


module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  routes.forEach(route => {
    app.use("/" + route, require("../routes/" + route));
  })

  app.use(logger);
  app.use(error);
};
