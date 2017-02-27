


function setup() {
  createCanvas(windowWidth, windowHeight);

  setTimeout(function() {
    window.location.href = "/home/";
  }, 3000);
}

function draw() {
  background(255);

  fill(0);
  textSize(50);
  textAlign(CENTER);
  text("Bouncy Ball", width / 2, height / 2 - 75);

  textSize(20)
  fill(128);
  text("by xupertheo", width / 2 + 80, height / 2 - 50);
}
