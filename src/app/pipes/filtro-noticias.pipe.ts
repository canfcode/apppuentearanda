import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroNoticias'
})
export class FiltroNoticiasPipe implements PipeTransform {

  transform(arregloNoticias: any[], categoria:number  ): any[] {
    if (categoria === 0){
      return arregloNoticias;
    }

    if (!arregloNoticias){
      return arregloNoticias;
    }    
    
    return arregloNoticias.filter(
      item => item.id_categorianoticia_noticia.includes(categoria)      
    );
  }

}
