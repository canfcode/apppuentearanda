import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DenunciasResponse, Result } from '../Interfaces/denuncias';



@Injectable({
  providedIn: 'root'
})
export class DenunciasService {

  constructor(private http: HttpClient) { }

  getDenuncias(): Observable<Result[]> {

    return this.http.get<DenunciasResponse>(environment.denuncias, {

    })
      .pipe(
        map(({ results }) => results)
      );
  }

  getDenuncia(iddenuncia): Observable<Result[]> {


    return this.http.get<DenunciasResponse>(environment.denunciaById.concat(iddenuncia), {
    })
      .pipe(
        map(({ results }) => results)
      );
  }

  getCategoriaDenuncias(): Observable<Result[]> {
    return this.http.get<DenunciasResponse>(environment.categoriaDenuncias, {

    })
      .pipe(
        map(({ results }) => results)
      );
  }
}
