import { Component, OnInit } from '@angular/core';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
  	this.tasks = this.fetchAll();
  }

  fetchAll(): Task[] {
  	return this.taskService.fetchAll();
  }

  remove($event: any, tarefa: Task): void {
    $event.preventDefault();
    if (confirm('Do you want to remove the task "' + tarefa.name + '"?')) {
      this.taskService.remove(tarefa.id);
      this.tasks = this.taskService.fetchAll();
    }
  }

  changeStatus(task: Task): void {
    if (confirm('Do you want to change the task status "' + task.name + '"?')) {
      this.taskService.changeStatus(task.id);
      this.tasks = this.taskService.fetchAll();
    }
  }

}
