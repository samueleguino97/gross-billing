
/**
 * SolicitudNotificaRevocado
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface SolicitudNotificaRevocado {
    /** xs:string */
    certificado?: string;
    /** xs:int */
    codigoAmbiente?: string;
    /** xs:string */
    codigoSistema?: string;
    /** xs:int */
    codigoSucursal?: string;
    /** xs:string */
    cuis?: string;
    /** xs:dateTime */
    fechaRevocacion?: string;
    /** xs:long */
    nit?: string;
    /** xs:string */
    razonRevocacion?: string;
}
