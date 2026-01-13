import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import * as AuthActions from './auth.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private auth = inject(AuthService);
  private router = inject(Router);
private toastr = inject(ToastrService);
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ username, password }) =>
        this.auth.login(username, password).pipe(
          map(res =>
            AuthActions.authSuccess({
              token: res.access_token,
              username: res.username,
              role: res.role 
            })
          )
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ username, password, confirmPassword }) =>
        this.auth.register(username, password, confirmPassword).pipe(
          map(res =>
            AuthActions.registerSuccess()
          )
        )
      )
    )
  );
registerSuccessAlert$ = createEffect(
  () =>
    this.actions$.pipe(
      ofType(AuthActions.registerSuccess),
      tap(() => {
          console.log("");
      })
    ),
  { dispatch: false }
);

  // NAVIGATION EFFECT
  navigateAfterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.authSuccess),
        tap(() => this.router.navigate(['/tasks']))
      ),
    { dispatch: false }
  );
}
