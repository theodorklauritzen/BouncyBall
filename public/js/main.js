
var img = {};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function loadImg(name) {
  var startPath = "../data/img/";
  var endPath = ".png"
  var path = startPath + name + endPath;
  img[name] = loadImage(path);
}

(function() {
  createCanvas(windowWidth, windowHeight);
})();
