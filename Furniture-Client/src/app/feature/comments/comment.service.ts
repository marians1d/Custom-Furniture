import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {}

  createComment$(
    data: { commentText: string },
    orderId: string
  ): Observable<IComment> {
    return this.http.post<IComment>(`${apiUrl}/orders/${orderId}`, data, {
      withCredentials: true,
    });
  }

  
}
