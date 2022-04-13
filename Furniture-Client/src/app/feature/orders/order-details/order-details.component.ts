import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    if (!this.user) {
      return false;
    }

    return this.user!._id == this.order.userId._id;
  }

  get isProvider() {
    if (!this.user) {
      return false;
    }

    return this.user?.status === 'provider'
  }

  isProviding: boolean = false;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private commentService: CommentService,
    private router: Router
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

  delete() {
    this.orderService.deleteOrder$(this.order._id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  provide(form: NgForm): void {

    const mesurmentDate = new Date(form.value.mesurmentDate);
    
    this.orderService.provide$({ mesurmentDate } , this.order._id).subscribe(() => {
      this.order.mesurmentDate = mesurmentDate;
      this.isProviding = false;
    });
  }
}
