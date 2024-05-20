export interface CategoriaNoticiasResponse {
    status:  number;
    total:   number;
    catNoticias: catNoticia[];
}

export interface catNoticia {
    id_categorianoticia:                  string;
    nombre_categorianoticia:              string;
    descripcion_categorianoticia:         string;
    icono_categorianoticia:               string;
    fecha_creacion_categorianoticia:      Date;
    fecha_actualizacion_categorianoticia: null;
}
