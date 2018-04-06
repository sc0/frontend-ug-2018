var aShape = {
    numbers: [1, 2, 3, 4, 5],
    scale: 2,

    move() {
        var self = this;

        // Lambdy pozwalają przekazywać this
        // jeśli użyjemy tu zwykłego function()
        // to musimy przekazać kontekst, np. przez zmienną self powyżej

        // this.numbers = this.numbers.map(function(element) {return element * self.scale});
        this.numbers = this.numbers.map(element => element * this.scale);
    }
};

aShape.move();

aShape.numbers.forEach(e => {
    console.log(e);
});


// Najważniejsze nowości w ES6:
/**
 * lambda
 * classes
 * template strings -- z akcentem, można robić stringi które zapisują białe znaki
 *                     i pozwalają na wstawki ${zmienna}
 * default + rest + spread -- przy parametrach f-cji
 * let + const
 * iterators + for ... of
 */