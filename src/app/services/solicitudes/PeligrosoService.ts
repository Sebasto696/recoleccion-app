// services/solicitudes/PeligrosoService.ts
import { ISolicitudService } from "./ISolicitudService";

export class PeligrosoService implements ISolicitudService {
    buildRequestBody(data: any) {
        return {
            tipoResiduo: "peligroso",

        };
    }
}
