"use client";
// filter.tsx
import React, { useEffect, useState } from "react";
import ProductList from "./pfilter";
import FilterForm from "./plist";

interface Product {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
}

const FilterApp: React.FC = () => {
  const [productos, setProductos] = useState<Product[]>([]); // Todos los productos
  const [productosFiltrados, setProductosFiltrados] = useState<Product[]>([]); // Productos filtrados

  useEffect(() => {
    // Realiza una solicitud a la API y carga los productos en productos
  }, []);

  const filtrarProductos = (categoria: string, precioMinimo: number) => {
    // Aplicar lógica de filtro a productos y actualizar productosFiltrados
  };

  return (
    <div className="flex items-center justify-center mt-3 ml-5 mr-5">
      <div className="max-w-12 w-full">
        <div className="min-h-screen ">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Productos
          </h2>
          <FilterForm onFilter={filtrarProductos} />
          <ProductList productos={productosFiltrados} />
        </div>
      </div>
    </div>
  );
};

export default FilterApp;
