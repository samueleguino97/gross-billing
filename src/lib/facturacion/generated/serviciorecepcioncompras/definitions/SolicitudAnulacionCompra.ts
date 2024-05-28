
/**
 * SolicitudAnulacionCompra
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface SolicitudAnulacionCompra {
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
    /** xs:string */
    codAutorizacion?: string;
    /** xs:long */
    nitProveedor?: string;
    /** xs:string */
    nroDuiDim?: string;
    /** xs:long */
    nroFactura?: string;
}
