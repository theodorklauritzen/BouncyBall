module.exports = function(server) {
  var socket = require("socket.io");
  var io = socket(server);

  io.sockets.on("connection", function(socket) {
    console.log("new connection");

    socket.on("get", function(data) {
      var ret = null;
      if(data === "numOfLevels") {
        ret = 3;
      }
      socket.emit("get", {
        get: data,
        data: ret
      })
    });
  });
}
