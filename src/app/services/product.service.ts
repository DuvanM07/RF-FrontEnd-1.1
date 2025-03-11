import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../interfaces/response';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) { }

  createProduct( newProduct: Product ) : Observable<Response<Product>> {
    const token = localStorage.getItem( 'token' );
    const headers = new HttpHeaders().set( 'X-Token', token! );

    return this.http.post<Response<Product>>( 'http://localhost:3000/api/products', newProduct, { headers } );
  }
}
