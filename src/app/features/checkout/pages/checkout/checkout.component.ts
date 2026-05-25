import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../../../services/cart.service';
import { OrdersService } from '../../../../services/order.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {

  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  placeOrder() {

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.ordersService.addOrder({
      items: this.cartItems,
      total: this.getTotal()
    });

    this.cartService.clearCart();

    this.router.navigate(['/orders']);
  }
}