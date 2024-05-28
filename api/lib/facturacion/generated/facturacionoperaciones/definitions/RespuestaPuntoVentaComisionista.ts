import type { MensajesList } from "./MensajesList";

/**
 * RespuestaPuntoVentaComisionista
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaPuntoVentaComisionista {
    /** xs:int */
    codigoPuntoVenta?: string;
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
