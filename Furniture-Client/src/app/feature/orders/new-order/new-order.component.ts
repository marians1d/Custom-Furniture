import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { OrderService } from '../../../core/services/order.service';

export interface CreateOrderDto {
      orderName: string;
      description: string;
      address: string;
      visibility: 'private' | 'public';
      orderImage?: File
}

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  orderImage?: File;

  isPublic: boolean = true;

  initialStatus!: string;

  constructor(private orderService: OrderService, private router: Router, private userService: UserService, private title: Title) {
    this.initialStatus = 'public';
   }

   ngOnInit(): void {
     this.title.setTitle('Create an Order')
   }

  submit(form: NgForm): void {
    if (form.invalid) { return; }

    const order: CreateOrderDto = {
      orderName: form.value.orderName,
      description: form.value.description,
      address: form.value.address,
      visibility:form.value.visibility,
      orderImage: this.orderImage
    }

    this.orderService.createOrder$(order).subscribe({
      next: (order) => {
        this.userService.user?.orders.push(order);

        this.router.navigate([`/orders/${order._id}`]);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  orderImageChange(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    
    this.orderImage = input.files![0];
  }
}
