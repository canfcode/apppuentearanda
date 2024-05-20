export interface NegociosResponse {
    status:  number;
    total:   number;
    results: Result[];
}

export interface Result {
    id_negocio:                  string;
    id_barrio_negocio:           string;
    id_categorianegocio_negocio: string;
    nombre_negocio:              string;
    url_negocio:                 string;
    direccion_negocio:           string;
    dirmapa_negocio:             string;
    telefono_negocio:            string;
    descripcion_negocio:         string;
    logo_negocio:                string;
    banner_negocio:              string;
    redes_negocio:               string;
    paginaweb_negocio:               string;
    face_negocio:                string;
    insta_negocio:               string;
    servicios_negocio:           string;
    correo_negocio:              string;
    palabrasclave_negocio:       string;
    fecha_creacion_negocio:      Date;
    fecha_actualizacion_negocio: null;
}

export interface Result {
    id_categorianegocio:                  string;
    nombre_categorianegocio:              string;
    icono_categorianegocio:               string;
    visitas_categorianegocio:             string;
    fecha_creacion_categorianegocio:      Date;
    fecha_actualizacion_categorianegocio: null;
}