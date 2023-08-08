import { CategoriesApiService } from './../../services/categories-api.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/admin-view/interfaces/product.interface';
import { ProductsApiService } from 'src/app/modules/admin-view/services/products-api.service';

@Component({
  selector: 'categorized-products',
  templateUrl: './categorized-products.component.html',
  styleUrls: ['./categorized-products.component.scss']
})
export class CategorizedProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private categoriesApiService: CategoriesApiService,
    private productsApiService: ProductsApiService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts(): void {
    this.productsApiService.getAllProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  getCategoryProducts(category: string): void {
    this.categoriesApiService.getCategoryProducts(category)
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

}
