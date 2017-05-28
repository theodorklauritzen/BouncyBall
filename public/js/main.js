
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

function pixelScale() {
  var ret = {
    x: width / 1000,
    y: height / 1000
  };

  ret.avg = (ret.x + ret.y) / 2

  return ret;
}
