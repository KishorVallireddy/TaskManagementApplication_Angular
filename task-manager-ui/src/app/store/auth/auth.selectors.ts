import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuth = createFeatureSelector<AuthState>('auth');

export const selectUsername = createSelector(
  selectAuth,
  s => s.username
);

export const selectIsAuth = createSelector(
  selectAuth,
  s => s.isAuthenticated
);
/**
 * Feature selector
 * Key must match provideStore({ auth: authReducer })
 */
export const selectAuthState =
  createFeatureSelector<AuthState>('auth');

/**
 * Role selector
 * Default to 'User' if missing
 */
export const selectUserRole = createSelector(
  selectAuthState,
  (state) => (state as any).role ?? 'User'
);

/**
 * Authenticated flag
 */
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);
