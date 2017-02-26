function Ball(_pos, _d, _color) {
  //check if the ball image is loaded
  if(!img.ball) {
    throw new Error("You must load the ball image!");
  }
  this.pos = _pos;
  this.vel = createVector(0, 0);

  this.d = _d;

  this.color = _color;
}

Ball.prototype.show = function() {
  fill(this.color);
  noStroke();
  ellipse(this.pos.x, this.pos.y, this.d - this.d / 25, this.d - this.d / 25);
  image(img.ball, this.pos.x - this.d / 2, this.pos.y - this.d / 2, this.d, this.d);
}
