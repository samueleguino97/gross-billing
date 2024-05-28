
/**
 * SolicitudServicioRecepcionFactura
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface SolicitudServicioRecepcionFactura {
    /** xs:int */
    codigoAmbiente?: string;
    /** xs:int */
    codigoDocumentoSector?: string;
    /** xs:int */
    codigoEmision?: string;
    /** xs:int */
    codigoModalidad?: string;
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
    /** xs:int */
    tipoFacturaDocumento?: string;
    /** xs:base64Binary */
    archivo?: string;
    /** xs:string */
    fechaEnvio?: string;
    /** xs:string */
    hashArchivo?: string;
}
