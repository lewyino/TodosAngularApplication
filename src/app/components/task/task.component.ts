import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task | undefined;

  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onDeleteButton() {
    if(!this.task?.id) {
      return;
    }
    this.dataService.deleteTask(this.task.id)
      .subscribe((result) => {
        if (result) {
          this.dataService.loadData();
        }
      });
  }

  onEditButton() {
    if(!this.task?.id) {
      return;
    }
    this.router.navigate(['form', this.task.id]);
  }
}
