import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';
import { IComment, IOrder, IUser } from 'src/app/shared/interfaces';
import { CommentService } from '../../comments/comment.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  order!: IOrder<IComment>;

  get user() {
    return this.userService.user;
  }

  get isLogged() {
    return this.userService.isLogged;
  }
  
  get isOwner() {
    return this.user!._id == this.order.userId._id;
  }

  get isProvider() {
    return this.user?.status === 'provider'
  }

  isProviding: boolean = false;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const orderId = this.activatedRoute.snapshot.params['orderId'];

    this.orderService.getOrder$(orderId).subscribe((order) => {
      this.order = order;
    });
  }

  comment(form: NgForm): void {
    if (form.invalid) { return; }

    const commentText: string = form.value.comment;
    this.commentService.createComment$({ commentText }, this.order._id).subscribe();

    form.reset();
  }

  provide(form: NgForm): void {
    console.log(form.value);
    
  }
}
