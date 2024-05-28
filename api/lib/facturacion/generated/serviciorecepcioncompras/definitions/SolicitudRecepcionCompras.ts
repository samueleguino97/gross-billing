
/**
 * SolicitudRecepcionCompras
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface SolicitudRecepcionCompras {
    /** xs:int */
    codigoAmbiente?: string;
    /** xs:int */
    codigoPuntoVenta?: string;
    /** xs:string */
    codigoSistema?: string;
    /** xs:int */
    codigoSucursal?: string;
    /** xs:string */
    cufd?: string;
    /** xs:string */
    cuis?: string;
    /** xs:long */
    nit?: string;
    /** xs:base64Binary */
    archivo?: string;
    /** xs:int */
    cantidadFacturas?: string;
    /** xs:dateTime */
    fechaEnvio?: string;
    /** xs:int */
    gestion?: string;
    /** xs:string */
    hashArchivo?: string;
    /** xs:int */
    periodo?: string;
}
