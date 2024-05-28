import type { DatosSolicitud1 } from "./DatosSolicitud1";

/**
 * SolicitudCufdMasivo
 * @targetNSAlias `tns`
 * @targetNamespace `https://siat.impuestos.gob.bo/`
 */
export interface SolicitudCufdMasivo {
    /** xs:int */
    codigoAmbiente?: string;
    /** xs:int */
    codigoModalidad?: string;
    /** xs:string */
    codigoSistema?: string;
    /** datosSolicitud[] */
    datosSolicitud?: Array<DatosSolicitud1>;
    /** xs:long */
    nit?: string;
}
