import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NuevaConversacionModalComponent } from '../../../modals/nueva-conversacion-modal-component/nueva-conversacion-modal-component';

@Component({
  imports: [RouterLink, NuevaConversacionModalComponent],
  selector: 'app-chat-pages-component',
  styleUrl: './chat-pages-component.css',
  templateUrl: './chat-pages-component.html',
})
export class ChatPagesComponent {

   conversaciones = [
    {id: 1, iniciales: 'AR', nombre: 'Alejandro Ruiz', ultimo: 'Perfecto, ¡gracias Laura!', hora: '09:18', sinLeer: 0,
     estado: 'Activo hoy · Plan Fuerza, semana 6',
     mensajes: [
       {de_entrenador: false, texto: '¡Buenos días, Laura! Ya he hecho el control: 78,5 kg. ¿Mantenemos la rutina esta semana?', hora: '09:05'},
       {de_entrenador: true, texto: '¡Buen trabajo, Alejandro! He registrado el avance. Mantendremos Fuerza · 4 días y hoy toca Torso B. Cuida la técnica del press de banca.', hora: '09:08 · Leído'},
       {de_entrenador: false, texto: 'Te dejo mi almuerzo de ayer para que lo revises?', hora: '09:11'}
     ]},
    {id: 2, iniciales: 'MG', nombre: 'Marta García', ultimo: 'Hoy retomo el entrenamiento.', hora: '08:42', sinLeer: 2,
     estado: 'Activa hace 5 días · Plan Funcional, semana 6',
     mensajes: [{de_entrenador: false, texto: 'Hoy retomo el entrenamiento.', hora: '08:42'}]},
    {id: 3, iniciales: 'DL', nombre: 'Diego López', ultimo: '¿Puedo cambiar la merienda?', hora: 'Ayer', sinLeer: 1,
     estado: 'Activo ayer · Plan Hipertrofia, semana 6',
     mensajes: [{de_entrenador: false, texto: '¿Puedo cambiar la merienda?', hora: 'Ayer'}]},
    {id: 4, iniciales: 'LS', nombre: 'Lucía Sánchez', ultimo: 'He completado la rutina ✅', hora: 'Ayer', sinLeer: 0,
     estado: 'Activa hoy · Plan Fuerza, semana 6',
     mensajes: [{de_entrenador: false, texto: 'He completado la rutina ✅', hora: 'Ayer'}]},
    {id: 5, iniciales: 'PC', nombre: 'Pablo Castro', ultimo: 'Gracias por los ajustes.', hora: 'Ayer', sinLeer: 0,
     estado: 'Activo hoy · Plan Fuerza, semana 6',
     mensajes: [{de_entrenador: false, texto: 'Gracias por los ajustes.', hora: 'Ayer'}]},
    {id: 6, iniciales: 'ER', nombre: 'Elena Romero', ultimo: 'La movilidad va mucho mejor.', hora: '06 oct', sinLeer: 0,
     estado: 'Activa ayer · Plan Movilidad, semana 6',
     mensajes: [{de_entrenador: false, texto: 'La movilidad va mucho mejor.', hora: '06 oct'}]},
  ];

  conversacionActiva = this.conversaciones[0]
  mostrarModal = false;

  seleccionar(conversacion: any): void {
    this.conversacionActiva = conversacion;
  }

  abrirNueva(): void {
    this.mostrarModal = true;
  }

  iniciar(nombre: string): void {
    this.mostrarModal = false;
  }
}
