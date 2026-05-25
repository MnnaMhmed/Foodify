import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home/home.component')
        .then(m => m.HomeComponent)
  },

  {
    path: 'menu',
    loadComponent: () =>
      import('./features/products/pages/menu/menu.component')
        .then(m => m.MenuComponent)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login.component')
        .then(m => m.LoginComponent)
  },

  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/pages/cart/cart.component')
        .then(m => m.CartComponent)
  },

  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/pages/checkout/checkout.component')
        .then(m => m.CheckoutComponent)
  },

  {
  path: 'orders',
  loadComponent: () =>
    import('./features/orders/pages/orders/orders.component')
      .then(m => m.OrdersComponent)

  },

  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/pages/dashboard/dashboard.component')
        .then(m => m.DashboardComponent)
  }

];