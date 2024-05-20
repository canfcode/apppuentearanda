import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Result } from '../../Interfaces/cursos';
import { FormacionService } from '../../servicios/formacion.service';

const urlImagen = environment.imgUrlCursos;

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.page.html',
  styleUrls: ['./formacion.page.scss'],
})

export class FormacionPage implements OnInit {

  public cursos: Result[] = [];

  constructor(private FormacionService:FormacionService) { }

  ngOnInit() {
    this.FormacionService.getCursos()
    .subscribe(results => this.cursos.push(...results) )
  }

  urlImagen(nombreCurso, logo_curso: String) {

    
    var carpetaCurso: String = "";
    carpetaCurso = nombreCurso.replace(/ /g, "-");
    carpetaCurso = carpetaCurso.toLowerCase();
    carpetaCurso = carpetaCurso.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    return urlImagen + carpetaCurso + "/" + logo_curso;
  }

}
