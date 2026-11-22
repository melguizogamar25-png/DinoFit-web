import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-rutina-modal-component',
  styleUrl: './rutina-modal-component.css',
  templateUrl: './rutina-modal-component.html',
})
export class RutinaModalComponent {
  
  @Output() guardar = new EventEmitter<void>();
  @Output() cerrar = new EventEmitter<void>();
}
