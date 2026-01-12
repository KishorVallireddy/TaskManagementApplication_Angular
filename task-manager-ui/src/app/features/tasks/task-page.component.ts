import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

import * as TaskActions from '../../store/tasks/task.actions';
import { selectAllTasks } from '../../store/tasks/task.selectors';

import { TaskFormComponent } from './task-form.component';
import { TaskListComponent } from './task-list.component';
import { TaskFilterComponent } from './task-filter.component';

type TabType = 'create' | 'list';

@Component({
  standalone: true,
  selector: 'app-task-page',
  imports: [
    CommonModule,
    TaskFormComponent,
    TaskListComponent,
    TaskFilterComponent
  ],
templateUrl: `./task-page.component.html`
})
export class TaskPageComponent {

  private store = inject(Store);
tasks$ = this.store.select(selectAllTasks);
  activeTab: TabType = 'create';



  setTab(tab: TabType) {
    this.activeTab = tab;
  }

  openListTab() {
    this.activeTab = 'list';
    this.store.dispatch(TaskActions.loadTasks());
  }

  applyFilter(filter: { status?: string; priority?: string }) {
     console.log('FILTER APPLIED', filter);
    this.store.dispatch(TaskActions.loadTasksWithFilter({ filter }));
  }
}
