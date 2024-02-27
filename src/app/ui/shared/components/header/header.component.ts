import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'orix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-desktop.component.scss']
})
export class HeaderComponent implements OnInit {
  iconMobileMenu: IconDefinition = faBars;
  screenSize: number = window.screen.width;
  screenMode$!: Observable<boolean>;
  screenMode!: boolean;
  logoToUse!: string;
  logos = {
    lightModeLogo: '../../../../../assets/logos/Logo Light Mode.png',
    darkModeLogo: '../../../../../assets/logos/Logo Dark Mode.png',
  }

  @Input() currentPage!: string;
  @Output() openMobileMenuNotification: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor (
    private store: Store<{screenMode: boolean}>,
    private router: Router
  ) {}

  ngOnInit() {
    this.settingLogo();
    this.screenMode$ = this.store.select('screenMode');
    this.screenMode$.subscribe(mode => {
      this.screenMode = mode;
      this.settingLogo();
    });
  }

  settingLogo(): void {
    this.logoToUse = this.screenMode ? this.logos.lightModeLogo : this.logos.darkModeLogo;
    if (this.screenSize > 768 && this.currentPage === 'home') this.logoToUse = this.logos.darkModeLogo;
  }

  openMobileMenu(): void {
    this.openMobileMenuNotification.emit(true);
  }

  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

}
