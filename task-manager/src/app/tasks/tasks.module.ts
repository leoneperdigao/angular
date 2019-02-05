import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { 
  TaskService, 
  DoneTaskDirective 
} from './shared';
import { ListTaskComponent } from './list';
import { CreateTaskComponent } from './create';
import { EditTaskComponent } from './edit';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
  	ListTaskComponent,
  	CreateTaskComponent,
  	EditTaskComponent,
  	DoneTaskDirective
  ],
  providers: [
  	TaskService
  ]
})
export class TasksModule { }
