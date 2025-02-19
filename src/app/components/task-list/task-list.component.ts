import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ArchiveTask, PinTask } from '../../state/task.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
})
export default class TaskListComponent {
  tasks$?: Observable<Task[]>;

  constructor(private store: Store) {
     this.tasks$ = store.select((state) => state.taskbox.tasks);
  }

  archiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
  }

  pinTask(id: string) {
    this.store.dispatch(new PinTask(id));
  }
}