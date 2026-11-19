import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-barra-lateral-component',
  styleUrl: './barra-lateral-component.css',
  templateUrl: './barra-lateral-component.html',
})
export class BarraLateralComponent {}
