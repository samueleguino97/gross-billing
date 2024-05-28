import type { MensajesList } from "./MensajesList";

/**
 * RespuestaRegistroPuntoVenta
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaRegistroPuntoVenta {
    /** xs:int */
    codigoPuntoVenta?: string;
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
