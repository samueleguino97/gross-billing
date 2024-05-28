import type { TnsverificarComunicacion } from "../definitions/TnsverificarComunicacion";
import type { TnsverificarComunicacionResponse } from "../definitions/TnsverificarComunicacionResponse";
import type { TnsregistroPuntoVenta } from "../definitions/TnsregistroPuntoVenta";
import type { TnsregistroPuntoVentaResponse } from "../definitions/TnsregistroPuntoVentaResponse";
import type { TnsregistroPuntoVentaComisionista } from "../definitions/TnsregistroPuntoVentaComisionista";
import type { TnsregistroPuntoVentaComisionistaResponse } from "../definitions/TnsregistroPuntoVentaComisionistaResponse";
import type { TnscierreOperacionesSistema } from "../definitions/TnscierreOperacionesSistema";
import type { TnscierreOperacionesSistemaResponse } from "../definitions/TnscierreOperacionesSistemaResponse";
import type { TnsconsultaEventoSignificativo } from "../definitions/TnsconsultaEventoSignificativo";
import type { TnsconsultaEventoSignificativoResponse } from "../definitions/TnsconsultaEventoSignificativoResponse";
import type { TnsconsultaPuntoVenta } from "../definitions/TnsconsultaPuntoVenta";
import type { TnsconsultaPuntoVentaResponse } from "../definitions/TnsconsultaPuntoVentaResponse";
import type { TnsregistroEventoSignificativo } from "../definitions/TnsregistroEventoSignificativo";
import type { TnsregistroEventoSignificativoResponse } from "../definitions/TnsregistroEventoSignificativoResponse";
import type { TnscierrePuntoVenta } from "../definitions/TnscierrePuntoVenta";
import type { TnscierrePuntoVentaResponse } from "../definitions/TnscierrePuntoVentaResponse";

export interface ServicioFacturacionOperacionesPort {
    verificarComunicacion(verificarComunicacion: TnsverificarComunicacion, callback: (err: any, result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    registroPuntoVenta(registroPuntoVenta: TnsregistroPuntoVenta, callback: (err: any, result: TnsregistroPuntoVentaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    registroPuntoVentaComisionista(registroPuntoVentaComisionista: TnsregistroPuntoVentaComisionista, callback: (err: any, result: TnsregistroPuntoVentaComisionistaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    cierreOperacionesSistema(cierreOperacionesSistema: TnscierreOperacionesSistema, callback: (err: any, result: TnscierreOperacionesSistemaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    consultaEventoSignificativo(consultaEventoSignificativo: TnsconsultaEventoSignificativo, callback: (err: any, result: TnsconsultaEventoSignificativoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    consultaPuntoVenta(consultaPuntoVenta: TnsconsultaPuntoVenta, callback: (err: any, result: TnsconsultaPuntoVentaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    registroEventoSignificativo(registroEventoSignificativo: TnsregistroEventoSignificativo, callback: (err: any, result: TnsregistroEventoSignificativoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    cierrePuntoVenta(cierrePuntoVenta: TnscierrePuntoVenta, callback: (err: any, result: TnscierrePuntoVentaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
