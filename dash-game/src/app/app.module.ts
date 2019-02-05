import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashGameModule } from './dash-game';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
