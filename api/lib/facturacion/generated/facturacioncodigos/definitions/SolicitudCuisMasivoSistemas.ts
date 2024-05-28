import type { DatosSolicitud } from "./DatosSolicitud";

/**
 * SolicitudCuisMasivoSistemas
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface SolicitudCuisMasivoSistemas {
    /** xs:int */
    codigoAmbiente?: string;
    /** xs:int */
    codigoModalidad?: string;
    /** xs:string */
    codigoSistema?: string;
    /** datosSolicitud[] */
    datosSolicitud?: Array<DatosSolicitud>;
    /** xs:long */
    nit?: string;
}
