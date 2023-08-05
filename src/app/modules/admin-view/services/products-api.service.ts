import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}/products`) as Observable<Product[]>;
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get(`${this.baseUrl}/products/${id}`) as Observable<Product>;
  }

  createProduct(data: Product): Observable<Product> {
    return this.http.post(`${this.baseUrl}/products`, data) as Observable<Product>;
  }

  updateProduct(data: Product): Observable<Product> {
    return this.http.put(`${this.baseUrl}/products/${data.id}`, data) as Observable<Product>;
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(`${this.baseUrl}/products/${id}`) as Observable<Product>;
  }

}
