
var font;

function preload() {
  // font: comic sans
  //       WTTWmesssy - by What the Teacger Wants
  // http://www.fontspace.com/what-the-teacher-wants/wttwmessy
  font = loadFont("../data/font/WTTWmessy.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont(font, 36);
}

function draw() {
  background(255);

  fill(0);
  textSize(50);
  textAlign(CENTER);
  text("Home", width / 2, height / 2 - 25);
}
