import type { MensajesList } from "./MensajesList";

/**
 * RespuestaComunicacion
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaComunicacion {
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
