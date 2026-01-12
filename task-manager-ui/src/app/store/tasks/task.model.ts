export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'Pending' | 'Completed';

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: Priority;
  status: Status;
}
