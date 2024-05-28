import type { TnsverificarComunicacion } from "../definitions/TnsverificarComunicacion";
import type { TnsverificarComunicacionResponse } from "../definitions/TnsverificarComunicacionResponse";
import type { TnsverificarNit } from "../definitions/TnsverificarNit";
import type { TnsverificarNitResponse } from "../definitions/TnsverificarNitResponse";
import type { TnscuisMasivo } from "../definitions/TnscuisMasivo";
import type { TnscuisMasivoResponse } from "../definitions/TnscuisMasivoResponse";
import type { Tnscufd } from "../definitions/Tnscufd";
import type { TnscufdResponse } from "../definitions/TnscufdResponse";
import type { TnsnotificaCertificadoRevocado } from "../definitions/TnsnotificaCertificadoRevocado";
import type { TnsnotificaCertificadoRevocadoResponse } from "../definitions/TnsnotificaCertificadoRevocadoResponse";
import type { Tnscuis } from "../definitions/Tnscuis";
import type { TnscuisResponse } from "../definitions/TnscuisResponse";
import type { TnscufdMasivo } from "../definitions/TnscufdMasivo";
import type { TnscufdMasivoResponse } from "../definitions/TnscufdMasivoResponse";

export interface ServicioFacturacionCodigosPort {
    verificarComunicacion(verificarComunicacion: TnsverificarComunicacion, callback: (err: any, result: TnsverificarComunicacionResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    verificarNit(verificarNit: TnsverificarNit, callback: (err: any, result: TnsverificarNitResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    cuisMasivo(cuisMasivo: TnscuisMasivo, callback: (err: any, result: TnscuisMasivoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    cufd(cufd: Tnscufd, callback: (err: any, result: TnscufdResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    notificaCertificadoRevocado(notificaCertificadoRevocado: TnsnotificaCertificadoRevocado, callback: (err: any, result: TnsnotificaCertificadoRevocadoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    cuis(cuis: Tnscuis, callback: (err: any, result: TnscuisResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    cufdMasivo(cufdMasivo: TnscufdMasivo, callback: (err: any, result: TnscufdMasivoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
