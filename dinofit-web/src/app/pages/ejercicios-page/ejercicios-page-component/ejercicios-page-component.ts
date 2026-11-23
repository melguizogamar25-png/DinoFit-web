import { Component } from '@angular/core';
import { EjercicioModalComponent } from '../../../modals/ejercicio-modal/ejercicio-modal-component/ejercicio-modal-component';
import { ConfirmDeleteModalComponent } from '../../../shared/confirm-delete-modal/confirm-delete-modal-component/confirm-delete-modal-component';

@Component({
  imports: [EjercicioModalComponent, ConfirmDeleteModalComponent],
  selector: 'app-ejercicios-page-component',
  styleUrl: './ejercicios-page-component.css',
  templateUrl: './ejercicios-page-component.html',
})
export class EjerciciosPageComponent {
  ejercicios = [
    {id: 1, nombre: 'Press de banca', zona: 'Pectoral', equipamiento: 'Barra + banco'},
    {id: 2, nombre: 'Remo con mancuerna', zona: 'Dorsal', equipamiento: 'Mancuerna + banco'},
    {id: 3, nombre: 'Sentadilla con barra', zona: 'Cuádriceps', equipamiento: 'Barra + rack'},
    {id: 4, nombre: 'Peso muerto rumano', zona: 'Isquiosurales', equipamiento: 'Barra'},
    {id: 5, nombre: 'Press militar', zona: 'Deltoides', equipamiento: 'Barra'},
    {id: 6, nombre: 'Jalón al pecho', zona: 'Dorsal', equipamiento: 'Polea alta'},
    {id: 7, nombre: 'Curl de bíceps', zona: 'Bíceps', equipamiento: 'Mancuernas'},
    {id: 8, nombre: 'Plancha abdominal', zona: 'Core', equipamiento: 'Esterilla'}
  ];

  instrucciones = [
    'Apoya los pies en el suelo y retrae las escápulas sobre el banco.',
    'Agarra la barra algo más abierto que los hombros. Muñecas alineadas.',
    'Baja de forma controlada hasta el pecho, sin rebotar.',
    'Empuja la barra y exhala. Mantén glúteos y espalda apoyados.'
  ];

  mostrarModal = false;
  esEdicion = false;
  mostrarEliminar = false;

  abrirAlta(): void {
    this.esEdicion = false;
    this.mostrarModal = true;
  }

  abrirEdicion(): void {
    this.esEdicion = true;
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
