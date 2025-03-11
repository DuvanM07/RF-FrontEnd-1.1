import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http: HttpClient ) { }

  getCategories() {
    return  this.http.get( 'http://localhost:3000/api/categories' );
  }

  createCategory( newCategory: any ) {
    return this.http.post( 'http://localhost:3000/api/categories', newCategory );
  }
}
