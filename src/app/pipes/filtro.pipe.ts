import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arregloNegocios: any[],
            texto: string,
            columna: string
            ): any[] {
    if (texto === '') {
      return arregloNegocios;
    }

    if (!arregloNegocios) {
      return arregloNegocios;
    }

    texto = texto.toLowerCase();

    return arregloNegocios.filter(
      item => item[columna].toLowerCase().includes(texto)
    );

  }

}
