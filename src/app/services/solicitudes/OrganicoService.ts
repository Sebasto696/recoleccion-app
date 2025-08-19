// services/solicitudes/OrganicoService.ts
import { ISolicitudService } from "./ISolicitudService";

export class OrganicoService implements ISolicitudService {
  buildRequestBody(data: any) {
    return {
      tipoResiduo: "organico",
    };
  }
}
