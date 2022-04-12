import { RouterModule, Routes } from '@angular/router';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
    // {
    //     path: 'orders'
    // },
    {
        path: 'orders/:orderId',
        component: OrderDetailsComponent
    },
    {
        path: 'orders/new',
        component: NewOrderComponent
    }
];

export const OrderRoutingModule = RouterModule.forChild(routes);