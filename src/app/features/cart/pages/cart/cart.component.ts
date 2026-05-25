import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '@app/services/cart.service';
import { OrdersService } from '@app/services/order.service';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './cart.component.html'
})
export class CartComponent {

  cartItems: any[] = [];

  constructor(
    public cartService: CartService,
    private ordersService: OrdersService,
    private authService: AuthService,
      private router: Router

  ) {}

  ngOnInit() {

    this.cartItems = this.cartService.getCart();

  }

  remove(index:number) {

    this.cartService.remove(index);

    this.cartItems = this.cartService.getCart();

  }

checkout() {

  if (!this.cartItems || this.cartItems.length === 0) {
    return;
  }

  const items = this.cartItems.map((item: any) => ({
    name: item.nameEn || item.name,
    price: item.price,
    image: item.imageUrl || item.image
  }));

  this.ordersService.addOrder({
    items: items,
    total: this.getTotal()
  });

  this.cartService.clearCart();
  this.cartItems = [];

  this.router.navigate(['/orders']);
}

  getTotal(): number {

    let total = 0;

    this.cartItems.forEach(item => {

      total += item.price;

    });

    return total;

  }

}