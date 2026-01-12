import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as TaskActions from '../../store/tasks/task.actions';
import { selectAllTasks, selectTasksLoading } from '../../store/tasks/task.selectors';
import { selectUserRole } from '../../store/auth/auth.selectors';

@Component({
  standalone: true,
  selector: 'app-task-list',
  imports: [CommonModule, FormsModule],
 templateUrl: `./task-list.component.html`
})
export class TaskListComponent {

  private store = inject(Store);
editingId: number | null = null;
  tasks$ = this.store.select(selectAllTasks);
  loading$ = this.store.select(selectTasksLoading);
  role$ = this.store.select(selectUserRole);

  isAdmin = false;

  editIndex: number | null = null;
  editTask: any = null;
  submitted = false;

  constructor() {
    this.role$.subscribe(role => {
      this.isAdmin = localStorage.getItem('role') === 'Admin'?true:false;
      console.log(localStorage.getItem('role'));
      
      console.log("isAdmin..."+ this.isAdmin);
      
    });
  }

  // 🔹 START EDIT (index-based like React state)
startEdit(task: any, index: number) {
  this.editIndex = index;

  this.editingId = task.id; // ✅ STORE ID SEPARATELY

  this.editTask = {
    ...task,
    dueDate: task.dueDate ? task.dueDate.slice(0, 10) : ''
  };

  this.submitted = false;
}

  cancelEdit() {
    this.editIndex = null;
    this.editTask = null;
    this.submitted = false;
  }

  isValid(): boolean {
    return (
      this.editTask &&
      this.editTask.title?.trim() &&
      this.editTask.description?.trim() &&
      this.editTask.priority &&
      this.editTask.status &&
      this.editTask.dueDate
    );
  }

saveEdit() {
  this.submitted = true;
  if (!this.isValid()) return;

  const payload = {
    ...this.editTask,
    id: this.editingId // ✅ FORCE ID
  };

  console.log('FINAL UPDATE PAYLOAD', payload); // 👈 MUST SHOW id

  this.store.dispatch(
    TaskActions.updateTask({ task: this.editTask })
  );

  this.cancelEdit();
}

  deleteTask(id: number) {
    if (!this.isAdmin) return;
    this.store.dispatch(TaskActions.deleteTask({ id }));
  }
}
