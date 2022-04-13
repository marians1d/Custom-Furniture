import { RouterModule, Routes } from '@angular/router';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: OrderListComponent
    },
    {
        path: 'new',
        component: NewOrderComponent
    },
    {
        path: ':orderId',
        component: OrderDetailsComponent
    },
    {
        path: ':orderId/edit',
        component: OrderEditComponent
    }
];

export const OrderRoutingModule = RouterModule.forChild(routes);