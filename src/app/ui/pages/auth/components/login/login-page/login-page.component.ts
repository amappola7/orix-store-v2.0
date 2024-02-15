import { Component } from '@angular/core';

@Component({
  selector: 'orix-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  displayMobileMenu: boolean = false;
  screenSize: number = window.screen.width;

  openMobileMenu(): void {
    this.displayMobileMenu = true;
  }

  closeMobileMenu(): void {
    this.displayMobileMenu = false;
  }
}
