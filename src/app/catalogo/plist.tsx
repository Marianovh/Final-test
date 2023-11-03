// plist.tsx
import React, { useState } from "react";
import ProductList from "./pfilter";
interface FilterFormProps {
  onFilter: (marca: string, precioMinimo: number) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onFilter }) => {
  const [marca, setMarca] = useState<string>("");
  const [precioMinimo, setPrecioMinimo] = useState<number | "">(0);
  const marcasDisponibles = ["ASUS", "CORSAIR", "LOGITECH"];
  const filtrarProductos = () => {
    // Si no se ha seleccionado una marca o el precio mínimo es 0, muestra todos los productos
    onFilter(marca, precioMinimo === "" ? 0 : +precioMinimo);
  };

  return (
    <div className="p-4 shadow">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-row items-center gap-4 gap-8 columns-3"
      >
        <div className="basis-1/4 items-center">
          <label htmlFor="marca" className="text-gray-100 font-semibold">
            Marca:
          </label>
          <select
            id="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            className="w-3/4 ml-5 border p-2 rounded shadow text-gray-800"
          >
            <option value="">Todos</option>
            {marcasDisponibles.map((marca, index) => (
              <option key={index} value={marca}>
                {marca.toString()}
              </option>
            ))}
          </select>
        </div>

        <div className="basis-1/4 items-center">
          <label htmlFor="precioMinimo" className="text-gray-100 font-semibold">
            Precio mínimo:
          </label>
          <input
            type="number"
            id="precioMinimo"
            value={precioMinimo}
            onChange={(e) => setPrecioMinimo(parseInt(e.target.value, 10))}
            className="w-3/4 border p-2 ml-5 rounded shadow text-gray-800"
            min={0}
          />
        </div>

        <div className="w-full sm:w-1/2 md:w-1/5 lg:w-1/8">
          <button
            onClick={filtrarProductos}
            className="md:w-1/2 bg-indigo-500 text-white px-4 py-2 rounded hover-bg-blue-700"
          >
            Filtrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
