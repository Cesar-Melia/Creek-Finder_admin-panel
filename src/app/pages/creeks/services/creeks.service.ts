import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Creek } from '../models/Creek';

@Injectable({
  providedIn: 'any',
})
export class CreeksService {
  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = environment.API_URL;
  }

  getCreeks(): Observable<Creek[]> {
    return this.http.get<Creek[]>(`${this.API_URL}/creeks`);
  }
}
