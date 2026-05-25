import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

constructor(private router: Router) {}

goToMenu() {
  this.router.navigate(['/menu']);
}
}