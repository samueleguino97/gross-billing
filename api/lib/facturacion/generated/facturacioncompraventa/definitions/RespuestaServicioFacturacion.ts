import type { MensajesList } from "./MensajesList";

/**
 * RespuestaServicioFacturacion
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaServicioFacturacion {
    /** xs:string */
    codigoDescripcion?: string;
    /** xs:int */
    codigoEstado?: string;
    /** xs:string */
    codigoRecepcion?: string;
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
