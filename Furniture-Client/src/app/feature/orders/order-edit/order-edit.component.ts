import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment, IOrder } from 'src/app/shared/interfaces';
import { OrderService } from '../../../core/services/order.service';
import { CreateOrderDto } from '../new-order/new-order.component';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css'],
})
export class OrderEditComponent implements OnInit {
  isLoading: boolean = false;

  orderImage?: File;

  errorMessage: string | undefined = undefined;

  order!: IOrder<IComment>;

  initialStatus: string | undefined = this.order?.visibility;

  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Edit');

    const orderId = this.activatedRoute.snapshot.params['orderId'];

    this.orderService.getOrder$(orderId).subscribe((order) => {
      setTimeout(() => {
        this.order = order;
        this.initialStatus = order.visibility;
      });
    });
  }

  submit(form: NgForm): void {
    this.isLoading = true;

    const order: CreateOrderDto = {
      orderName: form.value.orderName,
      description: form.value.description,
      address: form.value.address,
      visibility: form.value.visibility,
      orderImage: this.orderImage,
    };

    this.orderService.editOrder$(order, this.order._id).subscribe({
      next: (order) => {
        this.isLoading = false;

        this.router.navigate([`/orders/${order._id}`]);
      },
      error: (err) => {
        this.isLoading = false;

        this.errorMessage = err.error.message;
      },
    });
  }

  orderImageChange(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;

    this.orderImage = input.files![0];
  }
}
