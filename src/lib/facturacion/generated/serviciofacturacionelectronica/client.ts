import type { Client as SoapClient, IExOptions as ISoapExOptions } from "soap";
import { createClientAsync as soapCreateClientAsync } from "soap";
import type { TnsrecepcionPaqueteFactura } from "./definitions/TnsrecepcionPaqueteFactura";
import type { TnsrecepcionPaqueteFacturaResponse } from "./definitions/TnsrecepcionPaqueteFacturaResponse";
import type { TnsverificarComunicacion } from "./definitions/TnsverificarComunicacion";
import type { TnsverificarComunicacionResponse } from "./definitions/TnsverificarComunicacionResponse";
import type { TnsrecepcionFactura } from "./definitions/TnsrecepcionFactura";
import type { TnsrecepcionFacturaResponse } from "./definitions/TnsrecepcionFacturaResponse";
import type { TnsreversionAnulacionFactura } from "./definitions/TnsreversionAnulacionFactura";
import type { TnsreversionAnulacionFacturaResponse } from "./definitions/TnsreversionAnulacionFacturaResponse";
import type { TnsvalidacionRecepcionMasivaFactura } from "./definitions/TnsvalidacionRecepcionMasivaFactura";
import type { TnsvalidacionRecepcionMasivaFacturaResponse } from "./definitions/TnsvalidacionRecepcionMasivaFacturaResponse";
import type { TnsrecepcionMasivaFactura } from "./definitions/TnsrecepcionMasivaFactura";
import type { TnsrecepcionMasivaFacturaResponse } from "./definitions/TnsrecepcionMasivaFacturaResponse";
import type { TnsverificacionEstadoFactura } from "./definitions/TnsverificacionEstadoFactura";
import type { TnsverificacionEstadoFacturaResponse } from "./definitions/TnsverificacionEstadoFacturaResponse";
import type { TnsvalidacionRecepcionPaqueteFactura } from "./definitions/TnsvalidacionRecepcionPaqueteFactura";
import type { TnsvalidacionRecepcionPaqueteFacturaResponse } from "./definitions/TnsvalidacionRecepcionPaqueteFacturaResponse";
import type { TnsanulacionFactura } from "./definitions/TnsanulacionFactura";
import type { TnsanulacionFacturaResponse } from "./definitions/TnsanulacionFacturaResponse";
import type { TnsrecepcionAnexosSuministroEnergia } from "./definitions/TnsrecepcionAnexosSuministroEnergia";
import type { TnsrecepcionAnexosSuministroEnergiaResponse } from "./definitions/TnsrecepcionAnexosSuministroEnergiaResponse";
import type { ServicioFacturacion } from "./services/ServicioFacturacion";

export interface ServicioFacturacionElectronicaClient extends SoapClient {
    ServicioFacturacion: ServicioFacturacion;
    recepcionPaqueteFacturaAsync(recepcionPaqueteFactura: TnsrecepcionPaqueteFactura, options?: ISoapExOptions): Promise<[result: TnsrecepcionPaqueteFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    verificarComunicacionAsync(verificarComunicacion: TnsverificarComunicacion, options?: ISoapExOptions): Promise<[result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    recepcionFacturaAsync(recepcionFactura: TnsrecepcionFactura, options?: ISoapExOptions): Promise<[result: TnsrecepcionFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    reversionAnulacionFacturaAsync(reversionAnulacionFactura: TnsreversionAnulacionFactura, options?: ISoapExOptions): Promise<[result: TnsreversionAnulacionFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    validacionRecepcionMasivaFacturaAsync(validacionRecepcionMasivaFactura: TnsvalidacionRecepcionMasivaFactura, options?: ISoapExOptions): Promise<[result: TnsvalidacionRecepcionMasivaFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    recepcionMasivaFacturaAsync(recepcionMasivaFactura: TnsrecepcionMasivaFactura, options?: ISoapExOptions): Promise<[result: TnsrecepcionMasivaFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    verificacionEstadoFacturaAsync(verificacionEstadoFactura: TnsverificacionEstadoFactura, options?: ISoapExOptions): Promise<[result: TnsverificacionEstadoFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    validacionRecepcionPaqueteFacturaAsync(validacionRecepcionPaqueteFactura: TnsvalidacionRecepcionPaqueteFactura, options?: ISoapExOptions): Promise<[result: TnsvalidacionRecepcionPaqueteFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    anulacionFacturaAsync(anulacionFactura: TnsanulacionFactura, options?: ISoapExOptions): Promise<[result: TnsanulacionFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    recepcionAnexosSuministroEnergiaAsync(recepcionAnexosSuministroEnergia: TnsrecepcionAnexosSuministroEnergia, options?: ISoapExOptions): Promise<[result: TnsrecepcionAnexosSuministroEnergiaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create ServicioFacturacionElectronicaClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ServicioFacturacionElectronicaClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
