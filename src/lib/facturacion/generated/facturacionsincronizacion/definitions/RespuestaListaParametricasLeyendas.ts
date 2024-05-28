import type { MensajesList } from "./MensajesList";
import type { ListaLeyendas } from "./ListaLeyendas";

/**
 * RespuestaListaParametricasLeyendas
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaListaParametricasLeyendas {
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
    /** listaLeyendas[] */
    listaLeyendas?: Array<ListaLeyendas>;
}
