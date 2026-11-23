import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-confirm-delete-modal-component',
  styleUrl: './confirm-delete-modal-component.css',
  templateUrl: './confirm-delete-modal-component.html',
})
export class ConfirmDeleteModalComponent {

   @Input() elemento = 'este elemento';

  @Output() respuesta = new EventEmitter<boolean>();
}
