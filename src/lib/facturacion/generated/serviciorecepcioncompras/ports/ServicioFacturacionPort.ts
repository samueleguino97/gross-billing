import type { TnsverificarComunicacion } from "../definitions/TnsverificarComunicacion";
import type { TnsverificarComunicacionResponse } from "../definitions/TnsverificarComunicacionResponse";
import type { TnsvalidacionRecepcionPaqueteCompras } from "../definitions/TnsvalidacionRecepcionPaqueteCompras";
import type { TnsvalidacionRecepcionPaqueteComprasResponse } from "../definitions/TnsvalidacionRecepcionPaqueteComprasResponse";
import type { TnsrecepcionPaqueteCompras } from "../definitions/TnsrecepcionPaqueteCompras";
import type { TnsrecepcionPaqueteComprasResponse } from "../definitions/TnsrecepcionPaqueteComprasResponse";
import type { TnsanulacionCompra } from "../definitions/TnsanulacionCompra";
import type { TnsanulacionCompraResponse } from "../definitions/TnsanulacionCompraResponse";
import type { TnsconfirmacionCompras } from "../definitions/TnsconfirmacionCompras";
import type { TnsconfirmacionComprasResponse } from "../definitions/TnsconfirmacionComprasResponse";
import type { TnsconsultaCompras } from "../definitions/TnsconsultaCompras";
import type { TnsconsultaComprasResponse } from "../definitions/TnsconsultaComprasResponse";

export interface ServicioFacturacionPort {
    verificarComunicacion(verificarComunicacion: TnsverificarComunicacion, callback: (err: any, result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    validacionRecepcionPaqueteCompras(validacionRecepcionPaqueteCompras: TnsvalidacionRecepcionPaqueteCompras, callback: (err: any, result: TnsvalidacionRecepcionPaqueteComprasResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    recepcionPaqueteCompras(recepcionPaqueteCompras: TnsrecepcionPaqueteCompras, callback: (err: any, result: TnsrecepcionPaqueteComprasResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    anulacionCompra(anulacionCompra: TnsanulacionCompra, callback: (err: any, result: TnsanulacionCompraResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    confirmacionCompras(confirmacionCompras: TnsconfirmacionCompras, callback: (err: any, result: TnsconfirmacionComprasResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    consultaCompras(consultaCompras: TnsconsultaCompras, callback: (err: any, result: TnsconsultaComprasResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
