
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SugerenciaService {

  constructor(private http: HttpClient) {}

  enviarFormulario(correo: string, mensaje: string) {
    const urlSugerencia = environment.enviaSugerencia;
    const requestOptions = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    };

    const fechaHoy = new Date().toISOString();

    const body = new HttpParams()
      .set('correo_mensaje', correo)
      .set('contenido_mensaje', mensaje)
      .set('fecha_creacion_mensaje', fechaHoy);

    return this.http.post(urlSugerencia, body.toString(), requestOptions).toPromise();
  }
}
