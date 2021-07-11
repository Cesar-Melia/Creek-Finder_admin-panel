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

  createUser(newUser: User) {
    return this.http.post(`${this.API_URL}/auth/register`, newUser)
  }
  deleteUser(userId: string) {
    console.log('soy el delete', userId);
    return this.http.delete(`${this.API_URL}/users/delete/${userId}`)
  }
}
