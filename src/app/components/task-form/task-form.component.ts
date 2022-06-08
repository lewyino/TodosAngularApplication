import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  form: FormGroup | undefined;

  constructor(private fb: FormBuilder,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required]]
    });
  }

  onFormSubmit() {
    if (!this.form?.valid) {
      return;
    }
    const task = new Task(this.form.value);
    this.dataService.addTask(task)
      .subscribe((result) => {
        console.log('add task', result);
      });
  }

}
