import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/core/models/product';
import { CartService } from '../../../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {

  this.products = [
    {
      id: 8,
      nameEn: 'Pepperoni Pizza',
      nameAr: 'بيتزا بيبروني',
      price: 22.00,
      imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 9,
      nameEn: 'Cheese Burger',
      nameAr: 'تشيز برجر',
      price: 15.00,
      imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 10,
      nameEn: 'Double Burger',
      nameAr: 'دبل برجر',
      price: 20.00,
      imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 11,
      nameEn: 'Fried Chicken',
      nameAr: 'دجاج مقلي',
      price: 17.00,
      imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 12,
      nameEn: 'Chicken Wings',
      nameAr: 'أجنحة دجاج',
      price: 14.00,
      imageUrl: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 13,
      nameEn: 'Pasta Alfredo',
      nameAr: 'باستا ألفريدو',
      price: 19.00,
      imageUrl: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 14,
      nameEn: 'Spaghetti',
      nameAr: 'سباجيتي',
      price: 16.00,
      imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 15,
      nameEn: 'Sushi Mix',
      nameAr: 'سوشي مشكل',
      price: 28.00,
      imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 16,
      nameEn: 'Caesar Salad',
      nameAr: 'سلطة سيزر',
      price: 12.00,
      imageUrl: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 17,
      nameEn: 'Chocolate Cake',
      nameAr: 'كيك شوكولاتة',
      price: 10.00,
      imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 18,
      nameEn: 'Ice Cream',
      nameAr: 'آيس كريم',
      price: 8.00,
      imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1000&auto=format&fit=crop'
    }
  ];
}
  addToCart(product: Product) {
    this.cartService.addToCart(product);

    this.toastr.success('Added To Cart');
  }
}