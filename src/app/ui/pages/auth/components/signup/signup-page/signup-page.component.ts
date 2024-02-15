import { Component } from '@angular/core';

@Component({
  selector: 'orix-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss', './signup-page-desktop.component.scss']
})
export class SignupPageComponent {
  displayMobileMenu: boolean = false;
  screenSize: number = window.screen.width;

  openMobileMenu(): void {
    this.displayMobileMenu = true;
  }

  closeMobileMenu(): void {
    this.displayMobileMenu = false;
  }
}
