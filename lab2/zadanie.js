// Zrobienie modułu / intefrejsu publicznego dla swojej `dziedziny`
// Zaimplementować kilka prostych metod

var WatchModule = (function() {
    var watches = [];

    _addWatch = function(w) {
        watches.push(w);
    }

    _findWatchesByBrand = function(brand_name) {
        return watches.filter(function(w) {
            return w.brand.toLowerCase() === brand_name.toLowerCase();
        });
    }

    _findWatchesByPrice = function(minPrice, maxPrice) {
        return watches.filter(function(w) {
            return w.price >= minPrice && w.price <= maxPrice;
        })
    }

    _getMaleWatches = function() {
        return watches.filter(function(w) {
            return w.forMen;
        });
    }
    
    _getFemaleWatches = function() {
        return watches.filter(function(w) {
            return !w.forMen;
        });
    }

    return {
        Watch: function() {
            this.brand = '';
            this.model = '';
            this.strapType = '';
            this.price = 0;
            this.forMen = true;
            this.waterResistance = 0;
        },
        addWatch: _addWatch,
        findWatchesByBrand: _findWatchesByBrand,
        findWatchesByPrice: _findWatchesByPrice,
        getMaleWatches: _getMaleWatches,
        getFemaleWatches: _getFemaleWatches,
    }
})();

var zeg1 = new WatchModule.Watch();
zeg1.brand = "Fossil";
zeg1.model = "JR1401P";
zeg1.strapType = "Bransoleta";
zeg1.price = 565;
zeg1.forMen = true;
zeg1.waterResistance = 10;

var zeg2 = new WatchModule.Watch();
zeg2.brand = "Fossil";
zeg2.model = "ES4382P";
zeg2.strapType = "Pasek skórzany";
zeg2.price = 428;
zeg2.forMen = false;
zeg2.waterResistance = 5;

var zeg3 = new WatchModule.Watch();
zeg3.brand = "Diesel";
zeg3.model = "DZ7314";
zeg3.strapType = "Pasek skórzany";
zeg3.price = 1198;
zeg3.forMen = true;
zeg3.waterResistance = 30;

console.log(zeg1);
console.log('----------------');

WatchModule.addWatch(zeg1);
WatchModule.addWatch(zeg2);
WatchModule.addWatch(zeg3);

console.log(WatchModule.findWatchesByBrand("fossil"));
console.log('----------------');

console.log(WatchModule.findWatchesByPrice(500, 1200));
console.log('----------------');

console.log(WatchModule.getFemaleWatches());
