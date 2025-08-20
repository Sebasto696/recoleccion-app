// services/auth/AuthFactory.ts
import { IAuthService } from "./Auth";
import { RestAuthService } from "./RestAuthServies";

export class AuthFactory {
    static create(): IAuthService {
        const type = process.env.NEXT_PUBLIC_AUTH_TYPE || "rest";
        switch (type) {
            case "rest":
            default:
                return new RestAuthService();
        }
    }
}
