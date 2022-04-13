import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderRoutingModule } from './order-routing.module';
import { FormsModule } from '@angular/forms';
import { OrderService } from './order.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderListItemComponent } from './order-list-item/order-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentsModule } from '../comments/comments.module';



@NgModule({
  declarations: [
    NewOrderComponent,
    OrderDetailsComponent,
    OrderListComponent,
    OrderListItemComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    SharedModule,
    CommentsModule
  ],
  providers: [
    OrderService
  ]
})
export class OrdersModule { }
