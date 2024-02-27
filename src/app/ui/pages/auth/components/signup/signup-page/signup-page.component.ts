import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'orix-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss', './signup-page-desktop.component.scss']
})
export class SignupPageComponent {
  displayMobileMenu: boolean = false;
  screenSize: number = window.screen.width;
  screenMode$!: Observable<boolean>;
  screenMode!: boolean;

  constructor(
    private store: Store<{ screenMode: boolean }>
  ) { }

  ngOnInit(): void {
    this.screenMode$ = this.store.select('screenMode');
    this.screenMode$.subscribe(mode => this.screenMode = mode);
  }

  openMobileMenu(): void {
    this.displayMobileMenu = true;
  }

  closeMobileMenu(): void {
    this.displayMobileMenu = false;
  }
}
