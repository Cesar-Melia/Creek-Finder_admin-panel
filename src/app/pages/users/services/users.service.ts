import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'any',
})
export class UsersService {
  DB_URL: string;

  constructor(private http: HttpClient) {
    this.DB_URL = environment.DB_URL;
  }

  getUsers(): any {
    return this.http.get(`${this.DB_URL}/users`);
  }
}
