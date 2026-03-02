import { Component, inject, input, signal } from '@angular/core';
import { ClienteService } from '../../../servicios/cliente.service';
import { Tr } from './tr/tr';

@Component({
  selector: 'app-cliente-table',
  templateUrl: './cliente-table.html',
  imports: [Tr],
})
export class ClienteTableComponent {
  clienteService = inject(ClienteService);
  clientes = this.clienteService.clientes;

  constructor() {}
}
