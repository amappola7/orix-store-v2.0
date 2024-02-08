import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { SignupPageComponent } from './components/signup/signup-page/signup-page.component';
import { SignupFormComponent } from './components/signup/signup-form/signup-form.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent,
    LoginFormComponent,
    SignupPageComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
