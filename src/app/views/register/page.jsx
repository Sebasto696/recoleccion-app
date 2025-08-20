"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (contrasena !== confirmarContrasena) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        const userData = {
            nombre: nombre,
            correo: email,
            telefono: telefono,
            contrasena: contrasena,
            rol: "Usuario",
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/usuarios/registro`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                alert("✅ Usuario registrado con éxito.");
                router.push("/views/login");
            } else {
                const errorData = await response.json();
                alert(`Error al registrar: ${errorData.mensaje || "Error desconocido"}`);
            }
        } catch (error) {
            alert("❌ Hubo un error de conexión al servidor.");
            console.error("Error de red:", error);
        }
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
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="mt-1 w-full border border-gray-300 text-black rounded-md p-2 focus:ring focus:ring-blue-200 placeholder:text-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="mt-1 w-full border border-gray-300 text-black rounded-md p-2 focus:ring focus:ring-blue-200 placeholder:text-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                        <input
                            type="text"
                            placeholder="Teléfono"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            className="mt-1 w-full border border-gray-300 text-black rounded-md p-2 focus:ring focus:ring-blue-200 placeholder:text-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            placeholder="Contraseña"
                            className="mt-1 w-full border border-gray-300 text-black rounded-md p-2 focus:ring focus:ring-blue-200 placeholder:text-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
                        <input
                            type="password"
                            value={confirmarContrasena}
                            onChange={(e) => setConfirmarContrasena(e.target.value)}
                            placeholder="Confirmar contraseña"
                            className="mt-1 w-full border border-gray-300 text-black rounded-md p-2 focus:ring focus:ring-blue-200 placeholder:text-gray-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#3a5f6f] text-white py-2 rounded-md hover:bg-blue-800 transition"
                    >
                        Registrarse
                    </button>
                </form>

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
