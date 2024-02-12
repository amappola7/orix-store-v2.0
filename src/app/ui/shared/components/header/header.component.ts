import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'orix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-desktop.component.scss']
})
export class HeaderComponent {
  iconMenu: IconDefinition = faBars;
  screenSize: number = window.screen.width;
  screenMode: boolean = true;
  logoToUse!: string;
  logos = {
    lightModeLogo: '../../../../../assets/logos/Logo Light Mode.png',
    darkModeLogo: '../../../../../assets/logos/Logo Dark Mode.png',
  }
  @Input() currentPage!: string;

  settingLogo(): void {
    if (this.screenSize > 768 && this.currentPage == 'home') {
      this.logoToUse = this.logos.darkModeLogo;
    } else if (this.screenMode) {
      this.logoToUse = this.logos.lightModeLogo;
    } else {
      this.logoToUse = this.logos.darkModeLogo;
    }
  }

  ngOnInit() {
    this.settingLogo();
  }
}
