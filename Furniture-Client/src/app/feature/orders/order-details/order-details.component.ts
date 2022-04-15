import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { IComment, IOrder } from 'src/app/shared/interfaces';
import { CommentService } from '../../../core/services/comment.service';
import { OrderService } from '../../../core/services/order.service';

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
    private router: Router,
    private title: Title
  ) {}

  ngOnInit(): void {
    const orderId = this.activatedRoute.snapshot.params['orderId'];

    this.orderService.getOrder$(orderId).subscribe((order) => {
      this.order = order;

      this.title.setTitle(order.orderName);
    });

  }

  cancelMesurement(form: NgForm) {
    this.isProviding = false;

    form.reset();
  }

  comment(form: NgForm): void {
    if (form.invalid) { return; }

    const commentText: string = form.value.comment;
    this.commentService.createComment$({ commentText }, this.order._id).subscribe((comment) => {
        
        comment.userId = this.user as any;
        
        this.order.comments.push(comment);
    });

    form.reset();
  }

  delete() {
    this.orderService.deleteOrder$(this.order._id).subscribe(() => {
      if (this.user?.orders) {
        this.user!.orders = this.user?.orders.filter(o => o._id != this.order._id);
      }

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
