import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-nueva-conversacion-modal-component',
  styleUrl: './nueva-conversacion-modal-component.css',
  templateUrl: './nueva-conversacion-modal-component.html',
})
export class NuevaConversacionModalComponent {

  @Output() iniciar = new EventEmitter<string>();
  @Output() cerrar = new EventEmitter<void>();

  clientes = [
    {iniciales: 'AG', nombre: 'Ana García López', email: 'ana.garcia@example.com'},
    {iniciales: 'DS', nombre: 'David Sánchez Ruiz', email: 'david.sanchez@example.com'},
    {iniciales: 'EM', nombre: 'Elena Martín Pérez', email: 'elena.martin@example.com'},
    {iniciales: 'JT', nombre: 'Javier Torres Díaz', email: 'javier.torres@example.com'},
    {iniciales: 'LF', nombre: 'Laura Fernández Gil', email: 'laura.fernandez@example.com'},
    {iniciales: 'LR', nombre: 'Lucía Romero Vega', email: 'lucia.romero@example.com'},
    {iniciales: 'MN', nombre: 'Marcos Navarro León', email: 'marcos.navarro@example.com'},
    {iniciales: 'MR', nombre: 'Marta Ruiz Castillo', email: 'marta.ruiz@example.com'},
    {iniciales: 'PM', nombre: 'Pablo Moreno Santos', email: 'pablo.moreno@example.com'},
    {iniciales: 'SL', nombre: 'Sofía López Herrera', email: 'sofia.lopez@example.com'},
  ];

  clienteSeleccionado = this.clientes[0];

  seleccionar(cliente: any): void {
    this.clienteSeleccionado = cliente;
  }
}
