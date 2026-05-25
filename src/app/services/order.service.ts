import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders: any[] = [];

  addOrder(order: any) {

    this.orders = this.getOrders();

    this.orders.push(order);

    localStorage.setItem(
      'orders',
      JSON.stringify(this.orders)
    );

  }

  getOrders() {

    return JSON.parse(
      localStorage.getItem('orders') || '[]'
    );

  }

}