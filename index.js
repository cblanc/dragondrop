var express = require("express");
var app = express();
var path = require("path");
var config = require(path.join(__dirname, "config/index.js"));

app.listen(config.port);

console.log("Listening on port", config.port);

module.exports = app;