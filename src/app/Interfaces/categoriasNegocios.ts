export interface CategoriaNegocios {
    status:  number;
    total:   number;
    results: Result[];
}

export interface Result {
    id_categorianegocio:                  string;
    nombre_categorianegocio:              string;
    icono_categorianegocio:               string;
    visitas_categorianegocio:             string;
    fecha_creacion_categorianegocio:      Date;
    fecha_actualizacion_categorianegocio: null;
}