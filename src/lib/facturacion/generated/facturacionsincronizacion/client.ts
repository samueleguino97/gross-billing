import type { Client as SoapClient, IExOptions as ISoapExOptions } from "soap";
import { createClientAsync as soapCreateClientAsync } from "soap";
import type { TnssincronizarParametricaMotivoAnulacion } from "./definitions/TnssincronizarParametricaMotivoAnulacion";
import type { TnssincronizarParametricaMotivoAnulacionResponse } from "./definitions/TnssincronizarParametricaMotivoAnulacionResponse";
import type { TnssincronizarActividades } from "./definitions/TnssincronizarActividades";
import type { TnssincronizarActividadesResponse } from "./definitions/TnssincronizarActividadesResponse";
import type { TnssincronizarFechaHora } from "./definitions/TnssincronizarFechaHora";
import type { TnssincronizarFechaHoraResponse } from "./definitions/TnssincronizarFechaHoraResponse";
import type { TnssincronizarListaLeyendasFactura } from "./definitions/TnssincronizarListaLeyendasFactura";
import type { TnssincronizarListaLeyendasFacturaResponse } from "./definitions/TnssincronizarListaLeyendasFacturaResponse";
import type { TnssincronizarParametricaTipoHabitacion } from "./definitions/TnssincronizarParametricaTipoHabitacion";
import type { TnssincronizarParametricaTipoHabitacionResponse } from "./definitions/TnssincronizarParametricaTipoHabitacionResponse";
import type { TnssincronizarListaActividadesDocumentoSector } from "./definitions/TnssincronizarListaActividadesDocumentoSector";
import type { TnssincronizarListaActividadesDocumentoSectorResponse } from "./definitions/TnssincronizarListaActividadesDocumentoSectorResponse";
import type { TnssincronizarParametricaTipoDocumentoIdentidad } from "./definitions/TnssincronizarParametricaTipoDocumentoIdentidad";
import type { TnssincronizarParametricaTipoDocumentoIdentidadResponse } from "./definitions/TnssincronizarParametricaTipoDocumentoIdentidadResponse";
import type { TnssincronizarParametricaUnidadMedida } from "./definitions/TnssincronizarParametricaUnidadMedida";
import type { TnssincronizarParametricaUnidadMedidaResponse } from "./definitions/TnssincronizarParametricaUnidadMedidaResponse";
import type { TnssincronizarParametricaTipoDocumentoSector } from "./definitions/TnssincronizarParametricaTipoDocumentoSector";
import type { TnssincronizarParametricaTipoDocumentoSectorResponse } from "./definitions/TnssincronizarParametricaTipoDocumentoSectorResponse";
import type { TnssincronizarParametricaTiposFactura } from "./definitions/TnssincronizarParametricaTiposFactura";
import type { TnssincronizarParametricaTiposFacturaResponse } from "./definitions/TnssincronizarParametricaTiposFacturaResponse";
import type { TnsverificarComunicacion } from "./definitions/TnsverificarComunicacion";
import type { TnsverificarComunicacionResponse } from "./definitions/TnsverificarComunicacionResponse";
import type { TnssincronizarListaMensajesServicios } from "./definitions/TnssincronizarListaMensajesServicios";
import type { TnssincronizarListaMensajesServiciosResponse } from "./definitions/TnssincronizarListaMensajesServiciosResponse";
import type { TnssincronizarParametricaTipoMetodoPago } from "./definitions/TnssincronizarParametricaTipoMetodoPago";
import type { TnssincronizarParametricaTipoMetodoPagoResponse } from "./definitions/TnssincronizarParametricaTipoMetodoPagoResponse";
import type { TnssincronizarParametricaEventosSignificativos } from "./definitions/TnssincronizarParametricaEventosSignificativos";
import type { TnssincronizarParametricaEventosSignificativosResponse } from "./definitions/TnssincronizarParametricaEventosSignificativosResponse";
import type { TnssincronizarParametricaTipoPuntoVenta } from "./definitions/TnssincronizarParametricaTipoPuntoVenta";
import type { TnssincronizarParametricaTipoPuntoVentaResponse } from "./definitions/TnssincronizarParametricaTipoPuntoVentaResponse";
import type { TnssincronizarListaProductosServicios } from "./definitions/TnssincronizarListaProductosServicios";
import type { TnssincronizarListaProductosServiciosResponse } from "./definitions/TnssincronizarListaProductosServiciosResponse";
import type { TnssincronizarParametricaTipoEmision } from "./definitions/TnssincronizarParametricaTipoEmision";
import type { TnssincronizarParametricaTipoEmisionResponse } from "./definitions/TnssincronizarParametricaTipoEmisionResponse";
import type { TnssincronizarParametricaPaisOrigen } from "./definitions/TnssincronizarParametricaPaisOrigen";
import type { TnssincronizarParametricaPaisOrigenResponse } from "./definitions/TnssincronizarParametricaPaisOrigenResponse";
import type { TnssincronizarParametricaTipoMoneda } from "./definitions/TnssincronizarParametricaTipoMoneda";
import type { TnssincronizarParametricaTipoMonedaResponse } from "./definitions/TnssincronizarParametricaTipoMonedaResponse";
import type { ServicioFacturacionSincronizacion } from "./services/ServicioFacturacionSincronizacion";

