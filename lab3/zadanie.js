"use strict";
var WatchModule = (function () {
    var watches = [];

    var _add = function (w) {
        watches.push(w);
    };

    var _findByBrand = function (brand_name) {
        return watches.filter(function (w) {
            return w.brand.toLowerCase() === brand_name.toLowerCase();
        });
    };

    var _findByPrice = function (minPrice, maxPrice) {
        return watches.filter(function (w) {
            return w.price >= minPrice && w.price <= maxPrice;
        });
    };

    var _getForMen = function () {
        return watches.filter(function (w) {
            return w.forMen;
        });
    };

    var _getForWomen = function () {
        return watches.filter(function (w) {
            return !w.forMen;
        });
    };

    var Accessory = function(brand, forMen, price) {
        this.brand = brand; 
        this.forMen = forMen;
        this.price = price;
    };

    Accessory.prototype.getDescription = function() {
        var forWhom = this.forMen? "for men" : "for women";
        return this.brand + " " + forWhom + " for just " + this.price + " USD!!!";
    }

    var Watch = function (brand, forMen, price, model, strapType, waterResistance) {
        Accessory.call(this, brand, forMen, price);
        this.model = model;
        this.strapType = strapType; 
        this.waterResistance = waterResistance;
    }

    Watch.prototype = Object.create(Accessory.prototype);
    Watch.prototype.constructor = Watch;

    Watch.prototype.getFullDescription = function() {
        var desc = this.getDescription();
        return desc + "\nThis great watch is called " + this.model + ", " +
        "with premium " + this.strapType + " strap, and can handle even " + this.waterResistance +
        " meters below surface of water! Buy it now!";
    }

    return {
        Accessory: Accessory,
        Watch: Watch,

        add: _add,
        findByBrand: _findByBrand,
        findByPrice: _findByPrice,
        getForMen: _getForMen,
        getForWomen: _getForWomen
    };
}());

var watch = new WatchModule.Watch("Fossil", true, 89, "JR1401P", "bracelet", 10);
console.log(watch.getFullDescription());

WatchModule.add(watch);

watch = new WatchModule.Watch("Fossil", false, 68, "ES4382P", "leather", 5);
WatchModule.add(watch);

watch = new WatchModule.Watch("Diesel", true, 189, "DZ7314", "leather", 30);
WatchModule.add(watch);


var fossilWatches = WatchModule.findByBrand("Fossil");
console.log("Fossil watches: " + fossilWatches.length);