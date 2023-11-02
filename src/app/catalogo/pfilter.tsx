// productos.tsx
import React from "react";

interface Product {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
}

interface ProductListProps {
  productos: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ productos }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Lista de Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-white rounded p-4 shadow">
            <h2 className="text-lg font-semibold">{producto.nombre}</h2>
            <p className="text-gray-500">Categoría: {producto.categoria}</p>
            <p className="text-green-600">Precio: ${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
