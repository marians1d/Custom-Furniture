import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class OrderService {



  constructor(private http: HttpClient) { }

  getOrders$(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${apiUrl}/orders`, { withCredentials: true });
  }

  createOrder$(body: { orderName: string, location: string, description: string }): Observable<IOrder> {
    return this.http.post<IOrder>(`${apiUrl}/orders`, body, { withCredentials: true })
  }
}
