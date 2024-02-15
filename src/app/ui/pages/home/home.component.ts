import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'orix-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  screenMode$!: Observable<boolean>;
  screenMode!: boolean;
  displayMobileMenu: boolean = false;
  screenSize: number = window.screen.width;

  constructor(
    private store: Store<{screenMode: boolean}>
  ) {}

  ngOnInit(): void {
    this.screenMode$ = this.store.select('screenMode');
    this.screenMode$.subscribe(mode => this.screenMode = mode);
  }

  screenModeChange(): void {
    this.screenMode$.subscribe(mode => this.screenMode = mode);
  }

  openMobileMenu(): void {
    this.displayMobileMenu = true;
  }

  closeMobileMenu(): void {
    this.displayMobileMenu = false;
  }
}
