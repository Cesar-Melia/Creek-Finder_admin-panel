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

  getCreekId(creekId: string): Observable<Creek[]> {
    return this.http.get<Creek[]>(`${this.API_URL}/creeks/${creekId}`);
  }

  postCreek(newCreek: Creek): any {
    return this.http.post(`${this.API_URL}/creeks/create`, newCreek);
  }

  deleteCreek(creekId: string): any {
    return this.http.delete(`${this.API_URL}/creeks/delete/${creekId}`);
  }

  editCreek(creekId: string, editCreek: Creek) {
    return this.http.put(`${this.API_URL}/creeks/edit/${creekId}`, editCreek);
  }
}
