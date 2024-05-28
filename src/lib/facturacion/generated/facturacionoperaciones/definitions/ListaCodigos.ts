
/**
 * listaCodigos
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface ListaCodigos {
    /** xs:int */
    codigoEvento?: string;
    /** xs:long */
    codigoRecepcionEventoSignificativo?: string;
    /** xs:string */
    descripcion?: string;
    /** xs:string */
    fechaFin?: string;
    /** xs:string */
    fechaInicio?: string;
}
