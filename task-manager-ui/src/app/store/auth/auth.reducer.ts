import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  token: string | null;
  username: string | null;
   role?: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  username: localStorage.getItem('username'),
  isAuthenticated: !!localStorage.getItem('token')
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.authSuccess, (_, { token, username,role }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('role', role);
    return { token, username, isAuthenticated: true };
  }),
  on(AuthActions.authSuccess, (_, { token, username,role }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('role', role);
    return { token, username, isAuthenticated: true };
  }),
  on(AuthActions.logout, () => {
    localStorage.clear();
    return { token: null, username: null, isAuthenticated: false };
  })
);
