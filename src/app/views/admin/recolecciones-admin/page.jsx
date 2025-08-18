"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SolicitudRecoleccionPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Datos de ejemplo para la tabla
  const data = [
    { fecha: "25-03-2020", tipo: "Orgánico", kilos: 9, estado: "Pendiente" },
    { fecha: "25-03-2020", tipo: "Reciclable", kilos: 23, estado: "Pendiente" },
    { fecha: "25-03-2020", tipo: "Orgánico", kilos: 22, estado: "Pendiente" },
    { fecha: "25-03-2020", tipo: "Reciclable", kilos: 43, estado: "Pendiente" },
    { fecha: "25-03-2020", tipo: "Orgánico", kilos: 21, estado: "Pendiente" },
    { fecha: "25-03-2020", tipo: "Orgánico", kilos: 11, estado: "Pendiente" },
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
            Historial Recolecciones
          </h1>
        </header>

        {/* Main */}
        <main className="p-6">
          {/* Encabezado y barra de búsqueda */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Lista de Recolecciones
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-4 pr-10 py-2 border rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Tabla de datos */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 table-auto">
              <thead className="bg-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                    Fecha Recolección
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                    Tipo de Residuos
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                    Kilos
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                    Estado
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.fecha}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.tipo}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.kilos}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {item.estado}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mx-2">
                        Editar
                      </button>
                      <button className="text-red-600 hover:text-red-900 mx-2">
                        Desactivar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Paginación */}
          <div className="flex justify-center mt-6">
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-l-md"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                67
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-r-md"
              >
                68
              </a>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SolicitudRecoleccionPage;
