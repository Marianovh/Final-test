// productos.tsx
import React from "react";

interface Product {
  ID: number;
  nombre: string;
  marca: string;
  precio: number;
  descuento: number;
  preciodescuento: number;
  imagen: string;
  descripcion: string;
  cantidad: number;
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
          <div key={producto.ID} className="card rounded p-4 shadow mb-5">
            <center>
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-60 h-60 object-cover mb-2" // Estilo de la imagen
              />
            </center>

            <h2 className="text-lg text-gray-500 font-semibold">
              {producto.nombre}
            </h2>
            <p className="text-gray-500">Categoría: {producto.marca}</p>
            <p className="text-green-600">
              Precio: Q.{producto.preciodescuento}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
