import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from 'src/app/models/task-list';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() taskList: TaskList | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
