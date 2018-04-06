// Funkcja która pozwala na "dziedziczenie" - jako proto podajemy
// obiekt bazowy, w środku sobie tam dodajemy co tam chcemy.

// Funkcji create nie musimy sami pisać, jest Object.create
function create(proto) {
    function F() {}
    F.prototype = proto;
    F.prototype.sayHello = function() {
        return "Hello world";
    }
    return new F();
}

var base = {
    x: 5,
    y: 7,
    getX: function() {
        return this.x;
    },
    getY: function() {
        return this.y;
    }
}

var someExtension = create(base);

console.log(someExtension.getX());
console.log(someExtension.sayHello());