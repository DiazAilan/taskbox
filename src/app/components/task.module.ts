import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import TaskListComponent from './task-list/task-list.component';
import  { TasksState } from '../state/task.state';
import PureTaskListComponent from './pure-task-list/pure-task-list.component';
import TaskComponent from './task/task.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TaskListComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent],
  providers: [],
})
export class TaskModule {}