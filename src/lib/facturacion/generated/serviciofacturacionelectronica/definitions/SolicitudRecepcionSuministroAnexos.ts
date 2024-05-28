import type { AnexosList } from "./AnexosList";

/**
 * SolicitudRecepcionSuministroAnexos
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface SolicitudRecepcionSuministroAnexos {
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
    /** anexosList[] */
    anexosList?: Array<AnexosList>;
    /** xs:long */
    giftCard?: string;
}
