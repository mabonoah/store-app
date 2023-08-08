import { ProductsApiService } from './../../services/products-api.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { ProductsDataService } from '../../services/products-data.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  id: string | null;
  title: string;
  productForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: SnackBarService,
    private productsApiService: ProductsApiService,
    private productsData: ProductsDataService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.title = this.id ? "Edit" : "Add";
  }

  ngOnInit() {
    this.buildForm();
    this.getProductById();
  }

  private buildForm(): void {
    this.productForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required,]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      image: ['', [Validators.required]],
      rating: this.fb.group({
        rate: ['', [Validators.required, Validators.max(5)]],
        count: ['', [Validators.required]],
      })
    });
  }

  private getProductById(): void {
    if (!this.id) return;
    const id: number = +this.id;
    this.productsApiService.getProduct(id)
      .subscribe((product: Product) => {
        if (product) {
          delete product.id;
          this.productForm.setValue(product);
        } else
          this.snackBar.openFailureSnackBar('Product is not found');
      });
  }

  navigateToList(): void {
    this.router.navigate(['/products/list']);
  }

  onSubmit() {
    if (!this.productForm.valid) return;
    this.id ? this.update() : this.create();
  }

  private update(): void {
    if (!this.id) return;
    const product: Product = this.productForm.value;
    product.id = +this.id;
    this.productsApiService.updateProduct(product)
      .subscribe(() => {
        this.productsData.updateProduct(product);
        this.snackBar.openSuccessSnackBar(`${product.title} is updated successfully`, 'Product');
        this.navigateToList();
      });
  }

  private create(): void {
    const product: Product = this.productForm.value;
    this.productsApiService.createProduct(product)
      .subscribe(() => {
        this.productsData.addProduct(product);
        this.snackBar.openSuccessSnackBar(`${product.title} is created successfully`, 'Product');
        this.navigateToList();
      });
  }

  getFormControl(controlName: string) {
    return this.productForm.get(controlName);
  }

  getNestedFormControl(groupName: string, controlName: string) {
    return this.productForm.get(groupName)?.get(controlName);
  }

}
