"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Verificamos que los campos no estén vacíos
        if (!email || !password) {
            alert("⚠️ Todos los campos son obligatorios");
            return;
        }

        const userData = { correo: email, contrasena: password };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/usuarios/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();

                localStorage.setItem("token", data.token);

                alert("✅ Inicio de sesión exitoso");
                router.push("/views/dashboard");
            } else {
                const errorData = await response.json();
                alert(`❌ Error al iniciar sesión: ${errorData.mensaje || "Usuario o contraseña incorrectos"}`);
            }
        } catch (error) {
            alert("❌ Hubo un error de conexión al servidor.");
            console.error("Error de red:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Iniciar sesión
                </h2>

                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="mt-1 text-black  w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 placeholder:text-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                            className="mt-1 text-black w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 placeholder:text-gray-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#3a5f6f] text-white py-2 rounded-md hover:bg-blue-800 transition"
                    >
                        Iniciar sesión
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    ¿No tienes cuenta?{" "}
                    <button
                        onClick={() => router.push("/views/register")}
                        className="text-[#3a5f6f] hover:underline"
                    >
                        Regístrate aquí
                    </button>
                </p>
            </div>
        </div>
    );
}
