function Level(_num) {
  this.num = _num;

  var path = "../data/level/";
  var ending = ".json";
  this.rawData = loadJSON(path + this.num + ending);

  this.name = this.rawData.name;
  this.by = this.rawData.by;
}
