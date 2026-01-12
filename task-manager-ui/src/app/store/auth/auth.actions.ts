import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);

export const register = createAction(
  '[Auth] Register',
  props<{ username: string; password: string; confirmPassword: string }>()
);

export const authSuccess = createAction(
  '[Auth] Success',
  props<{ token: string; username: string ,role:string}>()
);

export const logout = createAction('[Auth] Logout');

export const registerSuccess = createAction(
  '[Auth] Register Success'
);
export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: string }>()
);
