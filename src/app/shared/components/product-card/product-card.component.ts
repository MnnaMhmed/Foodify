import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '@app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  product = {
    name: 'Italian Pizza',
    price: 25,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop'
  };

  constructor(
    private toastr: ToastrService,
    private cartService: CartService,
    private router: Router,
  private authService: AuthService
  ) {}
addToCart() {

  if (!this.authService.isLoggedIn()) {
    this.router.navigate(['/login']);
    return;
  }

  this.cartService.addToCart(this.product);

  this.toastr.success('Added To Cart');
}
  openDetails() {

    console.log('Open Product Details');

  }

}