import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { CategoryService } from '../../../../services/category.service';
import { Router } from '@angular/router';
import { Category } from '../../../../interfaces/category';

@Component({
  selector: 'app-product-edit',
  imports: [ ReactiveFormsModule, JsonPipe ],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  /** Atributos */
  formData!: FormGroup;
  categories!: Array<Category>;

  constructor(
      private productService: ProductService,
      private categoryService: CategoryService,
      private router: Router
  ) {
    // Agrupacion de campos del formulario
    this.formData = new FormGroup({
      name: new FormControl( '' , [ Validators.required ] ),
      description: new FormControl( '' ),
      price: new FormControl( 0 , [ Validators.required, Validators.min( 0 ) ] ),
      urlImage: new FormControl( '' ),
      category: new FormControl( '', [ Validators.required ] ),
      state: new FormControl( true, [ Validators.required ] )
    });
  }

  ngOnInit() {
    this.loadCategories();
  }

  private loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: ( data ) => {
        console.log( data.data );    // { ok: true, data: [{...},{...},{...},{...}] }
        this.categories = data.data ?? [];

        console.log( 'Categories obtained successfuly' );
      },
      error: ( error ) => {
        console.error( error );
      }
    });
  }

  onSubmit() {
    // Obtiene los valores de los campos campos del formulario
    const inputData = this.formData.value;

    // Verifica el estado de validacion del formulario
    if( this.formData.valid ) {
      console.log( inputData );   // Enviar los datos al BackEnd
    }

  }
}
