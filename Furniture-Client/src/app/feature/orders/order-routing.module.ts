import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from 'src/app/core/guards/logged.guard';
import { OwnerGuard } from 'src/app/core/guards/owner.guard';
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
        canActivate: [LoggedGuard],
        component: NewOrderComponent
    },
    {
        path: ':orderId',
        component: OrderDetailsComponent
    },
    {
        path: ':orderId/edit',
        canActivate: [OwnerGuard],
        component: OrderEditComponent
    }
];

export const OrderRoutingModule = RouterModule.forChild(routes);