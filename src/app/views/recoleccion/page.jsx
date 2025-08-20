"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FormRecoleccion() {
  const [tipoResiduo, setTipoResiduo] = useState("");
  const [kilosInorganicos, setKilosInorganicos] = useState("");
  const [localidades, setLocalidades] = useState([]);
  const [localidadSeleccionada, setLocalidadSeleccionada] = useState("");
  const [cargandoLocalidades, setCargandoLocalidades] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const cargarLocalidades = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/localidades`);
        if (!response.ok) {
          console.error("Error al cargar localidades:", response.status);
          alert("❌ No se pudieron cargar las localidades");
          return;
        }

        const data = await response.json();

        const normalizadas = (Array.isArray(data) ? data : []).map((item, idx) => {
          if (typeof item === "string") {
            return { id: idx + 1, nombre: item };
          }
          if (item && typeof item === "object") {
            const id = item.localidadId ?? item.id ?? idx + 1;
            const nombre =
              item.nombre ??
              item.name ??
              item.titulo ??
              String(item);
            return { id, nombre };
          }
          return { id: idx + 1, nombre: String(item) };
        });
        setLocalidades(normalizadas);
      } catch (error) {
        console.error("Error de conexión al cargar localidades:", error);
        alert("❌ Error de conexión al cargar localidades");
      } finally {
        setCargandoLocalidades(false);
      }
    };

    cargarLocalidades();
  }, []);

  const handleTipoResiduoChange = (e) => {
    const nuevoTipo = e.target.value;
    setTipoResiduo(nuevoTipo);
    
    // Limpiar kilos si no es inorgánico
    if (nuevoTipo !== "Inorgánico") {
      setKilosInorganicos("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!tipoResiduo) {
      alert("⚠️ Por favor, seleccione un tipo de residuo.");
      return;
    }

    if (tipoResiduo === "Inorgánico" && !kilosInorganicos) {
      alert("⚠️ Por favor, ingrese los kilos de residuos.");
      return;
    }

    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token) {
      alert("❌ No estás autenticado. Por favor, inicia sesión.");
      router.push("/views/login");
      return;
    }

    const requestBody = {
      tipoResiduo,
      kilosInorganicos: tipoResiduo === "Inorgánico" ? parseFloat(kilosInorganicos) : undefined,
      localidad: localidadSeleccionada || undefined,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/solicitudes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`✅ Solicitud creada con éxito. ${data.numeroTurno ? `Turno asignado: ${data.numeroTurno}` : ''}`);
        router.push("/views/dashboard");
      } else {
        const errorData = await response.json();
        alert(`❌ Error al crear la solicitud: ${errorData.mensaje || "Error desconocido"}`);
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("❌ Hubo un error de conexión al servidor.");
    }
  };


  return (
    <div className="max-w-3xl mx-auto p-6">
      <p className="text-sm text-gray-500 mb-4">
        <span className="cursor-pointer hover:underline" onClick={() => router.push('/views/dashboard')}>Inicio</span> / <span className="text-gray-700">Formulario Solicitud Recolección</span>
      </p>

      <form className="bg-white rounded-lg p-6 shadow-sm space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 mb-1">Tipo de Residuo</label>
          <select
            value={tipoResiduo}
            onChange={handleTipoResiduoChange}
            className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
          >
            <option value="">Seleccione...</option>
            <option value="Orgánico">Orgánico</option>
            <option value="Inorgánico">Inorgánico Reciclable</option>
            <option value="Peligroso">Peligroso</option>
          </select>
        </div>

        {tipoResiduo === "Inorgánico" && (
          <div>
            <label className="block text-gray-700 mb-1">Kilos Inorgánicos</label>
            <input
              type="number"
              step="0.1"
              value={kilosInorganicos}
              onChange={(e) => {
                setKilosInorganicos(e.target.value);
              }}
              placeholder="Ingrese los kilos"
              className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
            />
          </div>
        )}

        {/* Localidad */}
        <div>
          <label className="block text-gray-700 mb-1">Localidad</label>
          <select
            value={localidadSeleccionada}
            onChange={(e) => setLocalidadSeleccionada(e.target.value)}
            className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
            disabled={cargandoLocalidades}
          >
            {cargandoLocalidades ? (
              <option value="">Cargando localidades...</option>
            ) : (
              <>
                <option value="">Seleccione su localidad</option>
                {localidades.map((loc) => (
                  <option key={loc.id} value={loc.nombre}>
                    {loc.nombre}
                  </option>
                ))}
              </>
            )}
          </select>

          {!cargandoLocalidades && localidades.length === 0 && (
            <p className="text-red-500 text-sm mt-1">⚠️ No se pudieron cargar las localidades</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Dirección</label>
          <input
            type="text"
            placeholder="Ingrese su dirección"
            className="w-full text-black bg-gray-100 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3a5f6f]"
          />
        </div>

        {/* Campos condicionales - Solo mensajes informativos */}
        {tipoResiduo === "Peligroso" && (
          <p className="text-sm text-gray-500">
            La recolección de residuos peligrosos se realiza <b>1 vez al mes</b>.
          </p>
        )}

        {tipoResiduo === "Orgánico" && (
          <p className="text-sm text-gray-500">
            La recolección de residuos orgánicos se asigna automáticamente según su localidad.
          </p>
        )}

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
