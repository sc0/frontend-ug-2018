import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WatchesComponent } from './watches/watches.component';
import {HttpClientModule} from "@angular/common/http";
import {WatchesSearchComponent} from "./watches-search/watches-search.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {WatchesDetailsComponent} from "./watches-details/watches-details.component";
import {AddWatchComponent} from "./add-watch/add-watch.component";


const appRoutes: Routes = [
  { path: 'watches', component: WatchesComponent },
  { path: '', redirectTo: 'watches', pathMatch: 'full' },
  { path: 'watch/:id', component: WatchesComponent },
  { path: 'add/watch', component: AddWatchComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    WatchesComponent,
    WatchesSearchComponent,
    WatchesDetailsComponent,
    AddWatchComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
