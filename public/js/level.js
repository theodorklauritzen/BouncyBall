function Level(_num) {
  this.num = _num;

  var path = "../data/level/";
  var ending = ".json";
  this.rawData = loadJSON(path + this.num + ending);

  this.name = "not parsed";
  this.by = "not parsed";

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
