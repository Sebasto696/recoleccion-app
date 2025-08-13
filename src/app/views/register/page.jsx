"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = (e) => {
        e.preventDefault();

        const userData = { email, password };
        localStorage.setItem("user", JSON.stringify(userData));

        alert("✅ Usuario registrado con éxito");
        router.push("/views/login");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registrarse</h2>

                <form className="space-y-4" onSubmit={handleRegister}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 placeholder:text-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 placeholder:text-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
                        <input
                            type="text"
                            placeholder="Nombre de usuario"
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 placeholder:text-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 placeholder:text-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
                        <input
                            type="password"
                            placeholder="Confirmar contraseña"
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 placeholder:text-gray-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#3a5f6f] text-white py-2 rounded-md hover:bg-blue-800 transition"
                    >
                        Registrarse
                    </button>
                </form>

                {/* Opción para iniciar sesión */}
                <p className="mt-4 text-center text-sm text-gray-600">
                    ¿Ya tienes cuenta?{" "}
                    <button
                        onClick={() => router.push("/views/login")}
                        className="text-[#3a5f6f] hover:underline"
                    >
                        Inicia sesión
                    </button>
                </p>
            </div>
        </div>
    );
}
