import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import * as TaskActions from '../../store/tasks/task.actions';

type TaskStatus = 'Pending' | 'Completed';
type TaskPriority = 'Low' | 'Medium' | 'High' | '';

@Component({
  standalone: true,
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
 templateUrl: `./task-form.component.html`
})
export class TaskFormComponent {

  private store = inject(Store);
private toastr = inject(ToastrService);
  title = '';
  description = '';
  priority: TaskPriority = '';
  status: TaskStatus = 'Pending';
  dueDate = this.getTodayDate();
  error = '';
getTodayDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
  // Same validation logic as React
  validate(): boolean {
    if (!this.title.trim()) {
      this.error = 'Title is required';
      return false;
    }

    if (!this.description.trim()) {
      this.error = 'Description is required';
      return false;
    }

    if (!this.priority) {
      this.error = 'Priority is required';
      return false;
    }

    if (!this.dueDate) {
      this.error = 'Due date is required';
      return false;
    }

    const selectedDate = new Date(this.dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      this.error = 'Due date cannot be in the past';
      return false;
    }

    this.error = '';
    return true;
  }

  handleSubmit() {
    if (!this.validate()) return;

    this.store.dispatch(
      TaskActions.addTask({
        task: {
          id: 0,
          title: this.title,
          description: this.description,
          priority: this.priority as any,
          status: this.status,
          dueDate: this.dueDate
        }
      })
    );
    
 this.toastr.success('Task added successfully');
  

    // Reset form
    this.title = '';
    this.description = '';
    this.priority = 'Low';
    this.status = 'Pending';
    this.dueDate = this.getTodayDate();
  }
}
