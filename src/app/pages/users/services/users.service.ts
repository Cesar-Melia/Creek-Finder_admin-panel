import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'any',
})
export class UsersService {
  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = environment.API_URL;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}/users`);
  }

  createUser(userName: string, email: string, password: string, role: string,) {
    let body: Object = { userName, email, password, role }

    return this.http.post(`${this.API_URL}/auth/register`, body)
  }
}
