import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../store/tasks/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private api = '/api/tasks';

  constructor(private http: HttpClient) {}


getTasks(filter?: { status?: string; priority?: string }) {
  const params: any = {};

  if (filter?.status) {
    params.status = filter.status;
  }

  if (filter?.priority) {
    params.priority = filter.priority;
  }

  return this.http.get<any[]>(this.api, { params });
}
  addTask(task: Task) {
    return this.http.post<Task>(this.api, task);
  }

updateTask(task: any) {
  const taskId =
    task.id ??
    task._id ??
    task.taskId ??
    task.TaskID;

  if (!taskId) {
    throw new Error('Task ID missing in update payload');
  }

  return this.http.put(
    `${this.api}/${taskId}`,
    task
  );
}


  deleteTask(id: number) {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
