import type { MensajesList } from "./MensajesList";

/**
 * RespuestaCierreSistemas
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaCierreSistemas {
    /** xs:string */
    codigoSistema?: string;
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
