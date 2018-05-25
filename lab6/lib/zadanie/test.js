"use strict";

var _Watch = require("./Watch");

var _API = require("./API");

var testWatches = [new _Watch.Watch('Diesel', true, 500, 'Big Daddy', 'leather', 50), new _Watch.Watch('Rolex', true, 1500, 'RA545X', 'bracelet', 60), new _Watch.Watch('Fossil', true, 154, 'FA2134', 'bracelet', 10)];

_API.WatchAPI.add(testWatches[0]);

_API.WatchAPI.add(testWatches[1]);

_API.WatchAPI.add(testWatches[2]);

var w = _API.WatchAPI.get(1);

console.log(w);
console.log("Rolexów w kolekcji: " + _API.WatchAPI.getByBrand('Rolex').length);

if (w != null) {
  console.log(w.getFullDescription());

  _API.WatchAPI.remove(w);
}

console.log("Rolexów w kolekcji: " + _API.WatchAPI.getByBrand('Rolex').length);
console.log("Element o id == 10 jest nullem: " + (_API.WatchAPI.get(10) === null));