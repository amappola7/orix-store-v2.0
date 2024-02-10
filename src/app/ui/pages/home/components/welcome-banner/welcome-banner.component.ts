import { Component } from '@angular/core';

@Component({
  selector: 'orix-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrl: './welcome-banner.component.scss'
})
export class WelcomeBannerComponent {
  screenSize: number = window.screen.width;
}
