import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WatchesComponent } from './watches/watches.component';
import { WatchesDetailsComponent } from './watches-details/watches-details.component';
import { WatchesSearchComponent } from './watches-search/watches-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddWatchComponent } from './add-watch/add-watch.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WatchesComponent,
    WatchesDetailsComponent,
    WatchesSearchComponent,
    AddWatchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
