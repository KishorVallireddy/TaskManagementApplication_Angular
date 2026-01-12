import { createAction, props } from '@ngrx/store';
import { Task } from './task.model';

// 🔹 Normal load (no filter)
export const loadTasks = createAction('[Task] Load');

// 🔹 Load with filter
export const loadTasksWithFilter = createAction(
  '[Task] Load With Filter',
  props<{ filter: { status?: string; priority?: string } }>()
);

export const loadTasksSuccess = createAction(
  '[Task] Load Success',
  props<{ tasks: Task[] }>()
);

export const addTask = createAction(
  '[Task] Add',
  props<{ task: Task }>()
);

export const addTaskSuccess = createAction(
  '[Task] Add Success'
);

export const updateTask = createAction(
  '[Task] Update',
  props<{ task: Task }>()
);

export const deleteTask = createAction(
  '[Task] Delete',
  props<{ id: number }>()
);
