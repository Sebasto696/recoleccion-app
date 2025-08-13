import React from 'react';

const UsuariosPage = () => {
  // Datos de ejemplo para la tabla de usuarios
  const usuarios = [
    { nombre: 'Máximo Décimo Meridio', correo: 'riveraleo11@gmail.com', telefono: '123455', rol: 'Usuario', estado: 'Activo' },
    { nombre: 'Máximo Décimo Meridio', correo: 'riveraleo11@gmail.com', telefono: '123455', rol: 'Usuario', estado: 'Activo' },
    { nombre: 'Máximo Décimo Meridio', correo: 'riveraleo11@gmail.com', telefono: '123455', rol: 'Usuario', estado: 'Activo' },
    { nombre: 'Máximo Décimo Meridio', correo: 'riveraleo11@gmail.com', telefono: '123455', rol: 'Usuario', estado: 'Activo' },
    { nombre: 'Máximo Décimo Meridio', correo: 'riveraleo11@gmail.com', telefono: '123455', rol: 'Usuario', estado: 'Activo' },
    { nombre: 'Máximo Décimo Meridio', correo: 'riveraleo11@gmail.com', telefono: '123455', rol: 'Usuario', estado: 'Activo' },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen font-sans">
      {/* Encabezado y barra de búsqueda */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-900">Visualizar Usuarios</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-4 pr-10 py-2 border rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Tabla de datos */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 table-auto">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                Nombre completo
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                Correo
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                Telefono
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                Rol
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5">
                Estado
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {usuarios.map((usuario, index) => (
              <tr key={index}>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 12a1 1 0 11-2 0 1 1 0 012 0zM3 22a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                    <span>{usuario.nombre}</span>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {usuario.correo}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {usuario.telefono}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {usuario.rol}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  {usuario.estado}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    className="inline-block px-4 py-2 text-sm font-medium text-white rounded-md"
                    style={{ backgroundColor: '#017D3D' }}
                  >
                    Editar
                  </button>
                  <button
                    className="inline-block px-4 py-2 text-sm font-medium text-white rounded-md ml-2"
                    style={{ backgroundColor: '#CF1E1E' }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsuariosPage;
