import { RouterModule, Routes } from '@angular/router';
import { NewOrderComponent } from './new-order/new-order.component';

const routes: Routes = [
    // {
    //     path: 'orders'
    // },
    {
        path: 'orders/new',
        component: NewOrderComponent
    }
];

export const OrderRoutingModule = RouterModule.forChild(routes);