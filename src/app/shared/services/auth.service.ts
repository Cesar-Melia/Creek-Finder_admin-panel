import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = environment.API_URL;
  }

  login(email: string, password: string): any {
    try {
      let body = { email, password };

      return this.http.post(`${this.API_URL}/auth/login`, body, {
        withCredentials: true,
      });
    } catch (error) {
      console.log('Login error: ', error);
    }
  }

  checksession(): any {
    try {
      this.http
        .get(`${this.API_URL}/users/logged`, {
          withCredentials: true,
        })
        .subscribe((userData: any) => {
          console.log('User Data: ', userData);

          return userData.userName;
        });
    } catch (error) {
      console.log('Check session error: ', error);
    }
  }

  logout(): any {
    try {
      return this.http.post(`${this.API_URL}/auth/logout`, {
        withCredentials: true,
      });
    } catch (error) {
      return console.log('Logout error: ', error);
    }
  }
}
