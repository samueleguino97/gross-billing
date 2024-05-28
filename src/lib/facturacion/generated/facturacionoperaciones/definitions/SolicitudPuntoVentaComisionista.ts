
/**
 * SolicitudPuntoVentaComisionista
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface SolicitudPuntoVentaComisionista {
    /** xs:int */
    codigoAmbiente?: string;
    /** xs:int */
    codigoModalidad?: string;
    /** xs:string */
    codigoSistema?: string;
    /** xs:int */
    codigoSucursal?: string;
    /** xs:string */
    cuis?: string;
    /** xs:string */
    descripcion?: string;
    /** xs:dateTime */
    fechaFin?: string;
    /** xs:dateTime */
    fechaInicio?: string;
    /** xs:long */
    nit?: string;
    /** xs:long */
    nitComisionista?: string;
    /** xs:string */
    nombrePuntoVenta?: string;
    /** xs:string */
    numeroContrato?: string;
}
