
var socket = io.connect("http://localhost:3000/");

var runCode = function(socket) {
  background(50);
  fill(255);
  noStroke();

  textSize(50);
  textAlign(CENTER);
  text("Please Wait...", width / 2, height / 2 - 50 / 2);
}

var url = "";
function setUrl(newUrl) {

  var runned = false;
  socket.on("getCode" + newUrl, function (data) {
    if(!runned) {
      runned = true;
      if(data.url) {
        url = data.url;
        runCode = data.draw;
        data.setup(socket);
      }
    }
  });

  socket.emit("getCode", newUrl);

  setTimeout(function () {
    console.error("the code would not load.  The timeout was on 500 ms.");
  }, 500);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  setUrl("/startup");
}

function draw() {
  runCode(socket);
}
