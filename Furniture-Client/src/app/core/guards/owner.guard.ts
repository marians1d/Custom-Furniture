import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from '../services/order.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
  
    const id = route.paramMap.get('orderId');

    if (this.userService.user?.orders.some(o => o._id === id)) {
      return true;
    }

    return this.router.createUrlTree([`/orders/${id}`])
  }
  
}
