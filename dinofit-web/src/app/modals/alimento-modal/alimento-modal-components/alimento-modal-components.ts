import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-alimento-modal-components',
  styleUrl: './alimento-modal-components.css',
  templateUrl: './alimento-modal-components.html',
})
export class AlimentoModalComponents {

 @Input() esEdicion = false;

  @Output() guardar = new EventEmitter<void>();
  @Output() cerrar = new EventEmitter<void>();
}
