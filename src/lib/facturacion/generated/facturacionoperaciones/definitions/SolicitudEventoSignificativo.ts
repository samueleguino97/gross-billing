
/**
 * SolicitudEventoSignificativo
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface SolicitudEventoSignificativo {
    /** xs:int */
    codigoAmbiente?: string;
    /** xs:int */
    codigoMotivoEvento?: string;
    /** xs:int */
    codigoPuntoVenta?: string;
    /** xs:string */
    codigoSistema?: string;
    /** xs:int */
    codigoSucursal?: string;
    /** xs:string */
    cufd?: string;
    /** xs:string */
    cufdEvento?: string;
    /** xs:string */
    cuis?: string;
    /** xs:string */
    descripcion?: string;
    /** xs:dateTime */
    fechaHoraFinEvento?: string;
    /** xs:dateTime */
    fechaHoraInicioEvento?: string;
    /** xs:long */
    nit?: string;
}
