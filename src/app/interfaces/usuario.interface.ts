import { HttpHeaders } from '@angular/common/http';

export interface IUsuario {
  nombre: string;
  email: string;
  fechaRegistro: Date;
  saldo: number;
  image?: string;
}

export interface RegisterResponse {
  message: string;
  token: string;
  usuario: IUsuario;
}

export interface LoginResponse {
  message: string;
  token: string;
  usuario: IUsuario;
}

export interface ErrorResponse {
  error: { error: string };
  headers: HttpHeaders;
  message: string;
  name: string;
  ok: boolean;
  status: number;
  statusText: string;
  url: string | null;
}
