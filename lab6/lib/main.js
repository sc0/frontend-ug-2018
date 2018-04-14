"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function Student(name, yob) {
  _classCallCheck(this, Student);

  this.name = name;
  this.yob = yob;
};

function sayHi(person) {
  console.log('Hello ' + person.name);
}

var zenek = new Student('Zenek', 1993);
var ziutek = {
  name: 'Ziutek',
  yob: 1967
};
sayHi(zenek);