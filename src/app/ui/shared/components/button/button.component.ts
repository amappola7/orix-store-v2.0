import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'orix-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnInit {
  @Input() content!: string;
  @Input() type!: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
  @Input() functionality!: 'button' | 'submit' | 'reset';
  @Output() clicked: EventEmitter<Event> = new EventEmitter<Event>();

  ngOnInit() {
    this.type = this.type || 'primary';
    this.functionality = this.functionality || 'button';
  }

  onClick(event: Event): void {
    this.clicked.emit(event);
    event.stopPropagation();
  }
}
