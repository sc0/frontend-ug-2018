interface Person {
    name: string;
}


class Student { 
    constructor (public name: string, public yob: number) {
        this.name = name;
        this.yob = yob;
    }
}


function sayHi(person: Person) {
    console.log('Hello ' + person.name);
}

const zenek = new Student('Zenek', 1993);
let ziutek = { name: 'Ziutek', yob: 1967 };

sayHi(zenek);