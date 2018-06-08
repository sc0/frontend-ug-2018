import { Injectable } from '@angular/core';
import {Person} from './model/person';

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  persons: Person[];

  constructor() {
    this.persons = [new Person('Bolek', 1976), new Person('Lolek', 1965), new Person('Tola', 1992)];
  }

  addPerson(person: Person) {
    this.persons.push(person);
  }

  getPersons() {
    return this.persons;
  }
}
