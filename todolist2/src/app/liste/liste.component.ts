import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  newTask = '';
  taskToDelete = '';
  taskList = [];
  index = 0;
  chan = true;
  control: FormControl = new FormControl('value', Validators.minLength(2));
  constructor() { }

  ngOnInit() {
  }

  addTask(newTask) {
    this.taskList.push(newTask);
  }

  deleteTask(i) {
    this.taskList.splice(i, 1);
  }
  isUpdate() {
    this.chan = !this.chan;
  }

  updateTask(taskUpdate: string, isUpdate: Function) {
        isUpdate();
        console.log(taskUpdate);
        console.log(this.taskList);
      }
}

