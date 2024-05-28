import type { MensajesList } from "./MensajesList";

/**
 * RespuestaFechaHora
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaFechaHora {
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
    /** xs:string */
    fechaHora?: string;
}
