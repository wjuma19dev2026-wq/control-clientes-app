import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
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

  constructor() {}

  getClientes(): Observable<ResponseData> {
    return this.http.get<ResponseData>('http://localhost:3000/clientes');
  }

  agregarCliente(cliente: MCliente): Observable<AddResponseData> {
    return this.http.post<AddResponseData>('http://localhost:3000/clientes', cliente);
  }
}
