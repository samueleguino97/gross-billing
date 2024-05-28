import type { MensajesList } from "./MensajesList";

/**
 * RespuestaCufd
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaCufd {
    /** xs:string */
    codigo?: string;
    /** xs:string */
    codigoControl?: string;
    /** xs:string */
    direccion?: string;
    /** xs:dateTime */
    fechaVigencia?: string;
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
