interface Person {
    name: string;
    yob: number;

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
const ziutek = { name: 'Ziutek', yob: 1967 };
const mylist: Person[] = [ zenek, ziutek ];

const mytouple: [Person, number] = [zenek, 2012];


sayHi(zenek);