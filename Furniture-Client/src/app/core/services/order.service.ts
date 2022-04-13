import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IComment, IOrder } from 'src/app/shared/interfaces';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  order: IOrder<IComment> | undefined = undefined;

  getOrders$(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`/api/orders`);
  }

  getOrder$(id: string): Observable<IOrder<IComment>> {
    return this.http
      .get<IOrder<IComment>>(`/api/orders/${id}`)
      .pipe(tap((order) => this.order = order));
  }

  createOrder$(body: {
    orderName: string;
    location: string;
    description: string;
    visibility: string;
  }): Observable<IOrder> {
    return this.http.post<IOrder>(`/api/orders`, body);
  }

  editOrder$(body: {
    orderName: string;
    location: string;
    description: string;
    visibility: string;
  }, id: string): Observable<IOrder<IComment>> {
    return this.http.put<IOrder<IComment>>(`/api/orders/${id}/edit`, body);
  }



  deleteOrder$(id: string): Observable<IOrder> {
    return this.http.delete<IOrder>(`/api/orders/${id}`);
  }

  provide$(body: { mesurmentDate: Date }, id: string): Observable<IOrder> {
    return this.http.put<IOrder>(`/api/orders/${id}`, body);
  }
}
