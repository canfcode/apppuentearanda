import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/Interfaces/noticias';
import { NoticiasService } from '../../servicios/noticias.service';
import { environment } from '../../../environments/environment';
import { catNoticia } from '../../Interfaces/categoriasNoticias';
import { Observable, Subject } from 'rxjs';

const urlImgNoticias = environment.imgNoticias;

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})

export class NoticiasPage implements OnInit {

  public noticias: Result[] = [];

  public catNoticias: Result[] = [];

  public mensaje: String;

  public categoriaN: string = '';

  constructor(private NoticiasService: NoticiasService) { }

  ngOnInit() {
    this.NoticiasService.getNoticias()
      .subscribe(noticias => {
        this.noticias.push(...noticias);
        this.ordenarNoticias(); // Ordenar las noticias después de recibir los datos
      });

    this.NoticiasService.getCategoriaNoticias()
      .subscribe(catNoticia => this.catNoticias.push(...catNoticia));
  }

  categoriaNoticia(event) {
    this.categoriaN = event.detail.value;
    console.log(this.categoriaN);
  }

  urlImagen(nombreNoticia: String, ImagenNoticia: String) {
    nombreNoticia = nombreNoticia.replace(/ /g, "-");
    nombreNoticia = nombreNoticia.toLowerCase();
    nombreNoticia = nombreNoticia.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return urlImgNoticias + nombreNoticia + "/" + ImagenNoticia;
  }

  ordenarNoticias() {
    this.noticias.sort((a, b) => {
      const fechaA = new Date(a.fecha_actualizacion_noticia).getTime(); // Asumiendo que la propiedad fecha es un string en formato de fecha válido
      const fechaB = new Date(b.fecha_creacion_noticia).getTime();
      return fechaA - fechaB;
    });
  }

}