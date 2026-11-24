import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-cliente-modal-component',
  styleUrl: './cliente-modal-component.css',
  templateUrl: './cliente-modal-component.html',
})
export class ClienteModalComponent {

  
  @Output() guardar = new EventEmitter<void>();
  @Output() cerrar = new EventEmitter<void>();

  tarifas = ['Mensual', 'Anual'];
  metodosPago = ['Pago en mostrador', 'Transferencia'];
}
