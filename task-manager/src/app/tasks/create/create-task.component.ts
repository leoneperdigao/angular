import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  @ViewChild('formTask') formTask: NgForm;
  task: Task;

  constructor(private taskService: TaskService,
  	private router: Router) { }

  ngOnInit() {
  	this.task = new Task(0, "", false);
  }

  create(): void {
    if (this.formTask.form.valid) {
  	  this.taskService.create(this.task);
  	  this.router.navigate(["/tasks"]);
    }
  }

}
