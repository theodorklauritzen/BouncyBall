
var font;

function preload() {
  // font: comic sans
  //       WTTWmesssy - by What the Teacger Wants
  // http://www.fontspace.com/what-the-teacher-wants/wttwmessy
  font = loadFont("../data/font/WTTWmessy.ttf");

  // img.arrowR = loadImage("../data/img/arrowR.png");
  // img.arrowL = loadImage("../data/img/arrowL.png");
  loadImg("arrowR");
  loadImg("arrowL");
  loadImg("X");
}

var sellvl = 0;
var level;
var numOfLevels = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont(font, 36);

  loadLevel(0);

  sendGet("numOfLevels", function(data) {
    numOfLevels = data;
  });
}

var ImgMargin = 30;
function draw() {
  background(255);

  fill(0);
  textAlign(CENTER);

  textSize(120);
  text("Level", width / 2, 120);

  textSize(300);
  text(level.num, width / 2, height / 2 + 100);

  textSize(80);
  text(level.name, width / 2, 200);
  text(level.by, width / 2, height / 2 + 230);

  image(img.arrowR, width - 240 - ImgMargin, height / 2 - img.arrowR.height / 2);
  image(img.arrowL, ImgMargin, height / 2 - img.arrowL.height / 2);

  if(sellvl === numOfLevels - 1) {
    image(img.X, width - 240 - ImgMargin, height / 2 - img.X.height / 2);
  }
  if(sellvl === 0) {
    image(img.X, ImgMargin, height / 2 - img.X.height / 2);
  }
}

function mousePressed() {
  if(mouseX <= ImgMargin + img.arrowL.width) {
    if(sellvl > 0) {
      loadLevel(sellvl - 1);
    }
  } else if(mouseX >= width - ImgMargin - img.arrowR.width) {
    if(sellvl + 1 < numOfLevels) {
      loadLevel(sellvl + 1);
    }
  } else {
    window.location.href = "/play/?lvl=" + sellvl;
  }
}

function loadLevel(lvl) {
  sellvl = lvl;
  level = new Level(lvl);
}
