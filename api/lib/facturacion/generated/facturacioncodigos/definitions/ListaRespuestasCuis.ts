import type { MensajesList } from "./MensajesList";

/**
 * listaRespuestasCuis
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface ListaRespuestasCuis {
    /** xs:string */
    codigo?: string;
    /** xs:int */
    codigoPuntoVenta?: string;
    /** xs:int */
    codigoSucursal?: string;
    /** xs:dateTime */
    fechaVigencia?: string;
    /** mensajeServicioList[] */
    mensajeServicioList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
