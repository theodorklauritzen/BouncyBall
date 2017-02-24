module.exports = function(server) {
  var socket = require("socket.io");
  var io = socket(server);

  io.sockets.on("connection", function(socket) {
    console.log("new connection");

    //laod code
    socket.on("getCode", function(data) {
      var paths = {};

      paths["/startup"] = parseCode(function(socket) {
        console.log("setup");
      }, function(socket) {
        console.log("draw");
      });

      console.log(paths.hasOwnProperty(data));

      if(paths.hasOwnProperty(data)) {
        var send = paths[data];
        send.url = data;
        socket.emit("getCode" + data, send)
      } else {
        socket.emit("getCode" + data, {
          url: null,
          setup: null,
          draw: null
        });
      }

      function parseCode(setup, draw) {
        var ret = {
          setup: setup,
          draw: draw
        };
        return ret;
      }
    });
  });
}
