import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { darkModeReducer } from './services/dark-mode/dark-mode.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
    // StoreModule.forRoot({darkMode: darkModeReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
