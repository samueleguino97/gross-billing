
/**
 * SolicitudVerificarNit
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface SolicitudVerificarNit {
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
    /** xs:long */
    nit?: string;
    /** xs:long */
    nitParaVerificacion?: string;
}
