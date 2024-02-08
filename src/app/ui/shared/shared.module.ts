import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { darkModeReducer } from '../../services/dark-mode/dark-mode.reducer';
import { DarkModeButtonComponent } from './components/dark-mode-button/dark-mode-button.component';
import { SharedRoutingModule } from './shared-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    ButtonComponent,
    DarkModeButtonComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedRoutingModule
  ],
  exports: [
    ButtonComponent,
    DarkModeButtonComponent
  ]
})
export class SharedModule { }
