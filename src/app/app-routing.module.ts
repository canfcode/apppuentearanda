import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pagina/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'directorio',
    loadChildren: () => import('./pagina/directorio/directorio.module').then( m => m.DirectorioPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pagina/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'formacion',
    loadChildren: () => import('./pagina/formacion/formacion.module').then( m => m.FormacionPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pagina/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },

  {
    path: 'negocios',
    loadChildren: () => import('./pagina/negocios/negocios.module').then( m => m.NegociosPageModule)
  },
  {
    path: 'negocio/:idnegocio',
    loadChildren: () => import('./pagina/negocio/negocio.module').then( m => m.NegocioPageModule)
  },
  {
    path: 'cursoapp/:idcurso',
    loadChildren: () => import('./pagina/cursoapp/cursoapp.module').then( m => m.CursoappPageModule)
  },
  
  {
    path: 'noticia/:idnoticia',
    loadChildren: () => import('./pagina/noticia/noticia.module').then( m => m.NoticiaPageModule)
  },
  {
    path: 'sugerencias',
    loadChildren: () => import('./pagina/sugerencias/sugerencias.module').then( m => m.SugerenciasPageModule)
  },
  {
    path: 'tramites',
    loadChildren: () => import('./pagina/tramites/tramites.module').then( m => m.TramitesPageModule)
  },
  {
    path: 'denuncias',
    loadChildren: () => import('./pagina/denuncias/denuncias.module').then( m => m.DenunciasPageModule)
  },
  {
    path: 'denuncia',
    loadChildren: () => import('./pagina/denuncia/denuncia.module').then( m => m.DenunciaPageModule)
  },
 /* {
    path: 'tramite',
    loadChildren: () => import('./pagina/tramite/tramite.module').then( m => m.TramitePageModule)
  }*/

  {
    path: 'tramite/:idtramite',
    loadChildren: () => import('./pagina/tramite/tramite.module').then( m => m.TramitePageModule)
  },
  {
    path: 'denuncia/:iddenuncia',
    loadChildren: () => import('./pagina/denuncia/denuncia.module').then( m => m.DenunciaPageModule)
  }







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
