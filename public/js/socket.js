

var socket;
(function() {
  var url = document.URL;
  var splittedURL = url.split("/");
  var socketURL = "";
  for(var i = 0; i < 3; i++) {
    socketURL += splittedURL[i] + "/";
  }
  console.log("connection to socket server: " + socketURL);
  socket = io.connect(socketURL);
})();

var lastSendGet = null;
var sendGetCallBack = null;
socket.on("get", function(data) {
  sendGetCallBack(data.data);
});
function sendGet(data, callback) {
  lastSendGet = data;
  sendGetCallBack = callback;
  socket.emit("get", data)
}
