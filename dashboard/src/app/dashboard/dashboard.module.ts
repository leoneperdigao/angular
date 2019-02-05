import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DataService } from './data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	DashboardComponent
  ],
  exports: [
  	DashboardComponent
  ],
  providers: [
  	DataService
  ]
})
export class DashboardModule { }
