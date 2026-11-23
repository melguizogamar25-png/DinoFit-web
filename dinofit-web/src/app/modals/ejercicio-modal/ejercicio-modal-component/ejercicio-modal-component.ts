import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ejercicio-modal-component',
  styleUrl: './ejercicio-modal-component.css',
  templateUrl: './ejercicio-modal-component.html',
})
export class EjercicioModalComponent {

  @Input() esEdicion = false;

  @Output() guardar = new EventEmitter<void>();
  @Output() cerrar = new EventEmitter<void>();
}
