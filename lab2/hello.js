// Obiekty
var obj = {
    "imie": "Jan",
    nazwisko: "Kowalski",
    rokUr: 1993
}

console.log(obj.imie);
obj.miasto = "Gdańsk";

console.log(obj["miasto"]);

// Tablice
console.log('\n\n');
var someArray = [1,2,"trzy"];

someArray.push(5);

someArray.miasto = "Gdańsk";

console.log(someArray);
console.log(someArray.miasto);


// Typy
console.log('\n\n');
console.log(typeof new Object());
console.log(typeof new Array());
console.log(typeof new Number());
console.log(typeof new Boolean(true));
console.log(typeof true);
console.log(typeof "true");
console.log(typeof null);
console.log(typeof NaN);


// Funkcje - jako zmienna
console.log('\n\n');

var add = function (a,b) {
    return a + b;
};

function multiply (a,b) {
    return a * b;
}

console.log(add(3, 4, 5));
console.log(multiply(3,4));

console.log(typeof add);
console.log(typeof multiply);

// Funkcje - jako argument innej funkcji
console.log('\n\n');

var higherOrderFunction = function (fun, b) {
    return fun(b) + b;
};

function foo(a) {
    return a * a;
}

console.log(higherOrderFunction(foo, 4));


// Funkcje - jako wartości zwracane z funkcji
console.log('\n\n');

var counter = function() {
    var i = 0; // Pamiętać o var, jak nie ma var to zmienne stają się globalne

    function incr() { // function scope - funkcja wewnętrzna jest widziana tylko w obrębie funkcji zewnętrznej (i jej wewnętrznych)
        return i = i + 1;
    }

    return function() {
        return incr();
    };
};

var c = counter();

c();
c();
c();

var d = counter();

d();
d();

console.log(typeof c);
console.log(c());
console.log(d());

// moduły
console.log('\n\n');

var lib = {};

lib = (function () {
    // Część prywatna
    var c = 0;
    var priv2 = "Hello";

    return {
        // Część publiczna
        message: priv2 + " World",
        counter: function() {
            return ++c;
        },
        sayHello: function(name) {
            return "Hello " + name;
        }
     };
})();

console.log(lib.sayHello("Ziutek"));
console.log(lib.counter());
console.log(lib.counter());


// This - konteksty
console.log('\n\n');

// kontekst globalny
function z() { // z działa w kontekście globalnym, więc nie zadziała w kontekstach nie zawieracjących `imie` 
    console.log(this.imie);
}
imie = "Ziutek";
z();

// kontekst konstruktora
console.log('\n');

function Person(name) { // Konstruktory zawsze wielką literą
    this.name = name;
}

var ziutek = new Person("Ziutek"); // z operatorem new - wywołanie w kontekście konstruktora
var heniek = new Person("Heniek"); // konstruktor od funkcji nie rózni się niestety niczym, poza tym ze powinien być wywołany z new.

console.log(ziutek.name);
console.log(heniek.name);

// kontekst metody
console.log('\n');
var person = {
    imie: "Nieznane",

    sayHello: function () {
        return "hello " + this.imie; // this odnosi się do kontekstu metody
    }
};

imie = "Henio"; // To nic nie zmieni bo this wiąże do elementu otaczającego
console.log(person.sayHello());

// kontekst apply
console.log('\n');

function quack() {
    return console.log("Jestem kaczką bo mówię " + this.kwakwa);
}

var kaczka = {
    kwakwa: "KWA KWA",
    message: "KWA KWA"
};

var pies = {
    hauhau: "HAU HAU",
    message: "HAU HAU"
}

quack.apply(kaczka);
quack.apply(pies);  // pies nie umie kwakać

function say(what) {
    return console.log("Jestem " + what + " bo mówię " + this.message); // wersja uniwersalna
}

say.apply(kaczka, ['kaczka']); // pierwszy argument `wstrzykuje` obiekt, który ma być `this`
say.apply(pies, ['pies']); // drugi argument to lista argumentów do funkcji na której wołamy apply

// Filtrowanie
console.log('\n\n');
var numbers = [1,2,3,4,5,6];

var evenNumbers = numbers.filter(function(item) {
    return item % 2 === 0;
});

console.log(evenNumbers);