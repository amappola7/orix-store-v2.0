import { Component, EventEmitter, Input, Output, ContentChildren, QueryList, ViewContainerRef, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'orix-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss', './modal-container-desktop.component.scss']
})
export class ModalContainerComponent {
  closeModalIcon: IconDefinition = faXmark;
  screenMode$!: Observable<boolean>;
  screenMode!: boolean;

  @Output() closeModalNotification: EventEmitter<string> = new EventEmitter();

  constructor(
    private store: Store<{ screenMode: boolean }>
  ) { }

  ngOnInit(): void {
    this.screenMode$ = this.store.select('screenMode');
    this.screenMode$.subscribe(mode => this.screenMode = mode);
  }

  closeModal(): void {
    this.closeModalNotification.emit('close');
  }
}
