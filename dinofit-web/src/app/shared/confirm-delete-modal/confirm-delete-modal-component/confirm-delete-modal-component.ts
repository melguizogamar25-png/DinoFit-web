import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-confirm-delete-modal-component',
  styleUrl: './confirm-delete-modal-component.css',
  templateUrl: './confirm-delete-modal-component.html',
})
export class ConfirmDeleteModalComponent {

 
  @Input() titulo = '¿Confirmar eliminación?';
  @Input() mensaje = 'Esta acción no se puede deshacer.';

  @Output() respuesta = new EventEmitter<boolean>();
}
