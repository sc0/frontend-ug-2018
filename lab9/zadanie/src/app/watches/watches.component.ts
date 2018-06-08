import {Component, OnInit} from '@angular/core';
import {Watch} from '../model/watch';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {isNumber} from 'util';
import {HttpClient} from '@angular/common/http';
import {WatchesService} from '../watches.service';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

  addWatch = false;

  watches: Watch[] = [];

  listToShow = this.watches;

  selectedWatch: Watch;

  constructor(private fb: FormBuilder, private watchesService: WatchesService) {
    this.reloadWatches();
  }

  ngOnInit() {
  }

  select(watch) {
    this.selectedWatch = watch;
  }

  updateList(query: string) {
    this.listToShow = this.watches.filter(w => {
      return (w.brand + ' ' + w.model).toLowerCase().includes(query.toLocaleLowerCase());
    });
  }


  reloadWatches() {
    this.watches.splice(0, this.watches.length);
    this.watchesService.getWatches().subscribe((res: any[]) => {
      for (let w of res) {
        this.watches.push(new Watch(
          w.brand,
          w.model,
          w.forMen,
          w.strap,
          w.waterResistence,
          w.price
        ));
      }
    });
  }


  watchAdded() {
    this.addWatch = false;
    this.reloadWatches();
  }

}
