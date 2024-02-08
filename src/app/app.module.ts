import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { darkModeReducer } from './services/dark-mode/dark-mode.reducer';
import { HomeModule } from './ui/pages/home/home.module';
import { AuthModule } from './ui/pages/auth/auth.module';
import { AdminModule } from './ui/pages/admin/admin.module';
import { ShoppingCartModule } from './ui/pages/shopping-cart/shopping-cart.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HomeModule,
    ShoppingCartModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    StoreModule.forRoot({screenMode: darkModeReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
