import { Injectable } from '@angular/core';
import {Person} from './model/person';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  public persons: Person[];

  constructor(private http: HttpClient) {
    this.persons = [new Person('Bolek', 1976), new Person('Lolek', 1965), new Person('Tola', 1992)];
  }

  addPerson(person: any) {
    return this.http.post('http://localhost:8080/person', person);
  }

  getPersons() {
    return this.http.get('http://localhost:8080/persons').subscribe((res: any[]) => { this.persons = res; });
  }
}
