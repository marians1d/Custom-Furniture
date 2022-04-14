import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/shared/interfaces';

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {}

  createComment$(
    data: { commentText: string },
    orderId: string
  ): Observable<IComment> {
    return this.http.post<IComment>(`/api/orders/${orderId}`, data);
  }

  
}
