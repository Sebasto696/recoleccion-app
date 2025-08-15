"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormRecoleccion() {
    const [tipoResiduo, setTipoResiduo] = useState("");
    const router = useRouter();

    return (
        <div className="max-w-3xl mx-auto p-6">
            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mb-4">
                <span className="cursor-pointer hover:underline" onClick={() => router.push('/views/dashboard')}>Inicio</span> / <span className="text-gray-700">Formulario Solicitud Recolección</span>
            </p>

            <form className="bg-white rounded-lg p-6 shadow-sm space-y-6">
                {/* Tipo de Residuo */}
                <div>
                    <label className="block text-gray-700 mb-1">Tipo de Residuo</label>
                    <select
                        value={tipoResiduo}
                        onChange={(e) => setTipoResiduo(e.target.value)}
                        className="w-full text-black  bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
                    >
                        <option value="">Seleccione...</option>
                        <option value="organico">Orgánico</option>
                        <option value="inorganico">Inorgánico Reciclable</option>
                        <option value="peligroso">Peligroso</option>
                    </select>
                </div>

                {/* Localidad */}
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

                {/* Dirección */}
                <div>
                    <label className="block text-gray-700 mb-1">Dirección</label>
                    <input
                        type="text"
                        placeholder="Ingrese su dirección"
                        className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
                    />
                </div>

                {/* Campos condicionales */}
                {tipoResiduo === "inorganico" && (
                    <>
                        <div>
                            <label className="block text-gray-700 mb-1">Frecuencia</label>
                            <select
                                className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
                            >
                                <option value="">Seleccione...</option>
                                <option value="1">1 vez por semana</option>
                                <option value="2">2 veces por semana</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Modalidad</label>
                            <select
                                className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
                            >
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

                {/* Fecha inicio */}
                <div>
                    <label className="block text-gray-700 mb-1">
                        Fecha de inicio de recolección
                    </label>
                    <input
                        type="date"
                        className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
                    />
                </div>

                {/* Observaciones */}
                <div>
                    <label className="block text-gray-700 mb-1">Observaciones</label>
                    <textarea
                        placeholder="Información adicional"
                        className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
                    />
                </div>

                {/* Botones */}
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
