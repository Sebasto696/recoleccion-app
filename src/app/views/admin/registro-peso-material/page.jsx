"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RegistroPesoMaterialPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [peso, setPeso] = useState("");
  const [tipoResiduo, setTipoResiduo] = useState("");

  const router = useRouter();

  const solicitudes = [
    { id: 1, fecha: "18-03-2025" },
    { id: 2, fecha: "18-03-2025" },
    { id: 3, fecha: "18-03-2025" },
    { id: 4, fecha: "18-03-2025" },
  ];

  // Manejo del submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!peso || !tipoResiduo) {
      alert("⚠️ Debes llenar todos los campos");
      return;
    }

    alert("✅ Registro exitoso");

    // limpiar los campos
    setPeso("");
    setTipoResiduo("");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-[#3a5f6f] text-white w-64 p-4 space-y-6 fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
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
          <h1 className="text-2xl pl-5 font-bold text-black">
            Registro peso de material
          </h1>
        </header>

        {/* Main */}
        <main className="p-6 flex flex-col lg:flex-row gap-6">
          {/* Lista de solicitudes */}
          <div className="flex-1 bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Solicitud activa</h2>
            <div className="space-y-3">
              {solicitudes.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between border rounded-lg p-3"
                >
                  <span className="text-gray-900">{s.fecha}</span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded">
                    Seleccionar
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div className="w-full lg:w-1/3 bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Registrar datos</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Peso:
                </label>
                <input
                  type="number"
                  placeholder="Registrar peso"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tipo de residuo:
                </label>
                <select
                  value={tipoResiduo}
                  onChange={(e) => setTipoResiduo(e.target.value)}
                  className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                >
                  <option value="">Seleccionar</option>
                  <option value="Organico">Orgánico</option>
                  <option value="Reciclable">Reciclable</option>
                  <option value="Peligroso">Peligroso</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3a5f6f] hover:bg-[#2f4d59] text-white py-2 rounded"
              >
                Registrar
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RegistroPesoMaterialPage;
