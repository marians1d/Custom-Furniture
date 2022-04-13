import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/interfaces';
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderList!: IOrder[];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders$().subscribe((orderList) => {
      this.orderList = orderList;
    });
  }

}
