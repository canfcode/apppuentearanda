export interface CursosResponse {
    status:  number;
    total:   number;
    results: Result[];
}

export interface Result {
    id_curso:                  string;
    id_categoriacurso_curso:   string;
    nombre_curso:              string;
    contenido_curso:           string;
    descripcion_curso:         string;
    imagen_curso:              string;
    visitas_curso:             string;
    fecha_creacion_curso:      Date;
    fecha_actualizacion_curso: null;
}

export interface Result {
    id_curso:                           string;
    id_categoriacurso_curso:            string;
    nombre_curso:                       string;
    contenido_curso:                    string;
    descripcion_curso:                  string;
    imagen_curso:                       string;
    visitas_curso:                      string;
    fecha_creacion_curso:               Date;
    fecha_actualizacion_curso:          null;
    id_categoriacurso:                  string;
    nombre_categoriacurso:              string;
    descripcion_categoriacurso:         string;
    icono_categoriacurso:               string;
    fecha_creacion_categoriacurso:      Date;
    fecha_actualizacion_categoriacurso: null;
}