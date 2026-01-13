import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { login } from '../../store/auth/auth.actions';
import * as CryptoJS from 'crypto-js';

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
    // const encryptedPassword = CryptoJS.SHA256(this.password).toString();
     let time= "1234567890";
     const encryptedPassword = btoa(this.password + ":" + time)
    this.store.dispatch(login({ username: this.username, password: encryptedPassword }));
  }
}
