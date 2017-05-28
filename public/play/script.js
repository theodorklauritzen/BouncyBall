
var level;
function preload() {
  loadImg("ball");

  level = new Level(getURLParams().lvl);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  level.show();
}
