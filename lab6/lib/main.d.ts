interface Person {
    name: string;
}
declare class Student {
    name: string;
    yob: number;
    constructor(name: string, yob: number);
}
declare function sayHi(person: Person): void;
declare const zenek: Student;
declare let ziutek: {
    name: string;
    yob: number;
};
