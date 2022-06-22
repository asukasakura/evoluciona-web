import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
