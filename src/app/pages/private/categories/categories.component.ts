import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: Category[] = [];
  isLoading: boolean = true;

  constructor( private categoryService: CategoryService ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe({
      next: ( data ) => {
        console.log( data );
        console.log( 'Successfully obtains categories' );

        this.categories = data.data ?? [];    // Asignara una lista vacia para evitar asignar undefined
      },
      error: ( error ) => {
        console.error( error );
        this.isLoading = false;               // Asegura que el estado de carga se actualice en caso de error
      },
      complete: () => {
        this.isLoading = false;               // También lo actualiza cuando la petición es exitosa
      }
    });
  }
}
