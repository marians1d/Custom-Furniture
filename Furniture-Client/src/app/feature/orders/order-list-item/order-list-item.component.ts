import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.css']
})
export class OrderListItemComponent implements OnInit {

  @Input() order!: IOrder;

  constructor() { }

  ngOnInit(): void {
  }

}
