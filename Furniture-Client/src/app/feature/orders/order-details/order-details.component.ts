import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';
import { IComment, IOrder, IUser } from 'src/app/shared/interfaces';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit, AfterViewChecked {
  order!: IOrder<IComment>;

  user: IUser | null | undefined = this.userService.user;

  isLogged: boolean = this.userService.isLogged;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {  
    const orderId = this.activatedRoute.snapshot.params['orderId'];

    this.orderService.getOrder$(orderId).subscribe((order) => {
      this.order = order;
    });
  }

  comment(form: NgForm):void {
    console.log(this.userService.user);
    console.log(this.userService.isLogged);
    
  }

  ngAfterViewChecked(): void {
    this.isLogged = Boolean(this.userService.user)    
  }
}
