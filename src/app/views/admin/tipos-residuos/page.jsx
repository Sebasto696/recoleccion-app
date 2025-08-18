"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

const TiposDeResiduosPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Datos de ejemplo para la lista de tipos de residuos
  const data = [
    { id: 1, tipo: "Reciclable" },
    { id: 2, tipo: "Ejemplo1" },
    { id: 3, tipo: "Ejemplo2" },
    { id: 4, tipo: "Ejemplo3" },
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
          <button
            onClick={() => router.push("/views/admin/dashboard-admin")}
            className="text-left hover:bg-gray-700 p-2 rounded"
          >
            📊 Dashboard
          </button>
          <button
            onClick={() => router.push("/views/admin/tipos-residuos")}
            className="text-left hover:bg-gray-700 p-2 rounded"
          >
            ♻️ Tipos de Residuos
          </button>
          <button
            onClick={() => router.push("/views/admin/ver-usuarios")}
            className="text-left hover:bg-gray-700 p-2 rounded"
          >
            👤 Ver Usuarios
          </button>
          <button
            onClick={() => router.push("/views/admin/recolecciones-admin")}
            className="text-left hover:bg-gray-700 p-2 rounded"
          >
            📋 Ver Recolecciones
          </button>
           <button
            onClick={() => router.push("/views/admin/registro-peso-material")}
            className="text-left hover:bg-gray-700 p-2 rounded"
          >
            ⚖️ Registro Peso Material
          </button>
        </nav>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center p-4 bg-gray-200 shadow">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 text-2xl"
          >
            ☰
          </button>
          <h1 className="text-3xl pl-5 font-bold text-black">
            Tipos de Residuos
          </h1>
        </header>

        {/* Main */}
        <main className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sección izquierda: Lista de Tipos de Residuos */}
            <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Lista de Tipos de Residuos
              </h2>
              <div className="space-y-4">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 border rounded-md"
                  >
                    <span className="text-lg font-medium text-gray-700">
                      {item.tipo}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        className="px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        style={{ backgroundColor: "#017D3D" }}
                      >
                        Editar
                      </button>
                      <button
                        className="px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        style={{ backgroundColor: "#CF1E1E" }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sección derecha: Formulario de creación */}
            <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Crear nuevo tipo
              </h2>
              <div className="space-y-4">
                <div className="mb-4">
                  <label
                    htmlFor="tiposResiduos"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tipo de Residuo
                  </label>
                  <input
                    type="text"
                    id="tiposResiduos"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="categoria"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Categoría
                  </label>
                  <input
                    type="text"
                    id="categoria"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Crear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TiposDeResiduosPage;
