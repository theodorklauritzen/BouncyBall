function Level(_num) {
  this.num = _num;

  var path = "../data/level/";
  var ending = ".json";
  this.rawData = loadJSON(path + this.num + ending);

  this.name = "loading ...";
  this.by = "loading ...";

  this.parsedData = false;

  var soucre = this;
  var interval = setInterval(function() {
    if(parseData()) {
      clearInterval(interval);
    }

    function parseData() {
      if(soucre.rawData.name != undefined && soucre.rawData.by != undefined) {
        soucre.name = soucre.rawData.name;
        soucre.by = soucre.rawData.by;
        soucre.parsedData = true;
      }
      return soucre.parsedData;
    }
  }, 1);
}

Level.prototype.setupDraw = function() {
  this.shapes = [];
  for (var i = 0; i < this.rawData.shapes.length; i++) {
    this.shapes.push(new Shape(this.rawData.shapes[i]));
  }
}
