import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any[] = [];

  addToCart(product: any) {

    this.cartItems.push(product);

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cartItems)
    );

  }

  getCart() {

    return JSON.parse(
      localStorage.getItem('cart') || '[]'
    );

  }

  remove(index: number) {

    this.cartItems = this.getCart();

    this.cartItems.splice(index, 1);

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cartItems)
    );

  }
getTotal(): number {

  let total = 0;

  this.cartItems.forEach(item => {

    total += item.price;

  });

  return total;

}
  clearCart() {

    localStorage.removeItem('cart');

    this.cartItems = [];

  }

  getCartCount() {

    return this.getCart().length;

  }

}