export interface FacturacionSincronizacionClient extends SoapClient {
  ServicioFacturacionSincronizacion: ServicioFacturacionSincronizacion;
  sincronizarParametricaMotivoAnulacionAsync(
    sincronizarParametricaMotivoAnulacion: TnssincronizarParametricaMotivoAnulacion,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarParametricaMotivoAnulacionResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarActividadesAsync(
    sincronizarActividades: TnssincronizarActividades,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarActividadesResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarFechaHoraAsync(
    sincronizarFechaHora: TnssincronizarFechaHora,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarFechaHoraResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarListaLeyendasFacturaAsync(
    sincronizarListaLeyendasFactura: TnssincronizarListaLeyendasFactura,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarListaLeyendasFacturaResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarParametricaTipoHabitacionAsync(
    sincronizarParametricaTipoHabitacion: TnssincronizarParametricaTipoHabitacion,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarParametricaTipoHabitacionResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarListaActividadesDocumentoSectorAsync(
    sincronizarListaActividadesDocumentoSector: TnssincronizarListaActividadesDocumentoSector,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarListaActividadesDocumentoSectorResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarParametricaTipoDocumentoIdentidadAsync(
    sincronizarParametricaTipoDocumentoIdentidad: TnssincronizarParametricaTipoDocumentoIdentidad,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarParametricaTipoDocumentoIdentidadResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarParametricaUnidadMedidaAsync(
    sincronizarParametricaUnidadMedida: TnssincronizarParametricaUnidadMedida,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarParametricaUnidadMedidaResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarParametricaTipoDocumentoSectorAsync(
    sincronizarParametricaTipoDocumentoSector: TnssincronizarParametricaTipoDocumentoSector,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarParametricaTipoDocumentoSectorResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarParametricaTiposFacturaAsync(
    sincronizarParametricaTiposFactura: TnssincronizarParametricaTiposFactura,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarParametricaTiposFacturaResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  verificarComunicacionAsync(
    verificarComunicacion: TnsverificarComunicacion,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnsverificarComunicacionResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarListaMensajesServiciosAsync(
    sincronizarListaMensajesServicios: TnssincronizarListaMensajesServicios,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarListaMensajesServiciosResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarParametricaTipoMetodoPagoAsync(
    sincronizarParametricaTipoMetodoPago: TnssincronizarParametricaTipoMetodoPago,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarParametricaTipoMetodoPagoResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarParametricaEventosSignificativosAsync(
    sincronizarParametricaEventosSignificativos: TnssincronizarParametricaEventosSignificativos,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarParametricaEventosSignificativosResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarParametricaTipoPuntoVentaAsync(
    sincronizarParametricaTipoPuntoVenta: TnssincronizarParametricaTipoPuntoVenta,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarParametricaTipoPuntoVentaResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarListaProductosServiciosAsync(
    sincronizarListaProductosServicios: TnssincronizarListaProductosServicios,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarListaProductosServiciosResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarParametricaTipoEmisionAsync(
    sincronizarParametricaTipoEmision: TnssincronizarParametricaTipoEmision,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarParametricaTipoEmisionResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarParametricaPaisOrigenAsync(
    sincronizarParametricaPaisOrigen: TnssincronizarParametricaPaisOrigen,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarParametricaPaisOrigenResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
  sincronizarParametricaTipoMonedaAsync(
    sincronizarParametricaTipoMoneda: TnssincronizarParametricaTipoMoneda,
    options?: ISoapExOptions,
  ): Promise<
    [
      result: TnssincronizarParametricaTipoMonedaResponse,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ]
  >;
}

/** Create FacturacionSincronizacionClient */
export function createClientAsync(
  ...args: Parameters<typeof soapCreateClientAsync>
): Promise<FacturacionSincronizacionClient> {
  return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
