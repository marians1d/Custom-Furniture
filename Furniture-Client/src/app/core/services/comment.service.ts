import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment, IOrder } from 'src/app/shared/interfaces';

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {}

  createComment$(
    data: { commentText: string },
    orderId: string
  ): Observable<IOrder<IComment>> {
    return this.http.post<IOrder<IComment>>(`/api/orders/${orderId}`, data);
  }

  
}
