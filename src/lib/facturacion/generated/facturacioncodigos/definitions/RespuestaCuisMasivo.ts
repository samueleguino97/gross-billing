import type { ListaRespuestasCuis } from "./ListaRespuestasCuis";
import type { MensajesList } from "./MensajesList";

/**
 * RespuestaCuisMasivo
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaCuisMasivo {
    /** listaRespuestasCuis[] */
    listaRespuestasCuis?: Array<ListaRespuestasCuis>;
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
