import { Hono } from "hono";
import {
  getFacturacionCodigosClient,
  getFacturacionOperacionesClient,
} from "./lib/facturacion";
import { db } from "./lib/db";
import dayjs = require("dayjs");
const app = new Hono();
app.get("pos-list", async (c) => {
  const activeCuis = await db.execute(
    "SELECT * FROM cuis where datetime(untilDate) > datetime()",
  );
  const client = await getFacturacionOperacionesClient();
  const [result] = await client.consultaPuntoVentaAsync({
    SolicitudConsultaPuntoVenta: {
      codigoSistema: process.env.SIAT_SYSTEM_CODE,
      nit: process.env.SIAT_NIT,
      codigoAmbiente: process.env.SIAT_ENV,
      codigoSucursal: "0",
      cuis: activeCuis.rows[0].code?.toString(),
    },
  });
  return c.json(result);
});
app.get("register-pos", async (c) => {
  const activeCuis = await db.execute(
    "SELECT * FROM cuis where datetime(untilDate) > datetime()",
  );
  const client = await getFacturacionOperacionesClient();
  const result = await client.registroPuntoVentaAsync({
    SolicitudRegistroPuntoVenta: {
      codigoSistema: process.env.SIAT_SYSTEM_CODE,
      nit: process.env.SIAT_NIT,
      codigoAmbiente: process.env.SIAT_ENV,
      codigoSucursal: "0",
      codigoTipoPuntoVenta: "5",
      codigoModalidad: process.env.SIAT_MODE,
      cuis: activeCuis.rows[0].code?.toString(),
      descripcion: "Punto de venta de prueba",
      nombrePuntoVenta: "Punto de venta de prueba",
    },
  });
  console.log("result", result);
  return c.json(result);
});
app.get("/cufd", async (c) => {
  const activeCuis = await db.execute(
    "SELECT * FROM cuis where datetime(untilDate) > datetime()",
  );

  const client = await getFacturacionCodigosClient();
  await client.verificarComunicacionAsync({});
  const result = await client.cufdAsync({
    SolicitudCufd: {
      codigoSistema: process.env.SIAT_SYSTEM_CODE,
      nit: process.env.SIAT_NIT,
      codigoAmbiente: process.env.SIAT_ENV,
      codigoSucursal: "0",
      codigoPuntoVenta: "1",
      cuis: activeCuis.rows[0].code?.toString(),
    },
  });
  console.log("Cuis activo", result);

  if (
    !result[0].RespuestaCufd ||
    !result[0].RespuestaCufd.codigo ||
    !result[0].RespuestaCufd.fechaVigencia
  ) {
    return c.json({
      message: "No se pudo obtener el CUFd",
    });
  }
  const untilDate = dayjs(result[0].RespuestaCufd?.fechaVigencia);
  const res = {
    code: result[0].RespuestaCufd?.codigo,

    validUntil: untilDate.toISOString(),
  };

  return c.json(res);
});
app.get("/cuis", async (c) => {
  const activeCuis = await db.execute(
    "SELECT * FROM cuis where datetime(untilDate) > datetime()",
  );

  const isActive = activeCuis.rows.find((item) => {
    if (!item.untilDate) return false;
    return dayjs(item.untilDate?.toString()).isAfter(dayjs());
  });
  if (isActive) {
    return c.json({
      code: isActive.code,
      validUntil: isActive.untilDate,
    });
  }
  const client = await getFacturacionCodigosClient();
  const cuisRequest = {
    SolicitudCuis: {
      codigoSistema: process.env.SIAT_SYSTEM_CODE,
      nit: process.env.SIAT_NIT,
      codigoAmbiente: process.env.SIAT_ENV,
      codigoSucursal: "0",
      codigoModalidad: process.env.SIAT_MODE,
      codigoPuntoVenta: "0",
    },
  };
  await client.verificarComunicacionAsync({});
  const [result] = await client.cuisAsync(cuisRequest);

  if (
    !result.RespuestaCuis ||
    !result.RespuestaCuis.codigo ||
    !result.RespuestaCuis.fechaVigencia
  ) {
    return c.json({
      message: "No se pudo obtener el CUIS",
    });
  }
  const untilDate = dayjs(result.RespuestaCuis?.fechaVigencia);
  const res = {
    code: result.RespuestaCuis?.codigo,
    validUntil: untilDate.toISOString(),
  };

  await db.execute({
    sql: "INSERT INTO cuis (code, untilDate) VALUES (?, ?)",
    args: [res.code, res.validUntil],
  });
  return c.json(res);
});

export default app;
