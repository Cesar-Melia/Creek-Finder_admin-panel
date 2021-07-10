import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'any',
})
export class CreeksService {
  DB_URL: string;

  constructor(private http: HttpClient) {
    this.DB_URL = environment.DB_URL;
  }

  getCreeks(): any {
    return this.http.get(`${this.DB_URL}/creeks`);
  }
}
