import type { Client as SoapClient, IExOptions as ISoapExOptions } from "soap";
import { createClientAsync as soapCreateClientAsync } from "soap";
import type { TnsverificarComunicacion } from "./definitions/TnsverificarComunicacion";
import type { TnsverificarComunicacionResponse } from "./definitions/TnsverificarComunicacionResponse";
import type { TnsverificarNit } from "./definitions/TnsverificarNit";
import type { TnsverificarNitResponse } from "./definitions/TnsverificarNitResponse";
import type { TnscuisMasivo } from "./definitions/TnscuisMasivo";
import type { TnscuisMasivoResponse } from "./definitions/TnscuisMasivoResponse";
import type { Tnscufd } from "./definitions/Tnscufd";
import type { TnscufdResponse } from "./definitions/TnscufdResponse";
import type { TnsnotificaCertificadoRevocado } from "./definitions/TnsnotificaCertificadoRevocado";
import type { TnsnotificaCertificadoRevocadoResponse } from "./definitions/TnsnotificaCertificadoRevocadoResponse";
import type { Tnscuis } from "./definitions/Tnscuis";
import type { TnscuisResponse } from "./definitions/TnscuisResponse";
import type { TnscufdMasivo } from "./definitions/TnscufdMasivo";
import type { TnscufdMasivoResponse } from "./definitions/TnscufdMasivoResponse";
import type { ServicioFacturacionCodigos } from "./services/ServicioFacturacionCodigos";

export interface FacturacionCodigosClient extends SoapClient {
    ServicioFacturacionCodigos: ServicioFacturacionCodigos;
    verificarComunicacionAsync(verificarComunicacion: TnsverificarComunicacion, options?: ISoapExOptions): Promise<[result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    verificarNitAsync(verificarNit: TnsverificarNit, options?: ISoapExOptions): Promise<[result: TnsverificarNitResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    cuisMasivoAsync(cuisMasivo: TnscuisMasivo, options?: ISoapExOptions): Promise<[result: TnscuisMasivoResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    cufdAsync(cufd: Tnscufd, options?: ISoapExOptions): Promise<[result: TnscufdResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    notificaCertificadoRevocadoAsync(notificaCertificadoRevocado: TnsnotificaCertificadoRevocado, options?: ISoapExOptions): Promise<[result: TnsnotificaCertificadoRevocadoResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    cuisAsync(cuis: Tnscuis, options?: ISoapExOptions): Promise<[result: TnscuisResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    cufdMasivoAsync(cufdMasivo: TnscufdMasivo, options?: ISoapExOptions): Promise<[result: TnscufdMasivoResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create FacturacionCodigosClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<FacturacionCodigosClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
