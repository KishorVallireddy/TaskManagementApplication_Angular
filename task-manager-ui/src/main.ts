import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { App } from './app/app';
import { routes } from './app/app.routes';
import { authReducer } from './app/store/auth/auth.reducer';
import { AuthEffects } from './app/store/auth/auth.effects';
import { authInterceptor } from './app/core/interceptors/auth.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { taskReducer } from './app/store/tasks/task.reducer';
import { TaskEffects } from './app/store/tasks/task.effects';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideStore({ auth: authReducer ,tasks: taskReducer}),
    provideEffects(AuthEffects),
      provideEffects(TaskEffects),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations(),
    provideToastr({
      timeOut: 9000,
      positionClass: 'toast-top-center',
      preventDuplicates: true
    })
  ]
});
