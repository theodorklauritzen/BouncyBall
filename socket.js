module.exports = function(server) {
  var socket = require("socket.io");
  var io = socket(server);

  io.sockets.on("connection", function(socket) {
    console.log("new connection");

    //laod code
    socket.on("getCode", function(data) {
      var paths = {};

      paths["/startup"] = parseCode(function Ssetup() {
        background(255);
        fill(0);
        textSize(50);
        textAlign(CENTER);
        text("Bouncy Ball", width / 2, height / 2 - 75);

        textSize(20)
        fill(128);
        text("by xupertheo", width / 2 + 80, height / 2 - 50);

        setTimeout(function() {
          setUrl("/home");
        }, 3000);
      }, function Sdraw() {});

      paths["/home"] = parseCode(function Ssetup() {
        console.log("home");
      }, function Sdraw() {

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
