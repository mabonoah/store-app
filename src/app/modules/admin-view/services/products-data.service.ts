import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  products: Product[] = [];

  constructor() { }

  setProducts(products: Product[]): void {
    this.products = JSON.parse(JSON.stringify(products));
  }

  addProduct(newProduct: Product): void {
    const randomId: number = Math.floor(Math.random() * 1000) + 20;
    newProduct.id = randomId;
    this.products.push(newProduct);
  }

  updateProduct(product: Product): void {
    const index: number = this.products.findIndex((item: Product) => item.id === product.id);
    this.products[index] = { ...product };
  }

}
