import { createClientAsync as createFacturacionSincronizacionClient } from "./generated/facturacionsincronizacion";
import { createClientAsync as createFacturacionCodigosClient } from "./generated/facturacioncodigos";
import { createClientAsync as createFacturacionCompraVentaClient } from "./generated/facturacioncompraventa";
import { createClientAsync as createFacturacionOperacionesClient } from "./generated/facturacionoperaciones";
import { createClientAsync as createServicioRecepcionComprasClient } from "./generated/serviciorecepcioncompras";
import { createClientAsync as createfacturacionDocumentoAjusteClient } from "./generated/facturaciondocumentoajuste";
import { createClientAsync as createServicioFacturacionElectronicaClient } from "./generated/serviciofacturacionelectronica";

const tokenHeader =
  "TokenApi eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJTZWd1aW5vIiwiY29kaWdvU2lzdGVtYSI6IjdDNThGOTE0NjRDNDdCNUM2MkYzNTdFIiwibml0IjoiSDRzSUFBQUFBQUFBQUxNMHRqUXlOekkwTURRRkFJaWtJdnNLQUFBQSIsImlkIjozMDE2MTIzLCJleHAiOjE3MzU3NDIyMTksImlhdCI6MTcxNjQ4OTM4OSwibml0RGVsZWdhZG8iOjkzOTI3MjEwMTUsInN1YnNpc3RlbWEiOiJTRkUifQ.9q18g0dm2RZvu0Px1sdB__ZYVBQCiC2PfywFdoIA-HMGAlWlkx_oY5Ze3ddWvGFEZdHwoVMjbhN0WHqKxgPLVw";
export const getFacturacionSincronizacionClient = async () => {
  const client = await createFacturacionSincronizacionClient(
    "https://pilotosiatservicios.impuestos.gob.bo/v2/FacturacionSincronizacion?wsdl",
    {},
  );
  client.addHttpHeader("apikey", tokenHeader);
  return client;
};
export const getFacturacionOperacionesClient = async () => {
  const client = await createFacturacionOperacionesClient(
    "https://pilotosiatservicios.impuestos.gob.bo/v2/FacturacionOperaciones?wsdl",
    {},
  );
  client.addHttpHeader("apiKey", tokenHeader);
  return client;
};

export const getFacturacionCodigosClient = async () => {
  const client = await createFacturacionCodigosClient(
    "https://pilotosiatservicios.impuestos.gob.bo/v2/FacturacionCodigos?wsdl",
    {},
  );
  client.addHttpHeader("apikey", tokenHeader);
  return client;
};

export const getFacturacionCompraVentaClient = async () => {
  const client = await createFacturacionCompraVentaClient(
    "https://pilotosiatservicios.impuestos.gob.bo/v2/FacturacionCompraVenta?wsdl",
    {},
  );
  client.addHttpHeader("apiKey", tokenHeader);
  return client;
};

export const getServicioRecepcionComprasClient = async () => {
  const client = await createServicioRecepcionComprasClient(
    "https://pilotosiatservicios.impuestos.gob.bo/v2/ServicioRecepcionCompras?wsdl",
    {},
  );
  client.addHttpHeader("apiKey", tokenHeader);
  return client;
};

export const getfacturacionDocumentoAjusteClient = async () => {
  const client = await createfacturacionDocumentoAjusteClient(
    "https://pilotosiatservicios.impuestos.gob.bo/v2/FacturacionDocumentoAjuste?wsdl",
    {},
  );
  client.addHttpHeader("apiKey", tokenHeader);
  return client;
};

export const getServicioFacturacionElectronicaClient = async () => {
  const client = await createServicioFacturacionElectronicaClient(
    "https://pilotosiatservicios.impuestos.gob.bo/v2/ServicioFacturacionElectronica?wsdl",
    {},
  );
  client.addHttpHeader("apiKey", tokenHeader);
  return client;
};
