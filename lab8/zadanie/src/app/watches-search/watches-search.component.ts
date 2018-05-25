import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-watches-search',
  templateUrl: './watches-search.component.html',
  styleUrls: ['./watches-search.component.css']
})
export class WatchesSearchComponent implements OnInit {

  searchControl = new FormControl();
  @Output() searchQuery = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchUpdated() {
    this.searchQuery.emit(this.searchControl.value);
  }

}
