import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskList } from 'src/app/models/task-list';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: TaskList[] = [
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

  ngOnInit(): void {
  }

}
