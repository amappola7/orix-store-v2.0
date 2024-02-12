import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAnglesDown, faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'orix-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrl: './welcome-banner.component.scss'
})
export class WelcomeBannerComponent {
  arrowIcon: IconDefinition = faAnglesDown;
  screenSize: number = window.screen.width;
}