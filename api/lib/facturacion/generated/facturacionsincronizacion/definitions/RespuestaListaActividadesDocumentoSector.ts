import type { MensajesList } from "./MensajesList";
import type { ListaActividadesDocumentoSector } from "./ListaActividadesDocumentoSector";

/**
 * RespuestaListaActividadesDocumentoSector
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface RespuestaListaActividadesDocumentoSector {
    /** mensajesList[] */
    mensajesList?: Array<MensajesList>;
    /** xs:boolean */
    transaccion?: string;
    /** listaActividadesDocumentoSector[] */
    listaActividadesDocumentoSector?: Array<ListaActividadesDocumentoSector>;
}
