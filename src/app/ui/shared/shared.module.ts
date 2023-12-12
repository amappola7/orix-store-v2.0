import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { darkModeReducer } from '../../services/dark-mode/dark-mode.reducer';
import { DarkModeButtonComponent } from './components/dark-mode-button/dark-mode-button.component';


@NgModule({
  declarations: [
    ButtonComponent,
    DarkModeButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    StoreModule.forRoot({screenMode: darkModeReducer})
  ],
  exports: [
    ButtonComponent,
    DarkModeButtonComponent
  ]
})
export class SharedModule { }
