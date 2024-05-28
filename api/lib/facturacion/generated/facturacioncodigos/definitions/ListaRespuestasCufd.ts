import type { MensajesList } from "./MensajesList";

/**
 * listaRespuestasCufd
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface ListaRespuestasCufd {
    /** xs:string */
    codigo?: string;
    /** xs:string */
    codigoControl?: string;
    /** xs:int */
    codigoPuntoVenta?: string;
    /** xs:int */
    codigoSucursal?: string;
    /** xs:string */
    cuis?: string;
    /** xs:string */
    direccion?: string;
    /** xs:dateTime */
    fechaVigencia?: string;
    /** mensajeServicioList[] */
    mensajeServicioList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
