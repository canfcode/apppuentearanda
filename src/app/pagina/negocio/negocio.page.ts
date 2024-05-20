import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../../Interfaces/negocios';
import { NegociosService } from '../../servicios/negocios.service';
import { SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

const banner = environment.banner;
const imglogo = environment.imgUrlNegocios;

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.page.html',
  styleUrls: ['./negocio.page.scss'],
})
export class NegocioPage implements OnInit {



  public results: Result[] = [];
  public id: any;
  public facebookUrl: String;
  public negocioGps: SafeResourceUrl;
  public imagenes: String[] = [];
  public redes: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private NegociosService: NegociosService

  ) {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("idnegocio");
    
    
    this.NegociosService.getNegocio(this.id)
      .subscribe(results => this.results.push(...results)
      );   
      
      console.log(this.results);
           

  }

  getFacebookUrl(){
    console.log(this.results[0].face_negocio);
    return this.results[0].face_negocio;
  }

  images(bannerNegocio: String, urlNegocio: String) {


    var rutaAux: String = "";

    //return environment.imgUrlNegocios+carpetaNegocio+"/"+logo_negocio;   

    var imagenes2: String[] = [];
    var contador = 0;

    this.imagenes = [];
    this.imagenes = bannerNegocio.split(",", 5);

    this.imagenes.forEach(imagen => {

      if (this.imagenes.length === 1) {
        rutaAux = banner + urlNegocio + "/galeria/" + imagen.slice(2, -2);
        imagenes2.push(rutaAux);
      }
      else {
        if (contador === 0) {
          rutaAux = banner + urlNegocio + "/galeria/" + imagen.slice(2, -1);
          imagenes2.push(rutaAux);
        }

        else if (contador === this.imagenes.length - 1) {
          rutaAux = banner + urlNegocio + "/galeria/" + imagen.slice(1, -2);
          imagenes2.push(rutaAux);

        } else {
          rutaAux = banner + urlNegocio + "/galeria/" + imagen.slice(1, -1);
          imagenes2.push(rutaAux);
        }
      }

      contador += 1;
    });
    
    
    return imagenes2;
  }

  serviciosNegocio(serviciosN: String) {
    var servicios: String[] = [];
    var serviciosAux: String = "";
    serviciosAux = serviciosN.replace(/['"[]+/g, '');
    serviciosAux = serviciosAux.replace(']', '');
    servicios = serviciosAux.split(",", 5);
    return servicios;
  }

  urlImagen(urlNegocio, logo_negocio: String) {
    return imglogo + urlNegocio + "/" + logo_negocio;
  }


}
  




