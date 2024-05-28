import type { MensajesList1 } from "./MensajesList1";

/**
 * RespuestaServicioFacturacion
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaServicioFacturacion1 {
    /** xs:base64Binary */
    archivo?: string;
    /** mensajesList[] */
    mensajesList?: Array<MensajesList1>;
    /** xs:boolean */
    transaccion?: string;
}
