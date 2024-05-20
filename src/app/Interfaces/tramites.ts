export interface TramitesResponse {
    status:  number;
    total:   number;
    results: Result[];
}

export interface Result {
    id_tramite:                           string;
    id_categoriatramite_tramite:          string;
    nombre_tramite:                       string;
    contenido_tramite:                       string;
    descripcion_tramite:                      string;
    imagen_tramite:                       string;
    visitas_tramite:                      string;
    fecha_creacion_tramite:               Date;
    fecha_actualizacion_tramite:          null;
    id_categoriatramite:                  string;
    nombre_categoriatramite:              string;
    descripcion_categoriatramite:         string;
    fecha_creacion_categoriatramite:      Date;
    fecha_actualizacion_categoriatramite: null;
}

export interface Result {
    id_categoriatramite:                  string;
    nombre_categoriatramite:              string;
    descripcion_categoriatramite:         string;
    fecha_creacion_categoriatramite:      Date;
    fecha_actualizacion_categoriatramite: null;
}