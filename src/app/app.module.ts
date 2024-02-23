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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { SetHeadersInterceptor } from './interceptors/set-headers.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: SetHeadersInterceptor, multi: true
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
