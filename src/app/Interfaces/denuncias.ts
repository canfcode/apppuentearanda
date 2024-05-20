export interface DenunciasResponse {
    status:  number;
    total:   number;
    results: Result[];
}

export interface Result {
    id_denuncia:                           string;
    id_categoriadenuncia_denuncia:          string;
    nombre_denuncia:                       string;
    contenido_denuncia:                       string;
    descripcion_denuncia:                      string;
    imagen_denuncia:                       string;
    visitas_denuncia:                      string;
    fecha_creacion_denuncia:               Date;
    fecha_actualizacion_denuncia:          null;
    id_categoriadenuncia:                  string;
    nombre_categoriadenuncia:              string;
    descripcion_categoriadenuncia:         string;
    fecha_creacion_categoriadenuncia:      Date;
    fecha_actualizacion_categoriadenuncia: null;
}

export interface Result {
    id_categoriadenuncia:                  string;
    nombre_categoriadenuncia:              string;
    descripcion_categoriadenuncia:         string;
    fecha_creacion_categoriadenuncia:      Date;
    fecha_actualizacion_categoriadenuncia: null;
}