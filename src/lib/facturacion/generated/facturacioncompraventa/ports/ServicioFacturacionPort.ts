import type { TnsrecepcionPaqueteFactura } from "../definitions/TnsrecepcionPaqueteFactura";
import type { TnsrecepcionPaqueteFacturaResponse } from "../definitions/TnsrecepcionPaqueteFacturaResponse";
import type { TnsverificarComunicacion } from "../definitions/TnsverificarComunicacion";
import type { TnsverificarComunicacionResponse } from "../definitions/TnsverificarComunicacionResponse";
import type { TnsrecepcionFactura } from "../definitions/TnsrecepcionFactura";
import type { TnsrecepcionFacturaResponse } from "../definitions/TnsrecepcionFacturaResponse";
import type { TnsreversionAnulacionFactura } from "../definitions/TnsreversionAnulacionFactura";
import type { TnsreversionAnulacionFacturaResponse } from "../definitions/TnsreversionAnulacionFacturaResponse";
import type { TnsvalidacionRecepcionMasivaFactura } from "../definitions/TnsvalidacionRecepcionMasivaFactura";
import type { TnsvalidacionRecepcionMasivaFacturaResponse } from "../definitions/TnsvalidacionRecepcionMasivaFacturaResponse";
import type { TnsrecepcionAnexos } from "../definitions/TnsrecepcionAnexos";
import type { TnsrecepcionAnexosResponse } from "../definitions/TnsrecepcionAnexosResponse";
import type { TnsrecepcionMasivaFactura } from "../definitions/TnsrecepcionMasivaFactura";
import type { TnsrecepcionMasivaFacturaResponse } from "../definitions/TnsrecepcionMasivaFacturaResponse";
import type { TnsverificacionEstadoFactura } from "../definitions/TnsverificacionEstadoFactura";
import type { TnsverificacionEstadoFacturaResponse } from "../definitions/TnsverificacionEstadoFacturaResponse";
import type { TnsvalidacionRecepcionPaqueteFactura } from "../definitions/TnsvalidacionRecepcionPaqueteFactura";
import type { TnsvalidacionRecepcionPaqueteFacturaResponse } from "../definitions/TnsvalidacionRecepcionPaqueteFacturaResponse";
import type { TnsanulacionFactura } from "../definitions/TnsanulacionFactura";
import type { TnsanulacionFacturaResponse } from "../definitions/TnsanulacionFacturaResponse";

export interface ServicioFacturacionPort {
    recepcionPaqueteFactura(recepcionPaqueteFactura: TnsrecepcionPaqueteFactura, callback: (err: any, result: TnsrecepcionPaqueteFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    verificarComunicacion(verificarComunicacion: TnsverificarComunicacion, callback: (err: any, result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    recepcionFactura(recepcionFactura: TnsrecepcionFactura, callback: (err: any, result: TnsrecepcionFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    reversionAnulacionFactura(reversionAnulacionFactura: TnsreversionAnulacionFactura, callback: (err: any, result: TnsreversionAnulacionFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    validacionRecepcionMasivaFactura(validacionRecepcionMasivaFactura: TnsvalidacionRecepcionMasivaFactura, callback: (err: any, result: TnsvalidacionRecepcionMasivaFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    recepcionAnexos(recepcionAnexos: TnsrecepcionAnexos, callback: (err: any, result: TnsrecepcionAnexosResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    recepcionMasivaFactura(recepcionMasivaFactura: TnsrecepcionMasivaFactura, callback: (err: any, result: TnsrecepcionMasivaFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    verificacionEstadoFactura(verificacionEstadoFactura: TnsverificacionEstadoFactura, callback: (err: any, result: TnsverificacionEstadoFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    validacionRecepcionPaqueteFactura(validacionRecepcionPaqueteFactura: TnsvalidacionRecepcionPaqueteFactura, callback: (err: any, result: TnsvalidacionRecepcionPaqueteFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    anulacionFactura(anulacionFactura: TnsanulacionFactura, callback: (err: any, result: TnsanulacionFacturaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
