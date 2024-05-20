export const environment = {
  production: false,
  apiKey: 'c5LTA6WPbMwHhEabYu77nN9cn4VcMj',
  apiUrl: 'https://apiaranda.puentearandaapp.com/',
  imgUrlNegocios: 'https://archivos.puentearandaapp.com/views/img/negocios/',                   
  negocios_categoria_barrio: 'https://apiaranda.puentearandaapp.com/relations?rel=negocios,categorianegocios,barrios&type=negocio,categorianegocio,barrio&select=id_negocio,url_negocio,nombre_categorianegocio,nombre_negocio,correo_negocio,logo_negocio,telefono_negocio,dirmapa_negocio,direccion_negocio,descripcion_negocio,nombre_negocio,nombre_barrio,redes_negocio,banner_negocio,servicios_negocio&orderBy=id_negocio&orderMode=desc',
  negocioById: 'https://apiaranda.puentearandaapp.com/negocios?&linkTo=id_negocio&equalTo=',
  banner: 'https://archivos.puentearandaapp.com/views/img/negocios/',
  noticias: 'https://apiaranda.puentearandaapp.com/relations?rel=noticias,categorianoticias&type=noticia,categorianoticia',
  imgNoticias: 'https://archivos.puentearandaapp.com/views/img/noticias/',
  /* agregado cesar imagenes categorias */
  imgCategorian: 'https://archivos.puentearandaapp.com/views/img/noticias/',
  tramites: 'https://apiaranda.puentearandaapp.com/relations?rel=tramites,categoriatramites&type=tramite,categoriatramite',
  categoriaTramites: 'https://apiaranda.puentearandaapp.com/categoriatramites?',
  tramiteById: 'https://apiaranda.puentearandaapp.com/relations?rel=tramites,categoriatramites&type=tramite,categoriatramite&linkTo=id_tramite&equalTo=',
  imgTramites: 'https://archivos.puentearandaapp.com/views/img/tramites/',
  /* agregado cesar prueba */
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
  redesNegocio: 'https://apiaranda.puentearandaapp.com/negocios?&linkTo=id_categorianegocio_negocio&equalTo=',
  //enviaSugerencia: 'https://apiaranda.puentearandaapp.com/sugerencias?token=no&table=sugerencias&suffix=sugerencia&except=detalle_sugerencia'
  enviaSugerencia: 'http://apiaranda.com/mensajes?token=no&table=mensajes&suffix=mensaje&except=contenido_mensaje'
  

};
