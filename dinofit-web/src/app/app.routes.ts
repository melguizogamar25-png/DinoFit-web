import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page-component/login-page-component';
import { LayoutAdminComponent } from './components/layout-admin-component/layout-admin-component';
import { ClientesPageComponent } from './pages/clientes-page/clientes-page-component/clientes-page-component';
import { RutinaPageComponent } from './pages/rutina-page/rutina-page-component/rutina-page-component';
import { EjerciciosPageComponent } from './pages/ejercicios-page/ejercicios-page-component/ejercicios-page-component';
import { DietasPageComponent } from './pages/dietas-page/dietas-page-component/dietas-page-component';
import { AlimentoPageComponent } from './pages/alimento-page/alimento-page-component/alimento-page-component';
import { NoEncontradaPageComponent } from './pages/no-encontrada-page/no-encontrada-page-component/no-encontrada-page-component';
import { InicioPagesComponent } from './pages/inicio-pages/inicio-pages-component';
import { ChatPagesComponent } from './pages/chat-pages/chat-pages-component/chat-pages-component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LayoutAdminComponent},
    {
        path: '',
        component: LayoutAdminComponent,
       children: [
            {path: 'inicio', component: InicioPagesComponent, data: {titulo: 'Inicio'}},
            {path: 'clientes', component: ClientesPageComponent, data: {titulo: 'Clientes'}},
            {path: 'rutinas', component: RutinaPageComponent, data: {titulo: 'Rutinas'}},
            {path: 'ejercicios', component: EjerciciosPageComponent, data: {titulo: 'Ejercicios'}},
            {path: 'dietas', component: DietasPageComponent, data: {titulo: 'Dietas'}},
            {path: 'alimentos', component: AlimentoPageComponent, data: {titulo: 'Alimentos'}},
            {path: 'chat', component: ChatPagesComponent, data: {titulo: 'Chat'}}
        ]
    },
    {path: '**', component:NoEncontradaPageComponent}
];
