module.exports = function(server) {
  var socket = require("socket.io");
  var io = socket(server);

  io.sockets.on("connection", function(socket) {
    console.log("new connection");
  });
}
