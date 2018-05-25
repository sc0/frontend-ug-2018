interface Person {
    name: string;
    yob: number;
}
declare class Student {
    name: string;
    yob: number;
    constructor(name: string, yob: number);
}
declare function sayHi(person: Person): void;
declare const zenek: Student;
declare const ziutek: {
    name: string;
    yob: number;
};
declare const mylist: Person[];
declare const mytouple: [Person, number];
