import { RouterModule, Routes } from '@angular/router';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
    {
        path: 'orders',
        component: OrderListComponent
    },
    {
        path: 'orders/new',
        component: NewOrderComponent
    },
    {
        path: 'orders/:orderId',
        component: OrderDetailsComponent
    }  
];

export const OrderRoutingModule = RouterModule.forChild(routes);