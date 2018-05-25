import {Component, Input, OnInit} from '@angular/core';
import {Watch} from '../model/watch';

@Component({
  selector: 'app-watches-details',
  templateUrl: './watches-details.component.html',
  styleUrls: ['./watches-details.component.css']
})
export class WatchesDetailsComponent implements OnInit {

  @Input() watch: Watch;

  constructor() { }

  ngOnInit() {
  }

}
