import { Component, EventEmitter, Input, Output, ContentChildren, QueryList } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { DarkModeButtonComponent } from '../dark-mode-button/dark-mode-button.component';
import { ProductFormComponent } from 'src/app/ui/pages/admin/components/product-form/product-form.component';

@Component({
  selector: 'orix-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss', './modal-container-desktop.component.scss']
})
export class ModalContainerComponent /*implements OnInit, OnDestroy*/ {
  closeModalIcon: IconDefinition = faXmark;

  @Output() closeModalNotification: EventEmitter<string> = new EventEmitter();

  @ContentChildren('modalContent') contentComponents!: QueryList<ProductFormComponent>;

  constructor (  ) {}

  closeModal(): void {
    this.closeModalNotification.emit('close');
  }
}
