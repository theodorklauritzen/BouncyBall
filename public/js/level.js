function Level(_num) {
  this.num = _num;

  var path = "../data/level/";
  var ending = ".json";
  this.rawData = loadJSON(path + this.num + ending);

  this.name = "loading ...";
  this.by = "loading ...";

  this.parsedData = false;

  var source = this;
  var interval = setInterval(function() {
    if(parseData()) {
      clearInterval(interval);

      source.shapes = [];
      for (var i = 0; i < source.rawData.shapes.length; i++) {
        source.shapes.push(new Shape(source.rawData.shapes[i]));
      }

      var ballDat = source.rawData.ball;
      if(!ballDat) {
        ballDat = {};
      }

      var defaultOptions = {
        x: 100,
        y: 500,
        moveable: true
      };

      for(var i in defaultOptions) {
        if(!ballDat[i]) {
          ballDat[i] = defaultOptions[i];
        }
      }

      source.ball = new Ball(createVector(ballDat.x, ballDat.y), 30, "#666666", ballDat.moveable);

      console.log(source);
    }

    function parseData() {
      if(source.rawData.name != undefined && source.rawData.by != undefined) {
        source.name = source.rawData.name;
        source.by = source.rawData.by;
        source.parsedData = true;
      }
      return source.parsedData;
    }
  }, 1);
}

Level.prototype.show = function () {
  for (var i = 0; i < this.shapes.length; i++) {
    this.shapes[i].show();
  }

  this.ball.show();
}
