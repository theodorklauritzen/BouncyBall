
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

  socket.emit("getCode", newUrl);

  setTimeout(function () {
    if(url != newUrl) {
      console.error("the code would not load.  The timeout was on 500 ms.");
    }
  }, 500);
}

<<<<<<< HEAD
function setup() {
  createCanvas(windowWidth, windowHeight);

  socket.on("getCode", function (data) {
    //console.log(data);
    if(data.url) {
      url = data.url;
      eval(data.draw);
      runCode = Sdraw;
      eval(data.setup);
      Ssetup();
    }
  });

  setUrl("/startup");
}

function draw() {
  runCode();
}

=======
>>>>>>> reload
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
