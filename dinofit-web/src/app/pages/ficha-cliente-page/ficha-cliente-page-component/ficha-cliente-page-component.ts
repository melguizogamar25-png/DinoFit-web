import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TarjetaEstadisticaComponent } from '../../../components/tarjeta-estadistica-component/tarjeta-estadistica-component/tarjeta-estadistica-component';

@Component({
  imports: [RouterLink, TarjetaEstadisticaComponent],
  selector: 'app-ficha-cliente-page-component',
  styleUrl: './ficha-cliente-page-component.css',
  templateUrl: './ficha-cliente-page-component.html',
})
export class FichaClientePageComponent {

  estadisticas = [
    {titulo: 'Peso actual', valor: '78,5 kg', detalle: '−2,7 kg desde el inicio', icono: 'bi-speedometer2'},
    {titulo: 'Grasa corporal', valor: '14,2 %', detalle: '−2,6 puntos desde el inicio', icono: 'bi-activity'},
    {titulo: 'Masa muscular', valor: '38,0 kg', detalle: '+0,8 kg desde el inicio', icono: 'bi-lightning-charge'},
  ];

  fechasGrafica = ['27 ago', '03 sep', '10 sep', '17 sep', '24 sep', '01 oct', '08 oct'];
  pesos = [81.2, 80.6, 80.2, 79.9, 79.7, 79.0, 78.4];
  guias = [82, 80, 78, 76];

  historial = [
    {fecha: '08 oct 2026', peso: '78,5', grasa: '14,2', musculo: '38,0', registradoPor: 'Laura Martínez'},
    {fecha: '01 oct 2026', peso: '79,2', grasa: '15,0', musculo: '37,8', registradoPor: 'Laura Martínez'},
    {fecha: '24 sep 2026', peso: '79,7', grasa: '15,4', musculo: '37,6', registradoPor: 'Laura Martínez'},
  ];
  perimetros = [
    {nombre: 'Cintura', valor: '80,0 cm'}, {nombre: 'Cadera', valor: '96,0 cm'}, {nombre: 'Pecho', valor: '101,0 cm'},
    {nombre: 'Brazo', valor: '35,0 cm'}, {nombre: 'Muslo', valor: '56,0 cm'},
  ];

  x(indice: number): number { return 50 + indice * 140; }
  y(valor: number): number { return 20 + (82 - valor) * (200 / 6); }

  puntos(): string {
    return this.pesos.map((v, i) => this.x(i) + ',' + this.y(v)).join(' ');
  }
}
