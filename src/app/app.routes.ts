import { Routes } from '@angular/router';
import { Clientes } from './pages/clientes/clientes';
import { Login } from './pages/login/login';
import { AgregarCliente } from './pages/agregar-cliente/agregar-cliente';
import { Register } from './pages/register/register';

export const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  {
    path: 'clientes',
    children: [
      { path: '', component: Clientes },
      { path: 'agregar', component: AgregarCliente },
    ],
  },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '/clientes' },
];
