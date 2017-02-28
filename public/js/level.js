function Level(_num) {
  this.num = _num;

  var path = "../data/level/";
  var ending = ".json";
  this.rawData = loadJSON(path + this.num + ending);

  this.name = "not parsed";
  this.by = "not parsed";

  this.parsedData = false;
}

Level.prototype.parseData = function() {
  if(this.rawData.name != undefined && this.rawData.by != undefined) {
    this.name = this.rawData.name;
    this.by = this.rawData.by;
    this.parsedData = true;
  }
  return this.parsedData;
}
