import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { FiltroNoticiasPipe } from './filtro-noticias.pipe';
import { SafehtmlPipe } from './safehtml.pipe';



@NgModule({
  declarations: [
    FiltroPipe,
    FiltroNoticiasPipe,
    SafehtmlPipe,
  ],
  exports: [
    FiltroPipe,
    SafehtmlPipe
  ]
})
export class PipesModule { }
