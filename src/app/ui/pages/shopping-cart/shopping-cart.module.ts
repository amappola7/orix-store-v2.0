import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing-module.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductFormComponent } from '../admin/components/product-form/product-form.component';
import { CartListComponent } from './components/cart-list/cart-list.component';



@NgModule({
  declarations: [
    ShoppingCartComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    SharedModule
  ]
})
export class ShoppingCartModule { }
