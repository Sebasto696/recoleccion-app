"use client";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import './calendar-dark.css';
import { useRouter } from "next/navigation";


export default function Dashboard() {
    const [usuario, setUsuario] = useState("sebastian");
    const [puntos, setPuntos] = useState(150);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        // Aquí podrías traer el nombre real del usuario desde una API o localStorage
        const nombreGuardado = localStorage.getItem("nombreUsuario");
        if (nombreGuardado) setUsuario(nombreGuardado);
    }, []);

    const handleProgramar = () => {
        //alert("Función para programar recolección 📅");
        router.push("/views/recoleccion");
    };

    const handleCanjear = () => {
        alert("Puntos canjeados 🎉");
    };

    const handleReporte = () => {
        alert("Reporte generado 📄");
    };

    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Barra superior */}
            <header className="flex items-center p-4 bg-gray-200 shadow">
                <button className="text-gray-700 text-2xl">☰</button>
                <h1 className="text-3xl  pl-5 font-bold text-black">Bienvenido, {usuario}</h1>
            </header>

            {/* Contenido */}
            <main className="p-6">
                {/* Botón calendario */}
                <div className="flex justify-center mb-6">

                </div>

                {/* Secciones */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Calendario */}
                    <div className="bg-white p-4 rounded-lg shadow flex flex-col items-center">
                        <button className="bg-[#3a5f6f] text-white px-6 py-2 rounded-md shadow hover:opacity-90 mb-5">
                            Calendario de recolección
                        </button>
                        <Calendar
                            onChange={setDate}
                            value={date}
                            className="w-full border-0"
                        />
                    </div>

                    {/* Programar recolección */}
                    <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-semibold text-black mb-4 text-center">Programar recolección</h2>
                        <button
                            onClick={handleProgramar}
                            className="bg-[#3a5f6f] text-white px-4 py-2 rounded-md hover:opacity-90"
                        >
                            Programar
                        </button>
                    </div>

                    {/* Canjear puntos */}
                    <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-between">
                        <h2 className="text-2xl font-bold text-black">{puntos} pts</h2>
                        <button
                            onClick={handleCanjear}
                            className="bg-[#3a5f6f] text-white px-4 py-2 rounded-md hover:opacity-90"
                        >
                            Canjear Puntos
                        </button>
                    </div>

                    {/* Generar reporte */}
                    <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-between">
                        <h2 className="text-2xl font-semibold text-black">Generar Reporte</h2>
                        <button
                            onClick={handleReporte}
                            className="bg-[#3a5f6f] text-white px-4 py-2 rounded-md hover:opacity-90"
                        >
                            Generar
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
