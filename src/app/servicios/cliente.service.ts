import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable, OnInit, signal } from '@angular/core';
import { MCliente } from '../models/cliente.model';
import { Observable } from 'rxjs';

type ResponseData = {
  message: string;
  data: MCliente[];
};

type AddResponseData = {
  message: string;
  data: MCliente;
};

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  http = inject(HttpClient);

  private _clientes = signal<MCliente[]>([]);
  public readonly clientes = this._clientes.asReadonly();
  public totalClientes = signal<number>(0);
  public saldoTotal = signal<number>(0);

  constructor() {
    effect(() => {
      this.totalClientes.set(this._clientes().length);
      this.saldoTotal.set(this._clientes().reduce((total, cliente) => total + cliente.saldo, 0));
    });

    this.getClientes().subscribe({
      next: (response) => {
        this.setClientes(response.data);
      },
      error: (error) => {
        console.error('Error al cargar clientes:', error);
      },
    });
  }

  addCliente(cliente: MCliente): void {
    this._clientes.update((clientes) => [...clientes, cliente]);
  }

  setClientes(clientes: MCliente[]): void {
    this._clientes.set(clientes);
  }

  getClientes(): Observable<ResponseData> {
    return this.http.get<ResponseData>('http://localhost:3000/clientes');
  }

  agregarCliente(cliente: MCliente): Observable<AddResponseData> {
    return this.http.post<AddResponseData>('http://localhost:3000/clientes', cliente);
  }
}
