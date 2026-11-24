import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClienteModalComponent } from '../../../modals/cliente-modal/cliente-modal-component/cliente-modal-component';
import { ConfirmDeleteModalComponent } from '../../../shared/confirm-delete-modal/confirm-delete-modal-component/confirm-delete-modal-component';

@Component({
  imports: [RouterLink, ClienteModalComponent, ConfirmDeleteModalComponent],
  selector: 'app-clientes-page-component',
  styleUrl: './clientes-page-component.css',
  templateUrl: './clientes-page-component.html',
})
export class ClientesPageComponent {

  clientes = [
    {id: 1, iniciales: 'AR', nombre: 'Alejandro Ruiz', email: 'alejandro.ruiz@ejemplo.es', objetivo: 'Recomposición', plan: 'Fuerza · 4 días', cumplimiento: '92 %', estado: 'Activo', ultimoAcceso: 'Hoy, 09:12'},
    {id: 2, iniciales: 'MG', nombre: 'Marta García', email: 'marta.garcia@ejemplo.es', objetivo: 'Pérdida de grasa', plan: 'Funcional · 3 días', cumplimiento: '42 %', estado: 'Seguimiento', ultimoAcceso: '03 oct, 18:40'},
    {id: 3, iniciales: 'DL', nombre: 'Diego López', email: 'diego.lopez@ejemplo.es', objetivo: 'Ganar masa muscular', plan: 'Hipertrofia · 4 días', cumplimiento: '67 %', estado: 'Activo', ultimoAcceso: '06 oct, 12:10'},
    {id: 4, iniciales: 'LS', nombre: 'Lucía Sánchez', email: 'lucia.sanchez@ejemplo.es', objetivo: 'Mejorar rendimiento', plan: 'Fuerza · 4 días', cumplimiento: '91 %', estado: 'Activo', ultimoAcceso: 'Hoy, 08:25'},
    {id: 5, iniciales: 'PC', nombre: 'Pablo Castro', email: 'pablo.castro@ejemplo.es', objetivo: 'Recomposición', plan: 'Fuerza · 3 días', cumplimiento: '88 %', estado: 'Activo', ultimoAcceso: 'Hoy, 07:50'},
    {id: 6, iniciales: 'ER', nombre: 'Elena Romero', email: 'elena.romero@ejemplo.es', objetivo: 'Movilidad y bienestar', plan: 'Movilidad · 3 días', cumplimiento: '85 %', estado: 'Activo', ultimoAcceso: 'Ayer, 19:30'},
    {id: 7, iniciales: 'JS', nombre: 'Javier Soto', email: 'javier.soto@ejemplo.es', objetivo: 'Ganar fuerza', plan: 'Fuerza · 4 días', cumplimiento: '76 %', estado: 'Activo', ultimoAcceso: 'Ayer, 16:15'},
    {id: 8, iniciales: 'NB', nombre: 'Nuria Blanco', email: 'nuria.blanco@ejemplo.es', objetivo: 'Mantenimiento', plan: 'Sin plan activo', cumplimiento: '—', estado: 'Inactivo', ultimoAcceso: '22 sep, 10:04'},
  ];

  clienteSeleccionado = this.clientes[0];

  mostrarModal = false;
  mostrarEliminar = false;

  seleccionar(cliente: any): void {
    this.clienteSeleccionado = cliente;
  }

  claseEstado(estado: string): string {
    if (estado === 'Activo') { return 'etiqueta-verde'; }
    if (estado === 'Seguimiento') { return 'etiqueta-naranja'; }
    return 'etiqueta-gris';
  }

  abrirAlta(): void {
    this.mostrarModal = true;
  }

  guardar(): void {
    this.mostrarModal = false;
  }

  pedirEliminar(cliente: any): void {
    this.clienteSeleccionado = cliente;
    this.mostrarEliminar = true;
  }

  responderEliminar(confirmado: boolean): void {
    this.mostrarEliminar = false;
  }
}
