import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/Interfaces/denuncias';
import { DenunciasService } from 'src/app/servicios/denuncias.service';
import { environment } from 'src/environments/environment';

const urlImgDenuncias = environment.imgDenuncia

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.page.html',
  styleUrls: ['./denuncias.page.scss'],
})
export class DenunciasPage implements OnInit {

  public denuncias: Result[] = [];

  public catDenuncias: Result[] = [];

  public mensaje: String;

  public categoriaD: string = '';

  constructor(private DenunciasService: DenunciasService) { }

  ngOnInit() {
    this.DenunciasService.getDenuncias()
      .subscribe( denuncias => this.denuncias.push(...denuncias)    
      
      );

    this.DenunciasService.getCategoriaDenuncias()
      .subscribe( catDenuncia => this.catDenuncias.push(...catDenuncia)
      );

      
  }

  categoriaDenuncia(event){
    this.categoriaD = event.detail.value;
    console.log(this.categoriaD);
  }

  urlImagen(nombreDenuncia: String, ImagenDenuncia: String) {
    nombreDenuncia = nombreDenuncia.replace(/ /g, "-");
    nombreDenuncia = nombreDenuncia.toLowerCase();
    nombreDenuncia = nombreDenuncia.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return urlImgDenuncias + nombreDenuncia + "/" + ImagenDenuncia;
  }

}