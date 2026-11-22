import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-dieta-modal-component',
  styleUrl: './dieta-modal-component.css',
  templateUrl: './dieta-modal-component.html',
})
export class DietaModalComponent {

  @Input() observaciones = '';
  @Output()guardar  = new EventEmitter<void>();
  @Output()cerrar  = new EventEmitter<void>();

}
