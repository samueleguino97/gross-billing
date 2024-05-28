import type { MensajesList1 } from "./MensajesList1";

/**
 * return
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface Return {
    /** mensajesList[] */
    mensajesList?: Array<MensajesList1>;
    /** xs:boolean */
    transaccion?: string;
}
