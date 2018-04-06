function Shape(x, y) {
    this.x = x;
    this.y = y;
}

// Żeby rozszerzyć klasę i dać możliwość instancji do wołania metody,
// należy rozszerzyć klasę przez prototype

// W ten sposób przez prototype można definiować sobie klasę
Shape.prototype.message = function() {
    console.log("Heello from message");
};

Shape.prototype.getX = function() {
    return this.x;
};

Shape.prototype.move = function (dx, dy) {
    this.x += dx; 
    this.y += dy;
};

// Wersja alternatywna:
Shape.prototype = {
    getX: function() {
        return this.x;
    },
    message: function() {
        console.log("Heello from messsage");
    },
    move: function(dx, dy) {
        this.x += dx; 
        this.y += dy;
    }
};

var aShape = new Shape(2,4);

console.log(aShape);

// Jakby nie było Shape.prototype.message, tylko Shape.message przy definicji,
// to to by rzuciło błędem "message is not a function"
aShape.message();
console.log(aShape.getX());
aShape.move(40, 32);
console.log(aShape.getX());

//--------- teraz dziedziczenie

function Circle (x, y, r) {
    Shape.call(this, x, y);
    this.r = r;
}

Circle.prototype = Object.create(Shape.prototype);

// Nadpisanie konstruktora danego obiektu. Po linijce ^^ konstruktorem byłby Shape,
// a przecież już zdefiniowaliśmy sobie konstruktor klasy potomnej i to jego chcemy używać.
Circle.prototype.constructor = Circle;

Circle.prototype.area = function() {
    return Math.PI * this.r * this.r;
}

var aCircle = new Circle(10, 10, 10);

console.log(aCircle.area());