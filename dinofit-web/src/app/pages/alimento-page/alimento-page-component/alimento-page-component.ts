import { Component } from '@angular/core';
import { AlimentoModalComponents } from '../../../modals/alimento-modal/alimento-modal-components/alimento-modal-components';
import { ConfirmDeleteModalComponent } from '../../../shared/confirm-delete-modal/confirm-delete-modal-component/confirm-delete-modal-component';

@Component({
  imports: [AlimentoModalComponents, ConfirmDeleteModalComponent],
  selector: 'app-alimento-page-component',
  styleUrl: './alimento-page-component.css',
  templateUrl: './alimento-page-component.html',
})
export class AlimentoPageComponent {

  alimentos = [
    {id: 1, nombre: 'Avena en copos', kcal: 355, proteinas: 13, carbohidratos: 60, grasas: 7},
    {id: 2, nombre: 'Yogur griego 0%', kcal: 56, proteinas: 10, carbohidratos: 4, grasas: 0},
    {id: 3, nombre: 'Plátano', kcal: 96, proteinas: 1, carbohidratos: 23, grasas: 0},
    {id: 4, nombre: 'Pechuga de pollo', kcal: 110, proteinas: 23, carbohidratos: 0, grasas: 2},
    {id: 5, nombre: 'Brocoli', kcal: 28, proteinas: 3, carbohidratos: 4, grasas: 0}
  ];

  mostrarModal = false;
  esEdicion = false;
  mostrarEliminar = false;

  abrirAlta(): void {
    this.esEdicion = true;
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
