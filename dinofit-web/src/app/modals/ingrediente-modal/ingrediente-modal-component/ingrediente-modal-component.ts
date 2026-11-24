import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ingrediente-modal-component',
  styleUrl: './ingrediente-modal-component.css',
  templateUrl: './ingrediente-modal-component.html',
})
export class IngredienteModalComponent {

  @Input() comida = '';

  alimentos = [
    { id: 1, nombre: 'Avena en copos', categoria: 'Cereales', kcal: 355, proteinas: 13, carbohidratos: 60, grasas: 7 },
    { id: 2, nombre: 'Yogur griego 0 %', categoria: 'Lácteos', kcal: 56, proteinas: 10, carbohidratos: 4, grasas: 0 },
    { id: 3, nombre: 'Plátano', categoria: 'Frutas', kcal: 96, proteinas: 1, carbohidratos: 23, grasas: 0 },
    { id: 4, nombre: 'Pechuga de pollo', categoria: 'Carnes', kcal: 110, proteinas: 23, carbohidratos: 0, grasas: 2 },
    { id: 5, nombre: 'Arroz integral (seco)', categoria: 'Cereales', kcal: 349, proteinas: 7, carbohidratos: 78, grasas: 1 },
    { id: 6, nombre: 'Brócoli', categoria: 'Verduras', kcal: 28, proteinas: 3, carbohidratos: 4, grasas: 0 },
    { id: 7, nombre: 'Aceite de oliva', categoria: 'Aceites', kcal: 900, proteinas: 0, carbohidratos: 0, grasas: 100 },
    { id: 8, nombre: 'Manzana', categoria: 'Frutas', kcal: 56, proteinas: 0, carbohidratos: 14, grasas: 0 },
    { id: 9, nombre: 'Almendras', categoria: 'Frutos secos', kcal: 574, proteinas: 21, carbohidratos: 10, grasas: 50 },
    { id: 10, nombre: 'Salmón', categoria: 'Pescados', kcal: 197, proteinas: 20, carbohidratos: 0, grasas: 13 },
    { id: 11, nombre: 'Patata', categoria: 'Tubérculos', kcal: 76, proteinas: 2, carbohidratos: 17, grasas: 0 },
    { id: 12, nombre: 'Calabacín', categoria: 'Verduras', kcal: 16, proteinas: 1, carbohidratos: 3, grasas: 0 },
  ];

  @Output() guardar = new EventEmitter<void>();
  @Output() cerrar = new EventEmitter<void>();
}
