import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Input() loading = false;
  @Output() onPinTask = new EventEmitter<Event>();
  @Output() onArchiveTask = new EventEmitter<Event>();
}
