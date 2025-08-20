// services/solicitudes/SolicitudFactory.ts
import { ISolicitudService } from "./ISolicitudService";
import { OrganicoService } from "./OrganicoService";
import { InorganicoService } from "./InorganicoService";
import { PeligrosoService } from "./PeligrosoService";

export class SolicitudFactory {
    static create(tipoResiduo: string): ISolicitudService {
        switch (tipoResiduo) {
            case "organico":
                return new OrganicoService();
            case "inorganico":
                return new InorganicoService();
            case "peligroso":
                return new PeligrosoService();
            default:
                throw new Error("Tipo de residuo no soportado");
        }
    }
}
