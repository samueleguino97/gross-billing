import type { MensajesList } from "./MensajesList";
import type { ListaActividades } from "./ListaActividades";

/**
 * RespuestaListaActividades
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaListaActividades {
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
    /** listaActividades[] */
    listaActividades?: Array<ListaActividades>;
}
