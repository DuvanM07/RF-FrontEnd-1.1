import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../interfaces/response';
import { Category } from '../interfaces/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http: HttpClient ) { }

  getCategories() : Observable<Response<Category[]>> {
    return this.http.get<Response<Category[]>>( 'http://localhost:3000/api/categories' );
  }

  createCategory( newCategory: Category ) : Observable<Response<Category>> {
    return this.http.post<Response<Category>>( 'http://localhost:3000/api/categories', newCategory );
  }

  deleteCategoryById( id: string ) : Observable<Response<Category>> {
    return this.http.delete<Response<Category>>( `http://localhost:3000/api/categories/${ id }` );
  }
}
