function Ball(_pos, _d, _color, _moveable) {
  //check if the ball image is loaded
  if(!img.ball) {
    throw new Error("You must load the ball image!");
  }
  this.pos = _pos;
  this.vel = createVector(0, 0);

  this.d = _d;

  this.color = _color;

  this.moveable = _moveable || false;
}

Ball.prototype.show = function() {
  var d = pixelScale().avg * this.d;

  var x = pixelScale().x * this.pos.x;
  var y = pixelScale().y * this.pos.y;

  fill(this.color);
  noStroke();
  ellipse(x, y, d - d / 25, d - d / 25);
  image(img.ball, x - d / 2, y - d / 2, d, d);
}
