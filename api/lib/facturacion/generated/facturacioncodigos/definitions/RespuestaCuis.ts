import type { MensajesList } from "./MensajesList";

/**
 * RespuestaCuis
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaCuis {
    /** xs:string */
    codigo?: string;
    /** xs:dateTime */
    fechaVigencia?: string;
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
