"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function DashboardAdmin() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    // Datos de ejemplo para el gráfico
    const data = [
        { name: "Enero", solicitudes: 12 },
        { name: "Febrero", solicitudes: 18 },
        { name: "Marzo", solicitudes: 9 },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`bg-[#3a5f6f] text-white w-64 p-4 space-y-6 fixed inset-y-0 left-0 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                <h2 className="text-2xl font-bold">Admin</h2>
                <nav className="flex flex-col space-y-3">
                    <button onClick={() => router.push("/views/admin/dashboard-admin")} className="text-left hover:bg-gray-700 p-2 rounded">📊 Dashboard</button>
                    <button onClick={() => router.push("/views/admin/tipos-residuos")} className="text-left hover:bg-gray-700 p-2 rounded">♻️ Tipos de Residuos</button>
                    <button onClick={() => router.push("/views/admin/ver-usuarios")} className="text-left hover:bg-gray-700 p-2 rounded">👤 Ver Usuarios</button>
                    <button onClick={() => router.push("/views/admin/recolecciones-admin")} className="text-left hover:bg-gray-700 p-2 rounded">📋 Ver Recolecciones</button>
                    <button onClick={() => router.push("/views/admin/registro-peso-material")} className="text-left hover:bg-gray-700 p-2 rounded">⚖️ Registro Peso Material</button>
                </nav>
            </aside>

            {/* Contenido */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="flex items-center p-4 bg-gray-200 shadow">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 text-2xl"
                    >
                        ☰
                    </button>
                    <h1 className="text-3xl pl-5 font-bold text-black">Panel de Administración</h1>
                </header>

                {/* Main */}
                <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Tarjetas */}
                    <div className="bg-white p-6 rounded-lg shadow text-center">
                        <h2 className="text-xl font-semibold text-black">Usuarios</h2>
                        <p className="text-2xl font-bold text-[#3a5f6f]">5</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow text-center">
                        <h2 className="text-xl font-semibold text-black">Solicitudes</h2>
                        <p className="text-2xl font-bold text-[#3a5f6f]">45</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow text-center">
                        <h2 className="text-xl font-semibold text-black">Residuos clasificados</h2>
                        <p className="text-2xl font-bold text-[#3a5f6f]">320 kg</p>
                    </div>

                    {/* Gráfico */}
                    <div className="bg-white p-6 rounded-lg shadow col-span-1 md:col-span-3">
                        <h2 className="text-xl font-semibold text-black mb-4">Solicitudes por mes</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={data}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="solicitudes" fill="#3a5f6f" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </main>
            </div>
        </div>
    );
}
