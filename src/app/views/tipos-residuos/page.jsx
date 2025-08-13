import React from 'react';

const TiposDeResiduosPage = () => {
  // Datos de ejemplo para la lista de tipos de residuos
  const data = [
    { id: 1, tipo: 'Reciclable' },
    { id: 2, tipo: 'Ejemplo1' },
    { id: 3, tipo: 'Ejemplo2' },
    { id: 4, tipo: 'Ejemplo3' },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen font-sans">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sección izquierda: Lista de Tipos de Residuos */}
        <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tipos De Residuos</h2>
          <div className="space-y-4">
            {data.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-md">
                <span className="text-lg font-medium text-gray-700">{item.tipo}</span>
                <div className="flex space-x-2">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    style={{ backgroundColor: '#017D3D' }} // Color de Editar
                  >
                    Editar
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    style={{ backgroundColor: '#CF1E1E' }} // Color de Eliminar
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
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Módulo Administrador</h2>
          <div className="space-y-4">
            <div className="mb-4">
              <label htmlFor="tiposResiduos" className="block text-sm font-medium text-gray-700">Tipos de Residuos</label>
              <input
                type="text"
                id="tiposResiduos"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">Categoría</label>
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
    </div>
  );
};

export default TiposDeResiduosPage;