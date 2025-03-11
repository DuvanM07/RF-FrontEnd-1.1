import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../../interfaces/category';

@Component({
  selector: 'app-category-edit',
  imports: [ ReactiveFormsModule, JsonPipe ],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {
  /** Atributos */
  formData!: FormGroup;
  categoryId!: string;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    // Agrupacion de campos del formulario
    this.formData = new FormGroup({
      name: new FormControl( '', [ Validators.required ] ),
      description: new FormControl( '' )
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      this.categoryId = params.get( 'id' ) ?? '';
      console.log('ID de la categoría:', this.categoryId );

      this.loadFormData( this.categoryId );   //
    });
  }

  private loadFormData( categoryId: string ) {
    if ( categoryId ) {

      this.categoryService.getCategoryById( categoryId ).subscribe({
        next: ( data ) => {
          console.log( data );
        },
        error: (error) => {
          console.error( error );
        }
      });
    }

  }

  onSubmit() {
    // Obtiene los valores de los campos campos del formulario
    const inputData = this.formData.value;

    // Verifica el estado de validacion del formulario
    if( this.formData.valid ) {
      console.log( inputData );   // Enviar los datos al BackEnd
    }

    this.formData.reset();    // Limpia los campos del formulario
  }
}
