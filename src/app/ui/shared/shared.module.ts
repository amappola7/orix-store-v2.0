import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DarkModeButtonComponent } from './components/dark-mode-button/dark-mode-button.component';
import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { LocationFormComponent } from './components/location-form/location-form.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';


@NgModule({
  declarations: [
    ButtonComponent,
    DarkModeButtonComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    ModalContainerComponent,
    LocationFormComponent,
    MobileMenuComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    DarkModeButtonComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ModalContainerComponent,
    LocationFormComponent,
    MobileMenuComponent
  ]
})
export class SharedModule { }
