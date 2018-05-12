import { Component, OnInit } from '@angular/core';
import {Person} from '../model/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons: Person[];
  selectedPerson: Person;

  constructor() { }

  ngOnInit() {
    this.persons = [ new Person('Bolek', 1976), new Person('Lolek', 1965), new Person('Tola', 1992)];
  }

  selectPerson(person) {
    this.selectedPerson = person;
  }

  detailsChanged() {
    console.log('Witam serdecznie, pozmieniałem detailsy');
  }

}
