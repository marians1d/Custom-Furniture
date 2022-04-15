import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { IOrder } from 'src/app/shared/interfaces';
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {

  ordersSubscription?: Subscription;

  orderList!: IOrder[];

  constructor(private orderService: OrderService, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Orders')

    this.ordersSubscription = this.orderService.getOrders$().subscribe((orderList) => {
      this.orderList = orderList;
    });
  }

  ngOnDestroy(): void {
    this.ordersSubscription?.unsubscribe();
  }
}
