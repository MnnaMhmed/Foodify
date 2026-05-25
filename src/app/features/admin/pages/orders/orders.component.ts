import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@app/services/cart.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

  orders: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {

    const cartItems = this.cartService.getCart();

    if (cartItems.length > 0) {
      this.orders = [
        {
          
          items: cartItems.map(item => ({
            name: item.nameEn || item.name,
            price: item.price,
            image: item.imageUrl || item.image
          })),
          total: this.getTotal(cartItems)
        }
      ];
    }
  }
clearAll() {
  this.cartService.clearCart();
  this.orders = [];
}
  getTotal(items: any[]): number {
    let total = 0;

    items.forEach(item => {
      total += item.price;
    });

    return total;
  }
}