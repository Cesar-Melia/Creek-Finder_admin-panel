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
  userlinkid: any;

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}/users`);
  }

  getUsersId(userId: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}/users/${userId}`);
  }

  createUser(newUser: User): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/auth/register`, newUser);
  }

  deleteUser(userId: string): Observable<User> {
    return this.http.delete<User>(`${this.API_URL}/users/delete/${userId}`);
  }

  editUser(userId: string, editUser: User) {
    return this.http.put(`${this.API_URL}/users/edit/${userId}`, editUser);
  }
}
