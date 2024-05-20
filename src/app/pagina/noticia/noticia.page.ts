import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/Interfaces/noticias';
import { environment } from 'src/environments/environment';
import { NoticiasService } from '../../servicios/noticias.service';

const urlImgNoticias = environment.imgNoticias

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  public id: any;
  public noticia: Result[] = [];
  
  constructor( 
    private activatedRoute: ActivatedRoute,
    private NoticiasService: NoticiasService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("idnoticia");

    this.NoticiasService.getNoticia(this.id)
      .subscribe(results => this.noticia.push(...results)
      );
  }

  urlImagen(nombreNoticia: String, ImagenNoticia: String) {
    nombreNoticia = nombreNoticia.replace(/ /g, "-");
    nombreNoticia = nombreNoticia.toLowerCase();
    nombreNoticia = nombreNoticia.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return urlImgNoticias + nombreNoticia + "/" + ImagenNoticia;
  }

  limpiarhtlm(cuerpoNoticia:String){
    //console.log('H1'+cuerpoNoticia);
    cuerpoNoticia = '<iframe width="560" height="315" src="https://www.youtube.com/embed/CoV0U_6YkYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>';
    //cuerpoNoticia=cuerpoNoticia.replace(/[.*+\-?^${}()|[\]\\]/g,'\\$&');
    
    return cuerpoNoticia;
                                           
}

}
