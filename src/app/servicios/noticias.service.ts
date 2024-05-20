import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NoticiasResponse, Result } from '../Interfaces/noticias';
import { catNoticia, CategoriaNoticiasResponse } from '../Interfaces/categoriasNoticias';



@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(): Observable<Result[]> {

    return this.http.get<NoticiasResponse>(environment.noticias, {

    })
      .pipe(
        map(({ results }) => results)
      );
  }

  getNoticia(idnoticia): Observable<Result[]> {


    return this.http.get<NoticiasResponse>(environment.noticiaById.concat(idnoticia), {
    })
      .pipe(
        map(({ results }) => results)
      );
  }

  getCategoriaNoticias(): Observable<Result[]> {
    return this.http.get<NoticiasResponse>(environment.categoriaNoticias, {

    })
      .pipe(
        map(({ results }) => results)
      );
  }
}
