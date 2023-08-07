import { SnackBarService } from './../../../../shared/services/snack-bar.service';
import { Component } from '@angular/core';
import { ProductsApiService } from '../../services/products-api.service';
import { Product } from '../../interfaces/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { Router } from '@angular/router';

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
    private router: Router,
    private snackBar: SnackBarService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  private getAllProducts(): void {
    this.productsApiService.getAllProducts()
      .subscribe((products: Product[]) => {
        this.dataSource = products;
      });
  }

  navigateToAdd(): void {
    this.router.navigate([`products/add`]);
  }

  navigateToEdit(id: number): void {
    this.router.navigate([`products/edit/${id}`]);
  }

  openDeleteDialog(product: Product): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '30rem',
      enterAnimationDuration: '250ms',
      exitAnimationDuration: '150ms'
    });
    const instance = dialogRef.componentInstance;
    instance.title = "Delete product";
    instance.message = `Would you like to delete ${product.title}?`;
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!product.id) return;
      if (confirmed) this.delete(product.id);
    });
  }

  delete(id: number) {
    this.productsApiService.deleteProduct(id)
      .subscribe((product: Product) => {
          this.dataSource = this.dataSource.filter((product: Product) => product.id !== id);
          this.snackBar.openSuccessSnackBar(`${product.title} is deleted successfully`);
        });
  }
}
