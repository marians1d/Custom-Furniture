import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent {

  isPublic: boolean = true;

  initialStatus!: string;

  constructor(private orderService: OrderService, private router: Router) {
    this.initialStatus = 'public';
   }

  submit(form: NgForm): void {
    if (form.invalid) { return; }
    
    this.orderService.createOrder$(form.value).subscribe({
      next: (order) => {
        console.log(order);

        this.router.navigate([`/orders/${order._id}`]);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
