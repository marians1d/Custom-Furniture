import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderRoutingModule } from './order-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule
  ]
})
export class OrdersModule { }
