const Logger = require("./startup/logger");
const logger = new Logger("www");

// const winston = require("winston");
const express = require("express");
const config = require("config");
var app = express();

// require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db").db();
require("./startup/api")();

const port = config.serverConfig.port
const server = app.listen(3100, () => {
  logger.info(`Listening on port ${port}...`);
  // winston.info(`Listening on port ${port}...`);
});

module.exports = server;
