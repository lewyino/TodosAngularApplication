import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Task } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  form: FormGroup | undefined;
  originalTask: Task | null = null;

  constructor(private fb: FormBuilder,
    private dataService: DataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required]]
    });
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.dataService.getTask(id)
        .subscribe((task: Task | null) => {
          if (task) {
            this.form?.patchValue(task);
            this.originalTask = task;
          }
        });
    }
  }

  onFormSubmit() {
    if (!this.form?.valid) {
      return;
    }
    if (this.originalTask) {
      const task = new Task({
        ...this.originalTask,
        ...this.form.value
      });
      this.dataService.editTask(task)
        .subscribe((result) => {
          console.log('edit task', result);
        });
      return;
    }
    const task = new Task(this.form.value);
    this.dataService.addTask(task)
      .subscribe((result) => {
        console.log('add task', result);
      });
  }

}
