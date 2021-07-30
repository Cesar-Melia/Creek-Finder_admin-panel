import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Comment } from '../../comments/models/Comment';

@Injectable({
  providedIn: 'any',
})
export class CommentsService {
  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = environment.API_URL;
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.API_URL}/comments`, {
      withCredentials: true,
    });
  }

  deleteComment(commentId: string): Observable<Comment> {
    console.log('soy el delete', commentId);
    return this.http.delete<Comment>(
      `${this.API_URL}/comments/delete/${commentId}`,
      {
        withCredentials: true,
      }
    );
  }
}
