import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/Interfaces/tramites';
import { TramitesService } from 'src/app/servicios/tramites.service';
import { environment } from 'src/environments/environment';

const urlImgTramites = environment.imgTramites

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.page.html',
  styleUrls: ['./tramites.page.scss'],
})
export class TramitesPage implements OnInit {

  public tramites: Result[] = [];

  public catTramites: Result[] = [];

  public mensaje: String;

  public categoriaT: string = '';

  constructor(private TramitesService: TramitesService) { }

  ngOnInit() {
    this.TramitesService.getTramites()
      .subscribe( tramites => this.tramites.push(...tramites)    
      
      );

    this.TramitesService.getCategoriaTramites()
      .subscribe( catTramite => this.catTramites.push(...catTramite)
      );

      
  }

  categoriaTramite(event){
    this.categoriaT = event.detail.value;
    console.log(this.categoriaT);
  }

  urlImagen(nombreTramite: String, ImagenTramite: String) {
    nombreTramite = nombreTramite.replace(/ /g, "-");
    nombreTramite = nombreTramite.toLowerCase();
    nombreTramite = nombreTramite.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return urlImgTramites + nombreTramite + "/" + ImagenTramite;
  }

}