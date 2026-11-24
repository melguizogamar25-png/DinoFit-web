import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-perfil-page-component',
  styleUrl: './perfil-page-component.css',
  templateUrl: './perfil-page-component.html',
})
export class PerfilPageComponent {

  idiomas = ['Español', 'English'];
  zonasHorarias = ['Europa / Madrid', 'Atlántico / Canarias'];

  verActual = false;
  verNueva = false;
  verConfirmar = false;
}
