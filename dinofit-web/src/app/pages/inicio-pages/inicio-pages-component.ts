import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TarjetaEstadisticaComponent } from '../../components/tarjeta-estadistica-component/tarjeta-estadistica-component/tarjeta-estadistica-component';

@Component({
  imports: [RouterLink, TarjetaEstadisticaComponent],
  selector: 'app-inicio-pages-component',
  styleUrl: './inicio-pages-component.css',
  templateUrl: './inicio-pages-component.html',
})
export class InicioPagesComponent {

  estadisticas = [
    {titulo: 'Clientes activos', valor: '128', detalle: '↑ 8 respecto al mes anterior', icono: 'bi-people', colorIcono: 'text-primary', colorDetalle: 'text-success'},
    {titulo: 'Cumplimiento de rutinas', valor: '84 %', detalle: '↑ 6 puntos esta semana', icono: 'bi-lightning-charge', colorIcono: 'text-primary', colorDetalle: 'text-success'},
    {titulo: 'Dietas asignadas', valor: '112', detalle: '87,5 % de clientes activos', icono: 'bi-cup-hot', colorIcono: 'text-primary', colorDetalle: 'text-success'},
    {titulo: 'Alertas de inactividad', valor: '7', detalle: '3 clientes llevan más de 5 días', icono: 'bi-exclamation-triangle', colorIcono: 'text-warning', colorDetalle: 'text-warning-emphasis'},
  ];

  dias = ['Vie', 'Sáb', 'Dom', 'Lun', 'Mar', 'Mié', 'Jue'];
  asistencia = [85, 88, 87, 90, 89, 88, 88];
  comidasMarcadas = [70, 76, 74, 78, 77, 81, 76];
  guias = [100, 75, 50, 25];

  rachas = [
    {iniciales: 'AR', nombre: 'Alejandro Ruiz', dias: 5, semana: [0, 0, 1, 1, 1, 1, 1]},
    {iniciales: 'LS', nombre: 'Lucía Sánchez', dias: 4, semana: [0, 0, 0, 1, 1, 1, 1]},
    {iniciales: 'PC', nombre: 'Pablo Castro', dias: 4, semana: [0, 0, 0, 1, 1, 1, 1]},
  ];
  letrasSemana = ['V', 'S', 'D', 'L', 'M', 'X', 'J'];

  seguimiento = [
    {iniciales: 'MG', nombre: 'Marta García', motivo: '5 días sin entrenar', cumplimiento: '42 %', ultimoAcceso: '5 días', accion: 'Contactar', ruta: '/chat'},
    {iniciales: 'DL', nombre: 'Diego López', motivo: 'Dieta sin registrar', cumplimiento: '67 %', ultimoAcceso: '2 días', accion: 'Revisar dieta', ruta: '/dietas'},
    {iniciales: 'LS', nombre: 'Lucía Sánchez', motivo: 'Revisión de medidas', cumplimiento: '91 %', ultimoAcceso: 'Hoy', accion: 'Ver ficha', ruta: '/clientes/3'},
  ];

  x(indice: number): number { return 50 + indice * 140; }
  y(valor: number): number { return 20 + (100 - valor) * (200 / 75); }

  puntos(valores: number[]): string {
    return valores.map((v, i) => this.x(i) + ',' + this.y(v)).join(' ');
  }
}
