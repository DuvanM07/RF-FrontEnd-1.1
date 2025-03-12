import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { CategoryService } from '../../../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-register',
  imports: [ ReactiveFormsModule, JsonPipe ],
  templateUrl: './product-register.component.html',
  styleUrl: './product-register.component.css'
})
export class ProductRegisterComponent {

  /** Atributos */
  formData!: FormGroup;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  categories!: Array<{ _id: string; name: string; }>;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
=======
>>>>>>> 893d778f5ec77ca57c7ac86e620bd2868586c918
  categories: any;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    console.log('%c constructor: Se ejecuta cuando Angular instancia el componente.', 'color: blue');

<<<<<<< HEAD
=======
>>>>>>> temp-branch
>>>>>>> 893d778f5ec77ca57c7ac86e620bd2868586c918
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
      next: ( data: any ) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
        console.log( data );
        this.categories = data.data;
        console.log( 'Categories successfully obtained' );
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {}
=======
>>>>>>> 893d778f5ec77ca57c7ac86e620bd2868586c918
        console.log( data.data );    // { ok: true, data: [{...},{...},{...},{...}] }
        this.categories = data.data;

        console.log( 'Categories obtained successfuly' );
      },
      error: ( error ) => {
        console.error( error );
      }
<<<<<<< HEAD
=======
>>>>>>> temp-branch
>>>>>>> 893d778f5ec77ca57c7ac86e620bd2868586c918
    });
  }

  onSubmit() {
    // Obtiene los valores de los campos campos del formulario
    const inputData = this.formData.value;

    // Verifica el estado de validacion del formulario
    if( this.formData.valid ) {
      console.log( inputData );   // Enviar los datos al BackEnd

<<<<<<< HEAD
=======
<<<<<<< HEAD
      // Conectamos con el servicio para poder enviar los datos del producto para crearlo
      this.productService.createProduct( inputData ).subscribe({
        next: ( data ) => {
          console.log( data );
          console.log( 'Product registered successfully' );
        },
        error: ( error ) => {
          console.error( error );
        },
        complete: () => {
          this.formData.reset();            // Limpia los campos del formulario
=======
>>>>>>> 893d778f5ec77ca57c7ac86e620bd2868586c918
      // Usar el servicio para conectar con el backend y enviar los valores capturados por el formulario
      this.productService.createProduct( inputData ).subscribe({
        next: ( data ) => {
          console.log( data );
          console.log( 'Product registered successfuly' );
          // this.router.navigateByUrl( 'dashboard/products' );
          this.router.navigate([ 'dashboard','products' ]);
        },
        error: ( errors ) => {
          console.log( errors );
        },
        complete: () => {
          this.formData.reset();
<<<<<<< HEAD
=======
>>>>>>> temp-branch
>>>>>>> 893d778f5ec77ca57c7ac86e620bd2868586c918
        }
      });
    }

  }

}
