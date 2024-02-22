import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'orix-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  screenMode$!: Observable<boolean>;
  screenMode!: boolean;

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
}
