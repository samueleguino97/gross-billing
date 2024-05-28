import type { MensajesList } from "./MensajesList";
import type { ListaCodigos } from "./ListaCodigos";

/**
 * RespuestaListaParametricas
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaListaParametricas {
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
    /** listaCodigos[] */
    listaCodigos?: Array<ListaCodigos>;
}
