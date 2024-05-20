import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Result, TramitesResponse } from '../Interfaces/tramites';



@Injectable({
  providedIn: 'root'
})
export class TramitesService {

  constructor(private http: HttpClient) { }

  getTramites(): Observable<Result[]> {

    return this.http.get<TramitesResponse>(environment.tramites, {

    })
      .pipe(
        map(({ results }) => results)
      );
  }

  getTramite(idtramite): Observable<Result[]> {


    return this.http.get<TramitesResponse>(environment.tramiteById.concat(idtramite), {
    })
      .pipe(
        map(({ results }) => results)
      );
  }

  getCategoriaTramites(): Observable<Result[]> {
    return this.http.get<TramitesResponse>(environment.categoriaTramites, {

    })
      .pipe(
        map(({ results }) => results)
      );
  }
}
