export interface CategoriaTramitesResponse {
    status:  number;
    total:   number;
    catTramite: catTramite[];
}

export interface catTramite {
    id_categoriatramite:                  string;
    nombre_categoriatramite:              string;
    descripcion_categoriatramite:         string;
    fecha_creacion_categoriatramite:      Date;
    fecha_actualizacion_categoriatramite: null;
}
