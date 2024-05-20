import { Component, OnInit } from '@angular/core';
import { NegociosService } from '../../servicios/negocios.service';
import { Result } from '../../Interfaces/negocios';
import { environment } from 'src/environments/environment';

const imgNeg = environment.imgUrlNegocios;

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.page.html',
  styleUrls: ['./negocios.page.scss'],
})
export class NegociosPage implements OnInit {

  public results: Result[] = [];
  public catNegocios: Result[] = [];
  public textoNegocios: string = "";
  public categoriaN: number;
  negocios: Result[];

  constructor(private NegociosService: NegociosService) { }

  ngOnInit() {
    this.NegociosService.getNegocios()
      .subscribe(results => this.results.push(...results)
      );

      this.NegociosService.getCategoriasnegocios()
      .subscribe(catNegocio => this.catNegocios.push(...catNegocio)
      );

  }

  buscarNegocio(event: { detail: { value: string; }; }) {
    this.textoNegocios = event.detail.value;
  }


  async getCategoriaNombre(idCategoria: any) {
    /*  this.NegociosService.getCategoriaNegocio()
     .subscribe( ) */
    console.log(this.NegociosService.getCategoriaNegocio(idCategoria));
  }

  categoriaNegocio(event: { detail: { value: number; }; }){
    this.categoriaN = event.detail.value;        
    this.results = [];
    this.NegociosService.getNegociosByCategoria(this.categoriaN)
      .subscribe(negociosBycategoria => this.results.push(...negociosBycategoria)
      );
    
  }
  
  /**
   * Método para obtener el logo del negocio
   * @param nombreNegocio 
   * @param logo_negocio 
   * @returns 
   */
  urlImagen(nombreNegocio: string, logo_negocio: String) {

    var carpetaNegocio: String = "";
    carpetaNegocio = nombreNegocio.replace(" ", "-");
    carpetaNegocio = carpetaNegocio.toLowerCase();
    return environment.imgUrlNegocios + carpetaNegocio + "/" + logo_negocio;
  }

    /**
   * Método para obtener el logo categoria
   * @param nombreCategoria 
   * @param logo_categoria
   * @returns 
   */

    urlCat(nombreCategoria: string, icono_categorianegocio: String) {

      var carpetaCategoria: String = "";
      carpetaCategoria = nombreCategoria.replace(" ", "-");
      carpetaCategoria = carpetaCategoria.toLowerCase();
      return environment.imgCategorian + carpetaCategoria +"/"+icono_categorianegocio;
    }

}
