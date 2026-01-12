import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login.component';
import { RegisterComponent } from './features/auth/register.component';

import { TaskPageComponent } from './features/tasks/task-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tasks', component: TaskPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
  
];
