import type { ServicioFacturacionPort } from "../ports/ServicioFacturacionPort";

export interface ServicioRecepcionCompras {
    readonly ServicioFacturacionPort: ServicioFacturacionPort;
}
