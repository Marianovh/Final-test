"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./pfilter";
import FilterForm from "./plist";
import { useRouter } from "next/navigation";

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

const FilterApp: React.FC = () => {
  const router = useRouter();
  const [productos, setProductos] = useState<Product[]>([]); // Todos los productos
  const [productosFiltrados, setProductosFiltrados] = useState<Product[]>([]); // Productos filtrados

  useEffect(() => {
    // Realiza una solicitud a la API y carga los productos en productos
    // const apiUrl = "https://api-2-xgyd.onrender.com/api/productos"; // Reemplaza con la URL de tu API
    const apiUrl = "http://localhost:3000/api/productos"; // Reemplaza con la URL de tu API
    const token = localStorage.getItem("token"); // Obtiene el token del localStorage
    console.log("sis esta almacenado> " + token);
    const fetchProducts = async () => {
      try {
        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };

        if (token) {
          headers["token"] = token;
          // console.log(headers);
        }

        const response = await fetch(apiUrl, {
          method: "GET", // Método de solicitud, ajusta según tu caso
          headers,
        });

        if (!response.ok) {
          throw new Error("Error al cargar productos desde la API");
        }

        const data = await response.json();
        setProductos(data.productos);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const filtrarProductos = (marca: string, precioMinimo: number) => {
    // Aplicar lógica de filtro a productos y actualizar productosFiltrados
    const productosFiltrados = productos.filter((product) => {
      const categoriaValida = marca === "" || product.marca === marca;
      const precioValido = product.preciodescuento >= precioMinimo;
      return categoriaValida && precioValido;
    });

    setProductosFiltrados(productosFiltrados);
  };
  const cerrarSesion = () => {
    // Borra el token del localStorage
    localStorage.removeItem("token");
    router.replace("../");
    // Redirige al usuario a la página de inicio de sesión u otra página apropiada
    // window.location.href = '/inicio-de-sesion'; // Reemplaza con la URL de inicio de sesión
  };
  const checkTokenValidity = () => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      // Realiza una solicitud al servidor para validar el token, si es necesario.
      // Puedes usar la misma ruta del servidor para validar el token.

      // Si el token es válido, redirige al usuario a la página deseada.
      router.replace("../");
    }
  };

  return (
    <div className="flex items-center justify-center mt-3 ml-5 mr-5">
      <div className="max-w-12 w-full">
        <div className="min-h-screen">
          <button
            onClick={cerrarSesion}
            className="group relative w-full flex justify-center py-3 px-4 
            border border-transparent 
            text-sm font-medium rounded-md text-white
             bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-2 
             focus:ring-offset-2 focus:ring-indigo-500 rounded"
          >
            Cerrar Sesión
          </button>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
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
