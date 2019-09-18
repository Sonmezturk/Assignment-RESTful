const mongoose = require("mongoose");
const winston = require("winston");
const config = require("config");
const dbDebuggerLog = require("debug")("app:db");

function db() {
  const db = config.get("db");
  mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log(`Connected to ${db}...`));

  // Db work...
  dbDebuggerLog("Connected to the database..."); //console.log("Connected to the database...");
}
const Records = require("../models/records");

module.exports = {
  db,
  Records
};
