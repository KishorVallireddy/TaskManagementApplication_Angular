import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectUsername, selectIsAuth } from '../store/auth/auth.selectors';
import { logout } from '../store/auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule],
  template: `
    <nav *ngIf="isAuth$ | async">
      <header class="app-header">
      <h2>Task Management</h2>

      <div class="header-right">
        <span>Welcome, {{ username$ | async }}</span>
        <button (click)="onLogout()">Logout</button>
      </div>
    </header>
    </nav>
  `
})
export class NavbarComponent {

  // ✅ Store initialized safely BEFORE usage
  private store = inject(Store);
   private router = inject(Router);

  // ✅ Now this works
  username$ = this.store.select(selectUsername);
  isAuth$ = this.store.select(selectIsAuth);

  onLogout() {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }
}
