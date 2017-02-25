module.exports = function(server) {
  var socket = require("socket.io");
  var io = socket(server);

  io.sockets.on("connection", function(socket) {
    console.log("new connection");

    //laod code
    socket.on("getCode", function(data) {
      var paths = {};

      paths["/startup"] = parseCode(function Ssetup() {
        console.log("setup");
      }, function Sdraw() {
        background(255);
        console.log("draw");
      });

      if(paths.hasOwnProperty(data)) {
        var send = paths[data];
        send.url = data;
        send.setup = send.setup.toString();
        send.draw = send.draw.toString();
        socket.emit("getCode", send)
      } else {
        socket.emit("getCode", {
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
