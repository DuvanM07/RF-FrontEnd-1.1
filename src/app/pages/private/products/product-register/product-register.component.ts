import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-product-register',
  imports: [ ReactiveFormsModule, JsonPipe ],
  templateUrl: './product-register.component.html',
  styleUrl: './product-register.component.css'
})
export class ProductRegisterComponent {
  /** Atributos */
  formData!: FormGroup;
  categories: Array<{ _id: string; name: string; }> = [
    { _id: '1', name: 'Drinks' },
    { _id: '2', name: 'Soups' },
    { _id: '3', name: 'Starters' },
    { _id: '4', name: 'Cold dishes' }
  ];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
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
    this.categoryService.getCategories().subscribe({
      next: ( data ) => {
        console.log( data );
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {
        console.log( 'Categories successfully obtained' );
      }
    });
  }

  onSubmit() {
    // Obtiene los valores de los campos campos del formulario
    const inputData = this.formData.value;

    // Verifica el estado de validacion del formulario
    if( this.formData.valid ) {
      console.log( inputData );   // Enviar los datos al BackEnd

      // Conectamos con el servicio para poder enviar los datos del producto para crearlo
      this.productService.createProduct( inputData ).subscribe({
        next: ( data ) => {
          console.log( data );
        },
        error: ( error ) => {
          console.error( error );
        },
        complete: () => {
          console.log( 'Product registered successfully' );
          this.formData.reset();            // Limpia los campos del formulario
        }
      });
    }

  }
}
