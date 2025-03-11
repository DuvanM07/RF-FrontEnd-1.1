import { Component } from '@angular/core';
import { ProductRegisterComponent } from '../products/product-register/product-register.component';

@Component({
  selector: 'app-dashboard',
  imports: [ ProductRegisterComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
