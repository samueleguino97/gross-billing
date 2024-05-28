import type { MensajesList } from "./MensajesList";

/**
 * RespuestaCierrePuntoVenta
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaCierrePuntoVenta {
    /** xs:int */
    codigoPuntoVenta?: string;
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
