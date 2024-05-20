import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { NegociosResponse, Result } from '../Interfaces/negocios';

import { shuffle } from 'lodash';

const apiKey = environment.apiKey;
const negCatBar = environment.negocios_categoria_barrio;
const imgNeg = environment.imgUrlNegocios;
const apiUrl = environment.apiUrl;
const negByCat = environment.negociosByCategoria;
const redesNegocio = environment.redesNegocio;

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append("Authotization",apiKey);
  }

  /**
   * Método para realizar petición a la api y obtener los negocios
   * @returns 
   */
  /*getNegocios(): Observable<Result[]> {
       
    return this.http.get<NegociosResponse>(environment.negocios_categoria_barrio, {
      
    })
      .pipe(
        map(({results}) => results)
      );
  }*/
  /* cesar prueba */
  getNegocios(): Observable<Result[]> {
       
    return this.http.get<NegociosResponse>(environment.negocios_categoria_barrio, {
      
    })
      .pipe(
        map(({results}) => shuffle(results).slice(0, 10))
      );
  }
  /* termina pruena */ 

  getCategoriasnegocios(): Observable<Result[]> {
    return this.http.get<NegociosResponse>(environment.categoriaNegocios, {

    })
      .pipe(
        map(({ results }) => results)
      );
  }

  
  getNegocio(idnegocio): Observable<Result[]>{    
    return this.http.get<NegociosResponse>(environment.negocioById.concat(idnegocio), {
      
    })
      .pipe(
        map(({results}) => results)
      );
  }  

  getCategoriaNegocio(id_categorianegocio){     
    return this.http.get<NegociosResponse>(`http://apiaranda.miocampo.com.co/categorianegocios?linkTo=id_categorianegocio&equalTo=`+id_categorianegocio)
      .pipe(
        map(({results}) => results)
      );
  }

  getNegociosByCategoria(id_categorianegocio){     
    return this.http.get<NegociosResponse>(negByCat+id_categorianegocio)
      .pipe(
        map(({results}) => results)
      );
  }  
  

  
}

