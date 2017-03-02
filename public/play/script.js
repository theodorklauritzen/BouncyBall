
var level;
function preload() {
  loadImg("ball");

  level = new Level(getURLParams().lvl);
}

var ball;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  level.show();
}
