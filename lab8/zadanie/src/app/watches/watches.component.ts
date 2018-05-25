import {Component, OnInit} from '@angular/core';
import {Watch} from '../model/watch';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

  watches: Watch[] = [
    new Watch('Fossil', true, 131, 'FTW1166P', 'bracelet', 50),
    new Watch('Diesel', true, 350, 'DZ7406', 'leather', 50),
    new Watch('MVMT', false, 159, 'Voyager Rose Gold', 'material', 15),
    new Watch('Casio', false, 120, 'G-Shock', 'plastic', 25),
    new Watch('Rolex', false, 435, 'Sky-Dweller', 'bracelet', 30),
    new Watch('MVMT', true, 210, 'Gunmetal Sandstorm', 'leather', 15),
  ];

  listToShow = this.watches;

  selectedWatch: Watch;

  constructor() {
  }

  ngOnInit() {
  }

  select(watch) {
    this.selectedWatch = watch;
  }

  updateList(query: string) {
    this.listToShow = this.watches.filter(w => {
      return (w.brand + ' ' + w.model).toLocaleLowerCase().includes(query.toLocaleLowerCase());
    });
  }

}
