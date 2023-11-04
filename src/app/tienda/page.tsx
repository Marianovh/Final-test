"use client";
import React, { useState, useEffect } from "react";
import Productos from "../productos/productos";
import Carrito from "../carrito/carrito";
import { useRouter } from "next/navigation";
import axios from "axios";
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

interface CartItem {
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

function Tienda() {
  const router = useRouter();
  // Resto del código que utiliza localStorage

  const [q, setq] = useState<number>(0);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [selectedmarca, setSelectedmarca] = useState<string>(
    "Todas las categorías"
  );
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Realiza una solicitud a la API y carga los productos en productos
    // Ajusta la URL de la API según tu caso
    const apiUrl = "https://api-2-xgyd.onrender.com/api/productos";
    // const apiUrl = "http://localhost:3000/api/productos";
    const token = localStorage.getItem("token");

    const fetchProducts = async () => {
      try {
        const headers: { [key: string]: string } = {
          "Content-Type": "application/json",
        };

        if (token) {
          headers.token = token;
        }

        // Utiliza Axios en lugar de fetch
        const response = await axios.get(apiUrl, { headers });

        if (response.status !== 200) {
          throw new Error("Error al cargar productos desde la API");
        }

        const data = response.data;
        setProducts(data.productos);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.ID === product.ID);
    if (existingItem) {
      existingItem.cantidad += 1;
      setCart([...cart]);
    } else {
      const newProduct = { ...product, cantidad: 1 };
      setCart([...cart, newProduct]);
    }

    setq(q + 1);
    setTotal(total + product.preciodescuento);
  };

  const removeFromCart = (product: CartItem) => {
    const existingItem = cart.find((item) => item.ID === product.ID);

    if (existingItem) {
      if (existingItem.cantidad > 1) {
        existingItem.cantidad -= 1;
      } else if (existingItem.cantidad < 1) {
        setTotal(0);
      } else {
        const updatedCart = cart.filter((item) => item.ID !== product.ID);
        setCart(updatedCart);
      }
      setq(q - 1);
      setTotal(total - product.preciodescuento);
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Función para cambiar la categoría seleccionada
  const handleCategoryChange = (marca: string) => {
    setSelectedmarca(marca);
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
      router.replace("../");
    }
  };
  return (
    <>
      <div className=" min-h-screen">
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
        <div className="p-4">
          <div className="text-white font-bold text-2xl">
            <center>Tienda</center>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-2/3">
              <select
                className="p-2 bg-white rounded"
                value={selectedmarca}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="Todas las categorías">
                  Todas las categorías
                </option>
                <option value="CORSAIR">CORSAIR</option>
                <option value="ASUS">ASUS</option>
                <option value="LOGITECH">LOGITECH</option>
              </select>
            </div>
            <div className="w-1/3 text-right">
              <button
                className="bg-yellow-500 text-white px-3 py-2 rounded"
                onClick={handleShow}
              >
                <b>Carrito: {q}</b>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {products
            .filter(
              (product) =>
                selectedmarca === "Todas las categorías" ||
                product.marca === selectedmarca
            )
            .map((product) => (
              <Productos
                key={product.ID}
                {...product}
                onAddToCart={() => addToCart(product)}
              />
            ))}
        </div>
      </div>

      <div className="w-full w-min">
        {show && (
          <div className="fixed inset-0 flex items-center justify-center z-50  ">
            <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div className="relative w-1/4 bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center ">
                <h2 className="text-xl font-semibold">Compras</h2>
                <button
                  className="text-gray-500 hover:text-red-500"
                  onClick={handleClose}
                >
                  X
                </button>
              </div>
              <div className="mt-4">
                <Carrito
                  items={cart}
                  total={total}
                  onRemoveFromCart={removeFromCart}
                />
                <button>Pagar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Tienda;
