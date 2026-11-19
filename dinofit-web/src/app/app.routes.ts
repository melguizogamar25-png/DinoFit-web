import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page-component/login-page-component';
import { LayoutAdminComponent } from './components/layout-admin-component/layout-admin-component';
import { ClientesPageComponent } from './pages/clientes-page/clientes-page-component/clientes-page-component';
import { RutinaPageComponent } from './pages/rutina-page/rutina-page-component/rutina-page-component';
import { EjerciciosPageComponent } from './pages/ejercicios-page/ejercicios-page-component/ejercicios-page-component';
import { DietasPageComponent } from './pages/dietas-page/dietas-page-component/dietas-page-component';
import { AlimentoPageComponent } from './pages/alimento-page/alimento-page-component/alimento-page-component';
import { NoEncontradaPageComponent } from './pages/no-encontrada-page/no-encontrada-page-component/no-encontrada-page-component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LayoutAdminComponent},
    {
        path: '',
        component: LayoutAdminComponent,
        children: [
            {path: 'clientes', component: ClientesPageComponent},
            {path: 'rutinas', component: RutinaPageComponent},
            {path: 'ejercicios', component: EjerciciosPageComponent},
            {path: 'dietas', component: DietasPageComponent},
            {path: 'alimentos', component: AlimentoPageComponent}
        ]
    },
    {path: '**', component:NoEncontradaPageComponent}
];
