import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() newTask = new EventEmitter<string>();
  public taskName = '';

  constructor() { }

  ngOnInit() {
  }
  newTaskChan(taskName: string) {
    if (taskName) {
      this.newTask.emit(taskName);
      console.log(taskName);
    }
  }
}
