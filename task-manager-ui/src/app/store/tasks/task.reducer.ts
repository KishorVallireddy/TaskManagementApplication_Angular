import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './task.actions';
import { Task } from './task.model';

export interface TaskState {
  tasks: Task[];
  filter: { status?: string; priority?: string };
}

const initialState: TaskState = {
  tasks: [],
  filter: {}
};

export const taskReducer = createReducer(
  initialState,

  on(TaskActions.loadTasksSuccess, (s, { tasks }) => ({
    ...s,
    tasks
  })),

//   on(TaskActions.setFilter, (s, filter) => ({
//     ...s,
//     filter
//   }))
);
