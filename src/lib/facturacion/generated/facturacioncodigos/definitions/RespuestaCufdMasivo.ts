import type { ListaRespuestasCufd } from "./ListaRespuestasCufd";
import type { MensajesList } from "./MensajesList";

/**
 * RespuestaCufdMasivo
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaCufdMasivo {
    /** listaRespuestasCufd[] */
    listaRespuestasCufd?: Array<ListaRespuestasCufd>;
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
}
