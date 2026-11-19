import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BarraLateralComponent } from '../barra-lateral-component/barra-lateral-component/barra-lateral-component';

@Component({
  imports: [RouterOutlet, BarraLateralComponent],
  selector: 'app-layout-admin-component',
  styleUrl: './layout-admin-component.css',
  templateUrl: './layout-admin-component.html',
})
export class LayoutAdminComponent {}
