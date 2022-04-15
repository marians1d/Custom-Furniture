import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CreateOrderDto } from 'src/app/feature/orders/new-order/new-order.component';
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

  createOrder$(body: CreateOrderDto): Observable<IOrder> {
    const formData = this.handleOrderFormData(body);

    return this.http.post<IOrder>(`/api/orders`, formData);
  }

  editOrder$(body: CreateOrderDto, id: string): Observable<IOrder<IComment>> {
    const formData = this.handleOrderFormData(body);
    
    return this.http.put<IOrder<IComment>>(`/api/orders/${id}/edit`, formData);
  }



  deleteOrder$(id: string): Observable<IOrder> {
    return this.http.delete<IOrder>(`/api/orders/${id}`);
  }

  provide$(body: { mesurmentDate: Date }, id: string): Observable<IOrder> {
    return this.http.put<IOrder>(`/api/orders/${id}`, body);
  }

  handleOrderFormData(body: CreateOrderDto): FormData {
    const formData = new FormData();

    formData.set('orderName', body.orderName);
    formData.set('address', body.address);
    formData.set('description', body.description);
    formData.set('visibility', body.visibility);

    if (body.orderImage) {
      formData.append('orderImage', body.orderImage);
    }

    return formData
  }
}
