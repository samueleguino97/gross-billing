import type { Client as SoapClient, IExOptions as ISoapExOptions } from "soap";
import { createClientAsync as soapCreateClientAsync } from "soap";
import type { TnsanulacionDocumentoAjuste } from "./definitions/TnsanulacionDocumentoAjuste";
import type { TnsanulacionDocumentoAjusteResponse } from "./definitions/TnsanulacionDocumentoAjusteResponse";
import type { TnsreversionAnulacionDocumentoAjuste } from "./definitions/TnsreversionAnulacionDocumentoAjuste";
import type { TnsreversionAnulacionDocumentoAjusteResponse } from "./definitions/TnsreversionAnulacionDocumentoAjusteResponse";
import type { TnsverificarComunicacion } from "./definitions/TnsverificarComunicacion";
import type { TnsverificarComunicacionResponse } from "./definitions/TnsverificarComunicacionResponse";
import type { TnsrecepcionDocumentoAjuste } from "./definitions/TnsrecepcionDocumentoAjuste";
import type { TnsrecepcionDocumentoAjusteResponse } from "./definitions/TnsrecepcionDocumentoAjusteResponse";
import type { TnsverificacionEstadoDocumentoAjuste } from "./definitions/TnsverificacionEstadoDocumentoAjuste";
import type { TnsverificacionEstadoDocumentoAjusteResponse } from "./definitions/TnsverificacionEstadoDocumentoAjusteResponse";
import type { ServicioFacturacion } from "./services/ServicioFacturacion";

export interface FacturacionDocumentoAjusteClient extends SoapClient {
    ServicioFacturacion: ServicioFacturacion;
    anulacionDocumentoAjusteAsync(anulacionDocumentoAjuste: TnsanulacionDocumentoAjuste, options?: ISoapExOptions): Promise<[result: TnsanulacionDocumentoAjusteResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    reversionAnulacionDocumentoAjusteAsync(reversionAnulacionDocumentoAjuste: TnsreversionAnulacionDocumentoAjuste, options?: ISoapExOptions): Promise<[result: TnsreversionAnulacionDocumentoAjusteResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    verificarComunicacionAsync(verificarComunicacion: TnsverificarComunicacion, options?: ISoapExOptions): Promise<[result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    recepcionDocumentoAjusteAsync(recepcionDocumentoAjuste: TnsrecepcionDocumentoAjuste, options?: ISoapExOptions): Promise<[result: TnsrecepcionDocumentoAjusteResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    verificacionEstadoDocumentoAjusteAsync(verificacionEstadoDocumentoAjuste: TnsverificacionEstadoDocumentoAjuste, options?: ISoapExOptions): Promise<[result: TnsverificacionEstadoDocumentoAjusteResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create FacturacionDocumentoAjusteClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<FacturacionDocumentoAjusteClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
