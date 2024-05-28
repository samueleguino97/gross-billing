
/**
 * SolicitudConsultaEvento
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface SolicitudConsultaEvento {
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
    /** xs:dateTime */
    fechaEvento?: string;
    /** xs:long */
    nit?: string;
}
