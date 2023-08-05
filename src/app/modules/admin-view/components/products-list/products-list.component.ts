import { SnackBarService } from './../../../../shared/services/snack-bar.service';
import { Component } from '@angular/core';
import { ProductsApiService } from '../../services/products-api.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  displayedColumns = ['id', 'title', 'image', 'description', 'price', 'rating', 'category', 'actions'];
  dataSource: Product[] = [];

  constructor(
    private productsApiService: ProductsApiService,
    private snackBar: SnackBarService
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productsApiService.getAllProducts()
      .subscribe({
        next: (products: Product[]) => {
          this.dataSource = products;
        },
        error: (err: Error) => {
          this.snackBar.openFailureSnackBar(err.message, err.name);
        }
      });
  }

  onDelete(id: number) {
    this.productsApiService.deleteProduct(id)
      .subscribe({
        next: (product: Product) => {
          this.dataSource = this.dataSource.filter((product: Product) => product.id !== id);
          this.snackBar.openSuccessSnackBar(`${product.title} is deleted successfully`);
        },
        error: (err: Error) => {
          this.snackBar.openFailureSnackBar(err.message, err.name);
        }
      });
  }

}
