import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { login } from '../../store/auth/auth.actions';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
 templateUrl: `./login.component.html`
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private store: Store) {}

  submit() {
    this.store.dispatch(login({ username: this.username, password: this.password }));
  }
}
