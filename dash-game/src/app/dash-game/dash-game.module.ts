import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashGameComponent } from './dash-game.component';
import { DashGameService } from './shared';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	DashGameComponent
  ],
  exports: [
  	DashGameComponent
  ],
  providers: [
  	DashGameService
  ]
})
export class DashGameModule { }
