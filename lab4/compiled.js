'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Accessory = function () {
    function Accessory(brand, forMen, price) {
        _classCallCheck(this, Accessory);

        this.brand = brand;
        this.forMen = forMen;
        this.price = price;
    }

    _createClass(Accessory, [{
        key: 'getDescription',
        value: function getDescription() {
            var forWhom = this.forMen ? 'for men' : 'for women';
            return this.brand + ' ' + forWhom + ' for just ' + this.price + ' USD!!';
        }
    }]);

    return Accessory;
}();

var Watch = function (_Accessory) {
    _inherits(Watch, _Accessory);

    function Watch(brand, forMen, price, model, strapType) {
        var waterResistance = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        _classCallCheck(this, Watch);

        var _this = _possibleConstructorReturn(this, (Watch.__proto__ || Object.getPrototypeOf(Watch)).call(this, brand, forMen, price));

        _this.model = model;
        _this.strapType = strapType;
        _this.waterResistance = waterResistance;
        return _this;
    }

    _createClass(Watch, [{
        key: 'getFullDescription',
        value: function getFullDescription() {
            return this.getDescription() + '\nThis great watch is called ' + this.model + ', ' + ('with premium ' + this.strapType + ' strap, and can handle even ' + this.waterResistance) + ' meters below surface of water! Buy it now!';
        }
    }]);

    return Watch;
}(Accessory);

var WatchCollection = function () {
    function WatchCollection() {
        _classCallCheck(this, WatchCollection);

        this.watches = [];
    }

    _createClass(WatchCollection, [{
        key: 'add',
        value: function add() {
            for (var _len = arguments.length, watches = Array(_len), _key = 0; _key < _len; _key++) {
                watches[_key] = arguments[_key];
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = watches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var watch = _step.value;

                    this.watches.push(watch);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'findByBrand',
        value: function findByBrand(brand) {
            return this.watches.filter(function (w) {
                return w.brand.toLowerCase() === brand.toLowerCase();
            });
        }
    }, {
        key: 'findByPrice',
        value: function findByPrice() {
            return this.watches.filter(function (w) {
                return w.price >= minPrice && w.price <= maxPrice;
            });
        }
    }, {
        key: 'getForMen',
        value: function getForMen() {
            return this.watches.filter(function (w) {
                return w.forMen;
            });
        }
    }, {
        key: 'getForWomen',
        value: function getForWomen() {
            return this.watches.filter(function (w) {
                return !w.forMen;
            });
        }
    }]);

    return WatchCollection;
}();

var watches = new WatchCollection();

var watchesDataArray = [["Fossil", false, 68, "ES4382P", "leather", 5], ["Fossil", true, 89, "JR1401P", "bracelet", 10], ["Diesel", true, 189, "DZ7314", "leather", 30]];

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = watchesDataArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var watchData = _step2.value;

        var watch = new (Function.prototype.bind.apply(Watch, [null].concat(_toConsumableArray(watchData))))();
        watches.add(watch);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var found = watches.findByBrand('fossil');

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = found[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var w = _step3.value;

        console.log(w.getFullDescription());
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}
