import { Injectable } from '@angular/core';

import { Task } from './';

@Injectable()
export class TaskService {

  constructor() { }

  fetchAll(): Task[] {
  	const tasks = localStorage['tasks'];
  	return tasks ? JSON.parse(tasks) : [];
  }

  create(task: Task): void {
  	const tasks = this.fetchAll();
  	task.id = new Date().getTime();
  	tasks.push(task);
  	localStorage['tasks'] = JSON.stringify(tasks);
  }

  getById(id: number): Task {
    const tasks: Task[] = this.fetchAll();
    return tasks.find(task => task.id === id);
  }

  update(task: Task): void {
    const tasks: Task[] = this.fetchAll();
    tasks.forEach((obj, index, objs) => { 
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  remove(id: number): void {
    let tasks: Task[] = this.fetchAll();
    tasks = tasks.filter(tarefa => tarefa.id !== id);
    localStorage['tasks'] = JSON.stringify(tasks);
  }

  changeStatus(id: number): void {
    const tasks: Task[] = this.fetchAll();
    tasks.forEach((obj, index, objs) => { 
      if (id === obj.id) {
        objs[index].done = !obj.done;
      }
    });
    localStorage['tasks'] = JSON.stringify(tasks);
  }

}
