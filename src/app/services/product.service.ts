import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../core/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = 'https://localhost:7035/api/Product';

  constructor(
    private http:HttpClient
  ) {}

  getProducts():Observable<Product[]> {

    return this.http.get<Product[]>(this.apiUrl);

  }

}