"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormRecoleccion() {
    // 1. Añadimos un estado para los kilos
    const [tipoResiduo, setTipoResiduo] = useState("");
    const [kilosInorganicos, setKilosInorganicos] = useState("");
    const router = useRouter();

    // 2. Creamos la función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 3. Verificamos que se haya seleccionado un tipo de residuo
        if (!tipoResiduo) {
            alert("⚠️ Por favor, seleccione un tipo de residuo.");
            return;
        }

        // Obtenemos el token del localStorage
        const token = localStorage.getItem("token");
        if (!token) {
            alert("❌ No estás autenticado. Por favor, inicia sesión.");
            router.push("/views/login");
            return;
        }

        // Construimos el cuerpo de la petición según el tipo de residuo
        const requestBody = {
            tipoResiduo: tipoResiduo,
        };

        if (tipoResiduo === "inorganico") {
            // Aseguramos que el campo de kilos no esté vacío
            if (!kilosInorganicos) {
                alert("⚠️ Por favor, ingrese los kilos para los residuos inorgánicos.");
                return;
            }
            // Parseamos los kilos a un número con decimales
            requestBody.kilosInorganicos = parseFloat(kilosInorganicos);
        }

        try {
            // 4. Hacemos la llamada a la API con el token en el encabezado
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/solicitudes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`, // ¡Aquí se usa el token!
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                const data = await response.json();
                alert(`✅ Solicitud creada con éxito. Turno asignado: ${data.numeroTurno}`);
                router.push("/views/dashboard");
            } else {
                const errorData = await response.json();
                alert(`❌ Error al crear la solicitud: ${errorData.mensaje || "Error desconocido"}`);
            }
        } catch (error) {
            alert("❌ Hubo un error de conexión al servidor.");
            console.error("Error de red:", error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <p className="text-sm text-gray-500 mb-4">
                <span className="cursor-pointer hover:underline" onClick={() => router.push('/views/dashboard')}>Inicio</span> / <span className="text-gray-700">Formulario Solicitud Recolección</span>
            </p>

            {/* 5. Agregamos el handler de envío al formulario */}
            <form className="bg-white rounded-lg p-6 shadow-sm space-y-6" onSubmit={handleSubmit}>
                {/* Tipo de Residuo */}
                <div>
                    <label className="block text-gray-700 mb-1">Tipo de Residuo</label>
                    <select
                        value={tipoResiduo}
                        onChange={(e) => setTipoResiduo(e.target.value)}
                        className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
                    >
                        <option value="">Seleccione...</option>
                        <option value="organico">Orgánico</option>
                        <option value="inorganico">Inorgánico Reciclable</option>
                        <option value="peligroso">Peligroso</option>
                    </select>
                </div>

                {/* Campo de kilos, solo visible para residuos inorgánicos */}
                {tipoResiduo === "inorganico" && (
                    <div>
                        <label className="block text-gray-700 mb-1">Kilos Inorgánicos</label>
                        <input
                            type="number"
                            step="0.1"
                            value={kilosInorganicos}
                            onChange={(e) => setKilosInorganicos(e.target.value)}
                            placeholder="Ingrese los kilos"
                            className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
                        />
                    </div>
                )}
                
                {/* Nota: Los campos de Localidad, Dirección, etc., no se envían en esta API. */}
                {/* No es necesario capturar sus valores para esta petición en particular. */}
                <div>
                    <label className="block text-gray-700 mb-1">Localidad</label>
                    <select
                        className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
                    >
                        <option value="">Seleccione su localidad</option>
                        <option value="norte">Norte</option>
                        <option value="sur">Sur</option>
                        <option value="centro">Centro</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 mb-1">Dirección</label>
                    <input
                        type="text"
                        placeholder="Ingrese su dirección"
                        className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
                    />
                </div>
                {/* Campos condicionales (no se envían en esta API) */}
                {tipoResiduo === "inorganico" && (
                    <>
                        <div>
                            <label className="block text-gray-700 mb-1">Frecuencia</label>
                            <select className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]">
                                <option value="">Seleccione...</option>
                                <option value="1">1 vez por semana</option>
                                <option value="2">2 veces por semana</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Modalidad</label>
                            <select className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]">
                                <option value="">Seleccione...</option>
                                <option value="programada">Programada</option>
                                <option value="demanda">Por demanda</option>
                            </select>
                        </div>
                    </>
                )}
                {tipoResiduo === "peligroso" && (
                    <p className="text-sm text-gray-500">
                        La recolección de residuos peligrosos se realiza <b>1 vez al mes</b>.
                    </p>
                )}
                {tipoResiduo === "organico" && (
                    <p className="text-sm text-gray-500">
                        La recolección de residuos orgánicos se asigna automáticamente según su localidad.
                    </p>
                )}
                <div>
                    <label className="block text-gray-700 mb-1">Fecha de inicio de recolección</label>
                    <input
                        type="date"
                        className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-1">Observaciones</label>
                    <textarea
                        placeholder="Información adicional"
                        className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
                    />
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        className="text-gray-500 hover:underline"
                        onClick={() => router.push("/views/dashboard")}
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="bg-[#3a5f6f] text-white px-6 py-2 rounded-md hover:bg-[#2f4a59] transition"
                    >
                        Crear Solicitud
                    </button>
                </div>
            </form>
        </div>
    );
}
