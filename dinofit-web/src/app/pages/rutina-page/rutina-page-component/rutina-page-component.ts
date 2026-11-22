import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RutinaModalComponent } from '../../../modals/rutina-modal/rutina-modal-component/rutina-modal-component';
import { ConfirmDeleteModalComponent } from '../../../shared/confirm-delete-modal/confirm-delete-modal-component/confirm-delete-modal-component';

@Component({
  imports: [RouterLink, RutinaModalComponent, ConfirmDeleteModalComponent],
  selector: 'app-rutina-page-component',
  styleUrl: './rutina-page-component.css',
  templateUrl: './rutina-page-component.html',
})
export class RutinaPageComponent {

  dias = [
    {dia: 'Lun', fecha: '05 oct', nombre: 'Pierna A', estado: 'Cerrado', cerrado: true},
    {dia: 'Mar', fecha: '06 oct', nombre: 'Torso A', estado: 'Cerrado', cerrado: true},
    {dia: 'Mié', fecha: '07 oct', nombre: 'Recuperación', estado: 'Cerrado', cerrado: true},
    {dia: 'Jue', fecha: '08 oct', nombre: 'Torso B', estado: 'Abierto', cerrado: false},
    {dia: 'Vie', fecha: '09 oct', nombre: 'Descanso', estado: 'Abierto', cerrado: false},
    {dia: 'Sáb', fecha: '10 oct', nombre: 'Pierna B', estado: 'No autorizado', cerrado: true},
    {dia: 'Dom', fecha: '11 oct', nombre: 'Descanso', estado: 'Abierto', cerrado: false}
  ];
  diaSeleccionado = 'Jue';

  ejercicios = [
    {id: 1, nombre: 'Press de banca', detalle: 'Pectoral · Barra', series: '4', reps: '8–10', kg: '60', descanso: '90', observacion: 'Escápulas retraídas; no rebotar.'},
    {id: 2, nombre: 'Remo con mancuerna', detalle: 'Espalda · Mancuerna', series: '3', reps: '10–12', kg: '24', descanso: '75', observacion: 'Espalda neutra, codo hacia la cadera.'},
    {id: 3, nombre: 'Press militar', detalle: 'Hombros · Barra', series: '3', reps: '10', kg: '30', descanso: '90', observacion: 'Abdomen firme; evitar arquear.'},
    {id: 4, nombre: 'Curl de bíceps', detalle: 'Bíceps · Mancuerna', series: '3', reps: '12', kg: '12', descanso: '60', observacion: 'Sin balanceo, descenso controlado.'}
  ];

  biblioteca = [
    {nombre: 'Sentadilla con barra', detalle: 'Cuádriceps · Barra'},
    {nombre: 'Peso muerto rumano', detalle: 'Isquios · Barra'},
    {nombre: 'Jalón al pecho', detalle: 'Dorsal · Polea'},
    {nombre: 'Elevación lateral', detalle: 'Hombros · Mancuerna'},
    {nombre: 'Plancha abdominal', detalle: 'Core · Sin material'}
  ];

  mostrarModal = false;
  mostrarEliminar = false;

  abrirAlta(): void {
    this.mostrarModal = true;
  }

  guardar(): void {
    this.mostrarModal = false;
  }

  pedirEliminar(): void {
    this.mostrarEliminar = true;
  }

  responderEliminar(confirmado: boolean): void {
    this.mostrarEliminar = false;
  }
}
