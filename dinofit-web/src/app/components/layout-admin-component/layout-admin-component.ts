import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { BarraLateralComponent } from '../barra-lateral-component/barra-lateral-component/barra-lateral-component';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterOutlet, BarraLateralComponent],
  selector: 'app-layout-admin-component',
  styleUrl: './layout-admin-component.css',
  templateUrl: './layout-admin-component.html',
})
export class LayoutAdminComponent {
  
  private router = inject(Router);

  // Título de la barra superior: se lee del "data" de la ruta activa
  titulo = signal('');

  constructor() {
    this.router.events
      .pipe(filter(evento => evento instanceof NavigationEnd), takeUntilDestroyed())
      .subscribe(() => {
        let ruta = this.router.routerState.snapshot.root;
        while (ruta.firstChild) {
          ruta = ruta.firstChild;
        }
        this.titulo.set(ruta.data['titulo'] ?? '');
      });
  }
}
