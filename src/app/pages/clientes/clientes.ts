import { Component, inject, OnInit, signal } from '@angular/core';
import { ClienteTableComponent } from './cliente-table/cliente-table';
import { ClienteService } from '../../servicios/cliente.service';
import { Router } from '@angular/router';
import { Jumbotron } from '../../components/jumbotron/jumbotron';
import { Breadcrumb } from '../../components/breadcrumb/breadcrumb';
import { Loading } from '../../components/loading/loading';
import { MCliente } from '../../models/cliente.model';

@Component({
  selector: 'app-clientes',
  imports: [ClienteTableComponent, Jumbotron, Breadcrumb, Loading],
  templateUrl: './clientes.html',
  styles: ``,
})
export class Clientes implements OnInit {
  router = inject(Router);
  clienteService = inject(ClienteService);
  isLoading = signal(true);
  clientes = signal<MCliente[]>([]);

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe({
      next: (response) => {
        this.clientes.set(response.data);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error al obtener clientes:', error);
      },
    });
  }

  agregarCliente() {
    this.router.navigate(['/clientes/agregar']);
  }
}
