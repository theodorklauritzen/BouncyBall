
var ballImg;
var font;

function preload() {
  ballImg = loadImage("../data/img/ball.png");

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

  fill(255, 0, 0);
  noStroke();
  ellipse(ballImg.width / 2, ballImg.height / 2, 240 - 2, 240 - 2);
  image(ballImg, 0, 0);
}
