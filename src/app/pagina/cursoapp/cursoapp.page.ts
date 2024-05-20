import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/Interfaces/cursos';
import { environment } from 'src/environments/environment';
import { FormacionService } from '../../servicios/formacion.service';

const urlImagen = environment.imgUrlCursos;

@Component({
  selector: 'app-cursoapp',
  templateUrl: './cursoapp.page.html',
  styleUrls: ['./cursoapp.page.scss'],
})
export class CursoappPage implements OnInit {

  public id: any;
  public curso: Result[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private FormacionService: FormacionService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("idcurso");
    
    this.FormacionService.getCurso(this.id)
      .subscribe(results => this.curso.push(...results)
      );
  }

  urlImagen(nombreCurso, logo_curso: String) {

    
    var carpetaCurso: String = "";
    carpetaCurso = nombreCurso.replace(/ /g, "-");
    carpetaCurso = carpetaCurso.toLowerCase();
    carpetaCurso = carpetaCurso.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    return urlImagen + carpetaCurso + "/" + logo_curso;
  }

}
