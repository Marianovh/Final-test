// plist.tsx
import React, { useState } from "react";

interface FilterFormProps {
  onFilter: (categoria: string, precioMinimo: number) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onFilter }) => {
  const [categoria, setCategoria] = useState<string>("");
  const [precioMinimo, setPrecioMinimo] = useState<number | "">("");

  const filtrarProductos = () => {
    onFilter(categoria, precioMinimo === "" ? 0 : +precioMinimo);
  };

  return (
    <div className="p-4 shadow">
      <h2 className="text-xl font-semibold mb-4">Filtro</h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-row items-center gap-4 gap-8 columns-3"
      >
        <div className="basis-1/4 items-center">
          <label htmlFor="categoria" className="text-gray-700 font-semibold">
            Categoría:
          </label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-3/4 ml-5 border p-2 rounded shadow"
          >
            {/* Opciones de categoría aquí */}
          </select>
        </div>

        <div className="basis-1/4 items-center">
          <label htmlFor="precioMinimo" className="text-gray-700 font-semibold">
            Precio mínimo:
          </label>
          <input
            type="number"
            id="precioMinimo"
            value={precioMinimo}
            onChange={(e) => setPrecioMinimo(e.target.value)}
            className="w-3/4 border p-2 ml-5 rounded shadow"
          />
        </div>

        <div className="w-full sm:w-1/2 md:w-1/5 lg:w-1/8">
          <button
            onClick={filtrarProductos}
            className="md:w-1/2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Filtrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
