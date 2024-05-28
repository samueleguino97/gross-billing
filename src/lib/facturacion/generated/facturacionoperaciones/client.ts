import type { Client as SoapClient, IExOptions as ISoapExOptions } from "soap";
import { createClientAsync as soapCreateClientAsync } from "soap";
import type { TnsverificarComunicacion } from "./definitions/TnsverificarComunicacion";
import type { TnsverificarComunicacionResponse } from "./definitions/TnsverificarComunicacionResponse";
import type { TnsregistroPuntoVenta } from "./definitions/TnsregistroPuntoVenta";
import type { TnsregistroPuntoVentaResponse } from "./definitions/TnsregistroPuntoVentaResponse";
import type { TnsregistroPuntoVentaComisionista } from "./definitions/TnsregistroPuntoVentaComisionista";
import type { TnsregistroPuntoVentaComisionistaResponse } from "./definitions/TnsregistroPuntoVentaComisionistaResponse";
import type { TnscierreOperacionesSistema } from "./definitions/TnscierreOperacionesSistema";
import type { TnscierreOperacionesSistemaResponse } from "./definitions/TnscierreOperacionesSistemaResponse";
import type { TnsconsultaEventoSignificativo } from "./definitions/TnsconsultaEventoSignificativo";
import type { TnsconsultaEventoSignificativoResponse } from "./definitions/TnsconsultaEventoSignificativoResponse";
import type { TnsconsultaPuntoVenta } from "./definitions/TnsconsultaPuntoVenta";
import type { TnsconsultaPuntoVentaResponse } from "./definitions/TnsconsultaPuntoVentaResponse";
import type { TnsregistroEventoSignificativo } from "./definitions/TnsregistroEventoSignificativo";
import type { TnsregistroEventoSignificativoResponse } from "./definitions/TnsregistroEventoSignificativoResponse";
import type { TnscierrePuntoVenta } from "./definitions/TnscierrePuntoVenta";
import type { TnscierrePuntoVentaResponse } from "./definitions/TnscierrePuntoVentaResponse";
import type { ServicioFacturacionOperaciones } from "./services/ServicioFacturacionOperaciones";

export interface FacturacionOperacionesClient extends SoapClient {
    ServicioFacturacionOperaciones: ServicioFacturacionOperaciones;
    verificarComunicacionAsync(verificarComunicacion: TnsverificarComunicacion, options?: ISoapExOptions): Promise<[result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    registroPuntoVentaAsync(registroPuntoVenta: TnsregistroPuntoVenta, options?: ISoapExOptions): Promise<[result: TnsregistroPuntoVentaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    registroPuntoVentaComisionistaAsync(registroPuntoVentaComisionista: TnsregistroPuntoVentaComisionista, options?: ISoapExOptions): Promise<[result: TnsregistroPuntoVentaComisionistaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    cierreOperacionesSistemaAsync(cierreOperacionesSistema: TnscierreOperacionesSistema, options?: ISoapExOptions): Promise<[result: TnscierreOperacionesSistemaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    consultaEventoSignificativoAsync(consultaEventoSignificativo: TnsconsultaEventoSignificativo, options?: ISoapExOptions): Promise<[result: TnsconsultaEventoSignificativoResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    consultaPuntoVentaAsync(consultaPuntoVenta: TnsconsultaPuntoVenta, options?: ISoapExOptions): Promise<[result: TnsconsultaPuntoVentaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    registroEventoSignificativoAsync(registroEventoSignificativo: TnsregistroEventoSignificativo, options?: ISoapExOptions): Promise<[result: TnsregistroEventoSignificativoResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    cierrePuntoVentaAsync(cierrePuntoVenta: TnscierrePuntoVenta, options?: ISoapExOptions): Promise<[result: TnscierrePuntoVentaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create FacturacionOperacionesClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<FacturacionOperacionesClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
