import type { MensajesList } from "./MensajesList";
import type { ListaCodigos1 } from "./ListaCodigos1";

/**
 * RespuestaListaProductos
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaListaProductos {
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
    /** listaCodigos[] */
    listaCodigos?: Array<ListaCodigos1>;
}
