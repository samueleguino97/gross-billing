import type { Client as SoapClient, IExOptions as ISoapExOptions } from "soap";
import { createClientAsync as soapCreateClientAsync } from "soap";
import type { TnsverificarComunicacion } from "./definitions/TnsverificarComunicacion";
import type { TnsverificarComunicacionResponse } from "./definitions/TnsverificarComunicacionResponse";
import type { TnsvalidacionRecepcionPaqueteCompras } from "./definitions/TnsvalidacionRecepcionPaqueteCompras";
import type { TnsvalidacionRecepcionPaqueteComprasResponse } from "./definitions/TnsvalidacionRecepcionPaqueteComprasResponse";
import type { TnsrecepcionPaqueteCompras } from "./definitions/TnsrecepcionPaqueteCompras";
import type { TnsrecepcionPaqueteComprasResponse } from "./definitions/TnsrecepcionPaqueteComprasResponse";
import type { TnsanulacionCompra } from "./definitions/TnsanulacionCompra";
import type { TnsanulacionCompraResponse } from "./definitions/TnsanulacionCompraResponse";
import type { TnsconfirmacionCompras } from "./definitions/TnsconfirmacionCompras";
import type { TnsconfirmacionComprasResponse } from "./definitions/TnsconfirmacionComprasResponse";
import type { TnsconsultaCompras } from "./definitions/TnsconsultaCompras";
import type { TnsconsultaComprasResponse } from "./definitions/TnsconsultaComprasResponse";
import type { ServicioRecepcionCompras } from "./services/ServicioRecepcionCompras";

export interface ServicioRecepcionComprasClient extends SoapClient {
    ServicioRecepcionCompras: ServicioRecepcionCompras;
    verificarComunicacionAsync(verificarComunicacion: TnsverificarComunicacion, options?: ISoapExOptions): Promise<[result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    validacionRecepcionPaqueteComprasAsync(validacionRecepcionPaqueteCompras: TnsvalidacionRecepcionPaqueteCompras, options?: ISoapExOptions): Promise<[result: TnsvalidacionRecepcionPaqueteComprasResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    recepcionPaqueteComprasAsync(recepcionPaqueteCompras: TnsrecepcionPaqueteCompras, options?: ISoapExOptions): Promise<[result: TnsrecepcionPaqueteComprasResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    anulacionCompraAsync(anulacionCompra: TnsanulacionCompra, options?: ISoapExOptions): Promise<[result: TnsanulacionCompraResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    confirmacionComprasAsync(confirmacionCompras: TnsconfirmacionCompras, options?: ISoapExOptions): Promise<[result: TnsconfirmacionComprasResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    consultaComprasAsync(consultaCompras: TnsconsultaCompras, options?: ISoapExOptions): Promise<[result: TnsconsultaComprasResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create ServicioRecepcionComprasClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ServicioRecepcionComprasClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
