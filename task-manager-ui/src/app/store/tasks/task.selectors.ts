import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from './task.reducer';

export const selectTaskState =
  createFeatureSelector<TaskState>('tasks');
export const selectAllTasks = createSelector(
  selectTaskState,
  (state) => state.tasks ?? []   
);
export const selectTasksLoading = createSelector(
  selectTaskState,
  (state) => (state as any).loading ?? false
);
export const selectFilteredTasks = createSelector(
  selectTaskState,
  ({ tasks, filter }) =>
    tasks.filter(t =>
      (!filter.status || t.status === filter.status) &&
      (!filter.priority || t.priority === filter.priority)
    )
);


