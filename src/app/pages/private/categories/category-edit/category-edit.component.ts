import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  imports: [ ReactiveFormsModule, JsonPipe ],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {
  /** Atributos */
  formData!: FormGroup;

  constructor( private route: ActivatedRoute ) {
    // Agrupacion de campos del formulario
    this.formData = new FormGroup({
      name: new FormControl( '', [ Validators.required ] ),
      description: new FormControl( '' )
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      const categoryId = params.get( 'id' );
      console.log('ID de la categoría:', categoryId);

    });
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
