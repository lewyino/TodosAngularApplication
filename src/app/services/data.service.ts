import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, Subject } from 'rxjs';
import { Task } from '../models/task';
import { TaskList } from '../models/task-list';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly URL = 'http://localhost:3000/tasks';

  private data$: Subject<TaskList[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<TaskList[]> {
    return this.data$;
  }

  loadData() {
    this.httpClient
      .get<Task[]>(this.URL)
      .pipe(
        catchError((err) => {
          console.error(err);
          return of([]);
        })
      )
      .subscribe((data: Task[]) => {
        console.log(data);
        const todoList = new TaskList({
          title: 'TODO',
          type: 'todo',
          tasks: [],
        });
        const inProgressList = new TaskList({
          title: 'IN PROGRESS',
          type: 'in_progress',
          tasks: [],
        });
        const doneList = new TaskList({
          title: 'DONE',
          type: 'done',
          tasks: [],
        });
        data.forEach((task: Task) => {
          switch (task.type) {
            case 'todo': todoList.tasks.push(task); break;
            case 'in_progress': inProgressList.tasks.push(task); break;
            case 'done': doneList.tasks.push(task); break;
          }
        });
        this.data$.next([todoList, inProgressList, doneList]);
      });
  }
}
