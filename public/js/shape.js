function Shape(data) {
  this.type = data.type;

  this.corners = [];

  if(this.type === "shape") {
    this.corners = data.corners;
  } else if(this.type === "rect") {
    this.corners.push(data.corners[0]);
    this.corners.push({
      x: data.corners[1].x,
      y: data.corners[0].y
    });
    this.corners.push(data.corners[1]);
    this.corners.push({
      x: data.corners[0].x,
      y: data.corners[1].y
    });
  }
}

Shape.prototype.show = function() {
  fill(150);
  strokeWeight(1);
  stroke(0);
  beginShape()
  for (var i = 0; i < this.corners.length; i++) {
    vertex(this.corners[i].x, this.corners[i].y);
  }
  endShape(CLOSE);
}
