import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../services/cart.service';
import { AuthService } from '@app/services/auth.service';
import { OrdersService } from '@app/services/order.service';
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
orders: any[] = [];
  constructor(
    public ordersService:OrdersService,
    public cartService: CartService
  ) {}
  ngOnInit() {
  this.orders = this.ordersService.getOrders();
}

}