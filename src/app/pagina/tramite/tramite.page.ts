import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/Interfaces/tramites';
import { TramitesService } from '../../servicios/tramites.service';
import { environment } from 'src/environments/environment';

const urlImgTramites = environment.imgTramites

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.page.html',
  styleUrls: ['./tramite.page.scss'],
})
export class TramitePage implements OnInit {
  public id: any;
  public tramite: Result[] = [];
  
  constructor( 
    private activatedRoute: ActivatedRoute,
    private TramitesService: TramitesService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("idtramite");

    this.TramitesService.getTramite(this.id)
      .subscribe(results => this.tramite.push(...results)
      );
  }

  urlImagen(nombreTramite: String, ImagenTramite: String) {
    nombreTramite = nombreTramite.replace(/ /g, "-");
    nombreTramite = nombreTramite.toLowerCase();
    nombreTramite = nombreTramite.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return urlImgTramites + nombreTramite + "/" + ImagenTramite;
  
  }

  limpiarhtlm(cuerpoNoticia:String){
    //console.log('H1'+cuerpoNoticia);
    cuerpoNoticia = '<iframe width="560" height="315" src="https://www.youtube.com/embed/CoV0U_6YkYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>';
    //cuerpoNoticia=cuerpoNoticia.replace(/[.*+\-?^${}()|[\]\\]/g,'\\$&');
    
    return cuerpoNoticia;
                                           
}

}
