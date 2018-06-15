import { Component, OnInit } from '@angular/core';
import {Watch} from "../model/watch";
import {WatchShort} from "../model/WatchShort";
import {WatchesService} from "../services/watches.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

  addWatch = false;
  showWatch = false;
  watchData: Watch;
  watches: WatchShort[] = [];
  listToShow: WatchShort[] = this.watches;

  selectedWatch = -1;

  constructor(private watchesService: WatchesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.watchesService.getWatches().subscribe((result: WatchShort[]) => {
      this.watches = result;
      this.listToShow = this.watches;
    });

    this.route.params.subscribe(params => {
      this.select(+params.id);
    });

  }

  select (watchId: number) {
    this.selectedWatch = watchId;
    this.watchesService.getWatch(watchId).subscribe((result: Watch) => {
      this.showWatch = true;
      this.watchData = result;
    });
  }

  updateList(query: string) {
    this.listToShow = this.watches.filter((w: WatchShort) => {
      return (w.brand + ' ' + w.model).toLowerCase().includes(query.toLowerCase());
    });
  }

}
