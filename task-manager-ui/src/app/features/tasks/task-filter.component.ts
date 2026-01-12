import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type StatusFilter = 'All' | 'Pending' | 'Completed';
type PriorityFilter = 'All' | 'Low' | 'Medium' | 'High';

@Component({
  standalone: true,
  selector: 'app-task-filter',
  imports: [CommonModule, FormsModule],
 templateUrl: `./task-filter.component.html`
})
export class TaskFilterComponent {

  status: StatusFilter = 'All';
  priority: PriorityFilter = 'All';

  @Output() apply = new EventEmitter<{ status?: string; priority?: string }>();

  onStatusChange(value: StatusFilter) {
    this.status = value;
    this.emitFilters();
  }

  onPriorityChange(value: PriorityFilter) {
    this.priority = value;
    this.emitFilters();
  }

  private emitFilters() {
    this.apply.emit({
      status: this.status === 'All' ? undefined : this.status,
      priority: this.priority === 'All' ? undefined : this.priority
    });
  }
}
