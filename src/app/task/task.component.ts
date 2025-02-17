import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export default class TaskComponent {
  @Input() task?: Task;
  @Output() onPinTask = new EventEmitter<string>();
  @Output() onArchiveTask = new EventEmitter<string>();

  onPin(id: string): void {
    this.onPinTask.emit(id);
  }

  onArchive(id: string): void {
    this.onArchiveTask.emit(id);
  }
}
