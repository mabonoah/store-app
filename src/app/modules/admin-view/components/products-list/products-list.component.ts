import { SnackBarService } from './../../../../shared/services/snack-bar.service';
import { Component } from '@angular/core';
import { ProductsApiService } from '../../services/products-api.service';
import { Product } from '../../interfaces/product.interface';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

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
    private snackBar: SnackBarService,
    private spinner: SpinnerService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  private getAllProducts(): void {
    this.spinner.show();
    this.productsApiService.getAllProducts()
      .subscribe({
        next: (products: Product[]) => {
          this.dataSource = products;
          this.spinner.hide();
        },
        error: (err: Error) => {
          this.spinner.hide();
          this.snackBar.openFailureSnackBar(err.message, err.name);
        }
      });
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
      if (confirmed) this.delete(product.id);
    });
  }

  delete(id: number) {
    this.spinner.show();
    this.productsApiService.deleteProduct(id)
      .subscribe({
        next: (product: Product) => {
          this.dataSource = this.dataSource.filter((product: Product) => product.id !== id);
          this.spinner.hide();
          this.snackBar.openSuccessSnackBar(`${product.title} is deleted successfully`);
        },
        error: (err: Error) => {
          this.spinner.hide();
          this.snackBar.openFailureSnackBar(err.message, err.name);
        }
      });
  }

}
