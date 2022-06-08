import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskList } from 'src/app/models/task-list';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: TaskList[] | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getData();
  }

}
