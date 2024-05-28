import type { ListaCodigos } from "./ListaCodigos";
import type { MensajesList } from "./MensajesList";

/**
 * RespuestaListaEventos
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaListaEventos {
    /** xs:long */
    codigoRecepcionEventoSignificativo?: string;
    /** listaCodigos[] */
    listaCodigos?: Array<ListaCodigos>;
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
