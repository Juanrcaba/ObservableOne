import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRegisterRoutingModule } from './product-register-routing.module';
import { ProductRegisterComponent } from './product-register.component';


@NgModule({
  declarations: [
    ProductRegisterComponent
  ],
  imports: [
    CommonModule,
    ProductRegisterRoutingModule
  ]
})
export class ProductRegisterModule { }
