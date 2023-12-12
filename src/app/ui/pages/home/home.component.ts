import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { darkMode, lightMode } from 'src/app/services/dark-mode/dark-mode.actions';

@Component({
  selector: 'orix-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  screenModeStore$!: Observable<boolean>;
  screenMode!: boolean;

  constructor(
    private store: Store<{darkMode: boolean}>
  ) {
    this.screenModeStore$ = store.select('darkMode');
  }

  ngOnInit(): void {
    this.screenModeStore$.subscribe(mode => this.screenMode = mode);
  }

  onChangeScreenMode(event: Event): void {
    this.store.dispatch(this.screenMode ? darkMode() : lightMode());
  }
}
