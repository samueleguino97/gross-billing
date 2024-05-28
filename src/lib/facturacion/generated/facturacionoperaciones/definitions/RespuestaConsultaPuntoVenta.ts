import type { ListaPuntosVentas } from "./ListaPuntosVentas";
import type { MensajesList } from "./MensajesList";

/**
 * RespuestaConsultaPuntoVenta
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaConsultaPuntoVenta {
    /** listaPuntosVentas[] */
    listaPuntosVentas?: Array<ListaPuntosVentas>;
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
