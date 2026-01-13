import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { register } from '../../store/auth/auth.actions';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: `./register.component.html`
})
export class RegisterComponent {
  username = '';
  password = '';
  confirmPassword = '';
successMessage = '';
private toastr = inject(ToastrService);
  constructor(private store: Store) {}

  submit() {
     const encryptedPassword = btoa(this.password + ":" + Date.now());
     const encryptedconfirmPassword = btoa(this.confirmPassword + ":" + Date.now())
    this.store.dispatch(register({
      username: this.username,
      password: encryptedPassword,
      confirmPassword: encryptedconfirmPassword
    }));
     this.toastr.error("Registration Sucessfully Completed.");
     this.username='';
     this.password='';
     this.confirmPassword='';
  }
 
}

