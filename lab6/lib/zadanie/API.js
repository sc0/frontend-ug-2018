"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WatchAPI = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WatchAPI =
/*#__PURE__*/
function () {
  function WatchAPI() {
    _classCallCheck(this, WatchAPI);
  }

  _createClass(WatchAPI, null, [{
    key: "getIndexOfItem",
    value: function getIndexOfItem(id) {
      var i = -1;
      WatchAPI.collection.forEach(function (item, index) {
        if (item.id === id) {
          i = index;
        }
      });
      return i;
    }
  }, {
    key: "add",
    value: function add(obj) {
      console.log(obj.brand);
      obj.id = WatchAPI.nextId;
      WatchAPI.nextId += 1;
      WatchAPI.collection.push(obj);
      return obj.id;
    }
  }, {
    key: "update",
    value: function update(obj) {
      var index = this.getIndexOfItem(obj.id);
      if (index < 0) return null;
      WatchAPI.collection[index] = obj;
      return obj.id;
    }
  }, {
    key: "remove",
    value: function remove(obj) {
      var index = this.getIndexOfItem(obj.id);
      if (index < 0) return null;
      WatchAPI.collection.splice(index, 1);
      return obj;
    }
  }, {
    key: "get",
    value: function get(objId) {
      var index = this.getIndexOfItem(objId);
      if (index < 0) return null;
      return WatchAPI.collection[index];
    }
  }, {
    key: "getByBrand",
    value: function getByBrand(brand) {
      return WatchAPI.collection.filter(function (x) {
        return x.brand === brand;
      });
    }
  }, {
    key: "getByPrice",
    value: function getByPrice(min, max) {
      return WatchAPI.collection.filter(function (x) {
        return x.price >= min && x.price <= max;
      });
    }
  }]);

  return WatchAPI;
}();

exports.WatchAPI = WatchAPI;
Object.defineProperty(WatchAPI, "collection", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: []
});
Object.defineProperty(WatchAPI, "nextId", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 0
});