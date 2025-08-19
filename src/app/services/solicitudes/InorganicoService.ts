// services/solicitudes/InorganicoService.ts
import { ISolicitudService } from "./ISolicitudService";

export class InorganicoService implements ISolicitudService {
  buildRequestBody(data: any) {
    if (!data.kilosInorganicos) {
      throw new Error("⚠️ Debe ingresar los kilos de residuos inorgánicos");
    }
    return {
      tipoResiduo: "inorganico",
      kilosInorganicos: parseFloat(data.kilosInorganicos),
    };
  }
}
