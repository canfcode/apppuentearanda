// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiKey: 'c5LTA6WPbMwHhEabYu77nN9cn4VcMj',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTgwMDcyMDIsImV4cCI6MTY1ODA5MzYwMiwiZGF0YSI6eyJpZCI6IjIiLCJlbWFpbCI6ImluZm9AcHVlbnRlYXJhbmRhYXBwLmNvbSJ9fQ.BOsQzPsUPo--TONTv86KCmdKabi20YxXIjEkMolwyds',
  apiUrl: 'https://apiaranda.puentearandaapp.com/',
  imgUrlNegocios: 'https://archivos.puentearandaapp.com/views/img/negocios/',                   
  negocios_categoria_barrio: 'https://apiaranda.puentearandaapp.com/relations?rel=negocios,categorianegocios,barrios&type=negocio,categorianegocio,barrio&select=id_negocio,url_negocio,nombre_categorianegocio,nombre_negocio,correo_negocio,logo_negocio,telefono_negocio,dirmapa_negocio,direccion_negocio,descripcion_negocio,nombre_negocio,nombre_barrio,redes_negocio,banner_negocio,palabrasclave_negocio,servicios_negocio&orderBy=id_negocio&orderMode=desc',
  negocioById: 'https://apiaranda.puentearandaapp.com/negocios?&linkTo=id_negocio&equalTo=',
  banner: 'https://archivos.puentearandaapp.com/views/img/negocios/',
  noticias: 'https://apiaranda.puentearandaapp.com/relations?rel=noticias,categorianoticias&type=noticia,categorianoticia',
  imgNoticias: 'https://archivos.puentearandaapp.com/views/img/noticias/',
  /* agregado cesar prueba */
  imgCategorian: 'https://archivos.puentearandaapp.com/views/img/categorias/',
  tramites: 'https://apiaranda.puentearandaapp.com/relations?rel=tramites,categoriatramites&type=tramite,categoriatramite',
  tramiteById: 'https://apiaranda.puentearandaapp.com/relations?rel=tramites,categoriatramites&type=tramite,categoriatramite&linkTo=id_tramite&equalTo=',
  categoriaTramites: 'https://apiaranda.puentearandaapp.com/categoriatramites?',
  imgTramites: 'https://archivos.puentearandaapp.com/views/img/tramites/',
  /*termina */
  
  /* denuncias */
  denuncias: 'https://apiaranda.puentearandaapp.com/relations?rel=denuncias,categoriadenuncias&type=denuncia,categoriadenuncia',
  denunciaById: 'https://apiaranda.puentearandaapp.com/relations?rel=denuncias,categoriadenuncias&type=denuncia,categoriadenuncia&linkTo=id_denuncia&equalTo=',
  categoriaDenuncias: 'https://apiaranda.puentearandaapp.com/categoriadenuncias?',
  imgDenuncia: 'https://archivos.puentearandaapp.com/views/img/denuncias/',
  /* termina */
  categoriaNoticias: 'https://apiaranda.puentearandaapp.com/categorianoticias?',
  noticiaById: 'https://apiaranda.puentearandaapp.com/relations?rel=noticias,categorianoticias&type=noticia,categorianoticia&linkTo=id_noticia&equalTo=',
  categoriaNegocios: 'https://apiaranda.puentearandaapp.com/categorianegocios?',
  negociosByCategoria: 'https://apiaranda.puentearandaapp.com/negocios?&linkTo=id_categorianegocio_negocio&equalTo=',
  redesNegocio: 'https://apiaranda.puentearandaapp.com/negocios?&select=redes_negocio&equalTo=',
  
  formacion: 'https://apiaranda.puentearandaapp.com/relations?rel=cursos,categoriacursos&type=curso,categoriacurso',
  imgUrlCursos: 'https://archivos.puentearandaapp.com/views/img/cursos/',
  cursoById: 'https://apiaranda.puentearandaapp.com/relations?rel=cursos,categoriacursos&type=curso,categoriacurso&linkTo=id_curso&equalTo=',
  /* para enviar sugerencia */
  //enviaSugerencia: 'https://apiaranda.puentearandaapp.com/mensajes?token=no&table=mensajes&suffix=mensaje&except=contenido_mensaje',
  enviaSugerencia: 'http://apiaranda.com/mensajes?token=no&table=mensajes&suffix=mensaje&except=contenido_mensaje',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
