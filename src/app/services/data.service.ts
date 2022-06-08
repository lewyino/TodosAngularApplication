import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { TaskList } from '../models/task-list';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private todos: TaskList[] = [
    new TaskList({
      title: 'TODO',
      type: 'todo',
      tasks: [
        new Task({title: 'todo1', type: 'todo'}),
        new Task({title: 'todo2', type: 'todo'}),
        new Task({title: 'todo3', type: 'todo'}),
      ],
    }),
    new TaskList({
      title: 'IN PROGRESS',
      type: 'in_progress',
      tasks: [
        new Task({title: 'in progress 1', type: 'in_progress'}),
      ],
    }),
    new TaskList({
      title: 'DONE',
      type: 'done',
      tasks: [
        new Task({title: 'done 1', type: 'done'}),
      ],
    })
  ]

  constructor() { }

  getData() {
    return this.todos;
  }
}
