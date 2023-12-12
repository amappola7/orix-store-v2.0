import { Component,Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { darkMode, lightMode } from 'src/app/services/dark-mode/dark-mode.actions';

@Component({
  selector: 'orix-dark-mode-button',
  templateUrl: './dark-mode-button.component.html',
  styleUrl: './dark-mode-button.component.scss'
})
export class DarkModeButtonComponent {
  screenMode$!: Observable<boolean>;
  screenMode: boolean = true;
  icons = {
    darkModeIcon: faMoon,
    lightModeIcon: faSun
  }

  @Output() screenModeChange: EventEmitter<Event> = new EventEmitter();

  constructor(
    private store: Store<{screenMode: boolean}>
  ) {
    this.screenMode$ = store.select('screenMode');
  }

  onChangeScreenMode(event: Event): void {
    this.store.dispatch(this.screenMode ? darkMode() : lightMode());
    this.screenMode$.subscribe(mode => this.screenMode = mode);
    this.screenModeChange.emit(event);
  }
}
