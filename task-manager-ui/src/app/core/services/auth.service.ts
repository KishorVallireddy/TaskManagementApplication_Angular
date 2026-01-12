import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = '/api/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>(`${this.api}/login`, { username, password });
  }

  register(username: string, password: string, confirmPassword: string) {
    console.log("user"+username);
    
    return this.http.post<any>(`${this.api}/register`, {
      username,
      password,
      confirmPassword
    });
  }
}
