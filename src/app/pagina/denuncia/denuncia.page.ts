import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/Interfaces/denuncias';
import { environment } from 'src/environments/environment';
import { DenunciasService } from 'src/app/servicios/denuncias.service';

const urlImgDenuncias = environment.imgDenuncia

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
})
export class DenunciaPage implements OnInit {

  public id: any;
  public denuncia: Result[] = [];
  
  constructor( 
    private activatedRoute: ActivatedRoute,
    private DenunciasService: DenunciasService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("iddenuncia");

    this.DenunciasService.getDenuncia(this.id)
      .subscribe(results => this.denuncia.push(...results)
      );
  }

  urlImagen(nombreTramite: String, ImagenTramite: String) {
    nombreTramite = nombreTramite.replace(/ /g, "-");
    nombreTramite = nombreTramite.toLowerCase();
    nombreTramite = nombreTramite.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return urlImgDenuncias + nombreTramite + "/" + ImagenTramite;
  
  }


  limpiarhtlm(cuerpoNoticia:String){
    //console.log('H1'+cuerpoNoticia);
    cuerpoNoticia = '<iframe width="560" height="315" src="https://www.youtube.com/embed/CoV0U_6YkYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>';
    //cuerpoNoticia=cuerpoNoticia.replace(/[.*+\-?^${}()|[\]\\]/g,'\\$&');
    
    return cuerpoNoticia;
                                           
}

}
