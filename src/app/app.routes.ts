import { Routes } from '@angular/router';
import { Clientes } from './pages/clientes/clientes';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  {
    path: 'clientes',
    component: Clientes,
  },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '/clientes' },
];
