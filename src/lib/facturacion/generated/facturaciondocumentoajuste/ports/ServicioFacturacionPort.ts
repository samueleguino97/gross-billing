import type { TnsanulacionDocumentoAjuste } from "../definitions/TnsanulacionDocumentoAjuste";
import type { TnsanulacionDocumentoAjusteResponse } from "../definitions/TnsanulacionDocumentoAjusteResponse";
import type { TnsreversionAnulacionDocumentoAjuste } from "../definitions/TnsreversionAnulacionDocumentoAjuste";
import type { TnsreversionAnulacionDocumentoAjusteResponse } from "../definitions/TnsreversionAnulacionDocumentoAjusteResponse";
import type { TnsverificarComunicacion } from "../definitions/TnsverificarComunicacion";
import type { TnsverificarComunicacionResponse } from "../definitions/TnsverificarComunicacionResponse";
import type { TnsrecepcionDocumentoAjuste } from "../definitions/TnsrecepcionDocumentoAjuste";
import type { TnsrecepcionDocumentoAjusteResponse } from "../definitions/TnsrecepcionDocumentoAjusteResponse";
import type { TnsverificacionEstadoDocumentoAjuste } from "../definitions/TnsverificacionEstadoDocumentoAjuste";
import type { TnsverificacionEstadoDocumentoAjusteResponse } from "../definitions/TnsverificacionEstadoDocumentoAjusteResponse";

export interface ServicioFacturacionPort {
    anulacionDocumentoAjuste(anulacionDocumentoAjuste: TnsanulacionDocumentoAjuste, callback: (err: any, result: TnsanulacionDocumentoAjusteResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    reversionAnulacionDocumentoAjuste(reversionAnulacionDocumentoAjuste: TnsreversionAnulacionDocumentoAjuste, callback: (err: any, result: TnsreversionAnulacionDocumentoAjusteResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    verificarComunicacion(verificarComunicacion: TnsverificarComunicacion, callback: (err: any, result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    recepcionDocumentoAjuste(recepcionDocumentoAjuste: TnsrecepcionDocumentoAjuste, callback: (err: any, result: TnsrecepcionDocumentoAjusteResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    verificacionEstadoDocumentoAjuste(verificacionEstadoDocumentoAjuste: TnsverificacionEstadoDocumentoAjuste, callback: (err: any, result: TnsverificacionEstadoDocumentoAjusteResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
