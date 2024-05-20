import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import {Result, CursosResponse} from '../Interfaces/cursos'
import { map } from 'rxjs/operators';

const urlCurso = environment.formacion;

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  constructor(private http: HttpClient) { }

  getCursos(): Observable<Result[]> {
       
    return this.http.get<CursosResponse>(urlCurso, {
      
    })
      .pipe(
        map(({results}) => results)
      );
  }

  getCurso(idcurso): Observable<Result[]> {

    return this.http.get<CursosResponse>(environment.cursoById.concat(idcurso), {
    })
      .pipe(
        map(({ results }) => results)
      );
  }
}


