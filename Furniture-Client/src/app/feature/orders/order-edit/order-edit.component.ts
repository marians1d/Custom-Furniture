import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment, IOrder } from 'src/app/shared/interfaces';
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  order!: IOrder<IComment>;

  initialStatus: string | undefined = this.order?.visibility;

  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const orderId = this.activatedRoute.snapshot.params['orderId'];

    this.orderService.getOrder$(orderId).subscribe((order) => {
      setTimeout(() => {
        this.order = order;
        this.initialStatus = order.visibility;
      });
    });
  }

  submit(form: NgForm): void {
    
    this.orderService.editOrder$(form.value, this.order._id).subscribe(() => {
      this.router.navigate([`/orders/${this.order._id}`]);
    });
  }

}
