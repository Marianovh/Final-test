// productos.tsx
import React from "react";

interface Product {
  id: number;
  categoria: string;
  precio: number;
  _id: number;
  nombre: string;
  marca: string;
  disponibilidad: number;
  descuento: number;
  preciodescuento: number;
  imagen: string;
  descripcion: string;
  cantidad: number;
  Identificador: number;
  Disponibilidad: string;
}

interface ProductListProps {
  productos: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ productos }) => {
  return (
    <div>
      <h1 className="text-2xl text-gray-100  font-semibold mb-4">
        Lista de Productos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productos.map((producto) => (
          <div key={producto.id} className="card rounded p-4 shadow mb-5">
            <h2 className="text-lg text-gray-500 font-semibold">
              {producto.nombre}
            </h2>
            <p className="text-gray-500">Categoría: {producto.marca}</p>
            <p className="text-green-600">
              Precio: ${producto.preciodescuento}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
