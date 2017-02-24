const express = require('express');

var app = express();

var routes = require("./routes/index.js");
app.use(routes);

app.use(express.static("public"));

app.use(function(req, res, next) {
  res.sendStatus(404);
});

const PORT = process.env.PORT || 3000;
var server = app.listen(PORT, function() {
  console.log("started at port: " + PORT);
});

var socket = require("./socket.js");
socket(server);
