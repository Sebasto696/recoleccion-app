// services/auth/RestAuthService.ts
import { IAuthService } from "./Auth";

export class RestAuthService implements IAuthService {
    async login(email: string, password: string): Promise<{ token: string }> {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/usuarios/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ correo: email, contrasena: password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.mensaje || "Usuario o contraseña incorrectos");
        }

        return response.json();
    }
}
