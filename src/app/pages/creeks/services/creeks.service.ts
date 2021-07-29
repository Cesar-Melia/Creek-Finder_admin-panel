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
  types: string[];
  provinces: string[];

  constructor(private http: HttpClient) {
    this.API_URL = environment.API_URL;
    this.types = ['', 'arena', 'rocas', 'cantos rodados'];
    this.provinces = [
      '',
      'Alicante',
      'Almería',
      'Asturias',
      'Barcelona',
      'Cádiz',
      'Cantabria',
      'Castellón',
      'La Coruña',
      'Gerona',
      'Granada',
      'Guipúzcoa',
      'Huelva',
      'Islas Baleares',
      'Lugo',
      'Málaga',
      'Murcia',
      'Las Palmas',
      'Pontevedra',
      'Tarragona',
      'Santa Cruz de Tenerife',
      'Valencia',
      'Vizcaya',
    ];
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

  editCreek(creekId: string | null, editCreek: any) {
    return this.http.put(`${this.API_URL}/creeks/edit/${creekId}`, editCreek);
  }
}
