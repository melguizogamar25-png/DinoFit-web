import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tarjeta-estadistica-component',
  styleUrl: './tarjeta-estadistica-component.css',
  templateUrl: './tarjeta-estadistica-component.html',
})
export class TarjetaEstadisticaComponent {

  @Input() titulo = '';
  @Input() valor = '';
  @Input() detalle = '';
  @Input() icono = 'bi-people';
  @Input() colorIcono = 'text-primary';
  @Input() colorDetalle = 'text-success';
}
