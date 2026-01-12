import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from '../../core/services/task.service';
import * as TaskActions from './task.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TaskEffects {
  private actions$ = inject(Actions);
  private service = inject(TaskService);
 private toastr = inject(ToastrService);
load$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TaskActions.loadTasks),
    switchMap(() =>
      this.service.getTasks().pipe(
        map(tasks =>
          TaskActions.loadTasksSuccess({
            tasks: tasks.map(t => ({
              ...t,
              id: t.id ?? t._id ?? t.taskId ?? t.TaskID // 👈 normalize
            }))
          })
        )
      )
    )
  )
);

loadWithFilter$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TaskActions.loadTasksWithFilter),
    switchMap(({ filter }) =>
      this.service.getTasks(filter).pipe(
        map(tasks => TaskActions.loadTasksSuccess({ tasks }))
      )
    )
  )
);

add$ = createEffect(
  () =>
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      switchMap(({ task }) =>
        this.service.addTask(task).pipe(
          tap(() => {
            this.toastr.success('Task added successfully');
          })
        )
      )
    ),
  { dispatch: false } // 🔥 IMPORTANT
);
  addTaskSuccessToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TaskActions.addTaskSuccess),
        map(() => {
          this.toastr.success('Task added successfully');
        })
      ),
    { dispatch: false }
  );

update$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TaskActions.updateTask),
    switchMap(({ task }) =>
      this.service.updateTask(task).pipe(
        map(() => TaskActions.loadTasks())
      )
    )
  )
);

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      switchMap(({ id }) => this.service.deleteTask(id)),
      map(() => TaskActions.loadTasks())
    )
  );
}
