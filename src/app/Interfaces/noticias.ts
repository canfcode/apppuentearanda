export interface NoticiasResponse {
    status:  number;
    total:   number;
    results: Result[];
}

export interface Result {
    id_noticia:                           string;
    id_categorianoticia_noticia:          string;
    titulo_noticia:                       string;
    cuerpo_noticia:                       string;
    resumen_noticia:                      string;
    imagen_noticia:                       string;
    visitas_noticia:                      string;
    fecha_creacion_noticia:               Date;
    fecha_actualizacion_noticia:          null;
    id_categorianoticia:                  string;
    nombre_categorianoticia:              string;
    descripcion_categorianoticia:         string;
    icono_categorianoticia:               string;
    fecha_creacion_categorianoticia:      Date;
    fecha_actualizacion_categorianoticia: null;
}

export interface Result {
    id_categorianoticia:                  string;
    nombre_categorianoticia:              string;
    descripcion_categorianoticia:         string;
    icono_categorianoticia:               string;
    fecha_creacion_categorianoticia:      Date;
    fecha_actualizacion_categorianoticia: null;
}