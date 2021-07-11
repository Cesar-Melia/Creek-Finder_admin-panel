import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../pages/users/models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = environment.API_URL;
  }

  login(email: string, password: string) {
    let body: Object = { email, password };

    return this.http.post(`${this.API_URL}/register`, body);
  }

  ///logout
}
