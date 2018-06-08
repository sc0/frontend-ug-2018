import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {isNumber} from 'util';
import {Watch} from '../model/watch';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WatchesService} from '../watches.service';

@Component({
  selector: 'app-add-watch',
  templateUrl: './add-watch.component.html',
  styleUrls: ['./add-watch.component.css']
})
export class AddWatchComponent implements OnInit {

  @Output() formSubmitted = new EventEmitter<any>();
  newWatchForm: FormGroup;
  constructor(private fb: FormBuilder, private watchesService: WatchesService) { }

  ngOnInit() {
    this.newWatchForm = this.fb.group({
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]],
      strap: ['', [Validators.required]],
      forMen: [true, [Validators.required]],
      waterResistence: ['', [Validators.required, this.nonNegativeNumberValidator]],
      price: ['', [Validators.required, this.nonNegativeNumberValidator]],
    });
  }

  onSubmit(formValue) {
      this.watchesService.addWatch(formValue).subscribe(res => this.formSubmitted.emit());
  }

  nonNegativeNumberValidator(control: FormControl) {
    if (isNaN(parseInt(control.value, 10)) || parseInt(control.value, 10) <= 0) {
      return {'notNonNegativeNumberError': true};
    }
  }

}
