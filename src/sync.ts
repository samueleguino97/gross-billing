import { Hono } from "hono";
import { db } from "./lib/db";
import { getFacturacionSincronizacionClient } from "./lib/facturacion";
const app = new Hono();
app.get("/sync/citypes", async (c) => {
  const client = await getFacturacionSincronizacionClient();
  await client.verificarComunicacionAsync({});
  const cuis = await db.execute(
    "SELECT * FROM cuis where datetime(untilDate) > datetime()",
  );

  const result = await client.sincronizarParametricaTipoDocumentoIdentidadAsync(
    {
      SolicitudSincronizacion: {
        codigoSistema: process.env.SIAT_SYSTEM_CODE,
        nit: process.env.SIAT_NIT,
        cuis: cuis.rows[0].code?.toString(),
        codigoAmbiente: process.env.SIAT_ENV,
        codigoPuntoVenta: "0",
        codigoSucursal: "0",
      },
    },
  );
  return c.json(result);
});
app.get("/sync/units", async (c) => {
  const client = await getFacturacionSincronizacionClient();
  await client.verificarComunicacionAsync({});
  const cuis = await db.execute(
    "SELECT * FROM cuis where datetime(untilDate) > datetime()",
  );

  const result = await client.sincronizarParametricaUnidadMedidaAsync({
    SolicitudSincronizacion: {
      codigoSistema: process.env.SIAT_SYSTEM_CODE,
      nit: process.env.SIAT_NIT,
      cuis: cuis.rows[0].code?.toString(),
      codigoAmbiente: process.env.SIAT_ENV,
      codigoPuntoVenta: "0",
      codigoSucursal: "0",
    },
  });
  return c.json(result);
});

app.get("/sync/activities", async (c) => {
  const client = await getFacturacionSincronizacionClient();
  await client.verificarComunicacionAsync({});
  const cuis = await db.execute(
    "SELECT * FROM cuis where datetime(untilDate) > datetime()",
  );

  const result = await client.sincronizarParametricaActividadEconomicaAsync({
    SolicitudSincronizacion: {
      codigoSistema: process.env.SIAT_SYSTEM_CODE,
      nit: process.env.SIAT_NIT,
      cuis: cuis.rows[0].code?.toString(),
      codigoAmbiente: process.env.SIAT_ENV,
      codigoPuntoVenta: "0",
      codigoSucursal: "0",
    },
  });
  return c.json(result);
});

app.get("/sync/iva", async (c) => {
  const client = await getFacturacionSincronizacionClient();
  await client.verificarComunicacionAsync({});
  const cuis = await db.execute(
    "SELECT * FROM cuis where datetime(untilDate) > datetime()",
  );

  const result = await client.sincronizarParametricaIVAAsync({
    SolicitudSincronizacion: {
      codigoSistema: process.env.SIAT_SYSTEM_CODE,
      nit: process.env.SIAT_NIT,
      cuis: cuis.rows[0].code?.toString(),
      codigoAmbiente: process.env.SIAT_ENV,
      codigoPuntoVenta: "0",
      codigoSucursal: "0",
    },
  });
  return c.json(result);
});

app.get("/sync/iva", async (c) => {
  const client = await getFacturacionSincronizacionClient();
  await client.verificarComunicacionAsync({});
  const cuis = await db.execute(
    "SELECT * FROM cuis where datetime(untilDate) > datetime()",
  );

  const result = await client.sincronizarParametricaIVAAsync({
    SolicitudSincronizacion: {
      codigoSistema: process.env.SIAT_SYSTEM_CODE,
      nit: process.env.SIAT_NIT,
      cuis: cuis.rows[0].code?.toString(),
      codigoAmbiente: process.env.SIAT_ENV,
      codigoPuntoVenta: "0",
      codigoSucursal: "0",
    },
  });
  return c.json(result);
});

app.get("/sync/time", async (c) => {
  const client = await getFacturacionSincronizacionClient();
  await client.verificarComunicacionAsync({});
  const cuis = await db.execute(
    "SELECT * FROM cuis where datetime(untilDate) > datetime()",
  );

  const result = await client.sincronizarParametricaHoraFechaAsync({
    SolicitudSincronizacion: {
      codigoSistema: process.env.SIAT_SYSTEM_CODE,
      nit: process.env.SIAT_NIT,
      cuis: cuis.rows[0].code?.toString(),
      codigoAmbiente: process.env.SIAT_ENV,
      codigoPuntoVenta: "0",
      codigoSucursal: "0",
    },
  });
  return c.json(result);
});

app.get("/sync/legend", async (c) => {
  const client = await getFacturacionSincronizacionClient();
  await client.verificarComunicacionAsync({});
  const cuis = await db.execute(
    "SELECT * FROM cuis where datetime(untilDate) > datetime()",
  );

  const result = await client.sincronizarParametricaLeyendaAsync({
    SolicitudSincronizacion: {
      codigoSistema: process.env.SIAT_SYSTEM_CODE,
      nit: process.env.SIAT_NIT,
      cuis: cuis.rows[0].code?.toString(),
      codigoAmbiente: process.env.SIAT_ENV,
      codigoPuntoVenta: "0",
      codigoSucursal: "0",
    },
  });
  return c.json(result);
});

app.get("/sync/operation", async (c) => {
  const client = await getFacturacionSincronizacionClient();
  await client.verificarComunicacionAsync({});
  const cuis = await db.execute(
    "SELECT * FROM cuis where datetime(untilDate) > datetime()",
  );

  const result = await client.sincronizarParametricaOperacionAsync({
    SolicitudSincronizacion: {
      codigoSistema: process.env.SIAT_SYSTEM_CODE,
      nit: process.env.SIAT_NIT,
      cuis: cuis.rows[0].code?.toString(),
      codigoAmbiente: process.env.SIAT_ENV,
      codigoPuntoVenta: "0",
      codigoSucursal: "0",
    },
  });
  return c.json(result);
});
