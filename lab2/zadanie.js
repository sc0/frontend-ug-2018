// Zrobienie modułu / intefrejsu publicznego dla swojej `dziedziny`
// Zaimplementować kilka prostych metod

var WatchModule = (function() {
    var watches = [];

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
        findWatches: _findWatch,
    }
})();