import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IngredienteModalComponent } from '../../../modals/ingrediente-modal/ingrediente-modal-component/ingrediente-modal-component';
import { DietaModalComponent } from '../../../modals/dieta-modal/dieta-modal-component/dieta-modal-component';
import { ConfirmDeleteModalComponent } from '../../../shared/confirm-delete-modal/confirm-delete-modal-component/confirm-delete-modal-component';

@Component({
  imports: [RouterLink, IngredienteModalComponent,DietaModalComponent, ConfirmDeleteModalComponent],
  selector: 'app-dietas-page-component',
  styleUrl: './dietas-page-component.css',
  templateUrl: './dietas-page-component.html',
})
export class DietasPageComponent {

dias = [
    {dia: 'Lun', fecha: '05 oct', etiqueta: 'Lun 05', estado: 'Cerrado', cerrado: true},
    {dia: 'Mar', fecha: '06 oct', etiqueta: 'Mar 06', estado: 'Cerrado', cerrado: true},
    {dia: 'Mié', fecha: '07 oct', etiqueta: 'Mié 07', estado: 'Cerrado', cerrado: true},
    {dia: 'Jue', fecha: '08 oct', etiqueta: 'Jue 08', estado: 'Abierto', cerrado: false},
    {dia: 'Vie', fecha: '09 oct', etiqueta: 'Vie 09', estado: 'Abierto', cerrado: false},
    {dia: 'Sáb', fecha: '10 oct', etiqueta: 'Sáb 10', estado: 'Bloqueado', cerrado: true},
    {dia: 'Dom', fecha: '11 oct', etiqueta: 'Dom 11', estado: 'Abierto', cerrado: false},
  ];
  diaSeleccionado = 'Jue 08';

  observaciones = 'Mantener los horarios acordados. Beber agua a lo largo del día y consultar cualquier cambio con la entrenadora.';

  comidas = [
    {
      nombre: 'Desayuno', hora: '08:00', kcal: '421,0', resumen: 'P 28,8 g · C 67,0 g · G 4,2 g',
      ingredientes: [
        {id: 1, nombre: 'Avena en copos', cantidad: '60 g', kcal: '213,0', proteinas: '7,8', carbohidratos: '36,0', grasas: '4,2'},
        {id: 2, nombre: 'Yogur griego 0 %', cantidad: '200 g', kcal: '112,0', proteinas: '20,0', carbohidratos: '8,0', grasas: '0,0'},
        {id: 3, nombre: 'Plátano', cantidad: '100 g', kcal: '96,0', proteinas: '1,0', carbohidratos: '23,0', grasas: '0,0'},
      ],
    },
    {
      nombre: 'Almuerzo', hora: '14:00', kcal: '561,4', resumen: 'P 54,7 g · C 52,8 g · G 14,6 g',
      ingredientes: [
        {id: 4, nombre: 'Pechuga de pollo', cantidad: '200 g', kcal: '220,0', proteinas: '46,0', carbohidratos: '0,0', grasas: '4,0'},
        {id: 5, nombre: 'Arroz integral (seco)', cantidad: '60 g', kcal: '209,4', proteinas: '4,2', carbohidratos: '46,8', grasas: '0,6'},
        {id: 6, nombre: 'Brócoli', cantidad: '150 g', kcal: '42,0', proteinas: '4,5', carbohidratos: '6,0', grasas: '0,0'},
        {id: 7, nombre: 'Aceite de oliva', cantidad: '10 g', kcal: '90,0', proteinas: '0,0', carbohidratos: '0,0', grasas: '10,0'},
      ],
    },
    {
      nombre: 'Merienda', hora: '17:30', kcal: '310,8', resumen: 'P 24,2 g · C 31,0 g · G 10,0 g',
      ingredientes: [
        {id: 8, nombre: 'Yogur griego 0 %', cantidad: '200 g', kcal: '112,0', proteinas: '20,0', carbohidratos: '8,0', grasas: '0,0'},
        {id: 9, nombre: 'Manzana', cantidad: '150 g', kcal: '84,0', proteinas: '0,0', carbohidratos: '21,0', grasas: '0,0'},
        {id: 10, nombre: 'Almendras', cantidad: '20 g', kcal: '114,8', proteinas: '4,2', carbohidratos: '2,0', grasas: '10,0'},
      ],
    },
    {
      nombre: 'Cena', hora: '21:00', kcal: '403,5', resumen: 'P 34,0 g · C 23,0 g · G 19,5 g',
      ingredientes: [
        {id: 11, nombre: 'Salmón', cantidad: '150 g', kcal: '295,5', proteinas: '30,0', carbohidratos: '0,0', grasas: '19,5'},
        {id: 12, nombre: 'Patata', cantidad: '100 g', kcal: '76,0', proteinas: '2,0', carbohidratos: '17,0', grasas: '0,0'},
        {id: 13, nombre: 'Calabacín', cantidad: '200 g', kcal: '32,0', proteinas: '2,0', carbohidratos: '6,0', grasas: '0,0'},
      ],
    },
  ];

  mostrarIngrediente = false;
  comidaSeleccionada = '';
  mostrarObservaciones = false;
  mostrarEliminar = false;

  abrirAlta(comida: string): void {
    this.comidaSeleccionada = comida;
    this.mostrarIngrediente = true;
  }

  guardarIngrediente(): void {
    this.mostrarIngrediente = false;
  }

  abrirEdicion(): void {
    this.mostrarObservaciones = true;
  }

  guardarObservaciones(): void {
    this.mostrarObservaciones = false;
  }

  pedirEliminar(): void {
    this.mostrarEliminar = true;
  }

  responderEliminar(confirmado: boolean): void {
    this.mostrarEliminar = false;
  }


}
