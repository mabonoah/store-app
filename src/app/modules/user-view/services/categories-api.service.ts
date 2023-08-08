import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../admin-view/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<string[]> {
    return this.http.get(`${this.baseUrl}/products/categories`) as Observable<string[]>;
  }

  getCategoryProducts(category: string): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}/products/category/${category}`) as Observable<Product[]>;
  }

}
