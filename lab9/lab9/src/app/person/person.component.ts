import { Component, OnInit } from '@angular/core';
import {Person} from '../model/person';
import {PersonService} from '../person.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  myForm: FormGroup;
  imie: AbstractControl;

  constructor(private fb: FormBuilder,  private personService: PersonService) {
    this.myForm = fb.group({
      'imie': ['Podaj imię', [Validators.required, Validators.minLength(3), this.myImieValidator]],
      'yob': ['Podaj rok urodzenia', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
    });

    this.imie = this.myForm.controls['imie'];
    this.yob = this.myForm.controls['yob'];

    this.imie.valueChanges.subscribe(x => console.log(x));
  }

  mySubmit() {
    console.log(this.personService.getPersons());
  }

  myImieValidator(control: FormControl) {
    if (control.value.match(/^Bol/)) {
      return { 'bolekValue': true };
    }
  }

}
