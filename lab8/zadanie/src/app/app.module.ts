import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WatchesComponent } from './watches/watches.component';
import { WatchesDetailsComponent } from './watches-details/watches-details.component';
import { WatchesSearchComponent } from './watches-search/watches-search.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WatchesComponent,
    WatchesDetailsComponent,
    WatchesSearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
